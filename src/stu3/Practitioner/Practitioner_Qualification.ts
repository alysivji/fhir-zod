// Profile: http://hl7.org/fhir/StructureDefinition/Practitioner
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Qualifications obtained by training and certification. */
export interface Practitioner_Qualification extends BackboneElement {
  /** Coded representation of the qualification. */
  code: CodeableConcept;
  /** An identifier that applies to this person's qualification in this role. */
  identifier?: Array<Identifier>;
  /** Organization that regulates and issues the qualification. */
  issuer?: Reference;
  /** Period during which the qualification is valid. */
  period?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Practitioner_QualificationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    issuer: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.issuer,
        "issuer",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const Practitioner_QualificationSchema =
  Practitioner_QualificationSchemaInternal as z.ZodType<Practitioner_Qualification>;
