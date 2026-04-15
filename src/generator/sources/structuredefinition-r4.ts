import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { resolveRequiredSpecPackageRoot } from "../../spec/spec-cache.ts";
import type {
	BindingMetadata,
	InvariantMetadata,
	NormalizedDefinition,
	NormalizedProperty,
} from "../model.ts";
import {
	choiceSuffixForType,
	definitionNameToFhirPath,
	fhirPathToDefinitionName,
	fhirPrimitiveTypes,
	isPrimitiveType,
	normalizeTargetProfiles,
	sortProperties,
} from "../model.ts";
import { listR4GenerationTargetNames } from "../targets/r4.ts";

type StructureDefinition = {
	abstract?: boolean;
	baseDefinition?: string;
	description?: string;
	fhirVersion?: string;
	kind?: string;
	meta?: {
		lastUpdated?: string;
	};
	name: string;
	resourceType: "StructureDefinition";
	snapshot?: {
		element?: StructureElement[];
	};
	url?: string;
	version?: string;
	type: string;
};

type ValueSet = {
	compose?: {
		include?: ValueSetInclude[];
	};
	expansion?: {
		contains?: ValueSetExpansionContains[];
	};
	resourceType: "ValueSet";
	url?: string;
};

type ValueSetInclude = {
	concept?: ValueSetConcept[];
	system?: string;
	valueSet?: string[];
};

type ValueSetConcept = {
	code?: string;
};

type ValueSetExpansionContains = {
	code?: string;
	contains?: ValueSetExpansionContains[];
};

type CodeSystem = {
	concept?: CodeSystemConcept[];
	resourceType: "CodeSystem";
	url?: string;
};

type CodeSystemConcept = {
	code?: string;
	concept?: CodeSystemConcept[];
};

type StructureElement = {
	base?: {
		path?: string;
	};
	binding?: {
		strength?: string;
		valueSet?: string;
		valueSetReference?: {
			reference?: string;
		};
		valueSetUri?: string;
	};
	constraint?: StructureConstraint[];
	definition?: string;
	id: string;
	max: string;
	min: number;
	path: string;
	short?: string;
	type?: StructureType[];
};

type StructureType = {
	code: string;
	extension?: StructureTypeExtension[];
	profile?: string | string[];
	targetProfile?: string | string[];
};

type StructureTypeExtension = {
	url: string;
	valueString?: string;
	valueUrl?: string;
};

type StructureConstraint = {
	expression?: string;
	human?: string;
	key?: string;
	severity?: string;
};

export type StructureDefinitionBuildResult = {
	definitions: Map<string, NormalizedDefinition>;
	primitivePatterns: Map<string, string>;
};

type StructureDefinitionBuildOptions = {
	releaseLabel: string;
	scopeNames: Iterable<string>;
	version: "stu3" | "r4" | "r4b";
};

type TerminologyIndex = {
	codeSystemsByUrl: Map<string, CodeSystem>;
	valueSetsByUrl: Map<string, ValueSet>;
};

const fhirPathPrimitiveByCode = new Map<string, string>([
	["http://hl7.org/fhirpath/System.Boolean", "boolean"],
	["http://hl7.org/fhirpath/System.Date", "date"],
	["http://hl7.org/fhirpath/System.DateTime", "dateTime"],
	["http://hl7.org/fhirpath/System.Decimal", "decimal"],
	["http://hl7.org/fhirpath/System.Integer", "integer"],
	["http://hl7.org/fhirpath/System.String", "string"],
	["http://hl7.org/fhirpath/System.Time", "time"],
]);

export function buildStructureDefinitionR4Definitions(
	scopeNames: Iterable<string> = listR4GenerationTargetNames(),
): StructureDefinitionBuildResult {
	return buildStructureDefinitionsFromSpec({
		releaseLabel: "R4",
		scopeNames,
		version: "r4",
	});
}

