// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Medication } from "./Medication";
export { MedicationSchema } from "./Medication";
export type { Medication_Batch } from "./Medication_Batch";
export { Medication_BatchSchema } from "./Medication_Batch";
export type { Medication_Ingredient } from "./Medication_Ingredient";
export { Medication_IngredientSchema } from "./Medication_Ingredient";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationSchemaInternal } from "./Medication";

_registerFhirResourceSchemas({
  Medication: MedicationSchemaInternal,
});
