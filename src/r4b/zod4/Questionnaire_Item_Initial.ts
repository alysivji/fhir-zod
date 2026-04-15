// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirTime,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input. */
export interface Questionnaire_Item_Initial extends BackboneElement {
	/** The actual value to for an initial answer. */
	valueAttachment?: Attachment;
	/** The actual value to for an initial answer. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The actual value to for an initial answer. */
	valueCoding?: Coding;
	/** The actual value to for an initial answer. */
	valueDate?: string;
	/** Extensions for valueDate */
	_valueDate?: Element;
	/** The actual value to for an initial answer. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The actual value to for an initial answer. */
	valueDecimal?: number;
	/** Extensions for valueDecimal */
	_valueDecimal?: Element;
	/** The actual value to for an initial answer. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The actual value to for an initial answer. */
	valueQuantity?: Quantity;
	/** The actual value to for an initial answer. */
	valueReference?: Reference;
	/** The actual value to for an initial answer. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** The actual value to for an initial answer. */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
	/** The actual value to for an initial answer. */
	valueUri?: string;
	/** Extensions for valueUri */
	_valueUri?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Questionnaire_Item_InitialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCoding: z.lazy(getCodingSchema).optional(),
		valueDate: fhirDate().optional(),
		_valueDate: z.lazy(getElementSchema).optional(),
		valueDateTime: fhirDateTime().optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
		valueDecimal: z.number().optional(),
		_valueDecimal: z.lazy(getElementSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueReference: z.lazy(getReferenceSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
		valueTime: fhirTime().optional(),
		_valueTime: z.lazy(getElementSchema).optional(),
		valueUri: fhirUri().optional(),
		_valueUri: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueAttachment",
				"valueBoolean",
				"valueCoding",
				"valueDate",
				"valueDateTime",
				"valueDecimal",
				"valueInteger",
				"valueQuantity",
				"valueReference",
				"valueString",
				"valueTime",
				"valueUri",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueAttachment, valueBoolean, valueCoding, valueDate, valueDateTime, valueDecimal, valueInteger, valueQuantity, valueReference, valueString, valueTime, valueUri must be present for value[x]",
					path: ["valueAttachment"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBoolean, valueCoding, valueDate, valueDateTime, valueDecimal, valueInteger, valueQuantity, valueReference, valueString, valueTime, valueUri may be present for value[x]",
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

export const Questionnaire_Item_InitialSchema =
	Questionnaire_Item_InitialSchemaInternal as z.ZodType<Questionnaire_Item_Initial>;
