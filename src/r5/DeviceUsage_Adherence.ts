// Profile: http://hl7.org/fhir/StructureDefinition/DeviceUsage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** This indicates how or if the device is being used. */
export interface DeviceUsage_Adherence extends BackboneElement {
  /** Type of adherence. */
  code: CodeableConcept;
  /** Reason for adherence type. */
  reason: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const DeviceUsage_AdherenceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    reason: z.lazy(getCodeableConceptSchema).array(),
  }).strict();

export const DeviceUsage_AdherenceSchema =
  DeviceUsage_AdherenceSchemaInternal as z.ZodType<DeviceUsage_Adherence>;
