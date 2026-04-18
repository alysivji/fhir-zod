// Source: https://hl7.org/fhir/R5/conditiondefinition-definitions.html#ConditionDefinition.medication
// Profile: http://hl7.org/fhir/StructureDefinition/ConditionDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** Medications particularly relevant for this condition. */
export interface ConditionDefinition_Medication extends BackboneElement {
  /** Category that is relevant. */
  category?: CodeableConcept;
  /** Code for relevant Medication. */
  code?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const ConditionDefinition_MedicationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    category: z.lazy(getCodeableConceptSchema).optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ConditionDefinition_MedicationSchema =
  ConditionDefinition_MedicationSchemaInternal as z.ZodType<ConditionDefinition_Medication>;
