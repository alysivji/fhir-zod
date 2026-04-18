// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { DocumentReference } from "./DocumentReference";
export { DocumentReferenceSchema } from "./DocumentReference";
export type { DocumentReference_Attester } from "./DocumentReference_Attester";
export { DocumentReference_AttesterSchema } from "./DocumentReference_Attester";
export type { DocumentReference_Content } from "./DocumentReference_Content";
export { DocumentReference_ContentSchema } from "./DocumentReference_Content";
export type { DocumentReference_Content_Profile } from "./DocumentReference_Content_Profile";
export { DocumentReference_Content_ProfileSchema } from "./DocumentReference_Content_Profile";
export type { DocumentReference_RelatesTo } from "./DocumentReference_RelatesTo";
export { DocumentReference_RelatesToSchema } from "./DocumentReference_RelatesTo";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DocumentReferenceSchemaInternal } from "./DocumentReference";

_registerFhirResourceSchemas({
	DocumentReference: DocumentReferenceSchemaInternal,
});
