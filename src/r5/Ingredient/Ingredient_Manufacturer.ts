// Source: https://hl7.org/fhir/R5/ingredient-definitions.html#Ingredient.manufacturer
// Profile: http://hl7.org/fhir/StructureDefinition/Ingredient
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case. */
export interface Ingredient_Manufacturer extends BackboneElement {
  /** An organization that manufactures this ingredient. */
  manufacturer: Reference;
  /** The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role. */
  role?: "actual" | "allowed" | "possible";
  /** Extensions for role */
  _role?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Ingredient_ManufacturerSchemaInternal =
  BackboneElementSchemaInternal.extend({
    manufacturer: z.lazy(getReferenceSchema),
    role: z.enum(["actual", "allowed", "possible"]).optional(),
    _role: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.manufacturer,
        "manufacturer",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const Ingredient_ManufacturerSchema =
  Ingredient_ManufacturerSchemaInternal as z.ZodType<Ingredient_Manufacturer>;
