// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { DeviceDefinition_UdiDeviceIdentifier_MarketDistribution } from "./DeviceDefinition_UdiDeviceIdentifier_MarketDistribution";
import { DeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchemaInternal } from "./DeviceDefinition_UdiDeviceIdentifier_MarketDistribution";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold. */
export interface DeviceDefinition_UdiDeviceIdentifier extends BackboneElement {
  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdiction provided in the DeviceDefinition.udiDeviceIdentifier. */
  deviceIdentifier: string;
  /** Extensions for deviceIdentifier */
  _deviceIdentifier?: Element;
  /** The organization that assigns the identifier algorithm. */
  issuer: string;
  /** Extensions for issuer */
  _issuer?: Element;
  /** The jurisdiction to which the deviceIdentifier applies. */
  jurisdiction: string;
  /** Extensions for jurisdiction */
  _jurisdiction?: Element;
  /** Indicates where and when the device is available on the market. */
  marketDistribution?: Array<DeviceDefinition_UdiDeviceIdentifier_MarketDistribution>;
}

const getDeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchema =
  (): z.ZodType<DeviceDefinition_UdiDeviceIdentifier_MarketDistribution> =>
    DeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchemaInternal as z.ZodType<DeviceDefinition_UdiDeviceIdentifier_MarketDistribution>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_UdiDeviceIdentifierSchemaInternal =
  BackboneElementSchemaInternal.extend({
    deviceIdentifier: fhirString(),
    _deviceIdentifier: z.lazy(getElementSchema).optional(),
    issuer: fhirUri(),
    _issuer: z.lazy(getElementSchema).optional(),
    jurisdiction: fhirUri(),
    _jurisdiction: z.lazy(getElementSchema).optional(),
    marketDistribution: z
      .lazy(getDeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchema)
      .array()
      .optional(),
  }).strict();

export const DeviceDefinition_UdiDeviceIdentifierSchema =
  DeviceDefinition_UdiDeviceIdentifierSchemaInternal as z.ZodType<DeviceDefinition_UdiDeviceIdentifier>;
