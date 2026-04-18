// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { ProdCharacteristic } from "../ProdCharacteristic";
import { ProdCharacteristicSchemaInternal } from "../ProdCharacteristic";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The manufactured item as contained in the packaged medicinal product. */
export interface MedicinalProductManufactured extends DomainResource {
  /** Ingredient. */
  ingredient?: Array<Reference>;
  /** Dose form as manufactured and before any transformation into the pharmaceutical product. */
  manufacturedDoseForm: CodeableConcept;
  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues). */
  manufacturer?: Array<Reference>;
  /** Other codeable characteristics. */
  otherCharacteristics?: Array<CodeableConcept>;
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristic;
  /** The quantity or "count number" of the manufactured item. */
  quantity: Quantity;
  /** This is a MedicinalProductManufactured resource. */
  resourceType: "MedicinalProductManufactured";
  /** The “real world” units in which the quantity of the manufactured item is described. */
  unitOfPresentation?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getProdCharacteristicSchema = (): z.ZodType<ProdCharacteristic> =>
  ProdCharacteristicSchemaInternal as z.ZodType<ProdCharacteristic>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductManufacturedSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getReferenceSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    manufacturedDoseForm: z.lazy(getCodeableConceptSchema),
    manufacturer: z.lazy(getReferenceSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    otherCharacteristics: z.lazy(getCodeableConceptSchema).array().optional(),
    physicalCharacteristics: z.lazy(getProdCharacteristicSchema).optional(),
    quantity: z.lazy(getQuantitySchema),
    resourceType: z.literal("MedicinalProductManufactured"),
    text: z.lazy(getNarrativeSchema).optional(),
    unitOfPresentation: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.ingredient,
      "ingredient",
      ["http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient"],
      ["MedicinalProductIngredient"],
      ctx,
    );
    validateReferenceTarget(
      record.manufacturer,
      "manufacturer",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
  });

export const MedicinalProductManufacturedSchema =
  MedicinalProductManufacturedSchemaInternal as z.ZodType<MedicinalProductManufactured>;
