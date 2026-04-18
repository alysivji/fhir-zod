// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirId, fhirString } from "../shared/fhir-primitives";
import type { BackboneType } from "./BackboneType";
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

/** Dosage Type: Indicates how the medication is/was taken or should be taken by the patient. */
export interface Dosage extends BackboneType {
	/** Supplemental instructions to the patient on how to take the medication  (e.g. "with meals" or"take half to one hour before food") or warnings for the patient about the medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or sunlamps"). */
	additionalInstruction?: Array<CodeableConcept>;
	/** Indicates whether the Medication is only taken when needed within a specific dosing schedule (Boolean option). */
	asNeeded?: boolean;
	/** Extensions for asNeeded */
	_asNeeded?: Element;
	/** Indicates whether the Medication is only taken based on a precondition for taking the Medication (CodeableConcept). */
	asNeededFor?: Array<CodeableConcept>;
	/** Depending on the resource,this is the amount of medication administered, to  be administered or typical amount to be administered. */
	doseAndRate?: Array<Dosage_DoseAndRate>;
	/** Upper limit on medication per administration. */
	maxDosePerAdministration?: Quantity;
	/** Upper limit on medication per lifetime of the patient. */
	maxDosePerLifetime?: Quantity;
	/** Upper limit on medication per unit of time. */
	maxDosePerPeriod?: Array<Ratio>;
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
		asNeeded: z.boolean().optional(),
		_asNeeded: z.lazy(getElementSchema).optional(),
		asNeededFor: z.lazy(getCodeableConceptSchema).array().optional(),
		doseAndRate: z.lazy(getDosage_DoseAndRateSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		maxDosePerAdministration: z.lazy(getQuantitySchema).optional(),
		maxDosePerLifetime: z.lazy(getQuantitySchema).optional(),
		maxDosePerPeriod: z.lazy(getRatioSchema).array().optional(),
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
	.strict();

export const DosageSchema = DosageSchemaInternal as z.ZodType<Dosage>;
