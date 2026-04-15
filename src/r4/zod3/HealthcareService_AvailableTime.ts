// Profile: http://hl7.org/fhir/StructureDefinition/HealthcareService
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirTime } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A collection of times that the Service Site is available. */
export interface HealthcareService_AvailableTime extends BackboneElement {
	/** Is this always available? (hence times are irrelevant) e.g. 24 hour service. */
	allDay?: boolean;
	/** Extensions for allDay */
	_allDay?: Element;
	/** The closing time of day. Note: If the AllDay flag is set, then this time is ignored. */
	availableEndTime?: string;
	/** Extensions for availableEndTime */
	_availableEndTime?: Element;
	/** The opening time of day. Note: If the AllDay flag is set, then this time is ignored. */
	availableStartTime?: string;
	/** Extensions for availableStartTime */
	_availableStartTime?: Element;
	/** Indicates which days of the week are available between the start and end Times. */
	daysOfWeek?: Array<
		"fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed" | null
	>;
	/** Extensions for daysOfWeek */
	_daysOfWeek?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const HealthcareService_AvailableTimeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		allDay: z.boolean().optional(),
		_allDay: z.lazy(getElementSchema).optional(),
		availableEndTime: fhirTime().optional(),
		_availableEndTime: z.lazy(getElementSchema).optional(),
		availableStartTime: fhirTime().optional(),
		_availableStartTime: z.lazy(getElementSchema).optional(),
		daysOfWeek: z
			.enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
			.nullable()
			.array()
			.optional(),
		_daysOfWeek: z.lazy(getElementSchema).nullable().array().optional(),
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

export const HealthcareService_AvailableTimeSchema =
	HealthcareService_AvailableTimeSchemaInternal as z.ZodType<HealthcareService_AvailableTime>;
