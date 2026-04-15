// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { TestScript_Rule_Param } from "./TestScript_Rule_Param";
import { TestScript_Rule_ParamSchemaInternal } from "./TestScript_Rule_Param";

/** Assert rule to be used in one or more asserts within the test script. */
export interface TestScript_Rule extends BackboneElement {
	/** Each rule template can take one or more parameters for rule evaluation. */
	param?: Array<TestScript_Rule_Param>;
	/** Reference to the resource (containing the contents of the rule needed for assertions). */
	resource: Reference;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTestScript_Rule_ParamSchema = (): z.ZodType<TestScript_Rule_Param> =>
	TestScript_Rule_ParamSchemaInternal as z.ZodType<TestScript_Rule_Param>;

/** @internal */
export const TestScript_RuleSchemaInternal =
	BackboneElementSchemaInternal.extend({
		param: z.lazy(getTestScript_Rule_ParamSchema).array().optional(),
		resource: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.resource,
				"resource",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const TestScript_RuleSchema =
	TestScript_RuleSchemaInternal as z.ZodType<TestScript_Rule>;
