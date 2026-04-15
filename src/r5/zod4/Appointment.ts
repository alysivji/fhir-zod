// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirDateTime,
	fhirInstant,
	fhirString,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Appointment_Participant } from "./Appointment_Participant";
import { Appointment_ParticipantSchemaInternal } from "./Appointment_Participant";
import type { Appointment_RecurrenceTemplate } from "./Appointment_RecurrenceTemplate";
import { Appointment_RecurrenceTemplateSchemaInternal } from "./Appointment_RecurrenceTemplate";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { VirtualServiceDetail } from "./VirtualServiceDetail";
import { VirtualServiceDetailSchemaInternal } from "./VirtualServiceDetail";

/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface Appointment extends DomainResource {
	/** The set of accounts that is expected to be used for billing the activities that result from this Appointment. */
	account?: Array<Reference>;
	/** The style of appointment or patient that has been booked in the slot (not service type). */
	appointmentType?: CodeableConcept;
	/** The request this appointment is allocated to assess (e.g. incoming referral or procedure request). */
	basedOn?: Array<Reference>;
	/** The date/time describing when the appointment was cancelled. */
	cancellationDate?: string;
	/** Extensions for cancellationDate */
	_cancellationDate?: Element;
	/** The coded reason for the appointment being cancelled. This is often used in reporting/billing/futher processing to determine if further actions are required, or specific fees apply. */
	cancellationReason?: CodeableConcept;
	/** Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, emergency, home health or others due to local variations. */
	class?: Array<CodeableConcept>;
	/** The date that this appointment was initially created. This could be different to the meta.lastModified value on the initial entry, as this could have been before the resource was created on the FHIR server, and should remain unchanged over the lifespan of the appointment. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** The brief description of the appointment as would be shown on a subject line in a meeting request, or appointment list. Detailed or expanded information should be put in the note field. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Date/Time that the appointment is to conclude. */
	end?: string;
	/** Extensions for end */
	_end?: Element;
	/** This records identifiers associated with this appointment concern that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
	identifier?: Array<Identifier>;
	/** Number of minutes that the appointment is to take. This can be less than the duration between the start and end times.  For example, where the actual time of appointment is only an estimate or if a 30 minute appointment is being requested, but any time would work.  Also, if there is, for example, a planned 15 minute break in the middle of a long appointment, the duration may be 15 minutes less than the difference between the start and end. */
	minutesDuration?: number;
	/** Extensions for minutesDuration */
	_minutesDuration?: Element;
	/** Additional notes/comments about the appointment. */
	note?: Array<Annotation>;
	/** This appointment varies from the recurring pattern. */
	occurrenceChanged?: boolean;
	/** Extensions for occurrenceChanged */
	_occurrenceChanged?: Element;
	/** The originating appointment in a recurring set of related appointments. */
	originatingAppointment?: Reference;
	/** List of participants involved in the appointment. */
	participant: Array<Appointment_Participant>;
	/** While Appointment.note contains information for internal use, Appointment.patientInstructions is used to capture patient facing information about the Appointment (e.g. please bring your referral or fast from 8pm night before). */
	patientInstruction?: Array<CodeableReference>;
	/** The previous appointment in a series of related appointments. */
	previousAppointment?: Reference;
	/** The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority). */
	priority?: CodeableConcept;
	/** The reason that this appointment is being scheduled. This is more clinical than administrative. This can be coded, or as specified using information from another resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure. */
	reason?: Array<CodeableReference>;
	/** The sequence number that identifies a specific appointment in a recurring pattern. */
	recurrenceId?: number;
	/** Extensions for recurrenceId */
	_recurrenceId?: Element;
	/** The details of the recurrence pattern or template that is used to generate recurring appointments. */
	recurrenceTemplate?: Array<Appointment_RecurrenceTemplate>;
	/** Appointment replaced by this Appointment in cases where there is a cancellation, the details of the cancellation can be found in the cancellationReason property (on the referenced resource). */
	replaces?: Array<Reference>;
	/**
	 * A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within.
	 *
	 * The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill and populate the start/end times for the actual allocated time. However, in other situations the duration may be calculated by the scheduling system.
	 */
	requestedPeriod?: Array<Period>;
	/** This is a Appointment resource. */
	resourceType: "Appointment";
	/** A broad categorization of the service that is to be performed during this appointment. */
	serviceCategory?: Array<CodeableConcept>;
	/** The specific service that is to be performed during this appointment. */
	serviceType?: Array<CodeableReference>;
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
		| "checked-in"
		| "entered-in-error"
		| "fulfilled"
		| "noshow"
		| "pending"
		| "proposed"
		| "waitlist";
	/** Extensions for status */
	_status?: Element;
	/** The patient or group associated with the appointment, if they are to be present (usually) then they should also be included in the participant backbone element. */
	subject?: Reference;
	/** Additional information to support the appointment provided when making the appointment. */
	supportingInformation?: Array<Reference>;
	/** Connection details of a virtual service (e.g. conference call). */
	virtualService?: Array<VirtualServiceDetail>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getAppointment_ParticipantSchema =
	(): z.ZodType<Appointment_Participant> =>
		Appointment_ParticipantSchemaInternal as z.ZodType<Appointment_Participant>;
const getAppointment_RecurrenceTemplateSchema =
	(): z.ZodType<Appointment_RecurrenceTemplate> =>
		Appointment_RecurrenceTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getVirtualServiceDetailSchema = (): z.ZodType<VirtualServiceDetail> =>
	VirtualServiceDetailSchemaInternal as z.ZodType<VirtualServiceDetail>;

/** @internal */
export const AppointmentSchemaInternal = DomainResourceSchemaInternal.extend({
	account: z.lazy(getReferenceSchema).array().optional(),
	appointmentType: z.lazy(getCodeableConceptSchema).optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	cancellationDate: fhirDateTime().optional(),
	_cancellationDate: z.lazy(getElementSchema).optional(),
	cancellationReason: z.lazy(getCodeableConceptSchema).optional(),
	class: z.lazy(getCodeableConceptSchema).array().optional(),
	created: fhirDateTime().optional(),
	_created: z.lazy(getElementSchema).optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	end: fhirInstant().optional(),
	_end: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	minutesDuration: z.number().int().positive().optional(),
	_minutesDuration: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	occurrenceChanged: z.boolean().optional(),
	_occurrenceChanged: z.lazy(getElementSchema).optional(),
	originatingAppointment: z.lazy(getReferenceSchema).optional(),
	participant: z.lazy(getAppointment_ParticipantSchema).array(),
	patientInstruction: z.lazy(getCodeableReferenceSchema).array().optional(),
	previousAppointment: z.lazy(getReferenceSchema).optional(),
	priority: z.lazy(getCodeableConceptSchema).optional(),
	reason: z.lazy(getCodeableReferenceSchema).array().optional(),
	recurrenceId: z.number().int().positive().optional(),
	_recurrenceId: z.lazy(getElementSchema).optional(),
	recurrenceTemplate: z
		.lazy(getAppointment_RecurrenceTemplateSchema)
		.array()
		.optional(),
	replaces: z.lazy(getReferenceSchema).array().optional(),
	requestedPeriod: z.lazy(getPeriodSchema).array().optional(),
	resourceType: z.literal("Appointment"),
	serviceCategory: z.lazy(getCodeableConceptSchema).array().optional(),
	serviceType: z.lazy(getCodeableReferenceSchema).array().optional(),
	slot: z.lazy(getReferenceSchema).array().optional(),
	specialty: z.lazy(getCodeableConceptSchema).array().optional(),
	start: fhirInstant().optional(),
	_start: z.lazy(getElementSchema).optional(),
	status: z.enum([
		"arrived",
		"booked",
		"cancelled",
		"checked-in",
		"entered-in-error",
		"fulfilled",
		"noshow",
		"pending",
		"proposed",
		"waitlist",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	supportingInformation: z.lazy(getReferenceSchema).array().optional(),
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
			record.originatingAppointment,
			"originatingAppointment",
			["http://hl7.org/fhir/StructureDefinition/Appointment"],
			["Appointment"],
			ctx,
		);
		validateReferenceTarget(
			record.previousAppointment,
			"previousAppointment",
			["http://hl7.org/fhir/StructureDefinition/Appointment"],
			["Appointment"],
			ctx,
		);
		validateReferenceTarget(
			record.replaces,
			"replaces",
			["http://hl7.org/fhir/StructureDefinition/Appointment"],
			["Appointment"],
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
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Group", "Patient"],
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
