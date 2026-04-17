// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import {
  fhirDate,
  fhirDateTime,
  fhirString,
  fhirTime,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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

/** A constraint indicating that this item should only be enabled (displayed/allow answers to be captured) when the specified condition is true. */
export interface Questionnaire_Item_EnableWhen extends BackboneElement {
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerBoolean?: boolean;
  /** Extensions for answerBoolean */
  _answerBoolean?: Element;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerCoding?: Coding;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerDate?: string;
  /** Extensions for answerDate */
  _answerDate?: Element;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerDateTime?: string;
  /** Extensions for answerDateTime */
  _answerDateTime?: Element;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerDecimal?: number;
  /** Extensions for answerDecimal */
  _answerDecimal?: Element;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerInteger?: number;
  /** Extensions for answerInteger */
  _answerInteger?: Element;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerQuantity?: Quantity;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerReference?: Reference;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerString?: string;
  /** Extensions for answerString */
  _answerString?: Element;
  /** A value that the referenced question is tested using the specified operator in order for the item to be enabled.  If there are multiple answers, a match on any of the answers suffices.  If different behavior is desired (all must match, at least 2 must match, etc.), consider using the enableWhenExpression extension. */
  answerTime?: string;
  /** Extensions for answerTime */
  _answerTime?: Element;
  /** Specifies the criteria by which the question is enabled. */
  operator: "!=" | "<" | "<=" | "=" | ">" | ">=" | "exists";
  /** Extensions for operator */
  _operator?: Element;
  /** The linkId for the question whose answer (or lack of answer) governs whether this item is enabled. */
  question: string;
  /** Extensions for question */
  _question?: Element;
}

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
    operator: z.enum(["!=", "<", "<=", "=", ">", ">=", "exists"]),
    _operator: z.lazy(getElementSchema).optional(),
    question: fhirString(),
    _question: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const answer_x_Present = [
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
      ].filter((field) => record[field] !== undefined);
      if (answer_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of answerBoolean, answerCoding, answerDate, answerDateTime, answerDecimal, answerInteger, answerQuantity, answerReference, answerString, answerTime must be present for answer[x]",
          path: ["answerBoolean"],
        });
      }
      if (answer_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of answerBoolean, answerCoding, answerDate, answerDateTime, answerDecimal, answerInteger, answerQuantity, answerReference, answerString, answerTime may be present for answer[x]",
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
