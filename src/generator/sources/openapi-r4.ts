import { readdirSync, readFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { NormalizedDefinition, NormalizedProperty } from "../model.ts";
import {
	definitionNameToFhirPath,
	inferChoiceMetadata,
	normalizeDefinitionName,
	r4GenerationTargetNames,
	sortProperties,
} from "../model.ts";

type SpecManifest = {
	fhirVersion: string;
	packageName: string;
	packageRoot: string;
	packageVersion: string;
	sourceUrl: string;
	structureDefinitionGlob: string;
};

type JsonSchema = {
	$ref?: string;
	allOf?: JsonSchema[];
	anyOf?: JsonSchema[];
	description?: string;
	enum?: string[];
	items?: JsonSchema;
	oneOf?: JsonSchema[];
	pattern?: string;
	properties?: Record<string, JsonSchema>;
	required?: string[];
	type?: string;
};

type LoadedDefinition = {
	name: string;
	schema: JsonSchema;
	sourceStem: string;
};

type OpenApiContext = {
	definitions: Map<string, LoadedDefinition>;
	definitionSources: Map<string, string>;
	packageRoot: string;
};

const moduleDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(moduleDir, "../../..");

export function buildOpenApiR4Definitions(): Map<string, NormalizedDefinition> {
	const manifest = loadManifest("r4");
	const packageRoot = resolve(repoRoot, manifest.packageRoot);
	const context: OpenApiContext = {
		definitions: new Map(),
		definitionSources: buildDefinitionSources(packageRoot),
		packageRoot,
	};

	for (const name of r4GenerationTargetNames) {
		const loaded = getDefinition(name, context);
		collectReferencedDefinitions(loaded.schema, context, loaded.sourceStem);
	}

	return new Map(
		[...context.definitions.keys()]
			.sort((left, right) => left.localeCompare(right))
			.map((name) => [name, normalizeDefinition(name, context)]),
	);
}

function loadManifest(version: "r4"): SpecManifest {
	const manifestPath = join(repoRoot, "src", "spec", version, "manifest.json");
	return JSON.parse(readFileSync(manifestPath, "utf8")) as SpecManifest;
}

function buildDefinitionSources(packageRoot: string): Map<string, string> {
	const definitionSources = new Map<string, string>();
	const openApiDir = join(packageRoot, "openapi");

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
		throw new Error(`Unsupported OpenAPI $ref format: ${ref}`);
	}

	return {
		name: externalMatch[2],
		sourceStem: normalizeDefinitionName(externalMatch[1]),
	};
}

