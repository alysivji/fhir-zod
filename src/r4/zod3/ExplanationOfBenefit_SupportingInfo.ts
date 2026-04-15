// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirDate, fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
export interface ExplanationOfBenefit_SupportingInfo extends BackboneElement {
	/** The general class of the information supplied: information; exception; accident, employment; onset, etc. */
	category: CodeableConcept;
	/** System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought. */
	code?: CodeableConcept;
	/** Provides the reason in the situation where a reason code is required in addition to the content. */
	reason?: Coding;
	/** A number to uniquely identify supporting information entries. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** The date when or period to which this information refers. */
	timingDate?: string;
	/** Extensions for timingDate */
	_timingDate?: Element;
	/** The date when or period to which this information refers. */
	timingPeriod?: Period;
	/** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
	valueAttachment?: Attachment;
	/** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
	valueQuantity?: Quantity;
	/** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
	valueReference?: Reference;
	/** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_SupportingInfoSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema),
		code: z.lazy(getCodeableConceptSchema).optional(),
		reason: z.lazy(getCodingSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
		timingDate: fhirDate().optional(),
		_timingDate: z.lazy(getElementSchema).optional(),
		timingPeriod: z.lazy(getPeriodSchema).optional(),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueReference: z.lazy(getReferenceSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const timing_x_Present = ["timingDate", "timingPeriod"].filter(
				(field) => record[field] !== undefined,
			);
			if (timing_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of timingDate, timingPeriod may be present for timing[x]",
					path: [timing_x_Present[0]],
				});
			}
			const value_x_Present = [
				"valueAttachment",
				"valueBoolean",
				"valueQuantity",
				"valueReference",
				"valueString",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBoolean, valueQuantity, valueReference, valueString may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.valueReference,
				"valueReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ExplanationOfBenefit_SupportingInfoSchema =
	ExplanationOfBenefit_SupportingInfoSchemaInternal as z.ZodType<ExplanationOfBenefit_SupportingInfo>;
