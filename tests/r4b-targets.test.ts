import { buildStructureDefinitionR4BDefinitions } from "../src/generator/sources/structuredefinition-r4b.ts";
import {
	listR4BGenerationTargetNames,
	loadR4BTargetEntries,
	r4bAbstractTargetNames,
	summarizeR4BTargets,
} from "../src/generator/targets/r4b.ts";
import { getR4BSpecAvailability } from "./helpers/require-r4b-spec.ts";
import { describeTargetInventorySuite } from "./helpers/target-inventory-suite.ts";

describeTargetInventorySuite({
	abstractTargetNames: r4bAbstractTargetNames,
	buildDefinitions: buildStructureDefinitionR4BDefinitions,
	expectedCounts: {
		concreteResourceCount: 180,
		coreResourceCount: 141,
		generationTargetCount: 146,
		profileResourceCount: 39,
	},
	expectedDefinitionClosure: {
		greaterThan: 650,
	},
	label: "R4B",
	listGenerationTargetNames: listR4BGenerationTargetNames,
	loadTargetEntries: loadR4BTargetEntries,
	profileCollision: {
		count: 5,
		name: "Example Lipid Profile",
	},
	specAvailability: getR4BSpecAvailability(),
	summarizeTargets: summarizeR4BTargets,
});
