// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Bundle } from "./Bundle";
export { BundleSchema } from "./Bundle";
export type { Bundle_Entry } from "./Bundle_Entry";
export { Bundle_EntrySchema } from "./Bundle_Entry";
export type { Bundle_Entry_Request } from "./Bundle_Entry_Request";
export { Bundle_Entry_RequestSchema } from "./Bundle_Entry_Request";
export type { Bundle_Entry_Response } from "./Bundle_Entry_Response";
export { Bundle_Entry_ResponseSchema } from "./Bundle_Entry_Response";
export type { Bundle_Entry_Search } from "./Bundle_Entry_Search";
export { Bundle_Entry_SearchSchema } from "./Bundle_Entry_Search";
export type { Bundle_Link } from "./Bundle_Link";
export { Bundle_LinkSchema } from "./Bundle_Link";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { BundleSchemaInternal } from "./Bundle";

_registerFhirResourceSchemas({
	Bundle: BundleSchemaInternal,
});
