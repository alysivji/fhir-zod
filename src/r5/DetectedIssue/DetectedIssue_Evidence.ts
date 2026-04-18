// Source: https://hl7.org/fhir/R5/detectedissue-definitions.html#DetectedIssue.evidence
// Profile: http://hl7.org/fhir/StructureDefinition/DetectedIssue
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport. */
export interface DetectedIssue_Evidence extends BackboneElement {
  /** A manifestation that led to the recording of this detected issue. */
  code?: Array<CodeableConcept>;
  /** Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport. */
  detail?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DetectedIssue_EvidenceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    detail: z.lazy(getReferenceSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.detail,
        "detail",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const DetectedIssue_EvidenceSchema =
  DetectedIssue_EvidenceSchemaInternal as z.ZodType<DetectedIssue_Evidence>;
