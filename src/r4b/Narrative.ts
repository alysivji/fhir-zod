// Source: https://hl7.org/fhir/R4B/datatypes.html#Narrative
// Profile: http://hl7.org/fhir/StructureDefinition/Narrative
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for Narrative Type: A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
export interface Narrative extends Element {
  /** The actual narrative content, a stripped down version of XHTML. */
  div: string;
  /** Extensions for div */
  _div?: Element;
  /** The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data. */
  status: "additional" | "empty" | "extensions" | "generated";
  /** Extensions for status */
  _status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const NarrativeSchemaInternal = ElementSchemaInternal.extend({
  div: z.string(),
  _div: z.lazy(getElementSchema).optional(),
  status: z.enum(["additional", "empty", "extensions", "generated"]),
  _status: z.lazy(getElementSchema).optional(),
}).strict();

export const NarrativeSchema = NarrativeSchemaInternal as z.ZodType<Narrative>;
