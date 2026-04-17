// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { ResearchStudy_Arm } from "./ResearchStudy_Arm";
import { ResearchStudy_ArmSchemaInternal } from "./ResearchStudy_Arm";
import type { ResearchStudy_Objective } from "./ResearchStudy_Objective";
import { ResearchStudy_ObjectiveSchemaInternal } from "./ResearchStudy_Objective";

/** A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects. */
export interface ResearchStudy extends DomainResource {
  /** Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up. */
  arm?: Array<ResearchStudy_Arm>;
  /** Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc. */
  category?: Array<CodeableConcept>;
  /** The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code. */
  condition?: Array<CodeableConcept>;
  /** Contact details to assist a user in learning more about or engaging with the study. */
  contact?: Array<ContactDetail>;
  /** A full description of how the study is being conducted. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Reference to a Group that defines the criteria for and quantity of subjects participating in the study.  E.g. " 200 female Europeans between the ages of 20 and 45 with early onset diabetes". */
  enrollment?: Array<Reference>;
  /** The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about. */
  focus?: Array<CodeableConcept>;
  /** Identifiers assigned to this research study by the sponsor or other systems. */
  identifier?: Array<Identifier>;
  /** Key terms to aid in searching for or filtering the study. */
  keyword?: Array<CodeableConcept>;
  /** Indicates a country, state or other region where the study is taking place. */
  location?: Array<CodeableConcept>;
  /** Comments made about the study by the performer, subject or other participants. */
  note?: Array<Annotation>;
  /** A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study. */
  objective?: Array<ResearchStudy_Objective>;
  /** A larger research study of which this particular study is a component or step. */
  partOf?: Array<Reference>;
  /** Identifies the start date and the expected (or actual, depending on status) end date for the study. */
  period?: Period;
  /** The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation. */
  phase?: CodeableConcept;
  /** The type of study based upon the intent of the study's activities. A classification of the intent of the study. */
  primaryPurposeType?: CodeableConcept;
  /** A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation. */
  principalInvestigator?: Reference;
  /** The set of steps expected to be performed as part of the execution of the study. */
  protocol?: Array<Reference>;
  /** A description and/or code explaining the premature termination of the study. */
  reasonStopped?: CodeableConcept;
  /** Citations, references and other related documents. */
  relatedArtifact?: Array<RelatedArtifact>;
  /** This is a ResearchStudy resource. */
  resourceType: "ResearchStudy";
  /** A facility in which study activities are conducted. */
  site?: Array<Reference>;
  /** An organization that initiates the investigation and is legally responsible for the study. */
  sponsor?: Reference;
  /** The current state of the study. */
  status:
    | "active"
    | "administratively-completed"
    | "approved"
    | "closed-to-accrual"
    | "closed-to-accrual-and-intervention"
    | "completed"
    | "disapproved"
    | "in-review"
    | "temporarily-closed-to-accrual"
    | "temporarily-closed-to-accrual-and-intervention"
    | "withdrawn";
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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getResearchStudy_ArmSchema = (): z.ZodType<ResearchStudy_Arm> =>
  ResearchStudy_ArmSchemaInternal as z.ZodType<ResearchStudy_Arm>;
const getResearchStudy_ObjectiveSchema =
  (): z.ZodType<ResearchStudy_Objective> =>
    ResearchStudy_ObjectiveSchemaInternal as z.ZodType<ResearchStudy_Objective>;

/** @internal */
export const ResearchStudySchemaInternal = DomainResourceSchemaInternal.extend({
  arm: z.lazy(getResearchStudy_ArmSchema).array().optional(),
  category: z.lazy(getCodeableConceptSchema).array().optional(),
  condition: z.lazy(getCodeableConceptSchema).array().optional(),
  contact: z.lazy(getContactDetailSchema).array().optional(),
  description: z
    .string()
    .regex(/[ \r\n\t\S]+/)
    .optional(),
  _description: z.lazy(getElementSchema).optional(),
  enrollment: z.lazy(getReferenceSchema).array().optional(),
  focus: z.lazy(getCodeableConceptSchema).array().optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  keyword: z.lazy(getCodeableConceptSchema).array().optional(),
  location: z.lazy(getCodeableConceptSchema).array().optional(),
  note: z.lazy(getAnnotationSchema).array().optional(),
  objective: z.lazy(getResearchStudy_ObjectiveSchema).array().optional(),
  partOf: z.lazy(getReferenceSchema).array().optional(),
  period: z.lazy(getPeriodSchema).optional(),
  phase: z.lazy(getCodeableConceptSchema).optional(),
  primaryPurposeType: z.lazy(getCodeableConceptSchema).optional(),
  principalInvestigator: z.lazy(getReferenceSchema).optional(),
  protocol: z.lazy(getReferenceSchema).array().optional(),
  reasonStopped: z.lazy(getCodeableConceptSchema).optional(),
  relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
  resourceType: z.literal("ResearchStudy"),
  site: z.lazy(getReferenceSchema).array().optional(),
  sponsor: z.lazy(getReferenceSchema).optional(),
  status: z.enum([
    "active",
    "administratively-completed",
    "approved",
    "closed-to-accrual",
    "closed-to-accrual-and-intervention",
    "completed",
    "disapproved",
    "in-review",
    "temporarily-closed-to-accrual",
    "temporarily-closed-to-accrual-and-intervention",
    "withdrawn",
  ]),
  _status: z.lazy(getElementSchema).optional(),
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
      [
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Practitioner", "PractitionerRole"],
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
