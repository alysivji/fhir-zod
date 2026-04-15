// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirId, fhirString } from "../shared/fhir-primitives";
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
		documentation: fhirString().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		mode: z.enum(["source", "target"]),
		_mode: z.lazy(getElementSchema).optional(),
		name: fhirId(),
		_name: z.lazy(getElementSchema).optional(),
		type: fhirString().optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const StructureMap_Group_InputSchema =
	StructureMap_Group_InputSchemaInternal as z.ZodType<StructureMap_Group_Input>;
