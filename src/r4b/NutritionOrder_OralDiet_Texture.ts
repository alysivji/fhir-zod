// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Class that describes any texture modifications required for the patient to safely consume various types of solid foods. */
export interface NutritionOrder_OralDiet_Texture extends BackboneElement {
  /** The food type(s) (e.g. meats, all foods)  that the texture modification applies to.  This could be all foods types. */
  foodType?: CodeableConcept;
  /** Any texture modifications (for solid foods) that should be made, e.g. easy to chew, chopped, ground, and pureed. */
  modifier?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const NutritionOrder_OralDiet_TextureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    foodType: z.lazy(getCodeableConceptSchema).optional(),
    modifier: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const NutritionOrder_OralDiet_TextureSchema =
  NutritionOrder_OralDiet_TextureSchemaInternal as z.ZodType<NutritionOrder_OralDiet_Texture>;
