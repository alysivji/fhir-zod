// Source: https://hl7.org/fhir/R5/datatypes.html#RatioRange
// Profile: http://hl7.org/fhir/StructureDefinition/RatioRange
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** RatioRange Type: A range of ratios expressed as a low and high numerator and a denominator. */
export interface RatioRange extends DataType {
  /** The value of the denominator. */
  denominator?: Quantity;
  /** The value of the high limit numerator. */
  highNumerator?: Quantity;
  /** The value of the low limit numerator. */
  lowNumerator?: Quantity;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const RatioRangeSchemaInternal = z
  .object({
    denominator: z.lazy(getQuantitySchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    highNumerator: z.lazy(getQuantitySchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    lowNumerator: z.lazy(getQuantitySchema).optional(),
  })
  .strict();

export const RatioRangeSchema =
  RatioRangeSchemaInternal as z.ZodType<RatioRange>;
