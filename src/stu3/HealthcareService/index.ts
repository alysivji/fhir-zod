// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { HealthcareService } from "./HealthcareService";
export { HealthcareServiceSchema } from "./HealthcareService";
export type { HealthcareService_AvailableTime } from "./HealthcareService_AvailableTime";
export { HealthcareService_AvailableTimeSchema } from "./HealthcareService_AvailableTime";
export type { HealthcareService_NotAvailable } from "./HealthcareService_NotAvailable";
export { HealthcareService_NotAvailableSchema } from "./HealthcareService_NotAvailable";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { HealthcareServiceSchemaInternal } from "./HealthcareService";

_registerFhirResourceSchemas({
	HealthcareService: HealthcareServiceSchemaInternal,
});
