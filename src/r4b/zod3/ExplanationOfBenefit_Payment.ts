// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirDate } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** Payment details for the adjudication of the claim. */
export interface ExplanationOfBenefit_Payment extends BackboneElement {
	/** Total amount of all adjustments to this payment included in this transaction which are not related to this claim's adjudication. */
	adjustment?: Money;
	/** Reason for the payment adjustment. */
	adjustmentReason?: CodeableConcept;
	/** Benefits payable less any payment adjustment. */
	amount?: Money;
	/** Estimated date the payment will be issued or the actual issue date of payment. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Issuer's unique identifier for the payment instrument. */
	identifier?: Identifier;
	/** Whether this represents partial or complete payment of the benefits payable. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const ExplanationOfBenefit_PaymentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjustment: z.lazy(getMoneySchema).optional(),
		adjustmentReason: z.lazy(getCodeableConceptSchema).optional(),
		amount: z.lazy(getMoneySchema).optional(),
		date: fhirDate().optional(),
		_date: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ExplanationOfBenefit_PaymentSchema =
	ExplanationOfBenefit_PaymentSchemaInternal as z.ZodType<ExplanationOfBenefit_Payment>;
