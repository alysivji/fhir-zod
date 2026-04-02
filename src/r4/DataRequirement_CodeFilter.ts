// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed. */
export interface DataRequirement_CodeFilter extends Element {
	/** The codes for the code filter. If values are given, the filter will return only those data items for which the code-valued attribute specified by the path has a value that is one of the specified codes. If codes are specified in addition to a value set, the filter returns items matching a code in the value set or one of the specified codes. */
	code?: Array<Coding>;
	/** The code-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type code, Coding, or CodeableConcept. */
	path?: string;
	/** Extensions for path */
	_path?: Element;
	/** A token parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept. */
	searchParam?: string;
	/** Extensions for searchParam */
	_searchParam?: Element;
	/** The valueset for the code filter. The valueSet and code elements are additive. If valueSet is specified, the filter will return only those data items for which the value of the code-valued element specified in the path is a member of the specified valueset. */
	valueSet?: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const DataRequirement_CodeFilterSchemaInternal = z
	.object({
		code: z.lazy(getCodingSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_path: z.lazy(getElementSchema).optional(),
		searchParam: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_searchParam: z.lazy(getElementSchema).optional(),
		valueSet: z.string().regex(/\S*/).optional(),
		_valueSet: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const DataRequirement_CodeFilterSchema =
	DataRequirement_CodeFilterSchemaInternal as z.ZodType<DataRequirement_CodeFilter>;
