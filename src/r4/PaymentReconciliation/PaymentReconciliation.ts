// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { PaymentReconciliation_Detail } from "./PaymentReconciliation_Detail";
import { PaymentReconciliation_DetailSchemaInternal } from "./PaymentReconciliation_Detail";
import type { PaymentReconciliation_ProcessNote } from "./PaymentReconciliation_ProcessNote";
import { PaymentReconciliation_ProcessNoteSchemaInternal } from "./PaymentReconciliation_ProcessNote";

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface PaymentReconciliation extends DomainResource {
	/** The date when the resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** Distribution of the payment amount for a previously acknowledged payable. */
	detail?: Array<PaymentReconciliation_Detail>;
	/** A human readable description of the status of the request for the reconciliation. */
	disposition?: string;
	/** Extensions for disposition */
	_disposition?: Element;
	/** A code for the form to be used for printing the content. */
	formCode?: CodeableConcept;
	/** A unique identifier assigned to this payment reconciliation. */
	identifier?: Array<Identifier>;
	/** The outcome of a request for a reconciliation. */
	outcome?: "complete" | "error" | "partial" | "queued";
	/** Extensions for outcome */
	_outcome?: Element;
	/** Total payment amount as indicated on the financial instrument. */
	paymentAmount: Money;
	/** The date of payment as indicated on the financial instrument. */
	paymentDate: string;
	/** Extensions for paymentDate */
	_paymentDate?: Element;
	/** Issuer's unique identifier for the payment instrument. */
	paymentIdentifier?: Identifier;
	/** The party who generated the payment. */
	paymentIssuer?: Reference;
	/** The period of time for which payments have been gathered into this bulk payment for settlement. */
	period?: Period;
	/** A note that describes or explains the processing in a human readable form. */
	processNote?: Array<PaymentReconciliation_ProcessNote>;
	/** Original request resource reference. */
	request?: Reference;
	/** The practitioner who is responsible for the services rendered to the patient. */
	requestor?: Reference;
	/** This is a PaymentReconciliation resource. */
	resourceType: "PaymentReconciliation";
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getPaymentReconciliation_DetailSchema =
	(): z.ZodType<PaymentReconciliation_Detail> =>
		PaymentReconciliation_DetailSchemaInternal as z.ZodType<PaymentReconciliation_Detail>;
const getPaymentReconciliation_ProcessNoteSchema =
	(): z.ZodType<PaymentReconciliation_ProcessNote> =>
		PaymentReconciliation_ProcessNoteSchemaInternal as z.ZodType<PaymentReconciliation_ProcessNote>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PaymentReconciliationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		created: fhirDateTime(),
		_created: z.lazy(getElementSchema).optional(),
		detail: z.lazy(getPaymentReconciliation_DetailSchema).array().optional(),
		disposition: fhirString().optional(),
		_disposition: z.lazy(getElementSchema).optional(),
		formCode: z.lazy(getCodeableConceptSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		outcome: z.enum(["complete", "error", "partial", "queued"]).optional(),
		_outcome: z.lazy(getElementSchema).optional(),
		paymentAmount: z.lazy(getMoneySchema),
		paymentDate: fhirDate(),
		_paymentDate: z.lazy(getElementSchema).optional(),
		paymentIdentifier: z.lazy(getIdentifierSchema).optional(),
		paymentIssuer: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		processNote: z
			.lazy(getPaymentReconciliation_ProcessNoteSchema)
			.array()
			.optional(),
		request: z.lazy(getReferenceSchema).optional(),
		requestor: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("PaymentReconciliation"),
		status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
		_status: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.paymentIssuer,
				"paymentIssuer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.request,
				"request",
				["http://hl7.org/fhir/StructureDefinition/Task"],
				["Task"],
				ctx,
			);
			validateReferenceTarget(
				record.requestor,
				"requestor",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const PaymentReconciliationSchema =
	PaymentReconciliationSchemaInternal as z.ZodType<PaymentReconciliation>;
