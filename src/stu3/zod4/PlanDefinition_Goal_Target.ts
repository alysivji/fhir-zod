// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Indicates what should be done and within what timeframe. */
export interface PlanDefinition_Goal_Target extends BackboneElement {
	/** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
	detailCodeableConcept?: CodeableConcept;
	/** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
	detailQuantity?: Quantity;
	/** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%. Either the high or low or both values of the range can be specified. Whan a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
	detailRange?: Range;
	/** Indicates the timeframe after the start of the goal in which the goal should be met. */
	due?: Duration;
	/** The parameter whose value is to be tracked, e.g. body weigth, blood pressure, or hemoglobin A1c level. */
	measure?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const PlanDefinition_Goal_TargetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		detailCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		detailQuantity: z.lazy(getQuantitySchema).optional(),
		detailRange: z.lazy(getRangeSchema).optional(),
		due: z.lazy(getDurationSchema).optional(),
		measure: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const detail_x_Present = [
				"detailCodeableConcept",
				"detailQuantity",
				"detailRange",
			].filter((field) => record[field] !== undefined);
			if (detail_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of detailCodeableConcept, detailQuantity, detailRange may be present for detail[x]",
					path: [detail_x_Present[0]],
				});
			}
		});

export const PlanDefinition_Goal_TargetSchema =
	PlanDefinition_Goal_TargetSchemaInternal as z.ZodType<PlanDefinition_Goal_Target>;
