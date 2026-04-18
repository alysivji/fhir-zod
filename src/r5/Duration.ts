// Source: https://hl7.org/fhir/R5/datatypes.html#Duration
// Profile: http://hl7.org/fhir/StructureDefinition/Duration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";

/** Duration Type: A length of time. */
export interface Duration extends Quantity {}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const DurationSchemaInternal = z
  .object({
    code: fhirCode().optional(),
    _code: z.lazy(getElementSchema).optional(),
    comparator: z.enum(["<", "<=", ">", ">=", "ad"]).optional(),
    _comparator: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    system: fhirUri().optional(),
    _system: z.lazy(getElementSchema).optional(),
    unit: fhirString().optional(),
    _unit: z.lazy(getElementSchema).optional(),
    value: z.number().optional(),
    _value: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const DurationSchema = DurationSchemaInternal as z.ZodType<Duration>;
