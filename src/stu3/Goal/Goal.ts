// Source: https://hl7.org/fhir/STU3/goal.html
// Profile: http://hl7.org/fhir/StructureDefinition/Goal
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
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
import type { Goal_Target } from "./Goal_Target";
import { Goal_TargetSchemaInternal } from "./Goal_Target";

/** Base StructureDefinition for Goal Resource */
export interface Goal extends DomainResource {
  /** The identified conditions and other health record elements that are intended to be addressed by the goal. */
  addresses?: Array<Reference>;
  /** Indicates a category the goal falls within. */
  category?: Array<CodeableConcept>;
  /** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding". */
  description: CodeableConcept;
  /** Indicates whose goal this is - patient goal, practitioner goal, etc. */
  expressedBy?: Reference;
  /** This records identifiers associated with this care plan that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
  identifier?: Array<Identifier>;
  /** Any comments related to the goal. */
  note?: Array<Annotation>;
  /** Identifies the change (or lack of change) at the point when the status of the goal is assessed. */
  outcomeCode?: Array<CodeableConcept>;
  /** Details of what's changed (or not changed). */
  outcomeReference?: Array<Reference>;
  /** Identifies the mutually agreed level of importance associated with reaching/sustaining the goal. */
  priority?: CodeableConcept;
  /** This is a Goal resource. */
  resourceType: "Goal";
  /** The date or event after which the goal should begin being pursued. */
  startCodeableConcept?: CodeableConcept;
  /** The date or event after which the goal should begin being pursued. */
  startDate?: string;
  /** Extensions for startDate */
  _startDate?: Element;
  /** Indicates whether the goal has been reached and is still considered relevant. */
  status:
    | "accepted"
    | "achieved"
    | "ahead-of-target"
    | "behind-target"
    | "cancelled"
    | "entered-in-error"
    | "in-progress"
    | "on-hold"
    | "on-target"
    | "planned"
    | "proposed"
    | "rejected"
    | "sustaining";
  /** Extensions for status */
  _status?: Element;
  /** Identifies when the current status.  I.e. When initially created, when achieved, when cancelled, etc. */
  statusDate?: string;
  /** Extensions for statusDate */
  _statusDate?: Element;
  /** Captures the reason for the current status. */
  statusReason?: string;
  /** Extensions for statusReason */
  _statusReason?: Element;
  /** Identifies the patient, group or organization for whom the goal is being established. */
  subject?: Reference;
  /** Indicates what should be done by when. */
  target?: Goal_Target;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getGoal_TargetSchema = (): z.ZodType<Goal_Target> =>
  Goal_TargetSchemaInternal as z.ZodType<Goal_Target>;
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
export const GoalSchemaInternal = z
  .object({
    addresses: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z.lazy(getCodeableConceptSchema),
    expressedBy: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
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
    outcomeCode: z.lazy(getCodeableConceptSchema).array().optional(),
    outcomeReference: z.lazy(getReferenceSchema).array().optional(),
    priority: z.lazy(getCodeableConceptSchema).optional(),
    resourceType: z.literal("Goal"),
    startCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    startDate: fhirDate().optional(),
    _startDate: z.lazy(getElementSchema).optional(),
    status: z.enum([
      "accepted",
      "achieved",
      "ahead-of-target",
      "behind-target",
      "cancelled",
      "entered-in-error",
      "in-progress",
      "on-hold",
      "on-target",
      "planned",
      "proposed",
      "rejected",
      "sustaining",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusDate: fhirDate().optional(),
    _statusDate: z.lazy(getElementSchema).optional(),
    statusReason: fhirString().optional(),
    _statusReason: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    target: z.lazy(getGoal_TargetSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const start_x_Present = ["startCodeableConcept", "startDate"].filter(
      (field) => record[field] !== undefined,
    );
    if (start_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of startCodeableConcept, startDate may be present for start[x]",
        path: [start_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.addresses,
      "addresses",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
        "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
        "http://hl7.org/fhir/StructureDefinition/Observation",
        "http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
        "http://hl7.org/fhir/StructureDefinition/RiskAssessment",
      ],
      [
        "Condition",
        "MedicationStatement",
        "NutritionOrder",
        "Observation",
        "ProcedureRequest",
        "RiskAssessment",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.expressedBy,
      "expressedBy",
      [
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
    validateReferenceTarget(
      record.outcomeReference,
      "outcomeReference",
      ["http://hl7.org/fhir/StructureDefinition/Observation"],
      ["Observation"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Organization", "Patient"],
      ctx,
    );
  });

export const GoalSchema = GoalSchemaInternal as z.ZodType<Goal>;
