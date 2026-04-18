// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** List of individual settlement amounts and the corresponding transaction. */
export interface PaymentReconciliation_Detail extends BackboneElement {
	/** Amount paid for this detail. */
	amount?: Money;
	/** The date of the invoice or financial resource. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The organization which is receiving the payment. */
	payee?: Reference;
	/** The claim or financial resource. */
	request?: Reference;
	/** The claim response resource. */
	response?: Reference;
	/** The Organization which submitted the claim or financial transaction. */
	submitter?: Reference;
	/** Code to indicate the nature of the payment, adjustment, funds advance, etc. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PaymentReconciliation_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getMoneySchema).optional(),
		date: fhirDate().optional(),
		_date: z.lazy(getElementSchema).optional(),
		payee: z.lazy(getReferenceSchema).optional(),
		request: z.lazy(getReferenceSchema).optional(),
		response: z.lazy(getReferenceSchema).optional(),
		submitter: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.payee,
				"payee",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.request,
				"request",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.response,
				"response",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.submitter,
				"submitter",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const PaymentReconciliation_DetailSchema =
	PaymentReconciliation_DetailSchemaInternal as z.ZodType<PaymentReconciliation_Detail>;
