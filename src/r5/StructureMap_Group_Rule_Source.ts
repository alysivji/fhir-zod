// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirId, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Source inputs to the mapping. */
export interface StructureMap_Group_Rule_Source extends BackboneElement {
  /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing. */
  check?: string;
  /** Extensions for check */
  _check?: Element;
  /** FHIRPath expression  - must be true or the rule does not apply. */
  condition?: string;
  /** Extensions for condition */
  _condition?: Element;
  /** Type or variable this rule applies to. */
  context: string;
  /** Extensions for context */
  _context?: Element;
  /** A value to use if there is no existing value in the source object. */
  defaultValue?: string;
  /** Extensions for defaultValue */
  _defaultValue?: Element;
  /** Optional field for this source. */
  element?: string;
  /** Extensions for element */
  _element?: Element;
  /** How to handle the list mode for this element. */
  listMode?: "first" | "last" | "not_first" | "not_last" | "only_one";
  /** Extensions for listMode */
  _listMode?: Element;
  /** A FHIRPath expression which specifies a message to put in the transform log when content matching the source rule is found. */
  logMessage?: string;
  /** Extensions for logMessage */
  _logMessage?: Element;
  /** Specified maximum cardinality for the element - a number or a "*". This is optional; if present, it acts an implicit check on the input content (* just serves as documentation; it's the default value). */
  max?: string;
  /** Extensions for max */
  _max?: Element;
  /** Specified minimum cardinality for the element. This is optional; if present, it acts an implicit check on the input content. */
  min?: number;
  /** Extensions for min */
  _min?: Element;
  /** Specified type for the element. This works as a condition on the mapping - use for polymorphic elements. */
  type?: string;
  /** Extensions for type */
  _type?: Element;
  /** Named context for field, if a field is specified. */
  variable?: string;
  /** Extensions for variable */
  _variable?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_Group_Rule_SourceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    check: fhirString().optional(),
    _check: z.lazy(getElementSchema).optional(),
    condition: fhirString().optional(),
    _condition: z.lazy(getElementSchema).optional(),
    context: fhirId(),
    _context: z.lazy(getElementSchema).optional(),
    defaultValue: fhirString().optional(),
    _defaultValue: z.lazy(getElementSchema).optional(),
    element: fhirString().optional(),
    _element: z.lazy(getElementSchema).optional(),
    listMode: z
      .enum(["first", "last", "not_first", "not_last", "only_one"])
      .optional(),
    _listMode: z.lazy(getElementSchema).optional(),
    logMessage: fhirString().optional(),
    _logMessage: z.lazy(getElementSchema).optional(),
    max: fhirString().optional(),
    _max: z.lazy(getElementSchema).optional(),
    min: z.number().int().optional(),
    _min: z.lazy(getElementSchema).optional(),
    type: fhirString().optional(),
    _type: z.lazy(getElementSchema).optional(),
    variable: fhirId().optional(),
    _variable: z.lazy(getElementSchema).optional(),
  }).strict();

export const StructureMap_Group_Rule_SourceSchema =
  StructureMap_Group_Rule_SourceSchemaInternal as z.ZodType<StructureMap_Group_Rule_Source>;
