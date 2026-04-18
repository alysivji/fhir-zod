// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { CarePlan } from "./CarePlan";
export { CarePlanSchema } from "./CarePlan";
export type { CarePlan_Activity } from "./CarePlan_Activity";
export { CarePlan_ActivitySchema } from "./CarePlan_Activity";
export type { CarePlan_Activity_Detail } from "./CarePlan_Activity_Detail";
export { CarePlan_Activity_DetailSchema } from "./CarePlan_Activity_Detail";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CarePlanSchemaInternal } from "./CarePlan";

_registerFhirResourceSchemas({
  CarePlan: CarePlanSchemaInternal,
});
