import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type SpecManifest = {
	fhirVersion: string;
	packageName: string;
	packageVersion: string;
	sourceUrl: string;
	packageRoot: string;
	structureDefinitionGlob: string;
};

type JsonSchema = {
	allOf?: JsonSchema[];
	anyOf?: JsonSchema[];
	$ref?: string;
	type?: string;
	enum?: string[];
	oneOf?: JsonSchema[];
	pattern?: string;
	properties?: Record<string, JsonSchema>;
	required?: string[];
	items?: JsonSchema;
	description?: string;
};

type LoadedDefinition = {
	name: string;
	schema: JsonSchema;
	sourceStem: string;
};

type GenerationResult = {
	files: string[];
};

type BuiltFile = {
	content: string;
	path: string;
};

type EmitContext = {
	definitions: Map<string, LoadedDefinition>;
	definitionSources: Map<string, string>;
	packageRoot: string;
};

type EmittedProperty = {
	name: string;
	expression: string;
};

type EmittedDefinition = {
	name: string;
	content: string;
	imports: string[];
	omittedProperties: string[];
};

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "../..");
const targetNames = [
	"CodeableConcept",
	"Coding",
	"HumanName",
	"Identifier",
	"Patient",
] as const;

function loadManifest(version: "r4"): SpecManifest {
	const manifestPath = join(repoRoot, "src", "spec", version, "manifest.json");
	return JSON.parse(readFileSync(manifestPath, "utf8")) as SpecManifest;
}

function buildDefinitionSources(packageRoot: string): Map<string, string> {
	const openApiDir = join(packageRoot, "openapi");
	const definitionSources = new Map<string, string>();

	for (const filename of readdirSync(openApiDir)) {
		if (!filename.endsWith(".schema.json")) {
			continue;
		}

		const sourceStem = basename(filename, ".schema.json");
		const document = JSON.parse(
			readFileSync(join(openApiDir, filename), "utf8"),
		) as {
			definitions?: Record<string, JsonSchema>;
		};

		for (const definitionName of Object.keys(document.definitions ?? {})) {
			const existing = definitionSources.get(definitionName);
			const nextScore = scoreDefinitionSource(definitionName, sourceStem);
			const existingScore = existing
				? scoreDefinitionSource(definitionName, existing)
				: -1;

			if (!existing || nextScore >= existingScore) {
				definitionSources.set(definitionName, sourceStem);
			}
		}
	}

	return definitionSources;
}

function scoreDefinitionSource(
	definitionName: string,
	sourceStem: string,
): number {
	if (sourceStem === definitionName) {
		return 3;
	}

	if (definitionName.startsWith(`${sourceStem}_`)) {
		return 2;
	}

	if (sourceStem === "fhir") {
		return 0;
	}

	return 1;
}

function loadOpenApiDefinition(
	packageRoot: string,
	name: string,
	sourceStem: string,
): LoadedDefinition {
	const openApiPath = join(packageRoot, "openapi", `${sourceStem}.schema.json`);
	const document = JSON.parse(readFileSync(openApiPath, "utf8")) as {
		definitions: Record<string, JsonSchema>;
	};

	const schema = document.definitions[name];

	if (!schema) {
		throw new Error(`Missing OpenAPI definition "${name}" in ${openApiPath}.`);
	}

	return {
		name,
		schema,
		sourceStem,
	};
}

