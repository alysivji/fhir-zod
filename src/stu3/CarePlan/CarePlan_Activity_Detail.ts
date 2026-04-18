// Profile: http://hl7.org/fhir/StructureDefinition/CarePlan
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";

/** A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc. */
export interface CarePlan_Activity_Detail extends BackboneElement {
	/** High-level categorization of the type of activity in a care plan. */
	category?: CodeableConcept;
	/** Detailed description of the type of planned activity; e.g. What lab test, what procedure, what kind of encounter. */
	code?: CodeableConcept;
	/** Identifies the quantity expected to be consumed in a given day. */
	dailyAmount?: Quantity;
	/** Identifies the protocol, questionnaire, guideline or other specification the planned activity should be conducted in accordance with. */
	definition?: Reference;
	/** This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Internal reference that identifies the goals that this activity is intended to contribute towards meeting. */
	goal?: Array<Reference>;
	/** Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc. */
	location?: Reference;
	/** Identifies who's expected to be involved in the activity. */
	performer?: Array<Reference>;
	/** Identifies the food, drug or other product to be consumed or supplied in the activity. */
	productCodeableConcept?: CodeableConcept;
	/** Identifies the food, drug or other product to be consumed or supplied in the activity. */
	productReference?: Reference;
	/** If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, indicates that the described activity is one that should be engaged in when following the plan. */
	prohibited?: boolean;
	/** Extensions for prohibited */
	_prohibited?: Element;
	/** Identifies the quantity expected to be supplied, administered or consumed by the subject. */
	quantity?: Quantity;
	/** Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited. */
	reasonCode?: Array<CodeableConcept>;
	/** Provides the health condition(s) that drove the inclusion of this particular activity as part of the plan. */
	reasonReference?: Array<Reference>;
	/** The period, timing or frequency upon which the described activity is to occur. */
	scheduledPeriod?: Period;
	/** The period, timing or frequency upon which the described activity is to occur. */
	scheduledString?: string;
	/** Extensions for scheduledString */
	_scheduledString?: Element;
	/** The period, timing or frequency upon which the described activity is to occur. */
	scheduledTiming?: Timing;
	/** Identifies what progress is being made for the specific activity. */
	status:
		| "cancelled"
		| "completed"
		| "in-progress"
		| "not-started"
		| "on-hold"
		| "scheduled"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Provides reason why the activity isn't yet started, is on hold, was cancelled, etc. */
	statusReason?: string;
	/** Extensions for statusReason */
	_statusReason?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const CarePlan_Activity_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		dailyAmount: z.lazy(getQuantitySchema).optional(),
		definition: z.lazy(getReferenceSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		goal: z.lazy(getReferenceSchema).array().optional(),
		location: z.lazy(getReferenceSchema).optional(),
		performer: z.lazy(getReferenceSchema).array().optional(),
		productCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		productReference: z.lazy(getReferenceSchema).optional(),
		prohibited: z.boolean().optional(),
		_prohibited: z.lazy(getElementSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		scheduledPeriod: z.lazy(getPeriodSchema).optional(),
		scheduledString: fhirString().optional(),
		_scheduledString: z.lazy(getElementSchema).optional(),
		scheduledTiming: z.lazy(getTimingSchema).optional(),
		status: z.enum([
			"cancelled",
			"completed",
			"in-progress",
			"not-started",
			"on-hold",
			"scheduled",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		statusReason: fhirString().optional(),
		_statusReason: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const product_x_Present = [
				"productCodeableConcept",
				"productReference",
			].filter((field) => record[field] !== undefined);
			if (product_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of productCodeableConcept, productReference may be present for product[x]",
					path: [product_x_Present[0]],
				});
			}
			const scheduled_x_Present = [
				"scheduledPeriod",
				"scheduledString",
				"scheduledTiming",
			].filter((field) => record[field] !== undefined);
			if (scheduled_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of scheduledPeriod, scheduledString, scheduledTiming may be present for scheduled[x]",
					path: [scheduled_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.definition,
				"definition",
				[
					"http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
					"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
					"http://hl7.org/fhir/StructureDefinition/Questionnaire",
				],
				["ActivityDefinition", "PlanDefinition", "Questionnaire"],
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
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.performer,
				"performer",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"Organization",
					"Patient",
					"Practitioner",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.productReference,
				"productReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Medication",
					"http://hl7.org/fhir/StructureDefinition/Substance",
				],
				["Medication", "Substance"],
				ctx,
			);
			validateReferenceTarget(
				record.reasonReference,
				"reasonReference",
				["http://hl7.org/fhir/StructureDefinition/Condition"],
				["Condition"],
				ctx,
			);
		});

export const CarePlan_Activity_DetailSchema =
	CarePlan_Activity_DetailSchemaInternal as z.ZodType<CarePlan_Activity_Detail>;
