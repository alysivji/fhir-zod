// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirCanonical,
	fhirCode,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A property defines a slot through which additional information can be provided about a map from source -> target. */
export interface ConceptMap_Property extends BackboneElement {
	/** A code that is used to identify the property. The code is used internally (in ConceptMap.group.element.target.property.code) and also in the $translate operation. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** A description of the property - why it is defined, and how its value might be used. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The CodeSystem that defines the codes from which values of type ```code``` in property values. */
	system?: string;
	/** Extensions for system */
	_system?: Element;
	/** The type of the property value. */
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
	/** Reference to the formal meaning of the property. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		system: fhirCanonical().optional(),
		_system: z.lazy(getElementSchema).optional(),
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

export const ConceptMap_PropertySchema =
	ConceptMap_PropertySchemaInternal as z.ZodType<ConceptMap_Property>;
