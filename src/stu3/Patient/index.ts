// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Patient } from "./Patient";
export { PatientSchema } from "./Patient";
export type { Patient_Animal } from "./Patient_Animal";
export { Patient_AnimalSchema } from "./Patient_Animal";
export type { Patient_Communication } from "./Patient_Communication";
export { Patient_CommunicationSchema } from "./Patient_Communication";
export type { Patient_Contact } from "./Patient_Contact";
export { Patient_ContactSchema } from "./Patient_Contact";
export type { Patient_Link } from "./Patient_Link";
export { Patient_LinkSchema } from "./Patient_Link";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { PatientSchemaInternal } from "./Patient";

_registerFhirResourceSchemas({
	Patient: PatientSchemaInternal,
});
