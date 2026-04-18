import { execFileSync } from "node:child_process";
import {
	mkdirSync,
	mkdtempSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, relative, resolve, sep } from "node:path";
import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation.ts";
import {
	fhirBase64Binary,
	fhirCanonical,
	fhirCode,
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirInteger64,
	fhirOid,
	fhirString,
	fhirTime,
	fhirUri,
	fhirUrl,
	fhirUuid,
} from "../../shared/fhir-primitives.ts";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation.ts";
import type { NormalizedDefinition, NormalizedProperty } from "../model.ts";
import {
	primitiveRuntimeKind,
	schemaExportName,
	schemaInternalName,
	sortDefinitions,
} from "../model.ts";
import { repoRoot } from "../shared.ts";

type BuiltFile = {
	content: string;
	path: string;
};

export type GeneratedLayoutOptions = {
	folderedResourceFamilies?: readonly string[];
};

type EmitLayout = {
	definitionFilePath: (name: string) => string;
	definitionImportPath: (fromFilePath: string, name: string) => string;
	definitionInternalImportPath: (fromFilePath: string, name: string) => string;
	folderIndexFilePath: (familyName: string) => string;
	folderedFamilyName: (name: string) => string | null;
	folderedResourceFamilies: readonly string[];
	importPath: (fromFilePath: string, toFilePath: string) => string;
	isFolderedDefinition: (name: string) => boolean;
	outputDir: string;
};

type ChoiceGroup = {
	choiceGroup: string;
	fields: string[];
	requiresValue: boolean;
};

type PrimitiveArrayPair = {
	elementField: string;
	valueField: string;
};

const fhirResourceHelperName = "getFhirResourceSchema";

export function buildRuntimeSchemas(
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
	options: { enableFhirResourceValidation?: boolean } = {},
): Record<string, z.ZodTypeAny> {
	const runtimeSchemas: Record<string, z.ZodTypeAny> = {};
	const enableFhirResourceValidation =
		options.enableFhirResourceValidation ?? false;

	for (const definition of sortDefinitions(definitions.values())) {
		const schema = z
			.object(
				Object.fromEntries(
					definition.properties.map((property) => [
						property.jsonName,
						buildRuntimePropertySchema(
							definition,
							property,
							definitions,
							primitivePatterns,
							runtimeSchemas,
							enableFhirResourceValidation,
						),
					]),
				),
			)
			.strict();

		runtimeSchemas[definition.name] = applyChoiceGroupRefinement(
			schema,
			definition,
		);
	}

	return runtimeSchemas;
}

export function writeNormalizedZodDefinitions(options: {
	definitions: Map<string, NormalizedDefinition>;
	enableFhirResourceValidation?: boolean;
	folderedResourceFamilies?: readonly string[];
	generatedAt: string;
	outputDir: string;
	prune?: boolean;
	primitivePatterns: Map<string, string>;
}): string[] {
	const files = formatBuiltFiles(buildNormalizedZodFiles(options));

	for (const file of files) {
		mkdirSync(dirname(file.path), { recursive: true });
		writeFileIfChanged(file.path, file.content);
	}

	if (options.prune ?? true) {
		pruneGeneratedFiles(
			options.outputDir,
			files.map((file) => file.path),
		);
	}

	return files.map((file) => file.path);
}

function formatBuiltFiles(files: BuiltFile[]): BuiltFile[] {
	if (files.length === 0) {
		return files;
	}

	const stagingDir = mkdtempSync(join(tmpdir(), "fhir-zod-format-"));

	try {
		const stagedPaths = files.map((file, index) => {
			const stagedPath = join(stagingDir, String(index), basename(file.path));
			mkdirSync(dirname(stagedPath), { recursive: true });
			writeFileSync(stagedPath, file.content, "utf8");
			return stagedPath;
		});

		execFileSync(
			"npx",
			["biome", "format", "--indent-style=space", "--write", ...stagedPaths],
			{
				cwd: repoRoot,
				stdio: "inherit",
			},
		);
		execFileSync(
			"npx",
			["biome", "check", "--indent-style=space", "--write", ...stagedPaths],
			{
				cwd: repoRoot,
				stdio: "inherit",
			},
		);

		return files.map((file, index) => {
			const stagedPath = join(stagingDir, String(index), basename(file.path));
			return {
				content: readFileSync(stagedPath, "utf8"),
				path: file.path,
			};
		});
	} finally {
		rmSync(stagingDir, { recursive: true, force: true });
	}
}

function buildNormalizedZodFiles(options: {
	definitions: Map<string, NormalizedDefinition>;
	enableFhirResourceValidation?: boolean;
	folderedResourceFamilies?: readonly string[];
	generatedAt: string;
	outputDir: string;
	primitivePatterns: Map<string, string>;
}): BuiltFile[] {
	const enableFhirResourceValidation =
		options.enableFhirResourceValidation ?? false;
	const layout = createEmitLayout({
		folderedResourceFamilies: options.folderedResourceFamilies,
		outputDir: options.outputDir,
	});
	const builtFiles = sortDefinitions(options.definitions.values()).map(
		(definition) => {
			const filePath = layout.definitionFilePath(definition.name);

			return {
				content: emitDefinitionFile(
					definition,
					options.definitions,
					options.generatedAt,
					options.primitivePatterns,
					filePath,
					layout,
					enableFhirResourceValidation,
				),
				path: filePath,
			};
		},
	);

	const releaseLabel =
		sortDefinitions(options.definitions.values())[0]?.sourceMetadata
			.releaseLabel ?? null;

	const publicRootDefinitions = sortDefinitions(
		options.definitions.values(),
	).filter((definition) => !layout.isFolderedDefinition(definition.name));

	builtFiles.push({
		content: [
			...buildGeneratedHeader({
				generatedAt: options.generatedAt,
				releaseLabel,
			}),
			...publicRootDefinitions.flatMap((definition) => [
				`export type { ${definition.name} } from ${JSON.stringify(layout.definitionImportPath(join(options.outputDir, "index.ts"), definition.name))};`,
				`export { ${schemaExportName(definition.name)} } from ${JSON.stringify(layout.definitionImportPath(join(options.outputDir, "index.ts"), definition.name))};`,
			]),
			"",
		].join("\n"),
		path: join(options.outputDir, "index.ts"),
	});

	for (const familyName of layout.folderedResourceFamilies) {
		const familyDefinitions = sortDefinitions(
			options.definitions.values(),
		).filter(
			(definition) => layout.folderedFamilyName(definition.name) === familyName,
		);

		if (familyDefinitions.length === 0) {
			continue;
		}

		builtFiles.push({
			content: emitFolderIndexFile({
				definitions: familyDefinitions,
				familyName,
				generatedAt: options.generatedAt,
				layout,
				releaseLabel,
			}),
			path: layout.folderIndexFilePath(familyName),
		});
	}

	if (enableFhirResourceValidation) {
		builtFiles.push({
			content: emitFhirResourceSchemaFile({
				definitions: options.definitions,
				generatedAt: options.generatedAt,
				layout,
				releaseLabel,
			}),
			path: join(options.outputDir, "_fhirResourceSchema.ts"),
		});
	}

	return builtFiles;
}

