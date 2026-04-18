// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";

/** Indicates what should be done and within what timeframe. */
export interface PlanDefinition_Goal_Target extends BackboneElement {
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailBoolean?: boolean;
  /** Extensions for detailBoolean */
  _detailBoolean?: Element;
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailCodeableConcept?: CodeableConcept;
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailInteger?: number;
  /** Extensions for detailInteger */
  _detailInteger?: Element;
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailQuantity?: Quantity;
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailRange?: Range;
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailRatio?: Ratio;
  /** The target value of the measure to be achieved to signify fulfillment of the goal, e.g. 150 pounds or 7.0%, or in the case of pharmaceutical quality - NMT 0.6%, Clear solution, etc. Either the high or low or both values of the range can be specified. When a low value is missing, it indicates that the goal is achieved at any value at or below the high value. Similarly, if the high value is missing, it indicates that the goal is achieved at any value at or above the low value. */
  detailString?: string;
  /** Extensions for detailString */
  _detailString?: Element;
  /** Indicates the timeframe after the start of the goal in which the goal should be met. */
  due?: Duration;
  /** The parameter whose value is to be tracked, e.g. body weight, blood pressure, or hemoglobin A1c level. */
  measure?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const PlanDefinition_Goal_TargetSchemaInternal =
  BackboneElementSchemaInternal.extend({
    detailBoolean: z.boolean().optional(),
    _detailBoolean: z.lazy(getElementSchema).optional(),
    detailCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    detailInteger: z.number().int().optional(),
    _detailInteger: z.lazy(getElementSchema).optional(),
    detailQuantity: z.lazy(getQuantitySchema).optional(),
    detailRange: z.lazy(getRangeSchema).optional(),
    detailRatio: z.lazy(getRatioSchema).optional(),
    detailString: fhirString().optional(),
    _detailString: z.lazy(getElementSchema).optional(),
    due: z.lazy(getDurationSchema).optional(),
    measure: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const detail_x_Present = [
        "detailBoolean",
        "detailCodeableConcept",
        "detailInteger",
        "detailQuantity",
        "detailRange",
        "detailRatio",
        "detailString",
      ].filter((field) => record[field] !== undefined);
      if (detail_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of detailBoolean, detailCodeableConcept, detailInteger, detailQuantity, detailRange, detailRatio, detailString may be present for detail[x]",
          path: [detail_x_Present[0]],
        });
      }
    });

export const PlanDefinition_Goal_TargetSchema =
  PlanDefinition_Goal_TargetSchemaInternal as z.ZodType<PlanDefinition_Goal_Target>;
