// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { TestPlan_TestCase_Assertion } from "./TestPlan_TestCase_Assertion";
import { TestPlan_TestCase_AssertionSchemaInternal } from "./TestPlan_TestCase_Assertion";
import type { TestPlan_TestCase_Dependency } from "./TestPlan_TestCase_Dependency";
import { TestPlan_TestCase_DependencySchemaInternal } from "./TestPlan_TestCase_Dependency";
import type { TestPlan_TestCase_TestData } from "./TestPlan_TestCase_TestData";
import { TestPlan_TestCase_TestDataSchemaInternal } from "./TestPlan_TestCase_TestData";
import type { TestPlan_TestCase_TestRun } from "./TestPlan_TestCase_TestRun";
import { TestPlan_TestCase_TestRunSchemaInternal } from "./TestPlan_TestCase_TestRun";

/** The individual test cases that are part of this plan, when they they are made explicit. */
export interface TestPlan_TestCase extends BackboneElement {
	/** The test assertions - the expectations of test results from the execution of the test case. */
	assertion?: Array<TestPlan_TestCase_Assertion>;
	/** The required criteria to execute the test case - e.g. preconditions, previous tests. */
	dependency?: Array<TestPlan_TestCase_Dependency>;
	/** The scope or artifact covered by the case, when the individual test case is associated with a testable artifact. */
	scope?: Array<Reference>;
	/** Sequence of test case - an ordinal number that indicates the order for the present test case in the test plan. */
	sequence?: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** The test data used in the test case. */
	testData?: Array<TestPlan_TestCase_TestData>;
	/** The actual test to be executed. */
	testRun?: Array<TestPlan_TestCase_TestRun>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTestPlan_TestCase_AssertionSchema =
	(): z.ZodType<TestPlan_TestCase_Assertion> =>
		TestPlan_TestCase_AssertionSchemaInternal as z.ZodType<TestPlan_TestCase_Assertion>;
const getTestPlan_TestCase_DependencySchema =
	(): z.ZodType<TestPlan_TestCase_Dependency> =>
		TestPlan_TestCase_DependencySchemaInternal as z.ZodType<TestPlan_TestCase_Dependency>;
const getTestPlan_TestCase_TestDataSchema =
	(): z.ZodType<TestPlan_TestCase_TestData> =>
		TestPlan_TestCase_TestDataSchemaInternal as z.ZodType<TestPlan_TestCase_TestData>;
const getTestPlan_TestCase_TestRunSchema =
	(): z.ZodType<TestPlan_TestCase_TestRun> =>
		TestPlan_TestCase_TestRunSchemaInternal as z.ZodType<TestPlan_TestCase_TestRun>;

/** @internal */
export const TestPlan_TestCaseSchemaInternal =
	BackboneElementSchemaInternal.extend({
		assertion: z.lazy(getTestPlan_TestCase_AssertionSchema).array().optional(),
		dependency: z
			.lazy(getTestPlan_TestCase_DependencySchema)
			.array()
			.optional(),
		scope: z.lazy(getReferenceSchema).array().optional(),
		sequence: z.number().int().optional(),
		_sequence: z.lazy(getElementSchema).optional(),
		testData: z.lazy(getTestPlan_TestCase_TestDataSchema).array().optional(),
		testRun: z.lazy(getTestPlan_TestCase_TestRunSchema).array().optional(),
	}).strict();

export const TestPlan_TestCaseSchema =
	TestPlan_TestCaseSchemaInternal as z.ZodType<TestPlan_TestCase>;
