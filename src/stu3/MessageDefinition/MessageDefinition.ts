// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
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
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { MessageDefinition_AllowedResponse } from "./MessageDefinition_AllowedResponse";
import { MessageDefinition_AllowedResponseSchemaInternal } from "./MessageDefinition_AllowedResponse";
import type { MessageDefinition_Focus } from "./MessageDefinition_Focus";
import { MessageDefinition_FocusSchemaInternal } from "./MessageDefinition_Focus";

/** Base StructureDefinition for MessageDefinition Resource */
export interface MessageDefinition extends DomainResource {
  /** Indicates what types of messages may be sent as an application-level response to this message. */
  allowedResponse?: Array<MessageDefinition_AllowedResponse>;
  /** The MessageDefinition that is the basis for the contents of this resource. */
  base?: Reference;
  /** The impact of the content of the message. */
  category?: "Consequence" | "Currency" | "Notification";
  /** Extensions for category */
  _category?: Element;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** The date  (and optionally time) when the message definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes. */
  date: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the message definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A coded identifier of a supported messaging event. */
  event: Coding;
  /** A boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge. */
  focus?: Array<MessageDefinition_Focus>;
  /** A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Identifier;
  /** A legal or geographic region in which the message definition is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Identifies a protocol or workflow that this MessageDefinition represents a step in. */
  parent?: Array<Reference>;
  /** The name of the individual or organization that published the message definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explaination of why this message definition is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** A MessageDefinition that is superseded by this definition. */
  replaces?: Array<Reference>;
  /** This is a MessageDefinition resource. */
  resourceType: "MessageDefinition";
  /** Indicates whether a response is required for this message. */
  responseRequired?: boolean;
  /** Extensions for responseRequired */
  _responseRequired?: Element;
  /** The status of this message definition. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive, user-friendly title for the message definition. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this message definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this message definition is (or will be) published. The URL SHOULD include the major version of the message definition. For more information see [Technical and Business Versions](resource.html#versions). */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate message definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMessageDefinition_AllowedResponseSchema =
  (): z.ZodType<MessageDefinition_AllowedResponse> =>
    MessageDefinition_AllowedResponseSchemaInternal as z.ZodType<MessageDefinition_AllowedResponse>;
const getMessageDefinition_FocusSchema =
  (): z.ZodType<MessageDefinition_Focus> =>
    MessageDefinition_FocusSchemaInternal as z.ZodType<MessageDefinition_Focus>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MessageDefinitionSchemaInternal = z
  .object({
    allowedResponse: z
      .lazy(getMessageDefinition_AllowedResponseSchema)
      .array()
      .optional(),
    base: z.lazy(getReferenceSchema).optional(),
    category: z.enum(["Consequence", "Currency", "Notification"]).optional(),
    _category: z.lazy(getElementSchema).optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    copyright: z.string().optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    date: fhirDateTime(),
    _date: z.lazy(getElementSchema).optional(),
    description: z.string().optional(),
    _description: z.lazy(getElementSchema).optional(),
    event: z.lazy(getCodingSchema),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getMessageDefinition_FocusSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    parent: z.lazy(getReferenceSchema).array().optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z.string().optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    replaces: z.lazy(getReferenceSchema).array().optional(),
    resourceType: z.literal("MessageDefinition"),
    responseRequired: z.boolean().optional(),
    _responseRequired: z.lazy(getElementSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.base,
      "base",
      ["http://hl7.org/fhir/StructureDefinition/MessageDefinition"],
      ["MessageDefinition"],
      ctx,
    );
    validateReferenceTarget(
      record.parent,
      "parent",
      [
        "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
        "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
      ],
      ["ActivityDefinition", "PlanDefinition"],
      ctx,
    );
    validateReferenceTarget(
      record.replaces,
      "replaces",
      ["http://hl7.org/fhir/StructureDefinition/MessageDefinition"],
      ["MessageDefinition"],
      ctx,
    );
  });

export const MessageDefinitionSchema =
  MessageDefinitionSchemaInternal as z.ZodType<MessageDefinition>;
