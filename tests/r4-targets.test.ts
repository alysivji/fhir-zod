import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";
import {
	listR4GenerationTargetNames,
	loadR4TargetEntries,
	r4AbstractTargetNames,
	summarizeR4Targets,
} from "../src/generator/targets/r4.ts";
import { getR4SpecAvailability } from "./helpers/require-r4-spec.ts";
import { describeTargetInventorySuite } from "./helpers/target-inventory-suite.ts";

describeTargetInventorySuite({
	abstractTargetNames: r4AbstractTargetNames,
	buildDefinitions: buildStructureDefinitionR4Definitions,
	expectedCounts: {
		concreteResourceCount: 189,
		coreResourceCount: 146,
		generationTargetCount: 150,
		profileResourceCount: 43,
	},
	expectedDefinitionClosure: {
		greaterThan: 650,
	},
	label: "R4",
	listGenerationTargetNames: listR4GenerationTargetNames,
	loadTargetEntries: loadR4TargetEntries,
	profileCollision: {
		count: 5,
		name: "Example Lipid Profile",
	},
	specAvailability: getR4SpecAvailability(),
	summarizeTargets: summarizeR4Targets,
});
