// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Condition } from "./Condition";
export { ConditionSchema } from "./Condition";
export type { Condition_Evidence } from "./Condition_Evidence";
export { Condition_EvidenceSchema } from "./Condition_Evidence";
export type { Condition_Stage } from "./Condition_Stage";
export { Condition_StageSchema } from "./Condition_Stage";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ConditionSchemaInternal } from "./Condition";

_registerFhirResourceSchemas({
	Condition: ConditionSchemaInternal,
});
