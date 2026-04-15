// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { TestScript_Setup_Action_Assert } from "./TestScript_Setup_Action_Assert";
import { TestScript_Setup_Action_AssertSchemaInternal } from "./TestScript_Setup_Action_Assert";
import type { TestScript_Setup_Action_Operation } from "./TestScript_Setup_Action_Operation";
import { TestScript_Setup_Action_OperationSchemaInternal } from "./TestScript_Setup_Action_Operation";

/** Action would contain either an operation or an assertion. */
export interface TestScript_Setup_Action extends BackboneElement {
	/** Evaluates the results of previous operations to determine if the server under test behaves appropriately. */
	assert?: TestScript_Setup_Action_Assert;
	/** The operation to perform. */
	operation?: TestScript_Setup_Action_Operation;
}

const getTestScript_Setup_Action_AssertSchema =
	(): z.ZodType<TestScript_Setup_Action_Assert> =>
		TestScript_Setup_Action_AssertSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert>;
const getTestScript_Setup_Action_OperationSchema =
	(): z.ZodType<TestScript_Setup_Action_Operation> =>
		TestScript_Setup_Action_OperationSchemaInternal as z.ZodType<TestScript_Setup_Action_Operation>;

/** @internal */
export const TestScript_Setup_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		assert: z.lazy(getTestScript_Setup_Action_AssertSchema).optional(),
		operation: z.lazy(getTestScript_Setup_Action_OperationSchema).optional(),
	}).strict();

export const TestScript_Setup_ActionSchema =
	TestScript_Setup_ActionSchemaInternal as z.ZodType<TestScript_Setup_Action>;