function createEmitLayout(options: {
	folderedResourceFamilies?: readonly string[];
	outputDir: string;
}): EmitLayout {
	const outputDir = resolve(options.outputDir);
	const folderedResourceFamilies = [
		...(options.folderedResourceFamilies ?? []),
	].sort((left, right) => left.localeCompare(right));
	const folderedResourceFamilySet = new Set(folderedResourceFamilies);

	const folderedFamilyName = (name: string): string | null => {
		for (const familyName of folderedResourceFamilies) {
			if (name === familyName || name.startsWith(`${familyName}_`)) {
				return familyName;
			}
		}

		return null;
	};
	const definitionFilePath = (name: string): string => {
		const familyName = folderedFamilyName(name);

		return familyName
			? join(outputDir, familyName, `${name}.ts`)
			: join(outputDir, `${name}.ts`);
	};
	const folderIndexFilePath = (familyName: string): string =>
		join(outputDir, familyName, "index.ts");
	const importPath = (fromFilePath: string, toFilePath: string): string => {
		const importPath = relative(
			dirname(fromFilePath),
			toFilePath.replace(/\.ts$/, ""),
		)
			.split(sep)
			.join("/");

		return importPath.startsWith(".") ? importPath : `./${importPath}`;
	};
	const definitionImportPath = (fromFilePath: string, name: string): string => {
		const familyName = folderedFamilyName(name);
		const fromFamilyName = folderedFamilyName(basename(fromFilePath, ".ts"));

		if (
			familyName &&
			(familyName !== fromFamilyName ||
				fromFilePath === folderIndexFilePath(familyName))
		) {
			return importPath(fromFilePath, join(outputDir, familyName));
		}

		return importPath(fromFilePath, definitionFilePath(name));
	};
	const definitionInternalImportPath = (
		fromFilePath: string,
		name: string,
	): string => importPath(fromFilePath, definitionFilePath(name));

	return {
		definitionFilePath,
		definitionImportPath,
		definitionInternalImportPath,
		folderIndexFilePath: (familyName: string) => {
			if (!folderedResourceFamilySet.has(familyName)) {
				throw new Error(`Unknown foldered resource family "${familyName}".`);
			}

			return folderIndexFilePath(familyName);
		},
		folderedFamilyName,
		folderedResourceFamilies,
		importPath,
		isFolderedDefinition: (name: string) => folderedFamilyName(name) !== null,
		outputDir,
	};
}

function collectConcreteResourceDefinitions(
	definitions: Map<string, NormalizedDefinition>,
): NormalizedDefinition[] {
	return sortDefinitions(definitions.values()).filter(
		(definition) => definition.resourceTypeLiteral !== null,
	);
}

function emitFolderIndexFile(options: {
	definitions: NormalizedDefinition[];
	familyName: string;
	generatedAt: string;
	layout: EmitLayout;
	releaseLabel: string | null;
}): string {
	const filePath = options.layout.folderIndexFilePath(options.familyName);

	return [
		...buildGeneratedHeader({
			generatedAt: options.generatedAt,
			releaseLabel: options.releaseLabel,
		}),
		...options.definitions.flatMap((definition) => [
			`export type { ${definition.name} } from ${JSON.stringify(options.layout.definitionInternalImportPath(filePath, definition.name))};`,
			`export { ${schemaExportName(definition.name)} } from ${JSON.stringify(options.layout.definitionInternalImportPath(filePath, definition.name))};`,
		]),
		"",
	].join("\n");
}

