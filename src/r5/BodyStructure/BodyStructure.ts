// Profile: http://hl7.org/fhir/StructureDefinition/BodyStructure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { BodyStructure_IncludedStructure } from "./BodyStructure_IncludedStructure";
import { BodyStructure_IncludedStructureSchemaInternal } from "./BodyStructure_IncludedStructure";

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface BodyStructure extends DomainResource {
  /** Whether this body site is in active use. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** A summary, characterization or explanation of the body structure. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The anatomical location(s) or region(s) not occupied or represented by the specimen, lesion, or body structure. */
  excludedStructure?: Array<unknown>;
  /** Identifier for this instance of the anatomical structure. */
  identifier?: Array<Identifier>;
  /** Image or images used to identify a location. */
  image?: Array<Attachment>;
  /** The anatomical location(s) or region(s) of the specimen, lesion, or body structure. */
  includedStructure: Array<BodyStructure_IncludedStructure>;
  /** The kind of structure being represented by the body structure at `BodyStructure.location`.  This can define both normal and abnormal morphologies. */
  morphology?: CodeableConcept;
  /** The person to which the body site belongs. */
  patient: Reference;
  /** This is a BodyStructure resource. */
  resourceType: "BodyStructure";
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getBodyStructure_IncludedStructureSchema =
  (): z.ZodType<BodyStructure_IncludedStructure> =>
    BodyStructure_IncludedStructureSchemaInternal as z.ZodType<BodyStructure_IncludedStructure>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const BodyStructureSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    excludedStructure: z.unknown().array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    image: z.lazy(getAttachmentSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    includedStructure: z.lazy(getBodyStructure_IncludedStructureSchema).array(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    morphology: z.lazy(getCodeableConceptSchema).optional(),
    patient: z.lazy(getReferenceSchema),
    resourceType: z.literal("BodyStructure"),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const BodyStructureSchema =
  BodyStructureSchemaInternal as z.ZodType<BodyStructure>;
