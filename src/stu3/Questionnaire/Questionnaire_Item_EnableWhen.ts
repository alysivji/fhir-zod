// Source: https://hl7.org/fhir/STU3/questionnaire-definitions.html#Questionnaire.item.enableWhen
// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirDate,
  fhirDateTime,
  fhirString,
  fhirTime,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true. */
export interface Questionnaire_Item_EnableWhen extends BackboneElement {
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerAttachment?: Attachment;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerBoolean?: boolean;
  /** Extensions for answerBoolean */
  _answerBoolean?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerCoding?: Coding;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerDate?: string;
  /** Extensions for answerDate */
  _answerDate?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerDateTime?: string;
  /** Extensions for answerDateTime */
  _answerDateTime?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerDecimal?: number;
  /** Extensions for answerDecimal */
  _answerDecimal?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerInteger?: number;
  /** Extensions for answerInteger */
  _answerInteger?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerQuantity?: Quantity;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerReference?: Reference;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerString?: string;
  /** Extensions for answerString */
  _answerString?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerTime?: string;
  /** Extensions for answerTime */
  _answerTime?: Element;
  /** An answer that the referenced question must match in order for the item to be enabled. */
  answerUri?: string;
  /** Extensions for answerUri */
  _answerUri?: Element;
  /** An indication that this item should be enabled only if the specified question is answered (hasAnswer=true) or not answered (hasAnswer=false). */
  hasAnswer?: boolean;
  /** Extensions for hasAnswer */
  _hasAnswer?: Element;
  /** The linkId for the question whose answer (or lack of answer) governs whether this item is enabled. */
  question: string;
  /** Extensions for question */
  _question?: Element;
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
export const Questionnaire_Item_EnableWhenSchemaInternal =
  BackboneElementSchemaInternal.extend({
    answerAttachment: z.lazy(getAttachmentSchema).optional(),
    answerBoolean: z.boolean().optional(),
    _answerBoolean: z.lazy(getElementSchema).optional(),
    answerCoding: z.lazy(getCodingSchema).optional(),
    answerDate: fhirDate().optional(),
    _answerDate: z.lazy(getElementSchema).optional(),
    answerDateTime: fhirDateTime().optional(),
    _answerDateTime: z.lazy(getElementSchema).optional(),
    answerDecimal: z.number().optional(),
    _answerDecimal: z.lazy(getElementSchema).optional(),
    answerInteger: z.number().int().optional(),
    _answerInteger: z.lazy(getElementSchema).optional(),
    answerQuantity: z.lazy(getQuantitySchema).optional(),
    answerReference: z.lazy(getReferenceSchema).optional(),
    answerString: fhirString().optional(),
    _answerString: z.lazy(getElementSchema).optional(),
    answerTime: fhirTime().optional(),
    _answerTime: z.lazy(getElementSchema).optional(),
    answerUri: fhirUri().optional(),
    _answerUri: z.lazy(getElementSchema).optional(),
    hasAnswer: z.boolean().optional(),
    _hasAnswer: z.lazy(getElementSchema).optional(),
    question: fhirString(),
    _question: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const answer_x_Present = [
        "answerAttachment",
        "answerBoolean",
        "answerCoding",
        "answerDate",
        "answerDateTime",
        "answerDecimal",
        "answerInteger",
        "answerQuantity",
        "answerReference",
        "answerString",
        "answerTime",
        "answerUri",
      ].filter((field) => record[field] !== undefined);
      if (answer_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of answerAttachment, answerBoolean, answerCoding, answerDate, answerDateTime, answerDecimal, answerInteger, answerQuantity, answerReference, answerString, answerTime, answerUri may be present for answer[x]",
          path: [answer_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.answerReference,
        "answerReference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Questionnaire_Item_EnableWhenSchema =
  Questionnaire_Item_EnableWhenSchemaInternal as z.ZodType<Questionnaire_Item_EnableWhen>;
