// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
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
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { Evidence_Certainty } from "./Evidence_Certainty";
import { Evidence_CertaintySchemaInternal } from "./Evidence_Certainty";
import type { Evidence_Statistic } from "./Evidence_Statistic";
import { Evidence_StatisticSchemaInternal } from "./Evidence_Statistic";
import type { Evidence_VariableDefinition } from "./Evidence_VariableDefinition";
import { Evidence_VariableDefinitionSchemaInternal } from "./Evidence_VariableDefinition";

/** The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence. */
export interface Evidence extends DomainResource {
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;
  /** Extensions for approvalDate */
  _approvalDate?: Element;
  /** Declarative description of the Evidence. */
  assertion?: string;
  /** Extensions for assertion */
  _assertion?: Element;
  /** An individiual, organization, or device primarily involved in the creation and maintenance of the content. */
  author?: Array<ContactDetail>;
  /** Assessment of certainty, confidence in the estimates, or quality of the evidence. */
  certainty?: Array<Evidence_Certainty>;
  /** Citation Resource or display of suggested citation for this evidence. */
  citeAsMarkdown?: string;
  /** Extensions for citeAsMarkdown */
  _citeAsMarkdown?: Element;
  /** Citation Resource or display of suggested citation for this evidence. */
  citeAsReference?: Reference;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the Evidence and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Evidence. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
  copyrightLabel?: string;
  /** Extensions for copyrightLabel */
  _copyrightLabel?: Element;
  /** The date  (and optionally time) when the summary was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the summary changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the evidence from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** An individiual, organization, or device primarily responsible for internal coherence of the content. */
  editor?: Array<ContactDetail>;
  /** An individiual, organization, or device responsible for officially endorsing the content for use in some setting. */
  endorser?: Array<ContactDetail>;
  /** A Boolean value to indicate that this resource is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A formal identifier that is used to identify this summary when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
  lastReviewDate?: string;
  /** Extensions for lastReviewDate */
  _lastReviewDate?: Element;
  /** A natural language name identifying the evidence. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Footnotes and/or explanatory notes. */
  note?: Array<Annotation>;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the evidence. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this Evidence is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** Link or citation to artifact associated with the summary. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a Evidence resource. */
  resourceType: "Evidence";
  /** An individiual, organization, or device primarily responsible for review of some aspect of the content. */
  reviewer?: Array<ContactDetail>;
  /** Values and parameters for a single statistic. */
  statistic?: Array<Evidence_Statistic>;
  /** The status of this summary. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The design of the study that produced this evidence. The design is described with any number of study design characteristics. */
  studyDesign?: Array<CodeableConcept>;
  /** The method to combine studies. */
  synthesisType?: CodeableConcept;
  /** A short, descriptive, user-friendly title for the summary. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this evidence when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence instances. */
  useContext?: Array<UsageContext>;
  /** Evidence variable such as population, exposure, or outcome. */
  variableDefinition: Array<Evidence_VariableDefinition>;
  /** The identifier that is used to identify this version of the summary when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the summary author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getEvidence_CertaintySchema = (): z.ZodType<Evidence_Certainty> =>
  Evidence_CertaintySchemaInternal as z.ZodType<Evidence_Certainty>;
const getEvidence_StatisticSchema = (): z.ZodType<Evidence_Statistic> =>
  Evidence_StatisticSchemaInternal as z.ZodType<Evidence_Statistic>;
const getEvidence_VariableDefinitionSchema =
  (): z.ZodType<Evidence_VariableDefinition> =>
    Evidence_VariableDefinitionSchemaInternal as z.ZodType<Evidence_VariableDefinition>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const EvidenceSchemaInternal = z
  .object({
    approvalDate: fhirDate().optional(),
    _approvalDate: z.lazy(getElementSchema).optional(),
    assertion: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _assertion: z.lazy(getElementSchema).optional(),
    author: z.lazy(getContactDetailSchema).array().optional(),
    certainty: z.lazy(getEvidence_CertaintySchema).array().optional(),
    citeAsMarkdown: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _citeAsMarkdown: z.lazy(getElementSchema).optional(),
    citeAsReference: z.lazy(getReferenceSchema).optional(),
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
    endorser: z.lazy(getContactDetailSchema).array().optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    lastReviewDate: fhirDate().optional(),
    _lastReviewDate: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    resourceType: z.literal("Evidence"),
    reviewer: z.lazy(getContactDetailSchema).array().optional(),
    statistic: z.lazy(getEvidence_StatisticSchema).array().optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    studyDesign: z.lazy(getCodeableConceptSchema).array().optional(),
    synthesisType: z.lazy(getCodeableConceptSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    variableDefinition: z.lazy(getEvidence_VariableDefinitionSchema).array(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    versionAlgorithmCoding: z.lazy(getCodingSchema).optional(),
    versionAlgorithmString: fhirString().optional(),
    _versionAlgorithmString: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const citeAs_x_Present = ["citeAsMarkdown", "citeAsReference"].filter(
      (field) => record[field] !== undefined,
    );
    if (citeAs_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of citeAsMarkdown, citeAsReference may be present for citeAs[x]",
        path: [citeAs_x_Present[0]],
      });
    }
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
    validateReferenceTarget(
      record.citeAsReference,
      "citeAsReference",
      ["http://hl7.org/fhir/StructureDefinition/Citation"],
      ["Citation"],
      ctx,
    );
  });

export const EvidenceSchema = EvidenceSchemaInternal as z.ZodType<Evidence>;
