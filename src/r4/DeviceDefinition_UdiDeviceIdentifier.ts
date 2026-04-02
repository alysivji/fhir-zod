// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold. */
export interface DeviceDefinition_UdiDeviceIdentifier extends BackboneElement {
	/** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier. */
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
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_UdiDeviceIdentifierSchemaInternal =
	BackboneElementSchemaInternal.extend({
		deviceIdentifier: z.string().regex(/[ \r\n\t\S]+/),
		_deviceIdentifier: z.lazy(getElementSchema).optional(),
		issuer: z.string().regex(/\S*/),
		_issuer: z.lazy(getElementSchema).optional(),
		jurisdiction: z.string().regex(/\S*/),
		_jurisdiction: z.lazy(getElementSchema).optional(),
	}).strict();

export const DeviceDefinition_UdiDeviceIdentifierSchema =
	DeviceDefinition_UdiDeviceIdentifierSchemaInternal as z.ZodType<DeviceDefinition_UdiDeviceIdentifier>;
