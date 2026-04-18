// Profile: http://hl7.org/fhir/StructureDefinition/PractitionerRole
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A collection of times the practitioner is available or performing this role at the location and/or healthcareservice. */
export interface PractitionerRole_AvailableTime extends BackboneElement {
  /** Is this always available? (hence times are irrelevant) e.g. 24 hour service. */
  allDay?: boolean;
  /** Extensions for allDay */
  _allDay?: Element;
  /** The closing time of day. Note: If the AllDay flag is set, then this time is ignored. */
  availableEndTime?: string;
  /** Extensions for availableEndTime */
  _availableEndTime?: Element;
  /** The opening time of day. Note: If the AllDay flag is set, then this time is ignored. */
  availableStartTime?: string;
  /** Extensions for availableStartTime */
  _availableStartTime?: Element;
  /** Indicates which days of the week are available between the start and end Times. */
  daysOfWeek?: Array<
    "fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed" | null
  >;
  /** Extensions for daysOfWeek */
  _daysOfWeek?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const PractitionerRole_AvailableTimeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    allDay: z.boolean().optional(),
    _allDay: z.lazy(getElementSchema).optional(),
    availableEndTime: fhirTime().optional(),
    _availableEndTime: z.lazy(getElementSchema).optional(),
    availableStartTime: fhirTime().optional(),
    _availableStartTime: z.lazy(getElementSchema).optional(),
    daysOfWeek: z
      .enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
      .nullable()
      .array()
      .optional(),
    _daysOfWeek: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.daysOfWeek,
        record._daysOfWeek,
        "daysOfWeek",
        "_daysOfWeek",
        ctx,
      );
    });

export const PractitionerRole_AvailableTimeSchema =
  PractitionerRole_AvailableTimeSchemaInternal as z.ZodType<PractitionerRole_AvailableTime>;
