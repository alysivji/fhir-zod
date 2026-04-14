import { describe, expect, it } from "vitest";
import { buildStructureDefinitionR5Definitions } from "../src/generator/sources/structuredefinition-r5.ts";
import {
	listR5GenerationTargetNames,
	loadR5TargetEntries,
	r5AbstractTargetNames,
	summarizeR5Targets,
} from "../src/generator/targets/r5.ts";
import { getR5SpecAvailability } from "./helpers/require-r5-spec.ts";

const r5SpecAvailability = getR5SpecAvailability();
const describeR5Spec = r5SpecAvailability.available ? describe : describe.skip;

describeR5Spec(
	r5SpecAvailability.available
		? "R5 target inventory"
		: `R5 target inventory (${r5SpecAvailability.reason})`,
	() => {
		it("matches the pinned R5 inventory counts", () => {
			const entries = loadR5TargetEntries();
			const summary = summarizeR5Targets(entries);

			expect(summary.abstractGenerationWhitelist).toEqual([
				"BackboneElement",
				"BackboneType",
				"Base",
				"DataType",
				"DomainResource",
				"Element",
				"Resource",
			]);
			expect(summary.coreResourceCount).toBe(158);
			expect(summary.profileResourceCount).toBe(62);
			expect(summary.generationTargetCount).toBe(165);
			expect(summary.concreteResourceCount).toBe(220);
		});

		it("keeps core resource names unique while allowing profile name collisions", () => {
			const entries = loadR5TargetEntries();
			const coreNames = entries
				.filter((entry) => entry.category === "core-resource")
				.map((entry) => entry.name);
			const profileNames = entries
				.filter((entry) => entry.category === "profile-resource")
				.map((entry) => entry.name);

			expect(new Set(coreNames).size).toBe(coreNames.length);
			expect(new Set(profileNames).size).toBeLessThan(profileNames.length);
			expect(
				profileNames.filter((name) => name === "ExampleLipidProfile").length,
			).toBe(5);
		});

		it("uses abstract bases plus all core resources as the default generation scope", () => {
			const entries = loadR5TargetEntries();
			const expectedScope = entries
				.filter((entry) => entry.shouldGenerate)
				.map((entry) => entry.name)
				.sort((left, right) => left.localeCompare(right));
			const actualScope = listR5GenerationTargetNames();

			expect(actualScope).toEqual(expectedScope);
			expect(actualScope).toEqual(
				expect.arrayContaining([...r5AbstractTargetNames]),
			);
			expect(actualScope).toContain("Patient");
			expect(actualScope).toContain("Observation");
			expect(actualScope).toContain("Resource");
		});

		it("builds a large definition closure from the default generation scope", () => {
			const definitionsResult = buildStructureDefinitionR5Definitions();
			const definitionNames = new Set(definitionsResult.definitions.keys());

			expect(definitionsResult.definitions.size).toBeGreaterThan(700);
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
