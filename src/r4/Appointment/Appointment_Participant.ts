// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** List of participants involved in the appointment. */
export interface Appointment_Participant extends BackboneElement {
  /** A Person, Location/HealthcareService or Device that is participating in the appointment. */
  actor?: Reference;
  /** Participation period of the actor. */
  period?: Period;
  /** Whether this participant is required to be present at the meeting. This covers a use-case where two doctors need to meet to discuss the results for a specific patient, and the patient is not required to be present. */
  required?: "information-only" | "optional" | "required";
  /** Extensions for required */
  _required?: Element;
  /** Participation status of the actor. */
  status: "accepted" | "declined" | "needs-action" | "tentative";
  /** Extensions for status */
  _status?: Element;
  /** Role of participant in the appointment. */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Appointment_ParticipantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actor: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    required: z.enum(["information-only", "optional", "required"]).optional(),
    _required: z.lazy(getElementSchema).optional(),
    status: z.enum(["accepted", "declined", "needs-action", "tentative"]),
    _status: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.actor,
        "actor",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Device",
          "HealthcareService",
          "Location",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const Appointment_ParticipantSchema =
  Appointment_ParticipantSchemaInternal as z.ZodType<Appointment_Participant>;
