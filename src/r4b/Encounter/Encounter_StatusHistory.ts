// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** The status history permits the encounter resource to contain the status history without needing to read through the historical versions of the resource, or even have the server store them. */
export interface Encounter_StatusHistory extends BackboneElement {
  /** The time that the episode was in the specified status. */
  period: Period;
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled +. */
  status:
    | "arrived"
    | "cancelled"
    | "entered-in-error"
    | "finished"
    | "in-progress"
    | "onleave"
    | "planned"
    | "triaged"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Encounter_StatusHistorySchemaInternal =
  BackboneElementSchemaInternal.extend({
    period: z.lazy(getPeriodSchema),
    status: z.enum([
      "arrived",
      "cancelled",
      "entered-in-error",
      "finished",
      "in-progress",
      "onleave",
      "planned",
      "triaged",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
  }).strict();

export const Encounter_StatusHistorySchema =
  Encounter_StatusHistorySchemaInternal as z.ZodType<Encounter_StatusHistory>;
