// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** The name or names of the device as given by the manufacturer. */
export interface DeviceDefinition_DeviceName extends BackboneElement {
	/** A human-friendly name that is used to refer to the device - depending on the type, it can be the brand name, the common name or alias, or other. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/**
	 * The type of deviceName.
	 * RegisteredName | UserFriendlyName | PatientReportedName.
	 */
	type: "patient-reported-name" | "registered-name" | "user-friendly-name";
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
			"patient-reported-name",
			"registered-name",
			"user-friendly-name",
		]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const DeviceDefinition_DeviceNameSchema =
	DeviceDefinition_DeviceNameSchemaInternal as z.ZodType<DeviceDefinition_DeviceName>;
