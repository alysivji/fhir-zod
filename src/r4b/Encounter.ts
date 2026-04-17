// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Encounter_ClassHistory } from "./Encounter_ClassHistory";
import { Encounter_ClassHistorySchemaInternal } from "./Encounter_ClassHistory";
import type { Encounter_Diagnosis } from "./Encounter_Diagnosis";
import { Encounter_DiagnosisSchemaInternal } from "./Encounter_Diagnosis";
import type { Encounter_Hospitalization } from "./Encounter_Hospitalization";
import { Encounter_HospitalizationSchemaInternal } from "./Encounter_Hospitalization";
import type { Encounter_Location } from "./Encounter_Location";
import { Encounter_LocationSchemaInternal } from "./Encounter_Location";
import type { Encounter_Participant } from "./Encounter_Participant";
import { Encounter_ParticipantSchemaInternal } from "./Encounter_Participant";
import type { Encounter_StatusHistory } from "./Encounter_StatusHistory";
import { Encounter_StatusHistorySchemaInternal } from "./Encounter_StatusHistory";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface Encounter extends DomainResource {
  /** The set of accounts that may be used for billing for this Encounter. */
  account?: Array<Reference>;
  /** The appointment that scheduled this encounter. */
  appointment?: Array<Reference>;
  /** The request this encounter satisfies (e.g. incoming referral or procedure request). */
  basedOn?: Array<Reference>;
  /** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations. */
  class: Coding;
  /** The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient. */
  classHistory?: Array<Encounter_ClassHistory>;
  /** The list of diagnosis relevant to this encounter. */
  diagnosis?: Array<Encounter_Diagnosis>;
  /** Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years). */
  episodeOfCare?: Array<Reference>;
  /** Details about the admission to a healthcare service. */
  hospitalization?: Encounter_Hospitalization;
  /** Identifier(s) by which this encounter is known. */
  identifier?: Array<Identifier>;
  /** Quantity of time the encounter lasted. This excludes the time during leaves of absence. */
  length?: Duration;
  /** List of locations where  the patient has been during this encounter. */
  location?: Array<Encounter_Location>;
  /** The list of people responsible for providing the service. */
  participant?: Array<Encounter_Participant>;
  /** Another Encounter of which this encounter is a part of (administratively or in time). */
  partOf?: Reference;
  /** The start and end time of the encounter. */
  period?: Period;
  /** Indicates the urgency of the encounter. */
  priority?: CodeableConcept;
  /** Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis. */
  reasonCode?: Array<CodeableConcept>;
  /** Reason the encounter takes place, expressed as a code. For admissions, this can be used for a coded admission diagnosis. */
  reasonReference?: Array<Reference>;
  /** This is a Encounter resource. */
  resourceType: "Encounter";
  /** The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the example bundle showing an abbreviated set of Encounters for a colonoscopy. */
  serviceProvider?: Reference;
  /** Broad categorization of the service that is to be provided (e.g. cardiology). */
  serviceType?: CodeableConcept;
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled +. */
  status:
    | "arrived"
    | "cancelled"
    | "entered-in-error"
    | "finished"
    | "in-progress"
    | "onleave"
    | "planned"
    | "triaged"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them. */
  statusHistory?: Array<Encounter_StatusHistory>;
  /** The patient or group present at the encounter. */
  subject?: Reference;
  /** Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation). */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getEncounter_ClassHistorySchema = (): z.ZodType<Encounter_ClassHistory> =>
  Encounter_ClassHistorySchemaInternal as z.ZodType<Encounter_ClassHistory>;
const getEncounter_DiagnosisSchema = (): z.ZodType<Encounter_Diagnosis> =>
  Encounter_DiagnosisSchemaInternal as z.ZodType<Encounter_Diagnosis>;
const getEncounter_HospitalizationSchema =
  (): z.ZodType<Encounter_Hospitalization> =>
    Encounter_HospitalizationSchemaInternal as z.ZodType<Encounter_Hospitalization>;
const getEncounter_LocationSchema = (): z.ZodType<Encounter_Location> =>
  Encounter_LocationSchemaInternal as z.ZodType<Encounter_Location>;
const getEncounter_ParticipantSchema = (): z.ZodType<Encounter_Participant> =>
  Encounter_ParticipantSchemaInternal as z.ZodType<Encounter_Participant>;
const getEncounter_StatusHistorySchema =
  (): z.ZodType<Encounter_StatusHistory> =>
    Encounter_StatusHistorySchemaInternal as z.ZodType<Encounter_StatusHistory>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EncounterSchemaInternal = DomainResourceSchemaInternal.extend({
  account: z.lazy(getReferenceSchema).array().optional(),
  appointment: z.lazy(getReferenceSchema).array().optional(),
  basedOn: z.lazy(getReferenceSchema).array().optional(),
  class: z.lazy(getCodingSchema),
  classHistory: z.lazy(getEncounter_ClassHistorySchema).array().optional(),
  diagnosis: z.lazy(getEncounter_DiagnosisSchema).array().optional(),
  episodeOfCare: z.lazy(getReferenceSchema).array().optional(),
  hospitalization: z.lazy(getEncounter_HospitalizationSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  length: z.lazy(getDurationSchema).optional(),
  location: z.lazy(getEncounter_LocationSchema).array().optional(),
  participant: z.lazy(getEncounter_ParticipantSchema).array().optional(),
  partOf: z.lazy(getReferenceSchema).optional(),
  period: z.lazy(getPeriodSchema).optional(),
  priority: z.lazy(getCodeableConceptSchema).optional(),
  reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
  reasonReference: z.lazy(getReferenceSchema).array().optional(),
  resourceType: z.literal("Encounter"),
  serviceProvider: z.lazy(getReferenceSchema).optional(),
  serviceType: z.lazy(getCodeableConceptSchema).optional(),
  status: z.enum([
    "arrived",
    "cancelled",
    "entered-in-error",
    "finished",
    "in-progress",
    "onleave",
    "planned",
    "triaged",
    "unknown",
  ]),
  _status: z.lazy(getElementSchema).optional(),
  statusHistory: z.lazy(getEncounter_StatusHistorySchema).array().optional(),
  subject: z.lazy(getReferenceSchema).optional(),
  type: z.lazy(getCodeableConceptSchema).array().optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.account,
      "account",
      ["http://hl7.org/fhir/StructureDefinition/Account"],
      ["Account"],
      ctx,
    );
    validateReferenceTarget(
      record.appointment,
      "appointment",
      ["http://hl7.org/fhir/StructureDefinition/Appointment"],
      ["Appointment"],
      ctx,
    );
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
      ["ServiceRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.episodeOfCare,
      "episodeOfCare",
      ["http://hl7.org/fhir/StructureDefinition/EpisodeOfCare"],
      ["EpisodeOfCare"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        "http://hl7.org/fhir/StructureDefinition/Observation",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
      ],
      ["Condition", "ImmunizationRecommendation", "Observation", "Procedure"],
      ctx,
    );
    validateReferenceTarget(
      record.serviceProvider,
      "serviceProvider",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Patient"],
      ctx,
    );
  });

export const EncounterSchema = EncounterSchemaInternal as z.ZodType<Encounter>;
