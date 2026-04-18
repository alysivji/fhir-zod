// Source: https://hl7.org/fhir/R4B/testscript-definitions.html#TestScript.test.action
// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";

/** Action would contain either an operation or an assertion. */
export interface TestScript_Test_Action extends BackboneElement {
  /** Evaluates the results of previous operations to determine if the server under test behaves appropriately. */
  assert?: unknown;
  /** An operation would involve a REST request to a server. */
  operation?: unknown;
}

/** @internal */
export const TestScript_Test_ActionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    assert: z.unknown().optional(),
    operation: z.unknown().optional(),
  }).strict();

export const TestScript_Test_ActionSchema =
  TestScript_Test_ActionSchemaInternal as z.ZodType<TestScript_Test_Action>;
