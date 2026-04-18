// Profile: http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

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
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { RiskEvidenceSynthesis_Certainty } from "./RiskEvidenceSynthesis_Certainty";
import { RiskEvidenceSynthesis_CertaintySchemaInternal } from "./RiskEvidenceSynthesis_Certainty";
import type { RiskEvidenceSynthesis_RiskEstimate } from "./RiskEvidenceSynthesis_RiskEstimate";
import { RiskEvidenceSynthesis_RiskEstimateSchemaInternal } from "./RiskEvidenceSynthesis_RiskEstimate";
import type { RiskEvidenceSynthesis_SampleSize } from "./RiskEvidenceSynthesis_SampleSize";
import { RiskEvidenceSynthesis_SampleSizeSchemaInternal } from "./RiskEvidenceSynthesis_SampleSize";

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface RiskEvidenceSynthesis extends DomainResource {
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;
  /** Extensions for approvalDate */
  _approvalDate?: Element;
  /** An individiual or organization primarily involved in the creation and maintenance of the content. */
  author?: Array<ContactDetail>;
  /** A description of the certainty of the risk estimate. */
  certainty?: Array<RiskEvidenceSynthesis_Certainty>;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the risk evidence synthesis and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the risk evidence synthesis. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** The date  (and optionally time) when the risk evidence synthesis was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the risk evidence synthesis changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the risk evidence synthesis from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** An individual or organization primarily responsible for internal coherence of the content. */
  editor?: Array<ContactDetail>;
  /** The period during which the risk evidence synthesis content was or is planned to be in active use. */
  effectivePeriod?: Period;
  /** An individual or organization responsible for officially endorsing the content for use in some setting. */
  endorser?: Array<ContactDetail>;
  /** A reference to a EvidenceVariable resource that defines the exposure for the research. */
  exposure?: Reference;
  /** A formal identifier that is used to identify this risk evidence synthesis when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** A legal or geographic region in which the risk evidence synthesis is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
  lastReviewDate?: string;
  /** Extensions for lastReviewDate */
  _lastReviewDate?: Element;
  /** A natural language name identifying the risk evidence synthesis. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** A human-readable string to clarify or explain concepts about the resource. */
  note?: Array<Annotation>;
  /** A reference to a EvidenceVariable resomece that defines the outcome for the research. */
  outcome: Reference;
  /** A reference to a EvidenceVariable resource that defines the population for the research. */
  population: Reference;
  /** The name of the organization or individual that published the risk evidence synthesis. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Related artifacts such as additional documentation, justification, or bibliographic references. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a RiskEvidenceSynthesis resource. */
  resourceType: "RiskEvidenceSynthesis";
  /** An individual or organization primarily responsible for review of some aspect of the content. */
  reviewer?: Array<ContactDetail>;
  /** The estimated risk of the outcome. */
  riskEstimate?: RiskEvidenceSynthesis_RiskEstimate;
  /** A description of the size of the sample involved in the synthesis. */
  sampleSize?: RiskEvidenceSynthesis_SampleSize;
  /** The status of this risk evidence synthesis. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Type of study eg randomized trial. */
  studyType?: CodeableConcept;
  /** Type of synthesis eg meta-analysis. */
  synthesisType?: CodeableConcept;
  /** A short, descriptive, user-friendly title for the risk evidence synthesis. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Descriptive topics related to the content of the RiskEvidenceSynthesis. Topics provide a high-level categorization grouping types of EffectEvidenceSynthesiss that can be useful for filtering and searching. */
  topic?: Array<CodeableConcept>;
  /** An absolute URI that is used to identify this risk evidence synthesis when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this risk evidence synthesis is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the risk evidence synthesis is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate risk evidence synthesis instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the risk evidence synthesis when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the risk evidence synthesis author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getRiskEvidenceSynthesis_CertaintySchema =
  (): z.ZodType<RiskEvidenceSynthesis_Certainty> =>
    RiskEvidenceSynthesis_CertaintySchemaInternal as z.ZodType<RiskEvidenceSynthesis_Certainty>;
const getRiskEvidenceSynthesis_RiskEstimateSchema =
  (): z.ZodType<RiskEvidenceSynthesis_RiskEstimate> =>
    RiskEvidenceSynthesis_RiskEstimateSchemaInternal as z.ZodType<RiskEvidenceSynthesis_RiskEstimate>;
const getRiskEvidenceSynthesis_SampleSizeSchema =
  (): z.ZodType<RiskEvidenceSynthesis_SampleSize> =>
    RiskEvidenceSynthesis_SampleSizeSchemaInternal as z.ZodType<RiskEvidenceSynthesis_SampleSize>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const RiskEvidenceSynthesisSchemaInternal = z
  .object({
    approvalDate: fhirDate().optional(),
    _approvalDate: z.lazy(getElementSchema).optional(),
    author: z.lazy(getContactDetailSchema).array().optional(),
    certainty: z
      .lazy(getRiskEvidenceSynthesis_CertaintySchema)
      .array()
      .optional(),
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
    editor: z.lazy(getContactDetailSchema).array().optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    endorser: z.lazy(getContactDetailSchema).array().optional(),
    exposure: z.lazy(getReferenceSchema).optional(),
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
    note: z.lazy(getAnnotationSchema).array().optional(),
    outcome: z.lazy(getReferenceSchema),
    population: z.lazy(getReferenceSchema),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    resourceType: z.literal("RiskEvidenceSynthesis"),
    reviewer: z.lazy(getContactDetailSchema).array().optional(),
    riskEstimate: z
      .lazy(getRiskEvidenceSynthesis_RiskEstimateSchema)
      .optional(),
    sampleSize: z.lazy(getRiskEvidenceSynthesis_SampleSizeSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    studyType: z.lazy(getCodeableConceptSchema).optional(),
    synthesisType: z.lazy(getCodeableConceptSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    topic: z.lazy(getCodeableConceptSchema).array().optional(),
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
      record.exposure,
      "exposure",
      ["http://hl7.org/fhir/StructureDefinition/EvidenceVariable"],
      ["EvidenceVariable"],
      ctx,
    );
    validateReferenceTarget(
      record.outcome,
      "outcome",
      ["http://hl7.org/fhir/StructureDefinition/EvidenceVariable"],
      ["EvidenceVariable"],
      ctx,
    );
    validateReferenceTarget(
      record.population,
      "population",
      ["http://hl7.org/fhir/StructureDefinition/EvidenceVariable"],
      ["EvidenceVariable"],
      ctx,
    );
  });

export const RiskEvidenceSynthesisSchema =
  RiskEvidenceSynthesisSchemaInternal as z.ZodType<RiskEvidenceSynthesis>;
