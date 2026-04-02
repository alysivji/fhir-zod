// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

export interface ElementDefinition_Binding extends Element {
	description?: string;
	_description?: Element;
	strength: "example" | "extensible" | "preferred" | "required";
	_strength?: Element;
	valueSet?: string;
	_valueSet?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_BindingSchemaInternal =
	ElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("Describes the intended use of this particular set of codes."),
		_description: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for description"),
		strength: z
			.enum(["example", "extensible", "preferred", "required"])
			.describe(
				"Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.",
			),
		_strength: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for strength"),
		valueSet: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Refers to the value set that identifies the set of codes the binding refers to.",
			),
		_valueSet: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueSet"),
	}).strict();

export const ElementDefinition_BindingSchema: z.ZodType<ElementDefinition_Binding> =
	ElementDefinition_BindingSchemaInternal;
