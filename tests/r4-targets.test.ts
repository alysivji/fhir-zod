import { describe, expect, it } from "vitest";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";
import {
	listR4GenerationTargetNames,
	loadR4TargetEntries,
	r4AbstractTargetNames,
	summarizeR4Targets,
} from "../src/generator/targets/r4.ts";
import { getR4SpecAvailability } from "./helpers/require-r4-spec.ts";

const r4SpecAvailability = getR4SpecAvailability();
const describeR4Spec = r4SpecAvailability.available ? describe : describe.skip;

describeR4Spec(
	r4SpecAvailability.available
		? "R4 target inventory"
		: `R4 target inventory (${r4SpecAvailability.reason})`,
	() => {
		it("matches the pinned R4 inventory counts", () => {
			const entries = loadR4TargetEntries();
			const summary = summarizeR4Targets(entries);

			expect(summary.abstractGenerationWhitelist).toEqual([
				"BackboneElement",
				"DomainResource",
				"Element",
				"Resource",
			]);
			expect(summary.coreResourceCount).toBe(146);
			expect(summary.profileResourceCount).toBe(43);
			expect(summary.generationTargetCount).toBe(150);
			expect(summary.concreteResourceCount).toBe(189);
		});

		it("keeps core resource names unique while allowing profile name collisions", () => {
			const entries = loadR4TargetEntries();
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
			const entries = loadR4TargetEntries();
			const expectedScope = entries
				.filter((entry) => entry.shouldGenerate)
				.map((entry) => entry.name)
				.sort((left, right) => left.localeCompare(right));
			const actualScope = listR4GenerationTargetNames();

			expect(actualScope).toEqual(expectedScope);
			expect(actualScope).toEqual(
				expect.arrayContaining([...r4AbstractTargetNames]),
			);
			expect(actualScope).toContain("Patient");
			expect(actualScope).toContain("Observation");
			expect(actualScope).toContain("Resource");
		});

		it("builds a large definition closure from the default generation scope", () => {
			const definitionsResult = buildStructureDefinitionR4Definitions();
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
