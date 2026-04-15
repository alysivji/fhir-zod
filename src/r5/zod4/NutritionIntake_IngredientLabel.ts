// Profile: http://hl7.org/fhir/StructureDefinition/NutritionIntake
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Total nutrient amounts for the whole meal, product, serving, etc. */
export interface NutritionIntake_IngredientLabel extends BackboneElement {
	/** Total amount of nutrient consumed. */
	amount: Quantity;
	/** Total nutrient consumed. This could be a macronutrient (protein, fat, carbohydrate), or a vitamin and mineral. */
	nutrient: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionIntake_IngredientLabelSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getQuantitySchema),
		nutrient: z.lazy(getCodeableReferenceSchema),
	}).strict();

export const NutritionIntake_IngredientLabelSchema =
	NutritionIntake_IngredientLabelSchemaInternal as z.ZodType<NutritionIntake_IngredientLabel>;
