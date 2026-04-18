// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { RequestGroup } from "./RequestGroup";
export { RequestGroupSchema } from "./RequestGroup";
export type { RequestGroup_Action } from "./RequestGroup_Action";
export { RequestGroup_ActionSchema } from "./RequestGroup_Action";
export type { RequestGroup_Action_Condition } from "./RequestGroup_Action_Condition";
export { RequestGroup_Action_ConditionSchema } from "./RequestGroup_Action_Condition";
export type { RequestGroup_Action_RelatedAction } from "./RequestGroup_Action_RelatedAction";
export { RequestGroup_Action_RelatedActionSchema } from "./RequestGroup_Action_RelatedAction";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { RequestGroupSchemaInternal } from "./RequestGroup";

_registerFhirResourceSchemas({
	RequestGroup: RequestGroupSchemaInternal,
});
