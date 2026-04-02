// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TestScript_Test_Action } from "./TestScript_Test_Action";
import { TestScript_Test_ActionSchemaInternal } from "./TestScript_Test_Action";

/** A test in this script. */
export interface TestScript_Test extends BackboneElement {
	/** Action would contain either an operation or an assertion. */
	action: Array<TestScript_Test_Action>;
	/** A short description of the test used by test engines for tracking and reporting purposes. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The name of this test used for tracking/logging purposes by test engines. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestScript_Test_ActionSchema = (): z.ZodType<TestScript_Test_Action> =>
	TestScript_Test_ActionSchemaInternal as z.ZodType<TestScript_Test_Action>;

/** @internal */
export const TestScript_TestSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getTestScript_Test_ActionSchema).array(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_name: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_TestSchema =
	TestScript_TestSchemaInternal as z.ZodType<TestScript_Test>;
