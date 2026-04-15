import { describe, expect, it } from "vitest";
import type { StructureDefinitionBuildResult } from "../../src/generator/sources/structuredefinition.ts";
import type {
	TargetEntry,
	TargetSummary,
} from "../../src/generator/versions.ts";
import type { SpecAvailability } from "./spec-availability.ts";

type DefinitionClosureExpectation =
	| {
			greaterThan: number;
			exact?: never;
	  }
	| {
			exact: number;
			greaterThan?: never;
	  };

type ProfileCollisionExpectation = {
	count: number;
	name: string;
};

type TargetInventorySuiteOptions = {
	abstractTargetNames: readonly string[];
	buildDefinitions: () => StructureDefinitionBuildResult;
	expectedCounts: {
		concreteResourceCount: number;
		coreResourceCount: number;
		generationTargetCount: number;
		profileResourceCount: number;
	};
	expectedDefinitionClosure: DefinitionClosureExpectation;
	label: string;
	listGenerationTargetNames: () => string[];
	loadTargetEntries: () => TargetEntry[];
	profileCollision?: ProfileCollisionExpectation;
	specAvailability: SpecAvailability;
	summarizeTargets: (entries?: TargetEntry[]) => TargetSummary;
};

export function describeTargetInventorySuite(
	options: TargetInventorySuiteOptions,
): void {
	const describeSpec = options.specAvailability.available
		? describe
		: describe.skip;

	describeSpec(
		options.specAvailability.available
			? `${options.label} target inventory`
			: `${options.label} target inventory (${options.specAvailability.reason})`,
		() => {
			it(`matches the pinned ${options.label} inventory counts`, () => {
				const entries = options.loadTargetEntries();
				const summary = options.summarizeTargets(entries);

				expect(summary.abstractGenerationWhitelist).toEqual([
					...options.abstractTargetNames,
				]);
				expect(summary.coreResourceCount).toBe(
					options.expectedCounts.coreResourceCount,
				);
				expect(summary.profileResourceCount).toBe(
					options.expectedCounts.profileResourceCount,
				);
				expect(summary.generationTargetCount).toBe(
					options.expectedCounts.generationTargetCount,
				);
				expect(summary.concreteResourceCount).toBe(
					options.expectedCounts.concreteResourceCount,
				);
			});

			if (options.profileCollision) {
				const profileCollision = options.profileCollision;

				it("keeps core resource names unique while allowing profile name collisions", () => {
					const entries = options.loadTargetEntries();
					const coreNames = entries
						.filter((entry) => entry.category === "core-resource")
						.map((entry) => entry.name);
					const profileNames = entries
						.filter((entry) => entry.category === "profile-resource")
						.map((entry) => entry.name);

					expect(new Set(coreNames).size).toBe(coreNames.length);
					expect(new Set(profileNames).size).toBeLessThan(profileNames.length);
					expect(
						profileNames.filter((name) => name === profileCollision.name)
							.length,
					).toBe(profileCollision.count);
				});
			}

			it("uses abstract bases plus all core resources as the default generation scope", () => {
				const entries = options.loadTargetEntries();
				const expectedScope = entries
					.filter((entry) => entry.shouldGenerate)
					.map((entry) => entry.name)
					.sort((left, right) => left.localeCompare(right));
				const actualScope = options.listGenerationTargetNames();

				expect(actualScope).toEqual(expectedScope);
				expect(actualScope).toEqual(
					expect.arrayContaining([...options.abstractTargetNames]),
				);
				expect(actualScope).toContain("Patient");
				expect(actualScope).toContain("Observation");
				expect(actualScope).toContain("Resource");
			});

			it("builds a large definition closure from the default generation scope", () => {
				const definitionsResult = options.buildDefinitions();
				const definitionNames = new Set(definitionsResult.definitions.keys());

				if (options.expectedDefinitionClosure.exact !== undefined) {
					expect(definitionsResult.definitions.size).toBe(
						options.expectedDefinitionClosure.exact,
					);
				} else {
					expect(definitionsResult.definitions.size).toBeGreaterThan(
						options.expectedDefinitionClosure.greaterThan,
					);
				}

				expect(definitionNames.has("Account")).toBe(true);
				expect(definitionNames.has("Bundle")).toBe(true);
				expect(definitionNames.has("Condition")).toBe(true);
				expect(definitionNames.has("Encounter")).toBe(true);
				expect(definitionNames.has("Observation")).toBe(true);
				expect(definitionNames.has("Practitioner")).toBe(true);
				expect(definitionNames.has("ValueSet")).toBe(true);
			});
		},
	);
}
