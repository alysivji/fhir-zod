// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
  fhirString,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** What to do when there is no mapping for the source concept. "Unmapped" does not include codes that are unmatched, and the unmapped element is ignored in a code is specified to have equivalence = unmatched. */
export interface ConceptMap_Group_Unmapped extends BackboneElement {
  /** The fixed code to use when the mode = 'fixed'  - all unmapped codes are mapped to a single fixed code. */
  code?: string;
  /** Extensions for code */
  _code?: Element;
  /** The display for the code. The display is only provided to help editors when editing the concept map. */
  display?: string;
  /** Extensions for display */
  _display?: Element;
  /** Defines which action to take if there is no match for the source concept in the target system designated for the group. One of 3 actions are possible: use the unmapped code (this is useful when doing a mapping between versions, and only a few codes have changed), use a fixed code (a default code), or alternatively, a reference to a different concept map can be provided (by canonical URL). */
  mode: "fixed" | "other-map" | "provided";
  /** Extensions for mode */
  _mode?: Element;
  /** The canonical reference to an additional ConceptMap resource instance to use for mapping if this ConceptMap resource contains no matching mapping for the source concept. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
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
    mode: z.enum(["fixed", "other-map", "provided"]),
    _mode: z.lazy(getElementSchema).optional(),
    url: fhirCanonical().optional(),
    _url: z.lazy(getElementSchema).optional(),
  }).strict();

export const ConceptMap_Group_UnmappedSchema =
  ConceptMap_Group_UnmappedSchemaInternal as z.ZodType<ConceptMap_Group_Unmapped>;
