// Source: https://hl7.org/fhir/R4/riskevidencesynthesis-definitions.html#RiskEvidenceSynthesis.sampleSize
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A description of the size of the sample involved in the synthesis. */
export interface RiskEvidenceSynthesis_SampleSize extends BackboneElement {
  /** Human-readable summary of sample size. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Number of participants included in this evidence synthesis. */
  numberOfParticipants?: number;
  /** Extensions for numberOfParticipants */
  _numberOfParticipants?: Element;
  /** Number of studies included in this evidence synthesis. */
  numberOfStudies?: number;
  /** Extensions for numberOfStudies */
  _numberOfStudies?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const RiskEvidenceSynthesis_SampleSizeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    numberOfParticipants: z.number().int().optional(),
    _numberOfParticipants: z.lazy(getElementSchema).optional(),
    numberOfStudies: z.number().int().optional(),
    _numberOfStudies: z.lazy(getElementSchema).optional(),
  }).strict();

export const RiskEvidenceSynthesis_SampleSizeSchema =
  RiskEvidenceSynthesis_SampleSizeSchemaInternal as z.ZodType<RiskEvidenceSynthesis_SampleSize>;
