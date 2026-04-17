// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirCanonical, fhirCode, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** What to do when there is no mapping to a target concept from the source concept and ConceptMap.group.element.noMap is not true. This provides the "default" to be applied when there is no target concept mapping specified or the expansion of ConceptMap.group.element.target.valueSet is empty. */
export interface ConceptMap_Group_Unmapped extends BackboneElement {
  /** The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code. */
  code?: string;
  /** Extensions for code */
  _code?: Element;
  /** The display for the code. The display is only provided to help editors when editing the concept map. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped source code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL). */
  mode: "fixed" | "other-map" | "use-source-code";
  /** Extensions for mode */
  _mode?: Element;
  /** The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept. */
  otherMap?: string;
  /** Extensions for otherMap */
  _otherMap?: Element;
  /** The default relationship value to apply between the source and target concepts when the source code is unmapped and the mode is 'fixed' or 'use-source-code'. */
  relationship?:
    | "equivalent"
    | "not-related-to"
    | "related-to"
    | "source-is-broader-than-target"
    | "source-is-narrower-than-target";
  /** Extensions for relationship */
  _relationship?: Element;
  /** The set of fixed codes to use when the mode = 'fixed'  - all unmapped codes are mapped to each of the fixed codes. */
  valueSet?: string;
  /** Extensions for valueSet */
  _valueSet?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_Group_UnmappedSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: fhirCode().optional(),
    _code: z.lazy(getElementSchema).optional(),
    display: fhirString().optional(),
    _display: z.lazy(getElementSchema).optional(),
    mode: z.enum(["fixed", "other-map", "use-source-code"]),
    _mode: z.lazy(getElementSchema).optional(),
    otherMap: fhirCanonical().optional(),
    _otherMap: z.lazy(getElementSchema).optional(),
    relationship: z
      .enum([
        "equivalent",
        "not-related-to",
        "related-to",
        "source-is-broader-than-target",
        "source-is-narrower-than-target",
      ])
      .optional(),
    _relationship: z.lazy(getElementSchema).optional(),
    valueSet: fhirCanonical().optional(),
    _valueSet: z.lazy(getElementSchema).optional(),
  }).strict();

export const ConceptMap_Group_UnmappedSchema =
  ConceptMap_Group_UnmappedSchemaInternal as z.ZodType<ConceptMap_Group_Unmapped>;
