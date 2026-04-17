// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** An expression that describes applicability criteria, or start/stop conditions for the action. */
export interface PlanDefinition_Action_Condition extends BackboneElement {
  /** A brief, natural language description of the condition that effectively communicates the intended semantics. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** An expression that returns true or false, indicating whether or not the condition is satisfied. */
  expression?: string;
  /** Extensions for expression */
  _expression?: Element;
  /** The kind of condition. */
  kind: "applicability" | "start" | "stop";
  /** Extensions for kind */
  _kind?: Element;
  /** The media type of the language for the expression. */
  language?: string;
  /** Extensions for language */
  _language?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const PlanDefinition_Action_ConditionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    expression: fhirString().optional(),
    _expression: z.lazy(getElementSchema).optional(),
    kind: z.enum(["applicability", "start", "stop"]),
    _kind: z.lazy(getElementSchema).optional(),
    language: fhirString().optional(),
    _language: z.lazy(getElementSchema).optional(),
  }).strict();

export const PlanDefinition_Action_ConditionSchema =
  PlanDefinition_Action_ConditionSchemaInternal as z.ZodType<PlanDefinition_Action_Condition>;
