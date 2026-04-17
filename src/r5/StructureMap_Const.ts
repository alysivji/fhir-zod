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

/** Definition of a constant value used in the map rules. */
export interface StructureMap_Const extends BackboneElement {
  /** Other maps used by this map (canonical URLs). */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** A FHIRPath expression that is the value of this variable. */
  value?: string;
  /** Extensions for value */
  _value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_ConstSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirId().optional(),
    _name: z.lazy(getElementSchema).optional(),
    value: fhirString().optional(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const StructureMap_ConstSchema =
  StructureMap_ConstSchemaInternal as z.ZodType<StructureMap_Const>;
