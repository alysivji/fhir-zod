// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
  fhirString,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified data attribute can be resolved, and it has the specified value. */
export interface ConceptMap_Group_Element_Target_DependsOn
  extends BackboneElement {
  /** A reference to the additional attribute that holds a value the map depends on. */
  attribute: string;
  /** Extensions for attribute */
  _attribute?: Element;
  /** Data element value that the map depends on / produces. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** Data element value that the map depends on / produces. */
  valueCode?: string;
  /** Extensions for valueCode */
  _valueCode?: Element;
  /** Data element value that the map depends on / produces. */
  valueCoding?: Coding;
  /** Data element value that the map depends on / produces. */
  valueQuantity?: Quantity;
  /** This mapping applies if the data element value is a code from this value set. */
  valueSet?: string;
  /** Extensions for valueSet */
  _valueSet?: Element;
  /** Data element value that the map depends on / produces. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ConceptMap_Group_Element_Target_DependsOnSchemaInternal =
  BackboneElementSchemaInternal.extend({
    attribute: fhirCode(),
    _attribute: z.lazy(getElementSchema).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCode: fhirCode().optional(),
    _valueCode: z.lazy(getElementSchema).optional(),
    valueCoding: z.lazy(getCodingSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueSet: fhirCanonical().optional(),
    _valueSet: z.lazy(getElementSchema).optional(),
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
        "valueQuantity",
        "valueString",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCode, valueCoding, valueQuantity, valueString may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const ConceptMap_Group_Element_Target_DependsOnSchema =
  ConceptMap_Group_Element_Target_DependsOnSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target_DependsOn>;
