// Source: https://hl7.org/fhir/R5/devicedefinition-definitions.html#DeviceDefinition.regulatoryIdentifier
// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Identifier associated with the regulatory documentation (certificates, technical documentation, post-market surveillance documentation and reports) of a set of device models sharing the same intended purpose, risk class and essential design and manufacturing characteristics. One example is the Basic UDI-DI in Europe. */
export interface DeviceDefinition_RegulatoryIdentifier extends BackboneElement {
  /** The identifier itself. */
  deviceIdentifier: string;
  /** Extensions for deviceIdentifier */
  _deviceIdentifier?: Element;
  /** The organization that issued this identifier. */
  issuer: string;
  /** Extensions for issuer */
  _issuer?: Element;
  /** The jurisdiction to which the deviceIdentifier applies. */
  jurisdiction: string;
  /** Extensions for jurisdiction */
  _jurisdiction?: Element;
  /** The type of identifier itself. */
  type: "basic" | "license" | "master";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_RegulatoryIdentifierSchemaInternal =
  BackboneElementSchemaInternal.extend({
    deviceIdentifier: fhirString(),
    _deviceIdentifier: z.lazy(getElementSchema).optional(),
    issuer: fhirUri(),
    _issuer: z.lazy(getElementSchema).optional(),
    jurisdiction: fhirUri(),
    _jurisdiction: z.lazy(getElementSchema).optional(),
    type: z.enum(["basic", "license", "master"]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const DeviceDefinition_RegulatoryIdentifierSchema =
  DeviceDefinition_RegulatoryIdentifierSchemaInternal as z.ZodType<DeviceDefinition_RegulatoryIdentifier>;
