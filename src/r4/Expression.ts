// Profile: http://hl7.org/fhir/StructureDefinition/Expression
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:25:07.426Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
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

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const ExpressionSchemaInternal = z
	.object({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		expression: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_expression: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		language: z.string().regex(/[^\s]+(\s[^\s]+)*/),
		_language: z.lazy(getElementSchema).optional(),
		name: fhirId().optional(),
		_name: z.lazy(getElementSchema).optional(),
		reference: z.string().regex(/\S*/).optional(),
		_reference: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const ExpressionSchema: z.ZodType<Expression> = ExpressionSchemaInternal;
