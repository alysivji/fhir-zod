// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

export interface ElementDefinition_Slicing extends Element {
	description?: string;
	_description?: Element;
	discriminator?: Array<unknown>;
	ordered?: boolean;
	_ordered?: Element;
	rules: "closed" | "open" | "openAtEnd";
	_rules?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_SlicingSchemaInternal =
	ElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.",
			),
		_description: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for description"),
		discriminator: z
			.any()
			.array()
			.optional()
			.describe(
				"Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.",
			),
		ordered: z
			.boolean()
			.optional()
			.describe(
				"If the matching elements have to occur in the same order as defined in the profile.",
			),
		_ordered: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for ordered"),
		rules: z
			.enum(["closed", "open", "openAtEnd"])
			.describe(
				"Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.",
			),
		_rules: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for rules"),
	}).strict();

export const ElementDefinition_SlicingSchema: z.ZodType<ElementDefinition_Slicing> =
	ElementDefinition_SlicingSchemaInternal;
