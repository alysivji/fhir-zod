// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication. */
export interface DeviceDefinition_Specialization extends BackboneElement {
	/** The standard that is used to operate and communicate. */
	systemType: string;
	/** Extensions for systemType */
	_systemType?: Element;
	/** The version of the standard that is used to operate and communicate. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceDefinition_SpecializationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		systemType: z.string().regex(/[ \r\n\t\S]+/),
		_systemType: z.lazy(getElementSchema).optional(),
		version: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const DeviceDefinition_SpecializationSchema =
	DeviceDefinition_SpecializationSchemaInternal as z.ZodType<DeviceDefinition_Specialization>;
