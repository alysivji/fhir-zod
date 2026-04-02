// Profile: http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
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
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A characteristic that defines the members of the research element. Multiple characteristics are applied with "and" semantics. */
export interface ResearchElementDefinition_Characteristic
	extends BackboneElement {
	/** Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionCanonical?: string;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Element;
	/** Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionCodeableConcept?: CodeableConcept;
	/** Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionDataRequirement?: DataRequirement;
	/** Define members of the research element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionExpression?: Expression;
	/** When true, members with this characteristic are excluded from the element. */
	exclude?: boolean;
	/** Extensions for exclude */
	_exclude?: Element;
	/** Indicates what effective period the study covers. */
	participantEffectiveDateTime?: string;
	/** Extensions for participantEffectiveDateTime */
	_participantEffectiveDateTime?: Element;
	/** A narrative description of the time period the study covers. */
	participantEffectiveDescription?: string;
	/** Extensions for participantEffectiveDescription */
	_participantEffectiveDescription?: Element;
	/** Indicates what effective period the study covers. */
	participantEffectiveDuration?: Duration;
	/** Indicates how elements are aggregated within the study effective period. */
	participantEffectiveGroupMeasure?:
		| "mean"
		| "mean-of-mean"
		| "mean-of-median"
		| "median"
		| "median-of-mean"
		| "median-of-median";
	/** Extensions for participantEffectiveGroupMeasure */
	_participantEffectiveGroupMeasure?: Element;
	/** Indicates what effective period the study covers. */
	participantEffectivePeriod?: Period;
	/** Indicates duration from the participant's study entry. */
	participantEffectiveTimeFromStart?: Duration;
	/** Indicates what effective period the study covers. */
	participantEffectiveTiming?: Timing;
	/** Indicates what effective period the study covers. */
	studyEffectiveDateTime?: string;
	/** Extensions for studyEffectiveDateTime */
	_studyEffectiveDateTime?: Element;
	/** A narrative description of the time period the study covers. */
	studyEffectiveDescription?: string;
	/** Extensions for studyEffectiveDescription */
	_studyEffectiveDescription?: Element;
	/** Indicates what effective period the study covers. */
	studyEffectiveDuration?: Duration;
	/** Indicates how elements are aggregated within the study effective period. */
	studyEffectiveGroupMeasure?:
		| "mean"
		| "mean-of-mean"
		| "mean-of-median"
		| "median"
		| "median-of-mean"
		| "median-of-median";
	/** Extensions for studyEffectiveGroupMeasure */
	_studyEffectiveGroupMeasure?: Element;
	/** Indicates what effective period the study covers. */
	studyEffectivePeriod?: Period;
	/** Indicates duration from the study initiation. */
	studyEffectiveTimeFromStart?: Duration;
	/** Indicates what effective period the study covers. */
	studyEffectiveTiming?: Timing;
	/** Specifies the UCUM unit for the outcome. */
	unitOfMeasure?: CodeableConcept;
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
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ResearchElementDefinition_CharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definitionCanonical: z.string().regex(/\S*/).optional(),
		_definitionCanonical: z.lazy(getElementSchema).optional(),
		definitionCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		definitionDataRequirement: z.lazy(getDataRequirementSchema).optional(),
		definitionExpression: z.lazy(getExpressionSchema).optional(),
		exclude: z.boolean().optional(),
		_exclude: z.lazy(getElementSchema).optional(),
		participantEffectiveDateTime: fhirDateTime().optional(),
		_participantEffectiveDateTime: z.lazy(getElementSchema).optional(),
		participantEffectiveDescription: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_participantEffectiveDescription: z.lazy(getElementSchema).optional(),
		participantEffectiveDuration: z.lazy(getDurationSchema).optional(),
		participantEffectiveGroupMeasure: z
			.enum([
				"mean",
				"mean-of-mean",
				"mean-of-median",
				"median",
				"median-of-mean",
				"median-of-median",
			])
			.optional(),
		_participantEffectiveGroupMeasure: z.lazy(getElementSchema).optional(),
		participantEffectivePeriod: z.lazy(getPeriodSchema).optional(),
		participantEffectiveTimeFromStart: z.lazy(getDurationSchema).optional(),
		participantEffectiveTiming: z.lazy(getTimingSchema).optional(),
		studyEffectiveDateTime: fhirDateTime().optional(),
		_studyEffectiveDateTime: z.lazy(getElementSchema).optional(),
		studyEffectiveDescription: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_studyEffectiveDescription: z.lazy(getElementSchema).optional(),
		studyEffectiveDuration: z.lazy(getDurationSchema).optional(),
		studyEffectiveGroupMeasure: z
			.enum([
				"mean",
				"mean-of-mean",
				"mean-of-median",
				"median",
				"median-of-mean",
				"median-of-median",
			])
			.optional(),
		_studyEffectiveGroupMeasure: z.lazy(getElementSchema).optional(),
		studyEffectivePeriod: z.lazy(getPeriodSchema).optional(),
		studyEffectiveTimeFromStart: z.lazy(getDurationSchema).optional(),
		studyEffectiveTiming: z.lazy(getTimingSchema).optional(),
		unitOfMeasure: z.lazy(getCodeableConceptSchema).optional(),
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
			].filter((field) => record[field] !== undefined);
			if (definition_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of definitionCanonical, definitionCodeableConcept, definitionDataRequirement, definitionExpression must be present for definition[x]",
					path: ["definitionCanonical"],
				});
			}
			if (definition_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of definitionCanonical, definitionCodeableConcept, definitionDataRequirement, definitionExpression may be present for definition[x]",
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
			const studyEffective_x_Present = [
				"studyEffectiveDateTime",
				"studyEffectiveDuration",
				"studyEffectivePeriod",
				"studyEffectiveTiming",
			].filter((field) => record[field] !== undefined);
			if (studyEffective_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of studyEffectiveDateTime, studyEffectiveDuration, studyEffectivePeriod, studyEffectiveTiming may be present for studyEffective[x]",
					path: [studyEffective_x_Present[0]],
				});
			}
		});

export const ResearchElementDefinition_CharacteristicSchema =
	ResearchElementDefinition_CharacteristicSchemaInternal as z.ZodType<ResearchElementDefinition_Characteristic>;
