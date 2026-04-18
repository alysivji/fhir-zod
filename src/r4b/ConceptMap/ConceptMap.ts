// Source: https://hl7.org/fhir/R4B/conceptmap.html
// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
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
import type { ConceptMap_Group } from "./ConceptMap_Group";
import { ConceptMap_GroupSchemaInternal } from "./ConceptMap_Group";

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMap extends DomainResource {
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the concept map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the concept map. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** The date  (and optionally time) when the concept map was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the concept map from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A Boolean value to indicate that this concept map is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A group of mappings that all have the same source and target system. */
  group?: Array<ConceptMap_Group>;
  /** A formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Identifier;
  /** A legal or geographic region in which the concept map is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** A natural language name identifying the concept map. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the organization or individual that published the concept map. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this concept map is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a ConceptMap resource. */
  resourceType: "ConceptMap";
  /** Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings. */
  sourceCanonical?: string;
  /** Extensions for sourceCanonical */
  _sourceCanonical?: Element;
  /** Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings. */
  sourceUri?: string;
  /** Extensions for sourceUri */
  _sourceUri?: Element;
  /** The status of this concept map. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The target value set provides context for the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made. */
  targetCanonical?: string;
  /** Extensions for targetCanonical */
  _targetCanonical?: Element;
  /** The target value set provides context for the mappings. Note that the mapping is made between concepts, not between value sets, but the value set provides important context about how the concept mapping choices are made. */
  targetUri?: string;
  /** Extensions for targetUri */
  _targetUri?: Element;
  /** A short, descriptive, user-friendly title for the concept map. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this concept map when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this concept map is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the concept map is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate concept map instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the concept map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getConceptMap_GroupSchema = (): z.ZodType<ConceptMap_Group> =>
  ConceptMap_GroupSchemaInternal as z.ZodType<ConceptMap_Group>;
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
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ConceptMapSchemaInternal = z
  .object({
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    copyright: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    group: z.lazy(getConceptMap_GroupSchema).array().optional(),
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
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("ConceptMap"),
    sourceCanonical: fhirCanonical().optional(),
    _sourceCanonical: z.lazy(getElementSchema).optional(),
    sourceUri: fhirUri().optional(),
    _sourceUri: z.lazy(getElementSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    targetCanonical: fhirCanonical().optional(),
    _targetCanonical: z.lazy(getElementSchema).optional(),
    targetUri: fhirUri().optional(),
    _targetUri: z.lazy(getElementSchema).optional(),
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
    const source_x_Present = ["sourceCanonical", "sourceUri"].filter(
      (field) => record[field] !== undefined,
    );
    if (source_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of sourceCanonical, sourceUri may be present for source[x]",
        path: [source_x_Present[0]],
      });
    }
    const target_x_Present = ["targetCanonical", "targetUri"].filter(
      (field) => record[field] !== undefined,
    );
    if (target_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of targetCanonical, targetUri may be present for target[x]",
        path: [target_x_Present[0]],
      });
    }
  });

export const ConceptMapSchema =
  ConceptMapSchemaInternal as z.ZodType<ConceptMap>;
