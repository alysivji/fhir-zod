// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ActivityDefinition } from "./ActivityDefinition";
export { ActivityDefinitionSchema } from "./ActivityDefinition";
export type { ActivityDefinition_DynamicValue } from "./ActivityDefinition_DynamicValue";
export { ActivityDefinition_DynamicValueSchema } from "./ActivityDefinition_DynamicValue";
export type { ActivityDefinition_Participant } from "./ActivityDefinition_Participant";
export { ActivityDefinition_ParticipantSchema } from "./ActivityDefinition_Participant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ActivityDefinitionSchemaInternal } from "./ActivityDefinition";

_registerFhirResourceSchemas({
	ActivityDefinition: ActivityDefinitionSchemaInternal,
});
