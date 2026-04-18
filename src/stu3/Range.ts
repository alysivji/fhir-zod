// Source: https://hl7.org/fhir/STU3/datatypes.html#Range
// Profile: http://hl7.org/fhir/StructureDefinition/Range
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Base StructureDefinition for Range Type */
export interface Range extends Element {
  /** The high limit. The boundary is inclusive. */
  high?: Quantity;
  /** The low limit. The boundary is inclusive. */
  low?: Quantity;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const RangeSchemaInternal = z
  .object({
    extension: z.lazy(getExtensionSchema).array().optional(),
    high: z.lazy(getQuantitySchema).optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    low: z.lazy(getQuantitySchema).optional(),
  })
  .strict();

export const RangeSchema = RangeSchemaInternal as z.ZodType<Range>;
