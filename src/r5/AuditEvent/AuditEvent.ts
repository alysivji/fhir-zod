// Source: https://hl7.org/fhir/R5/auditevent.html
// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirInstant,
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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { AuditEvent_Agent } from "./AuditEvent_Agent";
import { AuditEvent_AgentSchemaInternal } from "./AuditEvent_Agent";
import type { AuditEvent_Entity } from "./AuditEvent_Entity";
import { AuditEvent_EntitySchemaInternal } from "./AuditEvent_Entity";
import type { AuditEvent_Outcome } from "./AuditEvent_Outcome";
import { AuditEvent_OutcomeSchemaInternal } from "./AuditEvent_Outcome";
import type { AuditEvent_Source } from "./AuditEvent_Source";
import { AuditEvent_SourceSchemaInternal } from "./AuditEvent_Source";

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEvent extends DomainResource {
  /** Indicator for type of action performed during the event that generated the audit. */
  action?: "C" | "D" | "E" | "R" | "U";
  /** Extensions for action */
  _action?: Element;
  /** An actor taking an active role in the event or activity that is logged. */
  agent: Array<AuditEvent_Agent>;
  /** The authorization (e.g., PurposeOfUse) that was used during the event being recorded. */
  authorization?: Array<CodeableConcept>;
  /** Allows tracing of authorizatino for the events and tracking whether proposals/recommendations were acted upon. */
  basedOn?: Array<Reference>;
  /** Classification of the type of event. */
  category?: Array<CodeableConcept>;
  /** Describes what happened. The most specific code for the event. */
  code: CodeableConcept;
  /** This will typically be the encounter the event occurred, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission lab tests). */
  encounter?: Reference;
  /** Specific instances of data or objects that have been accessed. */
  entity?: Array<AuditEvent_Entity>;
  /** The time or period during which the activity occurred. */
  occurredDateTime?: string;
  /** Extensions for occurredDateTime */
  _occurredDateTime?: Element;
  /** The time or period during which the activity occurred. */
  occurredPeriod?: Period;
  /** Indicates whether the event succeeded or failed. A free text descripiton can be given in outcome.text. */
  outcome?: AuditEvent_Outcome;
  /** The patient element is available to enable deterministic tracking of activities that involve the patient as the subject of the data used in an activity. */
  patient?: Reference;
  /** The time when the event was recorded. */
  recorded: string;
  /** Extensions for recorded */
  _recorded?: Element;
  /** This is a AuditEvent resource. */
  resourceType: "AuditEvent";
  /** Indicates and enables segmentation of various severity including debugging from critical. */
  severity?:
    | "alert"
    | "critical"
    | "debug"
    | "emergency"
    | "error"
    | "informational"
    | "notice"
    | "warning";
  /** Extensions for severity */
  _severity?: Element;
  /** The actor that is reporting the event. */
  source: AuditEvent_Source;
}

const getAuditEvent_AgentSchema = (): z.ZodType<AuditEvent_Agent> =>
  AuditEvent_AgentSchemaInternal as z.ZodType<AuditEvent_Agent>;
const getAuditEvent_EntitySchema = (): z.ZodType<AuditEvent_Entity> =>
  AuditEvent_EntitySchemaInternal as z.ZodType<AuditEvent_Entity>;
const getAuditEvent_OutcomeSchema = (): z.ZodType<AuditEvent_Outcome> =>
  AuditEvent_OutcomeSchemaInternal as z.ZodType<AuditEvent_Outcome>;
const getAuditEvent_SourceSchema = (): z.ZodType<AuditEvent_Source> =>
  AuditEvent_SourceSchemaInternal as z.ZodType<AuditEvent_Source>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
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
export const AuditEventSchemaInternal = z
  .object({
    action: z.enum(["C", "D", "E", "R", "U"]).optional(),
    _action: z.lazy(getElementSchema).optional(),
    agent: z.lazy(getAuditEvent_AgentSchema).array(),
    authorization: z.lazy(getCodeableConceptSchema).array().optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    entity: z.lazy(getAuditEvent_EntitySchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    occurredDateTime: fhirDateTime().optional(),
    _occurredDateTime: z.lazy(getElementSchema).optional(),
    occurredPeriod: z.lazy(getPeriodSchema).optional(),
    outcome: z.lazy(getAuditEvent_OutcomeSchema).optional(),
    patient: z.lazy(getReferenceSchema).optional(),
    recorded: fhirInstant(),
    _recorded: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("AuditEvent"),
    severity: z
      .enum([
        "alert",
        "critical",
        "debug",
        "emergency",
        "error",
        "informational",
        "notice",
        "warning",
      ])
      .optional(),
    _severity: z.lazy(getElementSchema).optional(),
    source: z.lazy(getAuditEvent_SourceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const occurred_x_Present = ["occurredDateTime", "occurredPeriod"].filter(
      (field) => record[field] !== undefined,
    );
    if (occurred_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of occurredDateTime, occurredPeriod may be present for occurred[x]",
        path: [occurred_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
        "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        "http://hl7.org/fhir/StructureDefinition/Task",
      ],
      [
        "CarePlan",
        "DeviceRequest",
        "ImmunizationRecommendation",
        "MedicationRequest",
        "NutritionOrder",
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
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const AuditEventSchema =
  AuditEventSchemaInternal as z.ZodType<AuditEvent>;
