// Source: https://hl7.org/fhir/R5/valueset-definitions.html#ValueSet.expansion.contains.property
// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirString,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ValueSet_Expansion_Contains_Property_SubProperty } from "./ValueSet_Expansion_Contains_Property_SubProperty";
import { ValueSet_Expansion_Contains_Property_SubPropertySchemaInternal } from "./ValueSet_Expansion_Contains_Property_SubProperty";

/** A property value for this concept. */
export interface ValueSet_Expansion_Contains_Property extends BackboneElement {
  /** A code that is a reference to ValueSet.expansion.property.code. */
  code: string;
  /** Extensions for code */
  _code?: Element;
  /** A subproperty value for this concept. */
  subProperty?: Array<ValueSet_Expansion_Contains_Property_SubProperty>;
  /** The value of this property. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** The value of this property. */
  valueCode?: string;
  /** Extensions for valueCode */
  _valueCode?: Element;
  /** The value of this property. */
  valueCoding?: Coding;
  /** The value of this property. */
  valueDateTime?: string;
  /** Extensions for valueDateTime */
  _valueDateTime?: Element;
  /** The value of this property. */
  valueDecimal?: number;
  /** Extensions for valueDecimal */
  _valueDecimal?: Element;
  /** The value of this property. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** The value of this property. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getValueSet_Expansion_Contains_Property_SubPropertySchema =
  (): z.ZodType<ValueSet_Expansion_Contains_Property_SubProperty> =>
    ValueSet_Expansion_Contains_Property_SubPropertySchemaInternal as z.ZodType<ValueSet_Expansion_Contains_Property_SubProperty>;

/** @internal */
export const ValueSet_Expansion_Contains_PropertySchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: fhirCode(),
    _code: z.lazy(getElementSchema).optional(),
    subProperty: z
      .lazy(getValueSet_Expansion_Contains_Property_SubPropertySchema)
      .array()
      .optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCode: fhirCode().optional(),
    _valueCode: z.lazy(getElementSchema).optional(),
    valueCoding: z.lazy(getCodingSchema).optional(),
    valueDateTime: fhirDateTime().optional(),
    _valueDateTime: z.lazy(getElementSchema).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(getElementSchema).optional(),
    valueInteger: z.number().int().optional(),
    _valueInteger: z.lazy(getElementSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueBoolean",
        "valueCode",
        "valueCoding",
        "valueDateTime",
        "valueDecimal",
        "valueInteger",
        "valueString",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueBoolean, valueCode, valueCoding, valueDateTime, valueDecimal, valueInteger, valueString must be present for value[x]",
          path: ["valueBoolean"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCode, valueCoding, valueDateTime, valueDecimal, valueInteger, valueString may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const ValueSet_Expansion_Contains_PropertySchema =
  ValueSet_Expansion_Contains_PropertySchemaInternal as z.ZodType<ValueSet_Expansion_Contains_Property>;
