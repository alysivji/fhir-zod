// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalImpression
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { ClinicalImpression_Finding } from "./ClinicalImpression_Finding";
import { ClinicalImpression_FindingSchemaInternal } from "./ClinicalImpression_Finding";
import type { ClinicalImpression_Investigation } from "./ClinicalImpression_Investigation";
import { ClinicalImpression_InvestigationSchemaInternal } from "./ClinicalImpression_Investigation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
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

/** Base StructureDefinition for ClinicalImpression Resource */
export interface ClinicalImpression extends DomainResource {
  /** Action taken as part of assessment procedure. */
  action?: Array<Reference>;
  /** The clinician performing the assessment. */
  assessor?: Reference;
  /** Categorizes the type of clinical assessment performed. */
  code?: CodeableConcept;
  /** The encounter or episode of care this impression was created as part of. */
  context?: Reference;
  /** Indicates when the documentation of the assessment was complete. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A summary of the context and/or cause of the assessment - why / where was it performed, and what patient events/status prompted it. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The point in time or period over which the subject was assessed. */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** The point in time or period over which the subject was assessed. */
  effectivePeriod?: Period;
  /** Specific findings or diagnoses that was considered likely or relevant to ongoing treatment. */
  finding?: Array<ClinicalImpression_Finding>;
  /** A unique identifier assigned to the clinical impression that remains consistent regardless of what server the impression is stored on. */
  identifier?: Array<Identifier>;
  /** One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes. */
  investigation?: Array<ClinicalImpression_Investigation>;
  /** Commentary about the impression, typically recorded after the impression itself was made, though supplemental notes by the original author could also appear. */
  note?: Array<Annotation>;
  /** A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes. */
  previous?: Reference;
  /** This a list of the relevant problems/conditions for a patient. */
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
  status: "completed" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
  /** The patient or group of individuals assessed as part of this record. */
  subject: Reference;
  /** A text summary of the investigations and the diagnosis. */
  summary?: string;
  /** Extensions for summary */
  _summary?: Element;
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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalImpressionSchemaInternal =
  DomainResourceSchemaInternal.extend({
    action: z.lazy(getReferenceSchema).array().optional(),
    assessor: z.lazy(getReferenceSchema).optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    context: z.lazy(getReferenceSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    finding: z.lazy(getClinicalImpression_FindingSchema).array().optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    investigation: z
      .lazy(getClinicalImpression_InvestigationSchema)
      .array()
      .optional(),
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
    status: z.enum(["completed", "draft", "entered-in-error"]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    summary: fhirString().optional(),
    _summary: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const effective_x_Present = [
        "effectiveDateTime",
        "effectivePeriod",
      ].filter((field) => record[field] !== undefined);
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
        record.action,
        "action",
        [
          "http://hl7.org/fhir/StructureDefinition/Appointment",
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
          "http://hl7.org/fhir/StructureDefinition/ReferralRequest",
        ],
        [
          "Appointment",
          "MedicationRequest",
          "Procedure",
          "ProcedureRequest",
          "ReferralRequest",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.assessor,
        "assessor",
        ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
        ["Practitioner"],
        ctx,
      );
      validateReferenceTarget(
        record.context,
        "context",
        [
          "http://hl7.org/fhir/StructureDefinition/Encounter",
          "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        ],
        ["Encounter", "EpisodeOfCare"],
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
    });

export const ClinicalImpressionSchema =
  ClinicalImpressionSchemaInternal as z.ZodType<ClinicalImpression>;
