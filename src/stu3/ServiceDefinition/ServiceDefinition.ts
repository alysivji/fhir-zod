// Profile: http://hl7.org/fhir/StructureDefinition/ServiceDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
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
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { Contributor } from "../Contributor";
import { ContributorSchemaInternal } from "../Contributor";
import type { DataRequirement } from "../DataRequirement";
import { DataRequirementSchemaInternal } from "../DataRequirement";
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { TriggerDefinition } from "../TriggerDefinition";
import { TriggerDefinitionSchemaInternal } from "../TriggerDefinition";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";

/** Base StructureDefinition for ServiceDefinition Resource */
export interface ServiceDefinition extends DomainResource {
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;
  /** Extensions for approvalDate */
  _approvalDate?: Element;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A contributor to the content of the module, including authors, editors, reviewers, and endorsers. */
  contributor?: Array<Contributor>;
  /** A copyright statement relating to the service definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the service definition. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** Data requirements are a machine processable description of the data required by the module in order to perform a successful evaluation. */
  dataRequirement?: Array<DataRequirement>;
  /** The date  (and optionally time) when the service definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the service definition changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the service definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The period during which the service definition content was or is planned to be in active use. */
  effectivePeriod?: Period;
  /** A boolean value to indicate that this service definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A formal identifier that is used to identify this service definition when it is represented in other formats, or referenced in a specification, model, design or an instance. This is used for CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts. */
  identifier?: Array<Identifier>;
  /** A legal or geographic region in which the service definition is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn't change the original approval date. */
  lastReviewDate?: string;
  /** Extensions for lastReviewDate */
  _lastReviewDate?: Element;
  /** A natural language name identifying the service definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** A reference to the operation that is used to invoke this service. */
  operationDefinition?: Reference;
  /** The name of the individual or organization that published the service definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explaination of why this service definition is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** Related resources such as additional documentation, justification, or bibliographic references. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a ServiceDefinition resource. */
  resourceType: "ServiceDefinition";
  /** The status of this service definition. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive, user-friendly title for the service definition. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching. */
  topic?: Array<CodeableConcept>;
  /** The trigger element defines when the rule should be invoked. This information is used by consumers of the rule to determine how to integrate the rule into a specific workflow. */
  trigger?: Array<TriggerDefinition>;
  /** An absolute URI that is used to identify this service definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this service definition is (or will be) published. The URL SHOULD include the major version of the service definition. For more information see [Technical and Business Versions](resource.html#versions). */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** A detailed description of how the module is used from a clinical perspective. */
  usage?: string;
  /** Extensions for usage */
  _usage?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate service definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the service definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the service definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getContributorSchema = (): z.ZodType<Contributor> =>
  ContributorSchemaInternal as z.ZodType<Contributor>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
  DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
  TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ServiceDefinitionSchemaInternal = z
  .object({
    approvalDate: fhirDate().optional(),
    _approvalDate: z.lazy(getElementSchema).optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    contributor: z.lazy(getContributorSchema).array().optional(),
    copyright: z.string().optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    dataRequirement: z.lazy(getDataRequirementSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z.string().optional(),
    _description: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
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
    operationDefinition: z.lazy(getReferenceSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z.string().optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    resourceType: z.literal("ServiceDefinition"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    topic: z.lazy(getCodeableConceptSchema).array().optional(),
    trigger: z.lazy(getTriggerDefinitionSchema).array().optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    usage: fhirString().optional(),
    _usage: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.operationDefinition,
      "operationDefinition",
      ["http://hl7.org/fhir/StructureDefinition/OperationDefinition"],
      ["OperationDefinition"],
      ctx,
    );
  });

export const ServiceDefinitionSchema =
  ServiceDefinitionSchemaInternal as z.ZodType<ServiceDefinition>;
