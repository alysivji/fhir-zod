// Source: https://hl7.org/fhir/R5/riskassessment.html
// Profile: http://hl7.org/fhir/StructureDefinition/RiskAssessment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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
import type { RiskAssessment_Prediction } from "./RiskAssessment_Prediction";
import { RiskAssessment_PredictionSchemaInternal } from "./RiskAssessment_Prediction";

/** An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome. */
export interface RiskAssessment extends DomainResource {
  /** A reference to the request that is fulfilled by this risk assessment. */
  basedOn?: Reference;
  /** Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.). */
  basis?: Array<Reference>;
  /** The type of the risk assessment performed. */
  code?: CodeableConcept;
  /** For assessments or prognosis specific to a particular condition, indicates the condition being assessed. */
  condition?: Reference;
  /** The encounter where the assessment was performed. */
  encounter?: Reference;
  /** Business identifier assigned to the risk assessment. */
  identifier?: Array<Identifier>;
  /** The algorithm, process or mechanism used to evaluate the risk. */
  method?: CodeableConcept;
  /** A description of the steps that might be taken to reduce the identified risk(s). */
  mitigation?: string;
  /** Extensions for mitigation */
  _mitigation?: Element;
  /** Additional comments about the risk assessment. */
  note?: Array<Annotation>;
  /** The date (and possibly time) the risk assessment was performed. */
  occurrenceDateTime?: string;
  /** Extensions for occurrenceDateTime */
  _occurrenceDateTime?: Element;
  /** The date (and possibly time) the risk assessment was performed. */
  occurrencePeriod?: Period;
  /** A reference to a resource that this risk assessment is part of, such as a Procedure. */
  parent?: Reference;
  /** The provider, patient, related person, or software application that performed the assessment. */
  performer?: Reference;
  /** Describes the expected outcome for the subject. */
  prediction?: Array<RiskAssessment_Prediction>;
  /** The reason the risk assessment was performed. */
  reason?: Array<CodeableReference>;
  /** This is a RiskAssessment resource. */
  resourceType: "RiskAssessment";
  /** The status of the RiskAssessment, using the same statuses as an Observation. */
  status:
    | "amended"
    | "cancelled"
    | "corrected"
    | "entered-in-error"
    | "final"
    | "preliminary"
    | "registered"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient or group the risk assessment applies to. */
  subject: Reference;
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
const getRiskAssessment_PredictionSchema =
  (): z.ZodType<RiskAssessment_Prediction> =>
    RiskAssessment_PredictionSchemaInternal as z.ZodType<RiskAssessment_Prediction>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const RiskAssessmentSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).optional(),
    basis: z.lazy(getReferenceSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    condition: z.lazy(getReferenceSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    mitigation: fhirString().optional(),
    _mitigation: z.lazy(getElementSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    occurrencePeriod: z.lazy(getPeriodSchema).optional(),
    parent: z.lazy(getReferenceSchema).optional(),
    performer: z.lazy(getReferenceSchema).optional(),
    prediction: z.lazy(getRiskAssessment_PredictionSchema).array().optional(),
    reason: z.lazy(getCodeableReferenceSchema).array().optional(),
    resourceType: z.literal("RiskAssessment"),
    status: z.enum([
      "amended",
      "cancelled",
      "corrected",
      "entered-in-error",
      "final",
      "preliminary",
      "registered",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const occurrence_x_Present = [
      "occurrenceDateTime",
      "occurrencePeriod",
    ].filter((field) => record[field] !== undefined);
    if (occurrence_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of occurrenceDateTime, occurrencePeriod may be present for occurrence[x]",
        path: [occurrence_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.basis,
      "basis",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.condition,
      "condition",
      ["http://hl7.org/fhir/StructureDefinition/Condition"],
      ["Condition"],
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
      record.parent,
      "parent",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.performer,
      "performer",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Device",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
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

export const RiskAssessmentSchema =
  RiskAssessmentSchemaInternal as z.ZodType<RiskAssessment>;
