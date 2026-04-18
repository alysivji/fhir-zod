// Source: https://hl7.org/fhir/R4B/clinicalimpression.html
// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalImpression
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
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
import type { ClinicalImpression_Finding } from "./ClinicalImpression_Finding";
import { ClinicalImpression_FindingSchemaInternal } from "./ClinicalImpression_Finding";
import type { ClinicalImpression_Investigation } from "./ClinicalImpression_Investigation";
import { ClinicalImpression_InvestigationSchemaInternal } from "./ClinicalImpression_Investigation";

/** A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score. */
export interface ClinicalImpression extends DomainResource {
  /** The clinician performing the assessment. */
  assessor?: Reference;
  /** Categorizes the type of clinical assessment performed. */
  code?: CodeableConcept;
  /** Indicates when the documentation of the assessment was complete. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The point in time or period over which the subject was assessed. */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** The point in time or period over which the subject was assessed. */
  effectivePeriod?: Period;
  /** The Encounter during which this ClinicalImpression was created or to which the creation of this record is tightly associated. */
  encounter?: Reference;
  /** Specific findings or diagnoses that were considered likely or relevant to ongoing treatment. */
  finding?: Array<ClinicalImpression_Finding>;
  /** Business identifiers assigned to this clinical impression by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
  identifier?: Array<Identifier>;
  /** One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes. */
  investigation?: Array<ClinicalImpression_Investigation>;
  /** Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear. */
  note?: Array<Annotation>;
  /** A reference to the last assessment that was conducted on this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes. */
  previous?: Reference;
  /** A list of the relevant problems/conditions for a patient. */
  problem?: Array<Reference>;
  /** Estimate of likely outcome. */
  prognosisCodeableConcept?: Array<CodeableConcept>;
  /** RiskAssessment expressing likely outcome. */
  prognosisReference?: Array<Reference>;
  /** Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis. */
  protocol?: Array<string | null>;
  /** Extensions for protocol */
  _protocol?: Array<Element | null>;
  /** This is a ClinicalImpression resource. */
  resourceType: "ClinicalImpression";
  /** Identifies the workflow status of the assessment. */
  status:
    | "completed"
    | "entered-in-error"
    | "in-progress"
    | "not-done"
    | "on-hold"
    | "preparation"
    | "stopped"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Captures the reason for the current state of the ClinicalImpression. */
  statusReason?: CodeableConcept;
  /** The patient or group of individuals assessed as part of this record. */
  subject: Reference;
  /** A text summary of the investigations and the diagnosis. */
  summary?: string;
  /** Extensions for summary */
  _summary?: Element;
  /** Information supporting the clinical impression. */
  supportingInfo?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getClinicalImpression_FindingSchema =
  (): z.ZodType<ClinicalImpression_Finding> =>
    ClinicalImpression_FindingSchemaInternal as z.ZodType<ClinicalImpression_Finding>;
const getClinicalImpression_InvestigationSchema =
  (): z.ZodType<ClinicalImpression_Investigation> =>
    ClinicalImpression_InvestigationSchemaInternal as z.ZodType<ClinicalImpression_Investigation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
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
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ClinicalImpressionSchemaInternal = z
  .object({
    assessor: z.lazy(getReferenceSchema).optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    finding: z.lazy(getClinicalImpression_FindingSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    investigation: z
      .lazy(getClinicalImpression_InvestigationSchema)
      .array()
      .optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    previous: z.lazy(getReferenceSchema).optional(),
    problem: z.lazy(getReferenceSchema).array().optional(),
    prognosisCodeableConcept: z
      .lazy(getCodeableConceptSchema)
      .array()
      .optional(),
    prognosisReference: z.lazy(getReferenceSchema).array().optional(),
    protocol: fhirUri().nullable().array().optional(),
    _protocol: z.lazy(getElementSchema).nullable().array().optional(),
    resourceType: z.literal("ClinicalImpression"),
    status: z.enum([
      "completed",
      "entered-in-error",
      "in-progress",
      "not-done",
      "on-hold",
      "preparation",
      "stopped",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusReason: z.lazy(getCodeableConceptSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    summary: fhirString().optional(),
    _summary: z.lazy(getElementSchema).optional(),
    supportingInfo: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const effective_x_Present = ["effectiveDateTime", "effectivePeriod"].filter(
      (field) => record[field] !== undefined,
    );
    if (effective_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of effectiveDateTime, effectivePeriod may be present for effective[x]",
        path: [effective_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.protocol,
      record._protocol,
      "protocol",
      "_protocol",
      ctx,
    );
    validateReferenceTarget(
      record.assessor,
      "assessor",
      [
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.previous,
      "previous",
      ["http://hl7.org/fhir/StructureDefinition/ClinicalImpression"],
      ["ClinicalImpression"],
      ctx,
    );
    validateReferenceTarget(
      record.problem,
      "problem",
      [
        "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
        "http://hl7.org/fhir/StructureDefinition/Condition",
      ],
      ["AllergyIntolerance", "Condition"],
      ctx,
    );
    validateReferenceTarget(
      record.prognosisReference,
      "prognosisReference",
      ["http://hl7.org/fhir/StructureDefinition/RiskAssessment"],
      ["RiskAssessment"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.supportingInfo,
      "supportingInfo",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const ClinicalImpressionSchema =
  ClinicalImpressionSchemaInternal as z.ZodType<ClinicalImpression>;
