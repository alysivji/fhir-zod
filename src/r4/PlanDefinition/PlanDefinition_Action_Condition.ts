// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Expression } from "../Expression";
import { ExpressionSchemaInternal } from "../Expression";

/** An expression that describes applicability criteria or start/stop conditions for the action. */
export interface PlanDefinition_Action_Condition extends BackboneElement {
	/** An expression that returns true or false, indicating whether the condition is satisfied. */
	expression?: Expression;
	/** The kind of condition. */
	kind: "applicability" | "start" | "stop";
	/** Extensions for kind */
	_kind?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;

/** @internal */
export const PlanDefinition_Action_ConditionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expression: z.lazy(getExpressionSchema).optional(),
		kind: z.enum(["applicability", "start", "stop"]),
		_kind: z.lazy(getElementSchema).optional(),
	}).strict();

export const PlanDefinition_Action_ConditionSchema =
	PlanDefinition_Action_ConditionSchemaInternal as z.ZodType<PlanDefinition_Action_Condition>;
