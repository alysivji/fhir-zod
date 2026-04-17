// Profile: http://hl7.org/fhir/StructureDefinition/Invoice
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDate } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MonetaryComponent } from "./MonetaryComponent";
import { MonetaryComponentSchemaInternal } from "./MonetaryComponent";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Each line item represents one charge for goods and services rendered. Details such.ofType(date), code and amount are found in the referenced ChargeItem resource. */
export interface Invoice_LineItem extends BackboneElement {
  /** The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference. */
  chargeItemCodeableConcept?: CodeableConcept;
  /** The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference. */
  chargeItemReference?: Reference;
  /** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated. */
  priceComponent?: Array<MonetaryComponent>;
  /** Sequence in which the items appear on the invoice. */
  sequence?: number;
  /** Extensions for sequence */
  _sequence?: Element;
  /** Date/time(s) range when this service was delivered or completed. */
  servicedDate?: string;
  /** Extensions for servicedDate */
  _servicedDate?: Element;
  /** Date/time(s) range when this service was delivered or completed. */
  servicedPeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMonetaryComponentSchema = (): z.ZodType<MonetaryComponent> =>
  MonetaryComponentSchemaInternal as z.ZodType<MonetaryComponent>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Invoice_LineItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    chargeItemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    chargeItemReference: z.lazy(getReferenceSchema).optional(),
    priceComponent: z.lazy(getMonetaryComponentSchema).array().optional(),
    sequence: z.number().int().positive().optional(),
    _sequence: z.lazy(getElementSchema).optional(),
    servicedDate: fhirDate().optional(),
    _servicedDate: z.lazy(getElementSchema).optional(),
    servicedPeriod: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const chargeItem_x_Present = [
        "chargeItemCodeableConcept",
        "chargeItemReference",
      ].filter((field) => record[field] !== undefined);
      if (chargeItem_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of chargeItemCodeableConcept, chargeItemReference must be present for chargeItem[x]",
          path: ["chargeItemCodeableConcept"],
        });
      }
      if (chargeItem_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of chargeItemCodeableConcept, chargeItemReference may be present for chargeItem[x]",
          path: [chargeItem_x_Present[0]],
        });
      }
      const serviced_x_Present = ["servicedDate", "servicedPeriod"].filter(
        (field) => record[field] !== undefined,
      );
      if (serviced_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of servicedDate, servicedPeriod may be present for serviced[x]",
          path: [serviced_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.chargeItemReference,
        "chargeItemReference",
        ["http://hl7.org/fhir/StructureDefinition/ChargeItem"],
        ["ChargeItem"],
        ctx,
      );
    });

export const Invoice_LineItemSchema =
  Invoice_LineItemSchemaInternal as z.ZodType<Invoice_LineItem>;
