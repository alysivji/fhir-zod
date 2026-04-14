// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";

/** The teardown action will only contain an operation. */
export interface TestReport_Teardown_Action extends BackboneElement {
	/** An operation would involve a REST request to a server. */
	operation: unknown;
}

/** @internal */
export const TestReport_Teardown_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		operation: z.custom<unknown>((value) => value !== undefined),
	}).strict();

export const TestReport_Teardown_ActionSchema =
	TestReport_Teardown_ActionSchemaInternal as z.ZodType<TestReport_Teardown_Action>;
