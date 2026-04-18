// Source: https://hl7.org/fhir/R5/consent.html
// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Consent_PolicyBasis } from "./Consent_PolicyBasis";
import { Consent_PolicyBasisSchemaInternal } from "./Consent_PolicyBasis";
import type { Consent_Provision } from "./Consent_Provision";
import { Consent_ProvisionSchemaInternal } from "./Consent_Provision";
import type { Consent_Verification } from "./Consent_Verification";
import { Consent_VerificationSchemaInternal } from "./Consent_Verification";

/** A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface Consent extends DomainResource {
  /** A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements. */
  category?: Array<CodeableConcept>;
  /** The actor that controls/enforces the access according to the consent. */
  controller?: Array<Reference>;
  /** Date the consent instance was agreed to. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Action to take - permit or deny - as default. */
  decision?: "deny" | "permit";
  /** Extensions for decision */
  _decision?: Element;
  /** The entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions. */
  grantee?: Array<Reference>;
  /** The entity responsible for granting the rights listed in a Consent Directive. */
  grantor?: Array<Reference>;
  /** Unique identifier for this copy of the Consent Statement. */
  identifier?: Array<Identifier>;
  /** The actor that manages the consent through its lifecycle. */
  manager?: Array<Reference>;
  /** Effective period for this Consent Resource and all provisions unless specified in that provision. */
  period?: Period;
  /** A Reference or URL used to uniquely identify the policy the organization will enforce for this Consent. This Reference or URL should be specific to the version of the policy and should be dereferencable to a computable policy of some form. */
  policyBasis?: Consent_PolicyBasis;
  /** A Reference to the human readable policy explaining the basis for the Consent. */
  policyText?: Array<Reference>;
  /** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions. */
  provision?: Array<Consent_Provision>;
  /** A set of codes that indicate the regulatory basis (if any) that this consent supports. */
  regulatoryBasis?: Array<CodeableConcept>;
  /** This is a Consent resource. */
  resourceType: "Consent";
  /** The source on which this consent statement is based. The source might be a scanned original paper form. */
  sourceAttachment?: Array<Attachment>;
  /** A reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document. */
  sourceReference?: Array<Reference>;
  /** Indicates the current state of this Consent resource. */
  status:
    | "active"
    | "draft"
    | "entered-in-error"
    | "inactive"
    | "not-done"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient/healthcare practitioner or group of persons to whom this consent applies. */
  subject?: Reference;
  /** Whether a treatment instruction (e.g. artificial respiration: yes or no) was verified with the patient, his/her family or another authorized person. */
  verification?: Array<Consent_Verification>;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getConsent_PolicyBasisSchema = (): z.ZodType<Consent_PolicyBasis> =>
  Consent_PolicyBasisSchemaInternal as z.ZodType<Consent_PolicyBasis>;
const getConsent_ProvisionSchema = (): z.ZodType<Consent_Provision> =>
  Consent_ProvisionSchemaInternal as z.ZodType<Consent_Provision>;
const getConsent_VerificationSchema = (): z.ZodType<Consent_Verification> =>
  Consent_VerificationSchemaInternal as z.ZodType<Consent_Verification>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ConsentSchemaInternal = z
  .object({
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    controller: z.lazy(getReferenceSchema).array().optional(),
    date: fhirDate().optional(),
    _date: z.lazy(getElementSchema).optional(),
    decision: z.enum(["deny", "permit"]).optional(),
    _decision: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    grantee: z.lazy(getReferenceSchema).array().optional(),
    grantor: z.lazy(getReferenceSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    manager: z.lazy(getReferenceSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    policyBasis: z.lazy(getConsent_PolicyBasisSchema).optional(),
    policyText: z.lazy(getReferenceSchema).array().optional(),
    provision: z.lazy(getConsent_ProvisionSchema).array().optional(),
    regulatoryBasis: z.lazy(getCodeableConceptSchema).array().optional(),
    resourceType: z.literal("Consent"),
    sourceAttachment: z.lazy(getAttachmentSchema).array().optional(),
    sourceReference: z.lazy(getReferenceSchema).array().optional(),
    status: z.enum([
      "active",
      "draft",
      "entered-in-error",
      "inactive",
      "not-done",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    verification: z.lazy(getConsent_VerificationSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.controller,
      "controller",
      [
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["HealthcareService", "Organization", "Patient", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.grantee,
      "grantee",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "HealthcareService",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.grantor,
      "grantor",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "HealthcareService",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.manager,
      "manager",
      [
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["HealthcareService", "Organization", "Patient", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.policyText,
      "policyText",
      ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
      ["DocumentReference"],
      ctx,
    );
    validateReferenceTarget(
      record.sourceReference,
      "sourceReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Consent",
        "http://hl7.org/fhir/StructureDefinition/Contract",
        "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
      ],
      ["Consent", "Contract", "DocumentReference", "QuestionnaireResponse"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Group", "Patient", "Practitioner"],
      ctx,
    );
  });

export const ConsentSchema = ConsentSchemaInternal as z.ZodType<Consent>;
