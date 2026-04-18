// Source: https://hl7.org/fhir/R5/chargeitemdefinition-definitions.html#ChargeItemDefinition.propertyGroup
// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { MonetaryComponent } from "../MonetaryComponent";
import { MonetaryComponentSchemaInternal } from "../MonetaryComponent";

/** Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply. */
export interface ChargeItemDefinition_PropertyGroup extends BackboneElement {
  /** Expressions that describe applicability criteria for the priceComponent. */
  applicability?: Array<unknown>;
  /** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated. */
  priceComponent?: Array<MonetaryComponent>;
}

const getMonetaryComponentSchema = (): z.ZodType<MonetaryComponent> =>
  MonetaryComponentSchemaInternal as z.ZodType<MonetaryComponent>;

/** @internal */
export const ChargeItemDefinition_PropertyGroupSchemaInternal =
  BackboneElementSchemaInternal.extend({
    applicability: z.unknown().array().optional(),
    priceComponent: z.lazy(getMonetaryComponentSchema).array().optional(),
  }).strict();

export const ChargeItemDefinition_PropertyGroupSchema =
  ChargeItemDefinition_PropertyGroupSchemaInternal as z.ZodType<ChargeItemDefinition_PropertyGroup>;
