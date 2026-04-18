// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Medication } from "./Medication";
export { MedicationSchema } from "./Medication";
export type { Medication_Ingredient } from "./Medication_Ingredient";
export { Medication_IngredientSchema } from "./Medication_Ingredient";
export type { Medication_Package } from "./Medication_Package";
export { Medication_PackageSchema } from "./Medication_Package";
export type { Medication_Package_Batch } from "./Medication_Package_Batch";
export { Medication_Package_BatchSchema } from "./Medication_Package_Batch";
export type { Medication_Package_Content } from "./Medication_Package_Content";
export { Medication_Package_ContentSchema } from "./Medication_Package_Content";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MedicationSchemaInternal } from "./Medication";

_registerFhirResourceSchemas({
	Medication: MedicationSchemaInternal,
});
