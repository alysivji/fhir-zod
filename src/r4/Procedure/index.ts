// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Procedure } from "./Procedure";
export { ProcedureSchema } from "./Procedure";
export type { Procedure_FocalDevice } from "./Procedure_FocalDevice";
export { Procedure_FocalDeviceSchema } from "./Procedure_FocalDevice";
export type { Procedure_Performer } from "./Procedure_Performer";
export { Procedure_PerformerSchema } from "./Procedure_Performer";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ProcedureSchemaInternal } from "./Procedure";

_registerFhirResourceSchemas({
	Procedure: ProcedureSchemaInternal,
});
