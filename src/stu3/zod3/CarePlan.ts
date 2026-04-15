// Profile: http://hl7.org/fhir/StructureDefinition/CarePlan
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CarePlan_Activity } from "./CarePlan_Activity";
import { CarePlan_ActivitySchemaInternal } from "./CarePlan_Activity";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
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

/** Base StructureDefinition for CarePlan Resource */
export interface CarePlan extends DomainResource {
	/** Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc. */
	activity?: Array<CarePlan_Activity>;
	/** Identifies the conditions/problems/concerns/diagnoses/etc. whose management and/or mitigation are handled by this plan. */
	addresses?: Array<Reference>;
	/** Identifies the individual(s) or ogranization who is responsible for the content of the care plan. */
	author?: Array<Reference>;
	/** A care plan that is fulfilled in whole or in part by this care plan. */
	basedOn?: Array<Reference>;
	/** Identifies all people and organizations who are expected to be involved in the care envisioned by this plan. */
	careTeam?: Array<Reference>;
	/** Identifies what "kind" of plan this is to support differentiation between multiple co-existing plans; e.g. "Home health", "psychiatric", "asthma", "disease management", "wellness plan", etc. */
	category?: Array<CodeableConcept>;
	/** Identifies the original context in which this particular CarePlan was created. */
	context?: Reference;
	/** Identifies the protocol, questionnaire, guideline or other specification the care plan should be conducted in accordance with. */
	definition?: Array<Reference>;
	/** A description of the scope and nature of the plan. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Describes the intended objective(s) of carrying out the care plan. */
	goal?: Array<Reference>;
	/** This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
	identifier?: Array<Identifier>;
	/** Indicates the level of authority/intentionality associated with the care plan and where the care plan fits into the workflow chain. */
	intent: "option" | "order" | "plan" | "proposal";
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
		| "cancelled"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "suspended"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Identifies the patient or group whose intended care is described by the plan. */
	subject: Reference;
	/** Identifies portions of the patient's record that specifically influenced the formation of the plan.  These might include co-morbidities, recent procedures, limitations, recent assessments, etc. */
	supportingInfo?: Array<Reference>;
	/** Human-friendly name for the CarePlan. */
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
	addresses: z.lazy(getReferenceSchema).array().optional(),
	author: z.lazy(getReferenceSchema).array().optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	careTeam: z.lazy(getReferenceSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	context: z.lazy(getReferenceSchema).optional(),
	definition: z.lazy(getReferenceSchema).array().optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	goal: z.lazy(getReferenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	intent: z.enum(["option", "order", "plan", "proposal"]),
	_intent: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	period: z.lazy(getPeriodSchema).optional(),
	replaces: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("CarePlan"),
	status: z.enum([
		"active",
		"cancelled",
		"completed",
		"draft",
		"entered-in-error",
		"suspended",
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
		validateReferenceTarget(
			record.addresses,
			"addresses",
			["http://hl7.org/fhir/StructureDefinition/Condition"],
			["Condition"],
			ctx,
		);
		validateReferenceTarget(
			record.author,
			"author",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["CareTeam", "Organization", "Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			["http://hl7.org/fhir/StructureDefinition/CarePlan"],
			["CarePlan"],
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
			record.context,
			"context",
			[
				"http://hl7.org/fhir/StructureDefinition/Encounter",
				"http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
			],
			["Encounter", "EpisodeOfCare"],
			ctx,
		);
		validateReferenceTarget(
			record.definition,
			"definition",
			[
				"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
				"http://hl7.org/fhir/StructureDefinition/Questionnaire",
			],
			["PlanDefinition", "Questionnaire"],
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
