// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Duration } from "./Duration";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import type { Range } from "./Range";
import { fhirId, fhirTime } from "../shared/fhir-primitives";
import { DurationSchemaInternal } from "./Duration";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { PeriodSchemaInternal } from "./Period";
import { RangeSchemaInternal } from "./Range";

export interface Timing_Repeat extends Element {
	boundsDuration?: Duration;
	boundsPeriod?: Period;
	boundsRange?: Range;
	count?: number;
	_count?: Element;
	countMax?: number;
	_countMax?: Element;
	dayOfWeek?: Array<"fri" | "mon" | "sat" | "sun" | "thu" | "tue" | "wed">;
	_dayOfWeek?: Element;
	duration?: number;
	_duration?: Element;
	durationMax?: number;
	_durationMax?: Element;
	durationUnit?: "a" | "d" | "h" | "min" | "mo" | "s" | "wk";
	_durationUnit?: Element;
	frequency?: number;
	_frequency?: Element;
	frequencyMax?: number;
	_frequencyMax?: Element;
	offset?: number;
	_offset?: Element;
	period?: number;
	_period?: Element;
	periodMax?: number;
	_periodMax?: Element;
	periodUnit?: "a" | "d" | "h" | "min" | "mo" | "s" | "wk";
	_periodUnit?: Element;
	timeOfDay?: Array<string>;
	_timeOfDay?: Element;
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
		| "IC"
		| "ICD"
		| "ICM"
		| "ICV"
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
	_when?: Element;
}

const getDurationSchema = (): z.ZodType<Duration> => DurationSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;
const getRangeSchema = (): z.ZodType<Range> => RangeSchemaInternal;

/** @internal */
export const Timing_RepeatSchemaInternal = z
	.object({
		boundsDuration: z
			.lazy(getDurationSchema)
			.optional()
			.describe(
				"Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
			),
		boundsPeriod: z
			.lazy(getPeriodSchema)
			.optional()
			.describe(
				"Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
			),
		boundsRange: z
			.lazy(getRangeSchema)
			.optional()
			.describe(
				"Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.",
			),
		count: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"A total count of the desired number of repetitions across the duration of the entire timing specification. If countMax is present, this element indicates the lower bound of the allowed range of count values.",
			),
		_count: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for count"),
		countMax: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"If present, indicates that the count is a range - so to perform the action between [count] and [countMax] times.",
			),
		_countMax: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for countMax"),
		dayOfWeek: z
			.enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
			.array()
			.optional()
			.describe(
				"If one or more days of week is provided, then the action happens only on the specified day(s).",
			),
		_dayOfWeek: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for dayOfWeek"),
		duration: z
			.number()
			.optional()
			.describe(
				"How long this thing happens for when it happens. If durationMax is present, this element indicates the lower bound of the allowed range of the duration.",
			),
		_duration: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for duration"),
		durationMax: z
			.number()
			.optional()
			.describe(
				"If present, indicates that the duration is a range - so to perform the action between [duration] and [durationMax] time length.",
			),
		_durationMax: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for durationMax"),
		durationUnit: z
			.enum(["a", "d", "h", "min", "mo", "s", "wk"])
			.optional()
			.describe("The units of time for the duration, in UCUM units."),
		_durationUnit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for durationUnit"),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		frequency: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"The number of times to repeat the action within the specified period. If frequencyMax is present, this element indicates the lower bound of the allowed range of the frequency.",
			),
		_frequency: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for frequency"),
		frequencyMax: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.",
			),
		_frequencyMax: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for frequencyMax"),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		offset: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.",
			),
		_offset: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for offset"),
		period: z
			.number()
			.optional()
			.describe(
				'Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is present, this element indicates the lower bound of the allowed range of the period length.',
			),
		_period: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for period"),
		periodMax: z
			.number()
			.optional()
			.describe(
				'If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.',
			),
		_periodMax: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for periodMax"),
		periodUnit: z
			.enum(["a", "d", "h", "min", "mo", "s", "wk"])
			.optional()
			.describe("The units of time for the period in UCUM units."),
		_periodUnit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for periodUnit"),
		timeOfDay: fhirTime()
			.array()
			.optional()
			.describe("Specified time of day for action to take place."),
		_timeOfDay: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for timeOfDay"),
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
				"IC",
				"ICD",
				"ICM",
				"ICV",
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
			.optional()
			.describe(
				"An approximate time period during the day, potentially linked to an event of daily living that indicates when the action should occur.",
			),
		_when: z.lazy(getElementSchema).optional().describe("Extensions for when"),
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

export const Timing_RepeatSchema: z.ZodType<Timing_Repeat> =
	Timing_RepeatSchemaInternal;
