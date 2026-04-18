// Profile: http://hl7.org/fhir/StructureDefinition/DetectedIssue
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
import type { DetectedIssue_Mitigation } from "./DetectedIssue_Mitigation";
import { DetectedIssue_MitigationSchemaInternal } from "./DetectedIssue_Mitigation";

/** Base StructureDefinition for DetectedIssue Resource */
export interface DetectedIssue extends DomainResource {
  /** Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review. */
  author?: Reference;
  /** Identifies the general type of issue identified. */
  category?: CodeableConcept;
  /** The date or date-time when the detected issue was initially identified. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A textual explanation of the detected issue. */
  detail?: string;
  /** Extensions for detail */
  _detail?: Element;
  /** Business identifier associated with the detected issue record. */
  identifier?: Identifier;
  /** Indicates the resource representing the current activity or proposed activity that is potentially problematic. */
  implicated?: Array<Reference>;
  /** Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action. */
  mitigation?: Array<DetectedIssue_Mitigation>;
  /** Indicates the patient whose record the detected issue is associated with. */
  patient?: Reference;
  /** The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified. */
  reference?: string;
  /** Extensions for reference */
  _reference?: Element;
  /** This is a DetectedIssue resource. */
  resourceType: "DetectedIssue";
  /** Indicates the degree of importance associated with the identified issue based on the potential impact on the patient. */
  severity?: "high" | "low" | "moderate";
  /** Extensions for severity */
  _severity?: Element;
  /** Indicates the status of the detected issue. */
  status:
    | "amended"
    | "cancelled"
    | "corrected"
    | "entered-in-error"
    | "final"
    | "preliminary"
    | "registered"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDetectedIssue_MitigationSchema =
  (): z.ZodType<DetectedIssue_Mitigation> =>
    DetectedIssue_MitigationSchemaInternal as z.ZodType<DetectedIssue_Mitigation>;
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
export const DetectedIssueSchemaInternal = z
  .object({
    author: z.lazy(getReferenceSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    detail: fhirString().optional(),
    _detail: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicated: z.lazy(getReferenceSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    mitigation: z.lazy(getDetectedIssue_MitigationSchema).array().optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    patient: z.lazy(getReferenceSchema).optional(),
    reference: fhirUri().optional(),
    _reference: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("DetectedIssue"),
    severity: z.enum(["high", "low", "moderate"]).optional(),
    _severity: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "amended",
      "cancelled",
      "corrected",
      "entered-in-error",
      "final",
      "preliminary",
      "registered",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
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
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Device", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.implicated,
      "implicated",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
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

export const DetectedIssueSchema =
  DetectedIssueSchemaInternal as z.ZodType<DetectedIssue>;
