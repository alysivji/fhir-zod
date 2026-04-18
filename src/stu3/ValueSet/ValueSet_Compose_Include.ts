// Source: https://hl7.org/fhir/STU3/valueset-definitions.html#ValueSet.compose.include
// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
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
  /** Select concepts by specify a matching criteria based on the properties (including relationships) defined by the system. If multiple filters are specified, they SHALL all be true. */
  filter?: Array<ValueSet_Compose_Include_Filter>;
  /** An absolute URI which is the code system from which the selected codes come from. */
  system?: string;
  /** Extensions for system */
  _system?: Element;
  /** Selects concepts found in this value set. This is an absolute URI that is a reference to ValueSet.url. */
  valueSet?: Array<string | null>;
  /** Extensions for valueSet */
  _valueSet?: Array<Element | null>;
  /** The version of the code system that the codes are selected from. */
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
    filter: z.lazy(getValueSet_Compose_Include_FilterSchema).array().optional(),
    system: fhirUri().optional(),
    _system: z.lazy(getElementSchema).optional(),
    valueSet: fhirUri().nullable().array().optional(),
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
