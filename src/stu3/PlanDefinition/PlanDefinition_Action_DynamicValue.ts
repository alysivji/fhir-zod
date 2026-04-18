// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result. */
export interface PlanDefinition_Action_DynamicValue extends BackboneElement {
  /** A brief, natural language description of the intended semantics of the dynamic value. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** An expression specifying the value of the customized element. */
  expression?: string;
  /** Extensions for expression */
  _expression?: Element;
  /** The media type of the language for the expression. */
  language?: string;
  /** Extensions for language */
  _language?: Element;
  /** The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. */
  path?: string;
  /** Extensions for path */
  _path?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const PlanDefinition_Action_DynamicValueSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    expression: fhirString().optional(),
    _expression: z.lazy(getElementSchema).optional(),
    language: fhirString().optional(),
    _language: z.lazy(getElementSchema).optional(),
    path: fhirString().optional(),
    _path: z.lazy(getElementSchema).optional(),
  }).strict();

export const PlanDefinition_Action_DynamicValueSchema =
  PlanDefinition_Action_DynamicValueSchemaInternal as z.ZodType<PlanDefinition_Action_DynamicValue>;
