// Profile: http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A description of the precision of the estimate for the effect. */
export interface EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate
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
export const EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		from: z.number().optional(),
		_from: z.lazy(getElementSchema).optional(),
		level: z.number().optional(),
		_level: z.lazy(getElementSchema).optional(),
		to: z.number().optional(),
		_to: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema =
	EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchemaInternal as z.ZodType<EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate>;
