// Profile: http://hl7.org/fhir/StructureDefinition/Observation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Identifies the observation(s) that triggered the performance of this observation. */
export interface Observation_TriggeredBy extends BackboneElement {
  /** Reference to the triggering observation. */
  observation: Reference;
  /** Provides the reason why this observation was performed as a result of the observation(s) referenced. */
  reason?: string;
  /** Extensions for reason */
  _reason?: Element;
  /**
   * The type of trigger.
   * Reflex | Repeat | Re-run.
   */
  type: "re-run" | "reflex" | "repeat";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Observation_TriggeredBySchemaInternal =
  BackboneElementSchemaInternal.extend({
    observation: z.lazy(getReferenceSchema),
    reason: fhirString().optional(),
    _reason: z.lazy(getElementSchema).optional(),
    type: z.enum(["re-run", "reflex", "repeat"]),
    _type: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.observation,
        "observation",
        ["http://hl7.org/fhir/StructureDefinition/Observation"],
        ["Observation"],
        ctx,
      );
    });

export const Observation_TriggeredBySchema =
  Observation_TriggeredBySchemaInternal as z.ZodType<Observation_TriggeredBy>;
