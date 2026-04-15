// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { TestReport_Setup_Action } from "./TestReport_Setup_Action";
import { TestReport_Setup_ActionSchemaInternal } from "./TestReport_Setup_Action";

/** The results of the series of required setup operations before the tests were executed. */
export interface TestReport_Setup extends BackboneElement {
	/** Action would contain either an operation or an assertion. */
	action: Array<TestReport_Setup_Action>;
}

const getTestReport_Setup_ActionSchema =
	(): z.ZodType<TestReport_Setup_Action> =>
		TestReport_Setup_ActionSchemaInternal as z.ZodType<TestReport_Setup_Action>;

/** @internal */
export const TestReport_SetupSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getTestReport_Setup_ActionSchema).array(),
	}).strict();

export const TestReport_SetupSchema =
	TestReport_SetupSchemaInternal as z.ZodType<TestReport_Setup>;
