// Source: https://hl7.org/fhir/R4B/requestgroup-definitions.html#RequestGroup.action.relatedAction
// Profile: http://hl7.org/fhir/StructureDefinition/RequestGroup
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirId } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** A relationship to another action such as "before" or "30-60 minutes after start of". */
export interface RequestGroup_Action_RelatedAction extends BackboneElement {
  /** The element id of the action this is related to. */
  actionId: string;
  /** Extensions for actionId */
  _actionId?: Element;
  /** A duration or range of durations to apply to the relationship. For example, 30-60 minutes before. */
  offsetDuration?: Duration;
  /** A duration or range of durations to apply to the relationship. For example, 30-60 minutes before. */
  offsetRange?: Range;
  /** The relationship of this action to the related action. */
  relationship:
    | "after"
    | "after-end"
    | "after-start"
    | "before"
    | "before-end"
    | "before-start"
    | "concurrent"
    | "concurrent-with-end"
    | "concurrent-with-start";
  /** Extensions for relationship */
  _relationship?: Element;
}

const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const RequestGroup_Action_RelatedActionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actionId: fhirId(),
    _actionId: z.lazy(getElementSchema).optional(),
    offsetDuration: z.lazy(getDurationSchema).optional(),
    offsetRange: z.lazy(getRangeSchema).optional(),
    relationship: z.enum([
      "after",
      "after-end",
      "after-start",
      "before",
      "before-end",
      "before-start",
      "concurrent",
      "concurrent-with-end",
      "concurrent-with-start",
    ]),
    _relationship: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const offset_x_Present = ["offsetDuration", "offsetRange"].filter(
        (field) => record[field] !== undefined,
      );
      if (offset_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of offsetDuration, offsetRange may be present for offset[x]",
          path: [offset_x_Present[0]],
        });
      }
    });

export const RequestGroup_Action_RelatedActionSchema =
  RequestGroup_Action_RelatedActionSchemaInternal as z.ZodType<RequestGroup_Action_RelatedAction>;
