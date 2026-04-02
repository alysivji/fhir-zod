// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";

export interface ElementDefinition_Mapping extends Element {
	comment?: string;
	_comment?: Element;
	identity: string;
	_identity?: Element;
	language?: string;
	_language?: Element;
	map: string;
	_map?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_MappingSchemaInternal =
	ElementSchemaInternal.extend({
		comment: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Comments that provide information about the mapping or its use.",
			),
		_comment: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for comment"),
		identity: fhirId().describe(
			"An internal reference to the definition of a mapping.",
		),
		_identity: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for identity"),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Identifies the computable language in which mapping.map is expressed.",
			),
		_language: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for language"),
		map: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Expresses what part of the target specification corresponds to this element.",
			),
		_map: z.lazy(getElementSchema).optional().describe("Extensions for map"),
	}).strict();

export const ElementDefinition_MappingSchema: z.ZodType<ElementDefinition_Mapping> =
	ElementDefinition_MappingSchemaInternal;
