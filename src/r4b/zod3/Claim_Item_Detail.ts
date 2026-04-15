// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Claim_Item_Detail_SubDetail } from "./Claim_Item_Detail_SubDetail";
import { Claim_Item_Detail_SubDetailSchemaInternal } from "./Claim_Item_Detail_SubDetail";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items. */
export interface Claim_Item_Detail extends BackboneElement {
	/** Code to identify the general type of benefits under which products and services are provided. */
	category?: CodeableConcept;
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** Item typification or modifiers codes to convey additional context for the product or service. */
	modifier?: Array<CodeableConcept>;
	/** The quantity times the unit price for an additional service or product or charge. */
	net?: Money;
	/** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
	productOrService: CodeableConcept;
	/** Identifies the program under which this may be recovered. */
	programCode?: Array<CodeableConcept>;
	/** The number of repetitions of a service or product. */
	quantity?: Quantity;
	/** The type of revenue or cost center providing the product and/or service. */
	revenue?: CodeableConcept;
	/** A number to uniquely identify item entries. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items. */
	subDetail?: Array<Claim_Item_Detail_SubDetail>;
	/** Unique Device Identifiers associated with this line item. */
	udi?: Array<Reference>;
	/** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
	unitPrice?: Money;
}

const getClaim_Item_Detail_SubDetailSchema =
	(): z.ZodType<Claim_Item_Detail_SubDetail> =>
		Claim_Item_Detail_SubDetailSchemaInternal as z.ZodType<Claim_Item_Detail_SubDetail>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_Item_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema).optional(),
		factor: z.number().optional(),
		_factor: z.lazy(getElementSchema).optional(),
		modifier: z.lazy(getCodeableConceptSchema).array().optional(),
		net: z.lazy(getMoneySchema).optional(),
		productOrService: z.lazy(getCodeableConceptSchema),
		programCode: z.lazy(getCodeableConceptSchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		revenue: z.lazy(getCodeableConceptSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
		subDetail: z.lazy(getClaim_Item_Detail_SubDetailSchema).array().optional(),
		udi: z.lazy(getReferenceSchema).array().optional(),
		unitPrice: z.lazy(getMoneySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.udi,
				"udi",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const Claim_Item_DetailSchema =
	Claim_Item_DetailSchemaInternal as z.ZodType<Claim_Item_Detail>;
