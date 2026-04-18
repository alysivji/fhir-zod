// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department. */
export interface MedicationRequest_DispenseRequest extends BackboneElement {
  /** Identifies the period time over which the supplied product is expected to be used, or the length of time the dispense is expected to last. */
  expectedSupplyDuration?: Duration;
  /** An integer indicating the number of times, in addition to the original dispense, (aka refills or repeats) that the patient can receive the prescribed medication. Usage Notes: This integer does not include the original order dispense. This means that if an order indicates dispense 30 tablets plus "3 repeats", then the order can be dispensed a total of 4 times and the patient can receive a total of 120 tablets. */
  numberOfRepeatsAllowed?: number;
  /** Extensions for numberOfRepeatsAllowed */
  _numberOfRepeatsAllowed?: Element;
  /** Indicates the intended dispensing Organization specified by the prescriber. */
  performer?: Reference;
  /** The amount that is to be dispensed for one fill. */
  quantity?: Quantity;
  /** This indicates the validity period of a prescription (stale dating the Prescription). */
  validityPeriod?: Period;
}

const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationRequest_DispenseRequestSchemaInternal =
  BackboneElementSchemaInternal.extend({
    expectedSupplyDuration: z.lazy(getDurationSchema).optional(),
    numberOfRepeatsAllowed: z.number().int().positive().optional(),
    _numberOfRepeatsAllowed: z.lazy(getElementSchema).optional(),
    performer: z.lazy(getReferenceSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    validityPeriod: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.performer,
        "performer",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const MedicationRequest_DispenseRequestSchema =
  MedicationRequest_DispenseRequestSchemaInternal as z.ZodType<MedicationRequest_DispenseRequest>;
