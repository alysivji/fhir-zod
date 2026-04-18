// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { PractitionerRole } from "./PractitionerRole";
export { PractitionerRoleSchema } from "./PractitionerRole";
export type { PractitionerRole_AvailableTime } from "./PractitionerRole_AvailableTime";
export { PractitionerRole_AvailableTimeSchema } from "./PractitionerRole_AvailableTime";
export type { PractitionerRole_NotAvailable } from "./PractitionerRole_NotAvailable";
export { PractitionerRole_NotAvailableSchema } from "./PractitionerRole_NotAvailable";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { PractitionerRoleSchemaInternal } from "./PractitionerRole";

_registerFhirResourceSchemas({
	PractitionerRole: PractitionerRoleSchemaInternal,
});
