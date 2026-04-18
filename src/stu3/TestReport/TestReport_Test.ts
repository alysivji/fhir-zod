// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { TestReport_Test_Action } from "./TestReport_Test_Action";
import { TestReport_Test_ActionSchemaInternal } from "./TestReport_Test_Action";

/** A test executed from the test script. */
export interface TestReport_Test extends BackboneElement {
	/** Action would contain either an operation or an assertion. */
	action: Array<TestReport_Test_Action>;
	/** A short description of the test used by test engines for tracking and reporting purposes. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The name of this test used for tracking/logging purposes by test engines. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestReport_Test_ActionSchema = (): z.ZodType<TestReport_Test_Action> =>
	TestReport_Test_ActionSchemaInternal as z.ZodType<TestReport_Test_Action>;

/** @internal */
export const TestReport_TestSchemaInternal =
	BackboneElementSchemaInternal.extend({
		action: z.lazy(getTestReport_Test_ActionSchema).array(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestReport_TestSchema =
	TestReport_TestSchemaInternal as z.ZodType<TestReport_Test>;
