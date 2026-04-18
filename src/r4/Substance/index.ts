// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Substance } from "./Substance";
export { SubstanceSchema } from "./Substance";
export type { Substance_Ingredient } from "./Substance_Ingredient";
export { Substance_IngredientSchema } from "./Substance_Ingredient";
export type { Substance_Instance } from "./Substance_Instance";
export { Substance_InstanceSchema } from "./Substance_Instance";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SubstanceSchemaInternal } from "./Substance";

_registerFhirResourceSchemas({
  Substance: SubstanceSchemaInternal,
});
