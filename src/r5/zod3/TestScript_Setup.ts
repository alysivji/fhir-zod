// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { TestScript_Setup_Action } from "./TestScript_Setup_Action";
import { TestScript_Setup_ActionSchemaInternal } from "./TestScript_Setup_Action";

/** A series of required setup operations before tests are executed. */
export interface TestScript_Setup extends BackboneElement {
	/** Action would contain either an operation or an assertion. */
	action: Array<TestScript_Setup_Action>;
}

const getTestScript_Setup_ActionSchema =
	(): z.ZodType<TestScript_Setup_Action> =>
		TestScript_Setup_ActionSchemaInternal as z.ZodType<TestScript_Setup_Action>;

/** @internal */
export const TestScript_SetupSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getTestScript_Setup_ActionSchema).array(),
	}).strict();

export const TestScript_SetupSchema =
	TestScript_SetupSchemaInternal as z.ZodType<TestScript_Setup>;
