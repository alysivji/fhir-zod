// Source: https://hl7.org/fhir/R5/valueset-definitions.html#ValueSet.compose.include
// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ValueSet_Compose_Include_Concept } from "./ValueSet_Compose_Include_Concept";
import { ValueSet_Compose_Include_ConceptSchemaInternal } from "./ValueSet_Compose_Include_Concept";
import type { ValueSet_Compose_Include_Filter } from "./ValueSet_Compose_Include_Filter";
import { ValueSet_Compose_Include_FilterSchemaInternal } from "./ValueSet_Compose_Include_Filter";

/** Include one or more codes from a code system or other value set(s). */
export interface ValueSet_Compose_Include extends BackboneElement {
  /** Specifies a concept to be included or excluded. */
  concept?: Array<ValueSet_Compose_Include_Concept>;
  /** A copyright statement for the specific code system asserted by the containing ValueSet.compose.include element's system value (if the associated ValueSet.compose.include.version element is not present); or the code system and version combination (if the associated ValueSet.compose.include.version element is present). */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** Select concepts by specifying a matching criterion based on the properties (including relationships) defined by the system, or on filters defined by the system. If multiple filters are specified within the include, they SHALL all be true. */
  filter?: Array<ValueSet_Compose_Include_Filter>;
  /** An absolute URI which is the code system from which the selected codes come from. */
  system?: string;
  /** Extensions for system */
  _system?: Element;
  /** Selects the concepts found in this value set (based on its value set definition). This is an absolute URI that is a reference to ValueSet.url.  If multiple value sets are specified this includes the intersection of the contents of all of the referenced value sets. */
  valueSet?: Array<string | null>;
  /** Extensions for valueSet */
  _valueSet?: Array<Element | null>;
  /** The version of the code system that the codes are selected from, or the special version '*' for all versions. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getValueSet_Compose_Include_ConceptSchema =
  (): z.ZodType<ValueSet_Compose_Include_Concept> =>
    ValueSet_Compose_Include_ConceptSchemaInternal as z.ZodType<ValueSet_Compose_Include_Concept>;
const getValueSet_Compose_Include_FilterSchema =
  (): z.ZodType<ValueSet_Compose_Include_Filter> =>
    ValueSet_Compose_Include_FilterSchemaInternal as z.ZodType<ValueSet_Compose_Include_Filter>;

/** @internal */
export const ValueSet_Compose_IncludeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    concept: z
      .lazy(getValueSet_Compose_Include_ConceptSchema)
      .array()
      .optional(),
    copyright: fhirString().optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    filter: z.lazy(getValueSet_Compose_Include_FilterSchema).array().optional(),
    system: fhirUri().optional(),
    _system: z.lazy(getElementSchema).optional(),
    valueSet: fhirCanonical().nullable().array().optional(),
    _valueSet: z.lazy(getElementSchema).nullable().array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.valueSet,
        record._valueSet,
        "valueSet",
        "_valueSet",
        ctx,
      );
    });

export const ValueSet_Compose_IncludeSchema =
  ValueSet_Compose_IncludeSchemaInternal as z.ZodType<ValueSet_Compose_Include>;
