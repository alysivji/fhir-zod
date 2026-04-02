import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { repoRoot } from "../shared.ts";

type SpecManifest = {
	packageRoot: string;
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

export type R4TargetCategory =
	| "abstract-whitelist"
	| "core-resource"
	| "other"
	| "profile-resource";

export type R4TargetEntry = {
	abstract: boolean;
	baseDefinition: string | null;
	category: R4TargetCategory;
	kind: string | null;
	name: string;
	shouldGenerate: boolean;
	type: string | null;
	url: string | null;
};

export const r4AbstractTargetNames = [
	"BackboneElement",
	"DomainResource",
	"Element",
	"Resource",
] as const;

const abstractGenerationWhitelist = new Set<string>(r4AbstractTargetNames);

export function loadR4TargetEntries(): R4TargetEntry[] {
	const manifest = loadManifest("r4");
	const packageRoot = resolve(repoRoot, manifest.packageRoot);

	return readdirSync(packageRoot)
		.filter(
			(filename) =>
				filename.startsWith("StructureDefinition-") &&
				filename.endsWith(".json"),
		)
		.map(
			(filename) =>
				JSON.parse(
					readFileSync(join(packageRoot, filename), "utf8"),
				) as StructureDefinition,
		)
		.filter((definition) => definition.resourceType === "StructureDefinition")
		.map((definition) => classifyTargetEntry(definition))
		.sort((left, right) => left.name.localeCompare(right.name));
}

export function listR4CoreResourceNames(): string[] {
	return loadR4TargetEntries()
		.filter((entry) => entry.category === "core-resource")
		.map((entry) => entry.name);
}

export function listR4GenerationTargetNames(): string[] {
	return loadR4TargetEntries()
		.filter((entry) => entry.shouldGenerate)
		.map((entry) => entry.name);
}

export function summarizeR4Targets(entries = loadR4TargetEntries()): {
	abstractGenerationWhitelist: string[];
	concreteResourceCount: number;
	coreResourceCount: number;
	generationTargetCount: number;
	profileResourceCount: number;
} {
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
		abstractGenerationWhitelist: [...abstractGenerationWhitelist].sort(),
		concreteResourceCount,
		coreResourceCount,
		generationTargetCount,
		profileResourceCount,
	};
}

function classifyTargetEntry(definition: StructureDefinition): R4TargetEntry {
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
	const category: R4TargetEntry["category"] = isWhitelistedAbstract
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

function loadManifest(version: "r4"): SpecManifest {
	const manifestPath = join(repoRoot, "src", "spec", version, "manifest.json");
	return JSON.parse(readFileSync(manifestPath, "utf8")) as SpecManifest;
}
