// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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
	/** Nominal position of the recommended dose in a series as determined by the evaluation and forecasting process (e.g. dose 2 is the next recommended dose). */
	doseNumber?: string;
	/** Extensions for doseNumber */
	_doseNumber?: Element;
	/** The reason for the assigned forecast status. */
	forecastReason?: Array<CodeableConcept>;
	/** Indicates the patient status with respect to the path to immunity for the target disease. */
	forecastStatus: CodeableConcept;
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
	/** The recommended number of doses to achieve immunity as determined by the evaluation and forecasting process. */
	seriesDoses?: string;
	/** Extensions for seriesDoses */
	_seriesDoses?: Element;
	/** Immunization event history and/or evaluation that supports the status and recommendation. */
	supportingImmunization?: Array<Reference>;
	/** Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information. */
	supportingPatientInformation?: Array<Reference>;
	/** The targeted disease for the recommendation. */
	targetDisease?: Array<CodeableConcept>;
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
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		doseNumber: fhirString().optional(),
		_doseNumber: z.lazy(getElementSchema).optional(),
		forecastReason: z.lazy(getCodeableConceptSchema).array().optional(),
		forecastStatus: z.lazy(getCodeableConceptSchema),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
		seriesDoses: fhirString().optional(),
		_seriesDoses: z.lazy(getElementSchema).optional(),
		supportingImmunization: z.lazy(getReferenceSchema).array().optional(),
		supportingPatientInformation: z.lazy(getReferenceSchema).array().optional(),
		targetDisease: z.lazy(getCodeableConceptSchema).array().optional(),
		vaccineCode: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
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
