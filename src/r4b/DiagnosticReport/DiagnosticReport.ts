// Profile: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:04:03.496Z

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
import type { DiagnosticReport_Media } from "./DiagnosticReport_Media";
import { DiagnosticReport_MediaSchemaInternal } from "./DiagnosticReport_Media";

/** The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports. */
export interface DiagnosticReport extends DomainResource {
  /** Details concerning a service requested. */
  basedOn?: Array<Reference>;
  /** A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes. */
  category?: Array<CodeableConcept>;
  /** A code or name that describes this diagnostic report. */
  code: CodeableConcept;
  /** Concise and clinically contextualized summary conclusion (interpretation/impression) of the diagnostic report. */
  conclusion?: string;
  /** Extensions for conclusion */
  _conclusion?: Element;
  /** One or more codes that represent the summary conclusion (interpretation/impression) of the diagnostic report. */
  conclusionCode?: Array<CodeableConcept>;
  /** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself. */
  effectivePeriod?: Period;
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport is about. */
  encounter?: Reference;
  /** Identifiers assigned to this report by the performer or other systems. */
  identifier?: Array<Identifier>;
  /** One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images. */
  imagingStudy?: Array<Reference>;
  /** The date and time that this version of the report was made available to providers, typically after the report was reviewed and verified. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest). */
  media?: Array<DiagnosticReport_Media>;
  /** The diagnostic service that is responsible for issuing the report. */
  performer?: Array<Reference>;
  /** Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent. */
  presentedForm?: Array<Attachment>;
  /** This is a DiagnosticReport resource. */
  resourceType: "DiagnosticReport";
  /** [Observations](observation.html)  that are part of this diagnostic report. */
  result?: Array<Reference>;
  /** The practitioner or organization that is responsible for the report's conclusions and interpretations. */
  resultsInterpreter?: Array<Reference>;
  /** Details about the specimens on which this diagnostic report is based. */
  specimen?: Array<Reference>;
  /** The status of the diagnostic report. */
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
  /** The subject of the report. Usually, but not always, this is a patient. However, diagnostic services also perform analyses on specimens collected from a variety of other sources. */
  subject?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDiagnosticReport_MediaSchema = (): z.ZodType<DiagnosticReport_Media> =>
  DiagnosticReport_MediaSchemaInternal as z.ZodType<DiagnosticReport_Media>;
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
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema),
    conclusion: fhirString().optional(),
    _conclusion: z.lazy(getElementSchema).optional(),
    conclusionCode: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    imagingStudy: z.lazy(getReferenceSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    issued: fhirInstant().optional(),
    _issued: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    media: z.lazy(getDiagnosticReport_MediaSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    performer: z.lazy(getReferenceSchema).array().optional(),
    presentedForm: z.lazy(getAttachmentSchema).array().optional(),
    resourceType: z.literal("DiagnosticReport"),
    result: z.lazy(getReferenceSchema).array().optional(),
    resultsInterpreter: z.lazy(getReferenceSchema).array().optional(),
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
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
      ],
      [
        "CarePlan",
        "ImmunizationRecommendation",
        "MedicationRequest",
        "NutritionOrder",
        "ServiceRequest",
      ],
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
      record.imagingStudy,
      "imagingStudy",
      ["http://hl7.org/fhir/StructureDefinition/ImagingStudy"],
      ["ImagingStudy"],
      ctx,
    );
    validateReferenceTarget(
      record.performer,
      "performer",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["CareTeam", "Organization", "Practitioner", "PractitionerRole"],
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
      record.resultsInterpreter,
      "resultsInterpreter",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["CareTeam", "Organization", "Practitioner", "PractitionerRole"],
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
        "http://hl7.org/fhir/StructureDefinition/Medication",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
        "http://hl7.org/fhir/StructureDefinition/Substance",
      ],
      [
        "Device",
        "Group",
        "Location",
        "Medication",
        "Organization",
        "Patient",
        "Practitioner",
        "Procedure",
        "Substance",
      ],
      ctx,
    );
  });

export const DiagnosticReportSchema =
  DiagnosticReportSchemaInternal as z.ZodType<DiagnosticReport>;
