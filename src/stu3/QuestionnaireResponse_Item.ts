// Profile: http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { QuestionnaireResponse_Item_Answer } from "./QuestionnaireResponse_Item_Answer";
import { QuestionnaireResponse_Item_AnswerSchemaInternal } from "./QuestionnaireResponse_Item_Answer";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A group or question item from the original questionnaire for which answers are provided. */
export interface QuestionnaireResponse_Item extends BackboneElement {
  /** The respondent's answer(s) to the question. */
  answer?: Array<QuestionnaireResponse_Item_Answer>;
  /** A reference to an [ElementDefinition](elementdefinition.html) that provides the details for the item. */
  definition?: string;
  /** Extensions for definition */
  _definition?: Element;
  /** Questions or sub-groups nested beneath a question or group. */
  item?: Array<unknown>;
  /** The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource. */
  linkId: string;
  /** Extensions for linkId */
  _linkId?: Element;
  /** More specific subject this section's answers are about, details the subject given in QuestionnaireResponse. */
  subject?: Reference;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

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
    subject: z.lazy(getReferenceSchema).optional(),
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.subject,
        "subject",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const QuestionnaireResponse_ItemSchema =
  QuestionnaireResponse_ItemSchemaInternal as z.ZodType<QuestionnaireResponse_Item>;
