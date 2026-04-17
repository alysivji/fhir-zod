// Profile: http://hl7.org/fhir/StructureDefinition/CatalogEntry
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Used for example, to point to a substance, or to a device used to administer a medication. */
export interface CatalogEntry_RelatedEntry extends BackboneElement {
  /** The reference to the related item. */
  item: Reference;
  /** The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc. */
  relationtype: "is-replaced-by" | "triggers";
  /** Extensions for relationtype */
  _relationtype?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CatalogEntry_RelatedEntrySchemaInternal =
  BackboneElementSchemaInternal.extend({
    item: z.lazy(getReferenceSchema),
    relationtype: z.enum(["is-replaced-by", "triggers"]),
    _relationtype: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.item,
        "item",
        ["http://hl7.org/fhir/StructureDefinition/CatalogEntry"],
        ["CatalogEntry"],
        ctx,
      );
    });

export const CatalogEntry_RelatedEntrySchema =
  CatalogEntry_RelatedEntrySchemaInternal as z.ZodType<CatalogEntry_RelatedEntry>;
