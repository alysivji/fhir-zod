// Source: https://hl7.org/fhir/R5/genomicstudy.html
// Profile: http://hl7.org/fhir/StructureDefinition/GenomicStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCanonical,
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
import type { GenomicStudy_Analysis } from "./GenomicStudy_Analysis";
import { GenomicStudy_AnalysisSchemaInternal } from "./GenomicStudy_Analysis";

/** A set of analyses performed to analyze and generate genomic data. */
export interface GenomicStudy extends DomainResource {
  /** The details about a specific analysis that was performed in this GenomicStudy. */
  analysis?: Array<GenomicStudy_Analysis>;
  /** Event resources that the genomic study is based on. */
  basedOn?: Array<Reference>;
  /** Description of the genomic study. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The healthcare event with which this genomics study is associated. */
  encounter?: Reference;
  /** Identifiers for this genomic study. */
  identifier?: Array<Identifier>;
  /** The defined protocol that describes the study. */
  instantiatesCanonical?: string;
  /** Extensions for instantiatesCanonical */
  _instantiatesCanonical?: Element;
  /** The URL pointing to an externally maintained protocol that describes the study. */
  instantiatesUri?: string;
  /** Extensions for instantiatesUri */
  _instantiatesUri?: Element;
  /** Healthcare professionals who interpreted the genomic study. */
  interpreter?: Array<Reference>;
  /** Comments related to the genomic study. */
  note?: Array<Annotation>;
  /** Why the genomic study was performed. */
  reason?: Array<CodeableReference>;
  /** Healthcare professional who requested or referred the genomic study. */
  referrer?: Reference;
  /** This is a GenomicStudy resource. */
  resourceType: "GenomicStudy";
  /** When the genomic study was started. */
  startDate?: string;
  /** Extensions for startDate */
  _startDate?: Element;
  /** The status of the genomic study. */
  status:
    | "available"
    | "cancelled"
    | "entered-in-error"
    | "registered"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The primary subject of the genomic study. */
  subject: Reference;
  /** The type of the study, e.g., Familial variant segregation, Functional variation detection, or Gene expression profiling. */
  type?: Array<CodeableConcept>;
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
const getGenomicStudy_AnalysisSchema = (): z.ZodType<GenomicStudy_Analysis> =>
  GenomicStudy_AnalysisSchemaInternal as z.ZodType<GenomicStudy_Analysis>;
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
export const GenomicStudySchemaInternal = z
  .object({
    analysis: z.lazy(getGenomicStudy_AnalysisSchema).array().optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    instantiatesCanonical: fhirCanonical().optional(),
    _instantiatesCanonical: z.lazy(getElementSchema).optional(),
    instantiatesUri: fhirUri().optional(),
    _instantiatesUri: z.lazy(getElementSchema).optional(),
    interpreter: z.lazy(getReferenceSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    reason: z.lazy(getCodeableReferenceSchema).array().optional(),
    referrer: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("GenomicStudy"),
    startDate: fhirDateTime().optional(),
    _startDate: z.lazy(getElementSchema).optional(),
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
    type: z.lazy(getCodeableConceptSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        "http://hl7.org/fhir/StructureDefinition/Task",
      ],
      ["ServiceRequest", "Task"],
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
      record.interpreter,
      "interpreter",
      [
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Practitioner", "PractitionerRole"],
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
        "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/NutritionProduct",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Substance",
      ],
      [
        "BiologicallyDerivedProduct",
        "Group",
        "NutritionProduct",
        "Patient",
        "Substance",
      ],
      ctx,
    );
  });

export const GenomicStudySchema =
  GenomicStudySchemaInternal as z.ZodType<GenomicStudy>;
