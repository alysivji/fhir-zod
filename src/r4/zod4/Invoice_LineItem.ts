// Profile: http://hl7.org/fhir/StructureDefinition/Invoice
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Invoice_LineItem_PriceComponent } from "./Invoice_LineItem_PriceComponent";
import { Invoice_LineItem_PriceComponentSchemaInternal } from "./Invoice_LineItem_PriceComponent";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource. */
export interface Invoice_LineItem extends BackboneElement {
	/** The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference. */
	chargeItemCodeableConcept?: CodeableConcept;
	/** The ChargeItem contains information such as the billing code, date, amount etc. If no further details are required for the lineItem, inline billing codes can be added using the CodeableConcept data type instead of the Reference. */
	chargeItemReference?: Reference;
	/** The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated. */
	priceComponent?: Array<Invoice_LineItem_PriceComponent>;
	/** Sequence in which the items appear on the invoice. */
	sequence?: number;
	/** Extensions for sequence */
	_sequence?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getInvoice_LineItem_PriceComponentSchema =
	(): z.ZodType<Invoice_LineItem_PriceComponent> =>
		Invoice_LineItem_PriceComponentSchemaInternal as z.ZodType<Invoice_LineItem_PriceComponent>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Invoice_LineItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		chargeItemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		chargeItemReference: z.lazy(getReferenceSchema).optional(),
		priceComponent: z
			.lazy(getInvoice_LineItem_PriceComponentSchema)
			.array()
			.optional(),
		sequence: z.number().int().positive().optional(),
		_sequence: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const chargeItem_x_Present = [
				"chargeItemCodeableConcept",
				"chargeItemReference",
			].filter((field) => record[field] !== undefined);
			if (chargeItem_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of chargeItemCodeableConcept, chargeItemReference must be present for chargeItem[x]",
					path: ["chargeItemCodeableConcept"],
				});
			}
			if (chargeItem_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of chargeItemCodeableConcept, chargeItemReference may be present for chargeItem[x]",
					path: [chargeItem_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.chargeItemReference,
				"chargeItemReference",
				["http://hl7.org/fhir/StructureDefinition/ChargeItem"],
				["ChargeItem"],
				ctx,
			);
		});

export const Invoice_LineItemSchema =
	Invoice_LineItemSchemaInternal as z.ZodType<Invoice_LineItem>;
