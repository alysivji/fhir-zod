import { fhirReleases } from "../versions.ts";
import type { StructureDefinitionBuildResult } from "./structuredefinition.ts";

export function buildStructureDefinitionR4Definitions(
	scopeNames?: Iterable<string>,
): StructureDefinitionBuildResult {
	return fhirReleases.r4.buildDefinitions(scopeNames);
}
