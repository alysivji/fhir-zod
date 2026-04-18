// Source: https://hl7.org/fhir/R4B/subscriptionstatus.html
// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionStatus
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { SubscriptionStatus_NotificationEvent } from "./SubscriptionStatus_NotificationEvent";
import { SubscriptionStatus_NotificationEventSchemaInternal } from "./SubscriptionStatus_NotificationEvent";

/** The SubscriptionStatus resource describes the state of a Subscription during notifications. */
export interface SubscriptionStatus extends DomainResource {
  /** A record of errors that occurred when the server processed a notification. */
  error?: Array<CodeableConcept>;
  /** The total number of actual events which have been generated since the Subscription was created (inclusive of this notification) - regardless of how many have been successfully communicated.  This number is NOT incremented for handshake and heartbeat notifications. */
  eventsSinceSubscriptionStart?: string;
  /** Extensions for eventsSinceSubscriptionStart */
  _eventsSinceSubscriptionStart?: Element;
  /** Detailed information about events relevant to this subscription notification. */
  notificationEvent?: Array<SubscriptionStatus_NotificationEvent>;
  /** This is a SubscriptionStatus resource. */
  resourceType: "SubscriptionStatus";
  /** The status of the subscription, which marks the server state for managing the subscription. */
  status?: "active" | "error" | "off" | "requested";
  /** Extensions for status */
  _status?: Element;
  /** The reference to the Subscription which generated this notification. */
  subscription: Reference;
  /** The reference to the SubscriptionTopic for the Subscription which generated this notification. */
  topic?: string;
  /** Extensions for topic */
  _topic?: Element;
  /** The type of event being conveyed with this notificaiton. */
  type:
    | "event-notification"
    | "handshake"
    | "heartbeat"
    | "query-event"
    | "query-status";
  /** Extensions for type */
  _type?: Element;
}

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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubscriptionStatus_NotificationEventSchema =
  (): z.ZodType<SubscriptionStatus_NotificationEvent> =>
    SubscriptionStatus_NotificationEventSchemaInternal as z.ZodType<SubscriptionStatus_NotificationEvent>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubscriptionStatusSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    error: z.lazy(getCodeableConceptSchema).array().optional(),
    eventsSinceSubscriptionStart: fhirString().optional(),
    _eventsSinceSubscriptionStart: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    notificationEvent: z
      .lazy(getSubscriptionStatus_NotificationEventSchema)
      .array()
      .optional(),
    resourceType: z.literal("SubscriptionStatus"),
    status: z.enum(["active", "error", "off", "requested"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
    subscription: z.lazy(getReferenceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
    topic: fhirCanonical().optional(),
    _topic: z.lazy(getElementSchema).optional(),
    type: z.enum([
      "event-notification",
      "handshake",
      "heartbeat",
      "query-event",
      "query-status",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.subscription,
      "subscription",
      ["http://hl7.org/fhir/StructureDefinition/Subscription"],
      ["Subscription"],
      ctx,
    );
  });

export const SubscriptionStatusSchema =
  SubscriptionStatusSchemaInternal as z.ZodType<SubscriptionStatus>;
