// Profile: http://hl7.org/fhir/StructureDefinition/Account
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Account_Coverage } from "./Account_Coverage";
import { Account_CoverageSchemaInternal } from "./Account_Coverage";
import type { Account_Guarantor } from "./Account_Guarantor";
import { Account_GuarantorSchemaInternal } from "./Account_Guarantor";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Account Resource */
export interface Account extends DomainResource {
	/**
	 * Indicates the period of time over which the account is allowed to have transactions posted to it.
	 * This period may be different to the coveragePeriod which is the duration of time that services may occur.
	 */
	active?: Period;
	/** Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative. */
	balance?: Money;
	/** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account. */
	coverage?: Array<Account_Coverage>;
	/** Provides additional information about what the account tracks and how it is used. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Parties financially responsible for the account. */
	guarantor?: Array<Account_Guarantor>;
	/** Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number). */
	identifier?: Array<Identifier>;
	/** Name used for the account when displaying it to humans in reports, etc. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Indicates the organization, department, etc. with responsibility for the account. */
	owner?: Reference;
	/** Identifies the period of time the account applies to; e.g. accounts created per fiscal year, quarter, etc. */
	period?: Period;
	/** This is a Account resource. */
	resourceType: "Account";
	/** Indicates whether the account is presently used/usable or not. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
	/** Identifies the patient, device, practitioner, location or other object the account is associated with. */
	subject?: Reference;
	/** Categorizes the account for reporting and searching purposes. */
	type?: CodeableConcept;
}

const getAccount_CoverageSchema = (): z.ZodType<Account_Coverage> =>
	Account_CoverageSchemaInternal as z.ZodType<Account_Coverage>;
const getAccount_GuarantorSchema = (): z.ZodType<Account_Guarantor> =>
	Account_GuarantorSchemaInternal as z.ZodType<Account_Guarantor>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AccountSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.lazy(getPeriodSchema).optional(),
	balance: z.lazy(getMoneySchema).optional(),
	coverage: z.lazy(getAccount_CoverageSchema).array().optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	guarantor: z.lazy(getAccount_GuarantorSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	owner: z.lazy(getReferenceSchema).optional(),
	period: z.lazy(getPeriodSchema).optional(),
	resourceType: z.literal("Account"),
	status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
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
			],
			[
				"Device",
				"HealthcareService",
				"Location",
				"Organization",
				"Patient",
				"Practitioner",
			],
			ctx,
		);
	});

export const AccountSchema = AccountSchemaInternal as z.ZodType<Account>;
