import { pathToFileURL } from "node:url";
import type { FhirVersionId, TargetEntry } from "../src/generator/versions.ts";
import {
	getFhirRelease,
	supportedFhirVersions,
} from "../src/generator/versions.ts";

type OutputMode = "json" | "names" | "summary";
type CategoryFilter =
	| "abstract-whitelist"
	| "all"
	| "core-resource"
	| "generation-target"
	| "other"
	| "profile-resource";

const categoryFilters = new Set<string>([
	"abstract-whitelist",
	"all",
	"core-resource",
	"generation-target",
	"other",
	"profile-resource",
]);

export function runListTargetsCli(defaultVersion?: FhirVersionId): void {
	const args = process.argv.slice(2);
	const positionalArgs = collectPositionalArgs(args);
	const firstArgVersion = positionalArgs[0]
		? getFhirRelease(positionalArgs[0])
		: null;
	const version = firstArgVersion?.id ?? defaultVersion ?? "r4";
	const release = getFhirRelease(version);

	if (!release) {
		throw new Error(
			`Unknown target inventory version "${version}". Supported versions: ${supportedFhirVersions.join(", ")}.`,
		);
	}

	const entries = release.loadTargetEntries();
	const concreteResourceNames = entries
		.filter(isConcreteResourceEntry)
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
	const summary = release.summarizeTargets(entries);
	const rawCategoryFilter = parseFlag(args, "--category") ?? "all";
	const categoryFilter: CategoryFilter = categoryFilters.has(rawCategoryFilter)
		? (rawCategoryFilter as CategoryFilter)
		: "all";
	const outputMode: OutputMode = hasFlag(args, "--summary")
		? "summary"
		: hasFlag(args, "--names-only")
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
					version: release.id,
				},
				null,
				2,
			),
		);
		return;
	}

	if (outputMode === "names") {
		console.log(filteredNames.join("\n"));
		return;
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
				version: release.id,
			},
			null,
			2,
		),
	);
}

function collectPositionalArgs(argv: string[]): string[] {
	const positional: string[] = [];
	const flagsWithValues = new Set(["--category"]);

	for (let index = 0; index < argv.length; index += 1) {
		const arg = argv[index];

		if (arg.startsWith("--")) {
			const [flagName] = arg.split("=", 1);

			if (flagsWithValues.has(flagName) && !arg.includes("=")) {
				index += 1;
			}

			continue;
		}

		positional.push(arg);
	}

	return positional;
}

function parseFlag(args: string[], name: string): string | null {
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

function hasFlag(args: string[], name: string): boolean {
	return args.includes(name);
}

function isConcreteResourceEntry(entry: TargetEntry): boolean {
	return (
		entry.kind === "resource" &&
		entry.abstract === false &&
		(entry.category === "core-resource" ||
			entry.category === "profile-resource")
	);
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	runListTargetsCli();
}
