// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Specifies the order of the results to be returned. */
export interface DataRequirement_Sort extends Element {
	/** The direction of the sort, ascending or descending. */
	direction: "ascending" | "descending";
	/** Extensions for direction */
	_direction?: Element;
	/** The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. */
	path: string;
	/** Extensions for path */
	_path?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const DataRequirement_SortSchemaInternal = z
	.object({
		direction: z.enum(["ascending", "descending"]),
		_direction: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		path: fhirString(),
		_path: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const DataRequirement_SortSchema =
	DataRequirement_SortSchemaInternal as z.ZodType<DataRequirement_Sort>;
