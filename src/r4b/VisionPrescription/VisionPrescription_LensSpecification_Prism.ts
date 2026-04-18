// Source: https://hl7.org/fhir/R4B/visionprescription-definitions.html#VisionPrescription.lensSpecification.prism
// Profile: http://hl7.org/fhir/StructureDefinition/VisionPrescription
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Allows for adjustment on two axis. */
export interface VisionPrescription_LensSpecification_Prism
  extends BackboneElement {
  /** Amount of prism to compensate for eye alignment in fractional units. */
  amount: number;
  /** Extensions for amount */
  _amount?: Element;
  /** The relative base, or reference lens edge, for the prism. */
  base: "down" | "in" | "out" | "up";
  /** Extensions for base */
  _base?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const VisionPrescription_LensSpecification_PrismSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.number(),
    _amount: z.lazy(getElementSchema).optional(),
    base: z.enum(["down", "in", "out", "up"]),
    _base: z.lazy(getElementSchema).optional(),
  }).strict();

export const VisionPrescription_LensSpecification_PrismSchema =
  VisionPrescription_LensSpecification_PrismSchemaInternal as z.ZodType<VisionPrescription_LensSpecification_Prism>;
