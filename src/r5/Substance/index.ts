// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Substance } from "./Substance";
export { SubstanceSchema } from "./Substance";
export type { Substance_Ingredient } from "./Substance_Ingredient";
export { Substance_IngredientSchema } from "./Substance_Ingredient";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SubstanceSchemaInternal } from "./Substance";

_registerFhirResourceSchemas({
	Substance: SubstanceSchemaInternal,
});
