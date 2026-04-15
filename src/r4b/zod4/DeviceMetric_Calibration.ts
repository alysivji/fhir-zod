// Profile: http://hl7.org/fhir/StructureDefinition/DeviceMetric
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirInstant } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Describes the calibrations that have been performed or that are required to be performed. */
export interface DeviceMetric_Calibration extends BackboneElement {
	/** Describes the state of the calibration. */
	state?:
		| "calibrated"
		| "calibration-required"
		| "not-calibrated"
		| "unspecified";
	/** Extensions for state */
	_state?: Element;
	/** Describes the time last calibration has been performed. */
	time?: string;
	/** Extensions for time */
	_time?: Element;
	/** Describes the type of the calibration method. */
	type?: "gain" | "offset" | "two-point" | "unspecified";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DeviceMetric_CalibrationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		state: z
			.enum([
				"calibrated",
				"calibration-required",
				"not-calibrated",
				"unspecified",
			])
			.optional(),
		_state: z.lazy(getElementSchema).optional(),
		time: fhirInstant().optional(),
		_time: z.lazy(getElementSchema).optional(),
		type: z.enum(["gain", "offset", "two-point", "unspecified"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const DeviceMetric_CalibrationSchema =
	DeviceMetric_CalibrationSchemaInternal as z.ZodType<DeviceMetric_Calibration>;
