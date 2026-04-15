// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Schedule information for an enteral formula. */
export interface NutritionOrder_EnteralFormula_Administration_Schedule
	extends BackboneElement {
	/** Indicates whether the enteral formula is only taken when needed within a specific dosing schedule. */
	asNeeded?: boolean;
	/** Extensions for asNeeded */
	_asNeeded?: Element;
	/** Indicates whether the enteral formula is only taken based on a precondition for taking the enteral formula. */
	asNeededFor?: CodeableConcept;
	/** The time period and frequency at which the enteral formula should be given.  The enteral formula should be given for the combination of all schedules if more than one schedule is present. */
	timing?: Array<Timing>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const NutritionOrder_EnteralFormula_Administration_ScheduleSchemaInternal =
	BackboneElementSchemaInternal.extend({
		asNeeded: z.boolean().optional(),
		_asNeeded: z.lazy(getElementSchema).optional(),
		asNeededFor: z.lazy(getCodeableConceptSchema).optional(),
		timing: z.lazy(getTimingSchema).array().optional(),
	}).strict();

export const NutritionOrder_EnteralFormula_Administration_ScheduleSchema =
	NutritionOrder_EnteralFormula_Administration_ScheduleSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Administration_Schedule>;
