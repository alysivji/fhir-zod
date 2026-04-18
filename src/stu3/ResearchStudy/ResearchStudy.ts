// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
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
import type { ResearchStudy_Arm } from "./ResearchStudy_Arm";
import { ResearchStudy_ArmSchemaInternal } from "./ResearchStudy_Arm";

/** Base StructureDefinition for ResearchStudy Resource */
export interface ResearchStudy extends DomainResource {
  /** Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. */
  arm?: Array<ResearchStudy_Arm>;
  /** Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc. */
  category?: Array<CodeableConcept>;
  /** Contact details to assist a user in learning more about or engaging with the study. */
  contact?: Array<ContactDetail>;
  /** A full description of how the study is being conducted. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. " 200 female Europeans between the ages of 20 and 45 with early onset diabetes". */
  enrollment?: Array<Reference>;
  /** The condition(s), medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about. */
  focus?: Array<CodeableConcept>;
  /** Identifiers assigned to this research study by the sponsor or other systems. */
  identifier?: Array<Identifier>;
  /** Indicates a country, state or other region where the study is taking place. */
  jurisdiction?: Array<CodeableConcept>;
  /** Key terms to aid in searching for or filtering the study. */
  keyword?: Array<CodeableConcept>;
  /** Comments made about the event by the performer, subject or other participants. */
  note?: Array<Annotation>;
  /** A larger research study of which this particular study is a component or step. */
  partOf?: Array<Reference>;
  /** Identifies the start date and the expected (or actual, depending on status) end date for the study. */
  period?: Period;
  /** Indicates the individual who has primary oversite of the execution of the study. */
  principalInvestigator?: Reference;
  /** The set of steps expected to be performed as part of the execution of the study. */
  protocol?: Array<Reference>;
  /** A description and/or code explaining the premature termination of the study. */
  reasonStopped?: CodeableConcept;
  /** Citations, references and other related documents. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a ResearchStudy resource. */
  resourceType: "ResearchStudy";
  /** Clinic, hospital or other healthcare location that is participating in the study. */
  site?: Array<Reference>;
  /** The organization responsible for the execution of the study. */
  sponsor?: Reference;
  /** The current state of the study. */
  status:
    | "completed"
    | "draft"
    | "entered-in-error"
    | "in-progress"
    | "stopped"
    | "suspended";
  /** Extensions for status */
  _status?: Element;
  /** A short, descriptive user-friendly label for the study. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
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
const getResearchStudy_ArmSchema = (): z.ZodType<ResearchStudy_Arm> =>
  ResearchStudy_ArmSchemaInternal as z.ZodType<ResearchStudy_Arm>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ResearchStudySchemaInternal = z
  .object({
    arm: z.lazy(getResearchStudy_ArmSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z.string().optional(),
    _description: z.lazy(getElementSchema).optional(),
    enrollment: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getCodeableConceptSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    keyword: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    principalInvestigator: z.lazy(getReferenceSchema).optional(),
    protocol: z.lazy(getReferenceSchema).array().optional(),
    reasonStopped: z.lazy(getCodeableConceptSchema).optional(),
    relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
    resourceType: z.literal("ResearchStudy"),
    site: z.lazy(getReferenceSchema).array().optional(),
    sponsor: z.lazy(getReferenceSchema).optional(),
    status: z.enum([
      "completed",
      "draft",
      "entered-in-error",
      "in-progress",
      "stopped",
      "suspended",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.enrollment,
      "enrollment",
      ["http://hl7.org/fhir/StructureDefinition/Group"],
      ["Group"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
      ["ResearchStudy"],
      ctx,
    );
    validateReferenceTarget(
      record.principalInvestigator,
      "principalInvestigator",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
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
      record.site,
      "site",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.sponsor,
      "sponsor",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
  });

export const ResearchStudySchema =
  ResearchStudySchemaInternal as z.ZodType<ResearchStudy>;
