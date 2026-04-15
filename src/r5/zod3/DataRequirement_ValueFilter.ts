// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod3";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Value filters specify additional constraints on the data for elements other than code-valued or date-valued. Each value filter specifies an additional constraint on the data (i.e. valueFilters are AND'ed, not OR'ed). */
export interface DataRequirement_ValueFilter extends Element {
	/** The comparator to be used to determine whether the value is matching. */
	comparator?: "ap" | "eb" | "eq" | "ge" | "gt" | "le" | "lt" | "ne" | "sa";
	/** Extensions for comparator */
	_comparator?: Element;
	/** The attribute of the filter. The specified path SHALL be a FHIRPath resolvable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of a type that is comparable to the valueFilter.value[x] element for the filter. */
	path?: string;
	/** Extensions for path */
	_path?: Element;
	/** A search parameter defined on the specified type of the DataRequirement, and which searches on elements of a type compatible with the type of the valueFilter.value[x] for the filter. */
	searchParam?: string;
	/** Extensions for searchParam */
	_searchParam?: Element;
	/** The value of the filter. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The value of the filter. */
	valueDuration?: Duration;
	/** The value of the filter. */
	valuePeriod?: Period;
}

const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const DataRequirement_ValueFilterSchemaInternal = z
	.object({
		comparator: z
			.enum(["ap", "eb", "eq", "ge", "gt", "le", "lt", "ne", "sa"])
			.optional(),
		_comparator: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		path: fhirString().optional(),
		_path: z.lazy(getElementSchema).optional(),
		searchParam: fhirString().optional(),
		_searchParam: z.lazy(getElementSchema).optional(),
		valueDateTime: fhirDateTime().optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
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

export const DataRequirement_ValueFilterSchema =
	DataRequirement_ValueFilterSchemaInternal as z.ZodType<DataRequirement_ValueFilter>;
