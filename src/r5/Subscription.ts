// Profile: http://hl7.org/fhir/StructureDefinition/Subscription
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import {
  fhirCanonical,
  fhirCode,
  fhirInstant,
  fhirString,
  fhirUrl,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Subscription_FilterBy } from "./Subscription_FilterBy";
import { Subscription_FilterBySchemaInternal } from "./Subscription_FilterBy";
import type { Subscription_Parameter } from "./Subscription_Parameter";
import { Subscription_ParameterSchemaInternal } from "./Subscription_Parameter";

/** The subscription resource describes a particular client's request to be notified about a SubscriptionTopic. */
export interface Subscription extends DomainResource {
  /** The type of channel to send notifications on. */
  channelType: Coding;
  /** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting. */
  contact?: Array<ContactPoint>;
  /** How much of the resource content to deliver in the notification payload. The choices are an empty payload, only the resource id, or the full resource content. */
  content?: "empty" | "full-resource" | "id-only";
  /** Extensions for content */
  _content?: Element;
  /**
   * The MIME type to send the payload in - e.g., `application/fhir+xml` or `application/fhir+json`. Note that:
   *
   * * clients may request notifications in a specific FHIR version by using the [FHIR Version Parameter](http.html#version-parameter) - e.g., `application/fhir+json; fhirVersion=4.0`.
   *
   * * additional MIME types can be allowed by channels - e.g., `text/plain` and `text/html` are defined by the Email channel.
   */
  contentType?: string;
  /** Extensions for contentType */
  _contentType?: Element;
  /** The time for the server to turn the subscription off. */
  end?: string;
  /** Extensions for end */
  _end?: Element;
  /** The url that describes the actual end-point to send notifications to. */
  endpoint?: string;
  /** Extensions for endpoint */
  _endpoint?: Element;
  /** The filter properties to be applied to narrow the subscription topic stream.  When multiple filters are applied, evaluates to true if all the conditions applicable to that resource are met; otherwise it returns false (i.e., logical AND). */
  filterBy?: Array<Subscription_FilterBy>;
  /** If present, a 'heartbeat' notification (keep-alive) is sent via this channel with an interval period equal to this elements integer value in seconds.  If not present, a heartbeat notification is not sent. */
  heartbeatPeriod?: number;
  /** Extensions for heartbeatPeriod */
  _heartbeatPeriod?: Element;
  /** A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** Entity with authorization to make subsequent revisions to the Subscription and also determines what data the subscription is authorized to disclose. */
  managingEntity?: Reference;
  /** If present, the maximum number of events that will be included in a notification bundle. Note that this is not a strict limit on the number of entries in a bundle, as dependent resources can be included. */
  maxCount?: number;
  /** Extensions for maxCount */
  _maxCount?: Element;
  /** A natural language name identifying the subscription. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Channel-dependent information to send as part of the notification (e.g., HTTP Headers). */
  parameter?: Array<Subscription_Parameter>;
  /** A description of why this subscription is defined. */
  reason?: string;
  /** Extensions for reason */
  _reason?: Element;
  /** This is a Subscription resource. */
  resourceType: "Subscription";
  /** The status of the subscription, which marks the server state for managing the subscription. */
  status: "active" | "entered-in-error" | "error" | "off" | "requested";
  /** Extensions for status */
  _status?: Element;
  /** If present, the maximum amount of time a server will allow before failing a notification attempt. */
  timeout?: number;
  /** Extensions for timeout */
  _timeout?: Element;
  /** The reference to the subscription topic to be notified about. */
  topic: string;
  /** Extensions for topic */
  _topic?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSubscription_FilterBySchema = (): z.ZodType<Subscription_FilterBy> =>
  Subscription_FilterBySchemaInternal as z.ZodType<Subscription_FilterBy>;
const getSubscription_ParameterSchema = (): z.ZodType<Subscription_Parameter> =>
  Subscription_ParameterSchemaInternal as z.ZodType<Subscription_Parameter>;

/** @internal */
export const SubscriptionSchemaInternal = DomainResourceSchemaInternal.extend({
  channelType: z.lazy(getCodingSchema),
  contact: z.lazy(getContactPointSchema).array().optional(),
  content: z.enum(["empty", "full-resource", "id-only"]).optional(),
  _content: z.lazy(getElementSchema).optional(),
  contentType: fhirCode().optional(),
  _contentType: z.lazy(getElementSchema).optional(),
  end: fhirInstant().optional(),
  _end: z.lazy(getElementSchema).optional(),
  endpoint: fhirUrl().optional(),
  _endpoint: z.lazy(getElementSchema).optional(),
  filterBy: z.lazy(getSubscription_FilterBySchema).array().optional(),
  heartbeatPeriod: z.number().int().nonnegative().optional(),
  _heartbeatPeriod: z.lazy(getElementSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  managingEntity: z.lazy(getReferenceSchema).optional(),
  maxCount: z.number().int().positive().optional(),
  _maxCount: z.lazy(getElementSchema).optional(),
  name: fhirString().optional(),
  _name: z.lazy(getElementSchema).optional(),
  parameter: z.lazy(getSubscription_ParameterSchema).array().optional(),
  reason: fhirString().optional(),
  _reason: z.lazy(getElementSchema).optional(),
  resourceType: z.literal("Subscription"),
  status: z.enum(["active", "entered-in-error", "error", "off", "requested"]),
  _status: z.lazy(getElementSchema).optional(),
  timeout: z.number().int().nonnegative().optional(),
  _timeout: z.lazy(getElementSchema).optional(),
  topic: fhirCanonical(),
  _topic: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.managingEntity,
      "managingEntity",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "HealthcareService",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
  });

export const SubscriptionSchema =
  SubscriptionSchemaInternal as z.ZodType<Subscription>;
