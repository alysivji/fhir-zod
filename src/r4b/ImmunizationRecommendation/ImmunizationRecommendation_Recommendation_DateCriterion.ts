// Source: https://hl7.org/fhir/R4B/immunizationrecommendation-definitions.html#ImmunizationRecommendation.recommendation.dateCriterion
// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc. */
export interface ImmunizationRecommendation_Recommendation_DateCriterion
  extends BackboneElement {
  /** Date classification of recommendation.  For example, earliest date to give, latest date to give, etc. */
  code: CodeableConcept;
  /** The date whose meaning is specified by dateCriterion.code. */
  value: string;
  /** Extensions for value */
  _value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImmunizationRecommendation_Recommendation_DateCriterionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    value: fhirDateTime(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImmunizationRecommendation_Recommendation_DateCriterionSchema =
  ImmunizationRecommendation_Recommendation_DateCriterionSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation_DateCriterion>;
