// Source: https://hl7.org/fhir/R4B/clinicalusedefinition-definitions.html#ClinicalUseDefinition.undesirableEffect
// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";

/** Describe the possible undesirable effects (negative outcomes) from the use of the medicinal product as treatment. */
export interface ClinicalUseDefinition_UndesirableEffect
  extends BackboneElement {
  /** High level classification of the effect. */
  classification?: CodeableConcept;
  /** How often the effect is seen. */
  frequencyOfOccurrence?: CodeableConcept;
  /** The situation in which the undesirable effect may manifest. */
  symptomConditionEffect?: CodeableReference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const ClinicalUseDefinition_UndesirableEffectSchemaInternal =
  BackboneElementSchemaInternal.extend({
    classification: z.lazy(getCodeableConceptSchema).optional(),
    frequencyOfOccurrence: z.lazy(getCodeableConceptSchema).optional(),
    symptomConditionEffect: z.lazy(getCodeableReferenceSchema).optional(),
  }).strict();

export const ClinicalUseDefinition_UndesirableEffectSchema =
  ClinicalUseDefinition_UndesirableEffectSchemaInternal as z.ZodType<ClinicalUseDefinition_UndesirableEffect>;
