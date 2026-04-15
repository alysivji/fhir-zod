// Profile: http://hl7.org/fhir/StructureDefinition/Expression
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import {
	fhirCode,
	fhirId,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Expression Type: A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used. */
export interface Expression extends Element {
	/** A brief, natural language description of the condition that effectively communicates the intended semantics. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An expression in the specified language that returns a value. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** The media type of the language for the expression. */
	language: string;
	/** Extensions for language */
	_language?: Element;
	/** A short name assigned to the expression to allow for multiple reuse of the expression in the context where it is defined. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A URI that defines where the expression is found. */
	reference?: string;
	/** Extensions for reference */
	_reference?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const ExpressionSchemaInternal = z
	.object({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		expression: fhirString().optional(),
		_expression: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		language: fhirCode(),
		_language: z.lazy(getElementSchema).optional(),
		name: fhirId().optional(),
		_name: z.lazy(getElementSchema).optional(),
		reference: fhirUri().optional(),
		_reference: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const ExpressionSchema =
	ExpressionSchemaInternal as z.ZodType<Expression>;
