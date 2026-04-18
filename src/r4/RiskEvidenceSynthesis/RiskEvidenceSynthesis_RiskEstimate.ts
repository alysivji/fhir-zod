// Profile: http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate } from "./RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate";
import { RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchemaInternal } from "./RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate";

/** The estimated risk of the outcome. */
export interface RiskEvidenceSynthesis_RiskEstimate extends BackboneElement {
  /** The sample size for the group that was measured for this risk estimate. */
  denominatorCount?: number;
  /** Extensions for denominatorCount */
  _denominatorCount?: Element;
  /** Human-readable summary of risk estimate. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The number of group members with the outcome of interest. */
  numeratorCount?: number;
  /** Extensions for numeratorCount */
  _numeratorCount?: Element;
  /** A description of the precision of the estimate for the effect. */
  precisionEstimate?: Array<RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate>;
  /** Examples include proportion and mean. */
  type?: CodeableConcept;
  /** Specifies the UCUM unit for the outcome. */
  unitOfMeasure?: CodeableConcept;
  /** The point estimate of the risk estimate. */
  value?: number;
  /** Extensions for value */
  _value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getRiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchema =
  (): z.ZodType<RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate> =>
    RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchemaInternal as z.ZodType<RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate>;

/** @internal */
export const RiskEvidenceSynthesis_RiskEstimateSchemaInternal =
  BackboneElementSchemaInternal.extend({
    denominatorCount: z.number().int().optional(),
    _denominatorCount: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    numeratorCount: z.number().int().optional(),
    _numeratorCount: z.lazy(getElementSchema).optional(),
    precisionEstimate: z
      .lazy(getRiskEvidenceSynthesis_RiskEstimate_PrecisionEstimateSchema)
      .array()
      .optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    unitOfMeasure: z.lazy(getCodeableConceptSchema).optional(),
    value: z.number().optional(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const RiskEvidenceSynthesis_RiskEstimateSchema =
  RiskEvidenceSynthesis_RiskEstimateSchemaInternal as z.ZodType<RiskEvidenceSynthesis_RiskEstimate>;