export function buildStructureDefinitionsFromSpec(
	options: StructureDefinitionBuildOptions,
): StructureDefinitionBuildResult {
	const packageRoot = resolveRequiredSpecPackageRoot(options.version);
	const index = loadStructureDefinitionIndex(packageRoot);
	const terminology = loadTerminologyIndex(packageRoot);
	const primitivePatterns = loadPrimitivePatterns(index);
	const normalized = new Map<string, NormalizedDefinition>();
	const desiredNames = expandScopeNames(options.scopeNames, index);

	for (const name of [...desiredNames].sort((left, right) =>
		left.localeCompare(right),
	)) {
		const definition = buildDefinitionByName(
			name,
			desiredNames,
			index,
			terminology,
			options.releaseLabel,
		);

		if (!definition) {
			continue;
		}

		normalized.set(name, definition);
	}

	return {
		definitions: normalized,
		primitivePatterns,
	};
}

function expandScopeNames(
	initialNames: Iterable<string>,
	index: Map<string, StructureDefinition>,
): Set<string> {
	const desiredNames = new Set(initialNames);
	const queue = [...desiredNames];

	while (queue.length > 0) {
		const name = queue.shift();

		if (!name) {
			continue;
		}

		for (const dependency of collectReferencedDefinitionNames(name, index)) {
			if (desiredNames.has(dependency)) {
				continue;
			}

			desiredNames.add(dependency);
			queue.push(dependency);
		}
	}

	return desiredNames;
}

function collectReferencedDefinitionNames(
	name: string,
	index: Map<string, StructureDefinition>,
): Set<string> {
	const references = new Set<string>();

	if (name.includes("_")) {
		const fhirPath = definitionNameToFhirPath(name);
		const rootName = fhirPath.split(".")[0];
		const definition = index.get(rootName);
		const elements = definition?.snapshot?.element ?? [];

		for (const element of directChildElements(elements, fhirPath)) {
			for (const reference of collectElementTypeRefs(element, elements)) {
				references.add(reference);
			}
		}

		const rootElement = elements.find((element) => element.path === fhirPath);
		const directTypeCode = rootElement?.type?.[0]?.code ?? null;

		if (directTypeCode === "BackboneElement" || directTypeCode === "Element") {
			references.add(directTypeCode);
		}

		return references;
	}

	const definition = index.get(name);
	const elements = definition?.snapshot?.element ?? [];
	const rootPath = definition?.type ?? name;

	for (const element of directChildElements(elements, rootPath)) {
		for (const reference of collectElementTypeRefs(element, elements)) {
			references.add(reference);
		}
	}

	const baseName = lastPathSegment(definition?.baseDefinition);

	if (baseName && baseName !== name) {
		references.add(baseName);
	}

	return references;
}

function collectElementTypeRefs(
	element: StructureElement,
	elements: StructureElement[],
): Set<string> {
	const references = new Set<string>();

	if (lastPathSegment(element.path)?.includes("[x]")) {
		for (const type of element.type ?? []) {
			const normalizedType = normalizeStructureType(element, type, elements);

			if (normalizedType.typeRef) {
				references.add(normalizedType.typeRef);
			}
		}
	} else {
		const normalizedType = normalizeStructureType(
			element,
			element.type?.[0],
			elements,
		);

		if (normalizedType.typeRef) {
			references.add(normalizedType.typeRef);
		}
	}

	return references;
}

function loadStructureDefinitionIndex(
	packageRoot: string,
): Map<string, StructureDefinition> {
	const index = new Map<string, StructureDefinition>();

	for (const filename of readdirSync(packageRoot)) {
		if (
			!filename.startsWith("StructureDefinition-") ||
			!filename.endsWith(".json")
		) {
			continue;
		}

		const definition = JSON.parse(
			stripJsonBom(readFileSync(join(packageRoot, filename), "utf8")),
		) as StructureDefinition;

		const existingDefinition = index.get(definition.name);

		if (
			!existingDefinition ||
			shouldReplaceIndexedDefinition(existingDefinition, definition)
		) {
			index.set(definition.name, definition);
		}
	}

	return index;
}

function shouldReplaceIndexedDefinition(
	existingDefinition: StructureDefinition,
	candidateDefinition: StructureDefinition,
): boolean {
	if (isCanonicalDefinition(candidateDefinition)) {
		return !isCanonicalDefinition(existingDefinition);
	}

	return false;
}

function isCanonicalDefinition(definition: StructureDefinition): boolean {
	return (
		definition.url ===
		`http://hl7.org/fhir/StructureDefinition/${definition.name}`
	);
}

