import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
	buildRuntimeSchemas,
	writeNormalizedZodDefinitions,
} from "./emit-zod.ts";
import type {
	BindingMetadata,
	InvariantMetadata,
	NormalizedDefinition,
	NormalizedProperty,
} from "./model.ts";
import { sortDefinitions } from "./model.ts";
import { buildOpenApiR4Definitions } from "./openapi-r4.ts";
import { buildStructureDefinitionR4Definitions } from "./structuredefinition-r4.ts";

type RequiredDiff = {
	openApi: boolean | null;
	property: string;
	structureDefinition: boolean | null;
};

type ArrayDiff = {
	openApi: { isArray: boolean; max: string; min: number } | null;
	property: string;
	structureDefinition: { isArray: boolean; max: string; min: number } | null;
};

type ChoiceDiff = {
	openApi: { choiceGroup: string | null; choiceVariant: string | null } | null;
	property: string;
	structureDefinition: {
		choiceGroup: string | null;
		choiceVariant: string | null;
	} | null;
};

type PrimitiveCompanionDiff = {
	openApi: boolean;
	property: string;
	structureDefinition: boolean;
};

type TargetProfileDiff = {
	openApi: string[];
	property: string;
	structureDefinition: string[];
};

type BindingDiff = {
	openApi: BindingMetadata | null;
	property: string;
	structureDefinition: BindingMetadata | null;
};

type InvariantDiff = {
	openApi: InvariantMetadata[];
	property: string;
	structureDefinition: InvariantMetadata[];
};

export type DefinitionComparison = {
	arrayDiffs: ArrayDiff[];
	bindingDiffs: BindingDiff[];
	choiceDiffs: ChoiceDiff[];
	invariantDiffs: InvariantDiff[];
	name: string;
	notes: string[];
	openApiOnlyProps: string[];
	primitiveCompanionDiffs: PrimitiveCompanionDiff[];
	requiredDiffs: RequiredDiff[];
	sdOnlyProps: string[];
	targetProfileDiffs: TargetProfileDiff[];
};

export type ComparisonReport = {
	definitions: DefinitionComparison[];
	summary: {
		comparedDefinitionCount: number;
		definitionsWithDiffs: number;
		openApiDefinitionCount: number;
		openApiOnlyDefinitionCount: number;
		structureDefinitionDefinitionCount: number;
		structureDefinitionOnlyDefinitionCount: number;
	};
};

export type CompareR4Result = {
	generatedFiles: string[];
	openApiDefinitions: Map<string, NormalizedDefinition>;
	report: ComparisonReport;
	reportPaths: {
		json: string;
		markdown: string;
	};
	runtimeSchemas: Record<string, import("zod").ZodTypeAny>;
	structureDefinitionDefinitions: Map<string, NormalizedDefinition>;
};

const moduleDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(moduleDir, "../../..");

export function compareR4(): CompareR4Result {
	const openApiDefinitions = buildOpenApiR4Definitions();
	const structureDefinitionResult = buildStructureDefinitionR4Definitions(
		openApiDefinitions.keys(),
	);
	const report = buildComparisonReport(
		openApiDefinitions,
		structureDefinitionResult.definitions,
	);
	const outputDir = resolve(
		repoRoot,
		".context",
		"generated",
		"r4-structuredefinition",
	);
	const reportDir = resolve(repoRoot, ".context", "reports");
	const generatedFiles = writeNormalizedZodDefinitions({
		definitions: structureDefinitionResult.definitions,
		generatedBy: "scripts/compare-r4.ts",
		outputDir,
		primitivePatterns: structureDefinitionResult.primitivePatterns,
	});
	const runtimeSchemas = buildRuntimeSchemas(
		structureDefinitionResult.definitions,
		structureDefinitionResult.primitivePatterns,
	);
	const reportPaths = writeReportFiles(report, reportDir);

	return {
		generatedFiles,
		openApiDefinitions,
		report,
		reportPaths,
		runtimeSchemas,
		structureDefinitionDefinitions: structureDefinitionResult.definitions,
	};
}

