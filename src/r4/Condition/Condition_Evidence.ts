// Profile: http://hl7.org/fhir/StructureDefinition/Condition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition. */
export interface Condition_Evidence extends BackboneElement {
  /** A manifestation or symptom that led to the recording of this condition. */
  code?: Array<CodeableConcept>;
  /** Links to other relevant information, including pathology reports. */
  detail?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Condition_EvidenceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    detail: z.lazy(getReferenceSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.detail,
        "detail",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Condition_EvidenceSchema =
  Condition_EvidenceSchemaInternal as z.ZodType<Condition_Evidence>;
