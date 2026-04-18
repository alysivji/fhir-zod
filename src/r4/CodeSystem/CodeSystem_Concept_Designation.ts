// Profile: http://hl7.org/fhir/StructureDefinition/CodeSystem
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirCode, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc. */
export interface CodeSystem_Concept_Designation extends BackboneElement {
  /** The language this designation is defined for. */
  language?: string;
  /** Extensions for language */
  _language?: Element;
  /** A code that details how this designation would be used. */
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
export const CodeSystem_Concept_DesignationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    use: z.lazy(getCodingSchema).optional(),
    value: fhirString(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const CodeSystem_Concept_DesignationSchema =
  CodeSystem_Concept_DesignationSchemaInternal as z.ZodType<CodeSystem_Concept_Designation>;
