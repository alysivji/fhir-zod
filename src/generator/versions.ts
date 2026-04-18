import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { resolveRequiredSpecPackageRoot } from "../spec/spec-cache.ts";
import {
	type GeneratedLayoutOptions,
	writeNormalizedZodDefinitions,
} from "./emit/zod.ts";
import { repoRoot } from "./shared.ts";
import {
	buildStructureDefinitionsFromSpec,
	type StructureDefinitionBuildResult,
} from "./sources/structuredefinition.ts";

export type FhirVersionId = "stu3" | "r4" | "r4b" | "r5";

export type TargetCategory =
	| "abstract-whitelist"
	| "core-resource"
	| "other"
	| "profile-resource";

export type TargetEntry = {
	abstract: boolean;
	baseDefinition: string | null;
	category: TargetCategory;
	kind: string | null;
	name: string;
	shouldGenerate: boolean;
	type: string | null;
	url: string | null;
};

export type TargetSummary = {
	abstractGenerationWhitelist: string[];
	concreteResourceCount: number;
	coreResourceCount: number;
	generationTargetCount: number;
	profileResourceCount: number;
};

export type GenerationResult = {
	files: string[];
};

export type GenerateVersionOptions = {
	generatedAt?: string;
	outputDir?: string;
	prune?: boolean;
	scopeNames?: Iterable<string>;
};

type StructureDefinition = {
	abstract?: boolean;
	baseDefinition?: string;
	kind?: string;
	name: string;
	resourceType: "StructureDefinition";
	type?: string;
	url?: string;
};

const defaultAbstractTargetNames = [
	"BackboneElement",
	"DomainResource",
	"Element",
	"Resource",
] as const;

export abstract class FhirRelease {
	abstract readonly id: FhirVersionId;
	abstract readonly label: string;
	abstract readonly abstractTargetNames: readonly string[];

	readonly nestedBackboneTypeCodes: readonly string[] = [
		"BackboneElement",
		"Element",
	];

	readonly enableFhirResourceValidation: boolean = true;

	loadTargetEntries(): TargetEntry[] {
		const packageRoot = resolveRequiredSpecPackageRoot(this.id);

		return readdirSync(packageRoot)
			.filter(
				(filename) =>
					filename.startsWith("StructureDefinition-") &&
					filename.endsWith(".json"),
			)
			.map(
				(filename) =>
					JSON.parse(
						stripJsonBom(readFileSync(join(packageRoot, filename), "utf8")),
					) as StructureDefinition,
			)
			.filter((definition) => definition.resourceType === "StructureDefinition")
			.map((definition) => this.classifyTargetEntry(definition))
			.sort((left, right) => left.name.localeCompare(right.name));
	}

	listCoreResourceNames(): string[] {
		return this.loadTargetEntries()
			.filter((entry) => entry.category === "core-resource")
			.map((entry) => entry.name);
	}

	listGenerationTargetNames(): string[] {
		return this.loadTargetEntries()
			.filter((entry) => entry.shouldGenerate)
			.map((entry) => entry.name);
	}

	summarizeTargets(entries = this.loadTargetEntries()): TargetSummary {
		const concreteResourceCount = entries.filter(
			(entry) =>
				entry.kind === "resource" &&
				entry.abstract === false &&
				(entry.category === "core-resource" ||
					entry.category === "profile-resource"),
		).length;
		const coreResourceCount = entries.filter(
			(entry) => entry.category === "core-resource",
		).length;
		const generationTargetCount = entries.filter(
			(entry) => entry.shouldGenerate,
		).length;
		const profileResourceCount = entries.filter(
			(entry) => entry.category === "profile-resource",
		).length;

		return {
			abstractGenerationWhitelist: [...this.abstractTargetNames].sort(),
			concreteResourceCount,
			coreResourceCount,
			generationTargetCount,
			profileResourceCount,
		};
	}

	buildDefinitions(
		scopeNames: Iterable<string> = this.listGenerationTargetNames(),
	): StructureDefinitionBuildResult {
		return buildStructureDefinitionsFromSpec({
			release: this,
			scopeNames,
		});
	}

