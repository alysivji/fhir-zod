// Profile: http://hl7.org/fhir/StructureDefinition/AppointmentResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirInstant,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection. */
export interface AppointmentResponse extends DomainResource {
  /** A Person, Location, HealthcareService, or Device that is participating in the appointment. */
  actor?: Reference;
  /** Appointment that this response is replying to. */
  appointment: Reference;
  /** Additional comments about the appointment. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** This may be either the same as the appointment request to confirm the details of the appointment, or alternately a new time to request a re-negotiation of the end time. */
  end?: string;
  /** Extensions for end */
  _end?: Element;
  /** This records identifiers associated with this appointment response concern that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate. */
  identifier?: Array<Identifier>;
  /** Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty. */
  participantStatus: "accepted" | "declined" | "needs-action" | "tentative";
  /** Extensions for participantStatus */
  _participantStatus?: Element;
  /** Role of participant in the appointment. */
  participantType?: Array<CodeableConcept>;
  /** This is a AppointmentResponse resource. */
  resourceType: "AppointmentResponse";
  /** Date/Time that the appointment is to take place, or requested new start time. */
  start?: string;
  /** Extensions for start */
  _start?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const AppointmentResponseSchemaInternal = z
  .object({
    actor: z.lazy(getReferenceSchema).optional(),
    appointment: z.lazy(getReferenceSchema),
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    end: fhirInstant().optional(),
    _end: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    participantStatus: z.enum([
      "accepted",
      "declined",
      "needs-action",
      "tentative",
    ]),
    _participantStatus: z.lazy(getElementSchema).optional(),
    participantType: z.lazy(getCodeableConceptSchema).array().optional(),
    resourceType: z.literal("AppointmentResponse"),
    start: fhirInstant().optional(),
    _start: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
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
    validateReferenceTarget(
      record.appointment,
      "appointment",
      ["http://hl7.org/fhir/StructureDefinition/Appointment"],
      ["Appointment"],
      ctx,
    );
  });

export const AppointmentResponseSchema =
  AppointmentResponseSchemaInternal as z.ZodType<AppointmentResponse>;
