// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** Identifies a particular constituent of interest in the product. */
export interface MedicationKnowledge_Definitional_Ingredient
	extends BackboneElement {
	/** A reference to the resource that provides information about the ingredient. */
	item: CodeableReference;
	/** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet but can also be expressed a quantity when the denominator is assumed to be 1 tablet. */
	strengthCodeableConcept?: CodeableConcept;
	/** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet but can also be expressed a quantity when the denominator is assumed to be 1 tablet. */
	strengthQuantity?: Quantity;
	/** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet but can also be expressed a quantity when the denominator is assumed to be 1 tablet. */
	strengthRatio?: Ratio;
	/** Indication of whether this ingredient affects the therapeutic action of the drug. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const MedicationKnowledge_Definitional_IngredientSchemaInternal =
	BackboneElementSchemaInternal.extend({
		item: z.lazy(getCodeableReferenceSchema),
		strengthCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		strengthQuantity: z.lazy(getQuantitySchema).optional(),
		strengthRatio: z.lazy(getRatioSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const strength_x_Present = [
				"strengthCodeableConcept",
				"strengthQuantity",
				"strengthRatio",
			].filter((field) => record[field] !== undefined);
			if (strength_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of strengthCodeableConcept, strengthQuantity, strengthRatio may be present for strength[x]",
					path: [strength_x_Present[0]],
				});
			}
		});

export const MedicationKnowledge_Definitional_IngredientSchema =
	MedicationKnowledge_Definitional_IngredientSchemaInternal as z.ZodType<MedicationKnowledge_Definitional_Ingredient>;
