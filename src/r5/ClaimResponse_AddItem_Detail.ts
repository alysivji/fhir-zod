// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ClaimResponse_AddItem_Detail_SubDetail } from "./ClaimResponse_AddItem_Detail_SubDetail";
import { ClaimResponse_AddItem_Detail_SubDetailSchemaInternal } from "./ClaimResponse_AddItem_Detail_SubDetail";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The second-tier service adjudications for payor added services. */
export interface ClaimResponse_AddItem_Detail extends BackboneElement {
	/** The adjudication results. */
	adjudication?: Array<unknown>;
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** Item typification or modifiers codes to convey additional context for the product or service. */
	modifier?: Array<CodeableConcept>;
	/** The total amount claimed for the group (if a grouper) or the addItem.detail. Net = unit price * quantity * factor. */
	net?: Money;
	/** The numbers associated with notes below which apply to the adjudication of this item. */
	noteNumber?: Array<number>;
	/** Extensions for noteNumber */
	_noteNumber?: Array<Element>;
	/** When the value is a group code then this item collects a set of related item details, otherwise this contains the product, service, drug or other billing code for the item. This element may be the start of a range of .productOrService codes used in conjunction with .productOrServiceEnd or it may be a solo element where .productOrServiceEnd is not used. */
	productOrService?: CodeableConcept;
	/** This contains the end of a range of product, service, drug or other billing codes for the item. This element is not used when the .productOrService is a group code. This value may only be present when a .productOfService code has been provided to convey the start of the range. Typically this value may be used only with preauthorizations and not with claims. */
	productOrServiceEnd?: CodeableConcept;
	/** The number of repetitions of a service or product. */
	quantity?: Quantity;
	/** The type of revenue or cost center providing the product and/or service. */
	revenue?: CodeableConcept;
	/** The high-level results of the adjudication if adjudication has been performed. */
	reviewOutcome?: unknown;
	/** The third-tier service adjudications for payor added services. */
	subDetail?: Array<ClaimResponse_AddItem_Detail_SubDetail>;
	/** The total of taxes applicable for this product or service. */
	tax?: Money;
	/** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners. */
	traceNumber?: Array<Identifier>;
	/** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
	unitPrice?: Money;
}

const getClaimResponse_AddItem_Detail_SubDetailSchema =
	(): z.ZodType<ClaimResponse_AddItem_Detail_SubDetail> =>
		ClaimResponse_AddItem_Detail_SubDetailSchemaInternal as z.ZodType<ClaimResponse_AddItem_Detail_SubDetail>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ClaimResponse_AddItem_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjudication: z.unknown().array().optional(),
		factor: z.number().optional(),
		_factor: z.lazy(getElementSchema).optional(),
		modifier: z.lazy(getCodeableConceptSchema).array().optional(),
		net: z.lazy(getMoneySchema).optional(),
		noteNumber: z.number().int().positive().array().optional(),
		_noteNumber: z.lazy(getElementSchema).array().optional(),
		productOrService: z.lazy(getCodeableConceptSchema).optional(),
		productOrServiceEnd: z.lazy(getCodeableConceptSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		revenue: z.lazy(getCodeableConceptSchema).optional(),
		reviewOutcome: z.unknown().optional(),
		subDetail: z
			.lazy(getClaimResponse_AddItem_Detail_SubDetailSchema)
			.array()
			.optional(),
		tax: z.lazy(getMoneySchema).optional(),
		traceNumber: z.lazy(getIdentifierSchema).array().optional(),
		unitPrice: z.lazy(getMoneySchema).optional(),
	}).strict();

export const ClaimResponse_AddItem_DetailSchema =
	ClaimResponse_AddItem_DetailSchemaInternal as z.ZodType<ClaimResponse_AddItem_Detail>;
