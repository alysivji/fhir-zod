// Profile: http://hl7.org/fhir/StructureDefinition/RequestGroup
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";

/** An expression that describes applicability criteria, or start/stop conditions for the action. */
export interface RequestGroup_Action_Condition extends BackboneElement {
	/** An expression that returns true or false, indicating whether or not the condition is satisfied. */
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
export const RequestGroup_Action_ConditionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expression: z.lazy(getExpressionSchema).optional(),
		kind: z.enum(["applicability", "start", "stop"]),
		_kind: z.lazy(getElementSchema).optional(),
	}).strict();

export const RequestGroup_Action_ConditionSchema =
	RequestGroup_Action_ConditionSchemaInternal as z.ZodType<RequestGroup_Action_Condition>;
