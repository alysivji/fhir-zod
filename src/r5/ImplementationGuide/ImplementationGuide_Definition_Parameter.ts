// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A set of parameters that defines how the implementation guide is built. The parameters are defined by the relevant tools that build the implementation guides. */
export interface ImplementationGuide_Definition_Parameter
  extends BackboneElement {
  /** A tool-specific code that defines the parameter. */
  code: Coding;
  /** Value for named type. */
  value: string;
  /** Extensions for value */
  _value?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Definition_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodingSchema),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const ImplementationGuide_Definition_ParameterSchema =
  ImplementationGuide_Definition_ParameterSchemaInternal as z.ZodType<ImplementationGuide_Definition_Parameter>;
