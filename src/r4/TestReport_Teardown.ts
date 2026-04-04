// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { TestReport_Teardown_Action } from "./TestReport_Teardown_Action";
import { TestReport_Teardown_ActionSchemaInternal } from "./TestReport_Teardown_Action";

/** The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise). */
export interface TestReport_Teardown extends BackboneElement {
	/** The teardown action will only contain an operation. */
	action: Array<TestReport_Teardown_Action>;
}

const getTestReport_Teardown_ActionSchema =
	(): z.ZodType<TestReport_Teardown_Action> =>
		TestReport_Teardown_ActionSchemaInternal as z.ZodType<TestReport_Teardown_Action>;

/** @internal */
export const TestReport_TeardownSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getTestReport_Teardown_ActionSchema).array(),
	}).strict();

export const TestReport_TeardownSchema =
	TestReport_TeardownSchemaInternal as z.ZodType<TestReport_Teardown>;
