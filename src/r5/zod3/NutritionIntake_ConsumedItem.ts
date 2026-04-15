// Profile: http://hl7.org/fhir/StructureDefinition/NutritionIntake
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** What food or fluid product or item was consumed. */
export interface NutritionIntake_ConsumedItem extends BackboneElement {
	/** Quantity of the specified food. */
	amount?: Quantity;
	/** Indicator when a patient is in a setting where it is helpful to know if food was not consumed, such as it was refused, held (as in tube feedings), or otherwise not provided. If a consumption is being recorded from an app, such as MyFitnessPal, this indicator will likely not be used. */
	notConsumed?: boolean;
	/** Extensions for notConsumed */
	_notConsumed?: Element;
	/** Document the reason the food or fluid was not consumed, such as refused, held, etc. */
	notConsumedReason?: CodeableConcept;
	/** Identifies the food or fluid product that was consumed. This is potentially a link to a resource representing the details of the food product (TBD) or a simple attribute carrying a code that identifies the food from a known list of foods. */
	nutritionProduct: CodeableReference;
	/** Rate at which enteral feeding was administered. */
	rate?: Quantity;
	/** Scheduled frequency of consumption. */
	schedule?: Timing;
	/** Indicates what a category of item that was consumed: e.g., food, fluid, enteral, etc. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const NutritionIntake_ConsumedItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getQuantitySchema).optional(),
		notConsumed: z.boolean().optional(),
		_notConsumed: z.lazy(getElementSchema).optional(),
		notConsumedReason: z.lazy(getCodeableConceptSchema).optional(),
		nutritionProduct: z.lazy(getCodeableReferenceSchema),
		rate: z.lazy(getQuantitySchema).optional(),
		schedule: z.lazy(getTimingSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const NutritionIntake_ConsumedItemSchema =
	NutritionIntake_ConsumedItemSchemaInternal as z.ZodType<NutritionIntake_ConsumedItem>;
