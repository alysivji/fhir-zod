import {
	loadR4TargetEntries,
	summarizeR4Targets,
} from "../src/generator/targets/r4.ts";

type OutputMode = "json" | "names" | "summary";
type CategoryFilter =
	| "abstract-whitelist"
	| "all"
	| "core-resource"
	| "generation-target"
	| "other"
	| "profile-resource";

const args = process.argv.slice(2);

function parseFlag(name: string): string | null {
	const directMatch = args.find((arg) => arg.startsWith(`${name}=`));

	if (directMatch) {
		return directMatch.slice(name.length + 1);
	}

	const flagIndex = args.indexOf(name);

	if (flagIndex === -1) {
		return null;
	}

	return args[flagIndex + 1] ?? null;
}

function hasFlag(name: string): boolean {
	return args.includes(name);
}

const entries = loadR4TargetEntries();
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
const summary = summarizeR4Targets(entries);
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
