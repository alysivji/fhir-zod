// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

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
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
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
import type { ResearchStudy_AssociatedParty } from "./ResearchStudy_AssociatedParty";
import { ResearchStudy_AssociatedPartySchemaInternal } from "./ResearchStudy_AssociatedParty";
import type { ResearchStudy_ComparisonGroup } from "./ResearchStudy_ComparisonGroup";
import { ResearchStudy_ComparisonGroupSchemaInternal } from "./ResearchStudy_ComparisonGroup";
import type { ResearchStudy_Label } from "./ResearchStudy_Label";
import { ResearchStudy_LabelSchemaInternal } from "./ResearchStudy_Label";
import type { ResearchStudy_Objective } from "./ResearchStudy_Objective";
import { ResearchStudy_ObjectiveSchemaInternal } from "./ResearchStudy_Objective";
import type { ResearchStudy_OutcomeMeasure } from "./ResearchStudy_OutcomeMeasure";
import { ResearchStudy_OutcomeMeasureSchemaInternal } from "./ResearchStudy_OutcomeMeasure";
import type { ResearchStudy_ProgressStatus } from "./ResearchStudy_ProgressStatus";
import { ResearchStudy_ProgressStatusSchemaInternal } from "./ResearchStudy_ProgressStatus";
import type { ResearchStudy_Recruitment } from "./ResearchStudy_Recruitment";
import { ResearchStudy_RecruitmentSchemaInternal } from "./ResearchStudy_Recruitment";

