// Profile: http://hl7.org/fhir/StructureDefinition/Subscription
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:04:03.496Z

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
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Subscription_Channel } from "./Subscription_Channel";
import { Subscription_ChannelSchemaInternal } from "./Subscription_Channel";

/** The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action. */
export interface Subscription extends DomainResource {
  /** Details where to send notifications when resources are received that meet the criteria. */
  channel: Subscription_Channel;
  /** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting. */
  contact?: Array<ContactPoint>;
  /** The rules that the server should use to determine when to generate notifications for this subscription. */
  criteria: string;
  /** Extensions for criteria */
  _criteria?: Element;
  /** The time for the server to turn the subscription off. */
  end?: string;
  /** Extensions for end */
  _end?: Element;
  /** A record of the last error that occurred when the server processed a notification. */
  error?: string;
  /** Extensions for error */
  _error?: Element;
  /** A description of why this subscription is defined. */
  reason: string;
  /** Extensions for reason */
  _reason?: Element;
  /** This is a Subscription resource. */
  resourceType: "Subscription";
  /** The status of the subscription, which marks the server state for managing the subscription. */
  status: "active" | "error" | "off" | "requested";
  /** Extensions for status */
  _status?: Element;
}

const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getSubscription_ChannelSchema = (): z.ZodType<Subscription_Channel> =>
  Subscription_ChannelSchemaInternal as z.ZodType<Subscription_Channel>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubscriptionSchemaInternal = z
  .object({
    channel: z.lazy(getSubscription_ChannelSchema),
    contact: z.lazy(getContactPointSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    criteria: fhirString(),
    _criteria: z.lazy(getElementSchema).optional(),
    end: fhirInstant().optional(),
    _end: z.lazy(getElementSchema).optional(),
    error: fhirString().optional(),
    _error: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    reason: fhirString(),
    _reason: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("Subscription"),
    status: z.enum(["active", "error", "off", "requested"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict();

export const SubscriptionSchema =
  SubscriptionSchemaInternal as z.ZodType<Subscription>;
