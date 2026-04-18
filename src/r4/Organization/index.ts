// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Organization } from "./Organization";
export { OrganizationSchema } from "./Organization";
export type { Organization_Contact } from "./Organization_Contact";
export { Organization_ContactSchema } from "./Organization_Contact";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { OrganizationSchemaInternal } from "./Organization";

_registerFhirResourceSchemas({
  Organization: OrganizationSchemaInternal,
});
