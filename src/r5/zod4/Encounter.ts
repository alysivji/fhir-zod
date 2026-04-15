// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Encounter_Admission } from "./Encounter_Admission";
import { Encounter_AdmissionSchemaInternal } from "./Encounter_Admission";
import type { Encounter_Diagnosis } from "./Encounter_Diagnosis";
import { Encounter_DiagnosisSchemaInternal } from "./Encounter_Diagnosis";
import type { Encounter_Location } from "./Encounter_Location";
import { Encounter_LocationSchemaInternal } from "./Encounter_Location";
import type { Encounter_Participant } from "./Encounter_Participant";
import { Encounter_ParticipantSchemaInternal } from "./Encounter_Participant";
import type { Encounter_Reason } from "./Encounter_Reason";
import { Encounter_ReasonSchemaInternal } from "./Encounter_Reason";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { VirtualServiceDetail } from "./VirtualServiceDetail";
import { VirtualServiceDetailSchemaInternal } from "./VirtualServiceDetail";

/** An interaction between healthcare provider(s), and/or patient(s) for the purpose of providing healthcare service(s) or assessing the health status of patient(s). */
export interface Encounter extends DomainResource {
	/** The set of accounts that may be used for billing for this Encounter. */
	account?: Array<Reference>;
	/** The actual start and end time of the encounter. */
	actualPeriod?: Period;
	/** Details about the stay during which a healthcare service is provided.This does not describe the event of admitting the patient, but rather any information that is relevant from the time of admittance until the time of discharge. */
	admission?: Encounter_Admission;
	/** The appointment that scheduled this encounter. */
	appointment?: Array<Reference>;
	/** The request this encounter satisfies (e.g. incoming referral or procedure request). */
	basedOn?: Array<Reference>;
	/** The group(s) of individuals, organizations that are allocated to participate in this encounter. The participants backbone will record the actuals of when these individuals participated during the encounter. */
	careTeam?: Array<Reference>;
	/** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations. */
	class?: Array<CodeableConcept>;
	/** The list of diagnosis relevant to this encounter. */
	diagnosis?: Array<Encounter_Diagnosis>;
	/** Diet preferences reported by the patient. */
	dietPreference?: Array<CodeableConcept>;
	/** Where a specific encounter should be classified as a part of a specific episode(s) of care this field should be used. This association can facilitate grouping of related encounters together for a specific purpose, such as government reporting, issue tracking, association via a common problem.  The association is recorded on the encounter as these are typically created after the episode of care and grouped on entry rather than editing the episode of care to append another encounter to it (the episode of care could span years). */
	episodeOfCare?: Array<Reference>;
	/** Identifier(s) by which this encounter is known. */
	identifier?: Array<Identifier>;
	/** Actual quantity of time the encounter lasted. This excludes the time during leaves of absence.When missing it is the time in between the start and end values. */
	length?: Duration;
	/** List of locations where  the patient has been during this encounter. */
	location?: Array<Encounter_Location>;
	/** The list of people responsible for providing the service. */
	participant?: Array<Encounter_Participant>;
	/** Another Encounter of which this encounter is a part of (administratively or in time). */
	partOf?: Reference;
	/** The planned end date/time (or discharge date) of the encounter. */
	plannedEndDate?: string;
	/** Extensions for plannedEndDate */
	_plannedEndDate?: Element;
	/** The planned start date/time (or admission date) of the encounter. */
	plannedStartDate?: string;
	/** Extensions for plannedStartDate */
	_plannedStartDate?: Element;
	/** Indicates the urgency of the encounter. */
	priority?: CodeableConcept;
	/** The list of medical reasons that are expected to be addressed during the episode of care. */
	reason?: Array<Encounter_Reason>;
	/** This is a Encounter resource. */
	resourceType: "Encounter";
	/** The organization that is primarily responsible for this Encounter's services. This MAY be the same as the organization on the Patient record, however it could be different, such as if the actor performing the services was from an external organization (which may be billed seperately) for an external consultation.  Refer to the colonoscopy example on the Encounter examples tab. */
	serviceProvider?: Reference;
	/** Broad categorization of the service that is to be provided (e.g. cardiology). */
	serviceType?: Array<CodeableReference>;
	/** Any special requests that have been made for this encounter, such as the provision of specific equipment or other things. */
	specialArrangement?: Array<CodeableConcept>;
	/** Special courtesies that may be provided to the patient during the encounter (VIP, board member, professional courtesy). */
	specialCourtesy?: Array<CodeableConcept>;
	/** The current state of the encounter (not the state of the patient within the encounter - that is subjectState). */
	status:
		| "cancelled"
		| "completed"
		| "discharged"
		| "discontinued"
		| "entered-in-error"
		| "in-progress"
		| "on-hold"
		| "planned"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The patient or group related to this encounter. In some use-cases the patient MAY not be present, such as a case meeting about a patient between several practitioners or a careteam. */
	subject?: Reference;
	/** The subjectStatus value can be used to track the patient's status within the encounter. It details whether the patient has arrived or departed, has been triaged or is currently in a waiting status. */
	subjectStatus?: CodeableConcept;
	/** Specific type of encounter (e.g. e-mail consultation, surgical day-care, skilled nursing, rehabilitation). */
	type?: Array<CodeableConcept>;
	/** Connection details of a virtual service (e.g. conference call). */
	virtualService?: Array<VirtualServiceDetail>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEncounter_AdmissionSchema = (): z.ZodType<Encounter_Admission> =>
	Encounter_AdmissionSchemaInternal as z.ZodType<Encounter_Admission>;
const getEncounter_DiagnosisSchema = (): z.ZodType<Encounter_Diagnosis> =>
	Encounter_DiagnosisSchemaInternal as z.ZodType<Encounter_Diagnosis>;
const getEncounter_LocationSchema = (): z.ZodType<Encounter_Location> =>
	Encounter_LocationSchemaInternal as z.ZodType<Encounter_Location>;
const getEncounter_ParticipantSchema = (): z.ZodType<Encounter_Participant> =>
	Encounter_ParticipantSchemaInternal as z.ZodType<Encounter_Participant>;
const getEncounter_ReasonSchema = (): z.ZodType<Encounter_Reason> =>
	Encounter_ReasonSchemaInternal as z.ZodType<Encounter_Reason>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getVirtualServiceDetailSchema = (): z.ZodType<VirtualServiceDetail> =>
	VirtualServiceDetailSchemaInternal as z.ZodType<VirtualServiceDetail>;

/** @internal */
export const EncounterSchemaInternal = DomainResourceSchemaInternal.extend({
	account: z.lazy(getReferenceSchema).array().optional(),
	actualPeriod: z.lazy(getPeriodSchema).optional(),
	admission: z.lazy(getEncounter_AdmissionSchema).optional(),
	appointment: z.lazy(getReferenceSchema).array().optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	careTeam: z.lazy(getReferenceSchema).array().optional(),
	class: z.lazy(getCodeableConceptSchema).array().optional(),
	diagnosis: z.lazy(getEncounter_DiagnosisSchema).array().optional(),
	dietPreference: z.lazy(getCodeableConceptSchema).array().optional(),
	episodeOfCare: z.lazy(getReferenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	length: z.lazy(getDurationSchema).optional(),
	location: z.lazy(getEncounter_LocationSchema).array().optional(),
	participant: z.lazy(getEncounter_ParticipantSchema).array().optional(),
	partOf: z.lazy(getReferenceSchema).optional(),
	plannedEndDate: fhirDateTime().optional(),
	_plannedEndDate: z.lazy(getElementSchema).optional(),
	plannedStartDate: fhirDateTime().optional(),
	_plannedStartDate: z.lazy(getElementSchema).optional(),
	priority: z.lazy(getCodeableConceptSchema).optional(),
	reason: z.lazy(getEncounter_ReasonSchema).array().optional(),
	resourceType: z.literal("Encounter"),
	serviceProvider: z.lazy(getReferenceSchema).optional(),
	serviceType: z.lazy(getCodeableReferenceSchema).array().optional(),
	specialArrangement: z.lazy(getCodeableConceptSchema).array().optional(),
	specialCourtesy: z.lazy(getCodeableConceptSchema).array().optional(),
	status: z.enum([
		"cancelled",
		"completed",
		"discharged",
		"discontinued",
		"entered-in-error",
		"in-progress",
		"on-hold",
		"planned",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	subjectStatus: z.lazy(getCodeableConceptSchema).optional(),
	type: z.lazy(getCodeableConceptSchema).array().optional(),
	virtualService: z.lazy(getVirtualServiceDetailSchema).array().optional(),
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
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/DeviceRequest",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
			],
			["CarePlan", "DeviceRequest", "MedicationRequest", "ServiceRequest"],
			ctx,
		);
		validateReferenceTarget(
			record.careTeam,
			"careTeam",
			["http://hl7.org/fhir/StructureDefinition/CareTeam"],
			["CareTeam"],
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
