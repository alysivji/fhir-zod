// Source: https://hl7.org/fhir/R5/elementdefinition-definitions.html#ElementDefinition.binding
// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirCanonical } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ElementDefinition_Binding_Additional } from "./ElementDefinition_Binding_Additional";
import { ElementDefinition_Binding_AdditionalSchemaInternal } from "./ElementDefinition_Binding_Additional";

/** Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri). */
export interface ElementDefinition_Binding extends Element {
  /** Additional bindings that help applications implementing this element. Additional bindings do not replace the main binding but provide more information and/or context. */
  additional?: Array<ElementDefinition_Binding_Additional>;
  /** Describes the intended use of this particular set of codes. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances. */
  strength: "example" | "extensible" | "preferred" | "required";
  /** Extensions for strength */
  _strength?: Element;
  /** Refers to the value set that identifies the set of codes the binding refers to. */
  valueSet?: string;
  /** Extensions for valueSet */
  _valueSet?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getElementDefinition_Binding_AdditionalSchema =
  (): z.ZodType<ElementDefinition_Binding_Additional> =>
    ElementDefinition_Binding_AdditionalSchemaInternal as z.ZodType<ElementDefinition_Binding_Additional>;

/** @internal */
export const ElementDefinition_BindingSchemaInternal =
  ElementSchemaInternal.extend({
    additional: z
      .lazy(getElementDefinition_Binding_AdditionalSchema)
      .array()
      .optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    strength: z.enum(["example", "extensible", "preferred", "required"]),
    _strength: z.lazy(getElementSchema).optional(),
    valueSet: fhirCanonical().optional(),
    _valueSet: z.lazy(getElementSchema).optional(),
  }).strict();

export const ElementDefinition_BindingSchema =
  ElementDefinition_BindingSchemaInternal as z.ZodType<ElementDefinition_Binding>;
