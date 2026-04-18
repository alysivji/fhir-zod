// Source: https://hl7.org/fhir/R4B/subscriptionstatus-definitions.html#SubscriptionStatus.notificationEvent
// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionStatus
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirInstant, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Detailed information about events relevant to this subscription notification. */
export interface SubscriptionStatus_NotificationEvent extends BackboneElement {
  /** Additional context information for this event. Generally, this will contain references to additional resources included with the event (e.g., the Patient relevant to an Encounter), however it MAY refer to non-FHIR objects. */
  additionalContext?: Array<Reference>;
  /** The sequential number of this event in this subscription context. Note that this value is a 64-bit integer value, encoded as a string. */
  eventNumber: string;
  /** Extensions for eventNumber */
  _eventNumber?: Element;
  /** The focus of this event. While this will usually be a reference to the focus resource of the event, it MAY contain a reference to a non-FHIR object. */
  focus?: Reference;
  /** The actual time this event occured on the server. */
  timestamp?: string;
  /** Extensions for timestamp */
  _timestamp?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubscriptionStatus_NotificationEventSchemaInternal =
  BackboneElementSchemaInternal.extend({
    additionalContext: z.lazy(getReferenceSchema).array().optional(),
    eventNumber: fhirString(),
    _eventNumber: z.lazy(getElementSchema).optional(),
    focus: z.lazy(getReferenceSchema).optional(),
    timestamp: fhirInstant().optional(),
    _timestamp: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.additionalContext,
        "additionalContext",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.focus,
        "focus",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const SubscriptionStatus_NotificationEventSchema =
  SubscriptionStatus_NotificationEventSchemaInternal as z.ZodType<SubscriptionStatus_NotificationEvent>;
