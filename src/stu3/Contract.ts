// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Contract_Agent } from "./Contract_Agent";
import { Contract_AgentSchemaInternal } from "./Contract_Agent";
import type { Contract_Friendly } from "./Contract_Friendly";
import { Contract_FriendlySchemaInternal } from "./Contract_Friendly";
import type { Contract_Legal } from "./Contract_Legal";
import { Contract_LegalSchemaInternal } from "./Contract_Legal";
import type { Contract_Rule } from "./Contract_Rule";
import { Contract_RuleSchemaInternal } from "./Contract_Rule";
import type { Contract_Signer } from "./Contract_Signer";
import { Contract_SignerSchemaInternal } from "./Contract_Signer";
import type { Contract_Term } from "./Contract_Term";
import { Contract_TermSchemaInternal } from "./Contract_Term";
import type { Contract_ValuedItem } from "./Contract_ValuedItem";
import { Contract_ValuedItemSchemaInternal } from "./Contract_ValuedItem";
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

/** Base StructureDefinition for Contract Resource */
export interface Contract extends DomainResource {
	/** Action stipulated by this Contract. */
	action?: Array<CodeableConcept>;
	/** Reason for action stipulated by this Contract. */
	actionReason?: Array<CodeableConcept>;
	/** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
	agent?: Array<Contract_Agent>;
	/** Relevant time or time-period when this Contract is applicable. */
	applies?: Period;
	/** A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies. */
	authority?: Array<Reference>;
	/** Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract. */
	bindingAttachment?: Attachment;
	/** Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract. */
	bindingReference?: Reference;
	/** The minimal content derived from the basal information source at a specific stage in its lifecycle. */
	contentDerivative?: CodeableConcept;
	/** The type of decision made by a grantor with respect to an offer made by a grantee. */
	decisionType?: CodeableConcept;
	/** Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources. */
	domain?: Array<Reference>;
	/** The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement. */
	friendly?: Array<Contract_Friendly>;
	/** Unique identifier for this Contract. */
	identifier?: Identifier;
	/** When this  Contract was issued. */
	issued?: string;
	/** Extensions for issued */
	_issued?: Element;
	/** List of Legal expressions or representations of this Contract. */
	legal?: Array<Contract_Legal>;
	/** This is a Contract resource. */
	resourceType: "Contract";
	/** List of Computable Policy Rule Language Representations of this Contract. */
	rule?: Array<Contract_Rule>;
	/** A set of security labels that define which resources are controlled by this consent. If more than one label is specified, all resources must have all the specified labels. */
	securityLabel?: Array<Coding>;
	/** Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness. */
	signer?: Array<Contract_Signer>;
	/** The status of the resource instance. */
	status?:
		| "amended"
		| "appended"
		| "cancelled"
		| "disputed"
		| "entered-in-error"
		| "executable"
		| "executed"
		| "negotiable"
		| "offered"
		| "policy"
		| "rejected"
		| "renewed"
		| "resolved"
		| "revoked"
		| "terminated";
	/** Extensions for status */
	_status?: Element;
	/** The target entity impacted by or of interest to parties to the agreement. */
	subject?: Array<Reference>;
	/** More specific type or specialization of an overarching or more general contract such as auto insurance, home owner  insurance, prenupial agreement, Advanced-Directive, or privacy consent. */
	subType?: Array<CodeableConcept>;
	/** One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups. */
	term?: Array<Contract_Term>;
	/** The matter of concern in the context of this agreement. */
	topic?: Array<Reference>;
	/** Type of Contract such as an insurance policy, real estate contract, a will, power of attorny, Privacy or Security policy , trust framework agreement, etc. */
	type?: CodeableConcept;
	/** Contract Valued Item List. */
	valuedItem?: Array<Contract_ValuedItem>;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContract_AgentSchema = (): z.ZodType<Contract_Agent> =>
	Contract_AgentSchemaInternal as z.ZodType<Contract_Agent>;
const getContract_FriendlySchema = (): z.ZodType<Contract_Friendly> =>
	Contract_FriendlySchemaInternal as z.ZodType<Contract_Friendly>;
const getContract_LegalSchema = (): z.ZodType<Contract_Legal> =>
	Contract_LegalSchemaInternal as z.ZodType<Contract_Legal>;
const getContract_RuleSchema = (): z.ZodType<Contract_Rule> =>
	Contract_RuleSchemaInternal as z.ZodType<Contract_Rule>;
const getContract_SignerSchema = (): z.ZodType<Contract_Signer> =>
	Contract_SignerSchemaInternal as z.ZodType<Contract_Signer>;
const getContract_TermSchema = (): z.ZodType<Contract_Term> =>
	Contract_TermSchemaInternal as z.ZodType<Contract_Term>;
const getContract_ValuedItemSchema = (): z.ZodType<Contract_ValuedItem> =>
	Contract_ValuedItemSchemaInternal as z.ZodType<Contract_ValuedItem>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ContractSchemaInternal = DomainResourceSchemaInternal.extend({
	action: z.lazy(getCodeableConceptSchema).array().optional(),
	actionReason: z.lazy(getCodeableConceptSchema).array().optional(),
	agent: z.lazy(getContract_AgentSchema).array().optional(),
	applies: z.lazy(getPeriodSchema).optional(),
	authority: z.lazy(getReferenceSchema).array().optional(),
	bindingAttachment: z.lazy(getAttachmentSchema).optional(),
	bindingReference: z.lazy(getReferenceSchema).optional(),
	contentDerivative: z.lazy(getCodeableConceptSchema).optional(),
	decisionType: z.lazy(getCodeableConceptSchema).optional(),
	domain: z.lazy(getReferenceSchema).array().optional(),
	friendly: z.lazy(getContract_FriendlySchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	issued: fhirDateTime().optional(),
	_issued: z.lazy(getElementSchema).optional(),
	legal: z.lazy(getContract_LegalSchema).array().optional(),
	resourceType: z.literal("Contract"),
	rule: z.lazy(getContract_RuleSchema).array().optional(),
	securityLabel: z.lazy(getCodingSchema).array().optional(),
	signer: z.lazy(getContract_SignerSchema).array().optional(),
	status: z
		.enum([
			"amended",
			"appended",
			"cancelled",
			"disputed",
			"entered-in-error",
			"executable",
			"executed",
			"negotiable",
			"offered",
			"policy",
			"rejected",
			"renewed",
			"resolved",
			"revoked",
			"terminated",
		])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).array().optional(),
	subType: z.lazy(getCodeableConceptSchema).array().optional(),
	term: z.lazy(getContract_TermSchema).array().optional(),
	topic: z.lazy(getReferenceSchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
	valuedItem: z.lazy(getContract_ValuedItemSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const binding_x_Present = ["bindingAttachment", "bindingReference"].filter(
			(field) => record[field] !== undefined,
		);
		if (binding_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of bindingAttachment, bindingReference may be present for binding[x]",
				path: [binding_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.authority,
			"authority",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.bindingReference,
			"bindingReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Composition",
				"http://hl7.org/fhir/StructureDefinition/DocumentReference",
				"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
			],
			["Composition", "DocumentReference", "QuestionnaireResponse"],
			ctx,
		);
		validateReferenceTarget(
			record.domain,
			"domain",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.topic,
			"topic",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const ContractSchema = ContractSchemaInternal as z.ZodType<Contract>;
