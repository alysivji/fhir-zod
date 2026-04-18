// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Ingredient } from "./Ingredient";
export { IngredientSchema } from "./Ingredient";
export type { Ingredient_Manufacturer } from "./Ingredient_Manufacturer";
export { Ingredient_ManufacturerSchema } from "./Ingredient_Manufacturer";
export type { Ingredient_Substance } from "./Ingredient_Substance";
export { Ingredient_SubstanceSchema } from "./Ingredient_Substance";
export type { Ingredient_Substance_Strength } from "./Ingredient_Substance_Strength";
export { Ingredient_Substance_StrengthSchema } from "./Ingredient_Substance_Strength";
export type { Ingredient_Substance_Strength_ReferenceStrength } from "./Ingredient_Substance_Strength_ReferenceStrength";
export { Ingredient_Substance_Strength_ReferenceStrengthSchema } from "./Ingredient_Substance_Strength_ReferenceStrength";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { IngredientSchemaInternal } from "./Ingredient";

_registerFhirResourceSchemas({
	Ingredient: IngredientSchemaInternal,
});
