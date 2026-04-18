// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";

/** Action would contain either an operation or an assertion. */
export interface TestReport_Test_Action extends BackboneElement {
	/** The results of the assertion performed on the previous operations. */
	assert?: unknown;
	/** An operation would involve a REST request to a server. */
	operation?: unknown;
}

/** @internal */
export const TestReport_Test_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		assert: z.unknown().optional(),
		operation: z.unknown().optional(),
	}).strict();

export const TestReport_Test_ActionSchema =
	TestReport_Test_ActionSchemaInternal as z.ZodType<TestReport_Test_Action>;
