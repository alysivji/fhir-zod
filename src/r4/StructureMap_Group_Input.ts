// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A name assigned to an instance of data. The instance must be provided when the mapping is invoked. */
export interface StructureMap_Group_Input extends BackboneElement {
	/** Documentation for this instance of data. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** Mode for this instance of data. */
	mode: "source" | "target";
	/** Extensions for mode */
	_mode?: Element;
	/** Name for this instance of data. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Type for this instance of data. */
	type?: string;
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_Group_InputSchemaInternal =
	BackboneElementSchemaInternal.extend({
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		mode: z.enum(["source", "target"]),
		_mode: z.lazy(getElementSchema).optional(),
		name: fhirId(),
		_name: z.lazy(getElementSchema).optional(),
		type: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const StructureMap_Group_InputSchema =
	StructureMap_Group_InputSchemaInternal as z.ZodType<StructureMap_Group_Input>;
