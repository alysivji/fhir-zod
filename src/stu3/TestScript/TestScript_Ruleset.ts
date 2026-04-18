// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { TestScript_Ruleset_Rule } from "./TestScript_Ruleset_Rule";
import { TestScript_Ruleset_RuleSchemaInternal } from "./TestScript_Ruleset_Rule";

/** Contains one or more rules.  Offers a way to group rules so assertions could reference the group of rules and have them all applied. */
export interface TestScript_Ruleset extends BackboneElement {
	/** Reference to the resource (containing the contents of the ruleset needed for assertions). */
	resource: Reference;
	/** The referenced rule within the external ruleset template. */
	rule: Array<TestScript_Ruleset_Rule>;
}

const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTestScript_Ruleset_RuleSchema =
	(): z.ZodType<TestScript_Ruleset_Rule> =>
		TestScript_Ruleset_RuleSchemaInternal as z.ZodType<TestScript_Ruleset_Rule>;

/** @internal */
export const TestScript_RulesetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		resource: z.lazy(getReferenceSchema),
		rule: z.lazy(getTestScript_Ruleset_RuleSchema).array(),
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

export const TestScript_RulesetSchema =
	TestScript_RulesetSchemaInternal as z.ZodType<TestScript_Ruleset>;
