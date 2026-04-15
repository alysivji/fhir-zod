// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirCode,
	fhirId,
	fhirString,
} from "../../shared/fhir-primitives-zod4";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Identifies a concept from an external specification that roughly corresponds to this element. */
export interface ElementDefinition_Mapping extends Element {
	/** Comments that provide information about the mapping or its use. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** An internal reference to the definition of a mapping. */
	identity: string;
	/** Extensions for identity */
	_identity?: Element;
	/** Identifies the computable language in which mapping.map is expressed. */
	language?: string;
	/** Extensions for language */
	_language?: Element;
	/** Expresses what part of the target specification corresponds to this element. */
	map: string;
	/** Extensions for map */
	_map?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ElementDefinition_MappingSchemaInternal =
	ElementSchemaInternal.extend({
		comment: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
		identity: fhirId(),
		_identity: z.lazy(getElementSchema).optional(),
		language: fhirCode().optional(),
		_language: z.lazy(getElementSchema).optional(),
		map: fhirString(),
		_map: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_MappingSchema =
	ElementDefinition_MappingSchemaInternal as z.ZodType<ElementDefinition_Mapping>;
