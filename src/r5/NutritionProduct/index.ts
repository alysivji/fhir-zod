// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { NutritionProduct } from "./NutritionProduct";
export { NutritionProductSchema } from "./NutritionProduct";
export type { NutritionProduct_Characteristic } from "./NutritionProduct_Characteristic";
export { NutritionProduct_CharacteristicSchema } from "./NutritionProduct_Characteristic";
export type { NutritionProduct_Ingredient } from "./NutritionProduct_Ingredient";
export { NutritionProduct_IngredientSchema } from "./NutritionProduct_Ingredient";
export type { NutritionProduct_Instance } from "./NutritionProduct_Instance";
export { NutritionProduct_InstanceSchema } from "./NutritionProduct_Instance";
export type { NutritionProduct_Nutrient } from "./NutritionProduct_Nutrient";
export { NutritionProduct_NutrientSchema } from "./NutritionProduct_Nutrient";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { NutritionProductSchemaInternal } from "./NutritionProduct";

_registerFhirResourceSchemas({
	NutritionProduct: NutritionProductSchemaInternal,
});