function loadPrimitivePatterns(
	index: Map<string, StructureDefinition>,
): Map<string, string> {
	const patterns = new Map<string, string>();

	for (const type of fhirPrimitiveTypes) {
		const definition = index.get(type);
		const elements = definition?.snapshot?.element ?? [];
		const valueElement = elements.find(
			(element) => element.path === `${type}.value`,
		);
		const pattern = valueElement?.type
			?.flatMap((entry) => entry.extension ?? [])
			.find(
				(extension) =>
					extension.url === "http://hl7.org/fhir/StructureDefinition/regex",
			)?.valueString;

		if (pattern) {
			patterns.set(type, pattern);
		}
	}

	return patterns;
}

function loadTerminologyIndex(packageRoot: string): TerminologyIndex {
	const valueSetsByUrl = new Map<string, ValueSet>();
	const codeSystemsByUrl = new Map<string, CodeSystem>();

	for (const filename of readdirSync(packageRoot)) {
		if (!filename.endsWith(".json")) {
			continue;
		}

		const resource = JSON.parse(
			stripJsonBom(readFileSync(join(packageRoot, filename), "utf8")),
		) as ValueSet | CodeSystem | StructureDefinition;

		if (resource.resourceType === "ValueSet" && resource.url) {
			valueSetsByUrl.set(resource.url, resource);
		}

		if (resource.resourceType === "CodeSystem" && resource.url) {
			codeSystemsByUrl.set(resource.url, resource);
		}
	}

	return {
		codeSystemsByUrl,
		valueSetsByUrl,
	};
}

function stripJsonBom(content: string): string {
	return content.charCodeAt(0) === 0xfeff ? content.slice(1) : content;
}

function buildDefinitionByName(
	name: string,
	scopeNames: Set<string>,
	index: Map<string, StructureDefinition>,
	terminology: TerminologyIndex,
	releaseLabel: string,
): NormalizedDefinition | null {
	if (name.includes("_")) {
		return buildSyntheticDefinition(
			name,
			scopeNames,
			index,
			terminology,
			releaseLabel,
		);
	}

	return buildRootDefinition(
		name,
		scopeNames,
		index,
		terminology,
		releaseLabel,
	);
}

function buildRootDefinition(
	name: string,
	scopeNames: Set<string>,
	index: Map<string, StructureDefinition>,
	terminology: TerminologyIndex,
	releaseLabel: string,
): NormalizedDefinition | null {
	const definition = index.get(name);

	if (!definition) {
		return null;
	}

	const elements = definition.snapshot?.element ?? [];
	const notes: string[] = [];
	const properties: NormalizedProperty[] = [];
	const resourceTypeLiteral =
		definition.kind === "resource" && !definition.abstract
			? definition.type
			: null;

	if (resourceTypeLiteral) {
		properties.push({
			binding: null,
			choiceGroup: null,
			choiceVariant: null,
			description: `This is a ${resourceTypeLiteral} resource.`,
			enumValues: null,
			fhirPath: `${definition.type}.resourceType`,
			invariants: [],
			isArray: false,
			jsonName: "resourceType",
			max: "1",
			min: 1,
			primitiveType: null,
			required: true,
			targetProfiles: [],
			typeRef: null,
		});
	}

	for (const element of directChildElements(elements, definition.type)) {
		properties.push(
			...normalizeElementProperties(
				element,
				elements,
				scopeNames,
				notes,
				terminology,
			),
		);
	}

	return {
		baseName: lastPathSegment(definition.baseDefinition),
		description:
			definition.description ??
			elements.find((element) => element.path === definition.type)
				?.definition ??
			null,
		kind: mapDefinitionKind(definition),
		name,
		notes,
		properties: sortProperties(properties),
		resourceTypeLiteral,
		sourceMetadata: {
			profileUrl: definition.url ?? null,
			releaseLabel,
			version: definition.version ?? definition.fhirVersion ?? null,
		},
	};
}

