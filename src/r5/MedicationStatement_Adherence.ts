// Profile: http://hl7.org/fhir/StructureDefinition/MedicationStatement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Indicates whether the medication is or is not being consumed or administered. */
export interface MedicationStatement_Adherence extends BackboneElement {
  /** Type of the adherence for the medication. */
  code: CodeableConcept;
  /** Captures the reason for the current use or adherence of a medication. */
  reason?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicationStatement_AdherenceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    reason: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const MedicationStatement_AdherenceSchema =
  MedicationStatement_AdherenceSchemaInternal as z.ZodType<MedicationStatement_Adherence>;
