// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:04:03.496Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MessageHeader_Destination } from "./MessageHeader_Destination";
import { MessageHeader_DestinationSchemaInternal } from "./MessageHeader_Destination";
import type { MessageHeader_Response } from "./MessageHeader_Response";
import { MessageHeader_ResponseSchemaInternal } from "./MessageHeader_Response";
import type { MessageHeader_Source } from "./MessageHeader_Source";
import { MessageHeader_SourceSchemaInternal } from "./MessageHeader_Source";

/** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. */
export interface MessageHeader extends DomainResource {
  /** The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions. */
  author?: Reference;
  /** Permanent link to the MessageDefinition for this message. */
  definition?: string;
  /** Extensions for definition */
  _definition?: Element;
  /** The destination application which the message is intended for. */
  destination?: Array<MessageHeader_Destination>;
  /** The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions. */
  enterer?: Reference;
  /** Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://terminology.hl7.org/CodeSystem/message-events".  Alternatively uri to the EventDefinition. */
  eventCoding?: Coding;
  /** Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://terminology.hl7.org/CodeSystem/message-events".  Alternatively uri to the EventDefinition. */
  eventUri?: string;
  /** Extensions for eventUri */
  _eventUri?: Element;
  /** The actual data of the message - a reference to the root/focus class of the event. */
  focus?: Array<Reference>;
  /** Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message. */
  reason?: CodeableConcept;
  /** This is a MessageHeader resource. */
  resourceType: "MessageHeader";
  /** Information about the message that this message is a response to.  Only present if this message is a response. */
  response?: MessageHeader_Response;
  /** The person or organization that accepts overall responsibility for the contents of the message. The implication is that the message event happened under the policies of the responsible party. */
  responsible?: Reference;
  /** Identifies the sending system to allow the use of a trust relationship. */
  sender?: Reference;
  /** The source application from which this message originated. */
  source: MessageHeader_Source;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMessageHeader_DestinationSchema =
  (): z.ZodType<MessageHeader_Destination> =>
    MessageHeader_DestinationSchemaInternal as z.ZodType<MessageHeader_Destination>;
const getMessageHeader_ResponseSchema = (): z.ZodType<MessageHeader_Response> =>
  MessageHeader_ResponseSchemaInternal as z.ZodType<MessageHeader_Response>;
const getMessageHeader_SourceSchema = (): z.ZodType<MessageHeader_Source> =>
  MessageHeader_SourceSchemaInternal as z.ZodType<MessageHeader_Source>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MessageHeaderSchemaInternal = z
  .object({
    author: z.lazy(getReferenceSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    definition: fhirCanonical().optional(),
    _definition: z.lazy(getElementSchema).optional(),
    destination: z.lazy(getMessageHeader_DestinationSchema).array().optional(),
    enterer: z.lazy(getReferenceSchema).optional(),
    eventCoding: z.lazy(getCodingSchema).optional(),
    eventUri: fhirUri().optional(),
    _eventUri: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getReferenceSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    reason: z.lazy(getCodeableConceptSchema).optional(),
    resourceType: z.literal("MessageHeader"),
    response: z.lazy(getMessageHeader_ResponseSchema).optional(),
    responsible: z.lazy(getReferenceSchema).optional(),
    sender: z.lazy(getReferenceSchema).optional(),
    source: z.lazy(getMessageHeader_SourceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const event_x_Present = ["eventCoding", "eventUri"].filter(
      (field) => record[field] !== undefined,
    );
    if (event_x_Present.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "One of eventCoding, eventUri must be present for event[x]",
        path: ["eventCoding"],
      });
    }
    if (event_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of eventCoding, eventUri may be present for event[x]",
        path: [event_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.author,
      "author",
      [
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Practitioner", "PractitionerRole"],
      ctx,
    );
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
      record.focus,
      "focus",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.responsible,
      "responsible",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.sender,
      "sender",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
  });

export const MessageHeaderSchema =
  MessageHeaderSchemaInternal as z.ZodType<MessageHeader>;
