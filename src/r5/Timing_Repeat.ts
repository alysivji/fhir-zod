// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-05T15:32:44.350Z

import * as z from "zod";
import { fhirString, fhirTime } from "../shared/fhir-primitives";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** A set of rules that describe when the event is scheduled. */
export interface Timing_Repeat extends Element {
	/** Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule. */
	boundsDuration?: Duration;
	/** Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule. */
	boundsPeriod?: Period;
	/** Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule. */
	boundsRange?: Range;
	/** A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values. */
	count?: number;
	/** Extensions for count */
	_count?: Element;
	/** If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times. */
	countMax?: number;
	/** Extensions for countMax */
	_countMax?: Element;
	/** If one or more days of week is provided, then the action happens only on the specified day(s). */
	dayOfWeek?: Array<"fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed">;
	/** Extensions for dayOfWeek */
	_dayOfWeek?: Array<Element>;
	/** How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration. */
	duration?: number;
	/** Extensions for duration */
	_duration?: Element;
	/** If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length. */
	durationMax?: number;
	/** Extensions for durationMax */
	_durationMax?: Element;
	/**
	 * The units of time for the duration, in UCUM units
	 * Normal practice is to use the 'mo' code as a calendar month when calculating the next occurrence.
	 */
	durationUnit?: "a" | "d" | "h" | "min" | "mo" | "s" | "wk";
	/** Extensions for durationUnit */
	_durationUnit?: Element;
	/** The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency. */
	frequency?: number;
	/** Extensions for frequency */
	_frequency?: Element;
	/** If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range. */
	frequencyMax?: number;
	/** Extensions for frequencyMax */
	_frequencyMax?: Element;
	/** The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event. */
	offset?: number;
	/** Extensions for offset */
	_offset?: Element;
	/** Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length. */
	period?: number;
	/** Extensions for period */
	_period?: Element;
	/** If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days. */
	periodMax?: number;
	/** Extensions for periodMax */
	_periodMax?: Element;
	/**
	 * The units of time for the period in UCUM units
	 * Normal practice is to use the 'mo' code as a calendar month when calculating the next occurrence.
	 */
	periodUnit?: "a" | "d" | "h" | "min" | "mo" | "s" | "wk";
	/** Extensions for periodUnit */
	_periodUnit?: Element;
	/** Specified time of day for action to take place. */
	timeOfDay?: Array<string>;
	/** Extensions for timeOfDay */
	_timeOfDay?: Array<Element>;
	/** An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur. */
	when?: Array<
		| "AC"
		| "ACD"
		| "ACM"
		| "ACV"
		| "AFT"
		| "AFT.early"
		| "AFT.late"
		| "C"
		| "CD"
		| "CM"
		| "CV"
		| "EVE"
		| "EVE.early"
		| "EVE.late"
		| "HS"
		| "IMD"
		| "MORN"
		| "MORN.early"
		| "MORN.late"
		| "NIGHT"
		| "NOON"
		| "PC"
		| "PCD"
		| "PCM"
		| "PCV"
		| "PHS"
		| "WAKE"
	>;
	/** Extensions for when */
	_when?: Array<Element>;
}

const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const Timing_RepeatSchemaInternal = z
	.object({
		boundsDuration: z.lazy(getDurationSchema).optional(),
		boundsPeriod: z.lazy(getPeriodSchema).optional(),
		boundsRange: z.lazy(getRangeSchema).optional(),
		count: z.number().int().positive().optional(),
		_count: z.lazy(getElementSchema).optional(),
		countMax: z.number().int().positive().optional(),
		_countMax: z.lazy(getElementSchema).optional(),
		dayOfWeek: z
			.enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
			.array()
			.optional(),
		_dayOfWeek: z.lazy(getElementSchema).array().optional(),
		duration: z.number().optional(),
		_duration: z.lazy(getElementSchema).optional(),
		durationMax: z.number().optional(),
		_durationMax: z.lazy(getElementSchema).optional(),
		durationUnit: z.enum(["a", "d", "h", "min", "mo", "s", "wk"]).optional(),
		_durationUnit: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		frequency: z.number().int().positive().optional(),
		_frequency: z.lazy(getElementSchema).optional(),
		frequencyMax: z.number().int().positive().optional(),
		_frequencyMax: z.lazy(getElementSchema).optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		offset: z.number().int().nonnegative().optional(),
		_offset: z.lazy(getElementSchema).optional(),
		period: z.number().optional(),
		_period: z.lazy(getElementSchema).optional(),
		periodMax: z.number().optional(),
		_periodMax: z.lazy(getElementSchema).optional(),
		periodUnit: z.enum(["a", "d", "h", "min", "mo", "s", "wk"]).optional(),
		_periodUnit: z.lazy(getElementSchema).optional(),
		timeOfDay: fhirTime().array().optional(),
		_timeOfDay: z.lazy(getElementSchema).array().optional(),
		when: z
			.enum([
				"AC",
				"ACD",
				"ACM",
				"ACV",
				"AFT",
				"AFT.early",
				"AFT.late",
				"C",
				"CD",
				"CM",
				"CV",
				"EVE",
				"EVE.early",
				"EVE.late",
				"HS",
				"IMD",
				"MORN",
				"MORN.early",
				"MORN.late",
				"NIGHT",
				"NOON",
				"PC",
				"PCD",
				"PCM",
				"PCV",
				"PHS",
				"WAKE",
			])
			.array()
			.optional(),
		_when: z.lazy(getElementSchema).array().optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const bounds_x_Present = [
			"boundsDuration",
			"boundsPeriod",
			"boundsRange",
		].filter((field) => record[field] !== undefined);
		if (bounds_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of boundsDuration, boundsPeriod, boundsRange may be present for bounds[x]",
				path: [bounds_x_Present[0]],
			});
		}
	});

export const Timing_RepeatSchema =
	Timing_RepeatSchemaInternal as z.ZodType<Timing_Repeat>;
