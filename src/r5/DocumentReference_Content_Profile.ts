// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirCanonical, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An identifier of the document constraints, encoding, structure, and template that the document conforms to beyond the base format indicated in the mimeType. */
export interface DocumentReference_Content_Profile extends BackboneElement {
  /** Code|uri|canonical. */
  valueCanonical?: string;
  /** Extensions for valueCanonical */
  _valueCanonical?: Element;
  /** Code|uri|canonical. */
  valueCoding?: Coding;
  /** Code|uri|canonical. */
  valueUri?: string;
  /** Extensions for valueUri */
  _valueUri?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DocumentReference_Content_ProfileSchemaInternal =
  BackboneElementSchemaInternal.extend({
    valueCanonical: fhirCanonical().optional(),
    _valueCanonical: z.lazy(getElementSchema).optional(),
    valueCoding: z.lazy(getCodingSchema).optional(),
    valueUri: fhirUri().optional(),
    _valueUri: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueCanonical",
        "valueCoding",
        "valueUri",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueCanonical, valueCoding, valueUri must be present for value[x]",
          path: ["valueCanonical"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueCanonical, valueCoding, valueUri may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const DocumentReference_Content_ProfileSchema =
  DocumentReference_Content_ProfileSchemaInternal as z.ZodType<DocumentReference_Content_Profile>;
