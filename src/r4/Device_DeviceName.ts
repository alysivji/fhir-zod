// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition. */
export interface Device_DeviceName extends BackboneElement {
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
export const Device_DeviceNameSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: z.string().regex(/[ \r\n\t\S]+/),
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

export const Device_DeviceNameSchema =
	Device_DeviceNameSchemaInternal as z.ZodType<Device_DeviceName>;
