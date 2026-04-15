import { buildStructureDefinitionR5Definitions } from "../src/generator/sources/structuredefinition-r5.ts";
import {
	listR5GenerationTargetNames,
	loadR5TargetEntries,
	r5AbstractTargetNames,
	summarizeR5Targets,
} from "../src/generator/targets/r5.ts";
import { getR5SpecAvailability } from "./helpers/require-r5-spec.ts";
import { describeTargetInventorySuite } from "./helpers/target-inventory-suite.ts";

describeTargetInventorySuite({
	abstractTargetNames: r5AbstractTargetNames,
	buildDefinitions: buildStructureDefinitionR5Definitions,
	expectedCounts: {
		concreteResourceCount: 220,
		coreResourceCount: 158,
		generationTargetCount: 165,
		profileResourceCount: 62,
	},
	expectedDefinitionClosure: {
		greaterThan: 700,
	},
	label: "R5",
	listGenerationTargetNames: listR5GenerationTargetNames,
	loadTargetEntries: loadR5TargetEntries,
	profileCollision: {
		count: 5,
		name: "ExampleLipidProfile",
	},
	specAvailability: getR5SpecAvailability(),
	summarizeTargets: summarizeR5Targets,
});
