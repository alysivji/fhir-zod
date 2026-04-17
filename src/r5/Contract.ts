// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Contract_ContentDefinition } from "./Contract_ContentDefinition";
import { Contract_ContentDefinitionSchemaInternal } from "./Contract_ContentDefinition";
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

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface Contract extends DomainResource {
  /** Alternative representation of the title for this Contract definition, derivative, or instance in any legal state., e.g., a domain specific contract number related to legislation. */
  alias?: Array<string | null>;
  /** Extensions for alias */
  _alias?: Array<Element | null>;
  /** Relevant time or time-period when this Contract is applicable. */
  applies?: Period;
  /** The individual or organization that authored the Contract definition, derivative, or instance in any legal state. */
  author?: Reference;
  /** A formally or informally recognized grouping of people, principals, organizations, or jurisdictions formed for the purpose of achieving some form of collective action such as the promulgation, administration and enforcement of contracts and policies. */
  authority?: Array<Reference>;
  /** Precusory content developed with a focus and intent of supporting the formation a Contract instance, which may be associated with and transformable into a Contract. */
  contentDefinition?: Contract_ContentDefinition;
  /** The minimal content derived from the basal information source at a specific stage in its lifecycle. */
  contentDerivative?: CodeableConcept;
  /** Recognized governance framework or system operating with a circumscribed scope in accordance with specified principles, policies, processes or procedures for managing rights, actions, or behaviors of parties or principals relative to resources. */
  domain?: Array<Reference>;
  /** Event resulting in discontinuation or termination of this Contract instance by one or more parties to the contract. */
  expirationType?: CodeableConcept;
  /** The "patient friendly language" versionof the Contract in whole or in parts. "Patient friendly language" means the representation of the Contract and Contract Provisions in a manner that is readily accessible and understandable by a layperson in accordance with best practices for communication styles that ensure that those agreeing to or signing the Contract understand the roles, actions, obligations, responsibilities, and implication of the agreement. */
  friendly?: Array<Contract_Friendly>;
  /** Unique identifier for this Contract or a derivative that references a Source Contract. */
  identifier?: Array<Identifier>;
  /** The URL pointing to a FHIR-defined Contract Definition that is adhered to in whole or part by this Contract. */
  instantiatesCanonical?: Reference;
  /** The URL pointing to an externally maintained definition that is adhered to in whole or in part by this Contract. */
  instantiatesUri?: string;
  /** Extensions for instantiatesUri */
  _instantiatesUri?: Element;
  /** When this  Contract was issued. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** List of Legal expressions or representations of this Contract. */
  legal?: Array<Contract_Legal>;
  /** Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract. */
  legallyBindingAttachment?: Attachment;
  /** Legally binding Contract: This is the signed and legally recognized representation of the Contract, which is considered the "source of truth" and which would be the basis for legal action related to enforcement of this Contract. */
  legallyBindingReference?: Reference;
  /** Legal states of the formation of a legal instrument, which is a formally executed written document that can be formally attributed to its author, records and formally expresses a legally enforceable act, process, or contractual duty, obligation, or right, and therefore evidences that act, process, or agreement. */
  legalState?: CodeableConcept;
  /** A natural language name identifying this Contract definition, derivative, or instance in any legal state. Provides additional information about its content. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Links to Provenance records for past versions of this Contract definition, derivative, or instance, which identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the Contract.  The Provenance.entity indicates the target that was changed in the update (see [Provenance.entity](provenance-definitions.html#Provenance.entity)). */
  relevantHistory?: Array<Reference>;
  /** This is a Contract resource. */
  resourceType: "Contract";
  /** List of Computable Policy Rule Language Representations of this Contract. */
  rule?: Array<Contract_Rule>;
  /** A selector of legal concerns for this Contract definition, derivative, or instance in any legal state. */
  scope?: CodeableConcept;
  /** Parties with legal standing in the Contract, including the principal parties, the grantor(s) and grantee(s), which are any person or organization bound by the contract, and any ancillary parties, which facilitate the execution of the contract such as a notary or witness. */
  signer?: Array<Contract_Signer>;
  /** Sites in which the contract is complied with,  exercised, or in force. */
  site?: Array<Reference>;
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
  /** A more detailed or qualifying explanatory or alternate user-friendly title for this Contract definition, derivative, or instance in any legal state. */
  subtitle?: string;
  /** Extensions for subtitle */
  _subtitle?: Element;
  /** Sub-category for the Contract that distinguishes the kinds of systems that would be interested in the Contract within the context of the Contract's scope. */
  subType?: Array<CodeableConcept>;
  /** Information that may be needed by/relevant to the performer in their execution of this term action. */
  supportingInfo?: Array<Reference>;
  /** One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups. */
  term?: Array<Contract_Term>;
  /** A short, descriptive, user-friendly title for this Contract definition, derivative, or instance in any legal state. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Narrows the range of legal concerns to focus on the achievement of specific contractual objectives. */
  topicCodeableConcept?: CodeableConcept;
  /** Narrows the range of legal concerns to focus on the achievement of specific contractual objectives. */
  topicReference?: Reference;
  /** A high-level category for the legal instrument, whether constructed as a Contract definition, derivative, or instance in any legal state.  Provides additional information about its content within the context of the Contract's scope to distinguish the kinds of systems that would be interested in the contract. */
  type?: CodeableConcept;
  /** Canonical identifier for this contract, represented as a URI (globally unique). */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** An edition identifier used for business purposes to label business significant variants. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContract_ContentDefinitionSchema =
  (): z.ZodType<Contract_ContentDefinition> =>
    Contract_ContentDefinitionSchemaInternal as z.ZodType<Contract_ContentDefinition>;
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
  alias: fhirString().nullable().array().optional(),
  _alias: z.lazy(getElementSchema).nullable().array().optional(),
  applies: z.lazy(getPeriodSchema).optional(),
  author: z.lazy(getReferenceSchema).optional(),
  authority: z.lazy(getReferenceSchema).array().optional(),
  contentDefinition: z.lazy(getContract_ContentDefinitionSchema).optional(),
  contentDerivative: z.lazy(getCodeableConceptSchema).optional(),
  domain: z.lazy(getReferenceSchema).array().optional(),
  expirationType: z.lazy(getCodeableConceptSchema).optional(),
  friendly: z.lazy(getContract_FriendlySchema).array().optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  instantiatesCanonical: z.lazy(getReferenceSchema).optional(),
  instantiatesUri: fhirUri().optional(),
  _instantiatesUri: z.lazy(getElementSchema).optional(),
  issued: fhirDateTime().optional(),
  _issued: z.lazy(getElementSchema).optional(),
  legal: z.lazy(getContract_LegalSchema).array().optional(),
  legallyBindingAttachment: z.lazy(getAttachmentSchema).optional(),
  legallyBindingReference: z.lazy(getReferenceSchema).optional(),
  legalState: z.lazy(getCodeableConceptSchema).optional(),
  name: fhirString().optional(),
  _name: z.lazy(getElementSchema).optional(),
  relevantHistory: z.lazy(getReferenceSchema).array().optional(),
  resourceType: z.literal("Contract"),
  rule: z.lazy(getContract_RuleSchema).array().optional(),
  scope: z.lazy(getCodeableConceptSchema).optional(),
  signer: z.lazy(getContract_SignerSchema).array().optional(),
  site: z.lazy(getReferenceSchema).array().optional(),
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
  subtitle: fhirString().optional(),
  _subtitle: z.lazy(getElementSchema).optional(),
  subType: z.lazy(getCodeableConceptSchema).array().optional(),
  supportingInfo: z.lazy(getReferenceSchema).array().optional(),
  term: z.lazy(getContract_TermSchema).array().optional(),
  title: fhirString().optional(),
  _title: z.lazy(getElementSchema).optional(),
  topicCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
  topicReference: z.lazy(getReferenceSchema).optional(),
  type: z.lazy(getCodeableConceptSchema).optional(),
  url: fhirUri().optional(),
  _url: z.lazy(getElementSchema).optional(),
  version: fhirString().optional(),
  _version: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const legallyBinding_x_Present = [
      "legallyBindingAttachment",
      "legallyBindingReference",
    ].filter((field) => record[field] !== undefined);
    if (legallyBinding_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of legallyBindingAttachment, legallyBindingReference may be present for legallyBinding[x]",
        path: [legallyBinding_x_Present[0]],
      });
    }
    const topic_x_Present = ["topicCodeableConcept", "topicReference"].filter(
      (field) => record[field] !== undefined,
    );
    if (topic_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of topicCodeableConcept, topicReference may be present for topic[x]",
        path: [topic_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.alias,
      record._alias,
      "alias",
      "_alias",
      ctx,
    );
    validateReferenceTarget(
      record.author,
      "author",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Patient", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.authority,
      "authority",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
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
      record.instantiatesCanonical,
      "instantiatesCanonical",
      ["http://hl7.org/fhir/StructureDefinition/Contract"],
      ["Contract"],
      ctx,
    );
    validateReferenceTarget(
      record.legallyBindingReference,
      "legallyBindingReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Composition",
        "http://hl7.org/fhir/StructureDefinition/Contract",
        "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
      ],
      ["Composition", "Contract", "DocumentReference", "QuestionnaireResponse"],
      ctx,
    );
    validateReferenceTarget(
      record.relevantHistory,
      "relevantHistory",
      ["http://hl7.org/fhir/StructureDefinition/Provenance"],
      ["Provenance"],
      ctx,
    );
    validateReferenceTarget(
      record.site,
      "site",
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
      record.supportingInfo,
      "supportingInfo",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.topicReference,
      "topicReference",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const ContractSchema = ContractSchemaInternal as z.ZodType<Contract>;
