// Profile: http://hl7.org/fhir/StructureDefinition/Availability
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-05T15:32:44.350Z

import * as z from "zod";
import { fhirString, fhirTime } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Times the {item} is available. */
export interface Availability_AvailableTime extends Element {
	/** Always available? i.e. 24 hour service. */
	allDay?: boolean;
	/** Extensions for allDay */
	_allDay?: Element;
	/** Closing time of day (ignored if allDay = true). */
	availableEndTime?: string;
	/** Extensions for availableEndTime */
	_availableEndTime?: Element;
	/** Opening time of day (ignored if allDay = true). */
	availableStartTime?: string;
	/** Extensions for availableStartTime */
	_availableStartTime?: Element;
	/** mon | tue | wed | thu | fri | sat | sun. */
	daysOfWeek?: Array<"fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed">;
	/** Extensions for daysOfWeek */
	_daysOfWeek?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const Availability_AvailableTimeSchemaInternal = z
	.object({
		allDay: z.boolean().optional(),
		_allDay: z.lazy(getElementSchema).optional(),
		availableEndTime: fhirTime().optional(),
		_availableEndTime: z.lazy(getElementSchema).optional(),
		availableStartTime: fhirTime().optional(),
		_availableStartTime: z.lazy(getElementSchema).optional(),
		daysOfWeek: z
			.enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
			.array()
			.optional(),
		_daysOfWeek: z.lazy(getElementSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const Availability_AvailableTimeSchema =
	Availability_AvailableTimeSchemaInternal as z.ZodType<Availability_AvailableTime>;
