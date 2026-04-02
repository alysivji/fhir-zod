// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Expressions that describe applicability criteria for the billing code. */
export interface ChargeItemDefinition_Applicability extends BackboneElement {
	/** A brief, natural language description of the condition that effectively communicates the intended semantics. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An expression that returns true or false, indicating whether the condition is satisfied. When using FHIRPath expressions, the %context environment variable must be replaced at runtime with the ChargeItem resource to which this definition is applied. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions. */
	language?: string;
	/** Extensions for language */
	_language?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ChargeItemDefinition_ApplicabilitySchemaInternal =
	BackboneElementSchemaInternal.extend({
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
		language: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_language: z.lazy(getElementSchema).optional(),
	}).strict();

export const ChargeItemDefinition_ApplicabilitySchema =
	ChargeItemDefinition_ApplicabilitySchemaInternal as z.ZodType<ChargeItemDefinition_Applicability>;
