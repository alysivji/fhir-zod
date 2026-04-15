// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImmunizationRecommendation_Recommendation_DateCriterion } from "./ImmunizationRecommendation_Recommendation_DateCriterion";
import { ImmunizationRecommendation_Recommendation_DateCriterionSchemaInternal } from "./ImmunizationRecommendation_Recommendation_DateCriterion";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Vaccine administration recommendations. */
export interface ImmunizationRecommendation_Recommendation
	extends BackboneElement {
	/** Vaccine(s) which should not be used to fulfill the recommendation. */
	contraindicatedVaccineCode?: Array<CodeableConcept>;
	/** Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc. */
	dateCriterion?: Array<ImmunizationRecommendation_Recommendation_DateCriterion>;
	/** Contains the description about the protocol under which the vaccine was administered. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose). */
	doseNumberPositiveInt?: number;
	/** Extensions for doseNumberPositiveInt */
	_doseNumberPositiveInt?: Element;
	/** Nominal position of the recommended dose in a series (e.g. dose 2 is the next recommended dose). */
	doseNumberString?: string;
	/** Extensions for doseNumberString */
	_doseNumberString?: Element;
	/** The reason for the assigned forecast status. */
	forecastReason?: Array<CodeableConcept>;
	/** Indicates the patient status with respect to the path to immunity for the target disease. */
	forecastStatus: CodeableConcept;
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
	/** The recommended number of doses to achieve immunity. */
	seriesDosesPositiveInt?: number;
	/** Extensions for seriesDosesPositiveInt */
	_seriesDosesPositiveInt?: Element;
	/** The recommended number of doses to achieve immunity. */
	seriesDosesString?: string;
	/** Extensions for seriesDosesString */
	_seriesDosesString?: Element;
	/** Immunization event history and/or evaluation that supports the status and recommendation. */
	supportingImmunization?: Array<Reference>;
	/** Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information. */
	supportingPatientInformation?: Array<Reference>;
	/** The targeted disease for the recommendation. */
	targetDisease?: CodeableConcept;
	/** Vaccine(s) or vaccine group that pertain to the recommendation. */
	vaccineCode?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getImmunizationRecommendation_Recommendation_DateCriterionSchema =
	(): z.ZodType<ImmunizationRecommendation_Recommendation_DateCriterion> =>
		ImmunizationRecommendation_Recommendation_DateCriterionSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation_DateCriterion>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationRecommendation_RecommendationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		contraindicatedVaccineCode: z
			.lazy(getCodeableConceptSchema)
			.array()
			.optional(),
		dateCriterion: z
			.lazy(getImmunizationRecommendation_Recommendation_DateCriterionSchema)
			.array()
			.optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		doseNumberPositiveInt: z.number().int().positive().optional(),
		_doseNumberPositiveInt: z.lazy(getElementSchema).optional(),
		doseNumberString: fhirString().optional(),
		_doseNumberString: z.lazy(getElementSchema).optional(),
		forecastReason: z.lazy(getCodeableConceptSchema).array().optional(),
		forecastStatus: z.lazy(getCodeableConceptSchema),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
		seriesDosesPositiveInt: z.number().int().positive().optional(),
		_seriesDosesPositiveInt: z.lazy(getElementSchema).optional(),
		seriesDosesString: fhirString().optional(),
		_seriesDosesString: z.lazy(getElementSchema).optional(),
		supportingImmunization: z.lazy(getReferenceSchema).array().optional(),
		supportingPatientInformation: z.lazy(getReferenceSchema).array().optional(),
		targetDisease: z.lazy(getCodeableConceptSchema).optional(),
		vaccineCode: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const doseNumber_x_Present = [
				"doseNumberPositiveInt",
				"doseNumberString",
			].filter((field) => record[field] !== undefined);
			if (doseNumber_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of doseNumberPositiveInt, doseNumberString may be present for doseNumber[x]",
					path: [doseNumber_x_Present[0]],
				});
			}
			const seriesDoses_x_Present = [
				"seriesDosesPositiveInt",
				"seriesDosesString",
			].filter((field) => record[field] !== undefined);
			if (seriesDoses_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of seriesDosesPositiveInt, seriesDosesString may be present for seriesDoses[x]",
					path: [seriesDoses_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.supportingImmunization,
				"supportingImmunization",
				[
					"http://hl7.org/fhir/StructureDefinition/Immunization",
					"http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation",
				],
				["Immunization", "ImmunizationEvaluation"],
				ctx,
			);
			validateReferenceTarget(
				record.supportingPatientInformation,
				"supportingPatientInformation",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ImmunizationRecommendation_RecommendationSchema =
	ImmunizationRecommendation_RecommendationSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation>;
