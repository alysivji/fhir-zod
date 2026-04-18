// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Each rule template can take one or more parameters for rule evaluation. */
export interface TestScript_Setup_Action_Assert_Ruleset_Rule_Param
	extends BackboneElement {
	/** Descriptive name for this parameter that matches the external assert ruleset rule parameter name. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The value for the parameter that will be passed on to the external ruleset rule template. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchema =
	TestScript_Setup_Action_Assert_Ruleset_Rule_ParamSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Ruleset_Rule_Param>;
