// Profile: http://hl7.org/fhir/StructureDefinition/Permission
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

/** The asserted justification for using the data. */
export interface Permission_Justification extends BackboneElement {
  /** This would be a codeableconcept, or a coding, which can be constrained to , for example, the 6 grounds for processing in GDPR. */
  basis?: Array<CodeableConcept>;
  /** Justifing rational. */
  evidence?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Permission_JustificationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    basis: z.lazy(getCodeableConceptSchema).array().optional(),
    evidence: z.lazy(getReferenceSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.evidence,
        "evidence",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Permission_JustificationSchema =
  Permission_JustificationSchemaInternal as z.ZodType<Permission_Justification>;
