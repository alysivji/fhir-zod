// Profile: http://hl7.org/fhir/StructureDefinition/Device
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** This represents the manufacturer's name of the device as provided by the device, from a UDI label, or by a person describing the Device.  This typically would be used when a person provides the name(s) or when the device represents one of the names available from DeviceDefinition. */
export interface Device_Name extends BackboneElement {
	/** Indicates the default or preferred name to be displayed. */
	display?: boolean;
	/** Extensions for display */
	_display?: Element;
	/** Indicates the kind of name. RegisteredName | UserFriendlyName | PatientReportedName. */
	type: "patient-reported-name" | "registered-name" | "user-friendly-name";
	/** Extensions for type */
	_type?: Element;
	/** The actual name that identifies the device. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Device_NameSchemaInternal = BackboneElementSchemaInternal.extend({
	display: z.boolean().optional(),
	_display: z.lazy(getElementSchema).optional(),
	type: z.enum([
		"patient-reported-name",
		"registered-name",
		"user-friendly-name",
	]),
	_type: z.lazy(getElementSchema).optional(),
	value: fhirString(),
	_value: z.lazy(getElementSchema).optional(),
}).strict();

export const Device_NameSchema =
	Device_NameSchemaInternal as z.ZodType<Device_Name>;
