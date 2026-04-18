// Profile: http://hl7.org/fhir/StructureDefinition/CommunicationRequest
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CommunicationRequest_Payload } from "./CommunicationRequest_Payload";
import { CommunicationRequest_PayloadSchemaInternal } from "./CommunicationRequest_Payload";

/** A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. */
export interface CommunicationRequest extends DomainResource {
	/** Other resources that pertain to this communication request and to which this communication request should be associated. */
	about?: Array<Reference>;
	/** For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** A plan or proposal that is fulfilled in whole or in part by this request. */
	basedOn?: Array<Reference>;
	/** The type of message to be sent such as alert, notification, reminder, instruction, etc. */
	category?: Array<CodeableConcept>;
	/** If true indicates that the CommunicationRequest is asking for the specified action to *not* occur. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** The Encounter during which this CommunicationRequest was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form. */
	groupIdentifier?: Identifier;
	/** Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** A channel that was used for this communication (e.g. email, fax). */
	medium?: Array<CodeableConcept>;
	/** Comments made about the request by the requester, sender, recipient, subject or other participants. */
	note?: Array<Annotation>;
	/** The time when this communication is to occur. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The time when this communication is to occur. */
	occurrencePeriod?: Period;
	/** Text, attachment(s), or resource(s) to be communicated to the recipient. */
	payload?: Array<CommunicationRequest_Payload>;
	/** Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** Describes why the request is being made in coded or textual form. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates another resource whose existence justifies this request. */
	reasonReference?: Array<Reference>;
	/** The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication. */
	recipient?: Array<Reference>;
	/** Completed or terminated request(s) whose function is taken by this new request. */
	replaces?: Array<Reference>;
	/** The device, individual, or organization who initiated the request and has responsibility for its activation. */
	requester?: Reference;
	/** This is a CommunicationRequest resource. */
	resourceType: "CommunicationRequest";
	/** The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication. */
	sender?: Reference;
	/** The status of the proposal or order. */
	status:
		| "active"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "on-hold"
		| "revoked"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Captures the reason for the current state of the CommunicationRequest. */
	statusReason?: CodeableConcept;
	/** The patient or group that is the focus of this communication request. */
	subject?: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCommunicationRequest_PayloadSchema =
	(): z.ZodType<CommunicationRequest_Payload> =>
		CommunicationRequest_PayloadSchemaInternal as z.ZodType<CommunicationRequest_Payload>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CommunicationRequestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		about: z.lazy(getReferenceSchema).array().optional(),
		authoredOn: fhirDateTime().optional(),
		_authoredOn: z.lazy(getElementSchema).optional(),
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		groupIdentifier: z.lazy(getIdentifierSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		medium: z.lazy(getCodeableConceptSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		payload: z.lazy(getCommunicationRequest_PayloadSchema).array().optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		recipient: z.lazy(getReferenceSchema).array().optional(),
		replaces: z.lazy(getReferenceSchema).array().optional(),
		requester: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("CommunicationRequest"),
		sender: z.lazy(getReferenceSchema).optional(),
		status: z.enum([
			"active",
			"completed",
			"draft",
			"entered-in-error",
			"on-hold",
			"revoked",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		statusReason: z.lazy(getCodeableConceptSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const occurrence_x_Present = [
				"occurrenceDateTime",
				"occurrencePeriod",
			].filter((field) => record[field] !== undefined);
			if (occurrence_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of occurrenceDateTime, occurrencePeriod may be present for occurrence[x]",
					path: [occurrence_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.about,
				"about",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
				ctx,
			);
			validateReferenceTarget(
				record.reasonReference,
				"reasonReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/Observation",
				],
				["Condition", "DiagnosticReport", "DocumentReference", "Observation"],
				ctx,
			);
			validateReferenceTarget(
				record.recipient,
				"recipient",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
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
					"Group",
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
				record.replaces,
				"replaces",
				["http://hl7.org/fhir/StructureDefinition/CommunicationRequest"],
				["CommunicationRequest"],
				ctx,
			);
			validateReferenceTarget(
				record.requester,
				"requester",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.sender,
				"sender",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
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

export const CommunicationRequestSchema =
	CommunicationRequestSchemaInternal as z.ZodType<CommunicationRequest>;