function emitFhirResourceSchemaFile(options: {
	definitions: Map<string, NormalizedDefinition>;
	generatedAt: string;
	layout: EmitLayout;
	releaseLabel: string | null;
}): string {
	const resources = collectConcreteResourceDefinitions(options.definitions);
	const names = resources.map((definition) => definition.name);
	const filePath = join(options.layout.outputDir, "_fhirResourceSchema.ts");
	const resourceType = names.length > 0 ? names.join(" | ") : "never";

	return [
		...buildGeneratedHeader({
			generatedAt: options.generatedAt,
			releaseLabel: options.releaseLabel,
		}),
		'import * as z from "zod";',
		...names.map(
			(name) =>
				`import type { ${name} } from ${JSON.stringify(options.layout.definitionInternalImportPath(filePath, name))};`,
		),
		...names.map(
			(name) =>
				`import { ${schemaInternalName(name)} } from ${JSON.stringify(options.layout.definitionInternalImportPath(filePath, name))};`,
		),
		"",
		`export type FhirResource = ${resourceType};`,
		"",
		"let resourceSchemas: Readonly<Record<string, z.ZodTypeAny>> | null = null;",
		"",
		"function getResourceSchemas(): Readonly<Record<string, z.ZodTypeAny>> {",
		"  resourceSchemas ??= {",
		...resources.map(
			(resource) =>
				`    ${JSON.stringify(resource.resourceTypeLiteral)}: ${schemaInternalName(resource.name)},`,
		),
		"  };",
		"",
		"  return resourceSchemas;",
		"}",
		"",
		"/** @internal */",
		"export const FhirResourceSchemaInternal = z.lazy(",
		"  (): z.ZodType<FhirResource> =>",
		"    z",
		"      .any()",
		"      .superRefine((value, ctx) => {",
		'        if (typeof value !== "object" || value === null) {',
		"          ctx.addIssue({",
		"            code: z.ZodIssueCode.custom,",
		'            message: "Expected a FHIR resource object",',
		"          });",
		"          return;",
		"        }",
		"        const resourceType = (value as { resourceType?: unknown })",
		"          .resourceType;",
		'        if (typeof resourceType !== "string") {',
		"          ctx.addIssue({",
		"            code: z.ZodIssueCode.custom,",
		'            message: "Missing or non-string resourceType",',
		'            path: ["resourceType"],',
		"          });",
		"          return;",
		"        }",
		"        const schema = getResourceSchemas()[resourceType];",
		"        if (!schema) {",
		"          ctx.addIssue({",
		"            code: z.ZodIssueCode.custom,",
		"            message: `Unknown FHIR resourceType: ${resourceType}`,",
		'            path: ["resourceType"],',
		"          });",
		"          return;",
		"        }",
		"        const result = schema.safeParse(value);",
		"        if (!result.success) {",
		"          for (const issue of result.error.issues) {",
		"            ctx.addIssue(issue as never);",
		"          }",
		"        }",
		"      }) as unknown as z.ZodType<FhirResource>,",
		");",
		"",
	].join("\n");
}

function emitDefinitionFile(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
	generatedAt: string,
	primitivePatterns: Map<string, string>,
	filePath: string,
	layout: EmitLayout,
	enableFhirResourceValidation: boolean,
): string {
	const modelBaseName = resolveModelBaseName(definition, definitions);
	const runtimeShouldExtend = shouldExtendDefinition(
		definition,
		definitions,
		enableFhirResourceValidation,
	);
	const modelProperties = modelBaseName
		? getDirectProperties(definition, definitions)
		: definition.properties;
	const runtimeProperties = runtimeShouldExtend
		? getDirectProperties(definition, definitions)
		: definition.properties;
	const usesFhirResource =
		enableFhirResourceValidation &&
		[...modelProperties, ...runtimeProperties].some(
			(property) => property.typeRef === "Resource",
		);
	const typeImports = new Set<string>();
	const valueImports = new Set<string>();
	const helperImports = new Set<string>();
	const primitiveArrayImports = new Set<string>();
	const referenceImports = new Set<string>();
	const lazySchemaHelpers = new Set<string>();
	const primitiveArrayPairs = collectPrimitiveArrayPairs(definition);
	const referenceConstraints = collectReferenceConstraints(definition);
	const runtimeBaseDefinition = resolveRuntimeBaseDefinition(
		definition,
		definitions,
		runtimeShouldExtend,
	);

	if (modelBaseName) {
		typeImports.add(modelBaseName);
	}

	if (runtimeBaseDefinition) {
		valueImports.add(runtimeBaseDefinition.name);
	}

	for (const property of [...modelProperties, ...runtimeProperties]) {
		if (
			property.typeRef &&
			definitions.has(property.typeRef) &&
			property.typeRef !== definition.name &&
			!(usesFhirResource && property.typeRef === "Resource")
		) {
			typeImports.add(property.typeRef);
		}
	}

	for (const property of runtimeProperties) {
		if (
			property.typeRef &&
			property.typeRef !== "Resource" &&
			definitions.has(property.typeRef)
		) {
			lazySchemaHelpers.add(property.typeRef);

			if (property.typeRef !== definition.name) {
				valueImports.add(property.typeRef);
			}
		}

		const primitiveHelper =
			property.enumValues === null
				? primitiveHelperName(property.primitiveType)
				: null;

		if (primitiveHelper) {
			helperImports.add(primitiveHelper);
		}
	}

	if (referenceConstraints.length > 0) {
		referenceImports.add("validateReferenceTarget");
	}

	if (primitiveArrayPairs.length > 0) {
		primitiveArrayImports.add("validatePrimitiveArrayPair");
	}

	const refinementLines = emitChoiceGroupRefinement(definition);

	const lines = [
		...buildGeneratedHeader({
			generatedAt,
			profileUrl: definition.sourceMetadata.profileUrl,
			releaseLabel: definition.sourceMetadata.releaseLabel,
			version: definition.sourceMetadata.version,
		}),
		'import * as z from "zod";',
		...[...typeImports]
			.sort((left, right) => left.localeCompare(right))
			.map(
				(name) =>
					`import type { ${name} } from ${JSON.stringify(layout.definitionImportPath(filePath, name))};`,
			),
		...(helperImports.size > 0
			? [
					`import { ${[...helperImports].sort((left, right) => left.localeCompare(right)).join(", ")} } from ${JSON.stringify(sharedImportPath(filePath, "fhir-primitives"))};`,
				]
			: []),
		...(primitiveArrayImports.size > 0
			? [
					`import { ${[...primitiveArrayImports].sort((left, right) => left.localeCompare(right)).join(", ")} } from ${JSON.stringify(sharedImportPath(filePath, "fhir-primitive-array-validation"))};`,
				]
			: []),
		...(referenceImports.size > 0
			? [
					`import { ${[...referenceImports].sort((left, right) => left.localeCompare(right)).join(", ")} } from ${JSON.stringify(sharedImportPath(filePath, "fhir-reference-validation"))};`,
				]
			: []),
		...[...valueImports]
			.sort((left, right) => left.localeCompare(right))
			.map(
				(name) =>
					`import { ${schemaInternalName(name)} } from ${JSON.stringify(layout.definitionInternalImportPath(filePath, name))};`,
			),
		...(usesFhirResource
			? [
					`import type { FhirResource } from ${JSON.stringify(layout.importPath(filePath, join(layout.outputDir, "_fhirResourceSchema.ts")))};`,
					`import { FhirResourceSchemaInternal } from ${JSON.stringify(layout.importPath(filePath, join(layout.outputDir, "_fhirResourceSchema.ts")))};`,
				]
			: []),
		"",
		...emitModelDeclaration(
			definition,
			definitions,
			modelBaseName,
			enableFhirResourceValidation,
		),
		"",
		...emitLazySchemaHelpers(lazySchemaHelpers),
		...(usesFhirResource
			? [
					`const ${fhirResourceHelperName} = (): z.ZodType<FhirResource> => FhirResourceSchemaInternal as z.ZodType<FhirResource>;`,
				]
			: []),
		...(lazySchemaHelpers.size > 0 || usesFhirResource ? [""] : []),
		...emitSchemaDeclaration(definition, definitions, runtimeShouldExtend),
		...emitDefinitionExpression(
			definition,
			runtimeProperties,
			definitions,
			primitivePatterns,
			refinementLines.length > 0,
			enableFhirResourceValidation,
		),
		...refinementLines,
		...(refinementLines.length > 0 ? ["  ;"] : []),
		"",
		...emitPublicSchemaExport(definition),
		"",
	];

	return lines.join("\n");
}

