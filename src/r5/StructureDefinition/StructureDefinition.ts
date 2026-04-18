// Profile: http://hl7.org/fhir/StructureDefinition/StructureDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
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
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { StructureDefinition_Context } from "./StructureDefinition_Context";
import { StructureDefinition_ContextSchemaInternal } from "./StructureDefinition_Context";
import type { StructureDefinition_Differential } from "./StructureDefinition_Differential";
import { StructureDefinition_DifferentialSchemaInternal } from "./StructureDefinition_Differential";
import type { StructureDefinition_Mapping } from "./StructureDefinition_Mapping";
import { StructureDefinition_MappingSchemaInternal } from "./StructureDefinition_Mapping";
import type { StructureDefinition_Snapshot } from "./StructureDefinition_Snapshot";
import { StructureDefinition_SnapshotSchemaInternal } from "./StructureDefinition_Snapshot";

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface StructureDefinition extends DomainResource {
  /** Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems. */
  abstract: boolean;
  /** Extensions for abstract */
  _abstract?: Element;
  /** An absolute URI that is the base structure from which this type is derived, either by specialization or constraint. */
  baseDefinition?: string;
  /** Extensions for baseDefinition */
  _baseDefinition?: Element;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** Identifies the types of resource or data type elements to which the extension can be applied. For more guidance on using the 'context' element, see the [defining extensions page](defining-extensions.html#context). */
  context?: Array<StructureDefinition_Context>;
  /** A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true. */
  contextInvariant?: Array<string | null>;
  /** Extensions for contextInvariant */
  _contextInvariant?: Array<Element | null>;
  /** A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition.  The short copyright declaration (e.g. (c) '2015+ xyz organization' should be sent in the copyrightLabel element. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
  copyrightLabel?: string;
  /** Extensions for copyrightLabel */
  _copyrightLabel?: Element;
  /** The date  (and optionally time) when the structure definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** How the type relates to the baseDefinition. */
  derivation?: "constraint" | "specialization";
  /** Extensions for derivation */
  _derivation?: Element;
  /** A free text natural language description of the structure definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies. */
  differential?: StructureDefinition_Differential;
  /** A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.6.0. for this version. */
  fhirVersion?:
    | "0.0"
    | "0.0.80"
    | "0.0.81"
    | "0.0.82"
    | "0.01"
    | "0.05"
    | "0.06"
    | "0.11"
    | "0.4"
    | "0.4.0"
    | "0.5"
    | "0.5.0"
    | "1.0"
    | "1.0.0"
    | "1.0.1"
    | "1.0.2"
    | "1.1"
    | "1.1.0"
    | "1.4"
    | "1.4.0"
    | "1.6"
    | "1.6.0"
    | "1.8"
    | "1.8.0"
    | "3.0"
    | "3.0.0"
    | "3.0.1"
    | "3.0.2"
    | "3.3"
    | "3.3.0"
    | "3.5"
    | "3.5.0"
    | "4.0"
    | "4.0.0"
    | "4.0.1"
    | "4.1"
    | "4.1.0"
    | "4.2"
    | "4.2.0"
    | "4.3"
    | "4.3.0"
    | "4.3.0-cibuild"
    | "4.3.0-snapshot1"
    | "4.4"
    | "4.4.0"
    | "4.5"
    | "4.5.0"
    | "4.6"
    | "4.6.0"
    | "5.0"
    | "5.0.0"
    | "5.0.0-ballot"
    | "5.0.0-cibuild"
    | "5.0.0-draft-final"
    | "5.0.0-snapshot1"
    | "5.0.0-snapshot2"
    | "5.0.0-snapshot3";
  /** Extensions for fhirVersion */
  _fhirVersion?: Element;
  /** A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** A legal or geographic region in which the structure definition is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** (DEPRECATED) A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes. */
  keyword?: Array<Coding>;
  /** Defines the kind of structure that this definition is describing. */
  kind: "complex-type" | "logical" | "primitive-type" | "resource";
  /** Extensions for kind */
  _kind?: Element;
  /** An external specification that the content is mapped to. */
  mapping?: Array<StructureDefinition_Mapping>;
  /** A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the structure definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this structure definition is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a StructureDefinition resource. */
  resourceType: "StructureDefinition";
  /** A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition. */
  snapshot?: StructureDefinition_Snapshot;
  /** The status of this structure definition. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive, user-friendly title for the structure definition. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models, where they are required. */
  type: string;
  /** Extensions for type */
  _type?: Element;
  /** An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers. */
  url: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. There is no expectation that versions can be placed in a lexicographical sequence, so authors are encouraged to populate the StructureDefinition.versionAlgorithm[x] element to enable comparisons. If there is no managed version available, authors can consider using ISO date/time syntax (e.g., '2023-01-01'). */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmCoding?: Coding;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmString?: string;
  /** Extensions for versionAlgorithmString */
  _versionAlgorithmString?: Element;
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
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getStructureDefinition_ContextSchema =
  (): z.ZodType<StructureDefinition_Context> =>
    StructureDefinition_ContextSchemaInternal as z.ZodType<StructureDefinition_Context>;
const getStructureDefinition_DifferentialSchema =
  (): z.ZodType<StructureDefinition_Differential> =>
    StructureDefinition_DifferentialSchemaInternal as z.ZodType<StructureDefinition_Differential>;
const getStructureDefinition_MappingSchema =
  (): z.ZodType<StructureDefinition_Mapping> =>
    StructureDefinition_MappingSchemaInternal as z.ZodType<StructureDefinition_Mapping>;
const getStructureDefinition_SnapshotSchema =
  (): z.ZodType<StructureDefinition_Snapshot> =>
    StructureDefinition_SnapshotSchemaInternal as z.ZodType<StructureDefinition_Snapshot>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const StructureDefinitionSchemaInternal = z
  .object({
    abstract: z.boolean(),
    _abstract: z.lazy(getElementSchema).optional(),
    baseDefinition: fhirCanonical().optional(),
    _baseDefinition: z.lazy(getElementSchema).optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getStructureDefinition_ContextSchema).array().optional(),
    contextInvariant: fhirString().nullable().array().optional(),
    _contextInvariant: z.lazy(getElementSchema).nullable().array().optional(),
    copyright: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    copyrightLabel: fhirString().optional(),
    _copyrightLabel: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    derivation: z.enum(["constraint", "specialization"]).optional(),
    _derivation: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    differential: z.lazy(getStructureDefinition_DifferentialSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    fhirVersion: z
      .enum([
        "0.0",
        "0.0.80",
        "0.0.81",
        "0.0.82",
        "0.01",
        "0.05",
        "0.06",
        "0.11",
        "0.4",
        "0.4.0",
        "0.5",
        "0.5.0",
        "1.0",
        "1.0.0",
        "1.0.1",
        "1.0.2",
        "1.1",
        "1.1.0",
        "1.4",
        "1.4.0",
        "1.6",
        "1.6.0",
        "1.8",
        "1.8.0",
        "3.0",
        "3.0.0",
        "3.0.1",
        "3.0.2",
        "3.3",
        "3.3.0",
        "3.5",
        "3.5.0",
        "4.0",
        "4.0.0",
        "4.0.1",
        "4.1",
        "4.1.0",
        "4.2",
        "4.2.0",
        "4.3",
        "4.3.0",
        "4.3.0-cibuild",
        "4.3.0-snapshot1",
        "4.4",
        "4.4.0",
        "4.5",
        "4.5.0",
        "4.6",
        "4.6.0",
        "5.0",
        "5.0.0",
        "5.0.0-ballot",
        "5.0.0-cibuild",
        "5.0.0-draft-final",
        "5.0.0-snapshot1",
        "5.0.0-snapshot2",
        "5.0.0-snapshot3",
      ])
      .optional(),
    _fhirVersion: z.lazy(getElementSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    keyword: z.lazy(getCodingSchema).array().optional(),
    kind: z.enum(["complex-type", "logical", "primitive-type", "resource"]),
    _kind: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    mapping: z.lazy(getStructureDefinition_MappingSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("StructureDefinition"),
    snapshot: z.lazy(getStructureDefinition_SnapshotSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    type: fhirUri(),
    _type: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    versionAlgorithmCoding: z.lazy(getCodingSchema).optional(),
    versionAlgorithmString: fhirString().optional(),
    _versionAlgorithmString: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const versionAlgorithm_x_Present = [
      "versionAlgorithmCoding",
      "versionAlgorithmString",
    ].filter((field) => record[field] !== undefined);
    if (versionAlgorithm_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of versionAlgorithmCoding, versionAlgorithmString may be present for versionAlgorithm[x]",
        path: [versionAlgorithm_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.contextInvariant,
      record._contextInvariant,
      "contextInvariant",
      "_contextInvariant",
      ctx,
    );
  });

export const StructureDefinitionSchema =
  StructureDefinitionSchemaInternal as z.ZodType<StructureDefinition>;
