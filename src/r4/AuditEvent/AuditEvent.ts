// Source: https://hl7.org/fhir/R4/auditevent.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirInstant,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
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
import type { AuditEvent_Agent } from "./AuditEvent_Agent";
import { AuditEvent_AgentSchemaInternal } from "./AuditEvent_Agent";
import type { AuditEvent_Entity } from "./AuditEvent_Entity";
import { AuditEvent_EntitySchemaInternal } from "./AuditEvent_Entity";
import type { AuditEvent_Source } from "./AuditEvent_Source";
import { AuditEvent_SourceSchemaInternal } from "./AuditEvent_Source";

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface AuditEvent extends DomainResource {
  /** Indicator for type of action performed during the event that generated the audit. */
  action?: "C" | "D" | "E" | "R" | "U";
  /** Extensions for action */
  _action?: Element;
  /** An actor taking an active role in the event or activity that is logged. */
  agent: Array<AuditEvent_Agent>;
  /** Specific instances of data or objects that have been accessed. */
  entity?: Array<AuditEvent_Entity>;
  /** Indicates whether the event succeeded or failed. */
  outcome?: "0" | "12" | "4" | "8";
  /** Extensions for outcome */
  _outcome?: Element;
  /** A free text description of the outcome of the event. */
  outcomeDesc?: string;
  /** Extensions for outcomeDesc */
  _outcomeDesc?: Element;
  /** The period during which the activity occurred. */
  period?: Period;
  /** The purposeOfUse (reason) that was used during the event being recorded. */
  purposeOfEvent?: Array<CodeableConcept>;
  /** The time when the event was recorded. */
  recorded: string;
  /** Extensions for recorded */
  _recorded?: Element;
  /** This is a AuditEvent resource. */
  resourceType: "AuditEvent";
  /** The system that is reporting the event. */
  source: AuditEvent_Source;
  /** Identifier for the category of event. */
  subtype?: Array<Coding>;
  /** Identifier for a family of the event.  For example, a menu item, program, rule, policy, function code, application name or URL. It identifies the performed function. */
  type: Coding;
}

const getAuditEvent_AgentSchema = (): z.ZodType<AuditEvent_Agent> =>
  AuditEvent_AgentSchemaInternal as z.ZodType<AuditEvent_Agent>;
const getAuditEvent_EntitySchema = (): z.ZodType<AuditEvent_Entity> =>
  AuditEvent_EntitySchemaInternal as z.ZodType<AuditEvent_Entity>;
const getAuditEvent_SourceSchema = (): z.ZodType<AuditEvent_Source> =>
  AuditEvent_SourceSchemaInternal as z.ZodType<AuditEvent_Source>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
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
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const AuditEventSchemaInternal = z
  .object({
    action: z.enum(["C", "D", "E", "R", "U"]).optional(),
    _action: z.lazy(getElementSchema).optional(),
    agent: z.lazy(getAuditEvent_AgentSchema).array(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
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
    outcome: z.enum(["0", "12", "4", "8"]).optional(),
    _outcome: z.lazy(getElementSchema).optional(),
    outcomeDesc: fhirString().optional(),
    _outcomeDesc: z.lazy(getElementSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    purposeOfEvent: z.lazy(getCodeableConceptSchema).array().optional(),
    recorded: fhirInstant(),
    _recorded: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("AuditEvent"),
    source: z.lazy(getAuditEvent_SourceSchema),
    subtype: z.lazy(getCodingSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodingSchema),
  })
  .strict();

export const AuditEventSchema =
  AuditEventSchemaInternal as z.ZodType<AuditEvent>;
