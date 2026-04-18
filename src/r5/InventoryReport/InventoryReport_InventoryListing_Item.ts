// Profile: http://hl7.org/fhir/StructureDefinition/InventoryReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** The item or items in this listing. */
export interface InventoryReport_InventoryListing_Item extends BackboneElement {
  /** The inventory category or classification of the items being reported. This is meant not for defining the product, but for inventory categories e.g. 'pending recount' or 'damaged'. */
  category?: CodeableConcept;
  /** The code or reference to the item type. */
  item: CodeableReference;
  /** The quantity of the item or items being reported. */
  quantity: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const InventoryReport_InventoryListing_ItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    category: z.lazy(getCodeableConceptSchema).optional(),
    item: z.lazy(getCodeableReferenceSchema),
    quantity: z.lazy(getQuantitySchema),
  }).strict();

export const InventoryReport_InventoryListing_ItemSchema =
  InventoryReport_InventoryListing_ItemSchemaInternal as z.ZodType<InventoryReport_InventoryListing_Item>;
