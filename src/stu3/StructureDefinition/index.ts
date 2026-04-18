// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { StructureDefinition } from "./StructureDefinition";
export { StructureDefinitionSchema } from "./StructureDefinition";
export type { StructureDefinition_Differential } from "./StructureDefinition_Differential";
export { StructureDefinition_DifferentialSchema } from "./StructureDefinition_Differential";
export type { StructureDefinition_Mapping } from "./StructureDefinition_Mapping";
export { StructureDefinition_MappingSchema } from "./StructureDefinition_Mapping";
export type { StructureDefinition_Snapshot } from "./StructureDefinition_Snapshot";
export { StructureDefinition_SnapshotSchema } from "./StructureDefinition_Snapshot";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { StructureDefinitionSchemaInternal } from "./StructureDefinition";

_registerFhirResourceSchemas({
	StructureDefinition: StructureDefinitionSchemaInternal,
});
