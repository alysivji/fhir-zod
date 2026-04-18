// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { NutritionOrder_EnteralFormula_Additive } from "./NutritionOrder_EnteralFormula_Additive";
import { NutritionOrder_EnteralFormula_AdditiveSchemaInternal } from "./NutritionOrder_EnteralFormula_Additive";
import type { NutritionOrder_EnteralFormula_Administration } from "./NutritionOrder_EnteralFormula_Administration";
import { NutritionOrder_EnteralFormula_AdministrationSchemaInternal } from "./NutritionOrder_EnteralFormula_Administration";

/** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity. */
export interface NutritionOrder_EnteralFormula extends BackboneElement {
  /** Indicates modular components to be provided in addition or mixed with the base formula. */
  additive?: Array<NutritionOrder_EnteralFormula_Additive>;
  /** Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours. */
  administration?: Array<NutritionOrder_EnteralFormula_Administration>;
  /** Free text formula administration, feeding instructions or additional instructions or information. */
  administrationInstruction?: string;
  /** Extensions for administrationInstruction */
  _administrationInstruction?: Element;
  /** The product or brand name of the enteral or infant formula product such as "ACME Adult Standard Formula". */
  baseFormulaProductName?: string;
  /** Extensions for baseFormulaProductName */
  _baseFormulaProductName?: Element;
  /** The type of enteral or infant formula such as an adult standard formula with fiber or a soy-based infant formula. */
  baseFormulaType?: CodeableReference;
  /** The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL. */
  caloricDensity?: Quantity;
  /** The intended type of device that is to be used for the administration of the enteral formula. */
  deliveryDevice?: Array<CodeableReference>;
  /** The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours. */
  maxVolumeToDeliver?: Quantity;
  /** The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube. */
  routeOfAdministration?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getNutritionOrder_EnteralFormula_AdditiveSchema =
  (): z.ZodType<NutritionOrder_EnteralFormula_Additive> =>
    NutritionOrder_EnteralFormula_AdditiveSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Additive>;
const getNutritionOrder_EnteralFormula_AdministrationSchema =
  (): z.ZodType<NutritionOrder_EnteralFormula_Administration> =>
    NutritionOrder_EnteralFormula_AdministrationSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Administration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionOrder_EnteralFormulaSchemaInternal =
  BackboneElementSchemaInternal.extend({
    additive: z
      .lazy(getNutritionOrder_EnteralFormula_AdditiveSchema)
      .array()
      .optional(),
    administration: z
      .lazy(getNutritionOrder_EnteralFormula_AdministrationSchema)
      .array()
      .optional(),
    administrationInstruction: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _administrationInstruction: z.lazy(getElementSchema).optional(),
    baseFormulaProductName: fhirString().optional(),
    _baseFormulaProductName: z.lazy(getElementSchema).optional(),
    baseFormulaType: z.lazy(getCodeableReferenceSchema).optional(),
    caloricDensity: z.lazy(getQuantitySchema).optional(),
    deliveryDevice: z.lazy(getCodeableReferenceSchema).array().optional(),
    maxVolumeToDeliver: z.lazy(getQuantitySchema).optional(),
    routeOfAdministration: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const NutritionOrder_EnteralFormulaSchema =
  NutritionOrder_EnteralFormulaSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula>;
