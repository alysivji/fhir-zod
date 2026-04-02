// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DataRequirement } from "./DataRequirement";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";
import type { TriggerDefinition } from "./TriggerDefinition";
import { TriggerDefinitionSchemaInternal } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A characteristic that defines the members of the evidence element. Multiple characteristics are applied with "and" semantics. */
export interface EvidenceVariable_Characteristic extends BackboneElement {
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionCanonical?: string;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Element;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionCodeableConcept?: CodeableConcept;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionDataRequirement?: DataRequirement;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionExpression?: Expression;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionReference?: Reference;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionTriggerDefinition?: TriggerDefinition;
	/** A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** When true, members with this characteristic are excluded from the element. */
	exclude?: boolean;
	/** Extensions for exclude */
	_exclude?: Element;
	/** Indicates how elements are aggregated within the study effective period. */
	groupMeasure?:
		| "mean"
		| "mean-of-mean"
		| "mean-of-median"
		| "median"
		| "median-of-mean"
		| "median-of-median";
	/** Extensions for groupMeasure */
	_groupMeasure?: Element;
	/** Indicates what effective period the study covers. */
	participantEffectiveDateTime?: string;
	/** Extensions for participantEffectiveDateTime */
	_participantEffectiveDateTime?: Element;
	/** Indicates what effective period the study covers. */
	participantEffectiveDuration?: Duration;
	/** Indicates what effective period the study covers. */
	participantEffectivePeriod?: Period;
	/** Indicates what effective period the study covers. */
	participantEffectiveTiming?: Timing;
	/** Indicates duration from the participant's study entry. */
	timeFromStart?: Duration;
	/** Use UsageContext to define the members of the population, such as Age Ranges, Genders, Settings. */
	usageContext?: Array<UsageContext>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
	TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const EvidenceVariable_CharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definitionCanonical: z.string().regex(/\S*/).optional(),
		_definitionCanonical: z.lazy(getElementSchema).optional(),
		definitionCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		definitionDataRequirement: z.lazy(getDataRequirementSchema).optional(),
		definitionExpression: z.lazy(getExpressionSchema).optional(),
		definitionReference: z.lazy(getReferenceSchema).optional(),
		definitionTriggerDefinition: z.lazy(getTriggerDefinitionSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		exclude: z.boolean().optional(),
		_exclude: z.lazy(getElementSchema).optional(),
		groupMeasure: z
			.enum([
				"mean",
				"mean-of-mean",
				"mean-of-median",
				"median",
				"median-of-mean",
				"median-of-median",
			])
			.optional(),
		_groupMeasure: z.lazy(getElementSchema).optional(),
		participantEffectiveDateTime: fhirDateTime().optional(),
		_participantEffectiveDateTime: z.lazy(getElementSchema).optional(),
		participantEffectiveDuration: z.lazy(getDurationSchema).optional(),
		participantEffectivePeriod: z.lazy(getPeriodSchema).optional(),
		participantEffectiveTiming: z.lazy(getTimingSchema).optional(),
		timeFromStart: z.lazy(getDurationSchema).optional(),
		usageContext: z.lazy(getUsageContextSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const definition_x_Present = [
				"definitionCanonical",
				"definitionCodeableConcept",
				"definitionDataRequirement",
				"definitionExpression",
				"definitionReference",
				"definitionTriggerDefinition",
			].filter((field) => record[field] !== undefined);
			if (definition_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of definitionCanonical, definitionCodeableConcept, definitionDataRequirement, definitionExpression, definitionReference, definitionTriggerDefinition must be present for definition[x]",
					path: ["definitionCanonical"],
				});
			}
			if (definition_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of definitionCanonical, definitionCodeableConcept, definitionDataRequirement, definitionExpression, definitionReference, definitionTriggerDefinition may be present for definition[x]",
					path: [definition_x_Present[0]],
				});
			}
			const participantEffective_x_Present = [
				"participantEffectiveDateTime",
				"participantEffectiveDuration",
				"participantEffectivePeriod",
				"participantEffectiveTiming",
			].filter((field) => record[field] !== undefined);
			if (participantEffective_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of participantEffectiveDateTime, participantEffectiveDuration, participantEffectivePeriod, participantEffectiveTiming may be present for participantEffective[x]",
					path: [participantEffective_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.definitionReference,
				"definitionReference",
				["http://hl7.org/fhir/StructureDefinition/Group"],
				["Group"],
				ctx,
			);
		});

export const EvidenceVariable_CharacteristicSchema =
	EvidenceVariable_CharacteristicSchemaInternal as z.ZodType<EvidenceVariable_Characteristic>;
