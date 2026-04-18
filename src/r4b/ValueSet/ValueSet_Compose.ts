// Source: https://hl7.org/fhir/R4B/valueset-definitions.html#ValueSet.compose
// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ValueSet_Compose_Include } from "./ValueSet_Compose_Include";
import { ValueSet_Compose_IncludeSchemaInternal } from "./ValueSet_Compose_Include";

/** A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD). */
export interface ValueSet_Compose extends BackboneElement {
  /** Exclude one or more codes from the value set based on code system filters and/or other value sets. */
  exclude?: Array<unknown>;
  /** Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable $expand parameters (but generally, inactive codes would be expected to be included). */
  inactive?: boolean;
  /** Extensions for inactive */
  _inactive?: Element;
  /** Include one or more codes from a code system or other value set(s). */
  include: Array<ValueSet_Compose_Include>;
  /** The Locked Date is  the effective date that is used to determine the version of all referenced Code Systems and Value Set Definitions included in the compose that are not already tied to a specific version. */
  lockedDate?: string;
  /** Extensions for lockedDate */
  _lockedDate?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getValueSet_Compose_IncludeSchema =
  (): z.ZodType<ValueSet_Compose_Include> =>
    ValueSet_Compose_IncludeSchemaInternal as z.ZodType<ValueSet_Compose_Include>;

/** @internal */
export const ValueSet_ComposeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    exclude: z.unknown().array().optional(),
    inactive: z.boolean().optional(),
    _inactive: z.lazy(getElementSchema).optional(),
    include: z.lazy(getValueSet_Compose_IncludeSchema).array(),
    lockedDate: fhirDate().optional(),
    _lockedDate: z.lazy(getElementSchema).optional(),
  }).strict();

export const ValueSet_ComposeSchema =
  ValueSet_ComposeSchemaInternal as z.ZodType<ValueSet_Compose>;
