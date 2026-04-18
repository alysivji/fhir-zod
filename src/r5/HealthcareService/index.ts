// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { HealthcareService } from "./HealthcareService";
export { HealthcareServiceSchema } from "./HealthcareService";
export type { HealthcareService_Eligibility } from "./HealthcareService_Eligibility";
export { HealthcareService_EligibilitySchema } from "./HealthcareService_Eligibility";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { HealthcareServiceSchemaInternal } from "./HealthcareService";

_registerFhirResourceSchemas({
	HealthcareService: HealthcareServiceSchemaInternal,
});
