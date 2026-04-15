// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TestScript_Setup_Action_Assert_Ruleset_Rule_Param } from "./TestScript_Setup_Action_Assert_Ruleset_Rule_Param";
import { TestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchemaInternal } from "./TestScript_Setup_Action_Assert_Ruleset_Rule_Param";

/** The referenced rule within the external ruleset template. */
export interface TestScript_Setup_Action_Assert_Ruleset_Rule
	extends BackboneElement {
	/** Each rule template can take one or more parameters for rule evaluation. */
	param?: Array<TestScript_Setup_Action_Assert_Ruleset_Rule_Param>;
	/** Id of the referenced rule within the external ruleset template. */
	ruleId: string;
	/** Extensions for ruleId */
	_ruleId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchema =
	(): z.ZodType<TestScript_Setup_Action_Assert_Ruleset_Rule_Param> =>
		TestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Ruleset_Rule_Param>;

/** @internal */
export const TestScript_Setup_Action_Assert_Ruleset_RuleSchemaInternal =
	BackboneElementSchemaInternal.extend({
		param: z
			.lazy(getTestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchema)
			.array()
			.optional(),
		ruleId: fhirId(),
		_ruleId: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Setup_Action_Assert_Ruleset_RuleSchema =
	TestScript_Setup_Action_Assert_Ruleset_RuleSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Ruleset_Rule>;
