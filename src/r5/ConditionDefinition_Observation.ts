// Profile: http://hl7.org/fhir/StructureDefinition/ConditionDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Observations particularly relevant to this condition. */
export interface ConditionDefinition_Observation extends BackboneElement {
  /** Category that is relevant. */
  category?: CodeableConcept;
  /** Code for relevant Observation. */
  code?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const ConditionDefinition_ObservationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    category: z.lazy(getCodeableConceptSchema).optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ConditionDefinition_ObservationSchema =
  ConditionDefinition_ObservationSchemaInternal as z.ZodType<ConditionDefinition_Observation>;
