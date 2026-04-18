// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** The operation performed. */
export interface TestReport_Setup_Action_Operation extends BackboneElement {
	/** A link to further details on the result. */
	detail?: string;
	/** Extensions for detail */
	_detail?: Element;
	/** An explanatory message associated with the result. */
	message?: string;
	/** Extensions for message */
	_message?: Element;
	/** The result of this operation. */
	result: "error" | "fail" | "pass" | "skip" | "warning";
	/** Extensions for result */
	_result?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestReport_Setup_Action_OperationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		detail: fhirUri().optional(),
		_detail: z.lazy(getElementSchema).optional(),
		message: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_message: z.lazy(getElementSchema).optional(),
		result: z.enum(["error", "fail", "pass", "skip", "warning"]),
		_result: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestReport_Setup_Action_OperationSchema =
	TestReport_Setup_Action_OperationSchemaInternal as z.ZodType<TestReport_Setup_Action_Operation>;
