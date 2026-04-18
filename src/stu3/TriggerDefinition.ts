// Source: https://hl7.org/fhir/STU3/datatypes.html#TriggerDefinition
// Profile: http://hl7.org/fhir/StructureDefinition/TriggerDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirDate, fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { DataRequirement } from "./DataRequirement";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Base StructureDefinition for TriggerDefinition Type */
export interface TriggerDefinition extends Element {
  /** The triggering data of the event (if this is a data trigger). */
  eventData?: DataRequirement;
  /** The name of the event (if this is a named-event trigger). */
  eventName?: string;
  /** Extensions for eventName */
  _eventName?: Element;
  /** The timing of the event (if this is a period trigger). */
  eventTimingDate?: string;
  /** Extensions for eventTimingDate */
  _eventTimingDate?: Element;
  /** The timing of the event (if this is a period trigger). */
  eventTimingDateTime?: string;
  /** Extensions for eventTimingDateTime */
  _eventTimingDateTime?: Element;
  /** The timing of the event (if this is a period trigger). */
  eventTimingReference?: Reference;
  /** The timing of the event (if this is a period trigger). */
  eventTimingTiming?: Timing;
  /** The type of triggering event. */
  type:
    | "data-access-ended"
    | "data-accessed"
    | "data-added"
    | "data-modified"
    | "data-removed"
    | "named-event"
    | "periodic";
  /** Extensions for type */
  _type?: Element;
}

const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
  DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const TriggerDefinitionSchemaInternal = ElementSchemaInternal.extend({
  eventData: z.lazy(getDataRequirementSchema).optional(),
  eventName: fhirString().optional(),
  _eventName: z.lazy(getElementSchema).optional(),
  eventTimingDate: fhirDate().optional(),
  _eventTimingDate: z.lazy(getElementSchema).optional(),
  eventTimingDateTime: fhirDateTime().optional(),
  _eventTimingDateTime: z.lazy(getElementSchema).optional(),
  eventTimingReference: z.lazy(getReferenceSchema).optional(),
  eventTimingTiming: z.lazy(getTimingSchema).optional(),
  type: z.enum([
    "data-access-ended",
    "data-accessed",
    "data-added",
    "data-modified",
    "data-removed",
    "named-event",
    "periodic",
  ]),
  _type: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const eventTiming_x_Present = [
      "eventTimingDate",
      "eventTimingDateTime",
      "eventTimingReference",
      "eventTimingTiming",
    ].filter((field) => record[field] !== undefined);
    if (eventTiming_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of eventTimingDate, eventTimingDateTime, eventTimingReference, eventTimingTiming may be present for eventTiming[x]",
        path: [eventTiming_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.eventTimingReference,
      "eventTimingReference",
      ["http://hl7.org/fhir/StructureDefinition/Schedule"],
      ["Schedule"],
      ctx,
    );
  });

export const TriggerDefinitionSchema =
  TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
