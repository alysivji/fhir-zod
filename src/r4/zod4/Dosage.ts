// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Dosage_DoseAndRate } from "./Dosage_DoseAndRate";
import { Dosage_DoseAndRateSchemaInternal } from "./Dosage_DoseAndRate";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Base StructureDefinition for Dosage Type: Indicates how the medication is/was taken or should be taken by the patient. */
export interface Dosage extends BackboneElement {
	/** Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps"). */
	additionalInstruction?: Array<CodeableConcept>;
	/** Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept). */
	asNeededBoolean?: boolean;
	/** Extensions for asNeededBoolean */
	_asNeededBoolean?: Element;
	/** Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option), or it indicates the precondition for taking the Medication (CodeableConcept). */
	asNeededCodeableConcept?: CodeableConcept;
	/** The amount of medication administered. */
	doseAndRate?: Array<Dosage_DoseAndRate>;
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
const getDosage_DoseAndRateSchema = (): z.ZodType<Dosage_DoseAndRate> =>
	Dosage_DoseAndRateSchemaInternal as z.ZodType<Dosage_DoseAndRate>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const DosageSchemaInternal = z
	.object({
		additionalInstruction: z.lazy(getCodeableConceptSchema).array().optional(),
		asNeededBoolean: z.boolean().optional(),
		_asNeededBoolean: z.lazy(getElementSchema).optional(),
		asNeededCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		doseAndRate: z.lazy(getDosage_DoseAndRateSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		maxDosePerAdministration: z.lazy(getQuantitySchema).optional(),
		maxDosePerLifetime: z.lazy(getQuantitySchema).optional(),
		maxDosePerPeriod: z.lazy(getRatioSchema).optional(),
		method: z.lazy(getCodeableConceptSchema).optional(),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
		patientInstruction: fhirString().optional(),
		_patientInstruction: z.lazy(getElementSchema).optional(),
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
	});

export const DosageSchema = DosageSchemaInternal as z.ZodType<Dosage>;
