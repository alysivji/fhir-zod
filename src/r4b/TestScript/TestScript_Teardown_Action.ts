// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";

/** The teardown action will only contain an operation. */
export interface TestScript_Teardown_Action extends BackboneElement {
	/** An operation would involve a REST request to a server. */
	operation: unknown;
}

/** @internal */
export const TestScript_Teardown_ActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		operation: z.custom<unknown>((value) => value !== undefined),
	}).strict();

export const TestScript_Teardown_ActionSchema =
	TestScript_Teardown_ActionSchemaInternal as z.ZodType<TestScript_Teardown_Action>;
