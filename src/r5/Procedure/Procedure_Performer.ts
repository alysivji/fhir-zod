// Source: https://hl7.org/fhir/R5/procedure-definitions.html#Procedure.performer
// Profile: http://hl7.org/fhir/StructureDefinition/Procedure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates who or what performed the procedure and how they were involved. */
export interface Procedure_Performer extends BackboneElement {
  /** Indicates who or what performed the procedure. */
  actor: Reference;
  /** Distinguishes the type of involvement of the performer in the procedure. For example, surgeon, anaesthetist, endoscopist. */
  function?: CodeableConcept;
  /** The Organization the Patient, RelatedPerson, Device, CareTeam, and HealthcareService was acting on behalf of. */
  onBehalfOf?: Reference;
  /** Time period during which the performer performed the procedure. */
  period?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Procedure_PerformerSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actor: z.lazy(getReferenceSchema),
    function: z.lazy(getCodeableConceptSchema).optional(),
    onBehalfOf: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.actor,
        "actor",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Device",
          "HealthcareService",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.onBehalfOf,
        "onBehalfOf",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const Procedure_PerformerSchema =
  Procedure_PerformerSchemaInternal as z.ZodType<Procedure_Performer>;
