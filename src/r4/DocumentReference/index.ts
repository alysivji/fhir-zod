// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { DocumentReference } from "./DocumentReference";
export { DocumentReferenceSchema } from "./DocumentReference";
export type { DocumentReference_Content } from "./DocumentReference_Content";
export { DocumentReference_ContentSchema } from "./DocumentReference_Content";
export type { DocumentReference_Context } from "./DocumentReference_Context";
export { DocumentReference_ContextSchema } from "./DocumentReference_Context";
export type { DocumentReference_RelatesTo } from "./DocumentReference_RelatesTo";
export { DocumentReference_RelatesToSchema } from "./DocumentReference_RelatesTo";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DocumentReferenceSchemaInternal } from "./DocumentReference";

_registerFhirResourceSchemas({
  DocumentReference: DocumentReferenceSchemaInternal,
});
