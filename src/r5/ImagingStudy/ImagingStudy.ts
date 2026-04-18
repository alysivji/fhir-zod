// Profile: http://hl7.org/fhir/StructureDefinition/ImagingStudy
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { ImagingStudy_Series } from "./ImagingStudy_Series";
import { ImagingStudy_SeriesSchemaInternal } from "./ImagingStudy_Series";

/** Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities. */
export interface ImagingStudy extends DomainResource {
  /** A list of the diagnostic requests that resulted in this imaging study being performed. */
  basedOn?: Array<Reference>;
  /** The Imaging Manager description of the study. Institution-generated description or classification of the Study (component) performed. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The healthcare event (e.g. a patient and healthcare provider interaction) during which this ImagingStudy is made. */
  encounter?: Reference;
  /** The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.connectionType. */
  endpoint?: Array<Reference>;
  /** Identifiers for the ImagingStudy such as DICOM Study Instance UID. */
  identifier?: Array<Identifier>;
  /** The principal physical location where the ImagingStudy was performed. */
  location?: Reference;
  /** A list of all the distinct values of series.modality. This may include both acquisition and non-acquisition modalities. */
  modality?: Array<CodeableConcept>;
  /** Per the recommended DICOM mapping, this element is derived from the Study Description attribute (0008,1030). Observations or findings about the imaging study should be recorded in another resource, e.g. Observation, and not in this element. */
  note?: Array<Annotation>;
  /** Number of SOP Instances in Study. This value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present. */
  numberOfInstances?: number;
  /** Extensions for numberOfInstances */
  _numberOfInstances?: Element;
  /** Number of Series in the Study. This value given may be larger than the number of series elements this Resource contains due to resource availability, security, or other factors. This element should be present if any series elements are present. */
  numberOfSeries?: number;
  /** Extensions for numberOfSeries */
  _numberOfSeries?: Element;
  /** A larger event of which this particular ImagingStudy is a component or step.  For example,  an ImagingStudy as part of a procedure. */
  partOf?: Array<Reference>;
  /** This field corresponds to the DICOM Procedure Code Sequence (0008,1032). This is different from the FHIR Procedure resource that may include the ImagingStudy. */
  procedure?: Array<CodeableReference>;
  /** Description of clinical condition indicating why the ImagingStudy was requested, and/or Indicates another resource whose existence justifies this Study. */
  reason?: Array<CodeableReference>;
  /** The requesting/referring physician. */
  referrer?: Reference;
  /** This is a ImagingStudy resource. */
  resourceType: "ImagingStudy";
  /** Each study has one or more series of images or other content. */
  series?: Array<ImagingStudy_Series>;
  /** Date and time the study started. */
  started?: string;
  /** Extensions for started */
  _started?: Element;
  /** The current state of the ImagingStudy resource. This is not the status of any ServiceRequest or Task resources associated with the ImagingStudy. */
  status:
    | "available"
    | "cancelled"
    | "entered-in-error"
    | "registered"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The subject, typically a patient, of the imaging study. */
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
const getImagingStudy_SeriesSchema = (): z.ZodType<ImagingStudy_Series> =>
  ImagingStudy_SeriesSchemaInternal as z.ZodType<ImagingStudy_Series>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ImagingStudySchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    endpoint: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    location: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modality: z.lazy(getCodeableConceptSchema).array().optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    numberOfInstances: z.number().int().nonnegative().optional(),
    _numberOfInstances: z.lazy(getElementSchema).optional(),
    numberOfSeries: z.number().int().nonnegative().optional(),
    _numberOfSeries: z.lazy(getElementSchema).optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    procedure: z.lazy(getCodeableReferenceSchema).array().optional(),
    reason: z.lazy(getCodeableReferenceSchema).array().optional(),
    referrer: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("ImagingStudy"),
    series: z.lazy(getImagingStudy_SeriesSchema).array().optional(),
    started: fhirDateTime().optional(),
    _started: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "available",
      "cancelled",
      "entered-in-error",
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
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/Appointment",
        "http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        "http://hl7.org/fhir/StructureDefinition/Task",
      ],
      [
        "Appointment",
        "AppointmentResponse",
        "CarePlan",
        "ServiceRequest",
        "Task",
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
      record.endpoint,
      "endpoint",
      ["http://hl7.org/fhir/StructureDefinition/Endpoint"],
      ["Endpoint"],
      ctx,
    );
    validateReferenceTarget(
      record.location,
      "location",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Procedure"],
      ["Procedure"],
      ctx,
    );
    validateReferenceTarget(
      record.referrer,
      "referrer",
      [
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Device", "Group", "Patient"],
      ctx,
    );
  });

export const ImagingStudySchema =
  ImagingStudySchemaInternal as z.ZodType<ImagingStudy>;
