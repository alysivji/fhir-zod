// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** List of patient diagnosis for which care is sought. */
export interface Claim_Diagnosis extends BackboneElement {
  /** The diagnosis. */
  diagnosisCodeableConcept?: CodeableConcept;
  /** The diagnosis. */
  diagnosisReference?: Reference;
  /** The package billing code, for example DRG, based on the assigned grouping code system. */
  packageCode?: CodeableConcept;
  /** Sequence of diagnosis which serves to provide a link. */
  sequence: number;
  /** Extensions for sequence */
  _sequence?: Element;
  /** The type of the Diagnosis, for example: admitting, primary, secondary, discharge. */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_DiagnosisSchemaInternal =
  BackboneElementSchemaInternal.extend({
    diagnosisCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    diagnosisReference: z.lazy(getReferenceSchema).optional(),
    packageCode: z.lazy(getCodeableConceptSchema).optional(),
    sequence: z.number().int().positive(),
    _sequence: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const diagnosis_x_Present = [
        "diagnosisCodeableConcept",
        "diagnosisReference",
      ].filter((field) => record[field] !== undefined);
      if (diagnosis_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of diagnosisCodeableConcept, diagnosisReference must be present for diagnosis[x]",
          path: ["diagnosisCodeableConcept"],
        });
      }
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

export const Claim_DiagnosisSchema =
  Claim_DiagnosisSchemaInternal as z.ZodType<Claim_Diagnosis>;
