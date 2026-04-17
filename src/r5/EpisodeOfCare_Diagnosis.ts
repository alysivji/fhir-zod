// Profile: http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
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

/** The list of medical conditions that were addressed during the episode of care. */
export interface EpisodeOfCare_Diagnosis extends BackboneElement {
  /** The medical condition that was addressed during the episode of care, expressed as a text, code or a reference to another resource. */
  condition?: Array<CodeableReference>;
  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …). */
  use?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const EpisodeOfCare_DiagnosisSchemaInternal =
  BackboneElementSchemaInternal.extend({
    condition: z.lazy(getCodeableReferenceSchema).array().optional(),
    use: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const EpisodeOfCare_DiagnosisSchema =
  EpisodeOfCare_DiagnosisSchemaInternal as z.ZodType<EpisodeOfCare_Diagnosis>;
