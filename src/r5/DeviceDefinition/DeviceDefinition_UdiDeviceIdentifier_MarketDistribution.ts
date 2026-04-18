// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** Indicates where and when the device is available on the market. */
export interface DeviceDefinition_UdiDeviceIdentifier_MarketDistribution
  extends BackboneElement {
  /** Begin and end dates for the commercial distribution of the device. */
  marketPeriod: Period;
  /** National state or territory to which the marketDistribution recers, typically where the device is commercialized. */
  subJurisdiction: string;
  /** Extensions for subJurisdiction */
  _subJurisdiction?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const DeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    marketPeriod: z.lazy(getPeriodSchema),
    subJurisdiction: fhirUri(),
    _subJurisdiction: z.lazy(getElementSchema).optional(),
  }).strict();

export const DeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchema =
  DeviceDefinition_UdiDeviceIdentifier_MarketDistributionSchemaInternal as z.ZodType<DeviceDefinition_UdiDeviceIdentifier_MarketDistribution>;
