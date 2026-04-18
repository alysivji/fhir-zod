// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { NutritionOrder } from "./NutritionOrder";
export { NutritionOrderSchema } from "./NutritionOrder";
export type { NutritionOrder_EnteralFormula } from "./NutritionOrder_EnteralFormula";
export { NutritionOrder_EnteralFormulaSchema } from "./NutritionOrder_EnteralFormula";
export type { NutritionOrder_EnteralFormula_Administration } from "./NutritionOrder_EnteralFormula_Administration";
export { NutritionOrder_EnteralFormula_AdministrationSchema } from "./NutritionOrder_EnteralFormula_Administration";
export type { NutritionOrder_OralDiet } from "./NutritionOrder_OralDiet";
export { NutritionOrder_OralDietSchema } from "./NutritionOrder_OralDiet";
export type { NutritionOrder_OralDiet_Nutrient } from "./NutritionOrder_OralDiet_Nutrient";
export { NutritionOrder_OralDiet_NutrientSchema } from "./NutritionOrder_OralDiet_Nutrient";
export type { NutritionOrder_OralDiet_Texture } from "./NutritionOrder_OralDiet_Texture";
export { NutritionOrder_OralDiet_TextureSchema } from "./NutritionOrder_OralDiet_Texture";
export type { NutritionOrder_Supplement } from "./NutritionOrder_Supplement";
export { NutritionOrder_SupplementSchema } from "./NutritionOrder_Supplement";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { NutritionOrderSchemaInternal } from "./NutritionOrder";

_registerFhirResourceSchemas({
	NutritionOrder: NutritionOrderSchemaInternal,
});
