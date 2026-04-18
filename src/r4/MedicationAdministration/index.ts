// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { MedicationAdministration } from "./MedicationAdministration";
export { MedicationAdministrationSchema } from "./MedicationAdministration";
export type { MedicationAdministration_Dosage } from "./MedicationAdministration_Dosage";
export { MedicationAdministration_DosageSchema } from "./MedicationAdministration_Dosage";
export type { MedicationAdministration_Performer } from "./MedicationAdministration_Performer";
export { MedicationAdministration_PerformerSchema } from "./MedicationAdministration_Performer";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationAdministrationSchemaInternal } from "./MedicationAdministration";

_registerFhirResourceSchemas({
  MedicationAdministration: MedicationAdministrationSchemaInternal,
});
