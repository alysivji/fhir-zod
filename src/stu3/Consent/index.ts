// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Consent } from "./Consent";
export { ConsentSchema } from "./Consent";
export type { Consent_Actor } from "./Consent_Actor";
export { Consent_ActorSchema } from "./Consent_Actor";
export type { Consent_Data } from "./Consent_Data";
export { Consent_DataSchema } from "./Consent_Data";
export type { Consent_Except } from "./Consent_Except";
export { Consent_ExceptSchema } from "./Consent_Except";
export type { Consent_Except_Actor } from "./Consent_Except_Actor";
export { Consent_Except_ActorSchema } from "./Consent_Except_Actor";
export type { Consent_Except_Data } from "./Consent_Except_Data";
export { Consent_Except_DataSchema } from "./Consent_Except_Data";
export type { Consent_Policy } from "./Consent_Policy";
export { Consent_PolicySchema } from "./Consent_Policy";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ConsentSchemaInternal } from "./Consent";

_registerFhirResourceSchemas({
	Consent: ConsentSchemaInternal,
});
