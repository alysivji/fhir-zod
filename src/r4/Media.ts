// Profile: http://hl7.org/fhir/StructureDefinition/Media
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import {
  fhirDateTime,
  fhirInstant,
  fhirString,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
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

/** A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference. */
export interface Media extends DomainResource {
  /** A procedure that is fulfilled in whole or in part by the creation of this media. */
  basedOn?: Array<Reference>;
  /** Indicates the site on the subject's body where the observation was made (i.e. the target site). */
  bodySite?: CodeableConcept;
  /** The actual content of the media - inline or by direct reference to the media source file. */
  content: Attachment;
  /** The date and time(s) at which the media was collected. */
  createdDateTime?: string;
  /** Extensions for createdDateTime */
  _createdDateTime?: Element;
  /** The date and time(s) at which the media was collected. */
  createdPeriod?: Period;
  /** The device used to collect the media. */
  device?: Reference;
  /** The name of the device / manufacturer of the device  that was used to make the recording. */
  deviceName?: string;
  /** Extensions for deviceName */
  _deviceName?: Element;
  /** The duration of the recording in seconds - for audio and video. */
  duration?: number;
  /** Extensions for duration */
  _duration?: Element;
  /** The encounter that establishes the context for this media. */
  encounter?: Reference;
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
  /** The date and time this version of the media was made available to providers, typically after having been reviewed. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** Details of the type of the media - usually, how it was acquired (what type of device). If images sourced from a DICOM system, are wrapped in a Media resource, then this is the modality. */
  modality?: CodeableConcept;
  /** Comments made about the media by the performer, subject or other participants. */
  note?: Array<Annotation>;
  /** The person who administered the collection of the image. */
  operator?: Reference;
  /** A larger event of which this particular event is a component or step. */
  partOf?: Array<Reference>;
  /** Describes why the event occurred in coded or textual form. */
  reasonCode?: Array<CodeableConcept>;
  /** This is a Media resource. */
  resourceType: "Media";
  /** The current state of the {{title}}. */
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
  /** Who/What this Media is a record of. */
  subject?: Reference;
  /** A code that classifies whether the media is an image, video or audio recording or some other media category. */
  type?: CodeableConcept;
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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MediaSchemaInternal = DomainResourceSchemaInternal.extend({
  basedOn: z.lazy(getReferenceSchema).array().optional(),
  bodySite: z.lazy(getCodeableConceptSchema).optional(),
  content: z.lazy(getAttachmentSchema),
  createdDateTime: fhirDateTime().optional(),
  _createdDateTime: z.lazy(getElementSchema).optional(),
  createdPeriod: z.lazy(getPeriodSchema).optional(),
  device: z.lazy(getReferenceSchema).optional(),
  deviceName: fhirString().optional(),
  _deviceName: z.lazy(getElementSchema).optional(),
  duration: z.number().optional(),
  _duration: z.lazy(getElementSchema).optional(),
  encounter: z.lazy(getReferenceSchema).optional(),
  frames: z.number().int().positive().optional(),
  _frames: z.lazy(getElementSchema).optional(),
  height: z.number().int().positive().optional(),
  _height: z.lazy(getElementSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  issued: fhirInstant().optional(),
  _issued: z.lazy(getElementSchema).optional(),
  modality: z.lazy(getCodeableConceptSchema).optional(),
  note: z.lazy(getAnnotationSchema).array().optional(),
  operator: z.lazy(getReferenceSchema).optional(),
  partOf: z.lazy(getReferenceSchema).array().optional(),
  reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
  resourceType: z.literal("Media"),
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
  subject: z.lazy(getReferenceSchema).optional(),
  type: z.lazy(getCodeableConceptSchema).optional(),
  view: z.lazy(getCodeableConceptSchema).optional(),
  width: z.number().int().positive().optional(),
  _width: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const created_x_Present = ["createdDateTime", "createdPeriod"].filter(
      (field) => record[field] !== undefined,
    );
    if (created_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of createdDateTime, createdPeriod may be present for created[x]",
        path: [created_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
      ],
      ["CarePlan", "ServiceRequest"],
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
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.operator,
      "operator",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "Device",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
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
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/Specimen",
      ],
      [
        "Device",
        "Group",
        "Location",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "Specimen",
      ],
      ctx,
    );
  });

export const MediaSchema = MediaSchemaInternal as z.ZodType<Media>;
