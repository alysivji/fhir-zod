// Profile: http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A description of the precision of the estimate for the effect. */
export interface RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate
  extends BackboneElement {
  /** Lower bound of confidence interval. */
  from?: number;
  /** Extensions for from */
  _from?: Element;
  /** Use 95 for a 95% confidence interval. */
  level?: number;
  /** Extensions for level */
  _level?: Element;
  /** Upper bound of confidence interval. */
  to?: number;
  /** Extensions for to */
  _to?: Element;
  /** Examples include confidence interval and interquartile range. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchemaInternal =
  BackboneElementSchemaInternal.extend({
    from: z.number().optional(),
    _from: z.lazy(getElementSchema).optional(),
    level: z.number().optional(),
    _level: z.lazy(getElementSchema).optional(),
    to: z.number().optional(),
    _to: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchema =
  RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchemaInternal as z.ZodType<RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate>;
