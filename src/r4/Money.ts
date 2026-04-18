// Source: https://hl7.org/fhir/R4/datatypes.html#Money
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Money Type: An amount of economic utility in some recognized currency. */
export interface Money extends Element {
  /** ISO 4217 Currency Code. */
  currency?: string;
  /** Extensions for currency */
  _currency?: Element;
  /** Numerical value (with implicit precision). */
  value?: number;
  /** Extensions for value */
  _value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const MoneySchemaInternal = z
  .object({
    currency: fhirCode().optional(),
    _currency: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    value: z.number().optional(),
    _value: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const MoneySchema = MoneySchemaInternal as z.ZodType<Money>;
