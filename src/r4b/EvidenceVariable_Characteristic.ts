// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { EvidenceVariable_Characteristic_TimeFromStart } from "./EvidenceVariable_Characteristic_TimeFromStart";
import { EvidenceVariable_Characteristic_TimeFromStartSchemaInternal } from "./EvidenceVariable_Characteristic_TimeFromStart";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A characteristic that defines the members of the evidence element. Multiple characteristics are applied with "and" semantics. */
export interface EvidenceVariable_Characteristic extends BackboneElement {
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionCanonical?: string;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Element;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionCodeableConcept?: CodeableConcept;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionExpression?: Expression;
	/** Define members of the evidence element using Codes (such as condition, medication, or observation), Expressions ( using an expression language such as FHIRPath or CQL) or DataRequirements (such as Diabetes diagnosis onset in the last year). */
	definitionReference?: Reference;
	/** A short, natural language description of the characteristic that could be used to communicate the criteria to an end-user. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Device used for determining characteristic. */
	device?: Reference;
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
	/** Method used for describing characteristic. */
	method?: CodeableConcept;
	/** Indicates duration, period, or point of observation from the participant's study entry. */
	timeFromStart?: EvidenceVariable_Characteristic_TimeFromStart;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEvidenceVariable_Characteristic_TimeFromStartSchema =
	(): z.ZodType<EvidenceVariable_Characteristic_TimeFromStart> =>
		EvidenceVariable_Characteristic_TimeFromStartSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_TimeFromStart>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceVariable_CharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definitionCanonical: fhirCanonical().optional(),
		_definitionCanonical: z.lazy(getElementSchema).optional(),
		definitionCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		definitionExpression: z.lazy(getExpressionSchema).optional(),
		definitionReference: z.lazy(getReferenceSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		device: z.lazy(getReferenceSchema).optional(),
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
		method: z.lazy(getCodeableConceptSchema).optional(),
		timeFromStart: z
			.lazy(getEvidenceVariable_Characteristic_TimeFromStartSchema)
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const definition_x_Present = [
				"definitionCanonical",
				"definitionCodeableConcept",
				"definitionExpression",
				"definitionReference",
			].filter((field) => record[field] !== undefined);
			if (definition_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of definitionCanonical, definitionCodeableConcept, definitionExpression, definitionReference must be present for definition[x]",
					path: ["definitionCanonical"],
				});
			}
			if (definition_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of definitionCanonical, definitionCodeableConcept, definitionExpression, definitionReference may be present for definition[x]",
					path: [definition_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.definitionReference,
				"definitionReference",
				[
					"http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
					"http://hl7.org/fhir/StructureDefinition/Group",
				],
				["EvidenceVariable", "Group"],
				ctx,
			);
			validateReferenceTarget(
				record.device,
				"device",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceMetric",
				],
				["Device", "DeviceMetric"],
				ctx,
			);
		});

export const EvidenceVariable_CharacteristicSchema =
	EvidenceVariable_CharacteristicSchemaInternal as z.ZodType<EvidenceVariable_Characteristic>;
