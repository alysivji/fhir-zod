// Source: https://hl7.org/fhir/STU3/diagnosticreport-definitions.html#DiagnosticReport.performer
// Profile: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates who or what participated in producing the report. */
export interface DiagnosticReport_Performer extends BackboneElement {
  /** The reference to the  practitioner or organization involved in producing the report. For example, the diagnostic service that is responsible for issuing the report. */
  actor: Reference;
  /** Describes the type of participation (e.g.  a responsible party, author, or verifier). */
  role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DiagnosticReport_PerformerSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actor: z.lazy(getReferenceSchema),
    role: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.actor,
        "actor",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
        ],
        ["Organization", "Practitioner"],
        ctx,
      );
    });

export const DiagnosticReport_PerformerSchema =
  DiagnosticReport_PerformerSchemaInternal as z.ZodType<DiagnosticReport_Performer>;
