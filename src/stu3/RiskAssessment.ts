// Profile: http://hl7.org/fhir/StructureDefinition/RiskAssessment
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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
import type { RiskAssessment_Prediction } from "./RiskAssessment_Prediction";
import { RiskAssessment_PredictionSchemaInternal } from "./RiskAssessment_Prediction";

/** Base StructureDefinition for RiskAssessment Resource */
export interface RiskAssessment extends DomainResource {
	/** A reference to the request that is fulfilled by this risk assessment. */
	basedOn?: Reference;
	/** Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.). */
	basis?: Array<Reference>;
	/** The type of the risk assessment performed. */
	code?: CodeableConcept;
	/** Additional comments about the risk assessment. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** For assessments or prognosis specific to a particular condition, indicates the condition being assessed. */
	condition?: Reference;
	/** The encounter where the assessment was performed. */
	context?: Reference;
	/** Business identifier assigned to the risk assessment. */
	identifier?: Identifier;
	/** The algorithm, process or mechanism used to evaluate the risk. */
	method?: CodeableConcept;
	/** A description of the steps that might be taken to reduce the identified risk(s). */
	mitigation?: string;
	/** Extensions for mitigation */
	_mitigation?: Element;
	/** The date (and possibly time) the risk assessment was performed. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The date (and possibly time) the risk assessment was performed. */
	occurrencePeriod?: Period;
	/** A reference to a resource that this risk assessment is part of, such as a Procedure. */
	parent?: Reference;
	/** The provider or software application that performed the assessment. */
	performer?: Reference;
	/** Describes the expected outcome for the subject. */
	prediction?: Array<RiskAssessment_Prediction>;
	/** The reason the risk assessment was performed. */
	reasonCodeableConcept?: CodeableConcept;
	/** The reason the risk assessment was performed. */
	reasonReference?: Reference;
	/** This is a RiskAssessment resource. */
	resourceType: "RiskAssessment";
	/** The status of the RiskAssessment, using the same statuses as an Observation. */
	status:
		| "amended"
		| "cancelled"
		| "corrected"
		| "entered-in-error"
		| "final"
		| "preliminary"
		| "registered"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The patient or group the risk assessment applies to. */
	subject?: Reference;
}

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
const getRiskAssessment_PredictionSchema =
	(): z.ZodType<RiskAssessment_Prediction> =>
		RiskAssessment_PredictionSchemaInternal as z.ZodType<RiskAssessment_Prediction>;

/** @internal */
export const RiskAssessmentSchemaInternal = DomainResourceSchemaInternal.extend(
	{
		basedOn: z.lazy(getReferenceSchema).optional(),
		basis: z.lazy(getReferenceSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		condition: z.lazy(getReferenceSchema).optional(),
		context: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		method: z.lazy(getCodeableConceptSchema).optional(),
		mitigation: fhirString().optional(),
		_mitigation: z.lazy(getElementSchema).optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		parent: z.lazy(getReferenceSchema).optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		prediction: z.lazy(getRiskAssessment_PredictionSchema).array().optional(),
		reasonCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		reasonReference: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("RiskAssessment"),
		status: z.enum([
			"amended",
			"cancelled",
			"corrected",
			"entered-in-error",
			"final",
			"preliminary",
			"registered",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
	},
)
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
		const reason_x_Present = [
			"reasonCodeableConcept",
			"reasonReference",
		].filter((field) => record[field] !== undefined);
		if (reason_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of reasonCodeableConcept, reasonReference may be present for reason[x]",
				path: [reason_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.basis,
			"basis",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.condition,
			"condition",
			["http://hl7.org/fhir/StructureDefinition/Condition"],
			["Condition"],
			ctx,
		);
		validateReferenceTarget(
			record.context,
			"context",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
			ctx,
		);
		validateReferenceTarget(
			record.parent,
			"parent",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.performer,
			"performer",
			["http://hl7.org/fhir/StructureDefinition/Practitioner"],
			["Practitioner"],
			ctx,
		);
		validateReferenceTarget(
			record.reasonReference,
			"reasonReference",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const RiskAssessmentSchema =
	RiskAssessmentSchemaInternal as z.ZodType<RiskAssessment>;
