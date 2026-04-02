// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri). */
export interface ElementDefinition_Binding extends Element {
	/** Describes the intended use of this particular set of codes. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances. */
	strength: "example" | "extensible" | "preferred" | "required";
	/** Extensions for strength */
	_strength?: Element;
	/** Refers to the value set that identifies the set of codes the binding refers to. */
	valueSet?: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_BindingSchemaInternal =
	ElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		strength: z.enum(["example", "extensible", "preferred", "required"]),
		_strength: z.lazy(getElementSchema).optional(),
		valueSet: z.string().regex(/\S*/).optional(),
		_valueSet: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_BindingSchema: z.ZodType<ElementDefinition_Binding> =
	ElementDefinition_BindingSchemaInternal;
