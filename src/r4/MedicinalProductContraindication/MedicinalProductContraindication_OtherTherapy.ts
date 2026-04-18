// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication
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

/** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
export interface MedicinalProductContraindication_OtherTherapy
  extends BackboneElement {
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication. */
  medicationCodeableConcept?: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication. */
  medicationReference?: Reference;
  /** The type of relationship between the medicinal product indication or contraindication and another therapy. */
  therapyRelationshipType: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductContraindication_OtherTherapySchemaInternal =
  BackboneElementSchemaInternal.extend({
    medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    medicationReference: z.lazy(getReferenceSchema).optional(),
    therapyRelationshipType: z.lazy(getCodeableConceptSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const medication_x_Present = [
        "medicationCodeableConcept",
        "medicationReference",
      ].filter((field) => record[field] !== undefined);
      if (medication_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of medicationCodeableConcept, medicationReference must be present for medication[x]",
          path: ["medicationCodeableConcept"],
        });
      }
      if (medication_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of medicationCodeableConcept, medicationReference may be present for medication[x]",
          path: [medication_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.medicationReference,
        "medicationReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/MedicinalProduct",
          "http://hl7.org/fhir/StructureDefinition/Substance",
          "http://hl7.org/fhir/StructureDefinition/SubstanceSpecification",
        ],
        [
          "Medication",
          "MedicinalProduct",
          "Substance",
          "SubstanceSpecification",
        ],
        ctx,
      );
    });

export const MedicinalProductContraindication_OtherTherapySchema =
  MedicinalProductContraindication_OtherTherapySchemaInternal as z.ZodType<MedicinalProductContraindication_OtherTherapy>;
