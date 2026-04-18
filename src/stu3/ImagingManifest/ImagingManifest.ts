// Profile: http://hl7.org/fhir/StructureDefinition/ImagingManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

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
import type { ImagingManifest_Study } from "./ImagingManifest_Study";
import { ImagingManifest_StudySchemaInternal } from "./ImagingManifest_Study";

/** Base StructureDefinition for ImagingManifest Resource */
export interface ImagingManifest extends DomainResource {
  /** Author of ImagingManifest. It can be a human author or a device which made the decision of the SOP instances selected. For example, a radiologist selected a set of imaging SOP instances to attach in a diagnostic report, and a CAD application may author a selection to describe SOP instances it used to generate a detection conclusion. */
  author?: Reference;
  /** Date and time when the selection of the referenced instances were made. It is (typically) different from the creation date of the selection resource, and from dates associated with the referenced instances (e.g. capture time of the referenced image). */
  authoringTime?: string;
  /** Extensions for authoringTime */
  _authoringTime?: Element;
  /**
   * Free text narrative description of the ImagingManifest.
   * The value may be derived from the DICOM Standard Part 16, CID-7010 descriptions (e.g. Best in Set, Complete Study Content). Note that those values cover the wide range of uses of the DICOM Key Object Selection object, several of which are not supported by ImagingManifest. Specifically, there is no expected behavior associated with descriptions that suggest referenced images be removed or not used.
   */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Unique identifier of the DICOM Key Object Selection (KOS) that this resource represents. */
  identifier?: Identifier;
  /** A patient resource reference which is the patient subject of all DICOM SOP Instances in this ImagingManifest. */
  patient: Reference;
  /** This is a ImagingManifest resource. */
  resourceType: "ImagingManifest";
  /** Study identity and locating information of the DICOM SOP instances in the selection. */
  study: Array<ImagingManifest_Study>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImagingManifest_StudySchema = (): z.ZodType<ImagingManifest_Study> =>
  ImagingManifest_StudySchemaInternal as z.ZodType<ImagingManifest_Study>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ImagingManifestSchemaInternal = z
  .object({
    author: z.lazy(getReferenceSchema).optional(),
    authoringTime: fhirDateTime().optional(),
    _authoringTime: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    patient: z.lazy(getReferenceSchema),
    resourceType: z.literal("ImagingManifest"),
    study: z.lazy(getImagingManifest_StudySchema).array(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.author,
      "author",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Device", "Organization", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const ImagingManifestSchema =
  ImagingManifestSchemaInternal as z.ZodType<ImagingManifest>;