export function buildComparisonReport(
	openApiDefinitions: Map<string, NormalizedDefinition>,
	structureDefinitionDefinitions: Map<string, NormalizedDefinition>,
): ComparisonReport {
	const definitionNames = new Set([
		...openApiDefinitions.keys(),
		...structureDefinitionDefinitions.keys(),
	]);
	const comparisons = [...definitionNames]
		.sort((left, right) => left.localeCompare(right))
		.map((name) =>
			compareDefinition(
				name,
				openApiDefinitions.get(name) ?? null,
				structureDefinitionDefinitions.get(name) ?? null,
			),
		);

	return {
		definitions: comparisons,
		summary: {
			comparedDefinitionCount: comparisons.length,
			definitionsWithDiffs: comparisons.filter(hasDiffs).length,
			openApiDefinitionCount: openApiDefinitions.size,
			openApiOnlyDefinitionCount: comparisons.filter((comparison) =>
				comparison.notes.includes("Missing in StructureDefinition."),
			).length,
			structureDefinitionDefinitionCount: structureDefinitionDefinitions.size,
			structureDefinitionOnlyDefinitionCount: comparisons.filter((comparison) =>
				comparison.notes.includes("Missing in OpenAPI."),
			).length,
		},
	};
}

function compareDefinition(
	name: string,
	openApi: NormalizedDefinition | null,
	structureDefinition: NormalizedDefinition | null,
): DefinitionComparison {
	const openApiProperties = buildPropertyMap(openApi?.properties ?? []);
	const structureDefinitionProperties = buildPropertyMap(
		structureDefinition?.properties ?? [],
	);
	const openApiPropertyNames = new Set(openApiProperties.keys());
	const structureDefinitionPropertyNames = new Set(
		structureDefinitionProperties.keys(),
	);
	const allPropertyNames = new Set([
		...openApiPropertyNames,
		...structureDefinitionPropertyNames,
	]);
	const notes: string[] = [];

	if (!openApi) {
		notes.push("Missing in OpenAPI.");
	}

	if (!structureDefinition) {
		notes.push("Missing in StructureDefinition.");
	}

	if (
		openApi &&
		structureDefinition &&
		openApi.kind !== structureDefinition.kind
	) {
		notes.push(
			`Definition kind differs: OpenAPI=${openApi.kind}, StructureDefinition=${structureDefinition.kind}.`,
		);
	}

	if (
		openApi &&
		structureDefinition &&
		openApi.baseName !== structureDefinition.baseName
	) {
		notes.push(
			`Base differs: OpenAPI=${openApi.baseName ?? "null"}, StructureDefinition=${structureDefinition.baseName ?? "null"}.`,
		);
	}

	for (const note of openApi?.notes ?? []) {
		notes.push(`OpenAPI: ${note}`);
	}

	for (const note of structureDefinition?.notes ?? []) {
		notes.push(`StructureDefinition: ${note}`);
	}

	const comparison: DefinitionComparison = {
		arrayDiffs: [],
		bindingDiffs: [],
		choiceDiffs: [],
		invariantDiffs: [],
		name,
		notes: [...new Set(notes)],
		openApiOnlyProps: [...openApiPropertyNames]
			.filter((property) => !structureDefinitionPropertyNames.has(property))
			.sort((left, right) => left.localeCompare(right)),
		primitiveCompanionDiffs: [],
		requiredDiffs: [],
		sdOnlyProps: [...structureDefinitionPropertyNames]
			.filter((property) => !openApiPropertyNames.has(property))
			.sort((left, right) => left.localeCompare(right)),
		targetProfileDiffs: [],
	};

	for (const propertyName of [...allPropertyNames].sort((left, right) =>
		left.localeCompare(right),
	)) {
		const openApiProperty = openApiProperties.get(propertyName) ?? null;
		const structureDefinitionProperty =
			structureDefinitionProperties.get(propertyName) ?? null;

		if (!openApiProperty || !structureDefinitionProperty) {
			continue;
		}

		if (openApiProperty.required !== structureDefinitionProperty.required) {
			comparison.requiredDiffs.push({
				openApi: openApiProperty.required,
				property: propertyName,
				structureDefinition: structureDefinitionProperty.required,
			});
		}

		if (
			openApiProperty.isArray !== structureDefinitionProperty.isArray ||
			openApiProperty.min !== structureDefinitionProperty.min ||
			openApiProperty.max !== structureDefinitionProperty.max
		) {
			comparison.arrayDiffs.push({
				openApi: {
					isArray: openApiProperty.isArray,
					max: openApiProperty.max,
					min: openApiProperty.min,
				},
				property: propertyName,
				structureDefinition: {
					isArray: structureDefinitionProperty.isArray,
					max: structureDefinitionProperty.max,
					min: structureDefinitionProperty.min,
				},
			});
		}

		if (
			openApiProperty.choiceGroup !== structureDefinitionProperty.choiceGroup ||
			openApiProperty.choiceVariant !==
				structureDefinitionProperty.choiceVariant
		) {
			comparison.choiceDiffs.push({
				openApi: {
					choiceGroup: openApiProperty.choiceGroup,
					choiceVariant: openApiProperty.choiceVariant,
				},
				property: propertyName,
				structureDefinition: {
					choiceGroup: structureDefinitionProperty.choiceGroup,
					choiceVariant: structureDefinitionProperty.choiceVariant,
				},
			});
		}

		if (
			!arraysEqual(
				openApiProperty.targetProfiles,
				structureDefinitionProperty.targetProfiles,
			)
		) {
			comparison.targetProfileDiffs.push({
				openApi: openApiProperty.targetProfiles,
				property: propertyName,
				structureDefinition: structureDefinitionProperty.targetProfiles,
			});
		}

		if (
			!bindingEqual(
				openApiProperty.binding,
				structureDefinitionProperty.binding,
			)
		) {
			comparison.bindingDiffs.push({
				openApi: openApiProperty.binding,
				property: propertyName,
				structureDefinition: structureDefinitionProperty.binding,
			});
		}

		if (
			!invariantsEqual(
				openApiProperty.invariants,
				structureDefinitionProperty.invariants,
			)
		) {
			comparison.invariantDiffs.push({
				openApi: openApiProperty.invariants,
				property: propertyName,
				structureDefinition: structureDefinitionProperty.invariants,
			});
		}
	}

	for (const propertyName of [...allPropertyNames]
		.filter((property) => !property.startsWith("_"))
		.sort((left, right) => left.localeCompare(right))) {
		const openApiHasCompanion = openApiProperties.has(`_${propertyName}`);
		const structureDefinitionHasCompanion = structureDefinitionProperties.has(
			`_${propertyName}`,
		);

		if (openApiHasCompanion !== structureDefinitionHasCompanion) {
			comparison.primitiveCompanionDiffs.push({
				openApi: openApiHasCompanion,
				property: propertyName,
				structureDefinition: structureDefinitionHasCompanion,
			});
		}
	}

	return comparison;
}

