// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";

/** The test assertions - the expectations of test results from the execution of the test case. */
export interface TestPlan_TestCase_Assertion extends BackboneElement {
  /** The focus or object of the assertion i.e. a resource. */
  object?: Array<CodeableReference>;
  /** The test assertion - the expected outcome from the test case execution. */
  result?: Array<CodeableReference>;
  /** The test assertion type - this can be used to group assertions as 'required' or 'optional', or can be used for other classification of the assertion. */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const TestPlan_TestCase_AssertionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    object: z.lazy(getCodeableReferenceSchema).array().optional(),
    result: z.lazy(getCodeableReferenceSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const TestPlan_TestCase_AssertionSchema =
  TestPlan_TestCase_AssertionSchemaInternal as z.ZodType<TestPlan_TestCase_Assertion>;
