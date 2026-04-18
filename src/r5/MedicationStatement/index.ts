// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { MedicationStatement } from "./MedicationStatement";
export { MedicationStatementSchema } from "./MedicationStatement";
export type { MedicationStatement_Adherence } from "./MedicationStatement_Adherence";
export { MedicationStatement_AdherenceSchema } from "./MedicationStatement_Adherence";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationStatementSchemaInternal } from "./MedicationStatement";

_registerFhirResourceSchemas({
	MedicationStatement: MedicationStatementSchemaInternal,
});
