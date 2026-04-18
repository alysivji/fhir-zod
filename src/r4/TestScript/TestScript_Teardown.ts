// Source: https://hl7.org/fhir/R4/testscript-definitions.html#TestScript.teardown
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { TestScript_Teardown_Action } from "./TestScript_Teardown_Action";
import { TestScript_Teardown_ActionSchemaInternal } from "./TestScript_Teardown_Action";

/** A series of operations required to clean up after all the tests are executed (successfully or otherwise). */
export interface TestScript_Teardown extends BackboneElement {
  /** The teardown action will only contain an operation. */
  action: Array<TestScript_Teardown_Action>;
}

const getTestScript_Teardown_ActionSchema =
  (): z.ZodType<TestScript_Teardown_Action> =>
    TestScript_Teardown_ActionSchemaInternal as z.ZodType<TestScript_Teardown_Action>;

/** @internal */
export const TestScript_TeardownSchemaInternal =
  BackboneElementSchemaInternal.extend({
    action: z.lazy(getTestScript_Teardown_ActionSchema).array(),
  }).strict();

export const TestScript_TeardownSchema =
  TestScript_TeardownSchemaInternal as z.ZodType<TestScript_Teardown>;
