// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** List of locations where  the patient has been during this encounter. */
export interface Encounter_Location extends BackboneElement {
  /** The location where the encounter takes place. */
  location: Reference;
  /** Time period during which the patient was present at the location. */
  period?: Period;
  /** The status of the participants' presence at the specified location during the period specified. If the participant is is no longer at the location, then the period will have an end date/time. */
  status?: "active" | "completed" | "planned" | "reserved";
  /** Extensions for status */
  _status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Encounter_LocationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    location: z.lazy(getReferenceSchema),
    period: z.lazy(getPeriodSchema).optional(),
    status: z.enum(["active", "completed", "planned", "reserved"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.location,
        "location",
        ["http://hl7.org/fhir/StructureDefinition/Location"],
        ["Location"],
        ctx,
      );
    });

export const Encounter_LocationSchema =
  Encounter_LocationSchemaInternal as z.ZodType<Encounter_Location>;