function buildSyntheticDefinition(
	name: string,
	scopeNames: Set<string>,
	index: Map<string, StructureDefinition>,
	terminology: TerminologyIndex,
	releaseLabel: string,
): NormalizedDefinition | null {
	const fhirPath = definitionNameToFhirPath(name);
	const rootName = fhirPath.split(".")[0];
	const definition = index.get(rootName);

	if (!definition) {
		return null;
	}

	const elements = definition.snapshot?.element ?? [];
	const rootElement = elements.find((element) => element.path === fhirPath);

	if (!rootElement) {
		return null;
	}

	const notes: string[] = [];
	const properties = directChildElements(elements, fhirPath).flatMap(
		(element) =>
			normalizeElementProperties(
				element,
				elements,
				scopeNames,
				notes,
				terminology,
			),
	);

	return {
		baseName: inferSyntheticBaseName(rootElement, elements),
		description:
			rootElement.definition ??
			rootElement.short ??
			definition.description ??
			null,
		kind: "backbone",
		name,
		notes,
		properties: sortProperties(properties),
		resourceTypeLiteral: null,
		sourceMetadata: {
			profileUrl: definition.url ?? null,
			releaseLabel,
			version: definition.version ?? definition.fhirVersion ?? null,
		},
	};
}

function directChildElements(
	elements: StructureElement[],
	prefixPath: string,
): StructureElement[] {
	const prefix = `${prefixPath}.`;
	const depth = prefixPath.split(".").length + 1;

	return elements
		.filter(
			(element) =>
				element.path.startsWith(prefix) &&
				element.path.split(".").length === depth,
		)
		.sort((left, right) => left.path.localeCompare(right.path));
}

function mapDefinitionKind(
	definition: StructureDefinition,
): NormalizedDefinition["kind"] {
	if (definition.kind === "resource") {
		return "resource";
	}

	if (definition.kind === "primitive-type") {
		return "primitive";
	}

	return "complex-type";
}

function inferSyntheticBaseName(
	element: StructureElement,
	elements: StructureElement[],
): string | null {
	const directTypeCode = element.type?.[0]?.code ?? null;

	if (directTypeCode === "BackboneElement" || directTypeCode === "Element") {
		return directTypeCode;
	}

	const normalizedType = normalizeStructureType(
		element,
		element.type?.[0],
		elements,
	);

	return normalizedType.typeRef ?? normalizedType.primitiveType ?? null;
}

function normalizeElementProperties(
	element: StructureElement,
	elements: StructureElement[],
	scopeNames: Set<string>,
	notes: string[],
	terminology: TerminologyIndex,
): NormalizedProperty[] {
	const segment = lastPathSegment(element.path) ?? element.path;

	if (segment.includes("[x]")) {
		return normalizeChoiceElementProperties(
			element,
			elements,
			scopeNames,
			notes,
			terminology,
			segment,
		);
	}

	const properties: NormalizedProperty[] = [];
	const normalizedType = normalizeStructureType(
		element,
		element.type?.[0],
		elements,
	);
	const description = element.definition ?? element.short ?? null;

	if (normalizedType.typeRef && !scopeNames.has(normalizedType.typeRef)) {
		notes.push(
			`${element.path} references ${normalizedType.typeRef}, which is outside the comparison scope.`,
		);
	}

	properties.push({
		binding: normalizeBinding(element.binding),
		choiceGroup: null,
		choiceVariant: null,
		description,
		enumValues: resolveBindingEnumValues(
			normalizeBinding(element.binding),
			normalizedType.primitiveType,
			terminology,
		),
		fhirPath: element.path,
		invariants: normalizeInvariants(element.constraint),
		isArray: element.max === "*",
		jsonName: segment,
		max: element.max,
		min: element.min,
		primitiveType: normalizedType.primitiveType,
		required: element.min > 0,
		targetProfiles: normalizedType.targetProfiles,
		typeRef: normalizedType.typeRef,
	});

	if (normalizedType.primitiveType) {
		properties.push(
			buildPrimitiveCompanionProperty(
				segment,
				element.path,
				element.max === "*",
			),
		);
	}

	return properties;
}

