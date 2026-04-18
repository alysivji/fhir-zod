// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Goal } from "./Goal";
export { GoalSchema } from "./Goal";
export type { Goal_Target } from "./Goal_Target";
export { Goal_TargetSchema } from "./Goal_Target";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { GoalSchemaInternal } from "./Goal";

_registerFhirResourceSchemas({
	Goal: GoalSchemaInternal,
});
