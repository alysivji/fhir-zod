// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { AdverseEvent_SuspectEntity_Causality } from "./AdverseEvent_SuspectEntity_Causality";
import { AdverseEvent_SuspectEntity_CausalitySchemaInternal } from "./AdverseEvent_SuspectEntity_Causality";

/** Describes the entity that is suspected to have caused the adverse event. */
export interface AdverseEvent_SuspectEntity extends BackboneElement {
  /** Information on the possible cause of the event. */
  causality?: AdverseEvent_SuspectEntity_Causality;
  /** Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device. */
  instanceCodeableConcept?: CodeableConcept;
  /** Identifies the actual instance of what caused the adverse event.  May be a substance, medication, medication administration, medication statement or a device. */
  instanceReference?: Reference;
}

const getAdverseEvent_SuspectEntity_CausalitySchema =
  (): z.ZodType<AdverseEvent_SuspectEntity_Causality> =>
    AdverseEvent_SuspectEntity_CausalitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity_Causality>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_SuspectEntitySchemaInternal =
  BackboneElementSchemaInternal.extend({
    causality: z.lazy(getAdverseEvent_SuspectEntity_CausalitySchema).optional(),
    instanceCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    instanceReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const instance_x_Present = [
        "instanceCodeableConcept",
        "instanceReference",
      ].filter((field) => record[field] !== undefined);
      if (instance_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of instanceCodeableConcept, instanceReference must be present for instance[x]",
          path: ["instanceCodeableConcept"],
        });
      }
      if (instance_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of instanceCodeableConcept, instanceReference may be present for instance[x]",
          path: [instance_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.instanceReference,
        "instanceReference",
        [
          "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Immunization",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
          "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        [
          "BiologicallyDerivedProduct",
          "Device",
          "Immunization",
          "Medication",
          "MedicationAdministration",
          "MedicationStatement",
          "Procedure",
          "ResearchStudy",
          "Substance",
        ],
        ctx,
      );
    });

export const AdverseEvent_SuspectEntitySchema =
  AdverseEvent_SuspectEntitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity>;
