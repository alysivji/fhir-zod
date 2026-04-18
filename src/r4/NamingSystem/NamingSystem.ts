// Source: https://hl7.org/fhir/R4/namingsystem.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { NamingSystem_UniqueId } from "./NamingSystem_UniqueId";
import { NamingSystem_UniqueIdSchemaInternal } from "./NamingSystem_UniqueId";

/** A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types. */
export interface NamingSystem extends DomainResource {
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** The date  (and optionally time) when the naming system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the naming system changes. */
  date: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the naming system from a consumer's perspective. Details about what the namespace identifies including scope, granularity, version labeling, etc. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A legal or geographic region in which the naming system is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** Indicates the purpose for the naming system - what kinds of things does it make unique? */
  kind: "codesystem" | "identifier" | "root";
  /** Extensions for kind */
  _kind?: Element;
  /** A natural language name identifying the naming system. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the organization or individual that published the naming system. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** This is a NamingSystem resource. */
  resourceType: "NamingSystem";
  /** The name of the organization that is responsible for issuing identifiers or codes for this namespace and ensuring their non-collision. */
  responsible?: string;
  /** Extensions for responsible */
  _responsible?: Element;
  /** The status of this naming system. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Categorizes a naming system for easier search by grouping related naming systems. */
  type?: CodeableConcept;
  /** Indicates how the system may be identified when referenced in electronic exchange. */
  uniqueId: Array<NamingSystem_UniqueId>;
  /** Provides guidance on the use of the namespace, including the handling of formatting characters, use of upper vs. lower case, etc. */
  usage?: string;
  /** Extensions for usage */
  _usage?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate naming system instances. */
  useContext?: Array<UsageContext>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNamingSystem_UniqueIdSchema = (): z.ZodType<NamingSystem_UniqueId> =>
  NamingSystem_UniqueIdSchemaInternal as z.ZodType<NamingSystem_UniqueId>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const NamingSystemSchemaInternal = z
  .object({
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    kind: z.enum(["codesystem", "identifier", "root"]),
    _kind: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("NamingSystem"),
    responsible: fhirString().optional(),
    _responsible: z.lazy(getElementSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    uniqueId: z.lazy(getNamingSystem_UniqueIdSchema).array(),
    usage: fhirString().optional(),
    _usage: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
  })
  .strict();

export const NamingSystemSchema =
  NamingSystemSchemaInternal as z.ZodType<NamingSystem>;
