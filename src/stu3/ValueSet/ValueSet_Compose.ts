// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ValueSet_Compose_Include } from "./ValueSet_Compose_Include";
import { ValueSet_Compose_IncludeSchemaInternal } from "./ValueSet_Compose_Include";

/** A set of criteria that define the content logical definition of the value set by including or excluding codes from outside this value set. This I also known as the "Content Logical Definition" (CLD). */
export interface ValueSet_Compose extends BackboneElement {
  /** Exclude one or more codes from the value set based on code system filters and/or other value sets. */
  exclude?: Array<unknown>;
  /** Whether inactive codes - codes that are not approved for current use - are in the value set. If inactive = true, inactive codes are to be included in the expansion, if inactive = false, the inactive codes will not be included in the expansion. If absent, the behavior is determined by the implementation, or by the applicable ExpansionProfile (but generally, inactive codes would be expected to be included). */
  inactive?: boolean;
  /** Extensions for inactive */
  _inactive?: Element;
  /** Include one or more codes from a code system or other value set(s). */
  include: Array<ValueSet_Compose_Include>;
  /** If a locked date is defined, then the Content Logical Definition must be evaluated using the current version as of the locked date for referenced code system(s) and value set instances where ValueSet.compose.include.version is not defined. */
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
