// Profile: http://hl7.org/fhir/StructureDefinition/RequestGroup
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { RequestGroup_Action_Condition } from "./RequestGroup_Action_Condition";
import { RequestGroup_Action_ConditionSchemaInternal } from "./RequestGroup_Action_Condition";
import type { RequestGroup_Action_RelatedAction } from "./RequestGroup_Action_RelatedAction";
import { RequestGroup_Action_RelatedActionSchemaInternal } from "./RequestGroup_Action_RelatedAction";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** The actions, if any, produced by the evaluation of the artifact. */
export interface RequestGroup_Action extends BackboneElement {
	/** Sub actions. */
	action?: Array<unknown>;
	/** Defines whether the action can be selected multiple times. */
	cardinalityBehavior?: "multiple" | "single";
	/** Extensions for cardinalityBehavior */
	_cardinalityBehavior?: Element;
	/** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template. */
	code?: Array<CodeableConcept>;
	/** An expression that describes applicability criteria, or start/stop conditions for the action. */
	condition?: Array<RequestGroup_Action_Condition>;
	/** A short description of the action used to provide a summary to display to the user. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources. */
	documentation?: Array<RelatedArtifact>;
	/** Defines the grouping behavior for the action and its children. */
	groupingBehavior?: "logical-group" | "sentence-group" | "visual-group";
	/** Extensions for groupingBehavior */
	_groupingBehavior?: Element;
	/** The participant that should perform or be responsible for this action. */
	participant?: Array<Reference>;
	/** Defines whether the action should usually be preselected. */
	precheckBehavior?: "no" | "yes";
	/** Extensions for precheckBehavior */
	_precheckBehavior?: Element;
	/** A user-visible prefix for the action. */
	prefix?: string;
	/** Extensions for prefix */
	_prefix?: Element;
	/** Indicates how quickly the action should be addressed with respect to other actions. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** A relationship to another action such as "before" or "30-60 minutes after start of". */
	relatedAction?: Array<RequestGroup_Action_RelatedAction>;
	/** Defines expectations around whether an action is required. */
	requiredBehavior?: "could" | "must" | "must-unless-documented";
	/** Extensions for requiredBehavior */
	_requiredBehavior?: Element;
	/** The resource that is the target of the action (e.g. CommunicationRequest). */
	resource?: Reference;
	/** Defines the selection behavior for the action and its children. */
	selectionBehavior?:
		| "all"
		| "all-or-none"
		| "any"
		| "at-most-one"
		| "exactly-one"
		| "one-or-more";
	/** Extensions for selectionBehavior */
	_selectionBehavior?: Element;
	/** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically. */
	textEquivalent?: string;
	/** Extensions for textEquivalent */
	_textEquivalent?: Element;
	/** An optional value describing when the action should be performed. */
	timingAge?: Age;
	/** An optional value describing when the action should be performed. */
	timingDateTime?: string;
	/** Extensions for timingDateTime */
	_timingDateTime?: Element;
	/** An optional value describing when the action should be performed. */
	timingDuration?: Duration;
	/** An optional value describing when the action should be performed. */
	timingPeriod?: Period;
	/** An optional value describing when the action should be performed. */
	timingRange?: Range;
	/** An optional value describing when the action should be performed. */
	timingTiming?: Timing;
	/** The title of the action displayed to a user. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** The type of action to perform (create, update, remove). */
	type?: CodeableConcept;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getRequestGroup_Action_ConditionSchema =
	(): z.ZodType<RequestGroup_Action_Condition> =>
		RequestGroup_Action_ConditionSchemaInternal as z.ZodType<RequestGroup_Action_Condition>;
const getRequestGroup_Action_RelatedActionSchema =
	(): z.ZodType<RequestGroup_Action_RelatedAction> =>
		RequestGroup_Action_RelatedActionSchemaInternal as z.ZodType<RequestGroup_Action_RelatedAction>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const RequestGroup_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.unknown().array().optional(),
		cardinalityBehavior: z.enum(["multiple", "single"]).optional(),
		_cardinalityBehavior: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).array().optional(),
		condition: z
			.lazy(getRequestGroup_Action_ConditionSchema)
			.array()
			.optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		documentation: z.lazy(getRelatedArtifactSchema).array().optional(),
		groupingBehavior: z
			.enum(["logical-group", "sentence-group", "visual-group"])
			.optional(),
		_groupingBehavior: z.lazy(getElementSchema).optional(),
		participant: z.lazy(getReferenceSchema).array().optional(),
		precheckBehavior: z.enum(["no", "yes"]).optional(),
		_precheckBehavior: z.lazy(getElementSchema).optional(),
		prefix: fhirString().optional(),
		_prefix: z.lazy(getElementSchema).optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		relatedAction: z
			.lazy(getRequestGroup_Action_RelatedActionSchema)
			.array()
			.optional(),
		requiredBehavior: z
			.enum(["could", "must", "must-unless-documented"])
			.optional(),
		_requiredBehavior: z.lazy(getElementSchema).optional(),
		resource: z.lazy(getReferenceSchema).optional(),
		selectionBehavior: z
			.enum([
				"all",
				"all-or-none",
				"any",
				"at-most-one",
				"exactly-one",
				"one-or-more",
			])
			.optional(),
		_selectionBehavior: z.lazy(getElementSchema).optional(),
		textEquivalent: fhirString().optional(),
		_textEquivalent: z.lazy(getElementSchema).optional(),
		timingAge: z.lazy(getAgeSchema).optional(),
		timingDateTime: fhirDateTime().optional(),
		_timingDateTime: z.lazy(getElementSchema).optional(),
		timingDuration: z.lazy(getDurationSchema).optional(),
		timingPeriod: z.lazy(getPeriodSchema).optional(),
		timingRange: z.lazy(getRangeSchema).optional(),
		timingTiming: z.lazy(getTimingSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const timing_x_Present = [
				"timingAge",
				"timingDateTime",
				"timingDuration",
				"timingPeriod",
				"timingRange",
				"timingTiming",
			].filter((field) => record[field] !== undefined);
			if (timing_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of timingAge, timingDateTime, timingDuration, timingPeriod, timingRange, timingTiming may be present for timing[x]",
					path: [timing_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.participant,
				"participant",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.resource,
				"resource",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const RequestGroup_ActionSchema =
	RequestGroup_ActionSchemaInternal as z.ZodType<RequestGroup_Action>;
