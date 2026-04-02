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
import { basename, dirname, join } from "node:path";
import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirInstant,
	fhirTime,
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

export function buildRuntimeSchemas(
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
): Record<string, z.ZodTypeAny> {
	const runtimeSchemas: Record<string, z.ZodTypeAny> = {};

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
	generatedAt: string;
	outputDir: string;
	primitivePatterns: Map<string, string>;
}): string[] {
	const files = formatBuiltFiles(buildNormalizedZodFiles(options));

	for (const file of files) {
		mkdirSync(dirname(file.path), { recursive: true });
		writeFileIfChanged(file.path, file.content);
	}

	pruneGeneratedFiles(
		options.outputDir,
		files.map((file) => file.path),
	);

	return files.map((file) => file.path);
}

function formatBuiltFiles(files: BuiltFile[]): BuiltFile[] {
	if (files.length === 0) {
		return files;
	}

	const stagingDir = mkdtempSync(join(tmpdir(), "fhir-zod-format-"));

	try {
		const stagedPaths = files.map((file) => {
			const stagedPath = join(stagingDir, basename(file.path));
			writeFileSync(stagedPath, file.content, "utf8");
			return stagedPath;
		});

		execFileSync("npx", ["biome", "format", "--write", ...stagedPaths], {
			cwd: repoRoot,
			stdio: "ignore",
		});

		return files.map((file) => {
			const stagedPath = join(stagingDir, basename(file.path));
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
	generatedAt: string;
	outputDir: string;
	primitivePatterns: Map<string, string>;
}): BuiltFile[] {
	const builtFiles = sortDefinitions(options.definitions.values()).map(
		(definition) => ({
			content: emitDefinitionFile(
				definition,
				options.definitions,
				options.generatedAt,
				options.primitivePatterns,
			),
			path: join(options.outputDir, `${definition.name}.ts`),
		}),
	);

	const releaseLabel =
		sortDefinitions(options.definitions.values())[0]?.sourceMetadata
			.releaseLabel ?? null;

	builtFiles.push({
		content: [
			...buildGeneratedHeader({
				generatedAt: options.generatedAt,
				releaseLabel,
			}),
			...sortDefinitions(options.definitions.values()).flatMap((definition) => [
				`export type { ${definition.name} } from "./${definition.name}";`,
				`export { ${schemaExportName(definition.name)} } from "./${definition.name}";`,
			]),
			"",
		].join("\n"),
		path: join(options.outputDir, "index.ts"),
	});

	return builtFiles;
}

function emitDefinitionFile(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
	generatedAt: string,
	primitivePatterns: Map<string, string>,
): string {
	const modelBaseName = resolveModelBaseName(definition, definitions);
	const runtimeShouldExtend = shouldExtendDefinition(definition, definitions);
	const modelProperties = modelBaseName
		? getDirectProperties(definition, definitions)
		: definition.properties;
	const runtimeProperties = runtimeShouldExtend
		? getDirectProperties(definition, definitions)
		: definition.properties;
	const typeImports = new Set<string>();
	const valueImports = new Set<string>();
	const helperImports = new Set<string>();
	const sharedImports = new Set<string>();
	const lazySchemaHelpers = new Set<string>();
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
			property.typeRef !== definition.name
		) {
			typeImports.add(property.typeRef);
		}
	}

	for (const property of runtimeProperties) {
		if (property.typeRef && definitions.has(property.typeRef)) {
			lazySchemaHelpers.add(property.typeRef);

			if (property.typeRef !== definition.name) {
				valueImports.add(property.typeRef);
			}
		}

		const primitiveHelper = primitiveHelperName(property.primitiveType);

		if (primitiveHelper) {
			helperImports.add(primitiveHelper);
		}
	}

	if (referenceConstraints.length > 0) {
		sharedImports.add("validateReferenceTarget");
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
			.map((name) => `import type { ${name} } from "./${name}";`),
		...(helperImports.size > 0
			? [
					`import { ${[...helperImports].sort((left, right) => left.localeCompare(right)).join(", ")} } from "../shared/fhir-primitives";`,
				]
			: []),
		...(sharedImports.size > 0
			? [
					`import { ${[...sharedImports].sort((left, right) => left.localeCompare(right)).join(", ")} } from "../shared/fhir-reference-validation";`,
				]
			: []),
		...[...valueImports]
			.sort((left, right) => left.localeCompare(right))
			.map(
				(name) =>
					`import { ${schemaInternalName(name)} } from "./${name}";`,
			),
		"",
		...emitModelDeclaration(definition, definitions, modelBaseName),
		"",
		...emitLazySchemaHelpers(lazySchemaHelpers),
		...(lazySchemaHelpers.size > 0 ? [""] : []),
		...emitSchemaDeclaration(definition, definitions, runtimeShouldExtend),
		...emitDefinitionExpression(
			definition,
			runtimeProperties,
			definitions,
			primitivePatterns,
			refinementLines.length > 0,
		),
		...refinementLines,
		...(refinementLines.length > 0 ? ["\t;"] : []),
		"",
		...emitPublicSchemaExport(definition),
		"",
	];

	return lines.join("\n");
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
): string[] {
	const properties = modelBaseName
		? getDirectProperties(definition, definitions)
		: definition.properties;
	const declaration = modelBaseName
		? `export interface ${definition.name} extends ${modelBaseName} {`
		: `export interface ${definition.name} {`;

	return [
		...emitJsDoc(definition.description),
		declaration,
		...properties.flatMap((property) =>
			emitModelProperty(definition, property, definitions),
		),
		"}",
	];
}

