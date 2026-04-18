// Profile: http://hl7.org/fhir/StructureDefinition/RequestOrchestration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RequestOrchestration_Action } from "./RequestOrchestration_Action";
import { RequestOrchestration_ActionSchemaInternal } from "./RequestOrchestration_Action";

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestration extends DomainResource {
	/** The actions, if any, produced by the evaluation of the artifact. */
	action?: Array<RequestOrchestration_Action>;
	/** Provides a reference to the author of the request orchestration. */
	author?: Reference;
	/** Indicates when the request orchestration was created. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** A plan, proposal or order that is fulfilled in whole or in part by this request. */
	basedOn?: Array<Reference>;
	/** A code that identifies what the overall request orchestration is. */
	code?: CodeableConcept;
	/** Describes the context of the request orchestration, if any. */
	encounter?: Reference;
	/** Goals that are intended to be achieved by following the requests in this RequestOrchestration. */
	goal?: Array<Reference>;
	/** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time. */
	groupIdentifier?: Identifier;
	/** Allows a service to provide a unique, business identifier for the request. */
	identifier?: Array<Identifier>;
	/** A canonical URL referencing a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** A URL referencing an externally defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain. */
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
	/** Provides a mechanism to communicate additional information about the response. */
	note?: Array<Annotation>;
	/** Indicates how quickly the request should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** Describes the reason for the request orchestration in coded or textual form. */
	reason?: Array<CodeableReference>;
	/** Completed or terminated request(s) whose function is taken by this new request. */
	replaces?: Array<Reference>;
	/** This is a RequestOrchestration resource. */
	resourceType: "RequestOrchestration";
	/** The current state of the request. For request orchestrations, the status reflects the status of all the requests in the orchestration. */
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
	/** The subject for which the request orchestration was created. */
	subject?: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRequestOrchestration_ActionSchema =
	(): z.ZodType<RequestOrchestration_Action> =>
		RequestOrchestration_ActionSchemaInternal as z.ZodType<RequestOrchestration_Action>;

/** @internal */
export const RequestOrchestrationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		action: z.lazy(getRequestOrchestration_ActionSchema).array().optional(),
		author: z.lazy(getReferenceSchema).optional(),
		authoredOn: fhirDateTime().optional(),
		_authoredOn: z.lazy(getElementSchema).optional(),
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		goal: z.lazy(getReferenceSchema).array().optional(),
		groupIdentifier: z.lazy(getIdentifierSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		instantiatesCanonical: fhirCanonical().nullable().array().optional(),
		_instantiatesCanonical: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		instantiatesUri: fhirUri().nullable().array().optional(),
		_instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
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
		note: z.lazy(getAnnotationSchema).array().optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		replaces: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("RequestOrchestration"),
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
		subject: z.lazy(getReferenceSchema).optional(),
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
				record.author,
				"author",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Device", "Practitioner", "PractitionerRole"],
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
				record.goal,
				"goal",
				["http://hl7.org/fhir/StructureDefinition/Goal"],
				["Goal"],
				ctx,
			);
			validateReferenceTarget(
				record.replaces,
				"replaces",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Location",
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
					"Location",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const RequestOrchestrationSchema =
	RequestOrchestrationSchemaInternal as z.ZodType<RequestOrchestration>;
