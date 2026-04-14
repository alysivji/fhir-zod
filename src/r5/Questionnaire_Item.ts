// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

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
	/** For items that have a defined set of allowed answers (via answerOption or answerValueSet), indicates whether values *other* than those specified can be selected. */
	answerConstraint?: "optionsOnly" | "optionsOrString" | "optionsOrType";
	/** Extensions for answerConstraint */
	_answerConstraint?: Element;
	/** One of the permitted answers for the question. */
	answerOption?: Array<Questionnaire_Item_AnswerOption>;
	/** A reference to a value set containing a list of values representing permitted answers for a question. */
	answerValueSet?: string;
	/** Extensions for answerValueSet */
	_answerValueSet?: Element;
	/** A terminology code that corresponds to this group or question (e.g. a code from LOINC, which defines many questions and answers). */
	code?: Array<Coding>;
	/** This element is a URI that refers to an [ElementDefinition](elementdefinition.html) or to an [ObservationDefinition](observationdefinition.html) that provides information about this item, including information that might otherwise be included in the instance of the Questionnaire resource. A detailed description of the construction of the URI is shown in [Comments](questionnaire.html#definition), below. */
	definition?: string;
	/** Extensions for definition */
	_definition?: Element;
	/** Indicates if and how items that are disabled (because enableWhen evaluates to 'false') should be displayed. */
	disabledDisplay?: "hidden" | "protected";
	/** Extensions for disabledDisplay */
	_disabledDisplay?: Element;
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
	/** An indication, if true, that a QuestionnaireResponse for this item may include multiple answers associated with a single instance of this item (for question-type items) or multiple repetitions of the item (for group-type items). */
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
	/** The type of questionnaire item this is - whether text for display, a grouping of other items or a particular type of data to be captured (string, integer, Coding, etc.). */
	type:
		| "attachment"
		| "boolean"
		| "coding"
		| "date"
		| "dateTime"
		| "decimal"
		| "display"
		| "group"
		| "integer"
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
		answerConstraint: z
			.enum(["optionsOnly", "optionsOrString", "optionsOrType"])
			.optional(),
		_answerConstraint: z.lazy(getElementSchema).optional(),
		answerOption: z
			.lazy(getQuestionnaire_Item_AnswerOptionSchema)
			.array()
			.optional(),
		answerValueSet: fhirCanonical().optional(),
		_answerValueSet: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodingSchema).array().optional(),
		definition: fhirUri().optional(),
		_definition: z.lazy(getElementSchema).optional(),
		disabledDisplay: z.enum(["hidden", "protected"]).optional(),
		_disabledDisplay: z.lazy(getElementSchema).optional(),
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
			"coding",
			"date",
			"dateTime",
			"decimal",
			"display",
			"group",
			"integer",
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