function sharedImportPath(fromFilePath: string, moduleName: string): string {
	const target = resolve(repoRoot, "src", "shared", moduleName);
	const importPath = relative(dirname(fromFilePath), target)
		.split(sep)
		.join("/");
	return importPath.startsWith(".") ? importPath : `./${importPath}`;
}

function buildGeneratedHeader(options: {
	generatedAt: string;
	profileUrl?: string | null;
	releaseLabel?: string | null;
	version?: string | null;
}): string[] {
	return [
		...(options.profileUrl ? [`// Profile: ${options.profileUrl}`] : []),
		...(options.releaseLabel ? [`// Release: ${options.releaseLabel}`] : []),
		...(options.version ? [`// Version: ${options.version}`] : []),
		`// Last generated: ${options.generatedAt}`,
		"",
	];
}

function emitModelDeclaration(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
	modelBaseName: string | null,
	enableFhirResourceValidation: boolean,
): string[] {
	const properties = modelBaseName
		? getDirectProperties(definition, definitions)
		: definition.properties;
	if (!modelBaseName && properties.length === 0) {
		return [
			...emitJsDoc(definition.description),
			`export type ${definition.name} = Record<never, never>;`,
		];
	}

	const declaration = modelBaseName
		? `export interface ${definition.name} extends ${modelBaseName} {`
		: `export interface ${definition.name} {`;

	return [
		...emitJsDoc(definition.description),
		declaration,
		...properties.flatMap((property) =>
			emitModelProperty(
				definition,
				property,
				definitions,
				enableFhirResourceValidation,
			),
		),
		"}",
	];
}

function emitModelProperty(
	definition: NormalizedDefinition,
	property: NormalizedProperty,
	definitions: Map<string, NormalizedDefinition>,
	enableFhirResourceValidation: boolean,
): string[] {
	const propertyName = emitTypePropertyName(property.jsonName);
	const optionalSuffix = isOptionalModelProperty(property, definitions)
		? "?"
		: "";
	const propertyType = emitModelPropertyType(
		definition,
		property,
		definitions,
		enableFhirResourceValidation,
	);

	return [
		...emitJsDoc(property.description, "  "),
		`  ${propertyName}${optionalSuffix}: ${propertyType};`,
	];
}

function isOptionalModelProperty(
	property: NormalizedProperty,
	definitions: Map<string, NormalizedDefinition>,
): boolean {
	if (!property.required) {
		return true;
	}

	return (
		property.typeRef !== null &&
		!definitions.has(property.typeRef) &&
		property.primitiveType === null &&
		property.enumValues === null
	);
}

function emitModelPropertyType(
	definition: NormalizedDefinition,
	property: NormalizedProperty,
	definitions: Map<string, NormalizedDefinition>,
	enableFhirResourceValidation: boolean,
): string {
	let baseType = emitModelBaseType(
		definition,
		property,
		definitions,
		enableFhirResourceValidation,
	);

	if (property.isArray) {
		if (isNullablePrimitiveArraySlot(definition, property)) {
			baseType = `${baseType} | null`;
		}

		baseType = `Array<${baseType}>`;
	}

	return baseType;
}

function emitModelBaseType(
	definition: NormalizedDefinition,
	property: NormalizedProperty,
	definitions: Map<string, NormalizedDefinition>,
	enableFhirResourceValidation: boolean,
): string {
	if (
		property.jsonName === "resourceType" &&
		definition.resourceTypeLiteral !== null
	) {
		return JSON.stringify(definition.resourceTypeLiteral);
	}

	if (enableFhirResourceValidation && property.typeRef === "Resource") {
		return "FhirResource";
	}

	if (property.typeRef && definitions.has(property.typeRef)) {
		return property.typeRef;
	}

	if (property.enumValues) {
		return property.enumValues
			.map((value) => JSON.stringify(value))
			.join(" | ");
	}

	if (property.primitiveType) {
		return emitPrimitiveType(property.primitiveType);
	}

	return "unknown";
}

function emitPrimitiveType(type: string): string {
	const runtimeKind = primitiveRuntimeKind(type);

	switch (runtimeKind) {
		case "boolean":
			return "boolean";
		case "number":
			return "number";
		case "string":
			return "string";
		default:
			return "unknown";
	}
}

function emitTypePropertyName(name: string): string {
	return /^[$A-Z_a-z][$\w]*$/.test(name) ? name : JSON.stringify(name);
}

