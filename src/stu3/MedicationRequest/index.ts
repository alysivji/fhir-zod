// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { MedicationRequest } from "./MedicationRequest";
export { MedicationRequestSchema } from "./MedicationRequest";
export type { MedicationRequest_DispenseRequest } from "./MedicationRequest_DispenseRequest";
export { MedicationRequest_DispenseRequestSchema } from "./MedicationRequest_DispenseRequest";
export type { MedicationRequest_Requester } from "./MedicationRequest_Requester";
export { MedicationRequest_RequesterSchema } from "./MedicationRequest_Requester";
export type { MedicationRequest_Substitution } from "./MedicationRequest_Substitution";
export { MedicationRequest_SubstitutionSchema } from "./MedicationRequest_Substitution";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationRequestSchemaInternal } from "./MedicationRequest";

_registerFhirResourceSchemas({
	MedicationRequest: MedicationRequestSchemaInternal,
});
