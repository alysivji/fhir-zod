// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Immunization } from "./Immunization";
export { ImmunizationSchema } from "./Immunization";
export type { Immunization_Explanation } from "./Immunization_Explanation";
export { Immunization_ExplanationSchema } from "./Immunization_Explanation";
export type { Immunization_Practitioner } from "./Immunization_Practitioner";
export { Immunization_PractitionerSchema } from "./Immunization_Practitioner";
export type { Immunization_Reaction } from "./Immunization_Reaction";
export { Immunization_ReactionSchema } from "./Immunization_Reaction";
export type { Immunization_VaccinationProtocol } from "./Immunization_VaccinationProtocol";
export { Immunization_VaccinationProtocolSchema } from "./Immunization_VaccinationProtocol";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ImmunizationSchemaInternal } from "./Immunization";

_registerFhirResourceSchemas({
	Immunization: ImmunizationSchemaInternal,
});
