// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface ImmunizationEvaluation extends DomainResource {
	/** Indicates the authority who published the protocol (e.g. ACIP). */
	authority?: Reference;
	/** The date the evaluation of the vaccine administration event was performed. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Additional information about the evaluation. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Nominal position in a series as determined by the outcome of the evaluation process. */
	doseNumber?: string;
	/** Extensions for doseNumber */
	_doseNumber?: Element;
	/** Indicates if the dose is valid or not valid with respect to the published recommendations. */
	doseStatus: CodeableConcept;
	/** Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations. */
	doseStatusReason?: Array<CodeableConcept>;
	/** A unique identifier assigned to this immunization evaluation record. */
	identifier?: Array<Identifier>;
	/** The vaccine administration event being evaluated. */
	immunizationEvent: Reference;
	/** The individual for whom the evaluation is being done. */
	patient: Reference;
	/** This is a ImmunizationEvaluation resource. */
	resourceType: "ImmunizationEvaluation";
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
	/** The recommended number of doses to achieve immunity as determined by the outcome of the evaluation process. */
	seriesDoses?: string;
	/** Extensions for seriesDoses */
	_seriesDoses?: Element;
	/** Indicates the current status of the evaluation of the vaccination administration event. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "not-done"
		| "on-hold"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The vaccine preventable disease the dose is being evaluated against. */
	targetDisease: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationEvaluationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		authority: z.lazy(getReferenceSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		doseNumber: fhirString().optional(),
		_doseNumber: z.lazy(getElementSchema).optional(),
		doseStatus: z.lazy(getCodeableConceptSchema),
		doseStatusReason: z.lazy(getCodeableConceptSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		immunizationEvent: z.lazy(getReferenceSchema),
		patient: z.lazy(getReferenceSchema),
		resourceType: z.literal("ImmunizationEvaluation"),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
		seriesDoses: fhirString().optional(),
		_seriesDoses: z.lazy(getElementSchema).optional(),
		status: z.enum([
			"completed",
			"entered-in-error",
			"in-progress",
			"not-done",
			"on-hold",
			"stopped",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		targetDisease: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.authority,
				"authority",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.immunizationEvent,
				"immunizationEvent",
				["http://hl7.org/fhir/StructureDefinition/Immunization"],
				["Immunization"],
				ctx,
			);
			validateReferenceTarget(
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
		});

export const ImmunizationEvaluationSchema =
	ImmunizationEvaluationSchemaInternal as z.ZodType<ImmunizationEvaluation>;
