// Source: https://hl7.org/fhir/R5/medicationknowledge-definitions.html#MedicationKnowledge.indicationGuideline.dosingGuideline.dosage
// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Dosage } from "../Dosage";
import { DosageSchemaInternal } from "../Dosage";

/** Dosage for the medication for the specific guidelines. */
export interface MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage
  extends BackboneElement {
  /** Dosage for the medication for the specific guidelines. */
  dosage: Array<Dosage>;
  /** The type or category of dosage for a given medication (for example, prophylaxis, maintenance, therapeutic, etc.). */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDosageSchema = (): z.ZodType<Dosage> =>
  DosageSchemaInternal as z.ZodType<Dosage>;

/** @internal */
export const MedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchemaInternal =
  BackboneElementSchemaInternal.extend({
    dosage: z.lazy(getDosageSchema).array(),
    type: z.lazy(getCodeableConceptSchema),
  }).strict();

export const MedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchema =
  MedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage>;
