// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about the base definition of the element, provided to make it unnecessary for tools to trace the deviation of the element through the derived and related profiles. When the element definition is not the original definition of an element - i.g. either in a constraint on another type, or for elements from a super type in a snap shot - then the information in provided in the element definition may be different to the base definition. On the original definition of the element, it will be same. */
export interface ElementDefinition_Base extends Element {
  /** Maximum cardinality of the base element identified by the path. */
  max: string;
  /** Extensions for max */
  _max?: Element;
  /** Minimum cardinality of the base element identified by the path. */
  min: number;
  /** Extensions for min */
  _min?: Element;
  /** The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base. */
  path: string;
  /** Extensions for path */
  _path?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ElementDefinition_BaseSchemaInternal =
  ElementSchemaInternal.extend({
    max: fhirString(),
    _max: z.lazy(getElementSchema).optional(),
    min: z.number().int().nonnegative(),
    _min: z.lazy(getElementSchema).optional(),
    path: fhirString(),
    _path: z.lazy(getElementSchema).optional(),
  }).strict();

export const ElementDefinition_BaseSchema =
  ElementDefinition_BaseSchemaInternal as z.ZodType<ElementDefinition_Base>;
