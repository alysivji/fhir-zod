// Profile: http://hl7.org/fhir/StructureDefinition/RequestGroup
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
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
import type { RequestGroup_Action } from "./RequestGroup_Action";
import { RequestGroup_ActionSchemaInternal } from "./RequestGroup_Action";

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestGroup extends DomainResource {
	/** The actions, if any, produced by the evaluation of the artifact. */
	action?: Array<RequestGroup_Action>;
	/** Provides a reference to the author of the request group. */
	author?: Reference;
	/** Indicates when the request group was created. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** A plan, proposal or order that is fulfilled in whole or in part by this request. */
	basedOn?: Array<Reference>;
	/** A code that identifies what the overall request group is. */
	code?: CodeableConcept;
	/** Describes the context of the request group, if any. */
	encounter?: Reference;
	/** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form. */
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
	/** Describes the reason for the request group in coded or textual form. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates another resource whose existence justifies this request group. */
	reasonReference?: Array<Reference>;
	/** Completed or terminated request(s) whose function is taken by this new request. */
	replaces?: Array<Reference>;
	/** This is a RequestGroup resource. */
	resourceType: "RequestGroup";
	/** The current state of the request. For request groups, the status reflects the status of all the requests in the group. */
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
	/** The subject for which the request group was created. */
	subject?: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRequestGroup_ActionSchema = (): z.ZodType<RequestGroup_Action> =>
	RequestGroup_ActionSchemaInternal as z.ZodType<RequestGroup_Action>;

/** @internal */
export const RequestGroupSchemaInternal = DomainResourceSchemaInternal.extend({
	action: z.lazy(getRequestGroup_ActionSchema).array().optional(),
	author: z.lazy(getReferenceSchema).optional(),
	authoredOn: fhirDateTime().optional(),
	_authoredOn: z.lazy(getElementSchema).optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
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
	reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
	reasonReference: z.lazy(getReferenceSchema).array().optional(),
	replaces: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("RequestGroup"),
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
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Group", "Patient"],
			ctx,
		);
	});

export const RequestGroupSchema =
	RequestGroupSchemaInternal as z.ZodType<RequestGroup>;
