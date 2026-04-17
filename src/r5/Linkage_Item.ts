// Profile: http://hl7.org/fhir/StructureDefinition/Linkage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Identifies which record considered as the reference to the same real-world occurrence as well as how the items should be evaluated within the collection of linked items. */
export interface Linkage_Item extends BackboneElement {
  /** The resource instance being linked as part of the group. */
  resource: Reference;
  /** Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations. */
  type: "alternate" | "historical" | "source";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Linkage_ItemSchemaInternal = BackboneElementSchemaInternal.extend({
  resource: z.lazy(getReferenceSchema),
  type: z.enum(["alternate", "historical", "source"]),
  _type: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.resource,
      "resource",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const Linkage_ItemSchema =
  Linkage_ItemSchemaInternal as z.ZodType<Linkage_Item>;
