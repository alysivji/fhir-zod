// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { StructureDefinition } from "./StructureDefinition";
export { StructureDefinitionSchema } from "./StructureDefinition";
export type { StructureDefinition_Context } from "./StructureDefinition_Context";
export { StructureDefinition_ContextSchema } from "./StructureDefinition_Context";
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
