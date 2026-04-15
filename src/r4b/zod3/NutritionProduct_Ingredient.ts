// Profile: http://hl7.org/fhir/StructureDefinition/NutritionProduct
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** Ingredients contained in this product. */
export interface NutritionProduct_Ingredient extends BackboneElement {
	/** The amount of ingredient that is in the product. */
	amount?: Array<Ratio>;
	/** The ingredient contained in the product. */
	item: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const NutritionProduct_IngredientSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getRatioSchema).array().optional(),
		item: z.lazy(getCodeableReferenceSchema),
	}).strict();

export const NutritionProduct_IngredientSchema =
	NutritionProduct_IngredientSchemaInternal as z.ZodType<NutritionProduct_Ingredient>;
