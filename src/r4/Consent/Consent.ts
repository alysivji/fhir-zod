// Source: https://hl7.org/fhir/R4/consent.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Consent_Policy } from "./Consent_Policy";
import { Consent_PolicySchemaInternal } from "./Consent_Policy";
import type { Consent_Provision } from "./Consent_Provision";
import { Consent_ProvisionSchemaInternal } from "./Consent_Provision";
import type { Consent_Verification } from "./Consent_Verification";
import { Consent_VerificationSchemaInternal } from "./Consent_Verification";

/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface Consent extends DomainResource {
  /** A classification of the type of consents found in the statement. This element supports indexing and retrieval of consent statements. */
  category: Array<CodeableConcept>;
  /** When this  Consent was issued / created / indexed. */
  dateTime?: string;
  /** Extensions for dateTime */
  _dateTime?: Element;
  /** Unique identifier for this copy of the Consent Statement. */
  identifier?: Array<Identifier>;
  /** The organization that manages the consent, and the framework within which it is executed. */
  organization?: Array<Reference>;
  /** The patient/healthcare consumer to whom this consent applies. */
  patient?: Reference;
  /** Either the Grantor, which is the entity responsible for granting the rights listed in a Consent Directive or the Grantee, which is the entity responsible for complying with the Consent Directive, including any obligations or limitations on authorizations and enforcement of prohibitions. */
  performer?: Array<Reference>;
  /** The references to the policies that are included in this consent scope. Policies may be organizational, but are often defined jurisdictionally, or in law. */
  policy?: Array<Consent_Policy>;
  /** A reference to the specific base computable regulation or policy. */
  policyRule?: CodeableConcept;
  /** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions. */
  provision?: Consent_Provision;
  /** This is a Consent resource. */
  resourceType: "Consent";
  /** A selector of the type of consent being presented: ADR, Privacy, Treatment, Research.  This list is now extensible. */
  scope: CodeableConcept;
  /** The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document. */
  sourceAttachment?: Attachment;
  /** The source on which this consent statement is based. The source might be a scanned original paper form, or a reference to a consent that links back to such a source, a reference to a document repository (e.g. XDS) that stores the original consent document. */
  sourceReference?: Reference;
  /** Indicates the current state of this consent. */
  status:
    | "active"
    | "draft"
    | "entered-in-error"
    | "inactive"
    | "proposed"
    | "rejected";
  /** Extensions for status */
  _status?: Element;
  /** Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person. */
  verification?: Array<Consent_Verification>;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getConsent_PolicySchema = (): z.ZodType<Consent_Policy> =>
  Consent_PolicySchemaInternal as z.ZodType<Consent_Policy>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ConsentSchemaInternal = z
  .object({
    category: z.lazy(getCodeableConceptSchema).array(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    dateTime: fhirDateTime().optional(),
    _dateTime: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    organization: z.lazy(getReferenceSchema).array().optional(),
    patient: z.lazy(getReferenceSchema).optional(),
    performer: z.lazy(getReferenceSchema).array().optional(),
    policy: z.lazy(getConsent_PolicySchema).array().optional(),
    policyRule: z.lazy(getCodeableConceptSchema).optional(),
    provision: z.lazy(getConsent_ProvisionSchema).optional(),
    resourceType: z.literal("Consent"),
    scope: z.lazy(getCodeableConceptSchema),
    sourceAttachment: z.lazy(getAttachmentSchema).optional(),
    sourceReference: z.lazy(getReferenceSchema).optional(),
    status: z.enum([
      "active",
      "draft",
      "entered-in-error",
      "inactive",
      "proposed",
      "rejected",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    verification: z.lazy(getConsent_VerificationSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const source_x_Present = ["sourceAttachment", "sourceReference"].filter(
      (field) => record[field] !== undefined,
    );
    if (source_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of sourceAttachment, sourceReference may be present for source[x]",
        path: [source_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.organization,
      "organization",
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
      record.performer,
      "performer",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
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
  });

export const ConsentSchema = ConsentSchemaInternal as z.ZodType<Consent>;
