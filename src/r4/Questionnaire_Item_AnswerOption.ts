// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirDate, fhirString, fhirTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** One of the permitted answers for a "choice" or "open-choice" question. */
export interface Questionnaire_Item_AnswerOption extends BackboneElement {
  /** Indicates whether the answer value is selected when the list of possible answers is initially shown. */
  initialSelected?: boolean;
  /** Extensions for initialSelected */
  _initialSelected?: Element;
  /** A potential answer that's allowed as the answer to this question. */
  valueCoding?: Coding;
  /** A potential answer that's allowed as the answer to this question. */
  valueDate?: string;
  /** Extensions for valueDate */
  _valueDate?: Element;
  /** A potential answer that's allowed as the answer to this question. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** A potential answer that's allowed as the answer to this question. */
  valueReference?: Reference;
  /** A potential answer that's allowed as the answer to this question. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
  /** A potential answer that's allowed as the answer to this question. */
  valueTime?: string;
  /** Extensions for valueTime */
  _valueTime?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Questionnaire_Item_AnswerOptionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    initialSelected: z.boolean().optional(),
    _initialSelected: z.lazy(getElementSchema).optional(),
    valueCoding: z.lazy(getCodingSchema).optional(),
    valueDate: fhirDate().optional(),
    _valueDate: z.lazy(getElementSchema).optional(),
    valueInteger: z.number().int().optional(),
    _valueInteger: z.lazy(getElementSchema).optional(),
    valueReference: z.lazy(getReferenceSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
    valueTime: fhirTime().optional(),
    _valueTime: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueCoding",
        "valueDate",
        "valueInteger",
        "valueReference",
        "valueString",
        "valueTime",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueCoding, valueDate, valueInteger, valueReference, valueString, valueTime must be present for value[x]",
          path: ["valueCoding"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueCoding, valueDate, valueInteger, valueReference, valueString, valueTime may be present for value[x]",
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

export const Questionnaire_Item_AnswerOptionSchema =
  Questionnaire_Item_AnswerOptionSchemaInternal as z.ZodType<Questionnaire_Item_AnswerOption>;
