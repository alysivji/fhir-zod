// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Practitioner } from "./Practitioner";
export { PractitionerSchema } from "./Practitioner";
export type { Practitioner_Qualification } from "./Practitioner_Qualification";
export { Practitioner_QualificationSchema } from "./Practitioner_Qualification";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { PractitionerSchemaInternal } from "./Practitioner";

_registerFhirResourceSchemas({
	Practitioner: PractitionerSchemaInternal,
});
