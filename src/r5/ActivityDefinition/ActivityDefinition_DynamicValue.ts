// Source: https://hl7.org/fhir/R5/activitydefinition-definitions.html#ActivityDefinition.dynamicValue
// Profile: http://hl7.org/fhir/StructureDefinition/ActivityDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Expression } from "../Expression";
import { ExpressionSchemaInternal } from "../Expression";

/** Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the request resource that would contain the result. */
export interface ActivityDefinition_DynamicValue extends BackboneElement {
  /** An expression specifying the value of the customized element. */
  expression: Expression;
  /** The path to the element to be customized. This is the path on the resource that will hold the result of the calculation defined by the expression. The specified path SHALL be a FHIRPath resolvable on the specified target type of the ActivityDefinition, and SHALL consist only of identifiers, constant indexers, and a restricted subset of functions. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). */
  path: string;
  /** Extensions for path */
  _path?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
  ExpressionSchemaInternal as z.ZodType<Expression>;

/** @internal */
export const ActivityDefinition_DynamicValueSchemaInternal =
  BackboneElementSchemaInternal.extend({
    expression: z.lazy(getExpressionSchema),
    path: fhirString(),
    _path: z.lazy(getElementSchema).optional(),
  }).strict();

export const ActivityDefinition_DynamicValueSchema =
  ActivityDefinition_DynamicValueSchemaInternal as z.ZodType<ActivityDefinition_DynamicValue>;
