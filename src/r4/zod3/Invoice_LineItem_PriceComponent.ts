// Profile: http://hl7.org/fhir/StructureDefinition/Invoice
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated. */
export interface Invoice_LineItem_PriceComponent extends BackboneElement {
	/** The amount calculated for this component. */
	amount?: Money;
	/** A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc. */
	code?: CodeableConcept;
	/** The factor that has been applied on the base price for calculating this component. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** This code identifies the type of the component. */
	type:
		| "base"
		| "deduction"
		| "discount"
		| "informational"
		| "surcharge"
		| "tax";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const Invoice_LineItem_PriceComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getMoneySchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		factor: z.number().optional(),
		_factor: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"base",
			"deduction",
			"discount",
			"informational",
			"surcharge",
			"tax",
		]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const Invoice_LineItem_PriceComponentSchema =
	Invoice_LineItem_PriceComponentSchemaInternal as z.ZodType<Invoice_LineItem_PriceComponent>;
