// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion. */
export interface ValueSet_Expansion_Parameter extends BackboneElement {
  /** Name of the input parameter to the $expand operation; may be a server-assigned name for additional default or other server-supplied parameters used to control the expansion process. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The value of the parameter. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** The value of the parameter. */
  valueCode?: string;
  /** Extensions for valueCode */
  _valueCode?: Element;
  /** The value of the parameter. */
  valueDateTime?: string;
  /** Extensions for valueDateTime */
  _valueDateTime?: Element;
  /** The value of the parameter. */
  valueDecimal?: number;
  /** Extensions for valueDecimal */
  _valueDecimal?: Element;
  /** The value of the parameter. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** The value of the parameter. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
  /** The value of the parameter. */
  valueUri?: string;
  /** Extensions for valueUri */
  _valueUri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ValueSet_Expansion_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCode: fhirCode().optional(),
    _valueCode: z.lazy(getElementSchema).optional(),
    valueDateTime: fhirDateTime().optional(),
    _valueDateTime: z.lazy(getElementSchema).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(getElementSchema).optional(),
    valueInteger: z.number().int().optional(),
    _valueInteger: z.lazy(getElementSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
    valueUri: fhirUri().optional(),
    _valueUri: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueBoolean",
        "valueCode",
        "valueDateTime",
        "valueDecimal",
        "valueInteger",
        "valueString",
        "valueUri",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCode, valueDateTime, valueDecimal, valueInteger, valueString, valueUri may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const ValueSet_Expansion_ParameterSchema =
  ValueSet_Expansion_ParameterSchemaInternal as z.ZodType<ValueSet_Expansion_Parameter>;
