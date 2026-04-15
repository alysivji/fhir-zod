// Profile: http://hl7.org/fhir/StructureDefinition/CodeSystem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCode, fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A filter that can be used in a value set compose statement when selecting concepts using a filter. */
export interface CodeSystem_Filter extends BackboneElement {
	/** The code that identifies this filter when it is used as a filter in [ValueSet](valueset.html#).compose.include.filter. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** A description of how or why the filter is used. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A list of operators that can be used with the filter. */
	operator: Array<
		| "="
		| "child-of"
		| "descendent-leaf"
		| "descendent-of"
		| "exists"
		| "generalizes"
		| "in"
		| "is-a"
		| "is-not-a"
		| "not-in"
		| "regex"
		| null
	>;
	/** Extensions for operator */
	_operator?: Array<Element | null>;
	/** A description of what the value for the filter should be. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CodeSystem_FilterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		operator: z
			.enum([
				"=",
				"child-of",
				"descendent-leaf",
				"descendent-of",
				"exists",
				"generalizes",
				"in",
				"is-a",
				"is-not-a",
				"not-in",
				"regex",
			])
			.nullable()
			.array(),
		_operator: z.lazy(getElementSchema).nullable().array().optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.operator,
				record._operator,
				"operator",
				"_operator",
				ctx,
			);
		});

export const CodeSystem_FilterSchema =
	CodeSystem_FilterSchemaInternal as z.ZodType<CodeSystem_Filter>;
