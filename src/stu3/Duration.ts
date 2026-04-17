// Profile: http://hl7.org/fhir/StructureDefinition/Duration
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirCode, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";

/** Base StructureDefinition for Duration Type */
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
    comparator: z.enum(["<", "<=", ">", ">="]).optional(),
    _comparator: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
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
