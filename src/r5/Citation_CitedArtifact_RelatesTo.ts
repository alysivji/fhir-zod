// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../shared/fhir-primitives";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The artifact related to the cited artifact. */
export interface Citation_CitedArtifact_RelatesTo extends BackboneElement {
  /** A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format. */
  citation?: string;
  /** Extensions for citation */
  _citation?: Element;
  /** Provides additional classifiers of the related artifact. */
  classifier?: Array<CodeableConcept>;
  /** A brief description of the document or knowledge resource being referenced, suitable for display to a consumer. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** The document being referenced, represented as an attachment. Do not use this element if using the resource element to provide the canonical to the related artifact. */
  document?: Attachment;
  /** A short label that can be used to reference the related artifact from elsewhere in the containing artifact, such as a footnote index. */
  label?: string;
  /** Extensions for label */
  _label?: Element;
  /** The related artifact, such as a library, value set, profile, or other knowledge resource. */
  resource?: string;
  /** Extensions for resource */
  _resource?: Element;
  /** The related artifact, if the artifact is not a canonical resource, or a resource reference to a canonical resource. */
  resourceReference?: Reference;
  /** The type of relationship to the related artifact. */
  type:
    | "amended-with"
    | "amends"
    | "appended-with"
    | "appends"
    | "citation"
    | "cite-as"
    | "cited-by"
    | "cites"
    | "comment-in"
    | "comments-on"
    | "composed-of"
    | "contained-in"
    | "contains"
    | "correction-in"
    | "corrects"
    | "created-with"
    | "depends-on"
    | "derived-from"
    | "documentation"
    | "documents"
    | "justification"
    | "part-of"
    | "predecessor"
    | "replaced-with"
    | "replaces"
    | "reprint"
    | "reprint-of"
    | "retracted-by"
    | "retracts"
    | "signs"
    | "similar-to"
    | "specification-of"
    | "successor"
    | "supported-with"
    | "supports"
    | "transformed-into"
    | "transformed-with"
    | "transforms";
  /** Extensions for type */
  _type?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_RelatesToSchemaInternal =
  BackboneElementSchemaInternal.extend({
    citation: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _citation: z.lazy(getElementSchema).optional(),
    classifier: z.lazy(getCodeableConceptSchema).array().optional(),
    display: fhirString().optional(),
    _display: z.lazy(getElementSchema).optional(),
    document: z.lazy(getAttachmentSchema).optional(),
    label: fhirString().optional(),
    _label: z.lazy(getElementSchema).optional(),
    resource: fhirCanonical().optional(),
    _resource: z.lazy(getElementSchema).optional(),
    resourceReference: z.lazy(getReferenceSchema).optional(),
    type: z.enum([
      "amended-with",
      "amends",
      "appended-with",
      "appends",
      "citation",
      "cite-as",
      "cited-by",
      "cites",
      "comment-in",
      "comments-on",
      "composed-of",
      "contained-in",
      "contains",
      "correction-in",
      "corrects",
      "created-with",
      "depends-on",
      "derived-from",
      "documentation",
      "documents",
      "justification",
      "part-of",
      "predecessor",
      "replaced-with",
      "replaces",
      "reprint",
      "reprint-of",
      "retracted-by",
      "retracts",
      "signs",
      "similar-to",
      "specification-of",
      "successor",
      "supported-with",
      "supports",
      "transformed-into",
      "transformed-with",
      "transforms",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const Citation_CitedArtifact_RelatesToSchema =
  Citation_CitedArtifact_RelatesToSchemaInternal as z.ZodType<Citation_CitedArtifact_RelatesTo>;
