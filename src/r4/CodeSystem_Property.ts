// Profile: http://hl7.org/fhir/StructureDefinition/CodeSystem
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirCode, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A property defines an additional slot through which additional information can be provided about a concept. */
export interface CodeSystem_Property extends BackboneElement {
	/** A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** A description of the property- why it is defined, and how its value might be used. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The type of the property value. Properties of type "code" contain a code defined by the code system (e.g. a reference to another defined concept). */
	type:
		| "boolean"
		| "code"
		| "Coding"
		| "dateTime"
		| "decimal"
		| "integer"
		| "string";
	/** Extensions for type */
	_type?: Element;
	/** Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CodeSystem_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"boolean",
			"code",
			"Coding",
			"dateTime",
			"decimal",
			"integer",
			"string",
		]),
		_type: z.lazy(getElementSchema).optional(),
		uri: fhirUri().optional(),
		_uri: z.lazy(getElementSchema).optional(),
	}).strict();

export const CodeSystem_PropertySchema =
	CodeSystem_PropertySchemaInternal as z.ZodType<CodeSystem_Property>;
