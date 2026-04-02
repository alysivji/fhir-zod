// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

export interface ElementDefinition_Base extends Element {
	max: string;
	_max?: Element;
	min: number;
	_min?: Element;
	path: string;
	_path?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_BaseSchemaInternal =
	ElementSchemaInternal.extend({
		max: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Maximum cardinality of the base element identified by the path.",
			),
		_max: z.lazy(getElementSchema).optional().describe("Extensions for max"),
		min: z
			.number()
			.int()
			.nonnegative()
			.describe(
				"Minimum cardinality of the base element identified by the path.",
			),
		_min: z.lazy(getElementSchema).optional().describe("Extensions for min"),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.",
			),
		_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
	}).strict();

export const ElementDefinition_BaseSchema: z.ZodType<ElementDefinition_Base> =
	ElementDefinition_BaseSchemaInternal;
