import { fhirReleases } from "../versions.ts";
import type { StructureDefinitionBuildResult } from "./structuredefinition.ts";

export function buildStructureDefinitionR5Definitions(
	scopeNames?: Iterable<string>,
): StructureDefinitionBuildResult {
	return fhirReleases.r5.buildDefinitions(scopeNames);
}
