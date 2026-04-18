// Source: https://hl7.org/fhir/R4B/observation-definitions.html#Observation.component
// Profile: http://hl7.org/fhir/StructureDefinition/Observation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import {
  fhirDateTime,
  fhirString,
  fhirTime,
} from "../../shared/fhir-primitives";
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
import type { SampledData } from "../SampledData";
import { SampledDataSchemaInternal } from "../SampledData";

/** Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations. */
export interface Observation_Component extends BackboneElement {
  /** Describes what was observed. Sometimes this is called the observation "code". */
  code: CodeableConcept;
  /** Provides a reason why the expected value in the element Observation.component.value[x] is missing. */
  dataAbsentReason?: CodeableConcept;
  /** A categorical assessment of an observation value.  For example, high, low, normal. */
  interpretation?: Array<CodeableConcept>;
  /** Guidance on how to interpret the value by comparison to a normal or recommended range. */
  referenceRange?: Array<unknown>;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueCodeableConcept?: CodeableConcept;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueDateTime?: string;
  /** Extensions for valueDateTime */
  _valueDateTime?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valuePeriod?: Period;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueQuantity?: Quantity;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueRange?: Range;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueRatio?: Ratio;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueSampledData?: SampledData;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueTime?: string;
  /** Extensions for valueTime */
  _valueTime?: Element;
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
const getSampledDataSchema = (): z.ZodType<SampledData> =>
  SampledDataSchemaInternal as z.ZodType<SampledData>;

/** @internal */
export const Observation_ComponentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    dataAbsentReason: z.lazy(getCodeableConceptSchema).optional(),
    interpretation: z.lazy(getCodeableConceptSchema).array().optional(),
    referenceRange: z.unknown().array().optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueDateTime: fhirDateTime().optional(),
    _valueDateTime: z.lazy(getElementSchema).optional(),
    valueInteger: z.number().int().optional(),
    _valueInteger: z.lazy(getElementSchema).optional(),
    valuePeriod: z.lazy(getPeriodSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueRange: z.lazy(getRangeSchema).optional(),
    valueRatio: z.lazy(getRatioSchema).optional(),
    valueSampledData: z.lazy(getSampledDataSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
    valueTime: fhirTime().optional(),
    _valueTime: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueBoolean",
        "valueCodeableConcept",
        "valueDateTime",
        "valueInteger",
        "valuePeriod",
        "valueQuantity",
        "valueRange",
        "valueRatio",
        "valueSampledData",
        "valueString",
        "valueTime",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCodeableConcept, valueDateTime, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueSampledData, valueString, valueTime may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const Observation_ComponentSchema =
  Observation_ComponentSchemaInternal as z.ZodType<Observation_Component>;
