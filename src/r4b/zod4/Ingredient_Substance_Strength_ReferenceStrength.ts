// Profile: http://hl7.org/fhir/StructureDefinition/Ingredient
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { RatioRange } from "./RatioRange";
import { RatioRangeSchemaInternal } from "./RatioRange";

/** Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed. */
export interface Ingredient_Substance_Strength_ReferenceStrength
	extends BackboneElement {
	/** The country or countries for which the strength range applies. */
	country?: Array<CodeableConcept>;
	/** For when strength is measured at a particular point or distance. */
	measurementPoint?: string;
	/** Extensions for measurementPoint */
	_measurementPoint?: Element;
	/** Strength expressed in terms of a reference substance. */
	strengthRatio?: Ratio;
	/** Strength expressed in terms of a reference substance. */
	strengthRatioRange?: RatioRange;
	/** Relevant reference substance. */
	substance?: CodeableReference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getRatioRangeSchema = (): z.ZodType<RatioRange> =>
	RatioRangeSchemaInternal as z.ZodType<RatioRange>;

/** @internal */
export const Ingredient_Substance_Strength_ReferenceStrengthSchemaInternal =
	BackboneElementSchemaInternal.extend({
		country: z.lazy(getCodeableConceptSchema).array().optional(),
		measurementPoint: fhirString().optional(),
		_measurementPoint: z.lazy(getElementSchema).optional(),
		strengthRatio: z.lazy(getRatioSchema).optional(),
		strengthRatioRange: z.lazy(getRatioRangeSchema).optional(),
		substance: z.lazy(getCodeableReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const strength_x_Present = ["strengthRatio", "strengthRatioRange"].filter(
				(field) => record[field] !== undefined,
			);
			if (strength_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of strengthRatio, strengthRatioRange must be present for strength[x]",
					path: ["strengthRatio"],
				});
			}
			if (strength_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of strengthRatio, strengthRatioRange may be present for strength[x]",
					path: [strength_x_Present[0]],
				});
			}
		});

export const Ingredient_Substance_Strength_ReferenceStrengthSchema =
	Ingredient_Substance_Strength_ReferenceStrengthSchemaInternal as z.ZodType<Ingredient_Substance_Strength_ReferenceStrength>;
