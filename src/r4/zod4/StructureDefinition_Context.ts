// Profile: http://hl7.org/fhir/StructureDefinition/StructureDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Identifies the types of resource or data type elements to which the extension can be applied. */
export interface StructureDefinition_Context extends BackboneElement {
	/** An expression that defines where an extension can be used in resources. */
	expression: string;
	/** Extensions for expression */
	_expression?: Element;
	/** Defines how to interpret the expression that defines what the context of the extension is. */
	type: "element" | "extension" | "fhirpath";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureDefinition_ContextSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expression: fhirString(),
		_expression: z.lazy(getElementSchema).optional(),
		type: z.enum(["element", "extension", "fhirpath"]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const StructureDefinition_ContextSchema =
	StructureDefinition_ContextSchemaInternal as z.ZodType<StructureDefinition_Context>;
