// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { ClaimResponse_AddItem } from "./ClaimResponse_AddItem";
import { ClaimResponse_AddItemSchemaInternal } from "./ClaimResponse_AddItem";
import type { ClaimResponse_Error } from "./ClaimResponse_Error";
import { ClaimResponse_ErrorSchemaInternal } from "./ClaimResponse_Error";
import type { ClaimResponse_Insurance } from "./ClaimResponse_Insurance";
import { ClaimResponse_InsuranceSchemaInternal } from "./ClaimResponse_Insurance";
import type { ClaimResponse_Item } from "./ClaimResponse_Item";
import { ClaimResponse_ItemSchemaInternal } from "./ClaimResponse_Item";
import type { ClaimResponse_Payment } from "./ClaimResponse_Payment";
import { ClaimResponse_PaymentSchemaInternal } from "./ClaimResponse_Payment";
import type { ClaimResponse_ProcessNote } from "./ClaimResponse_ProcessNote";
import { ClaimResponse_ProcessNoteSchemaInternal } from "./ClaimResponse_ProcessNote";
import type { ClaimResponse_Total } from "./ClaimResponse_Total";
import { ClaimResponse_TotalSchemaInternal } from "./ClaimResponse_Total";
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

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponse extends DomainResource {
	/** The first-tier service adjudications for payor added product or service lines. */
	addItem?: Array<ClaimResponse_AddItem>;
	/** The adjudication results which are presented at the header level rather than at the line-item or add-item levels. */
	adjudication?: Array<unknown>;
	/** Request for additional supporting or authorizing information. */
	communicationRequest?: Array<Reference>;
	/** The date this resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** A human readable description of the status of the adjudication. */
	disposition?: string;
	/** Extensions for disposition */
	_disposition?: Element;
	/** Errors encountered during the processing of the adjudication. */
	error?: Array<ClaimResponse_Error>;
	/** The actual form, by reference or inclusion, for printing the content or an EOB. */
	form?: Attachment;
	/** A code for the form to be used for printing the content. */
	formCode?: CodeableConcept;
	/** A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom. */
	fundsReserve?: CodeableConcept;
	/** A unique identifier assigned to this claim response. */
	identifier?: Array<Identifier>;
	/** Financial instruments for reimbursement for the health care products and services specified on the claim. */
	insurance?: Array<ClaimResponse_Insurance>;
	/** The party responsible for authorization, adjudication and reimbursement. */
	insurer: Reference;
	/** A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details. */
	item?: Array<ClaimResponse_Item>;
	/** The outcome of the claim, predetermination, or preauthorization processing. */
	outcome: "complete" | "error" | "partial" | "queued";
	/** Extensions for outcome */
	_outcome?: Element;
	/** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought. */
	patient: Reference;
	/** Type of Party to be reimbursed: subscriber, provider, other. */
	payeeType?: CodeableConcept;
	/** Payment details for the adjudication of the claim. */
	payment?: ClaimResponse_Payment;
	/** The time frame during which this authorization is effective. */
	preAuthPeriod?: Period;
	/** Reference from the Insurer which is used in later communications which refers to this adjudication. */
	preAuthRef?: string;
	/** Extensions for preAuthRef */
	_preAuthRef?: Element;
	/** A note that describes or explains adjudication results in a human readable form. */
	processNote?: Array<ClaimResponse_ProcessNote>;
	/** Original request resource reference. */
	request?: Reference;
	/** The provider which is responsible for the claim, predetermination or preauthorization. */
	requestor?: Reference;
	/** This is a ClaimResponse resource. */
	resourceType: "ClaimResponse";
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	subType?: CodeableConcept;
	/** Categorized monetary totals for the adjudication. */
	total?: Array<ClaimResponse_Total>;
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	type: CodeableConcept;
	/** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
	use: "claim" | "preauthorization" | "predetermination";
	/** Extensions for use */
	_use?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getClaimResponse_AddItemSchema = (): z.ZodType<ClaimResponse_AddItem> =>
	ClaimResponse_AddItemSchemaInternal as z.ZodType<ClaimResponse_AddItem>;
const getClaimResponse_ErrorSchema = (): z.ZodType<ClaimResponse_Error> =>
	ClaimResponse_ErrorSchemaInternal as z.ZodType<ClaimResponse_Error>;
const getClaimResponse_InsuranceSchema =
	(): z.ZodType<ClaimResponse_Insurance> =>
		ClaimResponse_InsuranceSchemaInternal as z.ZodType<ClaimResponse_Insurance>;
const getClaimResponse_ItemSchema = (): z.ZodType<ClaimResponse_Item> =>
	ClaimResponse_ItemSchemaInternal as z.ZodType<ClaimResponse_Item>;
const getClaimResponse_PaymentSchema = (): z.ZodType<ClaimResponse_Payment> =>
	ClaimResponse_PaymentSchemaInternal as z.ZodType<ClaimResponse_Payment>;
const getClaimResponse_ProcessNoteSchema =
	(): z.ZodType<ClaimResponse_ProcessNote> =>
		ClaimResponse_ProcessNoteSchemaInternal as z.ZodType<ClaimResponse_ProcessNote>;
const getClaimResponse_TotalSchema = (): z.ZodType<ClaimResponse_Total> =>
	ClaimResponse_TotalSchemaInternal as z.ZodType<ClaimResponse_Total>;
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
export const ClaimResponseSchemaInternal = DomainResourceSchemaInternal.extend({
	addItem: z.lazy(getClaimResponse_AddItemSchema).array().optional(),
	adjudication: z.unknown().array().optional(),
	communicationRequest: z.lazy(getReferenceSchema).array().optional(),
	created: fhirDateTime(),
	_created: z.lazy(getElementSchema).optional(),
	disposition: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_disposition: z.lazy(getElementSchema).optional(),
	error: z.lazy(getClaimResponse_ErrorSchema).array().optional(),
	form: z.lazy(getAttachmentSchema).optional(),
	formCode: z.lazy(getCodeableConceptSchema).optional(),
	fundsReserve: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	insurance: z.lazy(getClaimResponse_InsuranceSchema).array().optional(),
	insurer: z.lazy(getReferenceSchema),
	item: z.lazy(getClaimResponse_ItemSchema).array().optional(),
	outcome: z.enum(["complete", "error", "partial", "queued"]),
	_outcome: z.lazy(getElementSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	payeeType: z.lazy(getCodeableConceptSchema).optional(),
	payment: z.lazy(getClaimResponse_PaymentSchema).optional(),
	preAuthPeriod: z.lazy(getPeriodSchema).optional(),
	preAuthRef: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_preAuthRef: z.lazy(getElementSchema).optional(),
	processNote: z.lazy(getClaimResponse_ProcessNoteSchema).array().optional(),
	request: z.lazy(getReferenceSchema).optional(),
	requestor: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("ClaimResponse"),
	status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
	_status: z.lazy(getElementSchema).optional(),
	subType: z.lazy(getCodeableConceptSchema).optional(),
	total: z.lazy(getClaimResponse_TotalSchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema),
	use: z.enum(["claim", "preauthorization", "predetermination"]),
	_use: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.communicationRequest,
			"communicationRequest",
			["http://hl7.org/fhir/StructureDefinition/CommunicationRequest"],
			["CommunicationRequest"],
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
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.request,
			"request",
			["http://hl7.org/fhir/StructureDefinition/Claim"],
			["Claim"],
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

export const ClaimResponseSchema =
	ClaimResponseSchemaInternal as z.ZodType<ClaimResponse>;
