// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ClaimResponse_Item_Adjudication } from "./ClaimResponse_Item_Adjudication";
import { ClaimResponse_Item_AdjudicationSchemaInternal } from "./ClaimResponse_Item_Adjudication";
import type { ClaimResponse_Item_Detail } from "./ClaimResponse_Item_Detail";
import { ClaimResponse_Item_DetailSchemaInternal } from "./ClaimResponse_Item_Detail";

/** A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details. */
export interface ClaimResponse_Item extends BackboneElement {
  /** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item. */
  adjudication: Array<ClaimResponse_Item_Adjudication>;
  /** A claim detail. Either a simple (a product or service) or a 'group' of sub-details which are simple items. */
  detail?: Array<ClaimResponse_Item_Detail>;
  /** A number to uniquely reference the claim item entries. */
  itemSequence: number;
  /** Extensions for itemSequence */
  _itemSequence?: Element;
  /** The numbers associated with notes below which apply to the adjudication of this item. */
  noteNumber?: Array<number | null>;
  /** Extensions for noteNumber */
  _noteNumber?: Array<Element | null>;
}

const getClaimResponse_Item_AdjudicationSchema =
  (): z.ZodType<ClaimResponse_Item_Adjudication> =>
    ClaimResponse_Item_AdjudicationSchemaInternal as z.ZodType<ClaimResponse_Item_Adjudication>;
const getClaimResponse_Item_DetailSchema =
  (): z.ZodType<ClaimResponse_Item_Detail> =>
    ClaimResponse_Item_DetailSchemaInternal as z.ZodType<ClaimResponse_Item_Detail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_ItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    adjudication: z.lazy(getClaimResponse_Item_AdjudicationSchema).array(),
    detail: z.lazy(getClaimResponse_Item_DetailSchema).array().optional(),
    itemSequence: z.number().int().positive(),
    _itemSequence: z.lazy(getElementSchema).optional(),
    noteNumber: z.number().int().positive().nullable().array().optional(),
    _noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.noteNumber,
        record._noteNumber,
        "noteNumber",
        "_noteNumber",
        ctx,
      );
    });

export const ClaimResponse_ItemSchema =
  ClaimResponse_ItemSchemaInternal as z.ZodType<ClaimResponse_Item>;