function emitModelProperty(
	definition: NormalizedDefinition,
	property: NormalizedProperty,
	definitions: Map<string, NormalizedDefinition>,
): string[] {
	const propertyName = emitTypePropertyName(property.jsonName);
	const optionalSuffix = isOptionalModelProperty(property, definitions)
		? "?"
		: "";
	const propertyType = emitModelPropertyType(definition, property, definitions);

	return [
		...emitJsDoc(property.description, "\t"),
		`\t${propertyName}${optionalSuffix}: ${propertyType};`,
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
): string {
	let baseType = emitModelBaseType(definition, property, definitions);

	if (property.isArray) {
		baseType = `Array<${baseType}>`;
	}

	return baseType;
}

function emitModelBaseType(
	definition: NormalizedDefinition,
	property: NormalizedProperty,
	definitions: Map<string, NormalizedDefinition>,
): string {
	if (
		property.jsonName === "resourceType" &&
		definition.resourceTypeLiteral !== null
	) {
		return JSON.stringify(definition.resourceTypeLiteral);
	}

	if (property.typeRef && definitions.has(property.typeRef)) {
		return property.typeRef;
	}

	if (property.enumValues) {
		return property.enumValues.map((value) => JSON.stringify(value)).join(" | ");
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

function emitJsDoc(
	description: string | null,
	indent = "",
): string[] {
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
		`export const ${schemaExportName(definition.name)}: z.ZodType<${definition.name}> = ${schemaInternalName(definition.name)};`,
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
): string[] {
	return [
		...directProperties.map(
			(property) =>
				`\t${property.jsonName}: ${emitPropertyExpression(
					definition,
					property,
					definitions,
					primitivePatterns,
				)},`,
		),
		hasRefinements ? "\t})" : "}).strict();",
		...(hasRefinements ? ["\t.strict()"] : []),
	];
}

function shouldExtendDefinition(
	definition: NormalizedDefinition,
	definitions: Map<string, NormalizedDefinition>,
): boolean {
	if (!definition.baseName) {
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
): string {
	let baseExpression = emitBaseExpression(
		definition,
		property,
		definitions,
		primitivePatterns,
	);

	if (property.isArray) {
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
): string {
	if (
		property.jsonName === "resourceType" &&
		definition.resourceTypeLiteral !== null
	) {
		return `z.literal(${JSON.stringify(definition.resourceTypeLiteral)})`;
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

	return "z.any()";
}

function buildRuntimePropertySchema(
	definition: NormalizedDefinition,
	property: NormalizedDefinition["properties"][number],
	definitions: Map<string, NormalizedDefinition>,
	primitivePatterns: Map<string, string>,
	runtimeSchemas: Record<string, z.ZodTypeAny>,
): z.ZodTypeAny {
	let baseSchema: z.ZodTypeAny;

	if (
		property.jsonName === "resourceType" &&
		definition.resourceTypeLiteral !== null
	) {
		baseSchema = z.literal(definition.resourceTypeLiteral);
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
		baseSchema = z.any();
	}

	if (property.isArray) {
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
	const referenceConstraints = collectReferenceConstraints(definition);

	if (choiceGroups.length === 0 && referenceConstraints.length === 0) {
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

			if (presentVariants.length <= 1) {
				continue;
			}

			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: `Only one of ${presentVariants.join(", ")} may be present for ${group.choiceGroup}`,
				path: [presentVariants[0]],
			});
		}

		for (const constraint of referenceConstraints) {
			validateReferenceConstraint(record[constraint.field], constraint, ctx);
		}
	});
}

function collectChoiceGroups(
	definition: NormalizedDefinition,
): Array<{ choiceGroup: string; fields: string[] }> {
	const fieldsByGroup = new Map<string, string[]>();

	for (const property of definition.properties) {
		if (!property.choiceGroup || property.jsonName.startsWith("_")) {
			continue;
		}

		const fields = fieldsByGroup.get(property.choiceGroup) ?? [];
		fields.push(property.jsonName);
		fieldsByGroup.set(property.choiceGroup, fields);
	}

	return [...fieldsByGroup.entries()]
		.map(([choiceGroup, fields]) => ({
			choiceGroup,
			fields: [...new Set(fields)].sort((left, right) =>
				left.localeCompare(right),
			),
		}))
		.filter((group) => group.fields.length > 1)
		.sort((left, right) => left.choiceGroup.localeCompare(right.choiceGroup));
}

function emitChoiceGroupRefinement(definition: NormalizedDefinition): string[] {
	const choiceGroups = collectChoiceGroups(definition);
	const referenceConstraints = collectReferenceConstraints(definition);

	if (choiceGroups.length === 0 && referenceConstraints.length === 0) {
		return [];
	}

	return [
		"\t.superRefine((value, ctx) => {",
		"\t\tconst record = value as Record<string, unknown>;",
		...choiceGroups.flatMap((group) => {
			const fieldArray = `[${group.fields.map((field) => JSON.stringify(field)).join(", ")}]`;

			return [
				`\t\tconst ${choiceGroupVariableName(group.choiceGroup)} = ${fieldArray}.filter((field) => record[field] !== undefined);`,
				`\t\tif (${choiceGroupVariableName(group.choiceGroup)}.length > 1) {`,
				"\t\t\tctx.addIssue({",
				"\t\t\t\tcode: z.ZodIssueCode.custom,",
				`\t\t\t\tmessage: ${JSON.stringify(`Only one of ${group.fields.join(", ")} may be present for ${group.choiceGroup}`)},`,
				`\t\t\t\tpath: [${choiceGroupVariableName(group.choiceGroup)}[0]],`,
				"\t\t\t});",
				"\t\t}",
			];
		}),
		...referenceConstraints.flatMap((constraint) => [
			`\t\tvalidateReferenceTarget(${emitRecordAccess("record", constraint.field)}, ${JSON.stringify(constraint.field)}, [${constraint.allowedCanonicalTypes.map((type) => JSON.stringify(type)).join(", ")}], [${constraint.allowedResourceTypes.map((type) => JSON.stringify(type)).join(", ")}], ctx);`,
		]),
		"\t})",
	];
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
					`const ${lazySchemaHelperName(typeRef)} = (): z.ZodType<${typeRef}> => ${schemaInternalName(typeRef)};`,
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
		case "id":
			return "fhirId";
		case "date":
			return "fhirDate";
		case "dateTime":
			return "fhirDateTime";
		case "instant":
			return "fhirInstant";
		case "time":
			return "fhirTime";
		default:
			return null;
	}
}

function primitiveHelper(type: string): (() => z.ZodString) | null {
	switch (type) {
		case "id":
			return fhirId;
		case "date":
			return fhirDate;
		case "dateTime":
			return fhirDateTime;
		case "instant":
			return fhirInstant;
		case "time":
			return fhirTime;
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

	for (const entry of readdirSync(outputDir, { withFileTypes: true })) {
		if (!entry.isFile() || !entry.name.endsWith(".ts")) {
			continue;
		}

		const entryPath = join(outputDir, entry.name);

		if (!trackedFiles.has(entryPath)) {
			rmSync(entryPath);
		}
	}
}
