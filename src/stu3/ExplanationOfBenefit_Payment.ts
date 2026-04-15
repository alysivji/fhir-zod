// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirDate } from "../shared/fhir-primitives";
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

/** Payment details for the claim if the claim has been paid. */
export interface ExplanationOfBenefit_Payment extends BackboneElement {
	/** Adjustment to the payment of this transaction which is not related to adjudication of this transaction. */
	adjustment?: Money;
	/** Reason for the payment adjustment. */
	adjustmentReason?: CodeableConcept;
	/** Payable less any payment adjustment. */
	amount?: Money;
	/** Estimated payment date. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Payment identifer. */
	identifier?: Identifier;
	/** Whether this represents partial or complete payment of the claim. */
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
