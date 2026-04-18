// Source: https://hl7.org/fhir/R5/clinicalusedefinition-definitions.html#ClinicalUseDefinition.interaction.interactant
// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The specific medication, product, food, substance etc. or laboratory test that interacts. */
export interface ClinicalUseDefinition_Interaction_Interactant
  extends BackboneElement {
  /** The specific medication, product, food, substance etc. or laboratory test that interacts. */
  itemCodeableConcept?: CodeableConcept;
  /** The specific medication, product, food, substance etc. or laboratory test that interacts. */
  itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalUseDefinition_Interaction_InteractantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    itemReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
        (field) => record[field] !== undefined,
      );
      if (item_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of itemCodeableConcept, itemReference must be present for item[x]",
          path: ["itemCodeableConcept"],
        });
      }
      if (item_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of itemCodeableConcept, itemReference may be present for item[x]",
          path: [item_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.itemReference,
        "itemReference",
        [
          "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
          "http://hl7.org/fhir/StructureDefinition/NutritionProduct",
          "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        [
          "BiologicallyDerivedProduct",
          "Medication",
          "MedicinalProductDefinition",
          "NutritionProduct",
          "ObservationDefinition",
          "Substance",
        ],
        ctx,
      );
    });

export const ClinicalUseDefinition_Interaction_InteractantSchema =
  ClinicalUseDefinition_Interaction_InteractantSchemaInternal as z.ZodType<ClinicalUseDefinition_Interaction_Interactant>;
