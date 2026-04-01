// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

const getDurationSchema = (): z.ZodType<unknown> => Duration;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;

export const DataRequirement_DateFilter = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_path: z.lazy(getElementSchema).optional(),
		_searchParam: z.lazy(getElementSchema).optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		searchParam: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		valueDateTime: fhirDateTime().optional(),
		valueDuration: z.lazy(getDurationSchema).optional(),
		valuePeriod: z.lazy(getPeriodSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const value_x_Present = [
			"valueDateTime",
			"valueDuration",
			"valuePeriod",
		].filter((field) => record[field] !== undefined);
		if (value_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of valueDateTime, valueDuration, valuePeriod may be present for value[x]",
				path: [value_x_Present[0]],
			});
		}
	});

export type DataRequirement_DateFilter = z.output<
	typeof DataRequirement_DateFilter
>;
