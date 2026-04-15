// Profile: http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirTime,
	fhirUri,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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

/** The respondent's answer(s) to the question. */
export interface QuestionnaireResponse_Item_Answer extends BackboneElement {
	/** Nested groups and/or questions found within this particular answer. */
	item?: Array<unknown>;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueAttachment?: Attachment;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueCoding?: Coding;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueDate?: string;
	/** Extensions for valueDate */
	_valueDate?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueDecimal?: number;
	/** Extensions for valueDecimal */
	_valueDecimal?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueQuantity?: Quantity;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueReference?: Reference;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
	/** The answer (or one of the answers) provided by the respondent to the question. */
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
export const QuestionnaireResponse_Item_AnswerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		item: z.unknown().array().optional(),
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

export const QuestionnaireResponse_Item_AnswerSchema =
	QuestionnaireResponse_Item_AnswerSchemaInternal as z.ZodType<QuestionnaireResponse_Item_Answer>;