function buildPropertyMap(
	properties: NormalizedProperty[],
): Map<string, NormalizedProperty> {
	return new Map(
		properties.map((property) => [property.jsonName, property] as const),
	);
}

function arraysEqual(left: string[], right: string[]): boolean {
	return JSON.stringify(left) === JSON.stringify(right);
}

function bindingEqual(
	left: BindingMetadata | null,
	right: BindingMetadata | null,
): boolean {
	return JSON.stringify(left) === JSON.stringify(right);
}

function invariantsEqual(
	left: InvariantMetadata[],
	right: InvariantMetadata[],
): boolean {
	return JSON.stringify(left) === JSON.stringify(right);
}

function hasDiffs(comparison: DefinitionComparison): boolean {
	return (
		comparison.arrayDiffs.length > 0 ||
		comparison.bindingDiffs.length > 0 ||
		comparison.choiceDiffs.length > 0 ||
		comparison.invariantDiffs.length > 0 ||
		comparison.notes.length > 0 ||
		comparison.openApiOnlyProps.length > 0 ||
		comparison.primitiveCompanionDiffs.length > 0 ||
		comparison.requiredDiffs.length > 0 ||
		comparison.sdOnlyProps.length > 0 ||
		comparison.targetProfileDiffs.length > 0
	);
}

