// Source: https://hl7.org/fhir/R5/devicedefinition-definitions.html#DeviceDefinition.packaging
// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { DeviceDefinition_Packaging_Distributor } from "./DeviceDefinition_Packaging_Distributor";
import { DeviceDefinition_Packaging_DistributorSchemaInternal } from "./DeviceDefinition_Packaging_Distributor";

/** Information about the packaging of the device, i.e. how the device is packaged. */
export interface DeviceDefinition_Packaging extends BackboneElement {
  /** The number of items contained in the package (devices or sub-packages). */
  count?: number;
  /** Extensions for count */
  _count?: Element;
  /** An organization that distributes the packaged device. */
  distributor?: Array<DeviceDefinition_Packaging_Distributor>;
  /** The business identifier of the packaged medication. */
  identifier?: Identifier;
  /** Allows packages within packages. */
  packaging?: Array<unknown>;
  /** A code that defines the specific type of packaging. */
  type?: CodeableConcept;
  /** Unique Device Identifier (UDI) Barcode string on the packaging. */
  udiDeviceIdentifier?: Array<unknown>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDeviceDefinition_Packaging_DistributorSchema =
  (): z.ZodType<DeviceDefinition_Packaging_Distributor> =>
    DeviceDefinition_Packaging_DistributorSchemaInternal as z.ZodType<DeviceDefinition_Packaging_Distributor>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const DeviceDefinition_PackagingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    count: z.number().int().optional(),
    _count: z.lazy(getElementSchema).optional(),
    distributor: z
      .lazy(getDeviceDefinition_Packaging_DistributorSchema)
      .array()
      .optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    packaging: z.unknown().array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    udiDeviceIdentifier: z.unknown().array().optional(),
  }).strict();

export const DeviceDefinition_PackagingSchema =
  DeviceDefinition_PackagingSchemaInternal as z.ZodType<DeviceDefinition_Packaging>;
