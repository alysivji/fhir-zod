// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { NutritionOrder_OralDiet_Nutrient } from "./NutritionOrder_OralDiet_Nutrient";
import { NutritionOrder_OralDiet_NutrientSchemaInternal } from "./NutritionOrder_OralDiet_Nutrient";
import type { NutritionOrder_OralDiet_Texture } from "./NutritionOrder_OralDiet_Texture";
import { NutritionOrder_OralDiet_TextureSchemaInternal } from "./NutritionOrder_OralDiet_Texture";

/** Diet given orally in contrast to enteral (tube) feeding. */
export interface NutritionOrder_OralDiet extends BackboneElement {
  /** The required consistency (e.g. honey-thick, nectar-thick, thin, thickened.) of liquids or fluids served to the patient. */
  fluidConsistencyType?: Array<CodeableConcept>;
  /** Free text or additional instructions or information pertaining to the oral diet. */
  instruction?: string;
  /** Extensions for instruction */
  _instruction?: Element;
  /** Class that defines the quantity and type of nutrient modifications (for example carbohydrate, fiber or sodium) required for the oral diet. */
  nutrient?: Array<NutritionOrder_OralDiet_Nutrient>;
  /** The time period and frequency at which the diet should be given.  The diet should be given for the combination of all schedules if more than one schedule is present. */
  schedule?: Array<Timing>;
  /** Class that describes any texture modifications required for the patient to safely consume various types of solid foods. */
  texture?: Array<NutritionOrder_OralDiet_Texture>;
  /** The kind of diet or dietary restriction such as fiber restricted diet or diabetic diet. */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getNutritionOrder_OralDiet_NutrientSchema =
  (): z.ZodType<NutritionOrder_OralDiet_Nutrient> =>
    NutritionOrder_OralDiet_NutrientSchemaInternal as z.ZodType<NutritionOrder_OralDiet_Nutrient>;
const getNutritionOrder_OralDiet_TextureSchema =
  (): z.ZodType<NutritionOrder_OralDiet_Texture> =>
    NutritionOrder_OralDiet_TextureSchemaInternal as z.ZodType<NutritionOrder_OralDiet_Texture>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const NutritionOrder_OralDietSchemaInternal =
  BackboneElementSchemaInternal.extend({
    fluidConsistencyType: z.lazy(getCodeableConceptSchema).array().optional(),
    instruction: fhirString().optional(),
    _instruction: z.lazy(getElementSchema).optional(),
    nutrient: z
      .lazy(getNutritionOrder_OralDiet_NutrientSchema)
      .array()
      .optional(),
    schedule: z.lazy(getTimingSchema).array().optional(),
    texture: z
      .lazy(getNutritionOrder_OralDiet_TextureSchema)
      .array()
      .optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const NutritionOrder_OralDietSchema =
  NutritionOrder_OralDietSchemaInternal as z.ZodType<NutritionOrder_OralDiet>;