function emitJsDoc(description: string | null, indent = ""): string[] {
	if (!description) {
		return [];
	}

	const lines = description.split("\n");

	if (lines.length === 1) {
		return [`${indent}/** ${lines[0]} */`];
	}

	return [
		`${indent}/**`,
		...lines.map((line) => `${indent} * ${line}`),
		`${indent} */`,
	];
}

function emitSchemaDeclaration(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
	shouldExtend: boolean,
): string[] {
	const schemaName = schemaInternalName(definition.name);

	if (!shouldExtend) {
		return ["/** @internal */", `export const ${schemaName} = z.object({`];
	}

	const baseDefinition = resolveRuntimeBaseDefinition(
		definition,
		definitions,
		shouldExtend,
	);

	if (!baseDefinition || baseDefinition.name === definition.name) {
		return ["/** @internal */", `export const ${schemaName} = z.object({`];
	}

	return [
		"/** @internal */",
		`export const ${schemaName} = ${schemaInternalName(baseDefinition.name)}.extend({`,
	];
}

function emitPublicSchemaExport(definition: NormalizedDefinition): string[] {
	return [
		`export const ${schemaExportName(definition.name)} = ${schemaInternalName(definition.name)} as z.ZodType<${definition.name}>;`,
	];
}

function resolveModelBaseName(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
): string | null {
	if (!definition.baseName) {
		return null;
	}

	const baseDefinition = definitions.get(definition.baseName);

	if (!baseDefinition || baseDefinition.name === definition.name) {
		return null;
	}

	return baseDefinition.name;
}

function resolveRuntimeBaseDefinition(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
	shouldExtend: boolean,
): NormalizedDefinition | null {
	if (!shouldExtend || !definition.baseName) {
		return null;
	}

	const baseDefinition = definitions.get(definition.baseName);

	if (!baseDefinition || baseDefinition.name === definition.name) {
		return null;
	}

	return baseDefinition;
}

function emitDefinitionExpression(
	definition: NormalizedDefinition,
	directProperties: NormalizedDefinition["properties"],
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
	hasRefinements: boolean,
	enableFhirResourceValidation: boolean,
): string[] {
	return [
		...directProperties.map(
			(property) =>
				`  ${property.jsonName}: ${emitPropertyExpression(
					definition,
					property,
					definitions,
					primitivePatterns,
					enableFhirResourceValidation,
				)},`,
		),
		hasRefinements ? "  })" : "}).strict();",
		...(hasRefinements ? ["  .strict()"] : []),
	];
}

function shouldExtendDefinition(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
	enableFhirResourceValidation: boolean,
): boolean {
	if (!definition.baseName) {
		return false;
	}

	if (enableFhirResourceValidation && definition.resourceTypeLiteral !== null) {
		return false;
	}

	const baseDefinition = definitions.get(definition.baseName);

	if (!baseDefinition || baseDefinition.name === definition.name) {
		return false;
	}

	return !hasDependencyPath(baseDefinition.name, definition.name, definitions);
}

function hasDependencyPath(
	startName: string,
	targetName: string,
	definitions: Map<string, NormalizedDefinition>,
	seen = new Set<string>(),
): boolean {
	if (startName === targetName) {
		return true;
	}

	if (seen.has(startName)) {
		return false;
	}

	seen.add(startName);
	const definition = definitions.get(startName);

	if (!definition) {
		return false;
	}

	for (const property of definition.properties) {
		if (!property.typeRef || !definitions.has(property.typeRef)) {
			continue;
		}

		if (hasDependencyPath(property.typeRef, targetName, definitions, seen)) {
			return true;
		}
	}

	return false;
}

function getDirectProperties(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
): NormalizedDefinition["properties"] {
	const inheritedPropertyNames = new Set<string>();
	const seen = new Set<string>();
	let currentBaseName = definition.baseName;

	while (currentBaseName && !seen.has(currentBaseName)) {
		seen.add(currentBaseName);
		const baseDefinition = definitions.get(currentBaseName);

		if (!baseDefinition) {
			break;
		}

		for (const property of baseDefinition.properties) {
			inheritedPropertyNames.add(property.jsonName);
		}

		currentBaseName = baseDefinition.baseName;
	}

	return definition.properties.filter(
		(property) => !inheritedPropertyNames.has(property.jsonName),
	);
}

function emitPropertyExpression(
	definition: NormalizedDefinition,
	property: NormalizedDefinition["properties"][number],
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
	enableFhirResourceValidation: boolean,
): string {
	let baseExpression = emitBaseExpression(
		definition,
		property,
		definitions,
		primitivePatterns,
		enableFhirResourceValidation,
	);

	if (property.isArray) {
		if (isNullablePrimitiveArraySlot(definition, property)) {
			baseExpression = `${baseExpression}.nullable()`;
		}

		baseExpression = `${baseExpression}.array()`;
	}

	if (!property.required) {
		baseExpression = `${baseExpression}.optional()`;
	}

	return baseExpression;
}

function emitBaseExpression(
	definition: NormalizedDefinition,
	property: NormalizedDefinition["properties"][number],
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
	enableFhirResourceValidation: boolean,
): string {
	if (
		property.jsonName === "resourceType" &&
		definition.resourceTypeLiteral !== null
	) {
		return `z.literal(${JSON.stringify(definition.resourceTypeLiteral)})`;
	}

	if (property.typeRef === "Resource") {
		if (enableFhirResourceValidation) {
			return `z.lazy(${fhirResourceHelperName})`;
		}
		return "z.object({ resourceType: z.string() }).passthrough()";
	}

	if (property.typeRef && definitions.has(property.typeRef)) {
		return `z.lazy(${lazySchemaHelperName(property.typeRef)})`;
	}

	if (property.enumValues) {
		return `z.enum([${property.enumValues.map((value) => JSON.stringify(value)).join(", ")}])`;
	}

	if (property.primitiveType) {
		return emitPrimitiveExpression(property.primitiveType, primitivePatterns);
	}

	return property.required
		? "z.custom<unknown>((value) => value !== undefined)"
		: "z.unknown()";
}

