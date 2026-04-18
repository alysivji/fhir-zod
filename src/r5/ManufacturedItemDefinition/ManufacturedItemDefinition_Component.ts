// Source: https://hl7.org/fhir/R5/manufactureditemdefinition-definitions.html#ManufacturedItemDefinition.component
// Profile: http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { ManufacturedItemDefinition_Component_Constituent } from "./ManufacturedItemDefinition_Component_Constituent";
import { ManufacturedItemDefinition_Component_ConstituentSchemaInternal } from "./ManufacturedItemDefinition_Component_Constituent";

/** Physical parts of the manufactured item, that it is intrisically made from. This is distinct from the ingredients that are part of its chemical makeup. */
export interface ManufacturedItemDefinition_Component extends BackboneElement {
  /** The measurable amount of total quantity of all substances in the component, expressable in different ways (e.g. by mass or volume). */
  amount?: Array<Quantity>;
  /** A component that this component contains or is made from. */
  component?: Array<unknown>;
  /** A reference to a constituent of the manufactured item as a whole, linked here so that its component location within the item can be indicated. This not where the item's ingredient are primarily stated (for which see Ingredient.for or ManufacturedItemDefinition.ingredient). */
  constituent?: Array<ManufacturedItemDefinition_Component_Constituent>;
  /** The function of this component within the item e.g. delivers active ingredient, masks taste. */
  function?: Array<CodeableConcept>;
  /** General characteristics of this component. */
  property?: Array<unknown>;
  /** Defining type of the component e.g. shell, layer, ink. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getManufacturedItemDefinition_Component_ConstituentSchema =
  (): z.ZodType<ManufacturedItemDefinition_Component_Constituent> =>
    ManufacturedItemDefinition_Component_ConstituentSchemaInternal as z.ZodType<ManufacturedItemDefinition_Component_Constituent>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ManufacturedItemDefinition_ComponentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getQuantitySchema).array().optional(),
    component: z.unknown().array().optional(),
    constituent: z
      .lazy(getManufacturedItemDefinition_Component_ConstituentSchema)
      .array()
      .optional(),
    function: z.lazy(getCodeableConceptSchema).array().optional(),
    property: z.unknown().array().optional(),
    type: z.lazy(getCodeableConceptSchema),
  }).strict();

export const ManufacturedItemDefinition_ComponentSchema =
  ManufacturedItemDefinition_ComponentSchemaInternal as z.ZodType<ManufacturedItemDefinition_Component>;
