// Source: https://hl7.org/fhir/R5/citation-definitions.html#Citation.citedArtifact.publicationForm.publishedIn
// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The collection the cited article or artifact is published in. */
export interface Citation_CitedArtifact_PublicationForm_PublishedIn
  extends BackboneElement {
  /** Journal identifiers include ISSN, ISO Abbreviation and NLMuniqueID; Book identifiers include ISBN. */
  identifier?: Array<Identifier>;
  /** Name of or resource describing the publisher. */
  publisher?: Reference;
  /** Geographic location of the publisher. */
  publisherLocation?: string;
  /** Extensions for publisherLocation */
  _publisherLocation?: Element;
  /** Name of the database or title of the book or journal. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Kind of container (e.g. Periodical, database, or book). */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_PublicationForm_PublishedInSchemaInternal =
  BackboneElementSchemaInternal.extend({
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    publisher: z.lazy(getReferenceSchema).optional(),
    publisherLocation: fhirString().optional(),
    _publisherLocation: z.lazy(getElementSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.publisher,
        "publisher",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const Citation_CitedArtifact_PublicationForm_PublishedInSchema =
  Citation_CitedArtifact_PublicationForm_PublishedInSchemaInternal as z.ZodType<Citation_CitedArtifact_PublicationForm_PublishedIn>;
