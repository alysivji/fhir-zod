// Profile: http://hl7.org/fhir/StructureDefinition/Goal
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDate, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Goal_Target } from "./Goal_Target";
import { Goal_TargetSchemaInternal } from "./Goal_Target";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface Goal extends DomainResource {
	/** Describes the progression, or lack thereof, towards the goal against the target. */
	achievementStatus?: CodeableConcept;
	/** The identified conditions and other health record elements that are intended to be addressed by the goal. */
	addresses?: Array<Reference>;
	/** Indicates a category the goal falls within. */
	category?: Array<CodeableConcept>;
	/** After meeting the goal, ongoing activity is needed to sustain the goal objective. */
	continuous?: boolean;
	/** Extensions for continuous */
	_continuous?: Element;
	/** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding". */
	description: CodeableConcept;
	/** Business identifiers assigned to this goal by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The state of the goal throughout its lifecycle. */
	lifecycleStatus:
		| "accepted"
		| "active"
		| "cancelled"
		| "completed"
		| "entered-in-error"
		| "on-hold"
		| "planned"
		| "proposed"
		| "rejected";
	/** Extensions for lifecycleStatus */
	_lifecycleStatus?: Element;
	/** Any comments related to the goal. */
	note?: Array<Annotation>;
	/** Identifies the change (or lack of change) at the point when the status of the goal is assessed. */
	outcome?: Array<CodeableReference>;
	/** Identifies the mutually agreed level of importance associated with reaching/sustaining the goal. */
	priority?: CodeableConcept;
	/** This is a Goal resource. */
	resourceType: "Goal";
	/** Indicates whose goal this is - patient goal, practitioner goal, etc. */
	source?: Reference;
	/** The date or event after which the goal should begin being pursued. */
	startCodeableConcept?: CodeableConcept;
	/** The date or event after which the goal should begin being pursued. */
	startDate?: string;
	/** Extensions for startDate */
	_startDate?: Element;
	/** Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc. */
	statusDate?: string;
	/** Extensions for statusDate */
	_statusDate?: Element;
	/** Captures the reason for the current status. */
	statusReason?: string;
	/** Extensions for statusReason */
	_statusReason?: Element;
	/** Identifies the patient, group or organization for whom the goal is being established. */
	subject: Reference;
	/** Indicates what should be done by when. */
	target?: Array<Goal_Target>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getGoal_TargetSchema = (): z.ZodType<Goal_Target> =>
	Goal_TargetSchemaInternal as z.ZodType<Goal_Target>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const GoalSchemaInternal = DomainResourceSchemaInternal.extend({
	achievementStatus: z.lazy(getCodeableConceptSchema).optional(),
	addresses: z.lazy(getReferenceSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	continuous: z.boolean().optional(),
	_continuous: z.lazy(getElementSchema).optional(),
	description: z.lazy(getCodeableConceptSchema),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	lifecycleStatus: z.enum([
		"accepted",
		"active",
		"cancelled",
		"completed",
		"entered-in-error",
		"on-hold",
		"planned",
		"proposed",
		"rejected",
	]),
	_lifecycleStatus: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	outcome: z.lazy(getCodeableReferenceSchema).array().optional(),
	priority: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("Goal"),
	source: z.lazy(getReferenceSchema).optional(),
	startCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	startDate: fhirDate().optional(),
	_startDate: z.lazy(getElementSchema).optional(),
	statusDate: fhirDate().optional(),
	_statusDate: z.lazy(getElementSchema).optional(),
	statusReason: fhirString().optional(),
	_statusReason: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema),
	target: z.lazy(getGoal_TargetSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const start_x_Present = ["startCodeableConcept", "startDate"].filter(
			(field) => record[field] !== undefined,
		);
		if (start_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of startCodeableConcept, startDate may be present for start[x]",
				path: [start_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.addresses,
			"addresses",
			[
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
				"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
				"http://hl7.org/fhir/StructureDefinition/Observation",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
				"http://hl7.org/fhir/StructureDefinition/RiskAssessment",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
			],
			[
				"Condition",
				"MedicationRequest",
				"MedicationStatement",
				"NutritionOrder",
				"Observation",
				"Procedure",
				"RiskAssessment",
				"ServiceRequest",
			],
			ctx,
		);
		validateReferenceTarget(
			record.source,
			"source",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
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
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Group", "Organization", "Patient"],
			ctx,
		);
	});

export const GoalSchema = GoalSchemaInternal as z.ZodType<Goal>;
