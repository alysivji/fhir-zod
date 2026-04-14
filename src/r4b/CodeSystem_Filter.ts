// Profile: http://hl7.org/fhir/StructureDefinition/CodeSystem
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
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
		| "descendent-of"
		| "exists"
		| "generalizes"
		| "in"
		| "is-a"
		| "is-not-a"
		| "not-in"
		| "regex"
	>;
	/** Extensions for operator */
	_operator?: Array<Element>;
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
				"descendent-of",
				"exists",
				"generalizes",
				"in",
				"is-a",
				"is-not-a",
				"not-in",
				"regex",
			])
			.array(),
		_operator: z.lazy(getElementSchema).array().optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const CodeSystem_FilterSchema =
	CodeSystem_FilterSchemaInternal as z.ZodType<CodeSystem_Filter>;
