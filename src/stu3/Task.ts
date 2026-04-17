// Profile: http://hl7.org/fhir/StructureDefinition/Task
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirDateTime, fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Task_Input } from "./Task_Input";
import { Task_InputSchemaInternal } from "./Task_Input";
import type { Task_Output } from "./Task_Output";
import { Task_OutputSchemaInternal } from "./Task_Output";
import type { Task_Requester } from "./Task_Requester";
import { Task_RequesterSchemaInternal } from "./Task_Requester";
import type { Task_Restriction } from "./Task_Restriction";
import { Task_RestrictionSchemaInternal } from "./Task_Restriction";

/** Base StructureDefinition for Task Resource */
export interface Task extends DomainResource {
  /** The date and time this task was created. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** BasedOn refers to a higher-level authorization that triggered the creation of the task.  It references a "request" resource such as a ProcedureRequest, MedicationRequest, ProcedureRequest, CarePlan, etc. which is distinct from the "request" resource the task is seeking to fulfil.  This latter resource is referenced by FocusOn.  For example, based on a ProcedureRequest (= BasedOn), a task is created to fulfil a procedureRequest ( = FocusOn ) to collect a specimen from a patient. */
  basedOn?: Array<Reference>;
  /** Contains business-specific nuances of the business state. */
  businessStatus?: CodeableConcept;
  /** A name or code (or both) briefly describing what the task involves. */
  code?: CodeableConcept;
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this task was created. */
  context?: Reference;
  /** A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc. */
  definitionReference?: Reference;
  /** A reference to a formal or informal definition of the task.  For example, a protocol, a step within a defined workflow definition, etc. */
  definitionUri?: string;
  /** Extensions for definitionUri */
  _definitionUri?: Element;
  /** A free-text description of what is to be performed. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Identifies the time action was first taken against the task (start) and/or the time final action was taken against the task prior to marking it as completed (end). */
  executionPeriod?: Period;
  /** The request being actioned or the resource being manipulated by this task. */
  focus?: Reference;
  /** The entity who benefits from the performance of the service specified in the task (e.g., the patient). */
  for?: Reference;
  /** An identifier that links together multiple tasks and other requests that were created in the same context. */
  groupIdentifier?: Identifier;
  /** The business identifier for this task. */
  identifier?: Array<Identifier>;
  /** Additional information that may be needed in the execution of the task. */
  input?: Array<Task_Input>;
  /** Indicates the "level" of actionability associated with the Task.  I.e. Is this a proposed task, a planned task, an actionable task, etc. */
  intent:
    | "filler-order"
    | "instance-order"
    | "option"
    | "order"
    | "original-order"
    | "plan"
    | "proposal"
    | "reflex-order";
  /** Extensions for intent */
  _intent?: Element;
  /** The date and time of last modification to this task. */
  lastModified?: string;
  /** Extensions for lastModified */
  _lastModified?: Element;
  /** Free-text information captured about the task as it progresses. */
  note?: Array<Annotation>;
  /** Outputs produced by the Task. */
  output?: Array<Task_Output>;
  /** Individual organization or Device currently responsible for task execution. */
  owner?: Reference;
  /** Task that this particular task is part of. */
  partOf?: Array<Reference>;
  /** The type of participant that can execute the task. */
  performerType?: Array<CodeableConcept>;
  /** Indicates how quickly the Task should be addressed with respect to other requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** A description or code indicating why this task needs to be performed. */
  reason?: CodeableConcept;
  /** Links to Provenance records for past versions of this Task that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the task. */
  relevantHistory?: Array<Reference>;
  /** The creator of the task. */
  requester?: Task_Requester;
  /** This is a Task resource. */
  resourceType: "Task";
  /** If the Task.focus is a request resource and the task is seeking fulfillment (i.e is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned. */
  restriction?: Task_Restriction;
  /** The current status of the task. */
  status:
    | "accepted"
    | "cancelled"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "failed"
    | "in-progress"
    | "on-hold"
    | "ready"
    | "received"
    | "rejected"
    | "requested";
  /** Extensions for status */
  _status?: Element;
  /** An explanation as to why this task is held, failed, was refused, etc. */
  statusReason?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getTask_InputSchema = (): z.ZodType<Task_Input> =>
  Task_InputSchemaInternal as z.ZodType<Task_Input>;
const getTask_OutputSchema = (): z.ZodType<Task_Output> =>
  Task_OutputSchemaInternal as z.ZodType<Task_Output>;
const getTask_RequesterSchema = (): z.ZodType<Task_Requester> =>
  Task_RequesterSchemaInternal as z.ZodType<Task_Requester>;
const getTask_RestrictionSchema = (): z.ZodType<Task_Restriction> =>
  Task_RestrictionSchemaInternal as z.ZodType<Task_Restriction>;

/** @internal */
export const TaskSchemaInternal = DomainResourceSchemaInternal.extend({
  authoredOn: fhirDateTime().optional(),
  _authoredOn: z.lazy(getElementSchema).optional(),
  basedOn: z.lazy(getReferenceSchema).array().optional(),
  businessStatus: z.lazy(getCodeableConceptSchema).optional(),
  code: z.lazy(getCodeableConceptSchema).optional(),
  context: z.lazy(getReferenceSchema).optional(),
  definitionReference: z.lazy(getReferenceSchema).optional(),
  definitionUri: fhirUri().optional(),
  _definitionUri: z.lazy(getElementSchema).optional(),
  description: fhirString().optional(),
  _description: z.lazy(getElementSchema).optional(),
  executionPeriod: z.lazy(getPeriodSchema).optional(),
  focus: z.lazy(getReferenceSchema).optional(),
  for: z.lazy(getReferenceSchema).optional(),
  groupIdentifier: z.lazy(getIdentifierSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  input: z.lazy(getTask_InputSchema).array().optional(),
  intent: z.enum([
    "filler-order",
    "instance-order",
    "option",
    "order",
    "original-order",
    "plan",
    "proposal",
    "reflex-order",
  ]),
  _intent: z.lazy(getElementSchema).optional(),
  lastModified: fhirDateTime().optional(),
  _lastModified: z.lazy(getElementSchema).optional(),
  note: z.lazy(getAnnotationSchema).array().optional(),
  output: z.lazy(getTask_OutputSchema).array().optional(),
  owner: z.lazy(getReferenceSchema).optional(),
  partOf: z.lazy(getReferenceSchema).array().optional(),
  performerType: z.lazy(getCodeableConceptSchema).array().optional(),
  priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
  _priority: z.lazy(getElementSchema).optional(),
  reason: z.lazy(getCodeableConceptSchema).optional(),
  relevantHistory: z.lazy(getReferenceSchema).array().optional(),
  requester: z.lazy(getTask_RequesterSchema).optional(),
  resourceType: z.literal("Task"),
  restriction: z.lazy(getTask_RestrictionSchema).optional(),
  status: z.enum([
    "accepted",
    "cancelled",
    "completed",
    "draft",
    "entered-in-error",
    "failed",
    "in-progress",
    "on-hold",
    "ready",
    "received",
    "rejected",
    "requested",
  ]),
  _status: z.lazy(getElementSchema).optional(),
  statusReason: z.lazy(getCodeableConceptSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const definition_x_Present = [
      "definitionReference",
      "definitionUri",
    ].filter((field) => record[field] !== undefined);
    if (definition_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of definitionReference, definitionUri may be present for definition[x]",
        path: [definition_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.context,
      "context",
      [
        "http://hl7.org/fhir/StructureDefinition/Encounter",
        "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
      ],
      ["Encounter", "EpisodeOfCare"],
      ctx,
    );
    validateReferenceTarget(
      record.definitionReference,
      "definitionReference",
      ["http://hl7.org/fhir/StructureDefinition/ActivityDefinition"],
      ["ActivityDefinition"],
      ctx,
    );
    validateReferenceTarget(
      record.focus,
      "focus",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.for,
      "for",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.owner,
      "owner",
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
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Task"],
      ["Task"],
      ctx,
    );
    validateReferenceTarget(
      record.relevantHistory,
      "relevantHistory",
      ["http://hl7.org/fhir/StructureDefinition/Provenance"],
      ["Provenance"],
      ctx,
    );
  });

export const TaskSchema = TaskSchemaInternal as z.ZodType<Task>;
