// Source: https://hl7.org/fhir/R4/datatypes.html#Annotation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Annotation Type: A  text note which also  contains information about who made the statement and when. */
export interface Annotation extends Element {
  /** The individual responsible for making the annotation. */
  authorReference?: Reference;
  /** The individual responsible for making the annotation. */
  authorString?: string;
  /** Extensions for authorString */
  _authorString?: Element;
  /** The text of the annotation in markdown format. */
  text: string;
  /** Extensions for text */
  _text?: Element;
  /** Indicates when this particular annotation was made. */
  time?: string;
  /** Extensions for time */
  _time?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AnnotationSchemaInternal = z
  .object({
    authorReference: z.lazy(getReferenceSchema).optional(),
    authorString: fhirString().optional(),
    _authorString: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    text: z.string().regex(/[ \r\n\t\S]+/),
    _text: z.lazy(getElementSchema).optional(),
    time: fhirDateTime().optional(),
    _time: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const author_x_Present = ["authorReference", "authorString"].filter(
      (field) => record[field] !== undefined,
    );
    if (author_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of authorReference, authorString may be present for author[x]",
        path: [author_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.authorReference,
      "authorReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Organization", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
  });

export const AnnotationSchema =
  AnnotationSchemaInternal as z.ZodType<Annotation>;
