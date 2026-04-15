// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about weekly recurring appointments. */
export interface Appointment_RecurrenceTemplate_WeeklyTemplate
	extends BackboneElement {
	/** Indicates that recurring appointments should occur on Fridays. */
	friday?: boolean;
	/** Extensions for friday */
	_friday?: Element;
	/** Indicates that recurring appointments should occur on Mondays. */
	monday?: boolean;
	/** Extensions for monday */
	_monday?: Element;
	/** Indicates that recurring appointments should occur on Saturdays. */
	saturday?: boolean;
	/** Extensions for saturday */
	_saturday?: Element;
	/** Indicates that recurring appointments should occur on Sundays. */
	sunday?: boolean;
	/** Extensions for sunday */
	_sunday?: Element;
	/** Indicates that recurring appointments should occur on Thursdays. */
	thursday?: boolean;
	/** Extensions for thursday */
	_thursday?: Element;
	/** Indicates that recurring appointments should occur on Tuesdays. */
	tuesday?: boolean;
	/** Extensions for tuesday */
	_tuesday?: Element;
	/** Indicates that recurring appointments should occur on Wednesdays. */
	wednesday?: boolean;
	/** Extensions for wednesday */
	_wednesday?: Element;
	/** The interval defines if the recurrence is every nth week. The default is every week, so it is expected that this value will be 2 or more.e.g. For recurring every second week this interval would be 2, or every third week the interval would be 3. */
	weekInterval?: number;
	/** Extensions for weekInterval */
	_weekInterval?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Appointment_RecurrenceTemplate_WeeklyTemplateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		friday: z.boolean().optional(),
		_friday: z.lazy(getElementSchema).optional(),
		monday: z.boolean().optional(),
		_monday: z.lazy(getElementSchema).optional(),
		saturday: z.boolean().optional(),
		_saturday: z.lazy(getElementSchema).optional(),
		sunday: z.boolean().optional(),
		_sunday: z.lazy(getElementSchema).optional(),
		thursday: z.boolean().optional(),
		_thursday: z.lazy(getElementSchema).optional(),
		tuesday: z.boolean().optional(),
		_tuesday: z.lazy(getElementSchema).optional(),
		wednesday: z.boolean().optional(),
		_wednesday: z.lazy(getElementSchema).optional(),
		weekInterval: z.number().int().positive().optional(),
		_weekInterval: z.lazy(getElementSchema).optional(),
	}).strict();

export const Appointment_RecurrenceTemplate_WeeklyTemplateSchema =
	Appointment_RecurrenceTemplate_WeeklyTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate_WeeklyTemplate>;
