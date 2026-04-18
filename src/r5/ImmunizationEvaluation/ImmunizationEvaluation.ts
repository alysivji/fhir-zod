// Source: https://hl7.org/fhir/R5/immunizationevaluation.html
// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation
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

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface ImmunizationEvaluation extends DomainResource {
  /** Indicates the authority who published the protocol (e.g. ACIP). */
  authority?: Reference;
  /** The date the evaluation of the vaccine administration event was performed. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Additional information about the evaluation. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Nominal position in a series as determined by the outcome of the evaluation process. */
  doseNumber?: string;
  /** Extensions for doseNumber */
  _doseNumber?: Element;
  /** Indicates if the dose is valid or not valid with respect to the published recommendations. */
  doseStatus: CodeableConcept;
  /** Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations. */
  doseStatusReason?: Array<CodeableConcept>;
  /** A unique identifier assigned to this immunization evaluation record. */
  identifier?: Array<Identifier>;
  /** The vaccine administration event being evaluated. */
  immunizationEvent: Reference;
  /** The individual for whom the evaluation is being done. */
  patient: Reference;
  /** This is a ImmunizationEvaluation resource. */
  resourceType: "ImmunizationEvaluation";
  /** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
  series?: string;
  /** Extensions for series */
  _series?: Element;
  /** The recommended number of doses to achieve immunity as determined by the outcome of the evaluation process. */
  seriesDoses?: string;
  /** Extensions for seriesDoses */
  _seriesDoses?: Element;
  /** Indicates the current status of the evaluation of the vaccination administration event. */
  status:
    | "completed"
    | "entered-in-error"
    | "in-progress"
    | "not-done"
    | "on-hold"
    | "stopped"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The vaccine preventable disease the dose is being evaluated against. */
  targetDisease: CodeableConcept;
}

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
export const ImmunizationEvaluationSchemaInternal = z
  .object({
    authority: z.lazy(getReferenceSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    doseNumber: fhirString().optional(),
    _doseNumber: z.lazy(getElementSchema).optional(),
    doseStatus: z.lazy(getCodeableConceptSchema),
    doseStatusReason: z.lazy(getCodeableConceptSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    immunizationEvent: z.lazy(getReferenceSchema),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    patient: z.lazy(getReferenceSchema),
    resourceType: z.literal("ImmunizationEvaluation"),
    series: fhirString().optional(),
    _series: z.lazy(getElementSchema).optional(),
    seriesDoses: fhirString().optional(),
    _seriesDoses: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "completed",
      "entered-in-error",
      "in-progress",
      "not-done",
      "on-hold",
      "stopped",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    targetDisease: z.lazy(getCodeableConceptSchema),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.authority,
      "authority",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.immunizationEvent,
      "immunizationEvent",
      ["http://hl7.org/fhir/StructureDefinition/Immunization"],
      ["Immunization"],
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

export const ImmunizationEvaluationSchema =
  ImmunizationEvaluationSchemaInternal as z.ZodType<ImmunizationEvaluation>;
