// Profile: http://hl7.org/fhir/StructureDefinition/Media
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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

/** Base StructureDefinition for Media Resource */
export interface Media extends DomainResource {
  /** A procedure that is fulfilled in whole or in part by the creation of this media. */
  basedOn?: Array<Reference>;
  /** Indicates the site on the subject's body where the media was collected (i.e. the target site). */
  bodySite?: CodeableConcept;
  /** The actual content of the media - inline or by direct reference to the media source file. */
  content: Attachment;
  /** The encounter or episode of care that establishes the context for this media. */
  context?: Reference;
  /** The device used to collect the media. */
  device?: Reference;
  /** The duration of the recording in seconds - for audio and video. */
  duration?: number;
  /** Extensions for duration */
  _duration?: Element;
  /** The number of frames in a photo. This is used with a multi-page fax, or an imaging acquisition context that takes multiple slices in a single image, or an animated gif. If there is more than one frame, this SHALL have a value in order to alert interface software that a multi-frame capable rendering widget is required. */
  frames?: number;
  /** Extensions for frames */
  _frames?: Element;
  /** Height of the image in pixels (photo/video). */
  height?: number;
  /** Extensions for height */
  _height?: Element;
  /** Identifiers associated with the image - these may include identifiers for the image itself, identifiers for the context of its collection (e.g. series ids) and context ids such as accession numbers or other workflow identifiers. */
  identifier?: Array<Identifier>;
  /** Comments made about the media by the performer, subject or other participants. */
  note?: Array<Annotation>;
  /** The date and time(s) at which the media was collected. */
  occurrenceDateTime?: string;
  /** Extensions for occurrenceDateTime */
  _occurrenceDateTime?: Element;
  /** The date and time(s) at which the media was collected. */
  occurrencePeriod?: Period;
  /** The person who administered the collection of the image. */
  operator?: Reference;
  /** Describes why the event occurred in coded or textual form. */
  reasonCode?: Array<CodeableConcept>;
  /** This is a Media resource. */
  resourceType: "Media";
  /** Who/What this Media is a record of. */
  subject?: Reference;
  /** Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality. */
  subtype?: CodeableConcept;
  /** Whether the media is a photo (still image), an audio recording, or a video recording. */
  type: "audio" | "photo" | "video";
  /** Extensions for type */
  _type?: Element;
  /** The name of the imaging view e.g. Lateral or Antero-posterior (AP). */
  view?: CodeableConcept;
  /** Width of the image in pixels (photo/video). */
  width?: number;
  /** Extensions for width */
  _width?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
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
export const MediaSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    bodySite: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    content: z.lazy(getAttachmentSchema),
    context: z.lazy(getReferenceSchema).optional(),
    device: z.lazy(getReferenceSchema).optional(),
    duration: z.number().int().nonnegative().optional(),
    _duration: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    frames: z.number().int().positive().optional(),
    _frames: z.lazy(getElementSchema).optional(),
    height: z.number().int().positive().optional(),
    _height: z.lazy(getElementSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    occurrencePeriod: z.lazy(getPeriodSchema).optional(),
    operator: z.lazy(getReferenceSchema).optional(),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    resourceType: z.literal("Media"),
    subject: z.lazy(getReferenceSchema).optional(),
    subtype: z.lazy(getCodeableConceptSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.enum(["audio", "photo", "video"]),
    _type: z.lazy(getElementSchema).optional(),
    view: z.lazy(getCodeableConceptSchema).optional(),
    width: z.number().int().positive().optional(),
    _width: z.lazy(getElementSchema).optional(),
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
      ["http://hl7.org/fhir/StructureDefinition/ProcedureRequest"],
      ["ProcedureRequest"],
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
      record.device,
      "device",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/DeviceMetric",
      ],
      ["Device", "DeviceMetric"],
      ctx,
    );
    validateReferenceTarget(
      record.operator,
      "operator",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/Specimen",
      ],
      ["Device", "Group", "Patient", "Practitioner", "Specimen"],
      ctx,
    );
  });

export const MediaSchema = MediaSchemaInternal as z.ZodType<Media>;
