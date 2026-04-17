// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Indicates the quantity or duration for the first dispense of the medication. */
export interface MedicationRequest_DispenseRequest_InitialFill
  extends BackboneElement {
  /** The length of time that the first dispense is expected to last. */
  duration?: Duration;
  /** The amount or quantity to provide as part of the first dispense. */
  quantity?: Quantity;
}

const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MedicationRequest_DispenseRequest_InitialFillSchemaInternal =
  BackboneElementSchemaInternal.extend({
    duration: z.lazy(getDurationSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
  }).strict();

export const MedicationRequest_DispenseRequest_InitialFillSchema =
  MedicationRequest_DispenseRequest_InitialFillSchemaInternal as z.ZodType<MedicationRequest_DispenseRequest_InitialFill>;
