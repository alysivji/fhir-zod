// Profile: http://hl7.org/fhir/StructureDefinition/SearchParameter
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Used to define the parts of a composite search parameter. */
export interface SearchParameter_Component extends BackboneElement {
	/** The definition of the search parameter that describes this part. */
	definition: string;
	/** Extensions for definition */
	_definition?: Element;
	/** A sub-expression that defines how to extract values for this component from the output of the main SearchParameter.expression. */
	expression: string;
	/** Extensions for expression */
	_expression?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SearchParameter_ComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: fhirCanonical(),
		_definition: z.lazy(getElementSchema).optional(),
		expression: fhirString(),
		_expression: z.lazy(getElementSchema).optional(),
	}).strict();

export const SearchParameter_ComponentSchema =
	SearchParameter_ComponentSchemaInternal as z.ZodType<SearchParameter_Component>;
