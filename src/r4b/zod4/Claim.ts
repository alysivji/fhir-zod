// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Claim_Accident } from "./Claim_Accident";
import { Claim_AccidentSchemaInternal } from "./Claim_Accident";
import type { Claim_CareTeam } from "./Claim_CareTeam";
import { Claim_CareTeamSchemaInternal } from "./Claim_CareTeam";
import type { Claim_Diagnosis } from "./Claim_Diagnosis";
import { Claim_DiagnosisSchemaInternal } from "./Claim_Diagnosis";
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
import type { Claim_SupportingInfo } from "./Claim_SupportingInfo";
import { Claim_SupportingInfoSchemaInternal } from "./Claim_SupportingInfo";
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

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface Claim extends DomainResource {
	/** Details of an accident which resulted in injuries which required the products and services listed in the claim. */
	accident?: Claim_Accident;
	/** The period for which charges are being submitted. */
	billablePeriod?: Period;
	/** The members of the team who provided the products and services. */
	careTeam?: Array<Claim_CareTeam>;
	/** The date this resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** Information about diagnoses relevant to the claim items. */
	diagnosis?: Array<Claim_Diagnosis>;
	/** Individual who created the claim, predetermination or preauthorization. */
	enterer?: Reference;
	/** Facility where the services were provided. */
	facility?: Reference;
	/** A code to indicate whether and for whom funds are to be reserved for future claims. */
	fundsReserve?: CodeableConcept;
	/** A unique identifier assigned to this claim. */
	identifier?: Array<Identifier>;
	/** Financial instruments for reimbursement for the health care products and services specified on the claim. */
	insurance: Array<Claim_Insurance>;
	/** The Insurer who is target of the request. */
	insurer?: Reference;
	/** A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details. */
	item?: Array<Claim_Item>;
	/** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
	originalPrescription?: Reference;
	/** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought. */
	patient: Reference;
	/** The party to be reimbursed for cost of the products and services according to the terms of the policy. */
	payee?: Claim_Payee;
	/** Prescription to support the dispensing of pharmacy, device or vision products. */
	prescription?: Reference;
	/** The provider-required urgency of processing the request. Typical values include: stat, routine deferred. */
	priority: CodeableConcept;
	/** Procedures performed on the patient relevant to the billing items with the claim. */
	procedure?: Array<Claim_Procedure>;
	/** The provider which is responsible for the claim, predetermination or preauthorization. */
	provider: Reference;
	/** A reference to a referral resource. */
	referral?: Reference;
	/** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event. */
	related?: Array<Claim_Related>;
	/** This is a Claim resource. */
	resourceType: "Claim";
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	subType?: CodeableConcept;
	/** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
	supportingInfo?: Array<Claim_SupportingInfo>;
	/** The total value of the all the items in the claim. */
	total?: Money;
	/** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
	type: CodeableConcept;
	/** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
	use: "claim" | "preauthorization" | "predetermination";
	/** Extensions for use */
	_use?: Element;
}

const getClaim_AccidentSchema = (): z.ZodType<Claim_Accident> =>
	Claim_AccidentSchemaInternal as z.ZodType<Claim_Accident>;
const getClaim_CareTeamSchema = (): z.ZodType<Claim_CareTeam> =>
	Claim_CareTeamSchemaInternal as z.ZodType<Claim_CareTeam>;
const getClaim_DiagnosisSchema = (): z.ZodType<Claim_Diagnosis> =>
	Claim_DiagnosisSchemaInternal as z.ZodType<Claim_Diagnosis>;
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
const getClaim_SupportingInfoSchema = (): z.ZodType<Claim_SupportingInfo> =>
	Claim_SupportingInfoSchemaInternal as z.ZodType<Claim_SupportingInfo>;
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
	created: fhirDateTime(),
	_created: z.lazy(getElementSchema).optional(),
	diagnosis: z.lazy(getClaim_DiagnosisSchema).array().optional(),
	enterer: z.lazy(getReferenceSchema).optional(),
	facility: z.lazy(getReferenceSchema).optional(),
	fundsReserve: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	insurance: z.lazy(getClaim_InsuranceSchema).array(),
	insurer: z.lazy(getReferenceSchema).optional(),
	item: z.lazy(getClaim_ItemSchema).array().optional(),
	originalPrescription: z.lazy(getReferenceSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	payee: z.lazy(getClaim_PayeeSchema).optional(),
	prescription: z.lazy(getReferenceSchema).optional(),
	priority: z.lazy(getCodeableConceptSchema),
	procedure: z.lazy(getClaim_ProcedureSchema).array().optional(),
	provider: z.lazy(getReferenceSchema),
	referral: z.lazy(getReferenceSchema).optional(),
	related: z.lazy(getClaim_RelatedSchema).array().optional(),
	resourceType: z.literal("Claim"),
	status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
	_status: z.lazy(getElementSchema).optional(),
	subType: z.lazy(getCodeableConceptSchema).optional(),
	supportingInfo: z.lazy(getClaim_SupportingInfoSchema).array().optional(),
	total: z.lazy(getMoneySchema).optional(),
	type: z.lazy(getCodeableConceptSchema),
	use: z.enum(["claim", "preauthorization", "predetermination"]),
	_use: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.enterer,
			"enterer",
			[
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Practitioner", "PractitionerRole"],
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
			record.originalPrescription,
			"originalPrescription",
			[
				"http://hl7.org/fhir/StructureDefinition/DeviceRequest",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/VisionPrescription",
			],
			["DeviceRequest", "MedicationRequest", "VisionPrescription"],
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
			[
				"http://hl7.org/fhir/StructureDefinition/DeviceRequest",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/VisionPrescription",
			],
			["DeviceRequest", "MedicationRequest", "VisionPrescription"],
			ctx,
		);
		validateReferenceTarget(
			record.provider,
			"provider",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Organization", "Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.referral,
			"referral",
			["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
			["ServiceRequest"],
			ctx,
		);
	});

export const ClaimSchema = ClaimSchemaInternal as z.ZodType<Claim>;
