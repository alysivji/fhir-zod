// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation. */
export interface CapabilityStatement_Rest_Resource_SearchParam
  extends BackboneElement {
  /** An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url]()). */
  definition?: string;
  /** Extensions for definition */
  _definition?: Element;
  /** This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** The name of the search parameter used in the interface. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The type of value a search parameter refers to, and how the content is interpreted. */
  type:
    | "composite"
    | "date"
    | "number"
    | "quantity"
    | "reference"
    | "string"
    | "token"
    | "uri";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_Resource_SearchParamSchemaInternal =
  BackboneElementSchemaInternal.extend({
    definition: fhirUri().optional(),
    _definition: z.lazy(getElementSchema).optional(),
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.enum([
      "composite",
      "date",
      "number",
      "quantity",
      "reference",
      "string",
      "token",
      "uri",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const CapabilityStatement_Rest_Resource_SearchParamSchema =
  CapabilityStatement_Rest_Resource_SearchParamSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_SearchParam>;
