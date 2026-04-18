// Profile: http://hl7.org/fhir/StructureDefinition/RelatedArtifact
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for RelatedArtifact Type */
export interface RelatedArtifact extends Element {
  /** A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format. */
  citation?: string;
  /** Extensions for citation */
  _citation?: Element;
  /** A brief description of the document or knowledge resource being referenced, suitable for display to a consumer. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** The document being referenced, represented as an attachment. This is exclusive with the resource element. */
  document?: Attachment;
  /** The related resource, such as a library, value set, profile, or other knowledge resource. */
  resource?: Reference;
  /** The type of relationship to the related artifact. */
  type:
    | "citation"
    | "composed-of"
    | "depends-on"
    | "derived-from"
    | "documentation"
    | "justification"
    | "predecessor"
    | "successor";
  /** Extensions for type */
  _type?: Element;
  /** A url for the artifact that can be followed to access the actual content. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const RelatedArtifactSchemaInternal = ElementSchemaInternal.extend({
  citation: fhirString().optional(),
  _citation: z.lazy(getElementSchema).optional(),
  display: fhirString().optional(),
  _display: z.lazy(getElementSchema).optional(),
  document: z.lazy(getAttachmentSchema).optional(),
  resource: z.lazy(getReferenceSchema).optional(),
  type: z.enum([
    "citation",
    "composed-of",
    "depends-on",
    "derived-from",
    "documentation",
    "justification",
    "predecessor",
    "successor",
  ]),
  _type: z.lazy(getElementSchema).optional(),
  url: fhirUri().optional(),
  _url: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.resource,
      "resource",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const RelatedArtifactSchema =
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
