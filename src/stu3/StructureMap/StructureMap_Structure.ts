// Source: https://hl7.org/fhir/STU3/structuremap-definitions.html#StructureMap.structure
// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A structure definition used by this map. The structure definition may describe instances that are converted, or the instances that are produced. */
export interface StructureMap_Structure extends BackboneElement {
  /** The name used for this type in the map. */
  alias?: string;
  /** Extensions for alias */
  _alias?: Element;
  /** Documentation that describes how the structure is used in the mapping. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** How the referenced structure is used in this mapping. */
  mode: "produced" | "queried" | "source" | "target";
  /** Extensions for mode */
  _mode?: Element;
  /** The canonical URL that identifies the structure. */
  url: string;
  /** Extensions for url */
  _url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_StructureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    alias: fhirString().optional(),
    _alias: z.lazy(getElementSchema).optional(),
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    mode: z.enum(["produced", "queried", "source", "target"]),
    _mode: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
  }).strict();

export const StructureMap_StructureSchema =
  StructureMap_StructureSchemaInternal as z.ZodType<StructureMap_Structure>;
