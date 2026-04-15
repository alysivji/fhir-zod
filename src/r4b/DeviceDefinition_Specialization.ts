// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
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
		systemType: fhirString(),
		_systemType: z.lazy(getElementSchema).optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const DeviceDefinition_SpecializationSchema =
	DeviceDefinition_SpecializationSchemaInternal as z.ZodType<DeviceDefinition_Specialization>;
