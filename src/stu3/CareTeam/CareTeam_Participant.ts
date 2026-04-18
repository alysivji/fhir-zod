// Source: https://hl7.org/fhir/STU3/careteam-definitions.html#CareTeam.participant
// Profile: http://hl7.org/fhir/StructureDefinition/CareTeam
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

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

/** Identifies all people and organizations who are expected to be involved in the care team. */
export interface CareTeam_Participant extends BackboneElement {
  /** The specific person or organization who is participating/expected to participate in the care team. */
  member?: Reference;
  /** The organization of the practitioner. */
  onBehalfOf?: Reference;
  /** Indicates when the specific member or organization did (or is intended to) come into effect and end. */
  period?: Period;
  /** Indicates specific responsibility of an individual within the care team, such as "Primary care physician", "Trained social worker counselor", "Caregiver", etc. */
  role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CareTeam_ParticipantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    member: z.lazy(getReferenceSchema).optional(),
    onBehalfOf: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.member,
        "member",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Organization",
          "Patient",
          "Practitioner",
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

export const CareTeam_ParticipantSchema =
  CareTeam_ParticipantSchemaInternal as z.ZodType<CareTeam_Participant>;
