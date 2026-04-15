// Profile: http://hl7.org/fhir/StructureDefinition/ActivityDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result. */
export interface ActivityDefinition_DynamicValue extends BackboneElement {
	/** A brief, natural language description of the intended semantics of the dynamic value. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An expression specifying the value of the customized element. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** The media type of the language for the expression. */
	language?: string;
	/** Extensions for language */
	_language?: Element;
	/** The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. */
	path?: string;
	/** Extensions for path */
	_path?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ActivityDefinition_DynamicValueSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		expression: fhirString().optional(),
		_expression: z.lazy(getElementSchema).optional(),
		language: fhirString().optional(),
		_language: z.lazy(getElementSchema).optional(),
		path: fhirString().optional(),
		_path: z.lazy(getElementSchema).optional(),
	}).strict();

export const ActivityDefinition_DynamicValueSchema =
	ActivityDefinition_DynamicValueSchemaInternal as z.ZodType<ActivityDefinition_DynamicValue>;
