// Profile: http://hl7.org/fhir/StructureDefinition/NutritionProduct
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";

/** The product's nutritional information expressed by the nutrients. */
export interface NutritionProduct_Nutrient extends BackboneElement {
	/** The amount of nutrient expressed in one or more units: X per pack / per serving / per dose. */
	amount?: Array<Ratio>;
	/** The (relevant) nutrients in the product. */
	item?: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const NutritionProduct_NutrientSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getRatioSchema).array().optional(),
		item: z.lazy(getCodeableReferenceSchema).optional(),
	}).strict();

export const NutritionProduct_NutrientSchema =
	NutritionProduct_NutrientSchemaInternal as z.ZodType<NutritionProduct_Nutrient>;
