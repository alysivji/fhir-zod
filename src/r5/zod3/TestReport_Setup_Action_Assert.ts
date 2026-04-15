// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TestReport_Setup_Action_Assert_Requirement } from "./TestReport_Setup_Action_Assert_Requirement";
import { TestReport_Setup_Action_Assert_RequirementSchemaInternal } from "./TestReport_Setup_Action_Assert_Requirement";

/** The results of the assertion performed on the previous operations. */
export interface TestReport_Setup_Action_Assert extends BackboneElement {
	/** A link to further details on the result. */
	detail?: string;
	/** Extensions for detail */
	_detail?: Element;
	/** An explanatory message associated with the result. */
	message?: string;
	/** Extensions for message */
	_message?: Element;
	/** Links or references providing traceability to the testing requirements for this assert. */
	requirement?: Array<TestReport_Setup_Action_Assert_Requirement>;
	/** The result of this assertion. */
	result: "error" | "fail" | "pass" | "skip" | "warning";
	/** Extensions for result */
	_result?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestReport_Setup_Action_Assert_RequirementSchema =
	(): z.ZodType<TestReport_Setup_Action_Assert_Requirement> =>
		TestReport_Setup_Action_Assert_RequirementSchemaInternal as z.ZodType<TestReport_Setup_Action_Assert_Requirement>;

/** @internal */
export const TestReport_Setup_Action_AssertSchemaInternal =
	BackboneElementSchemaInternal.extend({
		detail: fhirString().optional(),
		_detail: z.lazy(getElementSchema).optional(),
		message: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_message: z.lazy(getElementSchema).optional(),
		requirement: z
			.lazy(getTestReport_Setup_Action_Assert_RequirementSchema)
			.array()
			.optional(),
		result: z.enum(["error", "fail", "pass", "skip", "warning"]),
		_result: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestReport_Setup_Action_AssertSchema =
	TestReport_Setup_Action_AssertSchemaInternal as z.ZodType<TestReport_Setup_Action_Assert>;
