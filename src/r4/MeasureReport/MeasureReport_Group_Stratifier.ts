// Source: https://hl7.org/fhir/R4/measurereport-definitions.html#MeasureReport.group.stratifier
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { MeasureReport_Group_Stratifier_Stratum } from "./MeasureReport_Group_Stratifier_Stratum";
import { MeasureReport_Group_Stratifier_StratumSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum";

/** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure. */
export interface MeasureReport_Group_Stratifier extends BackboneElement {
  /** The meaning of this stratifier, as defined in the measure definition. */
  code?: Array<CodeableConcept>;
  /** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value. */
  stratum?: Array<MeasureReport_Group_Stratifier_Stratum>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMeasureReport_Group_Stratifier_StratumSchema =
  (): z.ZodType<MeasureReport_Group_Stratifier_Stratum> =>
    MeasureReport_Group_Stratifier_StratumSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum>;

/** @internal */
export const MeasureReport_Group_StratifierSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    stratum: z
      .lazy(getMeasureReport_Group_Stratifier_StratumSchema)
      .array()
      .optional(),
  }).strict();

export const MeasureReport_Group_StratifierSchema =
  MeasureReport_Group_StratifierSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier>;
