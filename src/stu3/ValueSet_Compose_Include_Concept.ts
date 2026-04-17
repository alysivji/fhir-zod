// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ValueSet_Compose_Include_Concept_Designation } from "./ValueSet_Compose_Include_Concept_Designation";
import { ValueSet_Compose_Include_Concept_DesignationSchemaInternal } from "./ValueSet_Compose_Include_Concept_Designation";

/** Specifies a concept to be included or excluded. */
export interface ValueSet_Compose_Include_Concept extends BackboneElement {
  /** Specifies a code for the concept to be included or excluded. */
  code: string;
  /** Extensions for code */
  _code?: Element;
  /** Additional representations for this concept when used in this value set - other languages, aliases, specialized purposes, used for particular purposes, etc. */
  designation?: Array<ValueSet_Compose_Include_Concept_Designation>;
  /** The text to display to the user for this concept in the context of this valueset. If no display is provided, then applications using the value set use the display specified for the code by the system. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getValueSet_Compose_Include_Concept_DesignationSchema =
  (): z.ZodType<ValueSet_Compose_Include_Concept_Designation> =>
    ValueSet_Compose_Include_Concept_DesignationSchemaInternal as z.ZodType<ValueSet_Compose_Include_Concept_Designation>;

/** @internal */
export const ValueSet_Compose_Include_ConceptSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: fhirCode(),
    _code: z.lazy(getElementSchema).optional(),
    designation: z
      .lazy(getValueSet_Compose_Include_Concept_DesignationSchema)
      .array()
      .optional(),
    display: fhirString().optional(),
    _display: z.lazy(getElementSchema).optional(),
  }).strict();

export const ValueSet_Compose_Include_ConceptSchema =
  ValueSet_Compose_Include_ConceptSchemaInternal as z.ZodType<ValueSet_Compose_Include_Concept>;
