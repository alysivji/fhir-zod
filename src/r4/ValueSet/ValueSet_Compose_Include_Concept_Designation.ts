// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirCode, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc. */
export interface ValueSet_Compose_Include_Concept_Designation
  extends BackboneElement {
  /** The language this designation is defined for. */
  language?: string;
  /** Extensions for language */
  _language?: Element;
  /** A code that represents types of uses of designations. */
  use?: Coding;
  /** The text value for this designation. */
  value: string;
  /** Extensions for value */
  _value?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ValueSet_Compose_Include_Concept_DesignationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    use: z.lazy(getCodingSchema).optional(),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const ValueSet_Compose_Include_Concept_DesignationSchema =
  ValueSet_Compose_Include_Concept_DesignationSchemaInternal as z.ZodType<ValueSet_Compose_Include_Concept_Designation>;
