// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Claim_Accident } from "./Claim_Accident";
import { Claim_AccidentSchemaInternal } from "./Claim_Accident";
import type { Claim_CareTeam } from "./Claim_CareTeam";
import { Claim_CareTeamSchemaInternal } from "./Claim_CareTeam";
import type { Claim_Diagnosis } from "./Claim_Diagnosis";
import { Claim_DiagnosisSchemaInternal } from "./Claim_Diagnosis";
import type { Claim_Information } from "./Claim_Information";
import { Claim_InformationSchemaInternal } from "./Claim_Information";
import type { Claim_Insurance } from "./Claim_Insurance";
import { Claim_InsuranceSchemaInternal } from "./Claim_Insurance";
import type { Claim_Item } from "./Claim_Item";
import { Claim_ItemSchemaInternal } from "./Claim_Item";
import type { Claim_Payee } from "./Claim_Payee";
import { Claim_PayeeSchemaInternal } from "./Claim_Payee";
import type { Claim_Procedure } from "./Claim_Procedure";
import { Claim_ProcedureSchemaInternal } from "./Claim_Procedure";
import type { Claim_Related } from "./Claim_Related";
import { Claim_RelatedSchemaInternal } from "./Claim_Related";
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

/** Base StructureDefinition for Claim Resource */
export interface Claim extends DomainResource {
	/** An accident which resulted in the need for healthcare services. */
	accident?: Claim_Accident;
	/** The billable period for which charges are being submitted. */
	billablePeriod?: Period;
	/** The members of the team who provided the overall service as well as their role and whether responsible and qualifications. */
	careTeam?: Array<Claim_CareTeam>;
	/** The date when the enclosed suite of services were performed or completed. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** List of patient diagnosis for which care is sought. */
	diagnosis?: Array<Claim_Diagnosis>;
	/** The start and optional end dates of when the patient was precluded from working due to the treatable condition(s). */
	employmentImpacted?: Period;
	/** Person who created the invoice/claim/pre-determination or pre-authorization. */
	enterer?: Reference;
	/** Facility where the services were provided. */
	facility?: Reference;
	/** In the case of a Pre-Determination/Pre-Authorization the provider may request that funds in the amount of the expected Benefit be reserved ('Patient' or 'Provider') to pay for the Benefits determined on the subsequent claim(s). 'None' explicitly indicates no funds reserving is requested. */
	fundsReserve?: CodeableConcept;
	/** The start and optional end dates of when the patient was confined to a treatment center. */
	hospitalization?: Period;
	/** The business identifier for the instance: claim number, pre-determination or pre-authorization number. */
	identifier?: Array<Identifier>;
	/** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required. */
	information?: Array<Claim_Information>;
	/** Financial instrument by which payment information for health care. */
	insurance?: Array<Claim_Insurance>;
	/** The Insurer who is target of the request. */
	insurer?: Reference;
	/** First tier of goods and services. */
	item?: Array<Claim_Item>;
	/** The organization which is responsible for the bill, claim pre-determination, pre-authorization. */
	organization?: Reference;
	/** Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'. */
	originalPrescription?: Reference;
	/** Patient Resource. */
	patient?: Reference;
	/** The party to be reimbursed for the services. */
	payee?: Claim_Payee;
	/** Prescription to support the dispensing of Pharmacy or Vision products. */
	prescription?: Reference;
	/** Immediate (STAT), best effort (NORMAL), deferred (DEFER). */
	priority?: CodeableConcept;
	/** Ordered list of patient procedures performed to support the adjudication. */
	procedure?: Array<Claim_Procedure>;
	/** The provider which is responsible for the bill, claim pre-determination, pre-authorization. */
	provider?: Reference;
	/** The referral resource which lists the date, practitioner, reason and other supporting information. */
	referral?: Reference;
	/** Other claims which are related to this claim such as prior claim versions or for related services. */
	related?: Array<Claim_Related>;
	/** This is a Claim resource. */
	resourceType: "Claim";
	/** The status of the resource instance. */
	status?: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType. */
	subType?: Array<CodeableConcept>;
	/** The total value of the claim. */
	total?: Money;
	/** The category of claim, eg, oral, pharmacy, vision, insitutional, professional. */
	type?: CodeableConcept;
	/** Complete (Bill or Claim), Proposed (Pre-Authorization), Exploratory (Pre-determination). */
	use?: "complete" | "exploratory" | "other" | "proposed";
	/** Extensions for use */
	_use?: Element;
}

const getClaim_AccidentSchema = (): z.ZodType<Claim_Accident> =>
	Claim_AccidentSchemaInternal as z.ZodType<Claim_Accident>;
