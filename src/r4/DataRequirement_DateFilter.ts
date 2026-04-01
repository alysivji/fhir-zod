// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

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
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
		_searchParam: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for searchParam"),
		_valueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDateTime"),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing.",
			),
		searchParam: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.",
			),
		valueDateTime: fhirDateTime()
			.optional()
			.describe(
				"The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
			),
		valueDuration: z
			.lazy(getDurationSchema)
			.optional()
			.describe(
				"The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
			),
		valuePeriod: z
			.lazy(getPeriodSchema)
			.optional()
			.describe(
				"The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
			),
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
