// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCanonical, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Questionnaire_Item_AnswerOption } from "./Questionnaire_Item_AnswerOption";
import { Questionnaire_Item_AnswerOptionSchemaInternal } from "./Questionnaire_Item_AnswerOption";
import type { Questionnaire_Item_EnableWhen } from "./Questionnaire_Item_EnableWhen";
import { Questionnaire_Item_EnableWhenSchemaInternal } from "./Questionnaire_Item_EnableWhen";
import type { Questionnaire_Item_Initial } from "./Questionnaire_Item_Initial";
import { Questionnaire_Item_InitialSchemaInternal } from "./Questionnaire_Item_Initial";

/** A particular question, question grouping or display text that is part of the questionnaire. */
export interface Questionnaire_Item extends BackboneElement {
	/** One of the permitted answers for a "choice" or "open-choice" question. */
	answerOption?: Array<Questionnaire_Item_AnswerOption>;
	/** A reference to a value set containing a list of codes representing permitted answers for a "choice" or "open-choice" question. */
	answerValueSet?: string;
	/** Extensions for answerValueSet */
	_answerValueSet?: Element;
	/** A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers). */
	code?: Array<Coding>;
	/**
	 * This element is a URI that refers to an [ElementDefinition](elementdefinition.html) that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in Comments, below. If this element is present then the following element values MAY be derived from the Element Definition if the corresponding elements of this Questionnaire resource instance have no value:
	 *
	 * * code (ElementDefinition.code)
	 * * type (ElementDefinition.type)
	 * * required (ElementDefinition.min)
	 * * repeats (ElementDefinition.max)
	 * * maxLength (ElementDefinition.maxLength)
	 * * answerValueSet (ElementDefinition.binding)
	 * * options (ElementDefinition.binding).
	 */
	definition?: string;
	/** Extensions for definition */
	_definition?: Element;
	/** Controls how multiple enableWhen values are interpreted -  whether all or any must be true. */
	enableBehavior?: "all" | "any";
	/** Extensions for enableBehavior */
	_enableBehavior?: Element;
	/** A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true. */
	enableWhen?: Array<Questionnaire_Item_EnableWhen>;
	/** One or more values that should be pre-populated in the answer when initially rendering the questionnaire for user input. */
	initial?: Array<Questionnaire_Item_Initial>;
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
	/** A short label for a particular group, question or set of display text within the questionnaire used for reference by the individual completing the questionnaire. */
	prefix?: string;
	/** Extensions for prefix */
	_prefix?: Element;
	/** An indication, when true, that the value cannot be changed by a human respondent to the Questionnaire. */
	readOnly?: boolean;
	/** Extensions for readOnly */
	_readOnly?: Element;
	/** An indication, if true, that the item may occur multiple times in the response, collecting multiple answers for questions or multiple sets of answers for groups. */
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

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuestionnaire_Item_AnswerOptionSchema =
	(): z.ZodType<Questionnaire_Item_AnswerOption> =>
		Questionnaire_Item_AnswerOptionSchemaInternal as z.ZodType<Questionnaire_Item_AnswerOption>;
const getQuestionnaire_Item_EnableWhenSchema =
	(): z.ZodType<Questionnaire_Item_EnableWhen> =>
		Questionnaire_Item_EnableWhenSchemaInternal as z.ZodType<Questionnaire_Item_EnableWhen>;
const getQuestionnaire_Item_InitialSchema =
	(): z.ZodType<Questionnaire_Item_Initial> =>
		Questionnaire_Item_InitialSchemaInternal as z.ZodType<Questionnaire_Item_Initial>;

/** @internal */
export const Questionnaire_ItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		answerOption: z
			.lazy(getQuestionnaire_Item_AnswerOptionSchema)
			.array()
			.optional(),
		answerValueSet: fhirCanonical().optional(),
		_answerValueSet: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodingSchema).array().optional(),
		definition: fhirUri().optional(),
		_definition: z.lazy(getElementSchema).optional(),
		enableBehavior: z.enum(["all", "any"]).optional(),
		_enableBehavior: z.lazy(getElementSchema).optional(),
		enableWhen: z
			.lazy(getQuestionnaire_Item_EnableWhenSchema)
			.array()
			.optional(),
		initial: z.lazy(getQuestionnaire_Item_InitialSchema).array().optional(),
		item: z.unknown().array().optional(),
		linkId: fhirString(),
		_linkId: z.lazy(getElementSchema).optional(),
		maxLength: z.number().int().optional(),
		_maxLength: z.lazy(getElementSchema).optional(),
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
	}).strict();

export const Questionnaire_ItemSchema =
	Questionnaire_ItemSchemaInternal as z.ZodType<Questionnaire_Item>;
