// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation. */
export interface CapabilityStatement_Rest_Resource_SearchParam
	extends BackboneElement {
	/** An absolute URI that is a formal reference to where this parameter was first defined, so that a client can be confident of the meaning of the search parameter (a reference to [SearchParameter.url](searchparameter-definitions.html#SearchParameter.url)). This element SHALL be populated if the search parameter refers to a SearchParameter defined by the FHIR core specification or externally defined IGs. */
	definition?: string;
	/** Extensions for definition */
	_definition?: Element;
	/** This allows documentation of any distinct behaviors about how the search parameter is used.  For example, text matching algorithms. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** The name of the search parameter used in the interface. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The type of value a search parameter refers to, and how the content is interpreted. */
	type:
		| "composite"
		| "date"
		| "number"
		| "quantity"
		| "reference"
		| "special"
		| "string"
		| "token"
		| "uri";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_Resource_SearchParamSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: fhirCanonical().optional(),
		_definition: z.lazy(getElementSchema).optional(),
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"composite",
			"date",
			"number",
			"quantity",
			"reference",
			"special",
			"string",
			"token",
			"uri",
		]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const CapabilityStatement_Rest_Resource_SearchParamSchema =
	CapabilityStatement_Rest_Resource_SearchParamSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_SearchParam>;
