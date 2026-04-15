import { listSTU3GenerationTargetNames } from "../targets/stu3.ts";
import {
	buildStructureDefinitionsFromSpec,
	type StructureDefinitionBuildResult,
} from "./structuredefinition-r4.ts";

export function buildStructureDefinitionSTU3Definitions(
	scopeNames: Iterable<string> = listSTU3GenerationTargetNames(),
): StructureDefinitionBuildResult {
	return buildStructureDefinitionsFromSpec({
		releaseLabel: "STU3",
		scopeNames,
		version: "stu3",
	});
}
