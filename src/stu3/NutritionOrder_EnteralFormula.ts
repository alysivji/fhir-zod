// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { NutritionOrder_EnteralFormula_Administration } from "./NutritionOrder_EnteralFormula_Administration";
import { NutritionOrder_EnteralFormula_AdministrationSchemaInternal } from "./NutritionOrder_EnteralFormula_Administration";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity. */
export interface NutritionOrder_EnteralFormula extends BackboneElement {
  /** The product or brand name of the type of modular component to be added to the formula. */
  additiveProductName?: string;
  /** Extensions for additiveProductName */
  _additiveProductName?: Element;
  /** Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula. */
  additiveType?: CodeableConcept;
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
  baseFormulaType?: CodeableConcept;
  /** The amount of energy (calories) that the formula should provide per specified volume, typically per mL or fluid oz.  For example, an infant may require a formula that provides 24 calories per fluid ounce or an adult may require an enteral formula that provides 1.5 calorie/mL. */
  caloricDensity?: Quantity;
  /** The maximum total quantity of formula that may be administered to a subject over the period of time, e.g. 1440 mL over 24 hours. */
  maxVolumeToDeliver?: Quantity;
  /** The route or physiological path of administration into the patient's gastrointestinal  tract for purposes of providing the formula feeding, e.g. nasogastric tube. */
  routeofAdministration?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getNutritionOrder_EnteralFormula_AdministrationSchema =
  (): z.ZodType<NutritionOrder_EnteralFormula_Administration> =>
    NutritionOrder_EnteralFormula_AdministrationSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Administration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionOrder_EnteralFormulaSchemaInternal =
  BackboneElementSchemaInternal.extend({
    additiveProductName: fhirString().optional(),
    _additiveProductName: z.lazy(getElementSchema).optional(),
    additiveType: z.lazy(getCodeableConceptSchema).optional(),
    administration: z
      .lazy(getNutritionOrder_EnteralFormula_AdministrationSchema)
      .array()
      .optional(),
    administrationInstruction: fhirString().optional(),
    _administrationInstruction: z.lazy(getElementSchema).optional(),
    baseFormulaProductName: fhirString().optional(),
    _baseFormulaProductName: z.lazy(getElementSchema).optional(),
    baseFormulaType: z.lazy(getCodeableConceptSchema).optional(),
    caloricDensity: z.lazy(getQuantitySchema).optional(),
    maxVolumeToDeliver: z.lazy(getQuantitySchema).optional(),
    routeofAdministration: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const NutritionOrder_EnteralFormulaSchema =
  NutritionOrder_EnteralFormulaSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula>;
