// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:25:07.426Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
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

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const DataRequirement_SortSchemaInternal = z
	.object({
		direction: z.enum(["ascending", "descending"]),
		_direction: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		path: z.string().regex(/[ \r\n\t\S]+/),
		_path: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const DataRequirement_SortSchema: z.ZodType<DataRequirement_Sort> =
	DataRequirement_SortSchemaInternal;
