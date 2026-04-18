// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** Tracking of latest field safety corrective action. */
export interface DeviceDefinition_CorrectiveAction extends BackboneElement {
  /** Start and end dates of the  corrective action. */
  period: Period;
  /** Whether the last corrective action known for this device was a recall. */
  recall: boolean;
  /** Extensions for recall */
  _recall?: Element;
  /** The scope of the corrective action - whether the action targeted all units of a given device model, or only a specific set of batches identified by lot numbers, or individually identified devices identified by the serial name. */
  scope?: "lot-numbers" | "model" | "serial-numbers";
  /** Extensions for scope */
  _scope?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const DeviceDefinition_CorrectiveActionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    period: z.lazy(getPeriodSchema),
    recall: z.boolean(),
    _recall: z.lazy(getElementSchema).optional(),
    scope: z.enum(["lot-numbers", "model", "serial-numbers"]).optional(),
    _scope: z.lazy(getElementSchema).optional(),
  }).strict();

export const DeviceDefinition_CorrectiveActionSchema =
  DeviceDefinition_CorrectiveActionSchemaInternal as z.ZodType<DeviceDefinition_CorrectiveAction>;
