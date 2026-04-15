// Profile: http://hl7.org/fhir/StructureDefinition/AppointmentResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDate, fhirInstant } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

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
	/** The original date within a recurring request. This could be used in place of the recurrenceId to be more direct (or where the template is provided through the simple list of dates in `Appointment.occurrenceDate`). */
	occurrenceDate?: string;
	/** Extensions for occurrenceDate */
	_occurrenceDate?: Element;
	/** Participation status of the participant. When the status is declined or tentative if the start/end times are different to the appointment, then these times should be interpreted as a requested time change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of the time) or can be empty. */
	participantStatus:
		| "accepted"
		| "arrived"
		| "booked"
		| "cancelled"
		| "checked-in"
		| "declined"
		| "entered-in-error"
		| "fulfilled"
		| "needs-action"
		| "noshow"
		| "pending"
		| "proposed"
		| "tentative"
		| "waitlist";
	/** Extensions for participantStatus */
	_participantStatus?: Element;
	/** Role of participant in the appointment. */
	participantType?: Array<CodeableConcept>;
	/** Indicates that the response is proposing a different time that was initially requested.  The new proposed time will be indicated in the start and end properties. */
	proposedNewTime?: boolean;
	/** Extensions for proposedNewTime */
	_proposedNewTime?: Element;
	/** The recurrence ID (sequence number) of the specific appointment when responding to a recurring request. */
	recurrenceId?: number;
	/** Extensions for recurrenceId */
	_recurrenceId?: Element;
	/** Indicates that this AppointmentResponse applies to all occurrences in a recurring request. */
	recurring?: boolean;
	/** Extensions for recurring */
	_recurring?: Element;
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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AppointmentResponseSchemaInternal =
	DomainResourceSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema).optional(),
		appointment: z.lazy(getReferenceSchema),
		comment: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
		end: fhirInstant().optional(),
		_end: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		occurrenceDate: fhirDate().optional(),
		_occurrenceDate: z.lazy(getElementSchema).optional(),
		participantStatus: z.enum([
			"accepted",
			"arrived",
			"booked",
			"cancelled",
			"checked-in",
			"declined",
			"entered-in-error",
			"fulfilled",
			"needs-action",
			"noshow",
			"pending",
			"proposed",
			"tentative",
			"waitlist",
		]),
		_participantStatus: z.lazy(getElementSchema).optional(),
		participantType: z.lazy(getCodeableConceptSchema).array().optional(),
		proposedNewTime: z.boolean().optional(),
		_proposedNewTime: z.lazy(getElementSchema).optional(),
		recurrenceId: z.number().int().positive().optional(),
		_recurrenceId: z.lazy(getElementSchema).optional(),
		recurring: z.boolean().optional(),
		_recurring: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("AppointmentResponse"),
		start: fhirInstant().optional(),
		_start: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actor,
				"actor",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Group",
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
