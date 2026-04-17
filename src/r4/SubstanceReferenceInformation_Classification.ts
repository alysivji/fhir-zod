// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Todo. */
export interface SubstanceReferenceInformation_Classification
  extends BackboneElement {
  /** Todo. */
  classification?: CodeableConcept;
  /** Todo. */
  domain?: CodeableConcept;
  /** Todo. */
  source?: Array<Reference>;
  /** Todo. */
  subtype?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceReferenceInformation_ClassificationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    classification: z.lazy(getCodeableConceptSchema).optional(),
    domain: z.lazy(getCodeableConceptSchema).optional(),
    source: z.lazy(getReferenceSchema).array().optional(),
    subtype: z.lazy(getCodeableConceptSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.source,
        "source",
        ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
        ["DocumentReference"],
        ctx,
      );
    });

export const SubstanceReferenceInformation_ClassificationSchema =
  SubstanceReferenceInformation_ClassificationSchemaInternal as z.ZodType<SubstanceReferenceInformation_Classification>;
