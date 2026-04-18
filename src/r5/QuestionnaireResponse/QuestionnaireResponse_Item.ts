// Source: https://hl7.org/fhir/R5/questionnaireresponse-definitions.html#QuestionnaireResponse.item
// Profile: http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { QuestionnaireResponse_Item_Answer } from "./QuestionnaireResponse_Item_Answer";
import { QuestionnaireResponse_Item_AnswerSchemaInternal } from "./QuestionnaireResponse_Item_Answer";

/** A group or question item from the original questionnaire for which answers are provided. */
export interface QuestionnaireResponse_Item extends BackboneElement {
  /** The respondent's answer(s) to the question. */
  answer?: Array<QuestionnaireResponse_Item_Answer>;
  /** A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. */
  definition?: string;
  /** Extensions for definition */
  _definition?: Element;
  /** Sub-questions, sub-groups or display items nested beneath a group. */
  item?: Array<unknown>;
  /** The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource. */
  linkId: string;
  /** Extensions for linkId */
  _linkId?: Element;
  /** Text that is displayed above the contents of the group or as the text of the question being answered. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuestionnaireResponse_Item_AnswerSchema =
  (): z.ZodType<QuestionnaireResponse_Item_Answer> =>
    QuestionnaireResponse_Item_AnswerSchemaInternal as z.ZodType<QuestionnaireResponse_Item_Answer>;

/** @internal */
export const QuestionnaireResponse_ItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    answer: z
      .lazy(getQuestionnaireResponse_Item_AnswerSchema)
      .array()
      .optional(),
    definition: fhirUri().optional(),
    _definition: z.lazy(getElementSchema).optional(),
    item: z.unknown().array().optional(),
    linkId: fhirString(),
    _linkId: z.lazy(getElementSchema).optional(),
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
  }).strict();

export const QuestionnaireResponse_ItemSchema =
  QuestionnaireResponse_ItemSchemaInternal as z.ZodType<QuestionnaireResponse_Item>;
