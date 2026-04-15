// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet. */
export interface NutritionOrder_OralDiet_Nutrient extends BackboneElement {
	/** The quantity of the specified nutrient to include in diet. */
	amount?: Quantity;
	/** The nutrient that is being modified such as carbohydrate or sodium. */
	modifier?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionOrder_OralDiet_NutrientSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getQuantitySchema).optional(),
		modifier: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const NutritionOrder_OralDiet_NutrientSchema =
	NutritionOrder_OralDiet_NutrientSchemaInternal as z.ZodType<NutritionOrder_OralDiet_Nutrient>;
