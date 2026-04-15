// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MeasureReport_Group_Stratifier_Stratum_Component } from "./MeasureReport_Group_Stratifier_Stratum_Component";
import { MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum_Component";
import type { MeasureReport_Group_Stratifier_Stratum_Population } from "./MeasureReport_Group_Stratifier_Stratum_Population";
import { MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum_Population";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value. */
export interface MeasureReport_Group_Stratifier_Stratum
	extends BackboneElement {
	/** A stratifier component value. */
	component?: Array<MeasureReport_Group_Stratifier_Stratum_Component>;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScoreCodeableConcept?: CodeableConcept;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScoreDateTime?: string;
	/** Extensions for measureScoreDateTime */
	_measureScoreDateTime?: Element;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScoreDuration?: Duration;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScorePeriod?: Period;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScoreQuantity?: Quantity;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScoreRange?: Range;
	/** The populations that make up the stratum, one for each type of population appropriate to the measure. */
	population?: Array<MeasureReport_Group_Stratifier_Stratum_Population>;
	/** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	valueCodeableConcept?: CodeableConcept;
	/** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	valueQuantity?: Quantity;
	/** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	valueRange?: Range;
	/** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	valueReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMeasureReport_Group_Stratifier_Stratum_ComponentSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier_Stratum_Component> =>
		MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Component>;
const getMeasureReport_Group_Stratifier_Stratum_PopulationSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population> =>
		MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReport_Group_Stratifier_StratumSchemaInternal =
	BackboneElementSchemaInternal.extend({
		component: z
			.lazy(getMeasureReport_Group_Stratifier_Stratum_ComponentSchema)
			.array()
			.optional(),
		measureScoreCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		measureScoreDateTime: fhirDateTime().optional(),
		_measureScoreDateTime: z.lazy(getElementSchema).optional(),
		measureScoreDuration: z.lazy(getDurationSchema).optional(),
		measureScorePeriod: z.lazy(getPeriodSchema).optional(),
		measureScoreQuantity: z.lazy(getQuantitySchema).optional(),
		measureScoreRange: z.lazy(getRangeSchema).optional(),
		population: z
			.lazy(getMeasureReport_Group_Stratifier_Stratum_PopulationSchema)
			.array()
			.optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
		valueReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const measureScore_x_Present = [
				"measureScoreCodeableConcept",
				"measureScoreDateTime",
				"measureScoreDuration",
				"measureScorePeriod",
				"measureScoreQuantity",
				"measureScoreRange",
			].filter((field) => record[field] !== undefined);
			if (measureScore_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of measureScoreCodeableConcept, measureScoreDateTime, measureScoreDuration, measureScorePeriod, measureScoreQuantity, measureScoreRange may be present for measureScore[x]",
					path: [measureScore_x_Present[0]],
				});
			}
			const value_x_Present = [
				"valueBoolean",
				"valueCodeableConcept",
				"valueQuantity",
				"valueRange",
				"valueReference",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueBoolean, valueCodeableConcept, valueQuantity, valueRange, valueReference may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const MeasureReport_Group_Stratifier_StratumSchema =
	MeasureReport_Group_Stratifier_StratumSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum>;