function normalizeChoiceElementProperties(
	element: StructureElement,
	elements: StructureElement[],
	scopeNames: Set<string>,
	notes: string[],
	terminology: TerminologyIndex,
	segment: string,
): NormalizedProperty[] {
	const baseSegment = segment.replace("[x]", "");
	const description = element.definition ?? element.short ?? null;
	const properties: NormalizedProperty[] = [];

	for (const type of element.type ?? []) {
		const normalizedType = normalizeStructureType(element, type, elements);
		const choiceVariant =
			normalizedType.primitiveType ??
			normalizedType.typeRef ??
			normalizeTypeCode(type.code);
		const jsonName = `${baseSegment}${choiceSuffixForType(choiceVariant)}`;
		const existingProperty = properties.find(
			(property) => property.jsonName === jsonName,
		);

		if (normalizedType.typeRef && !scopeNames.has(normalizedType.typeRef)) {
			notes.push(
				`${element.path} references ${normalizedType.typeRef}, which is outside the comparison scope.`,
			);
		}

		if (existingProperty) {
			existingProperty.targetProfiles = mergeUniqueStrings(
				existingProperty.targetProfiles,
				normalizedType.targetProfiles,
			);
			continue;
		}

		properties.push({
			binding: normalizeBinding(element.binding),
			choiceGroup: segment,
			choiceVariant,
			description,
			enumValues: resolveBindingEnumValues(
				normalizeBinding(element.binding),
				normalizedType.primitiveType,
				terminology,
			),
			fhirPath: element.path,
			invariants: normalizeInvariants(element.constraint),
			isArray: element.max === "*",
			jsonName,
			max: element.max,
			min: element.min,
			primitiveType: normalizedType.primitiveType,
			required: false,
			targetProfiles: normalizedType.targetProfiles,
			typeRef: normalizedType.typeRef,
		});

		if (normalizedType.primitiveType) {
			properties.push(
				buildPrimitiveCompanionProperty(
					jsonName,
					element.path,
					element.max === "*",
					segment,
					choiceVariant,
				),
			);
		}
	}

	return properties;
}

function mergeUniqueStrings(left: string[], right: string[]): string[] {
	return [...new Set([...left, ...right])].sort((leftValue, rightValue) =>
		leftValue.localeCompare(rightValue),
	);
}

function buildPrimitiveCompanionProperty(
	jsonName: string,
	fhirPath: string,
	isArray: boolean,
	choiceGroup?: string,
	choiceVariant?: string,
): NormalizedProperty {
	return {
		binding: null,
		choiceGroup: choiceGroup ?? null,
		choiceVariant: choiceVariant ?? null,
		description: `Extensions for ${jsonName}`,
		enumValues: null,
		fhirPath,
		invariants: [],
		isArray,
		jsonName: `_${jsonName}`,
		max: "1",
		min: 0,
		primitiveType: null,
		required: false,
		targetProfiles: [],
		typeRef: "Element",
	};
}

function normalizeStructureType(
	element: StructureElement,
	type: StructureType | undefined,
	elements: StructureElement[],
): {
	primitiveType: string | null;
	targetProfiles: string[];
	typeRef: string | null;
} {
	if (!type) {
		return {
			primitiveType: null,
			targetProfiles: [],
			typeRef: hasNestedChildren(elements, element.path)
				? fhirPathToDefinitionName(element.path)
				: null,
		};
	}

	const normalizedCode = normalizeTypeCode(type.code);
	const extensionType =
		type.extension?.find(
			(entry) =>
				entry.url ===
				"http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
		)?.valueUrl ?? null;
	let primitiveType: string | null = null;

	if (isPrimitiveType(normalizedCode)) {
		primitiveType = normalizedCode;
	} else if (normalizedCode.startsWith("http://hl7.org/fhirpath/System.")) {
		primitiveType =
			extensionType ?? fhirPathPrimitiveByCode.get(normalizedCode) ?? null;
	}

	if (
		primitiveType === "string" &&
		lastPathSegment(element.path) === "id" &&
		element.base?.path === "Resource.id"
	) {
		primitiveType = "id";
	}

	if (primitiveType) {
		return {
			primitiveType,
			targetProfiles: [],
			typeRef: null,
		};
	}

	if (
		(normalizedCode === "BackboneElement" || normalizedCode === "Element") &&
		hasNestedChildren(elements, element.path)
	) {
		return {
			primitiveType: null,
			targetProfiles: normalizeTargetProfiles(type.targetProfile),
			typeRef: fhirPathToDefinitionName(element.path),
		};
	}

	return {
		primitiveType: null,
		targetProfiles: normalizeTargetProfiles(type.targetProfile),
		typeRef: normalizedCode,
	};
}

function normalizeTypeCode(code: string): string {
	return code;
}

function hasNestedChildren(
	elements: StructureElement[],
	prefixPath: string,
): boolean {
	return elements.some((element) => element.path.startsWith(`${prefixPath}.`));
}

