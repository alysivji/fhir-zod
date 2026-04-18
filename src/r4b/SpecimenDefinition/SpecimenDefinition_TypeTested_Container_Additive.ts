// Profile: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA. */
export interface SpecimenDefinition_TypeTested_Container_Additive
  extends BackboneElement {
  /** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA. */
  additiveCodeableConcept?: CodeableConcept;
  /** Substance introduced in the kind of container to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA. */
  additiveReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SpecimenDefinition_TypeTested_Container_AdditiveSchemaInternal =
  BackboneElementSchemaInternal.extend({
    additiveCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    additiveReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const additive_x_Present = [
        "additiveCodeableConcept",
        "additiveReference",
      ].filter((field) => record[field] !== undefined);
      if (additive_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of additiveCodeableConcept, additiveReference must be present for additive[x]",
          path: ["additiveCodeableConcept"],
        });
      }
      if (additive_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of additiveCodeableConcept, additiveReference may be present for additive[x]",
          path: [additive_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.additiveReference,
        "additiveReference",
        ["http://hl7.org/fhir/StructureDefinition/Substance"],
        ["Substance"],
        ctx,
      );
    });

export const SpecimenDefinition_TypeTested_Container_AdditiveSchema =
  SpecimenDefinition_TypeTested_Container_AdditiveSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested_Container_Additive>;
