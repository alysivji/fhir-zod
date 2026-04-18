// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Requirements } from "./Requirements";
export { RequirementsSchema } from "./Requirements";
export type { Requirements_Statement } from "./Requirements_Statement";
export { Requirements_StatementSchema } from "./Requirements_Statement";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { RequirementsSchemaInternal } from "./Requirements";

_registerFhirResourceSchemas({
	Requirements: RequirementsSchemaInternal,
});
