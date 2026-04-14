// Profile: http://hl7.org/fhir/StructureDefinition/NutritionIntake
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { NutritionIntake_ConsumedItem } from "./NutritionIntake_ConsumedItem";
import { NutritionIntake_ConsumedItemSchemaInternal } from "./NutritionIntake_ConsumedItem";
import type { NutritionIntake_IngredientLabel } from "./NutritionIntake_IngredientLabel";
import { NutritionIntake_IngredientLabelSchemaInternal } from "./NutritionIntake_IngredientLabel";
import type { NutritionIntake_Performer } from "./NutritionIntake_Performer";
import { NutritionIntake_PerformerSchemaInternal } from "./NutritionIntake_Performer";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A record of food or fluid that is being consumed by a patient.  A NutritionIntake may indicate that the patient may be consuming the food or fluid now or has consumed the food or fluid in the past.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay or through an app that tracks food or fluids consumed.   The consumption information may come from sources such as the patient's memory, from a nutrition label,  or from a clinician documenting observed intake. */
export interface NutritionIntake extends DomainResource {
	/** A plan, proposal or order that is fulfilled in whole or in part by this event. */
	basedOn?: Array<Reference>;
	/** Overall type of nutrition intake. */
	code?: CodeableConcept;
	/** What food or fluid product or item was consumed. */
	consumedItem: Array<NutritionIntake_ConsumedItem>;
	/** Allows linking the NutritionIntake to the underlying NutritionOrder, or to other information, such as AllergyIntolerance, that supports or is used to derive the NutritionIntake. */
	derivedFrom?: Array<Reference>;
	/** The encounter that establishes the context for this NutritionIntake. */
	encounter?: Reference;
	/** Identifiers associated with this Nutrition Intake that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** Total nutrient amounts for the whole meal, product, serving, etc. */
	ingredientLabel?: Array<NutritionIntake_IngredientLabel>;
	/** Instantiates FHIR protocol or definition. */
	instantiatesCanonical?: Array<string>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element>;
	/** Instantiates external protocol or definition. */
	instantiatesUri?: Array<string>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element>;
	/** Where the intake occurred. */
	location?: Reference;
	/** Provides extra information about the Nutrition Intake that is not conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** The interval of time during which it is being asserted that the patient is/was consuming the food or fluid. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The interval of time during which it is being asserted that the patient is/was consuming the food or fluid. */
	occurrencePeriod?: Period;
	/** A larger event of which this particular event is a component or step. */
	partOf?: Array<Reference>;
	/** Who performed the intake and how they were involved. */
	performer?: Array<NutritionIntake_Performer>;
	/** A reason, Condition or observation for why the food or fluid is /was consumed. */
	reason?: Array<CodeableReference>;
	/** The date when the Nutrition Intake was asserted by the information source. */
	recorded?: string;
	/** Extensions for recorded */
	_recorded?: Element;
	/** The person or organization that provided the information about the consumption of this food or fluid. Note: Use derivedFrom when a NutritionIntake is derived from other resources. */
	reportedBoolean?: boolean;
	/** Extensions for reportedBoolean */
	_reportedBoolean?: Element;
	/** The person or organization that provided the information about the consumption of this food or fluid. Note: Use derivedFrom when a NutritionIntake is derived from other resources. */
	reportedReference?: Reference;
	/** This is a NutritionIntake resource. */
	resourceType: "NutritionIntake";
	/** A code representing the patient or other source's judgment about the state of the intake that this assertion is about.  Generally, this will be active or completed. */
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
	/** Captures the reason for the current state of the NutritionIntake. */
	statusReason?: Array<CodeableConcept>;
	/** The person, animal or group who is/was consuming the food or fluid. */
	subject: Reference;
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
const getNutritionIntake_ConsumedItemSchema =
	(): z.ZodType<NutritionIntake_ConsumedItem> =>
		NutritionIntake_ConsumedItemSchemaInternal as z.ZodType<NutritionIntake_ConsumedItem>;
const getNutritionIntake_IngredientLabelSchema =
	(): z.ZodType<NutritionIntake_IngredientLabel> =>
		NutritionIntake_IngredientLabelSchemaInternal as z.ZodType<NutritionIntake_IngredientLabel>;
const getNutritionIntake_PerformerSchema =
	(): z.ZodType<NutritionIntake_Performer> =>
		NutritionIntake_PerformerSchemaInternal as z.ZodType<NutritionIntake_Performer>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const NutritionIntakeSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		consumedItem: z.lazy(getNutritionIntake_ConsumedItemSchema).array(),
		derivedFrom: z.lazy(getReferenceSchema).array().optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		ingredientLabel: z
			.lazy(getNutritionIntake_IngredientLabelSchema)
			.array()
			.optional(),
		instantiatesCanonical: fhirCanonical().array().optional(),
		_instantiatesCanonical: z.lazy(getElementSchema).array().optional(),
		instantiatesUri: fhirUri().array().optional(),
		_instantiatesUri: z.lazy(getElementSchema).array().optional(),
		location: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		performer: z.lazy(getNutritionIntake_PerformerSchema).array().optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		recorded: fhirDateTime().optional(),
		_recorded: z.lazy(getElementSchema).optional(),
		reportedBoolean: z.boolean().optional(),
		_reportedBoolean: z.lazy(getElementSchema).optional(),
		reportedReference: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("NutritionIntake"),
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
		statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
		subject: z.lazy(getReferenceSchema),
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
			const reported_x_Present = [
				"reportedBoolean",
				"reportedReference",
			].filter((field) => record[field] !== undefined);
			if (reported_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of reportedBoolean, reportedReference may be present for reported[x]",
					path: [reported_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				[
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
					"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
				],
				["CarePlan", "NutritionOrder", "ServiceRequest"],
				ctx,
			);
			validateReferenceTarget(
				record.derivedFrom,
				"derivedFrom",
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
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.partOf,
				"partOf",
				[
					"http://hl7.org/fhir/StructureDefinition/NutritionIntake",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["NutritionIntake", "Observation", "Procedure"],
				ctx,
			);
			validateReferenceTarget(
				record.reportedReference,
				"reportedReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
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

export const NutritionIntakeSchema =
	NutritionIntakeSchemaInternal as z.ZodType<NutritionIntake>;
