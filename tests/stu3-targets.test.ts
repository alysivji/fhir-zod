import { describe, expect, it } from "vitest";
import { buildStructureDefinitionSTU3Definitions } from "../src/generator/sources/structuredefinition-stu3.ts";
import {
	listSTU3GenerationTargetNames,
	loadSTU3TargetEntries,
	stu3AbstractTargetNames,
	summarizeSTU3Targets,
} from "../src/generator/targets/stu3.ts";
import { getSTU3SpecAvailability } from "./helpers/require-stu3-spec.ts";

const stu3SpecAvailability = getSTU3SpecAvailability();
const describeSTU3Spec = stu3SpecAvailability.available
	? describe
	: describe.skip;

describeSTU3Spec(
	stu3SpecAvailability.available
		? "STU3 target inventory"
		: `STU3 target inventory (${stu3SpecAvailability.reason})`,
	() => {
		it("matches the pinned STU3 inventory counts", () => {
			const entries = loadSTU3TargetEntries();
			const summary = summarizeSTU3Targets(entries);

			expect(summary.abstractGenerationWhitelist).toEqual([
				"BackboneElement",
				"DomainResource",
				"Element",
				"Resource",
			]);
			expect(summary.coreResourceCount).toBe(117);
			expect(summary.profileResourceCount).toBe(31);
			expect(summary.generationTargetCount).toBe(121);
			expect(summary.concreteResourceCount).toBe(148);
		});

		it("uses abstract bases plus all core resources as the default generation scope", () => {
			const entries = loadSTU3TargetEntries();
			const expectedScope = entries
				.filter((entry) => entry.shouldGenerate)
				.map((entry) => entry.name)
				.sort((left, right) => left.localeCompare(right));
			const actualScope = listSTU3GenerationTargetNames();

			expect(actualScope).toEqual(expectedScope);
			expect(actualScope).toEqual(
				expect.arrayContaining([...stu3AbstractTargetNames]),
			);
			expect(actualScope).toContain("Patient");
			expect(actualScope).toContain("Observation");
			expect(actualScope).toContain("Resource");
		});

		it("builds a large definition closure from the default generation scope", () => {
			const definitionsResult = buildStructureDefinitionSTU3Definitions();
			const definitionNames = new Set(definitionsResult.definitions.keys());

			expect(definitionsResult.definitions.size).toBe(489);
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
