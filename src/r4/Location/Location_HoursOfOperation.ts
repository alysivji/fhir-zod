// Profile: http://hl7.org/fhir/StructureDefinition/Location
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** What days/times during a week is this location usually open. */
export interface Location_HoursOfOperation extends BackboneElement {
	/** The Location is open all day. */
	allDay?: boolean;
	/** Extensions for allDay */
	_allDay?: Element;
	/** Time that the Location closes. */
	closingTime?: string;
	/** Extensions for closingTime */
	_closingTime?: Element;
	/** Indicates which days of the week are available between the start and end Times. */
	daysOfWeek?: Array<
		"fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed" | null
	>;
	/** Extensions for daysOfWeek */
	_daysOfWeek?: Array<Element | null>;
	/** Time that the Location opens. */
	openingTime?: string;
	/** Extensions for openingTime */
	_openingTime?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Location_HoursOfOperationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		allDay: z.boolean().optional(),
		_allDay: z.lazy(getElementSchema).optional(),
		closingTime: fhirTime().optional(),
		_closingTime: z.lazy(getElementSchema).optional(),
		daysOfWeek: z
			.enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
			.nullable()
			.array()
			.optional(),
		_daysOfWeek: z.lazy(getElementSchema).nullable().array().optional(),
		openingTime: fhirTime().optional(),
		_openingTime: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.daysOfWeek,
				record._daysOfWeek,
				"daysOfWeek",
				"_daysOfWeek",
				ctx,
			);
		});

export const Location_HoursOfOperationSchema =
	Location_HoursOfOperationSchemaInternal as z.ZodType<Location_HoursOfOperation>;
