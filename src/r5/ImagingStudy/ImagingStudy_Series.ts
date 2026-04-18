// Source: https://hl7.org/fhir/R5/imagingstudy-definitions.html#ImagingStudy.series
// Profile: http://hl7.org/fhir/StructureDefinition/ImagingStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirDateTime, fhirId, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { ImagingStudy_Series_Instance } from "./ImagingStudy_Series_Instance";
import { ImagingStudy_Series_InstanceSchemaInternal } from "./ImagingStudy_Series_Instance";
import type { ImagingStudy_Series_Performer } from "./ImagingStudy_Series_Performer";
import { ImagingStudy_Series_PerformerSchemaInternal } from "./ImagingStudy_Series_Performer";

/** Each study has one or more series of images or other content. */
export interface ImagingStudy_Series extends BackboneElement {
  /** The anatomic structures examined. See DICOM Part 16 Annex L (http://dicom.nema.org/medical/dicom/current/output/chtml/part16/chapter_L.html) for DICOM to SNOMED-CT mappings. The bodySite may indicate the laterality of body part imaged; if so, it shall be consistent with any content of ImagingStudy.series.laterality. */
  bodySite?: CodeableReference;
  /** A description of the series. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.connectionType. */
  endpoint?: Array<Reference>;
  /** A single SOP instance within the series, e.g. an image, or presentation state. */
  instance?: Array<ImagingStudy_Series_Instance>;
  /** The laterality of the (possibly paired) anatomic structures examined. E.g., the left knee, both lungs, or unpaired abdomen. If present, shall be consistent with any laterality information indicated in ImagingStudy.series.bodySite. */
  laterality?: CodeableConcept;
  /** The distinct modality for this series. This may include both acquisition and non-acquisition modalities. */
  modality: CodeableConcept;
  /** The numeric identifier of this series in the study. */
  number?: number;
  /** Extensions for number */
  _number?: Element;
  /** Number of SOP Instances in the Study. The value given may be larger than the number of instance elements this resource contains due to resource availability, security, or other factors. This element should be present if any instance elements are present. */
  numberOfInstances?: number;
  /** Extensions for numberOfInstances */
  _numberOfInstances?: Element;
  /** Indicates who or what performed the series and how they were involved. */
  performer?: Array<ImagingStudy_Series_Performer>;
  /** The specimen imaged, e.g., for whole slide imaging of a biopsy. */
  specimen?: Array<Reference>;
  /** The date and time the series was started. */
  started?: string;
  /** Extensions for started */
  _started?: Element;
  /** The DICOM Series Instance UID for the series. */
  uid: string;
  /** Extensions for uid */
  _uid?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getImagingStudy_Series_InstanceSchema =
  (): z.ZodType<ImagingStudy_Series_Instance> =>
    ImagingStudy_Series_InstanceSchemaInternal as z.ZodType<ImagingStudy_Series_Instance>;
const getImagingStudy_Series_PerformerSchema =
  (): z.ZodType<ImagingStudy_Series_Performer> =>
    ImagingStudy_Series_PerformerSchemaInternal as z.ZodType<ImagingStudy_Series_Performer>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImagingStudy_SeriesSchemaInternal =
  BackboneElementSchemaInternal.extend({
    bodySite: z.lazy(getCodeableReferenceSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    endpoint: z.lazy(getReferenceSchema).array().optional(),
    instance: z.lazy(getImagingStudy_Series_InstanceSchema).array().optional(),
    laterality: z.lazy(getCodeableConceptSchema).optional(),
    modality: z.lazy(getCodeableConceptSchema),
    number: z.number().int().nonnegative().optional(),
    _number: z.lazy(getElementSchema).optional(),
    numberOfInstances: z.number().int().nonnegative().optional(),
    _numberOfInstances: z.lazy(getElementSchema).optional(),
    performer: z
      .lazy(getImagingStudy_Series_PerformerSchema)
      .array()
      .optional(),
    specimen: z.lazy(getReferenceSchema).array().optional(),
    started: fhirDateTime().optional(),
    _started: z.lazy(getElementSchema).optional(),
    uid: fhirId(),
    _uid: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.endpoint,
        "endpoint",
        ["http://hl7.org/fhir/StructureDefinition/Endpoint"],
        ["Endpoint"],
        ctx,
      );
      validateReferenceTarget(
        record.specimen,
        "specimen",
        ["http://hl7.org/fhir/StructureDefinition/Specimen"],
        ["Specimen"],
        ctx,
      );
    });

export const ImagingStudy_SeriesSchema =
  ImagingStudy_SeriesSchemaInternal as z.ZodType<ImagingStudy_Series>;
