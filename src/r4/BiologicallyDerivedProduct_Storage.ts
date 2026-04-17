// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Product storage. */
export interface BiologicallyDerivedProduct_Storage extends BackboneElement {
  /** Description of storage. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Storage timeperiod. */
  duration?: Period;
  /** Temperature scale used. */
  scale?: "celsius" | "farenheit" | "kelvin";
  /** Extensions for scale */
  _scale?: Element;
  /** Storage temperature. */
  temperature?: number;
  /** Extensions for temperature */
  _temperature?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const BiologicallyDerivedProduct_StorageSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    duration: z.lazy(getPeriodSchema).optional(),
    scale: z.enum(["celsius", "farenheit", "kelvin"]).optional(),
    _scale: z.lazy(getElementSchema).optional(),
    temperature: z.number().optional(),
    _temperature: z.lazy(getElementSchema).optional(),
  }).strict();

export const BiologicallyDerivedProduct_StorageSchema =
  BiologicallyDerivedProduct_StorageSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Storage>;
