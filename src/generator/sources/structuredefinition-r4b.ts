import { listR4BGenerationTargetNames } from "../targets/r4b.ts";
import {
	buildStructureDefinitionsFromSpec,
	type StructureDefinitionBuildResult,
} from "./structuredefinition-r4.ts";

export function buildStructureDefinitionR4BDefinitions(
	scopeNames: Iterable<string> = listR4BGenerationTargetNames(),
): StructureDefinitionBuildResult {
	return buildStructureDefinitionsFromSpec({
		releaseLabel: "R4B",
		scopeNames,
		version: "r4b",
	});
}
