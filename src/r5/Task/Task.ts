// Profile: http://hl7.org/fhir/StructureDefinition/Task
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Task_Input } from "./Task_Input";
import { Task_InputSchemaInternal } from "./Task_Input";
import type { Task_Output } from "./Task_Output";
import { Task_OutputSchemaInternal } from "./Task_Output";
import type { Task_Performer } from "./Task_Performer";
import { Task_PerformerSchemaInternal } from "./Task_Performer";
import type { Task_Restriction } from "./Task_Restriction";
import { Task_RestrictionSchemaInternal } from "./Task_Restriction";

/** A task to be performed. */
export interface Task extends DomainResource {
	/** The date and time this task was created. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ServiceRequest, MedicationRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfill.  This latter resource is referenced by focus.  For example, based on a CarePlan (= basedOn), a task is created to fulfill a ServiceRequest ( = focus ) to collect a specimen from a patient. */
	basedOn?: Array<Reference>;
	/** Contains business-specific nuances of the business state. */
	businessStatus?: CodeableConcept;
	/** A name or code (or both) briefly describing what the task involves. */
	code?: CodeableConcept;
	/** A free-text description of what is to be performed. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** If true indicates that the Task is asking for the specified action to *not* occur. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created. */
	encounter?: Reference;
	/** Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end). */
	executionPeriod?: Period;
	/** The request being fulfilled or the resource being manipulated (changed, suspended, etc.) by this task. */
	focus?: Reference;
	/** The entity who benefits from the performance of the service specified in the task (e.g., the patient). */
	for?: Reference;
	/** A shared identifier common to multiple independent Task and Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time. */
	groupIdentifier?: Identifier;
	/** The business identifier for this task. */
	identifier?: Array<Identifier>;
	/** Additional information that may be needed in the execution of the task. */
	input?: Array<Task_Input>;
	/** The URL pointing to a *FHIR*-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task. */
	instantiatesCanonical?: string;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Element;
	/** The URL pointing to an *externally* maintained  protocol, guideline, orderset or other definition that is adhered to in whole or in part by this Task. */
	instantiatesUri?: string;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Element;
	/** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be relevant to the Task. */
	insurance?: Array<Reference>;
	/** Indicates the "level" of actionability associated with the Task, i.e. i+R[9]Cs this a proposed task, a planned task, an actionable task, etc. */
	intent:
		| "directive"
		| "filler-order"
		| "instance-order"
		| "option"
		| "order"
		| "original-order"
		| "plan"
		| "proposal"
		| "reflex-order"
		| "unknown";
	/** Extensions for intent */
	_intent?: Element;
	/** The date and time of last modification to this task. */
	lastModified?: string;
	/** Extensions for lastModified */
	_lastModified?: Element;
	/** Principal physical location where this task is performed. */
	location?: Reference;
	/** Free-text information captured about the task as it progresses. */
	note?: Array<Annotation>;
	/** Outputs produced by the Task. */
	output?: Array<Task_Output>;
	/** Party responsible for managing task execution. */
	owner?: Reference;
	/** Task that this particular task is part of. */
	partOf?: Array<Reference>;
	/** The entity who performed the requested task. */
	performer?: Array<Task_Performer>;
	/** Indicates how quickly the Task should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** A description, code, or reference indicating why this task needs to be performed. */
	reason?: Array<CodeableReference>;
	/** Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task. */
	relevantHistory?: Array<Reference>;
	/** The kind of participant or specific participant that should perform the task. */
	requestedPerformer?: Array<CodeableReference>;
	/** Indicates the start and/or end of the period of time when completion of the task is desired to take place. */
	requestedPeriod?: Period;
	/** The creator of the task. */
	requester?: Reference;
	/** This is a Task resource. */
	resourceType: "Task";
	/** If the Task.focus is a request resource and the task is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned. */
	restriction?: Task_Restriction;
	/** The current status of the task. */
	status:
		| "accepted"
		| "cancelled"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "failed"
		| "in-progress"
		| "on-hold"
		| "ready"
		| "received"
		| "rejected"
		| "requested";
	/** Extensions for status */
	_status?: Element;
	/** An explanation as to why this task is held, failed, was refused, etc. */
	statusReason?: CodeableReference;
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
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTask_InputSchema = (): z.ZodType<Task_Input> =>
	Task_InputSchemaInternal as z.ZodType<Task_Input>;
const getTask_OutputSchema = (): z.ZodType<Task_Output> =>
	Task_OutputSchemaInternal as z.ZodType<Task_Output>;
const getTask_PerformerSchema = (): z.ZodType<Task_Performer> =>
	Task_PerformerSchemaInternal as z.ZodType<Task_Performer>;
const getTask_RestrictionSchema = (): z.ZodType<Task_Restriction> =>
	Task_RestrictionSchemaInternal as z.ZodType<Task_Restriction>;

/** @internal */
export const TaskSchemaInternal = DomainResourceSchemaInternal.extend({
	authoredOn: fhirDateTime().optional(),
	_authoredOn: z.lazy(getElementSchema).optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	businessStatus: z.lazy(getCodeableConceptSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	doNotPerform: z.boolean().optional(),
	_doNotPerform: z.lazy(getElementSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	executionPeriod: z.lazy(getPeriodSchema).optional(),
	focus: z.lazy(getReferenceSchema).optional(),
	for: z.lazy(getReferenceSchema).optional(),
	groupIdentifier: z.lazy(getIdentifierSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	input: z.lazy(getTask_InputSchema).array().optional(),
	instantiatesCanonical: fhirCanonical().optional(),
	_instantiatesCanonical: z.lazy(getElementSchema).optional(),
	instantiatesUri: fhirUri().optional(),
	_instantiatesUri: z.lazy(getElementSchema).optional(),
	insurance: z.lazy(getReferenceSchema).array().optional(),
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
		"unknown",
	]),
	_intent: z.lazy(getElementSchema).optional(),
	lastModified: fhirDateTime().optional(),
	_lastModified: z.lazy(getElementSchema).optional(),
	location: z.lazy(getReferenceSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	output: z.lazy(getTask_OutputSchema).array().optional(),
	owner: z.lazy(getReferenceSchema).optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	performer: z.lazy(getTask_PerformerSchema).array().optional(),
	priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
	_priority: z.lazy(getElementSchema).optional(),
	reason: z.lazy(getCodeableReferenceSchema).array().optional(),
	relevantHistory: z.lazy(getReferenceSchema).array().optional(),
	requestedPerformer: z.lazy(getCodeableReferenceSchema).array().optional(),
	requestedPeriod: z.lazy(getPeriodSchema).optional(),
	requester: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("Task"),
	restriction: z.lazy(getTask_RestrictionSchema).optional(),
	status: z.enum([
		"accepted",
		"cancelled",
		"completed",
		"draft",
		"entered-in-error",
		"failed",
		"in-progress",
		"on-hold",
		"ready",
		"received",
		"rejected",
		"requested",
	]),
	_status: z.lazy(getElementSchema).optional(),
	statusReason: z.lazy(getCodeableReferenceSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
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
			record.focus,
			"focus",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.for,
			"for",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.insurance,
			"insurance",
			[
				"http://hl7.org/fhir/StructureDefinition/ClaimResponse",
				"http://hl7.org/fhir/StructureDefinition/Coverage",
			],
			["ClaimResponse", "Coverage"],
			ctx,
		);
		validateReferenceTarget(
			record.location,
			"location",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.owner,
			"owner",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
		validateReferenceTarget(
			record.partOf,
			"partOf",
			["http://hl7.org/fhir/StructureDefinition/Task"],
			["Task"],
			ctx,
		);
		validateReferenceTarget(
			record.relevantHistory,
			"relevantHistory",
			["http://hl7.org/fhir/StructureDefinition/Provenance"],
			["Provenance"],
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
	});

export const TaskSchema = TaskSchemaInternal as z.ZodType<Task>;