function buildRuntimePropertySchema(
	definition: NormalizedDefinition,
	property: NormalizedDefinition["properties"][number],
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
	runtimeSchemas: Record<string, z.ZodTypeAny>,
	enableFhirResourceValidation: boolean,
): z.ZodTypeAny {
	let baseSchema: z.ZodTypeAny;

	if (
		property.jsonName === "resourceType" &&
		definition.resourceTypeLiteral !== null
	) {
		baseSchema = z.literal(definition.resourceTypeLiteral);
	} else if (property.typeRef === "Resource") {
		if (enableFhirResourceValidation) {
			baseSchema = z.lazy(() => {
				const resourceSchemasByType = new Map<string, z.ZodTypeAny>();
				for (const resource of collectConcreteResourceDefinitions(
					definitions,
				)) {
					const schema = runtimeSchemas[resource.name];
					if (schema && resource.resourceTypeLiteral !== null) {
						resourceSchemasByType.set(resource.resourceTypeLiteral, schema);
					}
				}
				return z.any().superRefine((value, ctx) => {
					if (typeof value !== "object" || value === null) {
						ctx.addIssue({
							code: z.ZodIssueCode.custom,
							message: "Expected a FHIR resource object",
						});
						return;
					}
					const resourceType = (value as { resourceType?: unknown })
						.resourceType;
					if (typeof resourceType !== "string") {
						ctx.addIssue({
							code: z.ZodIssueCode.custom,
							message: "Missing or non-string resourceType",
							path: ["resourceType"],
						});
						return;
					}
					const schema = resourceSchemasByType.get(resourceType);
					if (!schema) {
						ctx.addIssue({
							code: z.ZodIssueCode.custom,
							message: `Unknown FHIR resourceType: ${resourceType}`,
							path: ["resourceType"],
						});
						return;
					}
					const result = schema.safeParse(value);
					if (!result.success) {
						for (const issue of result.error.issues) {
							ctx.addIssue(issue as never);
						}
					}
				});
			});
		} else {
			baseSchema = z.object({ resourceType: z.string() }).passthrough();
		}
	} else if (property.typeRef !== null && definitions.has(property.typeRef)) {
		const typeRef = property.typeRef;
		baseSchema = z.lazy(() => runtimeSchemas[typeRef] ?? z.unknown());
	} else if (property.enumValues) {
		baseSchema = z.enum(property.enumValues as [string, ...string[]]);
	} else if (property.primitiveType) {
		baseSchema = buildPrimitiveSchema(
			property.primitiveType,
			primitivePatterns,
		);
	} else {
		baseSchema = property.required
			? z.custom<unknown>((value) => value !== undefined)
			: z.unknown();
	}

	if (property.isArray) {
		if (isNullablePrimitiveArraySlot(definition, property)) {
			baseSchema = baseSchema.nullable();
		}

		baseSchema = baseSchema.array();
	}

	if (!property.required) {
		baseSchema = baseSchema.optional();
	}

	return baseSchema;
}

