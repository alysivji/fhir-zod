// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ProcedureRequest } from "./ProcedureRequest";
export { ProcedureRequestSchema } from "./ProcedureRequest";
export type { ProcedureRequest_Requester } from "./ProcedureRequest_Requester";
export { ProcedureRequest_RequesterSchema } from "./ProcedureRequest_Requester";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ProcedureRequestSchemaInternal } from "./ProcedureRequest";

_registerFhirResourceSchemas({
	ProcedureRequest: ProcedureRequestSchemaInternal,
});