function normalizeBinding(
	binding: StructureElement["binding"],
): BindingMetadata | null {
	if (!binding?.strength) {
		return null;
	}

	return {
		strength: binding.strength,
		valueSet:
			binding.valueSet ??
			binding.valueSetUri ??
			binding.valueSetReference?.reference ??
			null,
	};
}

function resolveBindingEnumValues(
	binding: BindingMetadata | null,
	primitiveType: string | null,
	terminology: TerminologyIndex,
): string[] | null {
	if (primitiveType !== "code" || binding?.strength !== "required") {
		return null;
	}

	const valueSetUrl = normalizeCanonicalUrl(binding.valueSet);

	if (!valueSetUrl) {
		return null;
	}

	const valueSet = terminology.valueSetsByUrl.get(valueSetUrl);

	if (!valueSet) {
		return null;
	}

	const codes = collectValueSetCodes(
		valueSet,
		terminology,
		new Set([valueSetUrl]),
	);

	return codes.size > 0
		? [...codes].sort((left, right) => left.localeCompare(right))
		: null;
}

function collectValueSetCodes(
	valueSet: ValueSet,
	terminology: TerminologyIndex,
	visitedValueSetUrls: Set<string>,
): Set<string> {
	const codes = new Set<string>();

	for (const include of valueSet.compose?.include ?? []) {
		for (const concept of include.concept ?? []) {
			if (concept.code) {
				codes.add(concept.code);
			}
		}

		if (include.system) {
			for (const code of collectCodeSystemCodes(
				terminology.codeSystemsByUrl.get(include.system),
			)) {
				codes.add(code);
			}
		}

		for (const importedValueSetUrl of include.valueSet ?? []) {
			const normalizedUrl = normalizeCanonicalUrl(importedValueSetUrl);

			if (!normalizedUrl || visitedValueSetUrls.has(normalizedUrl)) {
				continue;
			}

			const importedValueSet = terminology.valueSetsByUrl.get(normalizedUrl);

			if (!importedValueSet) {
				continue;
			}

			visitedValueSetUrls.add(normalizedUrl);

			for (const code of collectValueSetCodes(
				importedValueSet,
				terminology,
				visitedValueSetUrls,
			)) {
				codes.add(code);
			}
		}
	}

	for (const code of collectExpansionCodes(valueSet.expansion?.contains)) {
		codes.add(code);
	}

	return codes;
}

function normalizeCanonicalUrl(url: string | null): string | null {
	if (!url) {
		return null;
	}

	const [baseUrl] = url.split("|");
	return baseUrl ?? null;
}

function collectCodeSystemCodes(codeSystem: CodeSystem | undefined): string[] {
	if (!codeSystem?.concept) {
		return [];
	}

	return flattenCodeSystemConcepts(codeSystem.concept);
}

function flattenCodeSystemConcepts(concepts: CodeSystemConcept[]): string[] {
	const codes: string[] = [];

	for (const concept of concepts) {
		if (concept.code) {
			codes.push(concept.code);
		}

		if (concept.concept) {
			codes.push(...flattenCodeSystemConcepts(concept.concept));
		}
	}

	return codes;
}

function collectExpansionCodes(
	contains: ValueSetExpansionContains[] | undefined,
): string[] {
	if (!contains) {
		return [];
	}

	const codes: string[] = [];

	for (const entry of contains) {
		if (entry.code) {
			codes.push(entry.code);
		}

		if (entry.contains) {
			codes.push(...collectExpansionCodes(entry.contains));
		}
	}

	return codes;
}

function normalizeInvariants(
	constraints: StructureConstraint[] | undefined,
): InvariantMetadata[] {
	return (constraints ?? [])
		.map((constraint) => ({
			expression: constraint.expression ?? null,
			human: constraint.human ?? "",
			key: constraint.key ?? "",
			severity: constraint.severity ?? "",
		}))
		.filter((constraint) => constraint.key.length > 0)
		.sort((left, right) => left.key.localeCompare(right.key));
}

function lastPathSegment(path: string | undefined): string | null {
	if (!path) {
		return null;
	}

	const segments = path.split("/");
	const lastSlash = segments[segments.length - 1] ?? "";
	const pathSegments = lastSlash.split(".");

	return pathSegments[pathSegments.length - 1] ?? null;
}
