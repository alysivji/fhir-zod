// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { ValueSet_Compose } from "./ValueSet_Compose";
import { ValueSet_ComposeSchemaInternal } from "./ValueSet_Compose";
import type { ValueSet_Expansion } from "./ValueSet_Expansion";
import { ValueSet_ExpansionSchemaInternal } from "./ValueSet_Expansion";
import type { ValueSet_Scope } from "./ValueSet_Scope";
import { ValueSet_ScopeSchemaInternal } from "./ValueSet_Scope";

/** A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html). */
export interface ValueSet extends DomainResource {
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;
  /** Extensions for approvalDate */
  _approvalDate?: Element;
  /** An individiual or organization primarily involved in the creation and maintenance of the ValueSet. */
  author?: Array<ContactDetail>;
  /** A set of criteria that define the contents of the value set by including or excluding codes selected from the specified code system(s) that the value set draws from. This is also known as the Content Logical Definition (CLD). */
  compose?: ValueSet_Compose;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the value set and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the value set. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
  copyrightLabel?: string;
  /** Extensions for copyrightLabel */
  _copyrightLabel?: Element;
  /** The date (and optionally time) when the value set metadata or content logical definition (.compose) was created or revised. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the value set from a consumer's perspective. The textual description specifies the span of meanings for concepts to be included within the Value Set Expansion, and also may specify the intended use and limitations of the Value Set. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** An individual or organization primarily responsible for internal coherence of the ValueSet. */
  editor?: Array<ContactDetail>;
  /** The period during which the ValueSet content was or is planned to be in active use. */
  effectivePeriod?: Period;
  /** An individual or organization asserted by the publisher to be responsible for officially endorsing the ValueSet for use in some setting. */
  endorser?: Array<ContactDetail>;
  /** A value set can also be "expanded", where the value set is turned into a simple collection of enumerated codes. This element holds the expansion, if it has been performed. */
  expansion?: ValueSet_Expansion;
  /** A Boolean value to indicate that this value set is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A formal identifier that is used to identify this value set when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** If this is set to 'true', then no new versions of the content logical definition can be created.  Note: Other metadata might still change. */
  immutable?: boolean;
  /** Extensions for immutable */
  _immutable?: Element;
  /** A legal or geographic region in which the value set is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
  lastReviewDate?: string;
  /** Extensions for lastReviewDate */
  _lastReviewDate?: Element;
  /** A natural language name identifying the value set. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the value set. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this value set is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** Related artifacts such as additional documentation, justification, dependencies, bibliographic references, and predecessor and successor artifacts. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a ValueSet resource. */
  resourceType: "ValueSet";
  /** An individual or organization asserted by the publisher to be primarily responsible for review of some aspect of the ValueSet. */
  reviewer?: Array<ContactDetail>;
  /** Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description. */
  scope?: ValueSet_Scope;
  /** The status of this value set. Enables tracking the life-cycle of the content. The status of the value set applies to the value set definition (ValueSet.compose) and the associated ValueSet metadata. Expansions do not have a state. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive, user-friendly title for the value set. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Descriptions related to the content of the ValueSet. Topics provide a high-level categorization as well as keywords for the ValueSet that can be useful for filtering and searching. */
  topic?: Array<CodeableConcept>;
  /** An absolute URI that is used to identify this value set when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this value set is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the value set is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate value set instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the value set when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the value set author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** Indicates the mechanism used to compare versions to determine which ValueSet is more current. */
  versionAlgorithmCoding?: Coding;
  /** Indicates the mechanism used to compare versions to determine which ValueSet is more current. */
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
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getValueSet_ComposeSchema = (): z.ZodType<ValueSet_Compose> =>
  ValueSet_ComposeSchemaInternal as z.ZodType<ValueSet_Compose>;
const getValueSet_ExpansionSchema = (): z.ZodType<ValueSet_Expansion> =>
  ValueSet_ExpansionSchemaInternal as z.ZodType<ValueSet_Expansion>;
const getValueSet_ScopeSchema = (): z.ZodType<ValueSet_Scope> =>
  ValueSet_ScopeSchemaInternal as z.ZodType<ValueSet_Scope>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ValueSetSchemaInternal = z
  .object({
    approvalDate: fhirDate().optional(),
    _approvalDate: z.lazy(getElementSchema).optional(),
    author: z.lazy(getContactDetailSchema).array().optional(),
    compose: z.lazy(getValueSet_ComposeSchema).optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    copyright: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    copyrightLabel: fhirString().optional(),
    _copyrightLabel: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    editor: z.lazy(getContactDetailSchema).array().optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    endorser: z.lazy(getContactDetailSchema).array().optional(),
    expansion: z.lazy(getValueSet_ExpansionSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    immutable: z.boolean().optional(),
    _immutable: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    lastReviewDate: fhirDate().optional(),
    _lastReviewDate: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    resourceType: z.literal("ValueSet"),
    reviewer: z.lazy(getContactDetailSchema).array().optional(),
    scope: z.lazy(getValueSet_ScopeSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    topic: z.lazy(getCodeableConceptSchema).array().optional(),
    url: fhirUri().optional(),
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
  });

export const ValueSetSchema = ValueSetSchemaInternal as z.ZodType<ValueSet>;
