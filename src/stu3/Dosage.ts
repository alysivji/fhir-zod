// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Base StructureDefinition for Dosage Type */
export interface Dosage extends Element {
	/** Supplemental instruction - e.g. "with meals". */
	additionalInstruction?: Array<CodeableConcept>;
	/** Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept). */
	asNeededBoolean?: boolean;
	/** Extensions for asNeededBoolean */
	_asNeededBoolean?: Element;
	/** Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept). */
	asNeededCodeableConcept?: CodeableConcept;
	/** Amount of medication per dose. */
	doseQuantity?: Quantity;
	/** Amount of medication per dose. */
	doseRange?: Range;
	/** Upper limit on medication per administration. */
	maxDosePerAdministration?: Quantity;
	/** Upper limit on medication per lifetime of the patient. */
	maxDosePerLifetime?: Quantity;
	/** Upper limit on medication per unit of time. */
	maxDosePerPeriod?: Ratio;
	/** Technique for administering medication. */
	method?: CodeableConcept;
	/** Instructions in terms that are understood by the patient or consumer. */
	patientInstruction?: string;
	/** Extensions for patientInstruction */
	_patientInstruction?: Element;
	/** Amount of medication per unit of time. */
	rateQuantity?: Quantity;
	/** Amount of medication per unit of time. */
	rateRange?: Range;
	/** Amount of medication per unit of time. */
	rateRatio?: Ratio;
	/** How drug should enter body. */
	route?: CodeableConcept;
	/** Indicates the order in which the dosage instructions should be applied or interpreted. */
	sequence?: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** Body site to administer to. */
	site?: CodeableConcept;
	/** Free text dosage instructions e.g. SIG. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** When medication should be administered. */
	timing?: Timing;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const DosageSchemaInternal = ElementSchemaInternal.extend({
	additionalInstruction: z.lazy(getCodeableConceptSchema).array().optional(),
	asNeededBoolean: z.boolean().optional(),
	_asNeededBoolean: z.lazy(getElementSchema).optional(),
	asNeededCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	doseQuantity: z.lazy(getQuantitySchema).optional(),
	doseRange: z.lazy(getRangeSchema).optional(),
	maxDosePerAdministration: z.lazy(getQuantitySchema).optional(),
	maxDosePerLifetime: z.lazy(getQuantitySchema).optional(),
	maxDosePerPeriod: z.lazy(getRatioSchema).optional(),
	method: z.lazy(getCodeableConceptSchema).optional(),
	patientInstruction: fhirString().optional(),
	_patientInstruction: z.lazy(getElementSchema).optional(),
	rateQuantity: z.lazy(getQuantitySchema).optional(),
	rateRange: z.lazy(getRangeSchema).optional(),
	rateRatio: z.lazy(getRatioSchema).optional(),
	route: z.lazy(getCodeableConceptSchema).optional(),
	sequence: z.number().int().optional(),
	_sequence: z.lazy(getElementSchema).optional(),
	site: z.lazy(getCodeableConceptSchema).optional(),
	text: fhirString().optional(),
	_text: z.lazy(getElementSchema).optional(),
	timing: z.lazy(getTimingSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const asNeeded_x_Present = [
			"asNeededBoolean",
			"asNeededCodeableConcept",
		].filter((field) => record[field] !== undefined);
		if (asNeeded_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of asNeededBoolean, asNeededCodeableConcept may be present for asNeeded[x]",
				path: [asNeeded_x_Present[0]],
			});
		}
		const dose_x_Present = ["doseQuantity", "doseRange"].filter(
			(field) => record[field] !== undefined,
		);
		if (dose_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of doseQuantity, doseRange may be present for dose[x]",
				path: [dose_x_Present[0]],
			});
		}
		const rate_x_Present = ["rateQuantity", "rateRange", "rateRatio"].filter(
			(field) => record[field] !== undefined,
		);
		if (rate_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of rateQuantity, rateRange, rateRatio may be present for rate[x]",
				path: [rate_x_Present[0]],
			});
		}
	});

export const DosageSchema = DosageSchemaInternal as z.ZodType<Dosage>;
