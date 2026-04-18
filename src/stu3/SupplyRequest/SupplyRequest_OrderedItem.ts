// Source: https://hl7.org/fhir/STU3/supplyrequest-definitions.html#SupplyRequest.orderedItem
// Profile: http://hl7.org/fhir/StructureDefinition/SupplyRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The item being requested. */
export interface SupplyRequest_OrderedItem extends BackboneElement {
  /** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
  itemCodeableConcept?: CodeableConcept;
  /** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
  itemReference?: Reference;
  /** The amount that is being ordered of the indicated item. */
  quantity: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SupplyRequest_OrderedItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    itemReference: z.lazy(getReferenceSchema).optional(),
    quantity: z.lazy(getQuantitySchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
        (field) => record[field] !== undefined,
      );
      if (item_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of itemCodeableConcept, itemReference may be present for item[x]",
          path: [item_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.itemReference,
        "itemReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        ["Device", "Medication", "Substance"],
        ctx,
      );
    });

export const SupplyRequest_OrderedItemSchema =
  SupplyRequest_OrderedItemSchemaInternal as z.ZodType<SupplyRequest_OrderedItem>;
