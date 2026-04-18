// Source: https://hl7.org/fhir/R5/nutritionorder-definitions.html#NutritionOrder.oralDiet.schedule
// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";

/** Schedule information for an oral diet. */
export interface NutritionOrder_OralDiet_Schedule extends BackboneElement {
  /** Indicates whether the product is only taken when needed within a specific dosing schedule. */
  asNeeded?: boolean;
  /** Extensions for asNeeded */
  _asNeeded?: Element;
  /** Indicates whether the product is only taken based on a precondition for taking the product. */
  asNeededFor?: CodeableConcept;
  /** The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present. */
  timing?: Array<Timing>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const NutritionOrder_OralDiet_ScheduleSchemaInternal =
  BackboneElementSchemaInternal.extend({
    asNeeded: z.boolean().optional(),
    _asNeeded: z.lazy(getElementSchema).optional(),
    asNeededFor: z.lazy(getCodeableConceptSchema).optional(),
    timing: z.lazy(getTimingSchema).array().optional(),
  }).strict();

export const NutritionOrder_OralDiet_ScheduleSchema =
  NutritionOrder_OralDiet_ScheduleSchemaInternal as z.ZodType<NutritionOrder_OralDiet_Schedule>;
