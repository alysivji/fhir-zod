// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Coding } from "./Coding";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { CodingSchemaInternal } from "./Coding";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface DataRequirement_CodeFilter extends Element {
	code?: Array<Coding>;
	path?: string;
	_path?: Element;
	searchParam?: string;
	_searchParam?: Element;
	valueSet?: string;
	_valueSet?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> => CodingSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const DataRequirement_CodeFilterSchemaInternal = z
	.object({
		code: z
			.lazy(getCodingSchema)
			.array()
			.optional()
			.describe(
				"The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The code-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept.",
			),
		_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
		searchParam: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.",
			),
		_searchParam: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for searchParam"),
		valueSet: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset.",
			),
		_valueSet: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueSet"),
	})
	.strict();

export const DataRequirement_CodeFilterSchema: z.ZodType<DataRequirement_CodeFilter> =
	DataRequirement_CodeFilterSchemaInternal;
