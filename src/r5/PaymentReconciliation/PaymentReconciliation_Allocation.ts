// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDate, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Distribution of the payment amount for a previously acknowledged payable. */
export interface PaymentReconciliation_Allocation extends BackboneElement {
	/** The Account to which this payment applies, may be completed by the receiver, used for search. */
	account?: Reference;
	/** The monetary amount allocated from the total payment to the payable. */
	amount?: Money;
	/** The date from the response resource containing a commitment to pay. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The Encounter to which this payment applies, may be completed by the receiver, used for search. */
	encounter?: Reference;
	/** Unique identifier for the current payment item for the referenced payable. */
	identifier?: Identifier;
	/** The party which is receiving the payment. */
	payee?: Reference;
	/** Unique identifier for the prior payment item for the referenced payable. */
	predecessor?: Identifier;
	/** A resource, such as a ClaimResponse, which contains a commitment to payment. */
	response?: Reference;
	/** A reference to the individual who is responsible for inquiries regarding the response and its payment. */
	responsible?: Reference;
	/** The party which submitted the claim or financial transaction. */
	submitter?: Reference;
	/** Specific resource to which the payment/adjustment/advance applies. */
	target?: Reference;
	/**  Identifies the claim line item, encounter or other sub-element being paid. Note payment may be partial, that is not match the then outstanding balance or amount incurred. */
	targetItemIdentifier?: Identifier;
	/**  Identifies the claim line item, encounter or other sub-element being paid. Note payment may be partial, that is not match the then outstanding balance or amount incurred. */
	targetItemPositiveInt?: number;
	/** Extensions for targetItemPositiveInt */
	_targetItemPositiveInt?: Element;
	/**  Identifies the claim line item, encounter or other sub-element being paid. Note payment may be partial, that is not match the then outstanding balance or amount incurred. */
	targetItemString?: string;
	/** Extensions for targetItemString */
	_targetItemString?: Element;
	/** Code to indicate the nature of the payment. */
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
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PaymentReconciliation_AllocationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		account: z.lazy(getReferenceSchema).optional(),
		amount: z.lazy(getMoneySchema).optional(),
		date: fhirDate().optional(),
		_date: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		payee: z.lazy(getReferenceSchema).optional(),
		predecessor: z.lazy(getIdentifierSchema).optional(),
		response: z.lazy(getReferenceSchema).optional(),
		responsible: z.lazy(getReferenceSchema).optional(),
		submitter: z.lazy(getReferenceSchema).optional(),
		target: z.lazy(getReferenceSchema).optional(),
		targetItemIdentifier: z.lazy(getIdentifierSchema).optional(),
		targetItemPositiveInt: z.number().int().positive().optional(),
		_targetItemPositiveInt: z.lazy(getElementSchema).optional(),
		targetItemString: fhirString().optional(),
		_targetItemString: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const targetItem_x_Present = [
				"targetItemIdentifier",
				"targetItemPositiveInt",
				"targetItemString",
			].filter((field) => record[field] !== undefined);
			if (targetItem_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of targetItemIdentifier, targetItemPositiveInt, targetItemString may be present for targetItem[x]",
					path: [targetItem_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.account,
				"account",
				["http://hl7.org/fhir/StructureDefinition/Account"],
				["Account"],
				ctx,
			);
			validateReferenceTarget(
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
				ctx,
			);
			validateReferenceTarget(
				record.payee,
				"payee",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.response,
				"response",
				["http://hl7.org/fhir/StructureDefinition/ClaimResponse"],
				["ClaimResponse"],
				ctx,
			);
			validateReferenceTarget(
				record.responsible,
				"responsible",
				["http://hl7.org/fhir/StructureDefinition/PractitionerRole"],
				["PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.submitter,
				"submitter",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.target,
				"target",
				[
					"http://hl7.org/fhir/StructureDefinition/Account",
					"http://hl7.org/fhir/StructureDefinition/ChargeItem",
					"http://hl7.org/fhir/StructureDefinition/Claim",
					"http://hl7.org/fhir/StructureDefinition/Contract",
					"http://hl7.org/fhir/StructureDefinition/Encounter",
					"http://hl7.org/fhir/StructureDefinition/Invoice",
				],
				["Account", "ChargeItem", "Claim", "Contract", "Encounter", "Invoice"],
				ctx,
			);
		});

export const PaymentReconciliation_AllocationSchema =
	PaymentReconciliation_AllocationSchemaInternal as z.ZodType<PaymentReconciliation_Allocation>;
