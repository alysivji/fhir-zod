// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { MedicationRequest } from "./MedicationRequest";
export { MedicationRequestSchema } from "./MedicationRequest";
export type { MedicationRequest_DispenseRequest } from "./MedicationRequest_DispenseRequest";
export { MedicationRequest_DispenseRequestSchema } from "./MedicationRequest_DispenseRequest";
export type { MedicationRequest_DispenseRequest_InitialFill } from "./MedicationRequest_DispenseRequest_InitialFill";
export { MedicationRequest_DispenseRequest_InitialFillSchema } from "./MedicationRequest_DispenseRequest_InitialFill";
export type { MedicationRequest_Substitution } from "./MedicationRequest_Substitution";
export { MedicationRequest_SubstitutionSchema } from "./MedicationRequest_Substitution";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationRequestSchemaInternal } from "./MedicationRequest";

_registerFhirResourceSchemas({
	MedicationRequest: MedicationRequestSchemaInternal,
});
