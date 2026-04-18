// Source: https://hl7.org/fhir/STU3/testscript-definitions.html#TestScript.teardown.action
// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

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
