// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

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
	/** The result of this assertion. */
	result: "error" | "fail" | "pass" | "skip" | "warning";
	/** Extensions for result */
	_result?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestReport_Setup_Action_AssertSchemaInternal =
	BackboneElementSchemaInternal.extend({
		detail: fhirString().optional(),
		_detail: z.lazy(getElementSchema).optional(),
		message: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_message: z.lazy(getElementSchema).optional(),
		result: z.enum(["error", "fail", "pass", "skip", "warning"]),
		_result: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestReport_Setup_Action_AssertSchema =
	TestReport_Setup_Action_AssertSchemaInternal as z.ZodType<TestReport_Setup_Action_Assert>;
