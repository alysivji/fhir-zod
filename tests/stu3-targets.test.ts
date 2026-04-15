import { buildStructureDefinitionSTU3Definitions } from "../src/generator/sources/structuredefinition-stu3.ts";
import {
	listSTU3GenerationTargetNames,
	loadSTU3TargetEntries,
	stu3AbstractTargetNames,
	summarizeSTU3Targets,
} from "../src/generator/targets/stu3.ts";
import { getSTU3SpecAvailability } from "./helpers/require-stu3-spec.ts";
import { describeTargetInventorySuite } from "./helpers/target-inventory-suite.ts";

describeTargetInventorySuite({
	abstractTargetNames: stu3AbstractTargetNames,
	buildDefinitions: buildStructureDefinitionSTU3Definitions,
	expectedCounts: {
		concreteResourceCount: 148,
		coreResourceCount: 117,
		generationTargetCount: 121,
		profileResourceCount: 31,
	},
	expectedDefinitionClosure: {
		exact: 489,
	},
	label: "STU3",
	listGenerationTargetNames: listSTU3GenerationTargetNames,
	loadTargetEntries: loadSTU3TargetEntries,
	specAvailability: getSTU3SpecAvailability(),
	summarizeTargets: summarizeSTU3Targets,
});
