// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirCode, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Supported expansion parameter. */
export interface TerminologyCapabilities_Expansion_Parameter
  extends BackboneElement {
  /** Description of support for parameter. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** Name of the supported expansion parameter. */
  name: string;
  /** Extensions for name */
  _name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_Expansion_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    name: fhirCode(),
    _name: z.lazy(getElementSchema).optional(),
  }).strict();

export const TerminologyCapabilities_Expansion_ParameterSchema =
  TerminologyCapabilities_Expansion_ParameterSchemaInternal as z.ZodType<TerminologyCapabilities_Expansion_Parameter>;
