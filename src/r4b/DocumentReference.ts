// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirInstant, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DocumentReference_Content } from "./DocumentReference_Content";
import { DocumentReference_ContentSchemaInternal } from "./DocumentReference_Content";
import type { DocumentReference_Context } from "./DocumentReference_Context";
import { DocumentReference_ContextSchemaInternal } from "./DocumentReference_Context";
import type { DocumentReference_RelatesTo } from "./DocumentReference_RelatesTo";
import { DocumentReference_RelatesToSchemaInternal } from "./DocumentReference_RelatesTo";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text. */
export interface DocumentReference extends DomainResource {
  /** Which person or organization authenticates that this document is valid. */
  authenticator?: Reference;
  /** Identifies who is responsible for adding the information to the document. */
  author?: Array<Reference>;
  /** A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type. */
  category?: Array<CodeableConcept>;
  /** The document and format referenced. There may be multiple content element repetitions, each with a different format. */
  content: Array<DocumentReference_Content>;
  /** The clinical context in which the document was prepared. */
  context?: DocumentReference_Context;
  /** Identifies the organization or group who is responsible for ongoing maintenance of and access to the document. */
  custodian?: Reference;
  /** When the document reference was created. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Human-readable description of the source document. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The status of the underlying document. */
  docStatus?: "amended" | "entered-in-error" | "final" | "preliminary";
  /** Extensions for docStatus */
  _docStatus?: Element;
  /** Other identifiers associated with the document, including version independent identifiers. */
  identifier?: Array<Identifier>;
  /** Document identifier as assigned by the source of the document. This identifier is specific to this version of the document. This unique identifier may be used elsewhere to identify this version of the document. */
  masterIdentifier?: Identifier;
  /** Relationships that this document has with other document references that already exist. */
  relatesTo?: Array<DocumentReference_RelatesTo>;
  /** This is a DocumentReference resource. */
  resourceType: "DocumentReference";
  /** A set of Security-Tag codes specifying the level of privacy/security of the Document. Note that DocumentReference.meta.security contains the security labels of the "reference" to the document, while DocumentReference.securityLabel contains a snapshot of the security labels on the document the reference refers to. */
  securityLabel?: Array<CodeableConcept>;
  /** The status of this document reference. */
  status: "current" | "entered-in-error" | "superseded";
  /** Extensions for status */
  _status?: Element;
  /** Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). */
  subject?: Reference;
  /** Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDocumentReference_ContentSchema =
  (): z.ZodType<DocumentReference_Content> =>
    DocumentReference_ContentSchemaInternal as z.ZodType<DocumentReference_Content>;
const getDocumentReference_ContextSchema =
  (): z.ZodType<DocumentReference_Context> =>
    DocumentReference_ContextSchemaInternal as z.ZodType<DocumentReference_Context>;
const getDocumentReference_RelatesToSchema =
  (): z.ZodType<DocumentReference_RelatesTo> =>
    DocumentReference_RelatesToSchemaInternal as z.ZodType<DocumentReference_RelatesTo>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentReferenceSchemaInternal =
  DomainResourceSchemaInternal.extend({
    authenticator: z.lazy(getReferenceSchema).optional(),
    author: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    content: z.lazy(getDocumentReference_ContentSchema).array(),
    context: z.lazy(getDocumentReference_ContextSchema).optional(),
    custodian: z.lazy(getReferenceSchema).optional(),
    date: fhirInstant().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    docStatus: z
      .enum(["amended", "entered-in-error", "final", "preliminary"])
      .optional(),
    _docStatus: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    masterIdentifier: z.lazy(getIdentifierSchema).optional(),
    relatesTo: z.lazy(getDocumentReference_RelatesToSchema).array().optional(),
    resourceType: z.literal("DocumentReference"),
    securityLabel: z.lazy(getCodeableConceptSchema).array().optional(),
    status: z.enum(["current", "entered-in-error", "superseded"]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.authenticator,
        "authenticator",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
      validateReferenceTarget(
        record.author,
        "author",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Device",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.custodian,
        "custodian",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
      validateReferenceTarget(
        record.subject,
        "subject",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
        ],
        ["Device", "Group", "Patient", "Practitioner"],
        ctx,
      );
    });

export const DocumentReferenceSchema =
  DocumentReferenceSchemaInternal as z.ZodType<DocumentReference>;
