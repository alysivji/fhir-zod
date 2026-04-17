// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties. */
export interface Device_Property extends BackboneElement {
  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible). */
  type: CodeableConcept;
  /** Property value as a code, e.g., NTP4 (synced to NTP). */
  valueCode?: Array<CodeableConcept>;
  /** Property value as a quantity. */
  valueQuantity?: Array<Quantity>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const Device_PropertySchemaInternal =
  BackboneElementSchemaInternal.extend({
    type: z.lazy(getCodeableConceptSchema),
    valueCode: z.lazy(getCodeableConceptSchema).array().optional(),
    valueQuantity: z.lazy(getQuantitySchema).array().optional(),
  }).strict();

export const Device_PropertySchema =
  Device_PropertySchemaInternal as z.ZodType<Device_Property>;
