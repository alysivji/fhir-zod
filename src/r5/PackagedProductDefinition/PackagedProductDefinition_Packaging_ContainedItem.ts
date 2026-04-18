// Profile: http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** The item(s) within the packaging. */
export interface PackagedProductDefinition_Packaging_ContainedItem
  extends BackboneElement {
  /** The number of this type of item within this packaging or for continuous items such as liquids it is the quantity (for example 25ml). See also PackagedProductDefinition.containedItemQuantity (especially the long definition). */
  amount?: Quantity;
  /** The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another whole packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack (for layers within one package, use PackagedProductDefinition.packaging.packaging). */
  item: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const PackagedProductDefinition_Packaging_ContainedItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getQuantitySchema).optional(),
    item: z.lazy(getCodeableReferenceSchema),
  }).strict();

export const PackagedProductDefinition_Packaging_ContainedItemSchema =
  PackagedProductDefinition_Packaging_ContainedItemSchemaInternal as z.ZodType<PackagedProductDefinition_Packaging_ContainedItem>;
