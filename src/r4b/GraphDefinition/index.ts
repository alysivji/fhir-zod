// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { GraphDefinition } from "./GraphDefinition";
export { GraphDefinitionSchema } from "./GraphDefinition";
export type { GraphDefinition_Link } from "./GraphDefinition_Link";
export { GraphDefinition_LinkSchema } from "./GraphDefinition_Link";
export type { GraphDefinition_Link_Target } from "./GraphDefinition_Link_Target";
export { GraphDefinition_Link_TargetSchema } from "./GraphDefinition_Link_Target";
export type { GraphDefinition_Link_Target_Compartment } from "./GraphDefinition_Link_Target_Compartment";
export { GraphDefinition_Link_Target_CompartmentSchema } from "./GraphDefinition_Link_Target_Compartment";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { GraphDefinitionSchemaInternal } from "./GraphDefinition";

_registerFhirResourceSchemas({
	GraphDefinition: GraphDefinitionSchemaInternal,
});
