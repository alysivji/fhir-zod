// Profile: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
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
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** Describes the medication dosage information details e.g. dose, rate, site, route, etc. */
export interface MedicationAdministration_Dosage extends BackboneElement {
	/** The amount of the medication given at one administration event.   Use this value when the administration is essentially an instantaneous event such as a swallowing a tablet or giving an injection. */
	dose?: Quantity;
	/** A coded value indicating the method by which the medication is intended to be or was introduced into or on the body.  This attribute will most often NOT be populated.  It is most commonly used for injections.  For example, Slow Push, Deep IV. */
	method?: CodeableConcept;
	/** Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours. */
	rateQuantity?: Quantity;
	/** Identifies the speed with which the medication was or will be introduced into the patient.  Typically, the rate for an infusion e.g. 100 ml per 1 hour or 100 ml/hr.  May also be expressed as a rate per unit of time, e.g. 500 ml per 2 hours.  Other examples:  200 mcg/min or 200 mcg/1 minute; 1 liter/8 hours. */
	rateRatio?: Ratio;
	/** A code specifying the route or physiological path of administration of a therapeutic agent into or onto the patient.  For example, topical, intravenous, etc. */
	route?: CodeableConcept;
	/** A coded specification of the anatomic site where the medication first entered the body.  For example, "left arm". */
	site?: CodeableConcept;
	/** Free text dosage can be used for cases where the dosage administered is too complex to code. When coded dosage is present, the free text dosage may still be present for display to humans.The dosage instructions should reflect the dosage of the medication that was administered. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const MedicationAdministration_DosageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		dose: z.lazy(getQuantitySchema).optional(),
		method: z.lazy(getCodeableConceptSchema).optional(),
		rateQuantity: z.lazy(getQuantitySchema).optional(),
		rateRatio: z.lazy(getRatioSchema).optional(),
		route: z.lazy(getCodeableConceptSchema).optional(),
		site: z.lazy(getCodeableConceptSchema).optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const rate_x_Present = ["rateQuantity", "rateRatio"].filter(
				(field) => record[field] !== undefined,
			);
			if (rate_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of rateQuantity, rateRatio may be present for rate[x]",
					path: [rate_x_Present[0]],
				});
			}
		});

export const MedicationAdministration_DosageSchema =
	MedicationAdministration_DosageSchemaInternal as z.ZodType<MedicationAdministration_Dosage>;
