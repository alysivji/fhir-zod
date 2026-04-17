// Profile: http://hl7.org/fhir/StructureDefinition/MessageHeader
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirInstant } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MessageHeader_Destination } from "./MessageHeader_Destination";
import { MessageHeader_DestinationSchemaInternal } from "./MessageHeader_Destination";
import type { MessageHeader_Response } from "./MessageHeader_Response";
import { MessageHeader_ResponseSchemaInternal } from "./MessageHeader_Response";
import type { MessageHeader_Source } from "./MessageHeader_Source";
import { MessageHeader_SourceSchemaInternal } from "./MessageHeader_Source";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for MessageHeader Resource */
export interface MessageHeader extends DomainResource {
  /** The logical author of the message - the person or device that decided the described event should happen. When there is more than one candidate, pick the most proximal to the MessageHeader. Can provide other authors in extensions. */
  author?: Reference;
  /** The destination application which the message is intended for. */
  destination?: Array<MessageHeader_Destination>;
  /** The person or device that performed the data entry leading to this message. When there is more than one candidate, pick the most proximal to the message. Can provide other enterers in extensions. */
  enterer?: Reference;
  /** Code that identifies the event this message represents and connects it with its definition. Events defined as part of the FHIR specification have the system value "http://hl7.org/fhir/message-events". */
  event: Coding;
  /** The actual data of the message - a reference to the root/focus class of the event. */
  focus?: Array<Reference>;
  /** Coded indication of the cause for the event - indicates  a reason for the occurrence of the event that is a focus of this message. */
  reason?: CodeableConcept;
  /** Allows data conveyed by a message to be addressed to a particular person or department when routing to a specific application isn't sufficient. */
  receiver?: Reference;
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
  /** The time that the message was sent. */
  timestamp: string;
  /** Extensions for timestamp */
  _timestamp?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMessageHeader_DestinationSchema =
  (): z.ZodType<MessageHeader_Destination> =>
    MessageHeader_DestinationSchemaInternal as z.ZodType<MessageHeader_Destination>;
const getMessageHeader_ResponseSchema = (): z.ZodType<MessageHeader_Response> =>
  MessageHeader_ResponseSchemaInternal as z.ZodType<MessageHeader_Response>;
const getMessageHeader_SourceSchema = (): z.ZodType<MessageHeader_Source> =>
  MessageHeader_SourceSchemaInternal as z.ZodType<MessageHeader_Source>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageHeaderSchemaInternal = DomainResourceSchemaInternal.extend({
  author: z.lazy(getReferenceSchema).optional(),
  destination: z.lazy(getMessageHeader_DestinationSchema).array().optional(),
  enterer: z.lazy(getReferenceSchema).optional(),
  event: z.lazy(getCodingSchema),
  focus: z.lazy(getReferenceSchema).array().optional(),
  reason: z.lazy(getCodeableConceptSchema).optional(),
  receiver: z.lazy(getReferenceSchema).optional(),
  resourceType: z.literal("MessageHeader"),
  response: z.lazy(getMessageHeader_ResponseSchema).optional(),
  responsible: z.lazy(getReferenceSchema).optional(),
  sender: z.lazy(getReferenceSchema).optional(),
  source: z.lazy(getMessageHeader_SourceSchema),
  timestamp: fhirInstant(),
  _timestamp: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.author,
      "author",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.enterer,
      "enterer",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
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
      record.receiver,
      "receiver",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Organization", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.responsible,
      "responsible",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Organization", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.sender,
      "sender",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Organization", "Practitioner"],
      ctx,
    );
  });

export const MessageHeaderSchema =
  MessageHeaderSchemaInternal as z.ZodType<MessageHeader>;
