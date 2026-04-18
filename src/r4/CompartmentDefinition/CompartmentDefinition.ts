// Profile: http://hl7.org/fhir/StructureDefinition/CompartmentDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import {
  fhirDateTime,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { CompartmentDefinition_Resource } from "./CompartmentDefinition_Resource";
import { CompartmentDefinition_ResourceSchemaInternal } from "./CompartmentDefinition_Resource";

/** A compartment definition that defines how resources are accessed on a server. */
export interface CompartmentDefinition extends DomainResource {
  /** Which compartment this definition describes. */
  code: "Device" | "Encounter" | "Patient" | "Practitioner" | "RelatedPerson";
  /** Extensions for code */
  _code?: Element;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** The date  (and optionally time) when the compartment definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the compartment definition changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the compartment definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A Boolean value to indicate that this compartment definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A natural language name identifying the compartment definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the organization or individual that published the compartment definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this compartment definition is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** Information about how a resource is related to the compartment. */
  resource?: Array<CompartmentDefinition_Resource>;
  /** This is a CompartmentDefinition resource. */
  resourceType: "CompartmentDefinition";
  /** Whether the search syntax is supported,. */
  search: boolean;
  /** Extensions for search */
  _search?: Element;
  /** The status of this compartment definition. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** An absolute URI that is used to identify this compartment definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this compartment definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the compartment definition is stored on different servers. */
  url: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate compartment definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the compartment definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the compartment definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCompartmentDefinition_ResourceSchema =
  (): z.ZodType<CompartmentDefinition_Resource> =>
    CompartmentDefinition_ResourceSchemaInternal as z.ZodType<CompartmentDefinition_Resource>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const CompartmentDefinitionSchemaInternal =
  DomainResourceSchemaInternal.extend({
    code: z.enum([
      "Device",
      "Encounter",
      "Patient",
      "Practitioner",
      "RelatedPerson",
    ]),
    _code: z.lazy(getElementSchema).optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resource: z
      .lazy(getCompartmentDefinition_ResourceSchema)
      .array()
      .optional(),
    resourceType: z.literal("CompartmentDefinition"),
    search: z.boolean(),
    _search: z.lazy(getElementSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  }).strict();

export const CompartmentDefinitionSchema =
  CompartmentDefinitionSchemaInternal as z.ZodType<CompartmentDefinition>;
