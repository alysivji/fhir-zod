// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Patient diagnosis for which care is sought. */
export interface CoverageEligibilityRequest_Item_Diagnosis
  extends BackboneElement {
  /** The nature of illness or problem in a coded form or as a reference to an external defined Condition. */
  diagnosisCodeableConcept?: CodeableConcept;
  /** The nature of illness or problem in a coded form or as a reference to an external defined Condition. */
  diagnosisReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityRequest_Item_DiagnosisSchemaInternal =
  BackboneElementSchemaInternal.extend({
    diagnosisCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    diagnosisReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const diagnosis_x_Present = [
        "diagnosisCodeableConcept",
        "diagnosisReference",
      ].filter((field) => record[field] !== undefined);
      if (diagnosis_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of diagnosisCodeableConcept, diagnosisReference may be present for diagnosis[x]",
          path: [diagnosis_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.diagnosisReference,
        "diagnosisReference",
        ["http://hl7.org/fhir/StructureDefinition/Condition"],
        ["Condition"],
        ctx,
      );
    });

export const CoverageEligibilityRequest_Item_DiagnosisSchema =
  CoverageEligibilityRequest_Item_DiagnosisSchemaInternal as z.ZodType<CoverageEligibilityRequest_Item_Diagnosis>;
