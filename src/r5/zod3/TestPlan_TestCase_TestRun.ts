// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TestPlan_TestCase_TestRun_Script } from "./TestPlan_TestCase_TestRun_Script";
import { TestPlan_TestCase_TestRun_ScriptSchemaInternal } from "./TestPlan_TestCase_TestRun_Script";

/** The actual test to be executed. */
export interface TestPlan_TestCase_TestRun extends BackboneElement {
	/** The narrative description of the tests. */
	narrative?: string;
	/** Extensions for narrative */
	_narrative?: Element;
	/** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript. */
	script?: TestPlan_TestCase_TestRun_Script;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestPlan_TestCase_TestRun_ScriptSchema =
	(): z.ZodType<TestPlan_TestCase_TestRun_Script> =>
		TestPlan_TestCase_TestRun_ScriptSchemaInternal as z.ZodType<TestPlan_TestCase_TestRun_Script>;

/** @internal */
export const TestPlan_TestCase_TestRunSchemaInternal =
	BackboneElementSchemaInternal.extend({
		narrative: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_narrative: z.lazy(getElementSchema).optional(),
		script: z.lazy(getTestPlan_TestCase_TestRun_ScriptSchema).optional(),
	}).strict();

export const TestPlan_TestCase_TestRunSchema =
	TestPlan_TestCase_TestRunSchemaInternal as z.ZodType<TestPlan_TestCase_TestRun>;
