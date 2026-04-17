// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Status of study with time for that status. */
export interface ResearchStudy_ProgressStatus extends BackboneElement {
  /** An indication of whether or not the date is a known date when the state changed or will change. A value of true indicates a known date. A value of false indicates an estimated date. */
  actual?: boolean;
  /** Extensions for actual */
  _actual?: Element;
  /** Date range. */
  period?: Period;
  /** Label for status or state (e.g. recruitment status). */
  state: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const ResearchStudy_ProgressStatusSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actual: z.boolean().optional(),
    _actual: z.lazy(getElementSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    state: z.lazy(getCodeableConceptSchema),
  }).strict();

export const ResearchStudy_ProgressStatusSchema =
  ResearchStudy_ProgressStatusSchemaInternal as z.ZodType<ResearchStudy_ProgressStatus>;
