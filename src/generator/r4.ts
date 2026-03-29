import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
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
	$ref?: string;
	type?: string;
	enum?: string[];
	pattern?: string;
	properties?: Record<string, JsonSchema>;
	required?: string[];
	items?: JsonSchema;
	description?: string;
};

type LoadedDefinition = {
	name: string;
	schema: JsonSchema;
	structureDefinitionPath: string | null;
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
	packageRoot: string;
	targetNames: Set<string>;
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

function loadOpenApiDefinition(
	packageRoot: string,
	name: string,
): LoadedDefinition {
	const openApiPath = join(packageRoot, "openapi", `${name}.schema.json`);
	const structureDefinitionPath = join(
		packageRoot,
		`StructureDefinition-${name}.json`,
	);
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
		structureDefinitionPath,
	};
}

function collectDefinitions(
	packageRoot: string,
): Map<string, LoadedDefinition> {
	return new Map(
		targetNames.map((name) => [name, loadOpenApiDefinition(packageRoot, name)]),
	);
}

function resolveRefName(ref: string): string {
	const match = /\/definitions\/([^/]+)$/.exec(ref);

	if (!match) {
		throw new Error(`Unsupported $ref format: ${ref}`);
	}

	return match[1];
}

function flattenSchema(
	name: string,
	context: EmitContext,
	seen = new Set<string>(),
): JsonSchema[] {
	if (seen.has(name)) {
		return [];
	}

	seen.add(name);

	const loaded = getDefinition(name, context);

	return flattenSchemaParts(loaded.schema, context, seen);
}

function getDefinition(name: string, context: EmitContext): LoadedDefinition {
	const existing = context.definitions.get(name);

	if (existing) {
		return existing;
	}

	const loaded = loadOpenApiDefinition(context.packageRoot, name);
	context.definitions.set(name, loaded);
	return loaded;
}

function flattenSchemaParts(
	schema: JsonSchema,
	context: EmitContext,
	seen: Set<string>,
): JsonSchema[] {
	if (schema.allOf) {
		return schema.allOf.flatMap((part) => {
			if (part.$ref) {
				return flattenSchema(resolveRefName(part.$ref), context, seen);
			}

			return flattenSchemaParts(part, context, seen);
		});
	}

	if (schema.$ref) {
		return flattenSchema(resolveRefName(schema.$ref), context, seen);
	}

	return [schema];
}

function canEmitSchema(schema: JsonSchema, context: EmitContext): boolean {
	if (schema.$ref) {
		return context.targetNames.has(resolveRefName(schema.$ref));
	}

	if (schema.allOf) {
		return schema.allOf.every((part) => canEmitSchema(part, context));
	}

	if (schema.enum && schema.type === "string") {
		return true;
	}

	if (schema.type === "array") {
		return schema.items ? canEmitSchema(schema.items, context) : false;
	}

	return (
		schema.type === "boolean" ||
		schema.type === "number" ||
		schema.type === "string"
	);
}

function emitSchemaExpression(
	schema: JsonSchema,
	context: EmitContext,
): string {
	if (schema.$ref) {
		return resolveRefName(schema.$ref);
	}

	if (schema.allOf) {
		const supportedParts = schema.allOf.filter((part) =>
			canEmitSchema(part, context),
		);

		if (supportedParts.length !== 1) {
			throw new Error(
				`Expected a single supported allOf branch, received ${supportedParts.length}.`,
			);
		}

		return emitSchemaExpression(supportedParts[0], context);
	}

	if (schema.enum && schema.type === "string") {
		return `z.enum([${schema.enum.map((value) => JSON.stringify(value)).join(", ")}])`;
	}

	if (schema.type === "array") {
		if (!schema.items) {
			throw new Error("Array schema is missing items.");
		}

		return `${emitSchemaExpression(schema.items, context)}.array()`;
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

	throw new Error(`Unsupported schema node: ${JSON.stringify(schema)}`);
}

function emitDefinition(name: string, context: EmitContext): EmittedDefinition {
	const parts = flattenSchema(name, context);
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
	const omittedProperties: string[] = [];
	const imports = new Set<string>();

	for (const [fieldName, fieldSchema] of [...propertyMap.entries()].sort(
		([a], [b]) => a.localeCompare(b),
	)) {
		if (!canEmitSchema(fieldSchema, context)) {
			omittedProperties.push(fieldName);
			continue;
		}

		const expression = emitSchemaExpression(fieldSchema, context);
		const refName = fieldSchema.$ref ? resolveRefName(fieldSchema.$ref) : null;
		const itemRefName =
			fieldSchema.type === "array" && fieldSchema.items?.$ref
				? resolveRefName(fieldSchema.items.$ref)
				: null;

		if (refName && refName !== name) {
			imports.add(refName);
		}

		if (itemRefName && itemRefName !== name) {
			imports.add(itemRefName);
		}

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

	if (omittedProperties.length > 0) {
		headerLines.push(
			`// Omitted unresolved properties for this initial slice: ${omittedProperties.join(", ")}.`,
		);
	}

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
		omittedProperties,
	};
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
	execFileSync("npx", ["biome", "format", "--write", ...files], {
		cwd: repoRoot,
		stdio: "ignore",
	});
}

export function buildR4Files(): BuiltFile[] {
	const manifest = loadManifest("r4");
	const packageRoot = resolve(repoRoot, manifest.packageRoot);
	const outputDir = join(repoRoot, "src", "r4");
	const definitions = collectDefinitions(packageRoot);
	const context: EmitContext = {
		definitions,
		packageRoot,
		targetNames: new Set(targetNames),
	};

	mkdirSync(outputDir, { recursive: true });

	const emittedDefinitions = targetNames
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

export function generateR4(): GenerationResult {
	const builtFiles = buildR4Files();

	for (const file of builtFiles) {
		writeFileIfChanged(file.path, file.content);
	}

	formatGeneratedFiles(builtFiles.map((file) => file.path));

	return { files: builtFiles.map((file) => file.path) };
}
