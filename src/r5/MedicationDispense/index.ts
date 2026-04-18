// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { MedicationDispense } from "./MedicationDispense";
export { MedicationDispenseSchema } from "./MedicationDispense";
export type { MedicationDispense_Performer } from "./MedicationDispense_Performer";
export { MedicationDispense_PerformerSchema } from "./MedicationDispense_Performer";
export type { MedicationDispense_Substitution } from "./MedicationDispense_Substitution";
export { MedicationDispense_SubstitutionSchema } from "./MedicationDispense_Substitution";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationDispenseSchemaInternal } from "./MedicationDispense";

_registerFhirResourceSchemas({
	MedicationDispense: MedicationDispenseSchemaInternal,
});
