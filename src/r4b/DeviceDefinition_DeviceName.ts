// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A name given to the device to identify it. */
export interface DeviceDefinition_DeviceName extends BackboneElement {
  /** The name of the device. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  type:
    | "manufacturer-name"
    | "model-name"
    | "other"
    | "patient-reported-name"
    | "udi-label-name"
    | "user-friendly-name";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_DeviceNameSchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.enum([
      "manufacturer-name",
      "model-name",
      "other",
      "patient-reported-name",
      "udi-label-name",
      "user-friendly-name",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const DeviceDefinition_DeviceNameSchema =
  DeviceDefinition_DeviceNameSchemaInternal as z.ZodType<DeviceDefinition_DeviceName>;