/** A scientific study of nature that sometimes includes processes involved in health and disease. For example, clinical trials are research studies that involve people. These studies may be related to new ways to screen, prevent, diagnose, and treat disease. They may also study certain outcomes and certain groups of people by looking at data collected in the past or future. */
export interface ResearchStudy extends DomainResource {
  /** Sponsors, collaborators, and other parties. */
  associatedParty?: Array<ResearchStudy_AssociatedParty>;
  /** Additional grouping mechanism or categorization of a research study. Example: FDA regulated device, FDA regulated drug, MPG Paragraph 23b (a German legal requirement), IRB-exempt, etc. Implementation Note: do not use the classifier element to support existing semantics that are already supported thru explicit elements in the resource. */
  classifier?: Array<CodeableConcept>;
  /** Describes an expected event or sequence of events for one of the subjects of a study. E.g. for a living subject: exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. E.g. for a stability study: {store sample from lot A at 25 degrees for 1 month}, {store sample from lot A at 40 degrees for 1 month}. */
  comparisonGroup?: Array<ResearchStudy_ComparisonGroup>;
  /** The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code. */
  condition?: Array<CodeableConcept>;
  /** The date (and optionally time) when the ResearchStudy Resource was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the ResearchStudy Resource changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A detailed and human-readable narrative of the study. E.g., study abstract. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A brief text for explaining the study. */
  descriptionSummary?: string;
  /** Extensions for descriptionSummary */
  _descriptionSummary?: Element;
  /** The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about. */
  focus?: Array<CodeableReference>;
  /** Identifiers assigned to this research study by the sponsor or other systems. */
  identifier?: Array<Identifier>;
  /** Key terms to aid in searching for or filtering the study. */
  keyword?: Array<CodeableConcept>;
  /** Additional names for the study. */
  label?: Array<ResearchStudy_Label>;
  /** Name for this study (computer friendly). */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Comments made about the study by the performer, subject or other participants. */
  note?: Array<Annotation>;
  /** A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study. */
  objective?: Array<ResearchStudy_Objective>;
  /** An "outcome measure", "endpoint", "effect measure" or "measure of effect" is a specific measurement or observation used to quantify the effect of experimental variables on the participants in a study, or for observational studies, to describe patterns of diseases or traits or associations with exposures, risk factors or treatment. */
  outcomeMeasure?: Array<ResearchStudy_OutcomeMeasure>;
  /** A larger research study of which this particular study is a component or step. */
  partOf?: Array<Reference>;
  /** Identifies the start date and the expected (or actual, depending on status) end date for the study. */
  period?: Period;
  /** The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation. */
  phase?: CodeableConcept;
  /** The type of study based upon the intent of the study activities. A classification of the intent of the study. */
  primaryPurposeType?: CodeableConcept;
  /** Status of study with time for that status. */
  progressStatus?: Array<ResearchStudy_ProgressStatus>;
  /** The set of steps expected to be performed as part of the execution of the study. */
  protocol?: Array<Reference>;
  /** Target or actual group of participants enrolled in study. */
  recruitment?: ResearchStudy_Recruitment;
  /** A country, state or other area where the study is taking place rather than its precise geographic location or address. */
  region?: Array<CodeableConcept>;
  /** Citations, references, URLs and other related documents.  When using relatedArtifact to share URLs, the relatedArtifact.type will often be set to one of "documentation" or "supported-with" and the URL value will often be in relatedArtifact.document.url but another possible location is relatedArtifact.resource when it is a canonical URL. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a ResearchStudy resource. */
  resourceType: "ResearchStudy";
  /** Link to one or more sets of results generated by the study.  Could also link to a research registry holding the results such as ClinicalTrials.gov. */
  result?: Array<Reference>;
  /** A facility in which study activities are conducted. */
  site?: Array<Reference>;
  /** The publication state of the resource (not of the study). */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc. */
  studyDesign?: Array<CodeableConcept>;
  /** The human readable name of the research study. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** Canonical identifier for this study resource, represented as a globally unique URI. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The business version for the study record. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** A description and/or code explaining the premature termination of the study. */
  whyStopped?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
const getResearchStudy_AssociatedPartySchema =
  (): z.ZodType<ResearchStudy_AssociatedParty> =>
    ResearchStudy_AssociatedPartySchemaInternal as z.ZodType<ResearchStudy_AssociatedParty>;
const getResearchStudy_ComparisonGroupSchema =
  (): z.ZodType<ResearchStudy_ComparisonGroup> =>
    ResearchStudy_ComparisonGroupSchemaInternal as z.ZodType<ResearchStudy_ComparisonGroup>;
const getResearchStudy_LabelSchema = (): z.ZodType<ResearchStudy_Label> =>
  ResearchStudy_LabelSchemaInternal as z.ZodType<ResearchStudy_Label>;
const getResearchStudy_ObjectiveSchema =
  (): z.ZodType<ResearchStudy_Objective> =>
    ResearchStudy_ObjectiveSchemaInternal as z.ZodType<ResearchStudy_Objective>;
const getResearchStudy_OutcomeMeasureSchema =
  (): z.ZodType<ResearchStudy_OutcomeMeasure> =>
    ResearchStudy_OutcomeMeasureSchemaInternal as z.ZodType<ResearchStudy_OutcomeMeasure>;
const getResearchStudy_ProgressStatusSchema =
  (): z.ZodType<ResearchStudy_ProgressStatus> =>
    ResearchStudy_ProgressStatusSchemaInternal as z.ZodType<ResearchStudy_ProgressStatus>;
const getResearchStudy_RecruitmentSchema =
  (): z.ZodType<ResearchStudy_Recruitment> =>
    ResearchStudy_RecruitmentSchemaInternal as z.ZodType<ResearchStudy_Recruitment>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ResearchStudySchemaInternal = z
  .object({
    associatedParty: z
      .lazy(getResearchStudy_AssociatedPartySchema)
      .array()
      .optional(),
    classifier: z.lazy(getCodeableConceptSchema).array().optional(),
    comparisonGroup: z
      .lazy(getResearchStudy_ComparisonGroupSchema)
      .array()
      .optional(),
    condition: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    descriptionSummary: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _descriptionSummary: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getCodeableReferenceSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    keyword: z.lazy(getCodeableConceptSchema).array().optional(),
    label: z.lazy(getResearchStudy_LabelSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    objective: z.lazy(getResearchStudy_ObjectiveSchema).array().optional(),
    outcomeMeasure: z
      .lazy(getResearchStudy_OutcomeMeasureSchema)
      .array()
      .optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    phase: z.lazy(getCodeableConceptSchema).optional(),
    primaryPurposeType: z.lazy(getCodeableConceptSchema).optional(),
    progressStatus: z
      .lazy(getResearchStudy_ProgressStatusSchema)
      .array()
      .optional(),
    protocol: z.lazy(getReferenceSchema).array().optional(),
    recruitment: z.lazy(getResearchStudy_RecruitmentSchema).optional(),
    region: z.lazy(getCodeableConceptSchema).array().optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    resourceType: z.literal("ResearchStudy"),
    result: z.lazy(getReferenceSchema).array().optional(),
    site: z.lazy(getReferenceSchema).array().optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    studyDesign: z.lazy(getCodeableConceptSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    whyStopped: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
      ["ResearchStudy"],
      ctx,
    );
    validateReferenceTarget(
      record.protocol,
      "protocol",
      ["http://hl7.org/fhir/StructureDefinition/PlanDefinition"],
      ["PlanDefinition"],
      ctx,
    );
    validateReferenceTarget(
      record.result,
      "result",
      [
        "http://hl7.org/fhir/StructureDefinition/Citation",
        "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
        "http://hl7.org/fhir/StructureDefinition/EvidenceReport",
      ],
      ["Citation", "DiagnosticReport", "EvidenceReport"],
      ctx,
    );
    validateReferenceTarget(
      record.site,
      "site",
      [
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
      ],
      ["Location", "Organization", "ResearchStudy"],
      ctx,
    );
  });

export const ResearchStudySchema =
  ResearchStudySchemaInternal as z.ZodType<ResearchStudy>;
