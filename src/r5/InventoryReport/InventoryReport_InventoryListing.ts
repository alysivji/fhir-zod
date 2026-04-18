// Profile: http://hl7.org/fhir/StructureDefinition/InventoryReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { InventoryReport_InventoryListing_Item } from "./InventoryReport_InventoryListing_Item";
import { InventoryReport_InventoryListing_ItemSchemaInternal } from "./InventoryReport_InventoryListing_Item";

/** An inventory listing section (grouped by any of the attributes). */
export interface InventoryReport_InventoryListing extends BackboneElement {
  /** The date and time when the items were counted. */
  countingDateTime?: string;
  /** Extensions for countingDateTime */
  _countingDateTime?: Element;
  /** The item or items in this listing. */
  item?: Array<InventoryReport_InventoryListing_Item>;
  /** The status of the items. */
  itemStatus?: CodeableConcept;
  /** Location of the inventory items. */
  location?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getInventoryReport_InventoryListing_ItemSchema =
  (): z.ZodType<InventoryReport_InventoryListing_Item> =>
    InventoryReport_InventoryListing_ItemSchemaInternal as z.ZodType<InventoryReport_InventoryListing_Item>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InventoryReport_InventoryListingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    countingDateTime: fhirDateTime().optional(),
    _countingDateTime: z.lazy(getElementSchema).optional(),
    item: z
      .lazy(getInventoryReport_InventoryListing_ItemSchema)
      .array()
      .optional(),
    itemStatus: z.lazy(getCodeableConceptSchema).optional(),
    location: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.location,
        "location",
        ["http://hl7.org/fhir/StructureDefinition/Location"],
        ["Location"],
        ctx,
      );
    });

export const InventoryReport_InventoryListingSchema =
  InventoryReport_InventoryListingSchemaInternal as z.ZodType<InventoryReport_InventoryListing>;
