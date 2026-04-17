// Profile: http://hl7.org/fhir/StructureDefinition/Subscription
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirInstant, fhirString } from "../shared/fhir-primitives";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Subscription_Channel } from "./Subscription_Channel";
import { Subscription_ChannelSchemaInternal } from "./Subscription_Channel";

/** Base StructureDefinition for Subscription Resource */
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
  /** A tag to add to any resource that matches the criteria, after the subscription is processed. */
  tag?: Array<Coding>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getSubscription_ChannelSchema = (): z.ZodType<Subscription_Channel> =>
  Subscription_ChannelSchemaInternal as z.ZodType<Subscription_Channel>;

/** @internal */
export const SubscriptionSchemaInternal = DomainResourceSchemaInternal.extend({
  channel: z.lazy(getSubscription_ChannelSchema),
  contact: z.lazy(getContactPointSchema).array().optional(),
  criteria: fhirString(),
  _criteria: z.lazy(getElementSchema).optional(),
  end: fhirInstant().optional(),
  _end: z.lazy(getElementSchema).optional(),
  error: fhirString().optional(),
  _error: z.lazy(getElementSchema).optional(),
  reason: fhirString(),
  _reason: z.lazy(getElementSchema).optional(),
  resourceType: z.literal("Subscription"),
  status: z.enum(["active", "error", "off", "requested"]),
  _status: z.lazy(getElementSchema).optional(),
  tag: z.lazy(getCodingSchema).array().optional(),
}).strict();

export const SubscriptionSchema =
  SubscriptionSchemaInternal as z.ZodType<Subscription>;
