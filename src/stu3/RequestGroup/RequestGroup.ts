// Source: https://hl7.org/fhir/STU3/requestgroup.html
// Profile: http://hl7.org/fhir/StructureDefinition/RequestGroup
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
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
import type { RequestGroup_Action } from "./RequestGroup_Action";
import { RequestGroup_ActionSchemaInternal } from "./RequestGroup_Action";

/** Base StructureDefinition for RequestGroup Resource */
export interface RequestGroup extends DomainResource {
  /** The actions, if any, produced by the evaluation of the artifact. */
  action?: Array<RequestGroup_Action>;
  /** Provides a reference to the author of the request group. */
  author?: Reference;
  /** Indicates when the request group was created. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** A plan, proposal or order that is fulfilled in whole or in part by this request. */
  basedOn?: Array<Reference>;
  /** Describes the context of the request group, if any. */
  context?: Reference;
  /** A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request. */
  definition?: Array<Reference>;
  /** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form. */
  groupIdentifier?: Identifier;
  /** Allows a service to provide a unique, business identifier for the request. */
  identifier?: Array<Identifier>;
  /** Indicates the level of authority/intentionality associated with the request and where the request fits into the workflow chain. */
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
  /** Provides a mechanism to communicate additional information about the response. */
  note?: Array<Annotation>;
  /** Indicates how quickly the request should be addressed with respect to other requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response. */
  reasonCodeableConcept?: CodeableConcept;
  /** Indicates the reason the request group was created. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response. */
  reasonReference?: Reference;
  /** Completed or terminated request(s) whose function is taken by this new request. */
  replaces?: Array<Reference>;
  /** This is a RequestGroup resource. */
  resourceType: "RequestGroup";
  /** The current state of the request. For request groups, the status reflects the status of all the requests in the group. */
  status:
    | "active"
    | "cancelled"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "suspended"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The subject for which the request group was created. */
  subject?: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
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
const getRequestGroup_ActionSchema = (): z.ZodType<RequestGroup_Action> =>
  RequestGroup_ActionSchemaInternal as z.ZodType<RequestGroup_Action>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const RequestGroupSchemaInternal = z
  .object({
    action: z.lazy(getRequestGroup_ActionSchema).array().optional(),
    author: z.lazy(getReferenceSchema).optional(),
    authoredOn: fhirDateTime().optional(),
    _authoredOn: z.lazy(getElementSchema).optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    definition: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    groupIdentifier: z.lazy(getIdentifierSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
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
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
    _priority: z.lazy(getElementSchema).optional(),
    reasonCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    reasonReference: z.lazy(getReferenceSchema).optional(),
    replaces: z.lazy(getReferenceSchema).array().optional(),
    resourceType: z.literal("RequestGroup"),
    status: z.enum([
      "active",
      "cancelled",
      "completed",
      "draft",
      "entered-in-error",
      "suspended",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const reason_x_Present = [
      "reasonCodeableConcept",
      "reasonReference",
    ].filter((field) => record[field] !== undefined);
    if (reason_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of reasonCodeableConcept, reasonReference may be present for reason[x]",
        path: [reason_x_Present[0]],
      });
    }
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
      record.definition,
      "definition",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.replaces,
      "replaces",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Patient"],
      ctx,
    );
  });

export const RequestGroupSchema =
  RequestGroupSchemaInternal as z.ZodType<RequestGroup>;
