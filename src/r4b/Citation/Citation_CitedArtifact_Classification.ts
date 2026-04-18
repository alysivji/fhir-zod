// Source: https://hl7.org/fhir/R4B/citation-definitions.html#Citation.citedArtifact.classification
// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Citation_CitedArtifact_Classification_WhoClassified } from "./Citation_CitedArtifact_Classification_WhoClassified";
import { Citation_CitedArtifact_Classification_WhoClassifiedSchemaInternal } from "./Citation_CitedArtifact_Classification_WhoClassified";

/** The assignment to an organizing scheme. */
export interface Citation_CitedArtifact_Classification extends BackboneElement {
  /** The specific classification value. */
  classifier?: Array<CodeableConcept>;
  /** The kind of classifier (e.g. publication type, keyword). */
  type?: CodeableConcept;
  /** Provenance and copyright of classification. */
  whoClassified?: Citation_CitedArtifact_Classification_WhoClassified;
}

const getCitation_CitedArtifact_Classification_WhoClassifiedSchema =
  (): z.ZodType<Citation_CitedArtifact_Classification_WhoClassified> =>
    Citation_CitedArtifact_Classification_WhoClassifiedSchemaInternal as z.ZodType<Citation_CitedArtifact_Classification_WhoClassified>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const Citation_CitedArtifact_ClassificationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    classifier: z.lazy(getCodeableConceptSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    whoClassified: z
      .lazy(getCitation_CitedArtifact_Classification_WhoClassifiedSchema)
      .optional(),
  }).strict();

export const Citation_CitedArtifact_ClassificationSchema =
  Citation_CitedArtifact_ClassificationSchemaInternal as z.ZodType<Citation_CitedArtifact_Classification>;