function resolveRefTarget(
	ref: string,
	currentSourceStem: string,
): { name: string; sourceStem: string } {
	const localMatch = /^#\/definitions\/([^/]+)$/.exec(ref);

	if (localMatch) {
		return {
			name: localMatch[1],
			sourceStem: currentSourceStem,
		};
	}

	const externalMatch = /^([^#]+)#\/definitions\/([^/]+)$/.exec(ref);

	if (!externalMatch) {
		throw new Error(`Unsupported $ref format: ${ref}`);
	}

	const rawSourceStem = externalMatch[1].replace(/\.schema\.json$/, "");

	return {
		name: externalMatch[2],
		sourceStem: rawSourceStem,
	};
}

function flattenSchema(
	name: string,
	context: EmitContext,
	sourceStem?: string,
	seen = new Set<string>(),
): JsonSchema[] {
	if (seen.has(name)) {
		return [];
	}

	seen.add(name);

	const loaded = getDefinition(name, context, sourceStem);

	return flattenSchemaParts(loaded.schema, context, loaded.sourceStem, seen);
}

function getDefinition(
	name: string,
	context: EmitContext,
	sourceStem?: string,
): LoadedDefinition {
	const existing = context.definitions.get(name);

	if (existing) {
		return existing;
	}

	const resolvedSourceStem = sourceStem ?? context.definitionSources.get(name);

	if (!resolvedSourceStem) {
		throw new Error(`Unable to locate OpenAPI definition "${name}".`);
	}

	const loaded = loadOpenApiDefinition(
		context.packageRoot,
		name,
		resolvedSourceStem,
	);
	context.definitions.set(name, loaded);
	return loaded;
}

function flattenSchemaParts(
	schema: JsonSchema,
	context: EmitContext,
	currentSourceStem: string,
	seen: Set<string>,
): JsonSchema[] {
	if (schema.allOf) {
		return schema.allOf.flatMap((part) => {
			if (part.$ref) {
				const refTarget = resolveRefTarget(part.$ref, currentSourceStem);
				return flattenSchema(
					refTarget.name,
					context,
					refTarget.sourceStem,
					seen,
				);
			}

			return flattenSchemaParts(part, context, currentSourceStem, seen);
		});
	}

	if (schema.$ref) {
		const refTarget = resolveRefTarget(schema.$ref, currentSourceStem);
		return flattenSchema(refTarget.name, context, refTarget.sourceStem, seen);
	}

	return [schema];
}

function emitSchemaExpression(
	schema: JsonSchema,
	context: EmitContext,
	currentSourceStem: string,
): string {
	if (schema.$ref) {
		const refTarget = resolveRefTarget(schema.$ref, currentSourceStem);

		if (refTarget.name === "ResourceList") {
			return "z.unknown()";
		}

		getDefinition(refTarget.name, context, refTarget.sourceStem);
		return `z.lazy(() => ${refTarget.name})`;
	}

	if (schema.allOf) {
		return "z.unknown()";
	}

	if (schema.enum && schema.type === "string") {
		return `z.enum([${schema.enum.map((value) => JSON.stringify(value)).join(", ")}])`;
	}

	if (schema.type === "array") {
		if (!schema.items) {
			return "z.unknown().array()";
		}

		return `${emitSchemaExpression(schema.items, context, currentSourceStem)}.array()`;
	}

	if (schema.type === "boolean") {
		return "z.boolean()";
	}

	if (schema.type === "number") {
		return "z.number()";
	}

	if (schema.type === "string") {
		if (schema.pattern) {
			return `z.string().regex(${toRegexLiteral(schema.pattern)})`;
		}

		return "z.string()";
	}

	return "z.unknown()";
}

function collectReferencedDefinitions(
	schema: JsonSchema,
	context: EmitContext,
	currentSourceStem: string,
	seen = new Set<string>(),
): void {
	if (schema.$ref) {
		const refTarget = resolveRefTarget(schema.$ref, currentSourceStem);

		if (refTarget.name === "ResourceList" || seen.has(refTarget.name)) {
			return;
		}

		seen.add(refTarget.name);
		const loaded = getDefinition(refTarget.name, context, refTarget.sourceStem);
		collectReferencedDefinitions(
			loaded.schema,
			context,
			loaded.sourceStem,
			seen,
		);
		return;
	}

	for (const part of schema.allOf ?? []) {
		collectReferencedDefinitions(part, context, currentSourceStem, seen);
	}

	for (const part of schema.anyOf ?? []) {
		collectReferencedDefinitions(part, context, currentSourceStem, seen);
	}

	for (const part of schema.oneOf ?? []) {
		collectReferencedDefinitions(part, context, currentSourceStem, seen);
	}

	if (schema.items) {
		collectReferencedDefinitions(
			schema.items,
			context,
			currentSourceStem,
			seen,
		);
	}

	for (const property of Object.values(schema.properties ?? {})) {
		collectReferencedDefinitions(property, context, currentSourceStem, seen);
	}
}

function collectImports(
	schema: JsonSchema,
	currentName: string,
	currentSourceStem: string,
	imports: Set<string>,
): void {
	if (schema.$ref) {
		const refTarget = resolveRefTarget(schema.$ref, currentSourceStem);

		if (refTarget.name !== "ResourceList" && refTarget.name !== currentName) {
			imports.add(refTarget.name);
		}

		return;
	}

	for (const part of schema.allOf ?? []) {
		collectImports(part, currentName, currentSourceStem, imports);
	}

	for (const part of schema.anyOf ?? []) {
		collectImports(part, currentName, currentSourceStem, imports);
	}

	for (const part of schema.oneOf ?? []) {
		collectImports(part, currentName, currentSourceStem, imports);
	}

	if (schema.items) {
		collectImports(schema.items, currentName, currentSourceStem, imports);
	}

	for (const property of Object.values(schema.properties ?? {})) {
		collectImports(property, currentName, currentSourceStem, imports);
	}
}

function emitDefinition(name: string, context: EmitContext): EmittedDefinition {
	const loaded = getDefinition(name, context);
	const directExpression = emitDirectDefinitionExpression(loaded, context);

	if (directExpression) {
		const imports = new Set<string>();
		collectImports(loaded.schema, name, loaded.sourceStem, imports);
		const importLines = [
			'import * as z from "zod";',
			...[...imports].sort().map((importName) => {
				return `import { ${importName} } from "./${importName}";`;
			}),
		];
		const content = [
			"// Generated by scripts/generate.ts.",
			"// Source: HL7 FHIR R4 OpenAPI schema from the pinned spec manifest.",
			...importLines,
			"",
			`export const ${name} = ${directExpression};`,
			"",
		].join("\n");

		return {
			name,
			content,
			imports: [...imports].sort(),
			omittedProperties: [],
		};
	}

	const parts = flattenSchema(name, context, loaded.sourceStem);
	const propertyMap = new Map<string, JsonSchema>();
	const required = new Set<string>();

	for (const part of parts) {
		for (const fieldName of part.required ?? []) {
			required.add(fieldName);
		}

		for (const [fieldName, fieldSchema] of Object.entries(
			part.properties ?? {},
		)) {
			propertyMap.set(fieldName, fieldSchema);
		}
	}

	const emittedProperties: EmittedProperty[] = [];
	const imports = new Set<string>();

	for (const [fieldName, fieldSchema] of [...propertyMap.entries()].sort(
		([a], [b]) => a.localeCompare(b),
	)) {
		const expression = emitSchemaExpression(
			fieldSchema,
			context,
			loaded.sourceStem,
		);

		collectImports(fieldSchema, name, loaded.sourceStem, imports);

		emittedProperties.push({
			name: fieldName,
			expression: required.has(fieldName)
				? expression
				: `${expression}.optional()`,
		});
	}

	const headerLines = [
		"// Generated by scripts/generate.ts.",
		"// Source: HL7 FHIR R4 OpenAPI schema from the pinned spec manifest.",
	];

	const importLines = [
		'import * as z from "zod";',
		...[...imports].sort().map((importName) => {
			return `import { ${importName} } from "./${importName}";`;
		}),
	];

	const content = [
		...headerLines,
		...importLines,
		"",
		`export const ${name} = z.object({`,
		...emittedProperties.map(
			(property) => `\t${property.name}: ${property.expression},`,
		),
		"});",
		"",
	].join("\n");

	return {
		name,
		content,
		imports: [...imports].sort(),
		omittedProperties: [],
	};
}

function emitDirectDefinitionExpression(
	loaded: LoadedDefinition,
	context: EmitContext,
): string | null {
	const schema = loaded.schema;

	if (schema.properties || schema.allOf) {
		return null;
	}

	return emitSchemaExpression(schema, context, loaded.sourceStem);
}

function writeFileIfChanged(path: string, content: string): void {
	const existing = readFileSyncSafe(path);

	if (existing === content) {
		return;
	}

	writeFileSync(path, content, "utf8");
}

function readFileSyncSafe(path: string): string | null {
	try {
		return readFileSync(path, "utf8");
	} catch {
		return null;
	}
}

function toRegexLiteral(pattern: string): string {
	const escapedPattern = pattern.replaceAll("/", "\\/");
	let normalized = "";
	let inCharacterClass = false;

	for (let index = 0; index < escapedPattern.length; index += 1) {
		const current = escapedPattern[index];
		const next = escapedPattern[index + 1];

		if (current === "[" && !inCharacterClass) {
			inCharacterClass = true;
			normalized += current;
			continue;
		}

		if (current === "]" && inCharacterClass) {
			inCharacterClass = false;
			normalized += current;
			continue;
		}

		if (inCharacterClass && current === "\\" && next === ".") {
			normalized += ".";
			index += 1;
			continue;
		}

		normalized += current;
	}

	return `/${normalized}/`;
}

function formatGeneratedFiles(files: string[]): void {
	const repoTrackedFiles = files.filter((file) => !file.includes("/.context/"));

	if (repoTrackedFiles.length === 0) {
		return;
	}

	execFileSync("npx", ["biome", "format", "--write", ...repoTrackedFiles], {
		cwd: repoRoot,
		stdio: "ignore",
	});
}

export function buildR4OpenApiFiles(): BuiltFile[] {
	const manifest = loadManifest("r4");
	const packageRoot = resolve(repoRoot, manifest.packageRoot);
	const outputDir = join(repoRoot, ".context", "generated", "r4-openapi");
	const context: EmitContext = {
		definitions: new Map(),
		definitionSources: buildDefinitionSources(packageRoot),
		packageRoot,
	};

	mkdirSync(outputDir, { recursive: true });

	for (const name of targetNames) {
		const loaded = getDefinition(name, context);
		collectReferencedDefinitions(loaded.schema, context, loaded.sourceStem);
	}

	const emittedDefinitions = [...context.definitions.keys()]
		.map((name) => emitDefinition(name, context))
		.sort((a, b) => a.name.localeCompare(b.name));

	const files: BuiltFile[] = [];

	for (const definition of emittedDefinitions) {
		const outputPath = join(outputDir, `${definition.name}.ts`);
		files.push({
			path: outputPath,
			content: definition.content,
		});
	}

	const indexContent = emittedDefinitions
		.map(
			(definition) =>
				`export { ${definition.name} } from "./${definition.name}";`,
		)
		.join("\n")
		.concat("\n");
	const indexPath = join(outputDir, "index.ts");
	files.push({
		path: indexPath,
		content: indexContent,
	});

	return files;
}

export function generateR4OpenApi(): GenerationResult {
	const builtFiles = buildR4OpenApiFiles();

	for (const file of builtFiles) {
		writeFileIfChanged(file.path, file.content);
	}

	formatGeneratedFiles(builtFiles.map((file) => file.path));

	return { files: builtFiles.map((file) => file.path) };
}
