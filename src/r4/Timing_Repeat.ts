// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId, fhirTime } from "../shared/fhir-primitives";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";
import { Range } from "./Range";

const getDurationSchema = (): z.ZodType<unknown> => Duration;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;
const getRangeSchema = (): z.ZodType<unknown> => Range;

export const Timing_Repeat = z
	.object({
		_count: z.lazy(getElementSchema).optional(),
		_countMax: z.lazy(getElementSchema).optional(),
		_dayOfWeek: z.lazy(getElementSchema).optional(),
		_duration: z.lazy(getElementSchema).optional(),
		_durationMax: z.lazy(getElementSchema).optional(),
		_durationUnit: z.lazy(getElementSchema).optional(),
		_frequency: z.lazy(getElementSchema).optional(),
		_frequencyMax: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_offset: z.lazy(getElementSchema).optional(),
		_period: z.lazy(getElementSchema).optional(),
		_periodMax: z.lazy(getElementSchema).optional(),
		_periodUnit: z.lazy(getElementSchema).optional(),
		_timeOfDay: z.lazy(getElementSchema).optional(),
		_when: z.lazy(getElementSchema).optional(),
		boundsDuration: z.lazy(getDurationSchema).optional(),
		boundsPeriod: z.lazy(getPeriodSchema).optional(),
		boundsRange: z.lazy(getRangeSchema).optional(),
		count: z.number().int().positive().optional(),
		countMax: z.number().int().positive().optional(),
		dayOfWeek: z
			.enum(["fri", "mon", "sat", "sun", "thu", "tue", "wed"])
			.array()
			.optional(),
		duration: z.number().optional(),
		durationMax: z.number().optional(),
		durationUnit: z.enum(["a", "d", "h", "min", "mo", "s", "wk"]).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		frequency: z.number().int().positive().optional(),
		frequencyMax: z.number().int().positive().optional(),
		id: fhirId().optional(),
		offset: z.number().int().nonnegative().optional(),
		period: z.number().optional(),
		periodMax: z.number().optional(),
		periodUnit: z.enum(["a", "d", "h", "min", "mo", "s", "wk"]).optional(),
		timeOfDay: fhirTime().array().optional(),
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
			.optional(),
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

export type Timing_Repeat = z.output<typeof Timing_Repeat>;
