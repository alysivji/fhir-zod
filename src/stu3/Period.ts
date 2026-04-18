// Profile: http://hl7.org/fhir/StructureDefinition/Period
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Period Type */
export interface Period extends Element {
  /** The end of the period. If the end of the period is missing, it means that the period is ongoing. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time. */
  end?: string;
  /** Extensions for end */
  _end?: Element;
  /** The start of the period. The boundary is inclusive. */
  start?: string;
  /** Extensions for start */
  _start?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const PeriodSchemaInternal = z
  .object({
    end: fhirDateTime().optional(),
    _end: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    start: fhirDateTime().optional(),
    _start: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const PeriodSchema = PeriodSchemaInternal as z.ZodType<Period>;
