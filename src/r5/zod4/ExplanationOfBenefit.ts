// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExplanationOfBenefit_Accident } from "./ExplanationOfBenefit_Accident";
import { ExplanationOfBenefit_AccidentSchemaInternal } from "./ExplanationOfBenefit_Accident";
import type { ExplanationOfBenefit_AddItem } from "./ExplanationOfBenefit_AddItem";
import { ExplanationOfBenefit_AddItemSchemaInternal } from "./ExplanationOfBenefit_AddItem";
import type { ExplanationOfBenefit_BenefitBalance } from "./ExplanationOfBenefit_BenefitBalance";
import { ExplanationOfBenefit_BenefitBalanceSchemaInternal } from "./ExplanationOfBenefit_BenefitBalance";
import type { ExplanationOfBenefit_CareTeam } from "./ExplanationOfBenefit_CareTeam";
import { ExplanationOfBenefit_CareTeamSchemaInternal } from "./ExplanationOfBenefit_CareTeam";
import type { ExplanationOfBenefit_Diagnosis } from "./ExplanationOfBenefit_Diagnosis";
import { ExplanationOfBenefit_DiagnosisSchemaInternal } from "./ExplanationOfBenefit_Diagnosis";
import type { ExplanationOfBenefit_Event } from "./ExplanationOfBenefit_Event";
import { ExplanationOfBenefit_EventSchemaInternal } from "./ExplanationOfBenefit_Event";
import type { ExplanationOfBenefit_Insurance } from "./ExplanationOfBenefit_Insurance";
import { ExplanationOfBenefit_InsuranceSchemaInternal } from "./ExplanationOfBenefit_Insurance";
import type { ExplanationOfBenefit_Item } from "./ExplanationOfBenefit_Item";
import { ExplanationOfBenefit_ItemSchemaInternal } from "./ExplanationOfBenefit_Item";
import type { ExplanationOfBenefit_Payee } from "./ExplanationOfBenefit_Payee";
import { ExplanationOfBenefit_PayeeSchemaInternal } from "./ExplanationOfBenefit_Payee";
import type { ExplanationOfBenefit_Payment } from "./ExplanationOfBenefit_Payment";
import { ExplanationOfBenefit_PaymentSchemaInternal } from "./ExplanationOfBenefit_Payment";
import type { ExplanationOfBenefit_Procedure } from "./ExplanationOfBenefit_Procedure";
import { ExplanationOfBenefit_ProcedureSchemaInternal } from "./ExplanationOfBenefit_Procedure";
import type { ExplanationOfBenefit_ProcessNote } from "./ExplanationOfBenefit_ProcessNote";
import { ExplanationOfBenefit_ProcessNoteSchemaInternal } from "./ExplanationOfBenefit_ProcessNote";
import type { ExplanationOfBenefit_Related } from "./ExplanationOfBenefit_Related";
import { ExplanationOfBenefit_RelatedSchemaInternal } from "./ExplanationOfBenefit_Related";
import type { ExplanationOfBenefit_SupportingInfo } from "./ExplanationOfBenefit_SupportingInfo";
import { ExplanationOfBenefit_SupportingInfoSchemaInternal } from "./ExplanationOfBenefit_SupportingInfo";
import type { ExplanationOfBenefit_Total } from "./ExplanationOfBenefit_Total";
import { ExplanationOfBenefit_TotalSchemaInternal } from "./ExplanationOfBenefit_Total";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefit extends DomainResource {
	/** Details of a accident which resulted in injuries which required the products and services listed in the claim. */
	accident?: ExplanationOfBenefit_Accident;
	/** The first-tier service adjudications for payor added product or service lines. */
	addItem?: Array<ExplanationOfBenefit_AddItem>;
	/** The adjudication results which are presented at the header level rather than at the line-item or add-item levels. */
	adjudication?: Array<unknown>;
	/** Balance by Benefit Category. */
	benefitBalance?: Array<ExplanationOfBenefit_BenefitBalance>;
	/** The term of the benefits documented in this response. */
	benefitPeriod?: Period;
	/** The period for which charges are being submitted. */
	billablePeriod?: Period;
	/** The members of the team who provided the products and services. */
	careTeam?: Array<ExplanationOfBenefit_CareTeam>;
	/** The business identifier for the instance of the adjudication request: claim predetermination or preauthorization. */
	claim?: Reference;
	/** The business identifier for the instance of the adjudication response: claim, predetermination or preauthorization response. */
	claimResponse?: Reference;
	/** The date this resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** The result of the claim, predetermination, or preauthorization adjudication. */
	decision?: CodeableConcept;
	/** Information about diagnoses relevant to the claim items. */
	diagnosis?: Array<ExplanationOfBenefit_Diagnosis>;
	/** A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system. */
	diagnosisRelatedGroup?: CodeableConcept;
	/** A human readable description of the status of the adjudication. */
	disposition?: string;
	/** Extensions for disposition */
	_disposition?: Element;
	/** Healthcare encounters related to this claim. */
	encounter?: Array<Reference>;
	/** Individual who created the claim, predetermination or preauthorization. */
	enterer?: Reference;
	/** Information code for an event with a corresponding date or period. */
	event?: Array<ExplanationOfBenefit_Event>;
	/** Facility where the services were provided. */
	facility?: Reference;
	/** The actual form, by reference or inclusion, for printing the content or an EOB. */
	form?: Attachment;
	/** A code for the form to be used for printing the content. */
	formCode?: CodeableConcept;
	/** A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom. */
	fundsReserve?: CodeableConcept;
	/** A code to indicate whether and for whom funds are to be reserved for future claims. */
	fundsReserveRequested?: CodeableConcept;
	/** A unique identifier assigned to this explanation of benefit. */
	identifier?: Array<Identifier>;
	/** Financial instruments for reimbursement for the health care products and services specified on the claim. */
	insurance?: Array<ExplanationOfBenefit_Insurance>;
	/** The party responsible for authorization, adjudication and reimbursement. */
	insurer?: Reference;
	/** A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details. */
	item?: Array<ExplanationOfBenefit_Item>;
	/** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
	originalPrescription?: Reference;
	/** The outcome of the claim, predetermination, or preauthorization processing. */
	outcome: "complete" | "error" | "partial" | "queued";
	/** Extensions for outcome */
	_outcome?: Element;
	/** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for forecast reimbursement is sought. */
	patient: Reference;
	/** The amount paid by the patient, in total at the claim claim level or specifically for the item and detail level, to the provider for goods and services. */
	patientPaid?: Money;
	/** The party to be reimbursed for cost of the products and services according to the terms of the policy. */
	payee?: ExplanationOfBenefit_Payee;
	/** Payment details for the adjudication of the claim. */
	payment?: ExplanationOfBenefit_Payment;
	/** Reference from the Insurer which is used in later communications which refers to this adjudication. */
	preAuthRef?: Array<string | null>;
	/** Extensions for preAuthRef */
	_preAuthRef?: Array<Element | null>;
	/** The timeframe during which the supplied preauthorization reference may be quoted on claims to obtain the adjudication as provided. */
	preAuthRefPeriod?: Array<Period>;
	/** This indicates the relative order of a series of EOBs related to different coverages for the same suite of services. */
	precedence?: number;
	/** Extensions for precedence */
	_precedence?: Element;
	/** Prescription is the document/authorization given to the claim author for them to provide products and services for which consideration (reimbursement) is sought. Could be a RX for medications, an 'order' for oxygen or wheelchair or physiotherapy treatments. */
	prescription?: Reference;
	/** The provider-required urgency of processing the request. Typical values include: stat, normal deferred. */
	priority?: CodeableConcept;
	/** Procedures performed on the patient relevant to the billing items with the claim. */
	procedure?: Array<ExplanationOfBenefit_Procedure>;
	/** A note that describes or explains adjudication results in a human readable form. */
	processNote?: Array<ExplanationOfBenefit_ProcessNote>;
	/** The provider which is responsible for the claim, predetermination or preauthorization. */
	provider?: Reference;
	/** The referral information received by the claim author, it is not to be used when the author generates a referral for a patient. A copy of that referral may be provided as supporting information. Some insurers require proof of referral to pay for services or to pay specialist rates for services. */
	referral?: Reference;
	/** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event. */
	related?: Array<ExplanationOfBenefit_Related>;
	/** This is a ExplanationOfBenefit resource. */
	resourceType: "ExplanationOfBenefit";
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	subType?: CodeableConcept;
	/** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
	supportingInfo?: Array<ExplanationOfBenefit_SupportingInfo>;
	/** Categorized monetary totals for the adjudication. */
	total?: Array<ExplanationOfBenefit_Total>;
	/** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners. */
	traceNumber?: Array<Identifier>;
	/** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
	type: CodeableConcept;
	/** A code to indicate whether the nature of the request is: Claim - A request to an Insurer to adjudicate the supplied charges for health care goods and services under the identified policy and to pay the determined Benefit amount, if any; Preauthorization - A request to an Insurer to adjudicate the supplied proposed future charges for health care goods and services under the identified policy and to approve the services and provide the expected benefit amounts and potentially to reserve funds to pay the benefits when Claims for the indicated services are later submitted; or, Pre-determination - A request to an Insurer to adjudicate the supplied 'what if' charges for health care goods and services under the identified policy and report back what the Benefit payable would be had the services actually been provided. */
	use: "claim" | "preauthorization" | "predetermination";
	/** Extensions for use */
	_use?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExplanationOfBenefit_AccidentSchema =
	(): z.ZodType<ExplanationOfBenefit_Accident> =>
		ExplanationOfBenefit_AccidentSchemaInternal as z.ZodType<ExplanationOfBenefit_Accident>;
const getExplanationOfBenefit_AddItemSchema =
	(): z.ZodType<ExplanationOfBenefit_AddItem> =>
		ExplanationOfBenefit_AddItemSchemaInternal as z.ZodType<ExplanationOfBenefit_AddItem>;
const getExplanationOfBenefit_BenefitBalanceSchema =
	(): z.ZodType<ExplanationOfBenefit_BenefitBalance> =>
		ExplanationOfBenefit_BenefitBalanceSchemaInternal as z.ZodType<ExplanationOfBenefit_BenefitBalance>;
const getExplanationOfBenefit_CareTeamSchema =
	(): z.ZodType<ExplanationOfBenefit_CareTeam> =>
		ExplanationOfBenefit_CareTeamSchemaInternal as z.ZodType<ExplanationOfBenefit_CareTeam>;
const getExplanationOfBenefit_DiagnosisSchema =
	(): z.ZodType<ExplanationOfBenefit_Diagnosis> =>
		ExplanationOfBenefit_DiagnosisSchemaInternal as z.ZodType<ExplanationOfBenefit_Diagnosis>;
const getExplanationOfBenefit_EventSchema =
	(): z.ZodType<ExplanationOfBenefit_Event> =>
		ExplanationOfBenefit_EventSchemaInternal as z.ZodType<ExplanationOfBenefit_Event>;
const getExplanationOfBenefit_InsuranceSchema =
	(): z.ZodType<ExplanationOfBenefit_Insurance> =>
		ExplanationOfBenefit_InsuranceSchemaInternal as z.ZodType<ExplanationOfBenefit_Insurance>;
const getExplanationOfBenefit_ItemSchema =
	(): z.ZodType<ExplanationOfBenefit_Item> =>
		ExplanationOfBenefit_ItemSchemaInternal as z.ZodType<ExplanationOfBenefit_Item>;
const getExplanationOfBenefit_PayeeSchema =
	(): z.ZodType<ExplanationOfBenefit_Payee> =>
		ExplanationOfBenefit_PayeeSchemaInternal as z.ZodType<ExplanationOfBenefit_Payee>;
const getExplanationOfBenefit_PaymentSchema =
	(): z.ZodType<ExplanationOfBenefit_Payment> =>
		ExplanationOfBenefit_PaymentSchemaInternal as z.ZodType<ExplanationOfBenefit_Payment>;
const getExplanationOfBenefit_ProcedureSchema =
	(): z.ZodType<ExplanationOfBenefit_Procedure> =>
		ExplanationOfBenefit_ProcedureSchemaInternal as z.ZodType<ExplanationOfBenefit_Procedure>;
const getExplanationOfBenefit_ProcessNoteSchema =
	(): z.ZodType<ExplanationOfBenefit_ProcessNote> =>
		ExplanationOfBenefit_ProcessNoteSchemaInternal as z.ZodType<ExplanationOfBenefit_ProcessNote>;
const getExplanationOfBenefit_RelatedSchema =
	(): z.ZodType<ExplanationOfBenefit_Related> =>
		ExplanationOfBenefit_RelatedSchemaInternal as z.ZodType<ExplanationOfBenefit_Related>;
const getExplanationOfBenefit_SupportingInfoSchema =
	(): z.ZodType<ExplanationOfBenefit_SupportingInfo> =>
		ExplanationOfBenefit_SupportingInfoSchemaInternal as z.ZodType<ExplanationOfBenefit_SupportingInfo>;
const getExplanationOfBenefit_TotalSchema =
	(): z.ZodType<ExplanationOfBenefit_Total> =>
		ExplanationOfBenefit_TotalSchemaInternal as z.ZodType<ExplanationOfBenefit_Total>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefitSchemaInternal =
	DomainResourceSchemaInternal.extend({
		accident: z.lazy(getExplanationOfBenefit_AccidentSchema).optional(),
		addItem: z.lazy(getExplanationOfBenefit_AddItemSchema).array().optional(),
		adjudication: z.unknown().array().optional(),
		benefitBalance: z
			.lazy(getExplanationOfBenefit_BenefitBalanceSchema)
			.array()
			.optional(),
		benefitPeriod: z.lazy(getPeriodSchema).optional(),
		billablePeriod: z.lazy(getPeriodSchema).optional(),
		careTeam: z.lazy(getExplanationOfBenefit_CareTeamSchema).array().optional(),
		claim: z.lazy(getReferenceSchema).optional(),
		claimResponse: z.lazy(getReferenceSchema).optional(),
		created: fhirDateTime(),
		_created: z.lazy(getElementSchema).optional(),
		decision: z.lazy(getCodeableConceptSchema).optional(),
		diagnosis: z
			.lazy(getExplanationOfBenefit_DiagnosisSchema)
			.array()
			.optional(),
		diagnosisRelatedGroup: z.lazy(getCodeableConceptSchema).optional(),
		disposition: fhirString().optional(),
		_disposition: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).array().optional(),
		enterer: z.lazy(getReferenceSchema).optional(),
		event: z.lazy(getExplanationOfBenefit_EventSchema).array().optional(),
		facility: z.lazy(getReferenceSchema).optional(),
		form: z.lazy(getAttachmentSchema).optional(),
		formCode: z.lazy(getCodeableConceptSchema).optional(),
		fundsReserve: z.lazy(getCodeableConceptSchema).optional(),
		fundsReserveRequested: z.lazy(getCodeableConceptSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		insurance: z
			.lazy(getExplanationOfBenefit_InsuranceSchema)
			.array()
			.optional(),
		insurer: z.lazy(getReferenceSchema).optional(),
		item: z.lazy(getExplanationOfBenefit_ItemSchema).array().optional(),
		originalPrescription: z.lazy(getReferenceSchema).optional(),
		outcome: z.enum(["complete", "error", "partial", "queued"]),
		_outcome: z.lazy(getElementSchema).optional(),
		patient: z.lazy(getReferenceSchema),
		patientPaid: z.lazy(getMoneySchema).optional(),
		payee: z.lazy(getExplanationOfBenefit_PayeeSchema).optional(),
		payment: z.lazy(getExplanationOfBenefit_PaymentSchema).optional(),
		preAuthRef: fhirString().nullable().array().optional(),
		_preAuthRef: z.lazy(getElementSchema).nullable().array().optional(),
		preAuthRefPeriod: z.lazy(getPeriodSchema).array().optional(),
		precedence: z.number().int().positive().optional(),
		_precedence: z.lazy(getElementSchema).optional(),
		prescription: z.lazy(getReferenceSchema).optional(),
		priority: z.lazy(getCodeableConceptSchema).optional(),
		procedure: z
			.lazy(getExplanationOfBenefit_ProcedureSchema)
			.array()
			.optional(),
		processNote: z
			.lazy(getExplanationOfBenefit_ProcessNoteSchema)
			.array()
			.optional(),
		provider: z.lazy(getReferenceSchema).optional(),
		referral: z.lazy(getReferenceSchema).optional(),
		related: z.lazy(getExplanationOfBenefit_RelatedSchema).array().optional(),
		resourceType: z.literal("ExplanationOfBenefit"),
		status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
		_status: z.lazy(getElementSchema).optional(),
		subType: z.lazy(getCodeableConceptSchema).optional(),
		supportingInfo: z
			.lazy(getExplanationOfBenefit_SupportingInfoSchema)
			.array()
			.optional(),
		total: z.lazy(getExplanationOfBenefit_TotalSchema).array().optional(),
		traceNumber: z.lazy(getIdentifierSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
		use: z.enum(["claim", "preauthorization", "predetermination"]),
		_use: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.preAuthRef,
				record._preAuthRef,
				"preAuthRef",
				"_preAuthRef",
				ctx,
			);
			validateReferenceTarget(
				record.claim,
				"claim",
				["http://hl7.org/fhir/StructureDefinition/Claim"],
				["Claim"],
				ctx,
			);
			validateReferenceTarget(
				record.claimResponse,
				"claimResponse",
				["http://hl7.org/fhir/StructureDefinition/ClaimResponse"],
				["ClaimResponse"],
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
				record.enterer,
				"enterer",
				[
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.facility,
				"facility",
				[
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Organization",
				],
				["Location", "Organization"],
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
				[
					"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
					"http://hl7.org/fhir/StructureDefinition/VisionPrescription",
				],
				["MedicationRequest", "VisionPrescription"],
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

export const ExplanationOfBenefitSchema =
	ExplanationOfBenefitSchemaInternal as z.ZodType<ExplanationOfBenefit>;
