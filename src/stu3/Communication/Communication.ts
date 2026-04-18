// Profile: http://hl7.org/fhir/StructureDefinition/Communication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

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
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { Communication_Payload } from "./Communication_Payload";
import { Communication_PayloadSchemaInternal } from "./Communication_Payload";

/** Base StructureDefinition for Communication Resource */
export interface Communication extends DomainResource {
  /** An order, proposal or plan fulfilled in whole or in part by this Communication. */
  basedOn?: Array<Reference>;
  /** The type of message conveyed such as alert, notification, reminder, instruction, etc. */
  category?: Array<CodeableConcept>;
  /** The encounter within which the communication was sent. */
  context?: Reference;
  /** A protocol, guideline, or other definition that was adhered to in whole or in part by this communication event. */
  definition?: Array<Reference>;
  /** Identifiers associated with this Communication that are defined by business processes and/ or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
  identifier?: Array<Identifier>;
  /** A channel that was used for this communication (e.g. email, fax). */
  medium?: Array<CodeableConcept>;
  /** If true, indicates that the described communication event did not actually occur. */
  notDone?: boolean;
  /** Extensions for notDone */
  _notDone?: Element;
  /** Describes why the communication event did not occur in coded and/or textual form. */
  notDoneReason?: CodeableConcept;
  /** Additional notes or commentary about the communication by the sender, receiver or other interested parties. */
  note?: Array<Annotation>;
  /** Part of this action. */
  partOf?: Array<Reference>;
  /** Text, attachment(s), or resource(s) that was communicated to the recipient. */
  payload?: Array<Communication_Payload>;
  /** The reason or justification for the communication. */
  reasonCode?: Array<CodeableConcept>;
  /** Indicates another resource whose existence justifies this communication. */
  reasonReference?: Array<Reference>;
  /** The time when this communication arrived at the destination. */
  received?: string;
  /** Extensions for received */
  _received?: Element;
  /** The entity (e.g. person, organization, clinical information system, or device) which was the target of the communication. If receipts need to be tracked by individual, a separate resource instance will need to be created for each recipient.  Multiple recipient communications are intended where either a receipt(s) is not tracked (e.g. a mass mail-out) or is captured in aggregate (all emails confirmed received by a particular time). */
  recipient?: Array<Reference>;
  /** This is a Communication resource. */
  resourceType: "Communication";
  /** The entity (e.g. person, organization, clinical information system, or device) which was the source of the communication. */
  sender?: Reference;
  /** The time when this communication was sent. */
  sent?: string;
  /** Extensions for sent */
  _sent?: Element;
  /** The status of the transmission. */
  status:
    | "aborted"
    | "completed"
    | "entered-in-error"
    | "in-progress"
    | "preparation"
    | "suspended"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient or group that was the focus of this communication. */
  subject?: Reference;
  /** The resources which were responsible for or related to producing this communication. */
  topic?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCommunication_PayloadSchema = (): z.ZodType<Communication_Payload> =>
  Communication_PayloadSchemaInternal as z.ZodType<Communication_Payload>;
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
export const CommunicationSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    definition: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    medium: z.lazy(getCodeableConceptSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    notDone: z.boolean().optional(),
    _notDone: z.lazy(getElementSchema).optional(),
    notDoneReason: z.lazy(getCodeableConceptSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    payload: z.lazy(getCommunication_PayloadSchema).array().optional(),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    reasonReference: z.lazy(getReferenceSchema).array().optional(),
    received: fhirDateTime().optional(),
    _received: z.lazy(getElementSchema).optional(),
    recipient: z.lazy(getReferenceSchema).array().optional(),
    resourceType: z.literal("Communication"),
    sender: z.lazy(getReferenceSchema).optional(),
    sent: fhirDateTime().optional(),
    _sent: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "aborted",
      "completed",
      "entered-in-error",
      "in-progress",
      "preparation",
      "suspended",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    topic: z.lazy(getReferenceSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.context,
      "context",
      [
        "http://hl7.org/fhir/StructureDefinition/Encounter",
        "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
      ],
      ["Encounter", "EpisodeOfCare"],
      ctx,
    );
    validateReferenceTarget(
      record.definition,
      "definition",
      [
        "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
        "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
      ],
      ["ActivityDefinition", "PlanDefinition"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/Observation",
      ],
      ["Condition", "Observation"],
      ctx,
    );
    validateReferenceTarget(
      record.recipient,
      "recipient",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Device",
        "Group",
        "Organization",
        "Patient",
        "Practitioner",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.sender,
      "sender",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Patient"],
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

export const CommunicationSchema =
  CommunicationSchemaInternal as z.ZodType<Communication>;