function writeReportFiles(
	report: ComparisonReport,
	reportDir: string,
): { json: string; markdown: string } {
	mkdirSync(reportDir, { recursive: true });
	const jsonPath = resolve(reportDir, "r4-structuredefinition-vs-openapi.json");
	const markdownPath = resolve(
		reportDir,
		"r4-structuredefinition-vs-openapi.md",
	);

	writeFileIfChanged(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
	writeFileIfChanged(markdownPath, buildMarkdownReport(report));

	return {
		json: jsonPath,
		markdown: markdownPath,
	};
}

function buildMarkdownReport(report: ComparisonReport): string {
	const lines = [
		"# R4 StructureDefinition vs OpenAPI",
		"",
		"## Summary",
		`- OpenAPI definitions: ${report.summary.openApiDefinitionCount}`,
		`- StructureDefinition definitions: ${report.summary.structureDefinitionDefinitionCount}`,
		`- Compared definitions: ${report.summary.comparedDefinitionCount}`,
		`- Definitions with diffs: ${report.summary.definitionsWithDiffs}`,
		`- OpenAPI-only definitions: ${report.summary.openApiOnlyDefinitionCount}`,
		`- StructureDefinition-only definitions: ${report.summary.structureDefinitionOnlyDefinitionCount}`,
		"",
	];

	for (const comparison of report.definitions.filter(hasDiffs)) {
		lines.push(`## ${comparison.name}`);

		if (comparison.notes.length > 0) {
			lines.push(...comparison.notes.map((note) => `- Note: ${note}`));
		}

		if (comparison.openApiOnlyProps.length > 0) {
			lines.push(
				`- OpenAPI-only properties: ${comparison.openApiOnlyProps.join(", ")}`,
			);
		}

		if (comparison.sdOnlyProps.length > 0) {
			lines.push(
				`- StructureDefinition-only properties: ${comparison.sdOnlyProps.join(", ")}`,
			);
		}

		for (const diff of comparison.requiredDiffs) {
			lines.push(
				`- Required diff ${diff.property}: OpenAPI=${String(diff.openApi)}, StructureDefinition=${String(diff.structureDefinition)}`,
			);
		}

		for (const diff of comparison.arrayDiffs) {
			lines.push(
				`- Cardinality diff ${diff.property}: OpenAPI=${JSON.stringify(diff.openApi)}, StructureDefinition=${JSON.stringify(diff.structureDefinition)}`,
			);
		}

		for (const diff of comparison.choiceDiffs) {
			lines.push(
				`- Choice diff ${diff.property}: OpenAPI=${JSON.stringify(diff.openApi)}, StructureDefinition=${JSON.stringify(diff.structureDefinition)}`,
			);
		}

		for (const diff of comparison.primitiveCompanionDiffs) {
			lines.push(
				`- Primitive companion diff ${diff.property}: OpenAPI=${diff.openApi}, StructureDefinition=${diff.structureDefinition}`,
			);
		}

		for (const diff of comparison.targetProfileDiffs) {
			lines.push(
				`- Target profile diff ${diff.property}: OpenAPI=${JSON.stringify(diff.openApi)}, StructureDefinition=${JSON.stringify(diff.structureDefinition)}`,
			);
		}

		for (const diff of comparison.bindingDiffs) {
			lines.push(
				`- Binding diff ${diff.property}: OpenAPI=${JSON.stringify(diff.openApi)}, StructureDefinition=${JSON.stringify(diff.structureDefinition)}`,
			);
		}

		for (const diff of comparison.invariantDiffs) {
			lines.push(
				`- Invariant diff ${diff.property}: OpenAPI=${JSON.stringify(diff.openApi)}, StructureDefinition=${JSON.stringify(diff.structureDefinition)}`,
			);
		}

		lines.push("");
	}

	return `${lines.join("\n").trimEnd()}\n`;
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

export function definitionComparisonsWithDiffs(
	report: ComparisonReport,
): DefinitionComparison[] {
	return report.definitions.filter(hasDiffs);
}

export function sortedDefinitionNames(
	definitions: Map<string, NormalizedDefinition>,
): string[] {
	return sortDefinitions(definitions.values()).map(
		(definition) => definition.name,
	);
}
