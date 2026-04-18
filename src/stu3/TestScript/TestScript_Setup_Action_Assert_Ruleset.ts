// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirId } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { TestScript_Setup_Action_Assert_Ruleset_Rule } from "./TestScript_Setup_Action_Assert_Ruleset_Rule";
import { TestScript_Setup_Action_Assert_Ruleset_RuleSchemaInternal } from "./TestScript_Setup_Action_Assert_Ruleset_Rule";

/** The TestScript.ruleset this assert will evaluate. */
export interface TestScript_Setup_Action_Assert_Ruleset
	extends BackboneElement {
	/** The referenced rule within the external ruleset template. */
	rule?: Array<TestScript_Setup_Action_Assert_Ruleset_Rule>;
	/** The TestScript.ruleset id value this assert will evaluate. */
	rulesetId: string;
	/** Extensions for rulesetId */
	_rulesetId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestScript_Setup_Action_Assert_Ruleset_RuleSchema =
	(): z.ZodType<TestScript_Setup_Action_Assert_Ruleset_Rule> =>
		TestScript_Setup_Action_Assert_Ruleset_RuleSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Ruleset_Rule>;

/** @internal */
export const TestScript_Setup_Action_Assert_RulesetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		rule: z
			.lazy(getTestScript_Setup_Action_Assert_Ruleset_RuleSchema)
			.array()
			.optional(),
		rulesetId: fhirId(),
		_rulesetId: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Setup_Action_Assert_RulesetSchema =
	TestScript_Setup_Action_Assert_RulesetSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Ruleset>;
