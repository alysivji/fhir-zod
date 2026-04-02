// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Variable is set based either on element value in response body or on header field value in the response headers. */
export interface TestScript_Variable extends BackboneElement {
	/** A default, hard-coded, or user-defined value for this variable. */
	defaultValue?: string;
	/** Extensions for defaultValue */
	_defaultValue?: Element;
	/** A free text natural language description of the variable and its purpose. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The FHIRPath expression to evaluate against the fixture body. When variables are defined, only one of either expression, headerField or path must be specified. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** Will be used to grab the HTTP header field value from the headers that sourceId is pointing to. */
	headerField?: string;
	/** Extensions for headerField */
	_headerField?: Element;
	/** Displayable text string with hint help information to the user when entering a default value. */
	hint?: string;
	/** Extensions for hint */
	_hint?: Element;
	/** Descriptive name for this variable. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** XPath or JSONPath to evaluate against the fixture body.  When variables are defined, only one of either expression, headerField or path must be specified. */
	path?: string;
	/** Extensions for path */
	_path?: Element;
	/** Fixture to evaluate the XPath/JSONPath expression or the headerField  against within this variable. */
	sourceId?: string;
	/** Extensions for sourceId */
	_sourceId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_VariableSchemaInternal =
	BackboneElementSchemaInternal.extend({
		defaultValue: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_defaultValue: z.lazy(getElementSchema).optional(),
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
		headerField: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_headerField: z.lazy(getElementSchema).optional(),
		hint: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_hint: z.lazy(getElementSchema).optional(),
		name: z.string().regex(/[ \r\n\t\S]+/),
		_name: z.lazy(getElementSchema).optional(),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_path: z.lazy(getElementSchema).optional(),
		sourceId: fhirId().optional(),
		_sourceId: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_VariableSchema =
	TestScript_VariableSchemaInternal as z.ZodType<TestScript_Variable>;
