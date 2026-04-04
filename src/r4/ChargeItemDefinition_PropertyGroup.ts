// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ChargeItemDefinition_PropertyGroup_PriceComponent } from "./ChargeItemDefinition_PropertyGroup_PriceComponent";
import { ChargeItemDefinition_PropertyGroup_PriceComponentSchemaInternal } from "./ChargeItemDefinition_PropertyGroup_PriceComponent";

/** Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply. */
export interface ChargeItemDefinition_PropertyGroup extends BackboneElement {
	/** Expressions that describe applicability criteria for the priceComponent. */
	applicability?: Array<unknown>;
	/** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated. */
	priceComponent?: Array<ChargeItemDefinition_PropertyGroup_PriceComponent>;
}

const getChargeItemDefinition_PropertyGroup_PriceComponentSchema =
	(): z.ZodType<ChargeItemDefinition_PropertyGroup_PriceComponent> =>
		ChargeItemDefinition_PropertyGroup_PriceComponentSchemaInternal as z.ZodType<ChargeItemDefinition_PropertyGroup_PriceComponent>;

/** @internal */
export const ChargeItemDefinition_PropertyGroupSchemaInternal =
	BackboneElementSchemaInternal.extend({
		applicability: z.unknown().array().optional(),
		priceComponent: z
			.lazy(getChargeItemDefinition_PropertyGroup_PriceComponentSchema)
			.array()
			.optional(),
	}).strict();

export const ChargeItemDefinition_PropertyGroupSchema =
	ChargeItemDefinition_PropertyGroupSchemaInternal as z.ZodType<ChargeItemDefinition_PropertyGroup>;
