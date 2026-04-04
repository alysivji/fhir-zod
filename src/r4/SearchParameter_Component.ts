// Profile: http://hl7.org/fhir/StructureDefinition/SearchParameter
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../shared/fhir-primitives";
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
