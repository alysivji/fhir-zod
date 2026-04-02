// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
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
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
		identity: fhirId(),
		_identity: z.lazy(getElementSchema).optional(),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		_language: z.lazy(getElementSchema).optional(),
		map: z.string().regex(/[ \r\n\t\S]+/),
		_map: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_MappingSchema =
	ElementDefinition_MappingSchemaInternal as z.ZodType<ElementDefinition_Mapping>;
