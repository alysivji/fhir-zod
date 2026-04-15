// Profile: http://hl7.org/fhir/StructureDefinition/CarePlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CarePlan_Activity } from "./CarePlan_Activity";
import { CarePlan_ActivitySchemaInternal } from "./CarePlan_Activity";
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

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface CarePlan extends DomainResource {
	/** Identifies an action that has occurred or is a planned action to occur as part of the plan. For example, a medication to be used, lab tests to perform, self-monitoring that has occurred, education etc. */
	activity?: Array<CarePlan_Activity>;
	/** Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan. */
	addresses?: Array<CodeableReference>;
	/** A higher-level request resource (i.e. a plan, proposal or order) that is fulfilled in whole or in part by this care plan. */
	basedOn?: Array<Reference>;
	/** Identifies all people and organizations who are expected to be involved in the care envisioned by this plan. */
	careTeam?: Array<Reference>;
	/** Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc. */
	category?: Array<CodeableConcept>;
	/** Identifies the individual(s), organization or device who provided the contents of the care plan. */
	contributor?: Array<Reference>;
	/** Represents when this particular CarePlan record was created in the system, which is often a system-generated date. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** When populated, the custodian is responsible for the care plan. The care plan is attributed to the custodian. */
	custodian?: Reference;
	/** A description of the scope and nature of the plan. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The Encounter during which this CarePlan was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Describes the intended objective(s) of carrying out the care plan. */
	goal?: Array<Reference>;
	/** Business identifiers assigned to this care plan by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain. */
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
	/** General notes about the care plan not covered elsewhere. */
	note?: Array<Annotation>;
	/** A larger care plan of which this particular care plan is a component or step. */
	partOf?: Array<Reference>;
	/** Indicates when the plan did (or is intended to) come into effect and end. */
	period?: Period;
	/** Completed or terminated care plan whose function is taken by this new care plan. */
	replaces?: Array<Reference>;
	/** This is a CarePlan resource. */
	resourceType: "CarePlan";
	/** Indicates whether the plan is currently being acted upon, represents future intentions or is now a historical record. */
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
	/** Identifies the patient or group whose intended care is described by the plan. */
	subject: Reference;
	/** Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include comorbidities, recent procedures, limitations, recent assessments, etc. */
	supportingInfo?: Array<Reference>;
	/** Human-friendly name for the care plan. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCarePlan_ActivitySchema = (): z.ZodType<CarePlan_Activity> =>
	CarePlan_ActivitySchemaInternal as z.ZodType<CarePlan_Activity>;
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

/** @internal */
export const CarePlanSchemaInternal = DomainResourceSchemaInternal.extend({
	activity: z.lazy(getCarePlan_ActivitySchema).array().optional(),
	addresses: z.lazy(getCodeableReferenceSchema).array().optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	careTeam: z.lazy(getReferenceSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	contributor: z.lazy(getReferenceSchema).array().optional(),
	created: fhirDateTime().optional(),
	_created: z.lazy(getElementSchema).optional(),
	custodian: z.lazy(getReferenceSchema).optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	goal: z.lazy(getReferenceSchema).array().optional(),
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
	partOf: z.lazy(getReferenceSchema).array().optional(),
	period: z.lazy(getPeriodSchema).optional(),
	replaces: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("CarePlan"),
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
	subject: z.lazy(getReferenceSchema),
	supportingInfo: z.lazy(getReferenceSchema).array().optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
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
			record.basedOn,
			"basedOn",
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
				"http://hl7.org/fhir/StructureDefinition/RequestOrchestration",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
			],
			["CarePlan", "NutritionOrder", "RequestOrchestration", "ServiceRequest"],
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
			record.contributor,
			"contributor",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
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
			record.custodian,
			"custodian",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
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
			record.partOf,
			"partOf",
			["http://hl7.org/fhir/StructureDefinition/CarePlan"],
			["CarePlan"],
			ctx,
		);
		validateReferenceTarget(
			record.replaces,
			"replaces",
			["http://hl7.org/fhir/StructureDefinition/CarePlan"],
			["CarePlan"],
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
			record.supportingInfo,
			"supportingInfo",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const CarePlanSchema = CarePlanSchemaInternal as z.ZodType<CarePlan>;
