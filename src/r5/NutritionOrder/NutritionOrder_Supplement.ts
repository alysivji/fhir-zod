// Source: https://hl7.org/fhir/R5/nutritionorder-definitions.html#NutritionOrder.supplement
// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { NutritionOrder_Supplement_Schedule } from "./NutritionOrder_Supplement_Schedule";
import { NutritionOrder_Supplement_ScheduleSchemaInternal } from "./NutritionOrder_Supplement_Schedule";

/** Oral nutritional products given in order to add further nutritional value to the patient's diet. */
export interface NutritionOrder_Supplement extends BackboneElement {
  /** Free text or additional instructions or information pertaining to the oral supplement. */
  instruction?: string;
  /** Extensions for instruction */
  _instruction?: Element;
  /** The product or brand name of the nutritional supplement such as "Acme Protein Shake". */
  productName?: string;
  /** Extensions for productName */
  _productName?: Element;
  /** The amount of the nutritional supplement to be given. */
  quantity?: Quantity;
  /** Schedule information for a supplement. */
  schedule?: NutritionOrder_Supplement_Schedule;
  /** The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement. */
  type?: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getNutritionOrder_Supplement_ScheduleSchema =
  (): z.ZodType<NutritionOrder_Supplement_Schedule> =>
    NutritionOrder_Supplement_ScheduleSchemaInternal as z.ZodType<NutritionOrder_Supplement_Schedule>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionOrder_SupplementSchemaInternal =
  BackboneElementSchemaInternal.extend({
    instruction: fhirString().optional(),
    _instruction: z.lazy(getElementSchema).optional(),
    productName: fhirString().optional(),
    _productName: z.lazy(getElementSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    schedule: z.lazy(getNutritionOrder_Supplement_ScheduleSchema).optional(),
    type: z.lazy(getCodeableReferenceSchema).optional(),
  }).strict();

export const NutritionOrder_SupplementSchema =
  NutritionOrder_SupplementSchemaInternal as z.ZodType<NutritionOrder_Supplement>;
