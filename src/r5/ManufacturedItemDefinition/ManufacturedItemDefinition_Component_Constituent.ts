// Source: https://hl7.org/fhir/R5/manufactureditemdefinition-definitions.html#ManufacturedItemDefinition.component.constituent
// Profile: http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient). */
export interface ManufacturedItemDefinition_Component_Constituent
  extends BackboneElement {
  /** The measurable amount of the substance, expressable in different ways (e.g. by mass or volume). */
  amount?: Array<Quantity>;
  /** The function of this constituent within the component e.g. binder. */
  function?: Array<CodeableConcept>;
  /** The ingredient that is the constituent of the given component. */
  hasIngredient?: Array<CodeableReference>;
  /** The physical location of the constituent/ingredient within the component. Example – if the component is the bead in the capsule, then the location would be where the ingredient resides within the product part – intragranular, extra-granular, etc. */
  location?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ManufacturedItemDefinition_Component_ConstituentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getQuantitySchema).array().optional(),
    function: z.lazy(getCodeableConceptSchema).array().optional(),
    hasIngredient: z.lazy(getCodeableReferenceSchema).array().optional(),
    location: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const ManufacturedItemDefinition_Component_ConstituentSchema =
  ManufacturedItemDefinition_Component_ConstituentSchemaInternal as z.ZodType<ManufacturedItemDefinition_Component_Constituent>;
