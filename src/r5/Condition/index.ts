// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Condition } from "./Condition";
export { ConditionSchema } from "./Condition";
export type { Condition_Participant } from "./Condition_Participant";
export { Condition_ParticipantSchema } from "./Condition_Participant";
export type { Condition_Stage } from "./Condition_Stage";
export { Condition_StageSchema } from "./Condition_Stage";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ConditionSchemaInternal } from "./Condition";

_registerFhirResourceSchemas({
	Condition: ConditionSchemaInternal,
});
