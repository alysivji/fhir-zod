// Profile: http://hl7.org/fhir/StructureDefinition/ServiceRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";

/** The parameter details for the service being requested. */
export interface ServiceRequest_OrderDetail_Parameter extends BackboneElement {
  /** A value representing the additional detail or instructions for the order (e.g., catheter insertion, body elevation, descriptive device configuration and/or setting instructions). */
  code: CodeableConcept;
  /** Indicates a value for the order detail. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** Indicates a value for the order detail. */
  valueCodeableConcept?: CodeableConcept;
  /** Indicates a value for the order detail. */
  valuePeriod?: Period;
  /** Indicates a value for the order detail. */
  valueQuantity?: Quantity;
  /** Indicates a value for the order detail. */
  valueRange?: Range;
  /** Indicates a value for the order detail. */
  valueRatio?: Ratio;
  /** Indicates a value for the order detail. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const ServiceRequest_OrderDetail_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valuePeriod: z.lazy(getPeriodSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueRange: z.lazy(getRangeSchema).optional(),
    valueRatio: z.lazy(getRatioSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueBoolean",
        "valueCodeableConcept",
        "valuePeriod",
        "valueQuantity",
        "valueRange",
        "valueRatio",
        "valueString",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueBoolean, valueCodeableConcept, valuePeriod, valueQuantity, valueRange, valueRatio, valueString must be present for value[x]",
          path: ["valueBoolean"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCodeableConcept, valuePeriod, valueQuantity, valueRange, valueRatio, valueString may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const ServiceRequest_OrderDetail_ParameterSchema =
  ServiceRequest_OrderDetail_ParameterSchemaInternal as z.ZodType<ServiceRequest_OrderDetail_Parameter>;
