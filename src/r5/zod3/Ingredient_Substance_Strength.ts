// Profile: http://hl7.org/fhir/StructureDefinition/Ingredient
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Ingredient_Substance_Strength_ReferenceStrength } from "./Ingredient_Substance_Strength_ReferenceStrength";
import { Ingredient_Substance_Strength_ReferenceStrengthSchemaInternal } from "./Ingredient_Substance_Strength_ReferenceStrength";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { RatioRange } from "./RatioRange";
import { RatioRangeSchemaInternal } from "./RatioRange";

/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength. */
export interface Ingredient_Substance_Strength extends BackboneElement {
	/** A code that indicates if the strength is, for example, based on the ingredient substance as stated or on the substance base (when the ingredient is a salt). */
	basis?: CodeableConcept;
	/** The strength per unitary volume (or mass). */
	concentrationCodeableConcept?: CodeableConcept;
	/** The strength per unitary volume (or mass). */
	concentrationQuantity?: Quantity;
	/** The strength per unitary volume (or mass). */
	concentrationRatio?: Ratio;
	/** The strength per unitary volume (or mass). */
	concentrationRatioRange?: RatioRange;
	/** The country or countries for which the strength range applies. */
	country?: Array<CodeableConcept>;
	/** For when strength is measured at a particular point or distance. There are products where strength is measured at a particular point. For example, the strength of the ingredient in some inhalers is measured at a particular position relative to the point of aerosolization. */
	measurementPoint?: string;
	/** Extensions for measurementPoint */
	_measurementPoint?: Element;
	/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg'). */
	presentationCodeableConcept?: CodeableConcept;
	/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg'). */
	presentationQuantity?: Quantity;
	/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg'). */
	presentationRatio?: Ratio;
	/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg'). */
	presentationRatioRange?: RatioRange;
	/** Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed. */
	referenceStrength?: Array<Ingredient_Substance_Strength_ReferenceStrength>;
	/** A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio. */
	textConcentration?: string;
	/** Extensions for textConcentration */
	_textConcentration?: Element;
	/** A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio. */
	textPresentation?: string;
	/** Extensions for textPresentation */
	_textPresentation?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIngredient_Substance_Strength_ReferenceStrengthSchema =
	(): z.ZodType<Ingredient_Substance_Strength_ReferenceStrength> =>
		Ingredient_Substance_Strength_ReferenceStrengthSchemaInternal as z.ZodType<Ingredient_Substance_Strength_ReferenceStrength>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getRatioRangeSchema = (): z.ZodType<RatioRange> =>
	RatioRangeSchemaInternal as z.ZodType<RatioRange>;

/** @internal */
export const Ingredient_Substance_StrengthSchemaInternal =
	BackboneElementSchemaInternal.extend({
		basis: z.lazy(getCodeableConceptSchema).optional(),
		concentrationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		concentrationQuantity: z.lazy(getQuantitySchema).optional(),
		concentrationRatio: z.lazy(getRatioSchema).optional(),
		concentrationRatioRange: z.lazy(getRatioRangeSchema).optional(),
		country: z.lazy(getCodeableConceptSchema).array().optional(),
		measurementPoint: fhirString().optional(),
		_measurementPoint: z.lazy(getElementSchema).optional(),
		presentationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		presentationQuantity: z.lazy(getQuantitySchema).optional(),
		presentationRatio: z.lazy(getRatioSchema).optional(),
		presentationRatioRange: z.lazy(getRatioRangeSchema).optional(),
		referenceStrength: z
			.lazy(getIngredient_Substance_Strength_ReferenceStrengthSchema)
			.array()
			.optional(),
		textConcentration: fhirString().optional(),
		_textConcentration: z.lazy(getElementSchema).optional(),
		textPresentation: fhirString().optional(),
		_textPresentation: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const concentration_x_Present = [
				"concentrationCodeableConcept",
				"concentrationQuantity",
				"concentrationRatio",
				"concentrationRatioRange",
			].filter((field) => record[field] !== undefined);
			if (concentration_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of concentrationCodeableConcept, concentrationQuantity, concentrationRatio, concentrationRatioRange may be present for concentration[x]",
					path: [concentration_x_Present[0]],
				});
			}
			const presentation_x_Present = [
				"presentationCodeableConcept",
				"presentationQuantity",
				"presentationRatio",
				"presentationRatioRange",
			].filter((field) => record[field] !== undefined);
			if (presentation_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of presentationCodeableConcept, presentationQuantity, presentationRatio, presentationRatioRange may be present for presentation[x]",
					path: [presentation_x_Present[0]],
				});
			}
		});

export const Ingredient_Substance_StrengthSchema =
	Ingredient_Substance_StrengthSchemaInternal as z.ZodType<Ingredient_Substance_Strength>;
