// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Organization } from "./Organization";
export { OrganizationSchema } from "./Organization";
export type { Organization_Qualification } from "./Organization_Qualification";
export { Organization_QualificationSchema } from "./Organization_Qualification";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { OrganizationSchemaInternal } from "./Organization";

_registerFhirResourceSchemas({
	Organization: OrganizationSchemaInternal,
});
