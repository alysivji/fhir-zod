// Profile: http://hl7.org/fhir/StructureDefinition/RequestOrchestration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
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
import type { RequestOrchestration_Action_Condition } from "./RequestOrchestration_Action_Condition";
import { RequestOrchestration_Action_ConditionSchemaInternal } from "./RequestOrchestration_Action_Condition";
import type { RequestOrchestration_Action_DynamicValue } from "./RequestOrchestration_Action_DynamicValue";
import { RequestOrchestration_Action_DynamicValueSchemaInternal } from "./RequestOrchestration_Action_DynamicValue";
import type { RequestOrchestration_Action_Input } from "./RequestOrchestration_Action_Input";
import { RequestOrchestration_Action_InputSchemaInternal } from "./RequestOrchestration_Action_Input";
import type { RequestOrchestration_Action_Output } from "./RequestOrchestration_Action_Output";
import { RequestOrchestration_Action_OutputSchemaInternal } from "./RequestOrchestration_Action_Output";
import type { RequestOrchestration_Action_Participant } from "./RequestOrchestration_Action_Participant";
import { RequestOrchestration_Action_ParticipantSchemaInternal } from "./RequestOrchestration_Action_Participant";
import type { RequestOrchestration_Action_RelatedAction } from "./RequestOrchestration_Action_RelatedAction";
import { RequestOrchestration_Action_RelatedActionSchemaInternal } from "./RequestOrchestration_Action_RelatedAction";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** The actions, if any, produced by the evaluation of the artifact. */
export interface RequestOrchestration_Action extends BackboneElement {
	/** Sub actions. */
	action?: Array<unknown>;
	/** Defines whether the action can be selected multiple times. */
	cardinalityBehavior?: "multiple" | "single";
	/** Extensions for cardinalityBehavior */
	_cardinalityBehavior?: Element;
	/** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template. */
	code?: Array<CodeableConcept>;
	/** An expression that describes applicability criteria, or start/stop conditions for the action. */
	condition?: Array<RequestOrchestration_Action_Condition>;
	/** A reference to an ActivityDefinition that describes the action to be taken in detail, a PlanDefinition that describes a series of actions to be taken, a Questionnaire that should be filled out, a SpecimenDefinition describing a specimen to be collected, or an ObservationDefinition that specifies what observation should be captured. */
	definitionCanonical?: string;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Element;
	/** A reference to an ActivityDefinition that describes the action to be taken in detail, a PlanDefinition that describes a series of actions to be taken, a Questionnaire that should be filled out, a SpecimenDefinition describing a specimen to be collected, or an ObservationDefinition that specifies what observation should be captured. */
	definitionUri?: string;
	/** Extensions for definitionUri */
	_definitionUri?: Element;
	/** A short description of the action used to provide a summary to display to the user. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources. */
	documentation?: Array<RelatedArtifact>;
	/** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result. */
	dynamicValue?: Array<RequestOrchestration_Action_DynamicValue>;
	/** Goals that are intended to be achieved by following the requests in this action. */
	goal?: Array<Reference>;
	/** Defines the grouping behavior for the action and its children. */
	groupingBehavior?: "logical-group" | "sentence-group" | "visual-group";
	/** Extensions for groupingBehavior */
	_groupingBehavior?: Element;
	/** Defines input data requirements for the action. */
	input?: Array<RequestOrchestration_Action_Input>;
	/** The linkId of the action from the PlanDefinition that corresponds to this action in the RequestOrchestration resource. */
	linkId?: string;
	/** Extensions for linkId */
	_linkId?: Element;
	/** Identifies the facility where the action will occur; e.g. home, hospital, specific clinic, etc. */
	location?: CodeableReference;
	/** Defines the outputs of the action, if any. */
	output?: Array<RequestOrchestration_Action_Output>;
	/** The participant that should perform or be responsible for this action. */
	participant?: Array<RequestOrchestration_Action_Participant>;
	/** Defines whether the action should usually be preselected. */
	precheckBehavior?: "no" | "yes";
	/** Extensions for precheckBehavior */
	_precheckBehavior?: Element;
	/** A user-visible prefix for the action. For example a section or item numbering such as 1. or A. */
	prefix?: string;
	/** Extensions for prefix */
	_prefix?: Element;
	/** Indicates how quickly the action should be addressed with respect to other actions. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** A relationship to another action such as "before" or "30-60 minutes after start of". */
	relatedAction?: Array<RequestOrchestration_Action_RelatedAction>;
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
	/** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input. */
	transform?: string;
	/** Extensions for transform */
	_transform?: Element;
	/** The type of action to perform (create, update, remove). */
	type?: CodeableConcept;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
const getRequestOrchestration_Action_ConditionSchema =
	(): z.ZodType<RequestOrchestration_Action_Condition> =>
		RequestOrchestration_Action_ConditionSchemaInternal as z.ZodType<RequestOrchestration_Action_Condition>;
const getRequestOrchestration_Action_DynamicValueSchema =
	(): z.ZodType<RequestOrchestration_Action_DynamicValue> =>
		RequestOrchestration_Action_DynamicValueSchemaInternal as z.ZodType<RequestOrchestration_Action_DynamicValue>;
const getRequestOrchestration_Action_InputSchema =
	(): z.ZodType<RequestOrchestration_Action_Input> =>
		RequestOrchestration_Action_InputSchemaInternal as z.ZodType<RequestOrchestration_Action_Input>;
const getRequestOrchestration_Action_OutputSchema =
	(): z.ZodType<RequestOrchestration_Action_Output> =>
		RequestOrchestration_Action_OutputSchemaInternal as z.ZodType<RequestOrchestration_Action_Output>;
const getRequestOrchestration_Action_ParticipantSchema =
	(): z.ZodType<RequestOrchestration_Action_Participant> =>
		RequestOrchestration_Action_ParticipantSchemaInternal as z.ZodType<RequestOrchestration_Action_Participant>;
const getRequestOrchestration_Action_RelatedActionSchema =
	(): z.ZodType<RequestOrchestration_Action_RelatedAction> =>
		RequestOrchestration_Action_RelatedActionSchemaInternal as z.ZodType<RequestOrchestration_Action_RelatedAction>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const RequestOrchestration_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.unknown().array().optional(),
		cardinalityBehavior: z.enum(["multiple", "single"]).optional(),
		_cardinalityBehavior: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).array().optional(),
		condition: z
			.lazy(getRequestOrchestration_Action_ConditionSchema)
			.array()
			.optional(),
		definitionCanonical: fhirCanonical().optional(),
		_definitionCanonical: z.lazy(getElementSchema).optional(),
		definitionUri: fhirUri().optional(),
		_definitionUri: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		documentation: z.lazy(getRelatedArtifactSchema).array().optional(),
		dynamicValue: z
			.lazy(getRequestOrchestration_Action_DynamicValueSchema)
			.array()
			.optional(),
		goal: z.lazy(getReferenceSchema).array().optional(),
		groupingBehavior: z
			.enum(["logical-group", "sentence-group", "visual-group"])
			.optional(),
		_groupingBehavior: z.lazy(getElementSchema).optional(),
		input: z
			.lazy(getRequestOrchestration_Action_InputSchema)
			.array()
			.optional(),
		linkId: fhirString().optional(),
		_linkId: z.lazy(getElementSchema).optional(),
		location: z.lazy(getCodeableReferenceSchema).optional(),
		output: z
			.lazy(getRequestOrchestration_Action_OutputSchema)
			.array()
			.optional(),
		participant: z
			.lazy(getRequestOrchestration_Action_ParticipantSchema)
			.array()
			.optional(),
		precheckBehavior: z.enum(["no", "yes"]).optional(),
		_precheckBehavior: z.lazy(getElementSchema).optional(),
		prefix: fhirString().optional(),
		_prefix: z.lazy(getElementSchema).optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		relatedAction: z
			.lazy(getRequestOrchestration_Action_RelatedActionSchema)
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
		textEquivalent: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
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
		transform: fhirCanonical().optional(),
		_transform: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const definition_x_Present = [
				"definitionCanonical",
				"definitionUri",
			].filter((field) => record[field] !== undefined);
			if (definition_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of definitionCanonical, definitionUri may be present for definition[x]",
					path: [definition_x_Present[0]],
				});
			}
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
				record.goal,
				"goal",
				["http://hl7.org/fhir/StructureDefinition/Goal"],
				["Goal"],
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

export const RequestOrchestration_ActionSchema =
	RequestOrchestration_ActionSchemaInternal as z.ZodType<RequestOrchestration_Action>;
