// Source: https://hl7.org/fhir/R5/artifactassessment-definitions.html#ArtifactAssessment.content
// Profile: http://hl7.org/fhir/StructureDefinition/ArtifactAssessment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";

/** A component comment, classifier, or rating of the artifact. */
export interface ArtifactAssessment_Content extends BackboneElement {
  /** Indicates who or what authored the content. */
  author?: Reference;
  /** Represents a rating, classifier, or assessment of the artifact. */
  classifier?: Array<CodeableConcept>;
  /** If the informationType is container, the components of the content. */
  component?: Array<unknown>;
  /** Acceptable to publicly share the comment, classifier or rating. */
  freeToShare?: boolean;
  /** Extensions for freeToShare */
  _freeToShare?: Element;
  /** The type of information this component of the content represents. */
  informationType?:
    | "change-request"
    | "classifier"
    | "comment"
    | "container"
    | "rating"
    | "response";
  /** Extensions for informationType */
  _informationType?: Element;
  /** A URI that points to what the comment is about, such as a line of text in the CQL, or a specific element in a resource. */
  path?: Array<string | null>;
  /** Extensions for path */
  _path?: Array<Element | null>;
  /** A quantitative rating of the artifact. */
  quantity?: Quantity;
  /** Additional related artifacts that provide supporting documentation, additional evidence, or further information related to the content. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** A brief summary of the content of this component. */
  summary?: string;
  /** Extensions for summary */
  _summary?: Element;
  /** Indicates what type of content this component represents. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;

/** @internal */
export const ArtifactAssessment_ContentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    author: z.lazy(getReferenceSchema).optional(),
    classifier: z.lazy(getCodeableConceptSchema).array().optional(),
    component: z.unknown().array().optional(),
    freeToShare: z.boolean().optional(),
    _freeToShare: z.lazy(getElementSchema).optional(),
    informationType: z
      .enum([
        "change-request",
        "classifier",
        "comment",
        "container",
        "rating",
        "response",
      ])
      .optional(),
    _informationType: z.lazy(getElementSchema).optional(),
    path: fhirUri().nullable().array().optional(),
    _path: z.lazy(getElementSchema).nullable().array().optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    summary: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _summary: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.path,
        record._path,
        "path",
        "_path",
        ctx,
      );
      validateReferenceTarget(
        record.author,
        "author",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        [
          "Device",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
        ],
        ctx,
      );
    });

export const ArtifactAssessment_ContentSchema =
  ArtifactAssessment_ContentSchemaInternal as z.ZodType<ArtifactAssessment_Content>;
