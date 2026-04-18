// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** Specifies the schedule of a medication in jurisdiction. */
export interface MedicationKnowledge_Regulatory_Schedule
  extends BackboneElement {
  /** Specifies the specific drug schedule. */
  schedule: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicationKnowledge_Regulatory_ScheduleSchemaInternal =
  BackboneElementSchemaInternal.extend({
    schedule: z.lazy(getCodeableConceptSchema),
  }).strict();

export const MedicationKnowledge_Regulatory_ScheduleSchema =
  MedicationKnowledge_Regulatory_ScheduleSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_Schedule>;
