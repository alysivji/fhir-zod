// Source: https://hl7.org/fhir/STU3/nutritionorder.html
// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { NutritionOrder_EnteralFormula } from "./NutritionOrder_EnteralFormula";
import { NutritionOrder_EnteralFormulaSchemaInternal } from "./NutritionOrder_EnteralFormula";
import type { NutritionOrder_OralDiet } from "./NutritionOrder_OralDiet";
import { NutritionOrder_OralDietSchemaInternal } from "./NutritionOrder_OralDiet";
import type { NutritionOrder_Supplement } from "./NutritionOrder_Supplement";
import { NutritionOrder_SupplementSchemaInternal } from "./NutritionOrder_Supplement";

/** Base StructureDefinition for NutritionOrder Resource */
export interface NutritionOrder extends DomainResource {
  /** A link to a record of allergies or intolerances  which should be included in the nutrition order. */
  allergyIntolerance?: Array<Reference>;
  /** The date and time that this nutrition order was requested. */
  dateTime: string;
  /** Extensions for dateTime */
  _dateTime?: Element;
  /** An encounter that provides additional information about the healthcare context in which this request is made. */
  encounter?: Reference;
  /** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity. */
  enteralFormula?: NutritionOrder_EnteralFormula;
  /** This modifier is used to convey order-specific modifiers about the type of food that should NOT be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
  excludeFoodModifier?: Array<CodeableConcept>;
  /** This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
  foodPreferenceModifier?: Array<CodeableConcept>;
  /** Identifiers assigned to this order by the order sender or by the order receiver. */
  identifier?: Array<Identifier>;
  /** Diet given orally in contrast to enteral (tube) feeding. */
  oralDiet?: NutritionOrder_OralDiet;
  /** The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings. */
  orderer?: Reference;
  /** The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding. */
  patient: Reference;
  /** This is a NutritionOrder resource. */
  resourceType: "NutritionOrder";
  /** The workflow status of the nutrition order/request. */
  status?:
    | "active"
    | "cancelled"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "on-hold"
    | "planned"
    | "proposed"
    | "requested";
  /** Extensions for status */
  _status?: Element;
  /** Oral nutritional products given in order to add further nutritional value to the patient's diet. */
  supplement?: Array<NutritionOrder_Supplement>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getNutritionOrder_EnteralFormulaSchema =
  (): z.ZodType<NutritionOrder_EnteralFormula> =>
    NutritionOrder_EnteralFormulaSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula>;
const getNutritionOrder_OralDietSchema =
  (): z.ZodType<NutritionOrder_OralDiet> =>
    NutritionOrder_OralDietSchemaInternal as z.ZodType<NutritionOrder_OralDiet>;
const getNutritionOrder_SupplementSchema =
  (): z.ZodType<NutritionOrder_Supplement> =>
    NutritionOrder_SupplementSchemaInternal as z.ZodType<NutritionOrder_Supplement>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const NutritionOrderSchemaInternal = z
  .object({
    allergyIntolerance: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    dateTime: fhirDateTime(),
    _dateTime: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    enteralFormula: z.lazy(getNutritionOrder_EnteralFormulaSchema).optional(),
    excludeFoodModifier: z.lazy(getCodeableConceptSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    foodPreferenceModifier: z.lazy(getCodeableConceptSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    oralDiet: z.lazy(getNutritionOrder_OralDietSchema).optional(),
    orderer: z.lazy(getReferenceSchema).optional(),
    patient: z.lazy(getReferenceSchema),
    resourceType: z.literal("NutritionOrder"),
    status: z
      .enum([
        "active",
        "cancelled",
        "completed",
        "draft",
        "entered-in-error",
        "on-hold",
        "planned",
        "proposed",
        "requested",
      ])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    supplement: z.lazy(getNutritionOrder_SupplementSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.allergyIntolerance,
      "allergyIntolerance",
      ["http://hl7.org/fhir/StructureDefinition/AllergyIntolerance"],
      ["AllergyIntolerance"],
      ctx,
    );
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.orderer,
      "orderer",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const NutritionOrderSchema =
  NutritionOrderSchemaInternal as z.ZodType<NutritionOrder>;
