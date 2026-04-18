// Profile: http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis
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
import type { EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate } from "./EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate";
import { EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchemaInternal } from "./EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate";

/** The estimated effect of the exposure variant. */
export interface EffectEvidenceSynthesis_EffectEstimate
	extends BackboneElement {
	/** Human-readable summary of effect estimate. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A description of the precision of the estimate for the effect. */
	precisionEstimate?: Array<EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate>;
	/** Examples include relative risk and mean difference. */
	type?: CodeableConcept;
	/** Specifies the UCUM unit for the outcome. */
	unitOfMeasure?: CodeableConcept;
	/** The point estimate of the effect estimate. */
	value?: number;
	/** Extensions for value */
	_value?: Element;
	/** Used to define variant exposure states such as low-risk state. */
	variantState?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getEffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema =
	(): z.ZodType<EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate> =>
		EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchemaInternal as z.ZodType<EffectEvidenceSynthesis_EffectEstimate_PrecisionEstimate>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const EffectEvidenceSynthesis_EffectEstimateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		precisionEstimate: z
			.lazy(getEffectEvidenceSynthesis_EffectEstimate_PrecisionEstimateSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		unitOfMeasure: z.lazy(getCodeableConceptSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
		variantState: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const EffectEvidenceSynthesis_EffectEstimateSchema =
	EffectEvidenceSynthesis_EffectEstimateSchemaInternal as z.ZodType<EffectEvidenceSynthesis_EffectEstimate>;