function getDefinition(
	name: string,
	context: OpenApiContext,
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

function collectReferencedDefinitions(
	schema: JsonSchema,
	context: OpenApiContext,
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

function flattenSchema(
	name: string,
	context: OpenApiContext,
	sourceStem?: string,
	seen = new Set<string>(),
): JsonSchema[] {
	const loaded = getDefinition(name, context, sourceStem);
	const key = `${loaded.sourceStem}:${loaded.name}`;

	if (seen.has(key)) {
		return [];
	}

	seen.add(key);
	return flattenSchemaParts(loaded.schema, context, loaded.sourceStem, seen);
}

function flattenSchemaParts(
	schema: JsonSchema,
	context: OpenApiContext,
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

function normalizeDefinition(
	name: string,
	context: OpenApiContext,
): NormalizedDefinition {
	const loaded = getDefinition(name, context);
	const parts = flattenSchema(name, context, loaded.sourceStem);
	const propertyMap = new Map<string, JsonSchema>();
	const required = new Set<string>();
	const notes: string[] = [];
	let description: string | null = loaded.schema.description ?? null;
	let baseName: string | null = findBaseName(loaded.schema, loaded.sourceStem);

	for (const part of parts) {
		description = description ?? part.description ?? null;

		for (const fieldName of part.required ?? []) {
			required.add(fieldName);
		}

		for (const [fieldName, fieldSchema] of Object.entries(
			part.properties ?? {},
		)) {
			propertyMap.set(fieldName, fieldSchema);
		}
	}

	const siblingNames = [...propertyMap.keys()];
	const resourceTypeLiteral = resolveResourceTypeLiteral(
		propertyMap.get("resourceType"),
	);
	const properties = sortProperties(
		[...propertyMap.entries()].map(([jsonName, schema]) =>
			normalizeProperty({
				context,
				currentSourceStem: loaded.sourceStem,
				definitionName: name,
				jsonName,
				required: required.has(jsonName),
				schema,
				siblingNames,
			}),
		),
	);

	if (!baseName && name.includes("_")) {
		baseName = "BackboneElement";
	}

	if (
		properties.some(
			(property) =>
				property.typeRef === null && property.primitiveType === null,
		)
	) {
		notes.push("Some OpenAPI properties were normalized as unknown.");
	}

	return {
		baseName,
		description,
		kind: inferDefinitionKind(name, resourceTypeLiteral),
		name,
		notes,
		properties,
		resourceTypeLiteral,
		sourceMetadata: {
			profileUrl: null,
			releaseLabel: null,
			version: null,
		},
	};
}

function findBaseName(
	schema: JsonSchema,
	currentSourceStem: string,
): string | null {
	for (const part of schema.allOf ?? []) {
		if (!part.$ref) {
			continue;
		}

		return resolveRefTarget(part.$ref, currentSourceStem).name;
	}

	return null;
}

function inferDefinitionKind(
	name: string,
	resourceTypeLiteral: string | null,
): NormalizedDefinition["kind"] {
	if (name.includes("_")) {
		return "backbone";
	}

	if (resourceTypeLiteral || name === "DomainResource" || name === "Resource") {
		return "resource";
	}

	return "complex-type";
}

function resolveResourceTypeLiteral(
	schema: JsonSchema | undefined,
): string | null {
	if (!schema?.enum || schema.enum.length !== 1) {
		return null;
	}

	return schema.enum[0] ?? null;
}

function normalizeProperty(options: {
	context: OpenApiContext;
	currentSourceStem: string;
	definitionName: string;
	jsonName: string;
	required: boolean;
	schema: JsonSchema;
	siblingNames: string[];
}): NormalizedProperty {
	const metadata = resolveOpenApiPropertyMetadata(
		options.jsonName,
		options.siblingNames,
	);
	const typeInfo = resolveOpenApiTypeInfo(
		options.jsonName,
		options.schema,
		options.currentSourceStem,
		options.siblingNames,
	);
	const definitionPath = definitionNameToFhirPath(options.definitionName);

	return {
		binding: null,
		choiceGroup: metadata.choiceGroup,
		choiceVariant: metadata.choiceVariant,
		description: options.schema.description ?? null,
		enumValues: null,
		fhirPath: `${definitionPath}.${metadata.fhirSegment}`,
		invariants: [],
		isArray: typeInfo.isArray,
		jsonName: options.jsonName,
		max: typeInfo.isArray ? "*" : "1",
		min: options.required ? 1 : 0,
		primitiveType: typeInfo.primitiveType,
		required: options.required,
		targetProfiles: [],
		typeRef: typeInfo.typeRef,
	};
}

function resolveOpenApiPropertyMetadata(
	jsonName: string,
	siblingNames: string[],
): {
	choiceGroup: string | null;
	choiceVariant: string | null;
	fhirSegment: string;
} {
	const siblingSet = siblingNames.map((name) =>
		name.startsWith("_") ? name.slice(1) : name,
	);
	const bareName = jsonName.startsWith("_") ? jsonName.slice(1) : jsonName;
	const choice = inferChoiceMetadata(bareName, siblingSet);

	return {
		choiceGroup: choice?.choiceGroup ?? null,
		choiceVariant: choice?.choiceVariant ?? null,
		fhirSegment: choice?.choiceGroup ?? bareName,
	};
}

function resolveOpenApiTypeInfo(
	jsonName: string,
	schema: JsonSchema,
	currentSourceStem: string,
	siblingNames: string[],
): {
	isArray: boolean;
	primitiveType: string | null;
	typeRef: string | null;
} {
	if (schema.$ref) {
		const refTarget = resolveRefTarget(schema.$ref, currentSourceStem);

		if (refTarget.name === "ResourceList") {
			return {
				isArray: false,
				primitiveType: null,
				typeRef: null,
			};
		}

		return {
			isArray: false,
			primitiveType: null,
			typeRef: refTarget.name,
		};
	}

	if (schema.type === "array") {
		if (!schema.items) {
			return {
				isArray: true,
				primitiveType: null,
				typeRef: null,
			};
		}

		const itemInfo = resolveOpenApiTypeInfo(
			jsonName,
			schema.items,
			currentSourceStem,
			siblingNames,
		);

		return {
			...itemInfo,
			isArray: true,
		};
	}

	return {
		isArray: false,
		primitiveType: inferOpenApiPrimitiveType(jsonName, schema, siblingNames),
		typeRef: null,
	};
}

function inferOpenApiPrimitiveType(
	jsonName: string,
	schema: JsonSchema,
	siblingNames: string[],
): string | null {
	if (jsonName === "resourceType" || jsonName.startsWith("_")) {
		return null;
	}

	const bareName = jsonName.startsWith("_") ? jsonName.slice(1) : jsonName;
	const choice = inferChoiceMetadata(
		bareName,
		siblingNames.map((name) => (name.startsWith("_") ? name.slice(1) : name)),
	);

	if (choice) {
		return choice.choiceVariant;
	}

	if (bareName === "id") {
		return "id";
	}

	if (schema.type === "boolean") {
		return "boolean";
	}

	if (schema.type === "number") {
		if (bareName.endsWith("Integer")) {
			return "integer";
		}

		if (bareName.endsWith("PositiveInt")) {
			return "positiveInt";
		}

		if (bareName.endsWith("UnsignedInt")) {
			return "unsignedInt";
		}

		return "decimal";
	}

	if (schema.type === "string") {
		if (bareName.endsWith("DateTime")) {
			return "dateTime";
		}

		if (bareName.endsWith("Date")) {
			return "date";
		}

		if (bareName.endsWith("Time")) {
			return "time";
		}

		if (schema.enum) {
			return "code";
		}

		if (schema.pattern === "[A-Za-z0-9\\-\\.]{1,64}") {
			return "id";
		}

		return "string";
	}

	return null;
}
