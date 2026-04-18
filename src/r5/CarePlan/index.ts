// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { CarePlan } from "./CarePlan";
export { CarePlanSchema } from "./CarePlan";
export type { CarePlan_Activity } from "./CarePlan_Activity";
export { CarePlan_ActivitySchema } from "./CarePlan_Activity";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CarePlanSchemaInternal } from "./CarePlan";

_registerFhirResourceSchemas({
	CarePlan: CarePlanSchemaInternal,
});
