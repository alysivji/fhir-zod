import { fhirReleases } from "../versions.ts";
import type { StructureDefinitionBuildResult } from "./structuredefinition.ts";

export function buildStructureDefinitionSTU3Definitions(
	scopeNames?: Iterable<string>,
): StructureDefinitionBuildResult {
	return fhirReleases.stu3.buildDefinitions(scopeNames);
}