	protected getGeneratedLayout(): GeneratedLayoutOptions {
		return {
			folderedResourceFamilies: this.listCoreResourceNames(),
		};
	}

	generate(options: GenerateVersionOptions = {}): GenerationResult {
		const structureDefinitionResult = this.buildDefinitions(
			options.scopeNames ?? this.listGenerationTargetNames(),
		);
		const outputDir = options.outputDir ?? resolve(repoRoot, "src", this.id);
		const generatedAt = options.generatedAt ?? new Date().toISOString();
		const files = writeNormalizedZodDefinitions({
			definitions: structureDefinitionResult.definitions,
			enableFhirResourceValidation: this.enableFhirResourceValidation,
			...this.getGeneratedLayout(),
			generatedAt,
			outputDir,
			prune: options.prune ?? true,
			primitivePatterns: structureDefinitionResult.primitivePatterns,
		});

		return {
			files,
		};
	}

	exampleResourcePageUrl(resourceName: string): string {
		return `https://hl7.org/fhir/${this.id.toUpperCase()}/${resourceName.toLowerCase()}-examples.html`;
	}

	private classifyTargetEntry(definition: StructureDefinition): TargetEntry {
		const abstractGenerationWhitelist = new Set<string>(
			this.abstractTargetNames,
		);
		const isWhitelistedAbstract = abstractGenerationWhitelist.has(
			definition.name,
		);
		const isConcreteResource =
			definition.kind === "resource" && definition.abstract !== true;
		const isCoreResource =
			isConcreteResource &&
			definition.type === definition.name &&
			(definition.baseDefinition ===
				"http://hl7.org/fhir/StructureDefinition/Resource" ||
				definition.baseDefinition ===
					"http://hl7.org/fhir/StructureDefinition/DomainResource");
		const isProfileResource = isConcreteResource && !isCoreResource;
		const category: TargetEntry["category"] = isWhitelistedAbstract
			? "abstract-whitelist"
			: isCoreResource
				? "core-resource"
				: isProfileResource
					? "profile-resource"
					: "other";

		return {
			abstract: definition.abstract === true,
			baseDefinition: definition.baseDefinition ?? null,
			category,
			kind: definition.kind ?? null,
			name: definition.name,
			shouldGenerate: isCoreResource || isWhitelistedAbstract,
			type: definition.type ?? null,
			url: definition.url ?? null,
		};
	}
}

export class STU3Release extends FhirRelease {
	readonly id = "stu3";
	readonly label = "STU3";
	readonly abstractTargetNames = defaultAbstractTargetNames;
}

export class R4Release extends FhirRelease {
	readonly id = "r4";
	readonly label = "R4";
	readonly abstractTargetNames = defaultAbstractTargetNames;
}

export class R4BRelease extends FhirRelease {
	readonly id = "r4b";
	readonly label = "R4B";
	readonly abstractTargetNames = [
		"BackboneElement",
		"DataType",
		"DomainResource",
		"Element",
		"Resource",
	] as const;
}

export class R5Release extends FhirRelease {
	readonly id = "r5";
	readonly label = "R5";
	readonly abstractTargetNames = [
		"BackboneElement",
		"BackboneType",
		"Base",
		"DataType",
		"DomainResource",
		"Element",
		"Resource",
	] as const;
	readonly nestedBackboneTypeCodes = [
		"BackboneElement",
		"BackboneType",
		"Element",
	] as const;
}

export const supportedFhirVersions = ["stu3", "r4", "r4b", "r5"] as const;

export const fhirReleases: Record<FhirVersionId, FhirRelease> = {
	r4: new R4Release(),
	r4b: new R4BRelease(),
	r5: new R5Release(),
	stu3: new STU3Release(),
};

export function getFhirRelease(version: string): FhirRelease | null {
	return Object.hasOwn(fhirReleases, version)
		? fhirReleases[version as FhirVersionId]
		: null;
}

function stripJsonBom(content: string): string {
	return content.charCodeAt(0) === 0xfeff ? content.slice(1) : content;
}
