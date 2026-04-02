// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Duration } from "./Duration";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Period } from "./Period";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { DurationSchemaInternal } from "./Duration";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { PeriodSchemaInternal } from "./Period";

export interface DataRequirement_DateFilter extends Element {
	path?: string;
	_path?: Element;
	searchParam?: string;
	_searchParam?: Element;
	valueDateTime?: string;
	_valueDateTime?: Element;
	valueDuration?: Duration;
	valuePeriod?: Period;
}

const getDurationSchema = (): z.ZodType<Duration> => DurationSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;

/** @internal */
export const DataRequirement_DateFilterSchemaInternal = z
	.object({
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
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing.",
			),
		_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
		searchParam: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing.",
			),
		_searchParam: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for searchParam"),
		valueDateTime: fhirDateTime()
			.optional()
			.describe(
				"The value of the filter. If period is specified, the filter will return only those data items that fall within the bounds determined by the Period, inclusive of the period boundaries. If dateTime is specified, the filter will return only those data items that are equal to the specified dateTime. If a Duration is specified, the filter will return only those data items that fall within Duration before now.",
			),
		_valueDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueDateTime"),
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

export const DataRequirement_DateFilterSchema: z.ZodType<DataRequirement_DateFilter> =
	DataRequirement_DateFilterSchemaInternal;
