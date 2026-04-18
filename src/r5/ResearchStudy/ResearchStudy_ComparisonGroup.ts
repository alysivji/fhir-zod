// Source: https://hl7.org/fhir/R5/researchstudy-definitions.html#ResearchStudy.comparisonGroup
// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Describes an expected event or sequence of events for one of the subjects of a study. E.g. for a living subject: exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. E.g. for a stability study: {store sample from lot A at 25 degrees for 1 month}, {store sample from lot A at 40 degrees for 1 month}. */
export interface ResearchStudy_ComparisonGroup extends BackboneElement {
  /** A succinct description of the path through the study that would be followed by a subject adhering to this comparisonGroup. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Interventions or exposures in this comparisonGroup or cohort. */
  intendedExposure?: Array<Reference>;
  /** Allows the comparisonGroup for the study and the comparisonGroup for the subject to be linked easily. */
  linkId?: string;
  /** Extensions for linkId */
  _linkId?: Element;
  /** Unique, human-readable label for this comparisonGroup of the study. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** Group of participants who were enrolled in study comparisonGroup. */
  observedGroup?: Reference;
  /** Categorization of study comparisonGroup, e.g. experimental, active comparator, placebo comparater. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ResearchStudy_ComparisonGroupSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    intendedExposure: z.lazy(getReferenceSchema).array().optional(),
    linkId: fhirId().optional(),
    _linkId: z.lazy(getElementSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    observedGroup: z.lazy(getReferenceSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.intendedExposure,
        "intendedExposure",
        ["http://hl7.org/fhir/StructureDefinition/EvidenceVariable"],
        ["EvidenceVariable"],
        ctx,
      );
      validateReferenceTarget(
        record.observedGroup,
        "observedGroup",
        ["http://hl7.org/fhir/StructureDefinition/Group"],
        ["Group"],
        ctx,
      );
    });

export const ResearchStudy_ComparisonGroupSchema =
  ResearchStudy_ComparisonGroupSchemaInternal as z.ZodType<ResearchStudy_ComparisonGroup>;
