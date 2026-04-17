// Profile: http://hl7.org/fhir/StructureDefinition/DocumentReference
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirInstant, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DocumentReference_Attester } from "./DocumentReference_Attester";
import { DocumentReference_AttesterSchemaInternal } from "./DocumentReference_Attester";
import type { DocumentReference_Content } from "./DocumentReference_Content";
import { DocumentReference_ContentSchemaInternal } from "./DocumentReference_Content";
import type { DocumentReference_RelatesTo } from "./DocumentReference_RelatesTo";
import { DocumentReference_RelatesToSchemaInternal } from "./DocumentReference_RelatesTo";
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

/** A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this “document” encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference. */
export interface DocumentReference extends DomainResource {
  /** A participant who has authenticated the accuracy of the document. */
  attester?: Array<DocumentReference_Attester>;
  /** Identifies who is responsible for adding the information to the document. */
  author?: Array<Reference>;
  /** A procedure that is fulfilled in whole or in part by the creation of this media. */
  basedOn?: Array<Reference>;
  /** The anatomic structures included in the document. */
  bodySite?: Array<CodeableReference>;
  /** A categorization for the type of document referenced - helps for indexing and searching. This may be implied by or derived from the code specified in the DocumentReference.type. */
  category?: Array<CodeableConcept>;
  /** The document and format referenced.  If there are multiple content element repetitions, these must all represent the same document in different format, or attachment metadata. */
  content: Array<DocumentReference_Content>;
  /** Describes the clinical encounter or type of care that the document content is associated with. */
  context?: Array<Reference>;
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
  docStatus?:
    | "amended"
    | "appended"
    | "cancelled"
    | "corrected"
    | "deprecated"
    | "entered-in-error"
    | "final"
    | "partial"
    | "preliminary"
    | "registered"
    | "unknown";
  /** Extensions for docStatus */
  _docStatus?: Element;
  /** This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the type Code, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act. */
  event?: Array<CodeableReference>;
  /** The kind of facility where the patient was seen. */
  facilityType?: CodeableConcept;
  /** Other business identifiers associated with the document, including version independent identifiers. */
  identifier?: Array<Identifier>;
  /** Imaging modality used. This may include both acquisition and non-acquisition modalities. */
  modality?: Array<CodeableConcept>;
  /** The time period over which the service that is described by the document was provided. */
  period?: Period;
  /** This property may convey specifics about the practice setting where the content was created, often reflecting the clinical specialty. */
  practiceSetting?: CodeableConcept;
  /** Relationships that this document has with other document references that already exist. */
  relatesTo?: Array<DocumentReference_RelatesTo>;
  /** This is a DocumentReference resource. */
  resourceType: "DocumentReference";
  /** A set of Security-Tag codes specifying the level of privacy/security of the Document found at DocumentReference.content.attachment.url. Note that DocumentReference.meta.security contains the security labels of the data elements in DocumentReference, while DocumentReference.securityLabel contains the security labels for the document the reference refers to. The distinction recognizes that the document may contain sensitive information, while the DocumentReference is metadata about the document and thus might not be as sensitive as the document. For example: a psychotherapy episode may contain highly sensitive information, while the metadata may simply indicate that some episode happened. */
  securityLabel?: Array<CodeableConcept>;
  /** The status of this document reference. */
  status: "current" | "entered-in-error" | "superseded";
  /** Extensions for status */
  _status?: Element;
  /** Who or what the document is about. The document can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). */
  subject?: Reference;
  /** Specifies the particular kind of document referenced  (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the document referenced. */
  type?: CodeableConcept;
  /** An explicitly assigned identifer of a variation of the content in the DocumentReference. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDocumentReference_AttesterSchema =
  (): z.ZodType<DocumentReference_Attester> =>
    DocumentReference_AttesterSchemaInternal as z.ZodType<DocumentReference_Attester>;
const getDocumentReference_ContentSchema =
  (): z.ZodType<DocumentReference_Content> =>
    DocumentReference_ContentSchemaInternal as z.ZodType<DocumentReference_Content>;
const getDocumentReference_RelatesToSchema =
  (): z.ZodType<DocumentReference_RelatesTo> =>
    DocumentReference_RelatesToSchemaInternal as z.ZodType<DocumentReference_RelatesTo>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DocumentReferenceSchemaInternal =
  DomainResourceSchemaInternal.extend({
    attester: z.lazy(getDocumentReference_AttesterSchema).array().optional(),
    author: z.lazy(getReferenceSchema).array().optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    bodySite: z.lazy(getCodeableReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    content: z.lazy(getDocumentReference_ContentSchema).array(),
    context: z.lazy(getReferenceSchema).array().optional(),
    custodian: z.lazy(getReferenceSchema).optional(),
    date: fhirInstant().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    docStatus: z
      .enum([
        "amended",
        "appended",
        "cancelled",
        "corrected",
        "deprecated",
        "entered-in-error",
        "final",
        "partial",
        "preliminary",
        "registered",
        "unknown",
      ])
      .optional(),
    _docStatus: z.lazy(getElementSchema).optional(),
    event: z.lazy(getCodeableReferenceSchema).array().optional(),
    facilityType: z.lazy(getCodeableConceptSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    modality: z.lazy(getCodeableConceptSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    practiceSetting: z.lazy(getCodeableConceptSchema).optional(),
    relatesTo: z.lazy(getDocumentReference_RelatesToSchema).array().optional(),
    resourceType: z.literal("DocumentReference"),
    securityLabel: z.lazy(getCodeableConceptSchema).array().optional(),
    status: z.enum(["current", "entered-in-error", "superseded"]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.author,
        "author",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
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
        record.basedOn,
        "basedOn",
        [
          "http://hl7.org/fhir/StructureDefinition/Appointment",
          "http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/Claim",
          "http://hl7.org/fhir/StructureDefinition/CommunicationRequest",
          "http://hl7.org/fhir/StructureDefinition/Contract",
          "http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest",
          "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
          "http://hl7.org/fhir/StructureDefinition/EnrollmentRequest",
          "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
          "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
          "http://hl7.org/fhir/StructureDefinition/RequestOrchestration",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/SupplyRequest",
          "http://hl7.org/fhir/StructureDefinition/VisionPrescription",
        ],
        [
          "Appointment",
          "AppointmentResponse",
          "CarePlan",
          "Claim",
          "CommunicationRequest",
          "Contract",
          "CoverageEligibilityRequest",
          "DeviceRequest",
          "EnrollmentRequest",
          "ImmunizationRecommendation",
          "MedicationRequest",
          "NutritionOrder",
          "RequestOrchestration",
          "ServiceRequest",
          "SupplyRequest",
          "VisionPrescription",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.context,
        "context",
        [
          "http://hl7.org/fhir/StructureDefinition/Appointment",
          "http://hl7.org/fhir/StructureDefinition/Encounter",
          "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        ],
        ["Appointment", "Encounter", "EpisodeOfCare"],
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
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const DocumentReferenceSchema =
  DocumentReferenceSchemaInternal as z.ZodType<DocumentReference>;
