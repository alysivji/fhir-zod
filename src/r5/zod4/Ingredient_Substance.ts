// Profile: http://hl7.org/fhir/StructureDefinition/Ingredient
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Ingredient_Substance_Strength } from "./Ingredient_Substance_Strength";
import { Ingredient_Substance_StrengthSchemaInternal } from "./Ingredient_Substance_Strength";

/** The substance that comprises this ingredient. */
export interface Ingredient_Substance extends BackboneElement {
	/** A code or full resource that represents the ingredient's substance. */
	code: CodeableReference;
	/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength. */
	strength?: Array<Ingredient_Substance_Strength>;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getIngredient_Substance_StrengthSchema =
	(): z.ZodType<Ingredient_Substance_Strength> =>
		Ingredient_Substance_StrengthSchemaInternal as z.ZodType<Ingredient_Substance_Strength>;

/** @internal */
export const Ingredient_SubstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableReferenceSchema),
		strength: z.lazy(getIngredient_Substance_StrengthSchema).array().optional(),
	}).strict();

export const Ingredient_SubstanceSchema =
	Ingredient_SubstanceSchemaInternal as z.ZodType<Ingredient_Substance>;