const getClaim_CareTeamSchema = (): z.ZodType<Claim_CareTeam> =>
	Claim_CareTeamSchemaInternal as z.ZodType<Claim_CareTeam>;
const getClaim_DiagnosisSchema = (): z.ZodType<Claim_Diagnosis> =>
	Claim_DiagnosisSchemaInternal as z.ZodType<Claim_Diagnosis>;
const getClaim_InformationSchema = (): z.ZodType<Claim_Information> =>
	Claim_InformationSchemaInternal as z.ZodType<Claim_Information>;
const getClaim_InsuranceSchema = (): z.ZodType<Claim_Insurance> =>
	Claim_InsuranceSchemaInternal as z.ZodType<Claim_Insurance>;
const getClaim_ItemSchema = (): z.ZodType<Claim_Item> =>
	Claim_ItemSchemaInternal as z.ZodType<Claim_Item>;
const getClaim_PayeeSchema = (): z.ZodType<Claim_Payee> =>
	Claim_PayeeSchemaInternal as z.ZodType<Claim_Payee>;
const getClaim_ProcedureSchema = (): z.ZodType<Claim_Procedure> =>
	Claim_ProcedureSchemaInternal as z.ZodType<Claim_Procedure>;
const getClaim_RelatedSchema = (): z.ZodType<Claim_Related> =>
	Claim_RelatedSchemaInternal as z.ZodType<Claim_Related>;
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
export const ClaimSchemaInternal = DomainResourceSchemaInternal.extend({
	accident: z.lazy(getClaim_AccidentSchema).optional(),
	billablePeriod: z.lazy(getPeriodSchema).optional(),
	careTeam: z.lazy(getClaim_CareTeamSchema).array().optional(),
	created: fhirDateTime().optional(),
	_created: z.lazy(getElementSchema).optional(),
	diagnosis: z.lazy(getClaim_DiagnosisSchema).array().optional(),
	employmentImpacted: z.lazy(getPeriodSchema).optional(),
	enterer: z.lazy(getReferenceSchema).optional(),
	facility: z.lazy(getReferenceSchema).optional(),
	fundsReserve: z.lazy(getCodeableConceptSchema).optional(),
	hospitalization: z.lazy(getPeriodSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	information: z.lazy(getClaim_InformationSchema).array().optional(),
	insurance: z.lazy(getClaim_InsuranceSchema).array().optional(),
	insurer: z.lazy(getReferenceSchema).optional(),
	item: z.lazy(getClaim_ItemSchema).array().optional(),
	organization: z.lazy(getReferenceSchema).optional(),
	originalPrescription: z.lazy(getReferenceSchema).optional(),
	patient: z.lazy(getReferenceSchema).optional(),
	payee: z.lazy(getClaim_PayeeSchema).optional(),
	prescription: z.lazy(getReferenceSchema).optional(),
	priority: z.lazy(getCodeableConceptSchema).optional(),
	procedure: z.lazy(getClaim_ProcedureSchema).array().optional(),
	provider: z.lazy(getReferenceSchema).optional(),
	referral: z.lazy(getReferenceSchema).optional(),
	related: z.lazy(getClaim_RelatedSchema).array().optional(),
	resourceType: z.literal("Claim"),
	status: z
		.enum(["active", "cancelled", "draft", "entered-in-error"])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	subType: z.lazy(getCodeableConceptSchema).array().optional(),
	total: z.lazy(getMoneySchema).optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
	use: z.enum(["complete", "exploratory", "other", "proposed"]).optional(),
	_use: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.enterer,
			"enterer",
			["http://hl7.org/fhir/StructureDefinition/Practitioner"],
			["Practitioner"],
			ctx,
		);
		validateReferenceTarget(
			record.facility,
			"facility",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.insurer,
			"insurer",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.organization,
			"organization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.originalPrescription,
			"originalPrescription",
			["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
			["MedicationRequest"],
			ctx,
		);
		validateReferenceTarget(
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.prescription,
			"prescription",
			["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
			["MedicationRequest"],
			ctx,
		);
		validateReferenceTarget(
			record.provider,
			"provider",
			["http://hl7.org/fhir/StructureDefinition/Practitioner"],
			["Practitioner"],
			ctx,
		);
		validateReferenceTarget(
			record.referral,
			"referral",
			["http://hl7.org/fhir/StructureDefinition/ReferralRequest"],
			["ReferralRequest"],
			ctx,
		);
	});

export const ClaimSchema = ClaimSchemaInternal as z.ZodType<Claim>;