function applyChoiceGroupRefinement(
	schema: z.ZodTypeAny,
	definition: NormalizedDefinition,
): z.ZodTypeAny {
	const choiceGroups = collectChoiceGroups(definition);
	const primitiveArrayPairs = collectPrimitiveArrayPairs(definition);
	const referenceConstraints = collectReferenceConstraints(definition);

	if (
		choiceGroups.length === 0 &&
		primitiveArrayPairs.length === 0 &&
		referenceConstraints.length === 0
	) {
		return schema;
	}

	return schema.superRefine((value, ctx) => {
		const record =
			typeof value === "object" && value !== null
				? (value as Record<string, unknown>)
				: {};

		for (const group of choiceGroups) {
			const presentVariants = group.fields.filter(
				(field) => record[field] !== undefined,
			);

			if (presentVariants.length === 0 && group.requiresValue) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: `One of ${group.fields.join(", ")} must be present for ${group.choiceGroup}`,
					path: [group.fields[0]],
				});
				continue;
			}

			if (presentVariants.length <= 1) {
				continue;
			}

			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Only one of ${presentVariants.join(", ")} may be present for ${group.choiceGroup}`,
				path: [presentVariants[0]],
			});
		}

		for (const pair of primitiveArrayPairs) {
			validatePrimitiveArrayPair(
				record[pair.valueField],
				record[pair.elementField],
				pair.valueField,
				pair.elementField,
				ctx,
			);
		}

		for (const constraint of referenceConstraints) {
			validateReferenceConstraint(record[constraint.field], constraint, ctx);
		}
	});
}

function collectChoiceGroups(definition: NormalizedDefinition): ChoiceGroup[] {
	const fieldsByGroup = new Map<string, string[]>();
	const requiredChoiceGroups = new Set<string>();

	for (const property of definition.properties) {
		if (!property.choiceGroup || property.jsonName.startsWith("_")) {
			continue;
		}

		const fields = fieldsByGroup.get(property.choiceGroup) ?? [];
		fields.push(property.jsonName);
		fieldsByGroup.set(property.choiceGroup, fields);

		if (property.min > 0) {
			requiredChoiceGroups.add(property.choiceGroup);
		}
	}

	return [...fieldsByGroup.entries()]
		.map(([choiceGroup, fields]) => ({
			choiceGroup,
			fields: [...new Set(fields)].sort((left, right) =>
				left.localeCompare(right),
			),
			requiresValue: requiredChoiceGroups.has(choiceGroup),
		}))
		.filter((group) => group.fields.length > 1)
		.sort((left, right) => left.choiceGroup.localeCompare(right.choiceGroup));
}

function emitChoiceGroupRefinement(definition: NormalizedDefinition): string[] {
	const choiceGroups = collectChoiceGroups(definition);
	const primitiveArrayPairs = collectPrimitiveArrayPairs(definition);
	const referenceConstraints = collectReferenceConstraints(definition);

	if (
		choiceGroups.length === 0 &&
		primitiveArrayPairs.length === 0 &&
		referenceConstraints.length === 0
	) {
		return [];
	}

	return [
		"  .superRefine((value, ctx) => {",
		"    const record = value as Record<string, unknown>;",
		...choiceGroups.flatMap((group) => {
			const fieldArray = `[${group.fields.map((field) => JSON.stringify(field)).join(", ")}]`;

			return [
				`    const ${choiceGroupVariableName(group.choiceGroup)} = ${fieldArray}.filter((field) => record[field] !== undefined);`,
				...(group.requiresValue
					? [
							`    if (${choiceGroupVariableName(group.choiceGroup)}.length === 0) {`,
							"      ctx.addIssue({",
							"        code: z.ZodIssueCode.custom,",
							`        message: ${JSON.stringify(`One of ${group.fields.join(", ")} must be present for ${group.choiceGroup}`)},`,
							`        path: [${JSON.stringify(group.fields[0])}],`,
							"      });",
							"    }",
						]
					: []),
				`    if (${choiceGroupVariableName(group.choiceGroup)}.length > 1) {`,
				"      ctx.addIssue({",
				"        code: z.ZodIssueCode.custom,",
				`        message: ${JSON.stringify(`Only one of ${group.fields.join(", ")} may be present for ${group.choiceGroup}`)},`,
				`        path: [${choiceGroupVariableName(group.choiceGroup)}[0]],`,
				"      });",
				"    }",
			];
		}),
		...primitiveArrayPairs.map(
			(pair) =>
				`    validatePrimitiveArrayPair(${emitRecordAccess("record", pair.valueField)}, ${emitRecordAccess("record", pair.elementField)}, ${JSON.stringify(pair.valueField)}, ${JSON.stringify(pair.elementField)}, ctx);`,
		),
		...referenceConstraints.flatMap((constraint) => [
			`    validateReferenceTarget(${emitRecordAccess("record", constraint.field)}, ${JSON.stringify(constraint.field)}, [${constraint.allowedCanonicalTypes.map((type) => JSON.stringify(type)).join(", ")}], [${constraint.allowedResourceTypes.map((type) => JSON.stringify(type)).join(", ")}], ctx);`,
		]),
		"  })",
	];
}

function collectPrimitiveArrayPairs(
	definition: NormalizedDefinition,
): PrimitiveArrayPair[] {
	const propertiesByName = new Map(
		definition.properties.map((property) => [property.jsonName, property]),
	);

	return definition.properties
		.filter(
			(property) =>
				property.primitiveType !== null &&
				property.isArray &&
				!property.jsonName.startsWith("_"),
		)
		.map((property) => ({
			elementField: `_${property.jsonName}`,
			valueField: property.jsonName,
		}))
		.filter((pair) => {
			const elementProperty = propertiesByName.get(pair.elementField);
			return elementProperty?.typeRef === "Element" && elementProperty.isArray;
		})
		.sort((left, right) => left.valueField.localeCompare(right.valueField));
}

function isNullablePrimitiveArraySlot(
	definition: NormalizedDefinition,
	property: NormalizedProperty,
): boolean {
	return collectPrimitiveArrayPairs(definition).some(
		(pair) =>
			pair.valueField === property.jsonName ||
			pair.elementField === property.jsonName,
	);
}

type ReferenceConstraint = {
	allowedCanonicalTypes: string[];
	allowedResourceTypes: string[];
	field: string;
};

function collectReferenceConstraints(
	definition: NormalizedDefinition,
): ReferenceConstraint[] {
	return definition.properties
		.filter(
			(property) =>
				property.typeRef === "Reference" &&
				property.targetProfiles.length > 0 &&
				!property.jsonName.startsWith("_"),
		)
		.map((property) => ({
			allowedCanonicalTypes: extractAllowedReferenceCanonicals(
				property.targetProfiles,
			),
			allowedResourceTypes: extractAllowedReferenceTypes(
				property.targetProfiles,
			),
			field: property.jsonName,
		}))
		.filter(
			(constraint) =>
				constraint.allowedCanonicalTypes.length > 0 &&
				constraint.allowedResourceTypes.length > 0,
		)
		.sort((left, right) => left.field.localeCompare(right.field));
}

function extractAllowedReferenceCanonicals(targetProfiles: string[]): string[] {
	return [...new Set(targetProfiles.map(normalizeReferenceCanonicalUrl))]
		.filter((value) => value.length > 0)
		.sort((left, right) => left.localeCompare(right));
}

function extractAllowedReferenceTypes(targetProfiles: string[]): string[] {
	return [
		...new Set(
			targetProfiles
				.map(targetProfileToResourceType)
				.filter((value): value is string => value !== null),
		),
	].sort((left, right) => left.localeCompare(right));
}

function targetProfileToResourceType(targetProfile: string): string | null {
	const canonical = normalizeReferenceCanonicalUrl(targetProfile);
	const resourceType = canonical.split("/").at(-1) ?? null;
	return resourceType && /^[A-Z][A-Za-z0-9]+$/.test(resourceType)
		? resourceType
		: null;
}

function normalizeReferenceCanonicalUrl(targetProfile: string): string {
	return targetProfile.split("|")[0] ?? targetProfile;
}

function validateReferenceConstraint(
	value: unknown,
	constraint: ReferenceConstraint,
	ctx: z.RefinementCtx,
): void {
	validateReferenceTarget(
		value,
		constraint.field,
		constraint.allowedCanonicalTypes,
		constraint.allowedResourceTypes,
		ctx,
	);
}

function choiceGroupVariableName(choiceGroup: string): string {
	return `${choiceGroup.replaceAll(/[^a-zA-Z0-9]+/g, "_")}Present`;
}

function emitLazySchemaHelpers(typeRefs: Set<string>): string[] {
	if (typeRefs.size === 0) {
		return [];
	}

	return [
		...[...typeRefs]
			.sort((left, right) => left.localeCompare(right))
			.map(
				(typeRef) =>
					`const ${lazySchemaHelperName(typeRef)} = (): z.ZodType<${typeRef}> => ${schemaInternalName(typeRef)} as z.ZodType<${typeRef}>;`,
			),
	];
}

function lazySchemaHelperName(typeRef: string): string {
	return `get${typeRef}Schema`;
}

function emitPrimitiveExpression(
	type: string,
	primitivePatterns: Map<string, string>,
): string {
	const runtimeKind = primitiveRuntimeKind(type);
	const helper = primitiveHelperName(type);

	if (helper) {
		return `${helper}()`;
	}

	if (runtimeKind === "boolean") {
		return "z.boolean()";
	}

	if (runtimeKind === "number") {
		if (type === "integer") {
			return "z.number().int()";
		}

		if (type === "positiveInt") {
			return "z.number().int().positive()";
		}

		if (type === "unsignedInt") {
			return "z.number().int().nonnegative()";
		}

		return "z.number()";
	}

	const pattern = primitivePatterns.get(type);

	if (pattern) {
		return `z.string().regex(${toRegexLiteral(pattern)})`;
	}

	return "z.string()";
}

function buildPrimitiveSchema(
	type: string,
	primitivePatterns: Map<string, string>,
): z.ZodTypeAny {
	const runtimeKind = primitiveRuntimeKind(type);
	const helper = primitiveHelper(type);

	if (helper) {
		return helper();
	}

	if (runtimeKind === "boolean") {
		return z.boolean();
	}

	if (runtimeKind === "number") {
		if (type === "integer") {
			return z.number().int();
		}

		if (type === "positiveInt") {
			return z.number().int().positive();
		}

		if (type === "unsignedInt") {
			return z.number().int().nonnegative();
		}

		return z.number();
	}

	const pattern = primitivePatterns.get(type);

	if (pattern) {
		return z.string().regex(new RegExp(pattern));
	}

	return z.string();
}

function toRegexLiteral(pattern: string): string {
	let normalized = "";
	let inCharacterClass = false;

	for (let index = 0; index < pattern.length; index += 1) {
		const current = pattern[index];
		const next = pattern[index + 1];

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

		if (inCharacterClass && current === "\\" && next === "+") {
			normalized += "+";
			index += 1;
			continue;
		}

		if (inCharacterClass && current === "\\" && next === "/") {
			normalized += "/";
			index += 1;
			continue;
		}

		if (!inCharacterClass && current === "/") {
			normalized += "\\/";
			continue;
		}

		normalized += current;
	}

	return `/${normalized}/`;
}

function emitRecordAccess(recordName: string, field: string): string {
	return /^[$A-Z_a-z][$\w]*$/.test(field)
		? `${recordName}.${field}`
		: `${recordName}[${JSON.stringify(field)}]`;
}

function primitiveHelperName(type: string | null): string | null {
	switch (type) {
		case "base64Binary":
			return "fhirBase64Binary";
		case "canonical":
			return "fhirCanonical";
		case "code":
			return "fhirCode";
		case "id":
			return "fhirId";
		case "date":
			return "fhirDate";
		case "dateTime":
			return "fhirDateTime";
		case "instant":
			return "fhirInstant";
		case "integer64":
			return "fhirInteger64";
		case "oid":
			return "fhirOid";
		case "string":
			return "fhirString";
		case "time":
			return "fhirTime";
		case "uri":
			return "fhirUri";
		case "url":
			return "fhirUrl";
		case "uuid":
			return "fhirUuid";
		default:
			return null;
	}
}

function primitiveHelper(type: string): (() => z.ZodType<string>) | null {
	switch (type) {
		case "base64Binary":
			return fhirBase64Binary;
		case "canonical":
			return fhirCanonical;
		case "code":
			return fhirCode;
		case "id":
			return fhirId;
		case "date":
			return fhirDate;
		case "dateTime":
			return fhirDateTime;
		case "instant":
			return fhirInstant;
		case "integer64":
			return fhirInteger64;
		case "oid":
			return fhirOid;
		case "string":
			return fhirString;
		case "time":
			return fhirTime;
		case "uri":
			return fhirUri;
		case "url":
			return fhirUrl;
		case "uuid":
			return fhirUuid;
		default:
			return null;
	}
}

function writeFileIfChanged(path: string, content: string): void {
	const existing = readFileSyncSafe(path);

	if (
		existing !== null &&
		normalizeGeneratedContent(existing) === normalizeGeneratedContent(content)
	) {
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

function normalizeGeneratedContent(content: string): string {
	return content.replace(
		/^\/\/ Last generated: .*$/m,
		"// Last generated: <normalized>",
	);
}

function pruneGeneratedFiles(outputDir: string, nextFiles: string[]): void {
	const trackedFiles = new Set(nextFiles);
	const directories: string[] = [];

	for (const entryPath of collectGeneratedEntries(outputDir, directories)) {
		if (!entryPath.endsWith(".ts")) {
			continue;
		}

		if (!trackedFiles.has(entryPath)) {
			rmSync(entryPath);
		}
	}

	for (const directory of directories.sort(
		(left, right) => right.length - left.length,
	)) {
		if (readdirSync(directory).length === 0) {
			rmSync(directory, { recursive: true });
		}
	}
}

function collectGeneratedEntries(
	outputDir: string,
	directories: string[],
): string[] {
	const entries: string[] = [];

	for (const entry of readdirSync(outputDir, { withFileTypes: true })) {
		const entryPath = join(outputDir, entry.name);

		if (entry.isDirectory()) {
			directories.push(entryPath);
			entries.push(...collectGeneratedEntries(entryPath, directories));
			continue;
		}

		if (entry.isFile()) {
			entries.push(entryPath);
		}
	}

	return entries;
}
