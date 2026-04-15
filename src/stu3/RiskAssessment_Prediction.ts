// Profile: http://hl7.org/fhir/StructureDefinition/RiskAssessment
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Describes the expected outcome for the subject. */
export interface RiskAssessment_Prediction extends BackboneElement {
	/** One of the potential outcomes for the patient (e.g. remission, death,  a particular condition). */
	outcome: CodeableConcept;
	/** How likely is the outcome (in the specified timeframe). */
	probabilityDecimal?: number;
	/** Extensions for probabilityDecimal */
	_probabilityDecimal?: Element;
	/** How likely is the outcome (in the specified timeframe). */
	probabilityRange?: Range;
	/** How likely is the outcome (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, high). */
	qualitativeRisk?: CodeableConcept;
	/** Additional information explaining the basis for the prediction. */
	rationale?: string;
	/** Extensions for rationale */
	_rationale?: Element;
	/** Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.). */
	relativeRisk?: number;
	/** Extensions for relativeRisk */
	_relativeRisk?: Element;
	/** Indicates the period of time or age range of the subject to which the specified probability applies. */
	whenPeriod?: Period;
	/** Indicates the period of time or age range of the subject to which the specified probability applies. */
	whenRange?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const RiskAssessment_PredictionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		outcome: z.lazy(getCodeableConceptSchema),
		probabilityDecimal: z.number().optional(),
		_probabilityDecimal: z.lazy(getElementSchema).optional(),
		probabilityRange: z.lazy(getRangeSchema).optional(),
		qualitativeRisk: z.lazy(getCodeableConceptSchema).optional(),
		rationale: fhirString().optional(),
		_rationale: z.lazy(getElementSchema).optional(),
		relativeRisk: z.number().optional(),
		_relativeRisk: z.lazy(getElementSchema).optional(),
		whenPeriod: z.lazy(getPeriodSchema).optional(),
		whenRange: z.lazy(getRangeSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const probability_x_Present = [
				"probabilityDecimal",
				"probabilityRange",
			].filter((field) => record[field] !== undefined);
			if (probability_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of probabilityDecimal, probabilityRange may be present for probability[x]",
					path: [probability_x_Present[0]],
				});
			}
			const when_x_Present = ["whenPeriod", "whenRange"].filter(
				(field) => record[field] !== undefined,
			);
			if (when_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of whenPeriod, whenRange may be present for when[x]",
					path: [when_x_Present[0]],
				});
			}
		});

export const RiskAssessment_PredictionSchema =
	RiskAssessment_PredictionSchemaInternal as z.ZodType<RiskAssessment_Prediction>;
