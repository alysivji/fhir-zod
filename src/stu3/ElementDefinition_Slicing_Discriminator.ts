// Source: https://hl7.org/fhir/STU3/elementdefinition-definitions.html#ElementDefinition.slicing.discriminator
// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices. */
export interface ElementDefinition_Slicing_Discriminator extends Element {
  /** A FHIRPath expression, using a restricted subset of FHIRPath, that is used to identify the element on which discrimination is based. */
  path: string;
  /** Extensions for path */
  _path?: Element;
  /** How the element value is interpreted when discrimination is evaluated. */
  type: "exists" | "pattern" | "profile" | "type" | "value";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ElementDefinition_Slicing_DiscriminatorSchemaInternal =
  ElementSchemaInternal.extend({
    path: fhirString(),
    _path: z.lazy(getElementSchema).optional(),
    type: z.enum(["exists", "pattern", "profile", "type", "value"]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const ElementDefinition_Slicing_DiscriminatorSchema =
  ElementDefinition_Slicing_DiscriminatorSchemaInternal as z.ZodType<ElementDefinition_Slicing_Discriminator>;
