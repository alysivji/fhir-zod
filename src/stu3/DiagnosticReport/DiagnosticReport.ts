// Profile: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirInstant,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
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
import type { DiagnosticReport_Image } from "./DiagnosticReport_Image";
import { DiagnosticReport_ImageSchemaInternal } from "./DiagnosticReport_Image";
import type { DiagnosticReport_Performer } from "./DiagnosticReport_Performer";
import { DiagnosticReport_PerformerSchemaInternal } from "./DiagnosticReport_Performer";

/** Base StructureDefinition for DiagnosticReport Resource */
export interface DiagnosticReport extends DomainResource {
  /** Details concerning a test or procedure requested. */
  basedOn?: Array<Reference>;
  /** A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes. */
  category?: CodeableConcept;
  /** A code or name that describes this diagnostic report. */
  code: CodeableConcept;
  /** Codes for the conclusion. */
  codedDiagnosis?: Array<CodeableConcept>;
  /** Concise and clinically contextualized impression / summary of the diagnostic report. */
  conclusion?: string;
  /** Extensions for conclusion */
  _conclusion?: Element;
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport per is about. */
  context?: Reference;
  /** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
  effectivePeriod?: Period;
  /** Identifiers assigned to this report by the performer or other systems. */
  identifier?: Array<Identifier>;
  /** A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest). */
  image?: Array<DiagnosticReport_Image>;
  /** One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images. */
  imagingStudy?: Array<Reference>;
  /** The date and time that this version of the report was released from the source diagnostic service. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** Indicates who or what participated in producing the report. */
  performer?: Array<DiagnosticReport_Performer>;
  /** Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent. */
  presentedForm?: Array<Attachment>;
  /** This is a DiagnosticReport resource. */
  resourceType: "DiagnosticReport";
  /** Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. "atomic" results), or they can be grouping observations that include references to other members of the group (e.g. "panels"). */
  result?: Array<Reference>;
  /** Details about the specimens on which this diagnostic report is based. */
  specimen?: Array<Reference>;
  /** The status of the diagnostic report as a whole. */
  status:
    | "amended"
    | "appended"
    | "cancelled"
    | "corrected"
    | "entered-in-error"
    | "final"
    | "partial"
    | "preliminary"
    | "registered"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources. */
  subject?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDiagnosticReport_ImageSchema = (): z.ZodType<DiagnosticReport_Image> =>
  DiagnosticReport_ImageSchemaInternal as z.ZodType<DiagnosticReport_Image>;
const getDiagnosticReport_PerformerSchema =
  (): z.ZodType<DiagnosticReport_Performer> =>
    DiagnosticReport_PerformerSchemaInternal as z.ZodType<DiagnosticReport_Performer>;
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
export const DiagnosticReportSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).optional(),
    code: z.lazy(getCodeableConceptSchema),
    codedDiagnosis: z.lazy(getCodeableConceptSchema).array().optional(),
    conclusion: fhirString().optional(),
    _conclusion: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    image: z.lazy(getDiagnosticReport_ImageSchema).array().optional(),
    imagingStudy: z.lazy(getReferenceSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    issued: fhirInstant().optional(),
    _issued: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    performer: z.lazy(getDiagnosticReport_PerformerSchema).array().optional(),
    presentedForm: z.lazy(getAttachmentSchema).array().optional(),
    resourceType: z.literal("DiagnosticReport"),
    result: z.lazy(getReferenceSchema).array().optional(),
    specimen: z.lazy(getReferenceSchema).array().optional(),
    status: z.enum([
      "amended",
      "appended",
      "cancelled",
      "corrected",
      "entered-in-error",
      "final",
      "partial",
      "preliminary",
      "registered",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
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
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
        "http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
        "http://hl7.org/fhir/StructureDefinition/ReferralRequest",
      ],
      [
        "CarePlan",
        "ImmunizationRecommendation",
        "MedicationRequest",
        "NutritionOrder",
        "ProcedureRequest",
        "ReferralRequest",
      ],
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
      record.imagingStudy,
      "imagingStudy",
      [
        "http://hl7.org/fhir/StructureDefinition/ImagingManifest",
        "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
      ],
      ["ImagingManifest", "ImagingStudy"],
      ctx,
    );
    validateReferenceTarget(
      record.result,
      "result",
      ["http://hl7.org/fhir/StructureDefinition/Observation"],
      ["Observation"],
      ctx,
    );
    validateReferenceTarget(
      record.specimen,
      "specimen",
      ["http://hl7.org/fhir/StructureDefinition/Specimen"],
      ["Specimen"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Device", "Group", "Location", "Patient"],
      ctx,
    );
  });

export const DiagnosticReportSchema =
  DiagnosticReportSchemaInternal as z.ZodType<DiagnosticReport>;
