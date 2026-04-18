// Source: https://hl7.org/fhir/STU3/appointment.html
// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Appointment_Participant } from "./Appointment_Participant";
import { Appointment_ParticipantSchemaInternal } from "./Appointment_Participant";

/** Base StructureDefinition for Appointment Resource */
export interface Appointment extends DomainResource {
  /** The style of appointment or patient that has been booked in the slot (not service type). */
  appointmentType?: CodeableConcept;
  /** Additional comments about the appointment. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the comment field. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Date/Time that the appointment is to conclude. */
  end?: string;
  /** Extensions for end */
  _end?: Element;
  /** This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
  identifier?: Array<Identifier>;
  /** The referral request this appointment is allocated to assess (incoming referral). */
  incomingReferral?: Array<Reference>;
  /** Reason the appointment has been scheduled to take place, as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure. */
  indication?: Array<Reference>;
  /** Number of minutes that the appointment is to take. This can be less than the duration between the start and end times (where actual time of appointment is only an estimate or is a planned appointment request). */
  minutesDuration?: number;
  /** Extensions for minutesDuration */
  _minutesDuration?: Element;
  /** List of participants involved in the appointment. */
  participant: Array<Appointment_Participant>;
  /** The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority). */
  priority?: number;
  /** Extensions for priority */
  _priority?: Element;
  /** The reason that this appointment is being scheduled. This is more clinical than administrative. */
  reason?: Array<CodeableConcept>;
  /** A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. When using these values, the minutes duration should be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. */
  requestedPeriod?: Array<Period>;
  /** This is a Appointment resource. */
  resourceType: "Appointment";
  /** A broad categorisation of the service that is to be performed during this appointment. */
  serviceCategory?: CodeableConcept;
  /** The specific service that is to be performed during this appointment. */
  serviceType?: Array<CodeableConcept>;
  /** The slots from the participants' schedules that will be filled by the appointment. */
  slot?: Array<Reference>;
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment. */
  specialty?: Array<CodeableConcept>;
  /** Date/Time that the appointment is to take place. */
  start?: string;
  /** Extensions for start */
  _start?: Element;
  /** The overall status of the Appointment. Each of the participants has their own participation status which indicates their involvement in the process, however this status indicates the shared status. */
  status:
    | "arrived"
    | "booked"
    | "cancelled"
    | "entered-in-error"
    | "fulfilled"
    | "noshow"
    | "pending"
    | "proposed";
  /** Extensions for status */
  _status?: Element;
  /** Additional information to support the appointment provided when making the appointment. */
  supportingInformation?: Array<Reference>;
}

const getAppointment_ParticipantSchema =
  (): z.ZodType<Appointment_Participant> =>
    Appointment_ParticipantSchemaInternal as z.ZodType<Appointment_Participant>;
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
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const AppointmentSchemaInternal = z
  .object({
    appointmentType: z.lazy(getCodeableConceptSchema).optional(),
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    end: fhirInstant().optional(),
    _end: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    incomingReferral: z.lazy(getReferenceSchema).array().optional(),
    indication: z.lazy(getReferenceSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    minutesDuration: z.number().int().positive().optional(),
    _minutesDuration: z.lazy(getElementSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    participant: z.lazy(getAppointment_ParticipantSchema).array(),
    priority: z.number().int().nonnegative().optional(),
    _priority: z.lazy(getElementSchema).optional(),
    reason: z.lazy(getCodeableConceptSchema).array().optional(),
    requestedPeriod: z.lazy(getPeriodSchema).array().optional(),
    resourceType: z.literal("Appointment"),
    serviceCategory: z.lazy(getCodeableConceptSchema).optional(),
    serviceType: z.lazy(getCodeableConceptSchema).array().optional(),
    slot: z.lazy(getReferenceSchema).array().optional(),
    specialty: z.lazy(getCodeableConceptSchema).array().optional(),
    start: fhirInstant().optional(),
    _start: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "arrived",
      "booked",
      "cancelled",
      "entered-in-error",
      "fulfilled",
      "noshow",
      "pending",
      "proposed",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    supportingInformation: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.incomingReferral,
      "incomingReferral",
      ["http://hl7.org/fhir/StructureDefinition/ReferralRequest"],
      ["ReferralRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.indication,
      "indication",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
      ],
      ["Condition", "Procedure"],
      ctx,
    );
    validateReferenceTarget(
      record.slot,
      "slot",
      ["http://hl7.org/fhir/StructureDefinition/Slot"],
      ["Slot"],
      ctx,
    );
    validateReferenceTarget(
      record.supportingInformation,
      "supportingInformation",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const AppointmentSchema =
  AppointmentSchemaInternal as z.ZodType<Appointment>;
