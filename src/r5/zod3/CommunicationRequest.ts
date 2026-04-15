// Profile: http://hl7.org/fhir/StructureDefinition/CommunicationRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { CommunicationRequest_Payload } from "./CommunicationRequest_Payload";
import { CommunicationRequest_PayloadSchemaInternal } from "./CommunicationRequest_Payload";
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
	/** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time. */
	groupIdentifier?: Identifier;
	/** Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication. */
	informationProvider?: Array<Reference>;
	/** Indicates the level of authority/intentionality associated with the CommunicationRequest and where the request fits into the workflow chain. */
	intent:
		| "directive"
		| "filler-order"
		| "instance-order"
		| "option"
		| "order"
		| "original-order"
		| "plan"
		| "proposal"
		| "reflex-order";
	/** Extensions for intent */
	_intent?: Element;
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
	reason?: Array<CodeableReference>;
	/** The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication. */
	recipient?: Array<Reference>;
	/** Completed or terminated request(s) whose function is taken by this new request. */
	replaces?: Array<Reference>;
	/** The device, individual, or organization who asks for the information to be shared. */
	requester?: Reference;
	/** This is a CommunicationRequest resource. */
	resourceType: "CommunicationRequest";
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
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
		informationProvider: z.lazy(getReferenceSchema).array().optional(),
		intent: z.enum([
			"directive",
			"filler-order",
			"instance-order",
			"option",
			"order",
			"original-order",
			"plan",
			"proposal",
			"reflex-order",
		]),
		_intent: z.lazy(getElementSchema).optional(),
		medium: z.lazy(getCodeableConceptSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		payload: z.lazy(getCommunicationRequest_PayloadSchema).array().optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		recipient: z.lazy(getReferenceSchema).array().optional(),
		replaces: z.lazy(getReferenceSchema).array().optional(),
		requester: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("CommunicationRequest"),
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
				record.informationProvider,
				"informationProvider",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Endpoint",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Endpoint",
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
				record.recipient,
				"recipient",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Endpoint",
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
					"Endpoint",
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
