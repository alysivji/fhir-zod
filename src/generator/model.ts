export const fhirPrimitiveTypes = new Set([
	"base64Binary",
	"boolean",
	"canonical",
	"code",
	"date",
	"dateTime",
	"decimal",
	"id",
	"instant",
	"integer",
	"integer64",
	"markdown",
	"oid",
	"positiveInt",
	"string",
	"time",
	"unsignedInt",
	"uri",
	"url",
	"uuid",
	"xhtml",
]);

const choiceSuffixByType = new Map<string, string>([
	["base64Binary", "Base64Binary"],
	["boolean", "Boolean"],
	["canonical", "Canonical"],
	["code", "Code"],
	["date", "Date"],
	["dateTime", "DateTime"],
	["decimal", "Decimal"],
	["id", "Id"],
	["instant", "Instant"],
	["integer", "Integer"],
	["integer64", "Integer64"],
	["markdown", "Markdown"],
	["oid", "Oid"],
	["positiveInt", "PositiveInt"],
	["string", "String"],
	["time", "Time"],
	["unsignedInt", "UnsignedInt"],
	["uri", "Uri"],
	["url", "Url"],
	["uuid", "Uuid"],
	["xhtml", "Xhtml"],
]);

const primitiveRuntimeKinds = new Map<string, "boolean" | "number" | "string">([
	["base64Binary", "string"],
	["boolean", "boolean"],
	["canonical", "string"],
	["code", "string"],
	["date", "string"],
	["dateTime", "string"],
	["decimal", "number"],
	["id", "string"],
	["instant", "string"],
	["integer", "number"],
	["integer64", "string"],
	["markdown", "string"],
	["oid", "string"],
	["positiveInt", "number"],
	["string", "string"],
	["time", "string"],
	["unsignedInt", "number"],
	["uri", "string"],
	["url", "string"],
	["uuid", "string"],
	["xhtml", "string"],
]);

export type DefinitionKind =
	| "backbone"
	| "complex-type"
	| "primitive"
	| "resource";

export type BindingMetadata = {
	strength: string;
	valueSet: string | null;
};

export type InvariantMetadata = {
	expression: string | null;
	human: string;
	key: string;
	severity: string;
};

export type NormalizedProperty = {
	binding: BindingMetadata | null;
	choiceGroup: string | null;
	choiceVariant: string | null;
	description: string | null;
	enumValues: string[] | null;
	fhirPath: string;
	invariants: InvariantMetadata[];
	isArray: boolean;
	jsonName: string;
	max: string;
	min: number;
	primitiveType: string | null;
	required: boolean;
	targetProfiles: string[];
	typeRef: string | null;
};

export type NormalizedDefinition = {
	baseName: string | null;
	description: string | null;
	kind: DefinitionKind;
	name: string;
	notes: string[];
	properties: NormalizedProperty[];
	resourceTypeLiteral: string | null;
	sourceMetadata: {
		profileUrl: string | null;
		releaseLabel: string | null;
		version: string | null;
	};
};

export function sortDefinitions(
	definitions: Iterable<NormalizedDefinition>,
): NormalizedDefinition[] {
	return [...definitions].sort((left, right) =>
		left.name.localeCompare(right.name),
	);
}

export function sortProperties(
	properties: Iterable<NormalizedProperty>,
): NormalizedProperty[] {
	return [...properties].sort((left, right) => {
		const leftBaseName = left.jsonName.startsWith("_")
			? left.jsonName.slice(1)
			: left.jsonName;
		const rightBaseName = right.jsonName.startsWith("_")
			? right.jsonName.slice(1)
			: right.jsonName;
		const baseComparison = leftBaseName.localeCompare(rightBaseName);

		if (baseComparison !== 0) {
			return baseComparison;
		}

		if (left.jsonName === right.jsonName) {
			return 0;
		}

		if (left.jsonName === leftBaseName) {
			return -1;
		}

		if (right.jsonName === rightBaseName) {
			return 1;
		}

		return left.jsonName.localeCompare(right.jsonName);
	});
}

export function isPrimitiveType(type: string | null | undefined): boolean {
	return type !== null && type !== undefined && fhirPrimitiveTypes.has(type);
}

export function primitiveRuntimeKind(
	type: string,
): "boolean" | "number" | "string" | null {
	return primitiveRuntimeKinds.get(type) ?? null;
}

export function choiceSuffixForType(type: string): string {
	return choiceSuffixByType.get(type) ?? pascalCase(type);
}

export function inferChoiceMetadata(
	jsonName: string,
	siblingNames: Iterable<string>,
): { choiceGroup: string; choiceVariant: string } | null {
	if (jsonName.startsWith("_")) {
		return null;
	}

	const siblingSet = new Set(siblingNames);

	for (const type of [...choiceSuffixByType.keys()].sort(
		(left, right) => right.length - left.length,
	)) {
		const suffix = choiceSuffixForType(type);

		if (!jsonName.endsWith(suffix)) {
			continue;
		}

		const base = jsonName.slice(
			0,
			Math.max(0, jsonName.length - suffix.length),
		);

		if (!base) {
			continue;
		}

		for (const otherType of choiceSuffixByType.keys()) {
			if (otherType === type) {
				continue;
			}

			const siblingName = `${base}${choiceSuffixForType(otherType)}`;

			if (siblingSet.has(siblingName)) {
				return {
					choiceGroup: `${base}[x]`,
					choiceVariant: type,
				};
			}
		}
	}

	return null;
}

export function definitionNameToFhirPath(name: string): string {
	const [root, ...segments] = name.split("_");

	if (segments.length === 0) {
		return root;
	}

	return [root, ...segments.map((segment) => uncapitalize(segment))].join(".");
}

export function fhirPathToDefinitionName(path: string): string {
	const segments = path.split(".");

	return segments
		.map((segment, index) =>
			index === 0 ? segment : pascalCase(segment.replace(/\[x\]$/, "")),
		)
		.join("_");
}

export function normalizeDefinitionName(name: string): string {
	return name.replace(/\.schema\.json$/, "");
}

export function schemaExportName(name: string): string {
	return `${name}Schema`;
}

export function schemaInternalName(name: string): string {
	return `${name}SchemaInternal`;
}

export function normalizeTargetProfiles(
	value: string | string[] | undefined,
): string[] {
	if (!value) {
		return [];
	}

	return Array.isArray(value) ? [...value].sort() : [value];
}

export function normalizeValue(
	value: string | null | undefined,
): string | null {
	return value ?? null;
}

export function pascalCase(input: string): string {
	if (!input) {
		return input;
	}

	return input[0].toUpperCase() + input.slice(1);
}

export function uncapitalize(input: string): string {
	if (!input) {
		return input;
	}

	return input[0].toLowerCase() + input.slice(1);
}
