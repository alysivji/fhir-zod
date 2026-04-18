// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { TestReport_Setup_Action_Assert } from "./TestReport_Setup_Action_Assert";
import { TestReport_Setup_Action_AssertSchemaInternal } from "./TestReport_Setup_Action_Assert";
import type { TestReport_Setup_Action_Operation } from "./TestReport_Setup_Action_Operation";
import { TestReport_Setup_Action_OperationSchemaInternal } from "./TestReport_Setup_Action_Operation";

/** Action would contain either an operation or an assertion. */
export interface TestReport_Setup_Action extends BackboneElement {
  /** The results of the assertion performed on the previous operations. */
  assert?: TestReport_Setup_Action_Assert;
  /** The operation performed. */
  operation?: TestReport_Setup_Action_Operation;
}

const getTestReport_Setup_Action_AssertSchema =
  (): z.ZodType<TestReport_Setup_Action_Assert> =>
    TestReport_Setup_Action_AssertSchemaInternal as z.ZodType<TestReport_Setup_Action_Assert>;
const getTestReport_Setup_Action_OperationSchema =
  (): z.ZodType<TestReport_Setup_Action_Operation> =>
    TestReport_Setup_Action_OperationSchemaInternal as z.ZodType<TestReport_Setup_Action_Operation>;

/** @internal */
export const TestReport_Setup_ActionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    assert: z.lazy(getTestReport_Setup_Action_AssertSchema).optional(),
    operation: z.lazy(getTestReport_Setup_Action_OperationSchema).optional(),
  }).strict();

export const TestReport_Setup_ActionSchema =
  TestReport_Setup_ActionSchemaInternal as z.ZodType<TestReport_Setup_Action>;
