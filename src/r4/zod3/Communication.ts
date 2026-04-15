// Profile: http://hl7.org/fhir/StructureDefinition/Communication
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Communication_Payload } from "./Communication_Payload";
import { Communication_PayloadSchemaInternal } from "./Communication_Payload";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition. */
export interface Communication extends DomainResource {
	/** Other resources that pertain to this communication and to which this communication should be associated. */
	about?: Array<Reference>;
	/** An order, proposal or plan fulfilled in whole or in part by this Communication. */
	basedOn?: Array<Reference>;
	/** The type of message conveyed such as alert, notification, reminder, instruction, etc. */
	category?: Array<CodeableConcept>;
	/** The Encounter during which this Communication was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Business identifiers assigned to this communication by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** Prior communication that this communication is in response to. */
	inResponseTo?: Array<Reference>;
	/** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Communication. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** A channel that was used for this communication (e.g. email, fax). */
	medium?: Array<CodeableConcept>;
	/** Additional notes or commentary about the communication by the sender, receiver or other interested parties. */
	note?: Array<Annotation>;
	/** Part of this action. */
	partOf?: Array<Reference>;
	/** Text, attachment(s), or resource(s) that was communicated to the recipient. */
	payload?: Array<Communication_Payload>;
	/** Characterizes how quickly the planned or in progress communication must be addressed. Includes concepts such as stat, urgent, routine. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** The reason or justification for the communication. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates another resource whose existence justifies this communication. */
	reasonReference?: Array<Reference>;
	/** The time when this communication arrived at the destination. */
	received?: string;
	/** Extensions for received */
	_received?: Element;
	/** The entity (e.g. person, organization, clinical information system, care team or device) which was the target of the communication. If receipts need to be tracked by an individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either receipts are not tracked (e.g. a mass mail-out) or a receipt is captured in aggregate (all emails confirmed received by a particular time). */
	recipient?: Array<Reference>;
	/** This is a Communication resource. */
	resourceType: "Communication";
	/** The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication. */
	sender?: Reference;
	/** The time when this communication was sent. */
	sent?: string;
	/** Extensions for sent */
	_sent?: Element;
	/** The status of the transmission. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "not-done"
		| "on-hold"
		| "preparation"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Captures the reason for the current state of the Communication. */
	statusReason?: CodeableConcept;
	/** The patient or group that was the focus of this communication. */
	subject?: Reference;
	/** Description of the purpose/content, similar to a subject line in an email. */
	topic?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCommunication_PayloadSchema = (): z.ZodType<Communication_Payload> =>
	Communication_PayloadSchemaInternal as z.ZodType<Communication_Payload>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CommunicationSchemaInternal = DomainResourceSchemaInternal.extend({
	about: z.lazy(getReferenceSchema).array().optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	inResponseTo: z.lazy(getReferenceSchema).array().optional(),
	instantiatesCanonical: fhirCanonical().nullable().array().optional(),
	_instantiatesCanonical: z
		.lazy(getElementSchema)
		.nullable()
		.array()
		.optional(),
	instantiatesUri: fhirUri().nullable().array().optional(),
	_instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
	medium: z.lazy(getCodeableConceptSchema).array().optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	payload: z.lazy(getCommunication_PayloadSchema).array().optional(),
	priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
	_priority: z.lazy(getElementSchema).optional(),
	reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
	reasonReference: z.lazy(getReferenceSchema).array().optional(),
	received: fhirDateTime().optional(),
	_received: z.lazy(getElementSchema).optional(),
	recipient: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("Communication"),
	sender: z.lazy(getReferenceSchema).optional(),
	sent: fhirDateTime().optional(),
	_sent: z.lazy(getElementSchema).optional(),
	status: z.enum([
		"completed",
		"entered-in-error",
		"in-progress",
		"not-done",
		"on-hold",
		"preparation",
		"stopped",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	statusReason: z.lazy(getCodeableConceptSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	topic: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.instantiatesCanonical,
			record._instantiatesCanonical,
			"instantiatesCanonical",
			"_instantiatesCanonical",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.instantiatesUri,
			record._instantiatesUri,
			"instantiatesUri",
			"_instantiatesUri",
			ctx,
		);
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
			record.inResponseTo,
			"inResponseTo",
			["http://hl7.org/fhir/StructureDefinition/Communication"],
			["Communication"],
			ctx,
		);
		validateReferenceTarget(
			record.partOf,
			"partOf",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
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

export const CommunicationSchema =
	CommunicationSchemaInternal as z.ZodType<Communication>;
