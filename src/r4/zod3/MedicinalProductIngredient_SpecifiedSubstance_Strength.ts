// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength } from "./MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength";
import { MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchemaInternal } from "./MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product. */
export interface MedicinalProductIngredient_SpecifiedSubstance_Strength
	extends BackboneElement {
	/** The strength per unitary volume (or mass). */
	concentration?: Ratio;
	/** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit. */
	concentrationLowLimit?: Ratio;
	/** The country or countries for which the strength range applies. */
	country?: Array<CodeableConcept>;
	/** For when strength is measured at a particular point or distance. */
	measurementPoint?: string;
	/** Extensions for measurementPoint */
	_measurementPoint?: Element;
	/** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. */
	presentation: Ratio;
	/** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit. */
	presentationLowLimit?: Ratio;
	/** Strength expressed in terms of a reference substance. */
	referenceStrength?: Array<MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchema =
	(): z.ZodType<MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength> =>
		MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const MedicinalProductIngredient_SpecifiedSubstance_StrengthSchemaInternal =
	BackboneElementSchemaInternal.extend({
		concentration: z.lazy(getRatioSchema).optional(),
		concentrationLowLimit: z.lazy(getRatioSchema).optional(),
		country: z.lazy(getCodeableConceptSchema).array().optional(),
		measurementPoint: fhirString().optional(),
		_measurementPoint: z.lazy(getElementSchema).optional(),
		presentation: z.lazy(getRatioSchema),
		presentationLowLimit: z.lazy(getRatioSchema).optional(),
		referenceStrength: z
			.lazy(
				getMedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrengthSchema,
			)
			.array()
			.optional(),
	}).strict();

export const MedicinalProductIngredient_SpecifiedSubstance_StrengthSchema =
	MedicinalProductIngredient_SpecifiedSubstance_StrengthSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance_Strength>;
