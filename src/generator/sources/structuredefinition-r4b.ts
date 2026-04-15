import { fhirReleases } from "../versions.ts";
import type { StructureDefinitionBuildResult } from "./structuredefinition.ts";

export function buildStructureDefinitionR4BDefinitions(
	scopeNames?: Iterable<string>,
): StructureDefinitionBuildResult {
	return fhirReleases.r4b.buildDefinitions(scopeNames);
}
