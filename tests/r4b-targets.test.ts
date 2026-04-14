import { describe, expect, it } from "vitest";
import { buildStructureDefinitionR4BDefinitions } from "../src/generator/sources/structuredefinition-r4b.ts";
import {
	listR4BGenerationTargetNames,
	loadR4BTargetEntries,
	r4bAbstractTargetNames,
	summarizeR4BTargets,
} from "../src/generator/targets/r4b.ts";
import { getR4BSpecAvailability } from "./helpers/require-r4b-spec.ts";

const r4bSpecAvailability = getR4BSpecAvailability();
const describeR4BSpec = r4bSpecAvailability.available
	? describe
	: describe.skip;

describeR4BSpec(
	r4bSpecAvailability.available
		? "R4B target inventory"
		: `R4B target inventory (${r4bSpecAvailability.reason})`,
	() => {
		it("matches the pinned R4B inventory counts", () => {
			const entries = loadR4BTargetEntries();
			const summary = summarizeR4BTargets(entries);

			expect(summary.abstractGenerationWhitelist).toEqual([
				"BackboneElement",
				"DataType",
				"DomainResource",
				"Element",
				"Resource",
			]);
			expect(summary.coreResourceCount).toBe(141);
			expect(summary.profileResourceCount).toBe(39);
			expect(summary.generationTargetCount).toBe(146);
			expect(summary.concreteResourceCount).toBe(180);
		});

		it("keeps core resource names unique while allowing profile name collisions", () => {
			const entries = loadR4BTargetEntries();
			const coreNames = entries
				.filter((entry) => entry.category === "core-resource")
				.map((entry) => entry.name);
			const profileNames = entries
				.filter((entry) => entry.category === "profile-resource")
				.map((entry) => entry.name);

			expect(new Set(coreNames).size).toBe(coreNames.length);
			expect(new Set(profileNames).size).toBeLessThan(profileNames.length);
			expect(
				profileNames.filter((name) => name === "Example Lipid Profile").length,
			).toBe(5);
		});

		it("uses abstract bases plus all core resources as the default generation scope", () => {
			const entries = loadR4BTargetEntries();
			const expectedScope = entries
				.filter((entry) => entry.shouldGenerate)
				.map((entry) => entry.name)
				.sort((left, right) => left.localeCompare(right));
			const actualScope = listR4BGenerationTargetNames();

			expect(actualScope).toEqual(expectedScope);
			expect(actualScope).toEqual(
				expect.arrayContaining([...r4bAbstractTargetNames]),
			);
			expect(actualScope).toContain("Patient");
			expect(actualScope).toContain("Observation");
			expect(actualScope).toContain("Resource");
		});

		it("builds a large definition closure from the default generation scope", () => {
			const definitionsResult = buildStructureDefinitionR4BDefinitions();
			const definitionNames = new Set(definitionsResult.definitions.keys());

			expect(definitionsResult.definitions.size).toBeGreaterThan(650);
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
