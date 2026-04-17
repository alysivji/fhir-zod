// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImmunizationRecommendation_Recommendation_DateCriterion } from "./ImmunizationRecommendation_Recommendation_DateCriterion";
import { ImmunizationRecommendation_Recommendation_DateCriterionSchemaInternal } from "./ImmunizationRecommendation_Recommendation_DateCriterion";
import type { ImmunizationRecommendation_Recommendation_Protocol } from "./ImmunizationRecommendation_Recommendation_Protocol";
import { ImmunizationRecommendation_Recommendation_ProtocolSchemaInternal } from "./ImmunizationRecommendation_Recommendation_Protocol";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Vaccine administration recommendations. */
export interface ImmunizationRecommendation_Recommendation
  extends BackboneElement {
  /** The date the immunization recommendation was created. */
  date: string;
  /** Extensions for date */
  _date?: Element;
  /** Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc. */
  dateCriterion?: Array<ImmunizationRecommendation_Recommendation_DateCriterion>;
  /** The next recommended dose number (e.g. dose 2 is the next recommended dose). */
  doseNumber?: number;
  /** Extensions for doseNumber */
  _doseNumber?: Element;
  /** Vaccine administration status. */
  forecastStatus: CodeableConcept;
  /** Contains information about the protocol under which the vaccine was administered. */
  protocol?: ImmunizationRecommendation_Recommendation_Protocol;
  /** Immunization event history that supports the status and recommendation. */
  supportingImmunization?: Array<Reference>;
  /** Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information. */
  supportingPatientInformation?: Array<Reference>;
  /** The targeted disease for the recommendation. */
  targetDisease?: CodeableConcept;
  /** Vaccine that pertains to the recommendation. */
  vaccineCode?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getImmunizationRecommendation_Recommendation_DateCriterionSchema =
  (): z.ZodType<ImmunizationRecommendation_Recommendation_DateCriterion> =>
    ImmunizationRecommendation_Recommendation_DateCriterionSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation_DateCriterion>;
const getImmunizationRecommendation_Recommendation_ProtocolSchema =
  (): z.ZodType<ImmunizationRecommendation_Recommendation_Protocol> =>
    ImmunizationRecommendation_Recommendation_ProtocolSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation_Protocol>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationRecommendation_RecommendationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    date: fhirDateTime(),
    _date: z.lazy(getElementSchema).optional(),
    dateCriterion: z
      .lazy(getImmunizationRecommendation_Recommendation_DateCriterionSchema)
      .array()
      .optional(),
    doseNumber: z.number().int().positive().optional(),
    _doseNumber: z.lazy(getElementSchema).optional(),
    forecastStatus: z.lazy(getCodeableConceptSchema),
    protocol: z
      .lazy(getImmunizationRecommendation_Recommendation_ProtocolSchema)
      .optional(),
    supportingImmunization: z.lazy(getReferenceSchema).array().optional(),
    supportingPatientInformation: z.lazy(getReferenceSchema).array().optional(),
    targetDisease: z.lazy(getCodeableConceptSchema).optional(),
    vaccineCode: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.supportingImmunization,
        "supportingImmunization",
        ["http://hl7.org/fhir/StructureDefinition/Immunization"],
        ["Immunization"],
        ctx,
      );
      validateReferenceTarget(
        record.supportingPatientInformation,
        "supportingPatientInformation",
        [
          "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
          "http://hl7.org/fhir/StructureDefinition/Observation",
        ],
        ["AllergyIntolerance", "Observation"],
        ctx,
      );
    });

export const ImmunizationRecommendation_RecommendationSchema =
  ImmunizationRecommendation_RecommendationSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation>;
