// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";

/** The list of diagnosis relevant to this encounter. */
export interface Encounter_Diagnosis extends BackboneElement {
  /** The coded diagnosis or a reference to a Condition (with other resources referenced in the evidence.detail), the use property will indicate the purpose of this specific diagnosis. */
  condition?: Array<CodeableReference>;
  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …). */
  use?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const Encounter_DiagnosisSchemaInternal =
  BackboneElementSchemaInternal.extend({
    condition: z.lazy(getCodeableReferenceSchema).array().optional(),
    use: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const Encounter_DiagnosisSchema =
  Encounter_DiagnosisSchemaInternal as z.ZodType<Encounter_Diagnosis>;
