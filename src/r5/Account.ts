// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirInstant, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Account_Balance } from "./Account_Balance";
import { Account_BalanceSchemaInternal } from "./Account_Balance";
import type { Account_Coverage } from "./Account_Coverage";
import { Account_CoverageSchemaInternal } from "./Account_Coverage";
import type { Account_Diagnosis } from "./Account_Diagnosis";
import { Account_DiagnosisSchemaInternal } from "./Account_Diagnosis";
import type { Account_Guarantor } from "./Account_Guarantor";
import { Account_GuarantorSchemaInternal } from "./Account_Guarantor";
import type { Account_Procedure } from "./Account_Procedure";
import { Account_ProcedureSchemaInternal } from "./Account_Procedure";
import type { Account_RelatedAccount } from "./Account_RelatedAccount";
import { Account_RelatedAccountSchemaInternal } from "./Account_RelatedAccount";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface Account extends DomainResource {
	/** The calculated account balances - these are calculated and processed by the finance system.The balances with a `term` that is not current are usually generated/updated by an invoicing or similar process. */
	balance?: Array<Account_Balance>;
	/** The BillingStatus tracks the lifecycle of the account through the billing process. It indicates how transactions are treated when they are allocated to the account. */
	billingStatus?: CodeableConcept;
	/** Time the balance amount was calculated. */
	calculatedAt?: string;
	/** Extensions for calculatedAt */
	_calculatedAt?: Element;
	/** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account. */
	coverage?: Array<Account_Coverage>;
	/** The default currency for the account. */
	currency?: CodeableConcept;
	/** Provides additional information about what the account tracks and how it is used. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** When using an account for billing a specific Encounter the set of diagnoses that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s). */
	diagnosis?: Array<Account_Diagnosis>;
	/** The parties responsible for balancing the account if other payment options fall short. */
	guarantor?: Array<Account_Guarantor>;
	/** Unique identifier used to reference the account.  Might or might not be intended for human use (e.g. credit card number). */
	identifier?: Array<Identifier>;
	/** Name used for the account when displaying it to humans in reports, etc. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Indicates the service area, hospital, department, etc. with responsibility for managing the Account. */
	owner?: Reference;
	/** When using an account for billing a specific Encounter the set of procedures that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s). */
	procedure?: Array<Account_Procedure>;
	/** Other associated accounts related to this account. */
	relatedAccount?: Array<Account_RelatedAccount>;
	/** This is a Account resource. */
	resourceType: "Account";
	/** The date range of services associated with this account. */
	servicePeriod?: Period;
	/** Indicates whether the account is presently used/usable or not. */
	status: "active" | "entered-in-error" | "inactive" | "on-hold" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the Account. */
	subject?: Array<Reference>;
	/** Categorizes the account for reporting and searching purposes. */
	type?: CodeableConcept;
}

const getAccount_BalanceSchema = (): z.ZodType<Account_Balance> =>
	Account_BalanceSchemaInternal as z.ZodType<Account_Balance>;
const getAccount_CoverageSchema = (): z.ZodType<Account_Coverage> =>
	Account_CoverageSchemaInternal as z.ZodType<Account_Coverage>;
const getAccount_DiagnosisSchema = (): z.ZodType<Account_Diagnosis> =>
	Account_DiagnosisSchemaInternal as z.ZodType<Account_Diagnosis>;
const getAccount_GuarantorSchema = (): z.ZodType<Account_Guarantor> =>
	Account_GuarantorSchemaInternal as z.ZodType<Account_Guarantor>;
const getAccount_ProcedureSchema = (): z.ZodType<Account_Procedure> =>
	Account_ProcedureSchemaInternal as z.ZodType<Account_Procedure>;
const getAccount_RelatedAccountSchema = (): z.ZodType<Account_RelatedAccount> =>
	Account_RelatedAccountSchemaInternal as z.ZodType<Account_RelatedAccount>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AccountSchemaInternal = DomainResourceSchemaInternal.extend({
	balance: z.lazy(getAccount_BalanceSchema).array().optional(),
	billingStatus: z.lazy(getCodeableConceptSchema).optional(),
	calculatedAt: fhirInstant().optional(),
	_calculatedAt: z.lazy(getElementSchema).optional(),
	coverage: z.lazy(getAccount_CoverageSchema).array().optional(),
	currency: z.lazy(getCodeableConceptSchema).optional(),
	description: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_description: z.lazy(getElementSchema).optional(),
	diagnosis: z.lazy(getAccount_DiagnosisSchema).array().optional(),
	guarantor: z.lazy(getAccount_GuarantorSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	owner: z.lazy(getReferenceSchema).optional(),
	procedure: z.lazy(getAccount_ProcedureSchema).array().optional(),
	relatedAccount: z.lazy(getAccount_RelatedAccountSchema).array().optional(),
	resourceType: z.literal("Account"),
	servicePeriod: z.lazy(getPeriodSchema).optional(),
	status: z.enum([
		"active",
		"entered-in-error",
		"inactive",
		"on-hold",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.owner,
			"owner",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			[
				"Device",
				"HealthcareService",
				"Location",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
			],
			ctx,
		);
	});

export const AccountSchema = AccountSchemaInternal as z.ZodType<Account>;
