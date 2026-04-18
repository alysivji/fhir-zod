// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Parameters to the transform. */
export interface StructureMap_Group_Rule_Target_Parameter
  extends BackboneElement {
  /** Parameter value - variable or literal. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** Parameter value - variable or literal. */
  valueDecimal?: number;
  /** Extensions for valueDecimal */
  _valueDecimal?: Element;
  /** Parameter value - variable or literal. */
  valueId?: string;
  /** Extensions for valueId */
  _valueId?: Element;
  /** Parameter value - variable or literal. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** Parameter value - variable or literal. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_Group_Rule_Target_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueDecimal: z.number().optional(),
    _valueDecimal: z.lazy(getElementSchema).optional(),
    valueId: fhirId().optional(),
    _valueId: z.lazy(getElementSchema).optional(),
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
        "valueDecimal",
        "valueId",
        "valueInteger",
        "valueString",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueBoolean, valueDecimal, valueId, valueInteger, valueString must be present for value[x]",
          path: ["valueBoolean"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueDecimal, valueId, valueInteger, valueString may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const StructureMap_Group_Rule_Target_ParameterSchema =
  StructureMap_Group_Rule_Target_ParameterSchemaInternal as z.ZodType<StructureMap_Group_Rule_Target_Parameter>;
