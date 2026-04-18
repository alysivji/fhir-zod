// Source: https://hl7.org/fhir/STU3/elementdefinition-definitions.html#ElementDefinition.binding
// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity), or the data types (string, uri). */
export interface ElementDefinition_Binding extends Element {
  /** Describes the intended use of this particular set of codes. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances. */
  strength: "example" | "extensible" | "preferred" | "required";
  /** Extensions for strength */
  _strength?: Element;
  /** Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri. */
  valueSetReference?: Reference;
  /** Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used. If the binding refers to an explicit value set - the normal case - then use a Reference(ValueSet) preferably containing the canonical URL for the value set. If the reference is to an implicit value set - usually, an IETF RFC that defines a grammar, such as mime types - then use a uri. */
  valueSetUri?: string;
  /** Extensions for valueSetUri */
  _valueSetUri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ElementDefinition_BindingSchemaInternal =
  ElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    strength: z.enum(["example", "extensible", "preferred", "required"]),
    _strength: z.lazy(getElementSchema).optional(),
    valueSetReference: z.lazy(getReferenceSchema).optional(),
    valueSetUri: fhirUri().optional(),
    _valueSetUri: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const valueSet_x_Present = ["valueSetReference", "valueSetUri"].filter(
        (field) => record[field] !== undefined,
      );
      if (valueSet_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueSetReference, valueSetUri may be present for valueSet[x]",
          path: [valueSet_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.valueSetReference,
        "valueSetReference",
        ["http://hl7.org/fhir/StructureDefinition/ValueSet"],
        ["ValueSet"],
        ctx,
      );
    });

export const ElementDefinition_BindingSchema =
  ElementDefinition_BindingSchemaInternal as z.ZodType<ElementDefinition_Binding>;
