// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

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
import type { Questionnaire_Item_EnableWhen } from "./Questionnaire_Item_EnableWhen";
import { Questionnaire_Item_EnableWhenSchemaInternal } from "./Questionnaire_Item_EnableWhen";
import type { Questionnaire_Item_Option } from "./Questionnaire_Item_Option";
import { Questionnaire_Item_OptionSchemaInternal } from "./Questionnaire_Item_Option";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A particular question, question grouping or display text that is part of the questionnaire. */
export interface Questionnaire_Item extends BackboneElement {
	/** A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers). */
	code?: Array<Coding>;
	/**
	 * A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. If a definition is provided, then the following element values can be inferred from the definition:
	 *
	 * * code (ElementDefinition.code)
	 * * type (ElementDefinition.type)
	 * * required (ElementDefinition.min)
	 * * repeats (ElementDefinition.max)
	 * * maxLength (ElementDefinition.maxLength)
	 * * options (ElementDefinition.binding)
	 *
	 * Any information provided in these elements on a Questionnaire Item overrides the information from the definition.
	 */
	definition?: string;
	/** Extensions for definition */
	_definition?: Element;
	/** A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true. */
	enableWhen?: Array<Questionnaire_Item_EnableWhen>;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialAttachment?: Attachment;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialBoolean?: boolean;
	/** Extensions for initialBoolean */
	_initialBoolean?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialCoding?: Coding;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialDate?: string;
	/** Extensions for initialDate */
	_initialDate?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialDateTime?: string;
	/** Extensions for initialDateTime */
	_initialDateTime?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialDecimal?: number;
	/** Extensions for initialDecimal */
	_initialDecimal?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialInteger?: number;
	/** Extensions for initialInteger */
	_initialInteger?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialQuantity?: Quantity;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialReference?: Reference;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialString?: string;
	/** Extensions for initialString */
	_initialString?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialTime?: string;
	/** Extensions for initialTime */
	_initialTime?: Element;
	/** The value that should be defaulted when initially rendering the questionnaire for user input. */
	initialUri?: string;
	/** Extensions for initialUri */
	_initialUri?: Element;
	/** Text, questions and other groups to be nested beneath a question or group. */
	item?: Array<unknown>;
	/** An identifier that is unique within the Questionnaire allowing linkage to the equivalent item in a QuestionnaireResponse resource. */
	linkId: string;
	/** Extensions for linkId */
	_linkId?: Element;
	/** The maximum number of characters that are permitted in the answer to be considered a "valid" QuestionnaireResponse. */
	maxLength?: number;
	/** Extensions for maxLength */
	_maxLength?: Element;
	/** One of the permitted answers for a "choice" or "open-choice" question. */
	option?: Array<Questionnaire_Item_Option>;
	/** A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question. */
	options?: Reference;
	/** A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire. */
	prefix?: string;
	/** Extensions for prefix */
	_prefix?: Element;
	/** An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire. */
	readOnly?: boolean;
	/** Extensions for readOnly */
	_readOnly?: Element;
	/** An indication, if true, that the item may occur multiple times in the response, collecting multiple answers answers for questions or multiple sets of answers for groups. */
	repeats?: boolean;
	/** Extensions for repeats */
	_repeats?: Element;
	/** An indication, if true, that the item must be present in a "completed" QuestionnaireResponse.  If false, the item may be skipped when answering the questionnaire. */
	required?: boolean;
	/** Extensions for required */
	_required?: Element;
	/** The name of a section, the text of a question or text content for a display item. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, coded choice, etc.). */
	type:
		| "attachment"
		| "boolean"
		| "choice"
		| "date"
		| "dateTime"
		| "decimal"
		| "display"
		| "group"
		| "integer"
		| "open-choice"
		| "quantity"
		| "question"
		| "reference"
		| "string"
		| "text"
		| "time"
		| "url";
	/** Extensions for type */
	_type?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getQuestionnaire_Item_EnableWhenSchema =
	(): z.ZodType<Questionnaire_Item_EnableWhen> =>
		Questionnaire_Item_EnableWhenSchemaInternal as z.ZodType<Questionnaire_Item_EnableWhen>;
const getQuestionnaire_Item_OptionSchema =
	(): z.ZodType<Questionnaire_Item_Option> =>
		Questionnaire_Item_OptionSchemaInternal as z.ZodType<Questionnaire_Item_Option>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Questionnaire_ItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodingSchema).array().optional(),
		definition: fhirUri().optional(),
		_definition: z.lazy(getElementSchema).optional(),
		enableWhen: z
			.lazy(getQuestionnaire_Item_EnableWhenSchema)
			.array()
			.optional(),
		initialAttachment: z.lazy(getAttachmentSchema).optional(),
		initialBoolean: z.boolean().optional(),
		_initialBoolean: z.lazy(getElementSchema).optional(),
		initialCoding: z.lazy(getCodingSchema).optional(),
		initialDate: fhirDate().optional(),
		_initialDate: z.lazy(getElementSchema).optional(),
		initialDateTime: fhirDateTime().optional(),
		_initialDateTime: z.lazy(getElementSchema).optional(),
		initialDecimal: z.number().optional(),
		_initialDecimal: z.lazy(getElementSchema).optional(),
		initialInteger: z.number().int().optional(),
		_initialInteger: z.lazy(getElementSchema).optional(),
		initialQuantity: z.lazy(getQuantitySchema).optional(),
		initialReference: z.lazy(getReferenceSchema).optional(),
		initialString: fhirString().optional(),
		_initialString: z.lazy(getElementSchema).optional(),
		initialTime: fhirTime().optional(),
		_initialTime: z.lazy(getElementSchema).optional(),
		initialUri: fhirUri().optional(),
		_initialUri: z.lazy(getElementSchema).optional(),
		item: z.unknown().array().optional(),
		linkId: fhirString(),
		_linkId: z.lazy(getElementSchema).optional(),
		maxLength: z.number().int().optional(),
		_maxLength: z.lazy(getElementSchema).optional(),
		option: z.lazy(getQuestionnaire_Item_OptionSchema).array().optional(),
		options: z.lazy(getReferenceSchema).optional(),
		prefix: fhirString().optional(),
		_prefix: z.lazy(getElementSchema).optional(),
		readOnly: z.boolean().optional(),
		_readOnly: z.lazy(getElementSchema).optional(),
		repeats: z.boolean().optional(),
		_repeats: z.lazy(getElementSchema).optional(),
		required: z.boolean().optional(),
		_required: z.lazy(getElementSchema).optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"attachment",
			"boolean",
			"choice",
			"date",
			"dateTime",
			"decimal",
			"display",
			"group",
			"integer",
			"open-choice",
			"quantity",
			"question",
			"reference",
			"string",
			"text",
			"time",
			"url",
		]),
		_type: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const initial_x_Present = [
				"initialAttachment",
				"initialBoolean",
				"initialCoding",
				"initialDate",
				"initialDateTime",
				"initialDecimal",
				"initialInteger",
				"initialQuantity",
				"initialReference",
				"initialString",
				"initialTime",
				"initialUri",
			].filter((field) => record[field] !== undefined);
			if (initial_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of initialAttachment, initialBoolean, initialCoding, initialDate, initialDateTime, initialDecimal, initialInteger, initialQuantity, initialReference, initialString, initialTime, initialUri may be present for initial[x]",
					path: [initial_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.initialReference,
				"initialReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.options,
				"options",
				["http://hl7.org/fhir/StructureDefinition/ValueSet"],
				["ValueSet"],
				ctx,
			);
		});

export const Questionnaire_ItemSchema =
	Questionnaire_ItemSchemaInternal as z.ZodType<Questionnaire_Item>;
