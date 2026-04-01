import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { r4AbstractTargetNames } from "../src/generator/model.ts";

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
};

type TargetEntry = {
	abstract: boolean;
	baseDefinition: string | null;
	category:
		| "abstract-whitelist"
		| "core-resource"
		| "other"
		| "profile-resource";
	kind: string | null;
	name: string;
	shouldGenerate: boolean;
	type: string | null;
};

type OutputMode = "json" | "names" | "summary";
type CategoryFilter =
	| "abstract-whitelist"
	| "all"
	| "core-resource"
	| "generation-target"
	| "other"
	| "profile-resource";

const abstractGenerationWhitelist = new Set<string>(r4AbstractTargetNames);

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const args = process.argv.slice(2);

function parseFlag(name: string): string | null {
	const directMatch = args.find((arg) => arg.startsWith(`${name}=`));

	if (directMatch) {
		return directMatch.slice(name.length + 1);
	}

	const flagIndex = args.findIndex((arg) => arg === name);

	if (flagIndex === -1) {
		return null;
	}

	return args[flagIndex + 1] ?? null;
}

function hasFlag(name: string): boolean {
	return args.includes(name);
}

function loadManifest(version: "r4"): SpecManifest {
	const manifestPath = join(repoRoot, "src", "spec", version, "manifest.json");
	return JSON.parse(readFileSync(manifestPath, "utf8")) as SpecManifest;
}

function listTargetEntries(): TargetEntry[] {
	const manifest = loadManifest("r4");
	const packageRoot = resolve(repoRoot, manifest.packageRoot);

	return readdirSync(packageRoot)
		.filter(
			(filename) =>
				filename.startsWith("StructureDefinition-") &&
				filename.endsWith(".json"),
		)
		.map((filename) =>
			JSON.parse(
				readFileSync(join(packageRoot, filename), "utf8"),
			) as StructureDefinition,
		)
		.filter(
			(definition) => definition.resourceType === "StructureDefinition",
		)
		.map((definition) => {
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
			} satisfies TargetEntry;
		})
		.sort((left, right) => left.name.localeCompare(right.name));
}

const entries = listTargetEntries();
const concreteResourceNames = entries
	.filter(
		(entry) =>
			entry.kind === "resource" &&
			entry.abstract === false &&
			(entry.category === "core-resource" ||
				entry.category === "profile-resource"),
	)
	.map((entry) => entry.name);
const coreResourceNames = entries
	.filter((entry) => entry.category === "core-resource")
	.map((entry) => entry.name);
const profileResourceNames = entries
	.filter((entry) => entry.category === "profile-resource")
	.map((entry) => entry.name);
const generationTargetNames = entries
	.filter((entry) => entry.shouldGenerate)
	.map((entry) => entry.name);
const summary = {
	abstractGenerationWhitelist: [...abstractGenerationWhitelist].sort(),
	concreteResourceCount: concreteResourceNames.length,
	coreResourceCount: coreResourceNames.length,
	generationTargetCount: generationTargetNames.length,
	profileResourceCount: profileResourceNames.length,
};
const rawCategoryFilter = parseFlag("--category") ?? "all";
const categoryFilter: CategoryFilter =
	rawCategoryFilter === "abstract-whitelist" ||
	rawCategoryFilter === "all" ||
	rawCategoryFilter === "core-resource" ||
	rawCategoryFilter === "generation-target" ||
	rawCategoryFilter === "other" ||
	rawCategoryFilter === "profile-resource"
		? rawCategoryFilter
		: "all";
const outputMode: OutputMode = hasFlag("--summary")
	? "summary"
	: hasFlag("--names-only")
		? "names"
		: "json";
const filteredEntries = entries.filter((entry) => {
	if (categoryFilter === "all") {
		return true;
	}

	if (categoryFilter === "generation-target") {
		return entry.shouldGenerate;
	}

	return entry.category === categoryFilter;
});
const filteredNames = filteredEntries.map((entry) => entry.name);

if (outputMode === "summary") {
	console.log(
		JSON.stringify(
			{
				categoryFilter,
				filteredCount: filteredEntries.length,
				outputMode,
				summary,
			},
			null,
			2,
		),
	);
	process.exit(0);
}

if (outputMode === "names") {
	console.log(filteredNames.join("\n"));
	process.exit(0);
}

console.log(
	JSON.stringify(
		{
			categoryFilter,
			concreteResourceCount: concreteResourceNames.length,
			concreteResourceNames,
			coreResourceCount: coreResourceNames.length,
			coreResourceNames,
			entries: filteredEntries,
			filteredCount: filteredEntries.length,
			filteredNames,
			generationTargetCount: generationTargetNames.length,
			generationTargetNames,
			outputMode,
			profileResourceCount: profileResourceNames.length,
			profileResourceNames,
			summary,
		},
		null,
		2,
	),
);
