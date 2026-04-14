// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Select concepts by specify a matching criterion based on the properties (including relationships) defined by the system, or on filters defined by the system. If multiple filters are specified, they SHALL all be true. */
export interface ValueSet_Compose_Include_Filter extends BackboneElement {
	/** The kind of operation to perform as a part of the filter criteria. */
	op:
		| "="
		| "descendent-of"
		| "exists"
		| "generalizes"
		| "in"
		| "is-a"
		| "is-not-a"
		| "not-in"
		| "regex";
	/** Extensions for op */
	_op?: Element;
	/** A code that identifies a property or a filter defined in the code system. */
	property: string;
	/** Extensions for property */
	_property?: Element;
	/** The match value may be either a code defined by the system, or a string value, which is a regex match on the literal string of the property value  (if the filter represents a property defined in CodeSystem) or of the system filter value (if the filter represents a filter defined in CodeSystem) when the operation is 'regex', or one of the values (true and false), when the operation is 'exists'. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ValueSet_Compose_Include_FilterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		op: z.enum([
			"=",
			"descendent-of",
			"exists",
			"generalizes",
			"in",
			"is-a",
			"is-not-a",
			"not-in",
			"regex",
		]),
		_op: z.lazy(getElementSchema).optional(),
		property: fhirCode(),
		_property: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const ValueSet_Compose_Include_FilterSchema =
	ValueSet_Compose_Include_FilterSchemaInternal as z.ZodType<ValueSet_Compose_Include_Filter>;
