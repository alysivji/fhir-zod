// Source: https://hl7.org/fhir/R5/medicationknowledge-definitions.html#MedicationKnowledge.indicationGuideline
// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { MedicationKnowledge_IndicationGuideline_DosingGuideline } from "./MedicationKnowledge_IndicationGuideline_DosingGuideline";
import { MedicationKnowledge_IndicationGuideline_DosingGuidelineSchemaInternal } from "./MedicationKnowledge_IndicationGuideline_DosingGuideline";

/** Guidelines or protocols that are applicable for the administration of the medication based on indication. */
export interface MedicationKnowledge_IndicationGuideline
  extends BackboneElement {
  /** The guidelines for the dosage of the medication for the indication. */
  dosingGuideline?: Array<MedicationKnowledge_IndicationGuideline_DosingGuideline>;
  /** Indication or reason for use of the medication that applies to the specific administration guideline. */
  indication?: Array<CodeableReference>;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getMedicationKnowledge_IndicationGuideline_DosingGuidelineSchema =
  (): z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline> =>
    MedicationKnowledge_IndicationGuideline_DosingGuidelineSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline>;

/** @internal */
export const MedicationKnowledge_IndicationGuidelineSchemaInternal =
  BackboneElementSchemaInternal.extend({
    dosingGuideline: z
      .lazy(getMedicationKnowledge_IndicationGuideline_DosingGuidelineSchema)
      .array()
      .optional(),
    indication: z.lazy(getCodeableReferenceSchema).array().optional(),
  }).strict();

export const MedicationKnowledge_IndicationGuidelineSchema =
  MedicationKnowledge_IndicationGuidelineSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline>;
