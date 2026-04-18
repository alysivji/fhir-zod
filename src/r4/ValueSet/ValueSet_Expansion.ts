// Source: https://hl7.org/fhir/R4/valueset-definitions.html#ValueSet.expansion
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirDateTime, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ValueSet_Expansion_Contains } from "./ValueSet_Expansion_Contains";
import { ValueSet_Expansion_ContainsSchemaInternal } from "./ValueSet_Expansion_Contains";
import type { ValueSet_Expansion_Parameter } from "./ValueSet_Expansion_Parameter";
import { ValueSet_Expansion_ParameterSchemaInternal } from "./ValueSet_Expansion_Parameter";

/** A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed. */
export interface ValueSet_Expansion extends BackboneElement {
  /** The codes that are contained in the value set expansion. */
  contains?: Array<ValueSet_Expansion_Contains>;
  /** An identifier that uniquely identifies this expansion of the valueset, based on a unique combination of the provided parameters, the system default parameters, and the underlying system code system versions etc. Systems may re-use the same identifier as long as those factors remain the same, and the expansion is the same, but are not required to do so. This is a business identifier. */
  identifier?: string;
  /** Extensions for identifier */
  _identifier?: Element;
  /** If paging is being used, the offset at which this resource starts.  I.e. this resource is a partial view into the expansion. If paging is not being used, this element SHALL NOT be present. */
  offset?: number;
  /** Extensions for offset */
  _offset?: Element;
  /** A parameter that controlled the expansion process. These parameters may be used by users of expanded value sets to check whether the expansion is suitable for a particular purpose, or to pick the correct expansion. */
  parameter?: Array<ValueSet_Expansion_Parameter>;
  /** The time at which the expansion was produced by the expanding system. */
  timestamp: string;
  /** Extensions for timestamp */
  _timestamp?: Element;
  /** The total number of concepts in the expansion. If the number of concept nodes in this resource is less than the stated number, then the server can return more using the offset parameter. */
  total?: number;
  /** Extensions for total */
  _total?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getValueSet_Expansion_ContainsSchema =
  (): z.ZodType<ValueSet_Expansion_Contains> =>
    ValueSet_Expansion_ContainsSchemaInternal as z.ZodType<ValueSet_Expansion_Contains>;
const getValueSet_Expansion_ParameterSchema =
  (): z.ZodType<ValueSet_Expansion_Parameter> =>
    ValueSet_Expansion_ParameterSchemaInternal as z.ZodType<ValueSet_Expansion_Parameter>;

/** @internal */
export const ValueSet_ExpansionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    contains: z.lazy(getValueSet_Expansion_ContainsSchema).array().optional(),
    identifier: fhirUri().optional(),
    _identifier: z.lazy(getElementSchema).optional(),
    offset: z.number().int().optional(),
    _offset: z.lazy(getElementSchema).optional(),
    parameter: z.lazy(getValueSet_Expansion_ParameterSchema).array().optional(),
    timestamp: fhirDateTime(),
    _timestamp: z.lazy(getElementSchema).optional(),
    total: z.number().int().optional(),
    _total: z.lazy(getElementSchema).optional(),
  }).strict();

export const ValueSet_ExpansionSchema =
  ValueSet_ExpansionSchemaInternal as z.ZodType<ValueSet_Expansion>;
