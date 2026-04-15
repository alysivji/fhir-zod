// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Identifies a particular constituent of interest in the product. */
export interface Medication_Ingredient extends BackboneElement {
	/** Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet. */
	amount?: Ratio;
	/** Indication of whether this ingredient affects the therapeutic action of the drug. */
	isActive?: boolean;
	/** Extensions for isActive */
	_isActive?: Element;
	/** The actual ingredient - either a substance (simple ingredient) or another medication. */
	itemCodeableConcept?: CodeableConcept;
	/** The actual ingredient - either a substance (simple ingredient) or another medication. */
	itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Medication_IngredientSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getRatioSchema).optional(),
		isActive: z.boolean().optional(),
		_isActive: z.lazy(getElementSchema).optional(),
		itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		itemReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
				(field) => record[field] !== undefined,
			);
			if (item_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of itemCodeableConcept, itemReference must be present for item[x]",
					path: ["itemCodeableConcept"],
				});
			}
			if (item_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of itemCodeableConcept, itemReference may be present for item[x]",
					path: [item_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.itemReference,
				"itemReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				["Medication", "Substance"],
				ctx,
			);
		});

export const Medication_IngredientSchema =
	Medication_IngredientSchemaInternal as z.ZodType<Medication_Ingredient>;
