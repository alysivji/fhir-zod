// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
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
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicinalProductIngredient_SpecifiedSubstance } from "./MedicinalProductIngredient_SpecifiedSubstance";
import { MedicinalProductIngredient_SpecifiedSubstanceSchemaInternal } from "./MedicinalProductIngredient_SpecifiedSubstance";
import type { MedicinalProductIngredient_Substance } from "./MedicinalProductIngredient_Substance";
import { MedicinalProductIngredient_SubstanceSchemaInternal } from "./MedicinalProductIngredient_Substance";

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface MedicinalProductIngredient extends DomainResource {
  /** If the ingredient is a known or suspected allergen. */
  allergenicIndicator?: boolean;
  /** Extensions for allergenicIndicator */
  _allergenicIndicator?: Element;
  /** The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. */
  identifier?: Identifier;
  /** Manufacturer of this Ingredient. */
  manufacturer?: Array<Reference>;
  /** This is a MedicinalProductIngredient resource. */
  resourceType: "MedicinalProductIngredient";
  /** Ingredient role e.g. Active ingredient, excipient. */
  role: CodeableConcept;
  /** A specified substance that comprises this ingredient. */
  specifiedSubstance?: Array<MedicinalProductIngredient_SpecifiedSubstance>;
  /** The ingredient substance. */
  substance?: MedicinalProductIngredient_Substance;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicinalProductIngredient_SpecifiedSubstanceSchema =
  (): z.ZodType<MedicinalProductIngredient_SpecifiedSubstance> =>
    MedicinalProductIngredient_SpecifiedSubstanceSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance>;
const getMedicinalProductIngredient_SubstanceSchema =
  (): z.ZodType<MedicinalProductIngredient_Substance> =>
    MedicinalProductIngredient_SubstanceSchemaInternal as z.ZodType<MedicinalProductIngredient_Substance>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductIngredientSchemaInternal = z
  .object({
    allergenicIndicator: z.boolean().optional(),
    _allergenicIndicator: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    manufacturer: z.lazy(getReferenceSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    resourceType: z.literal("MedicinalProductIngredient"),
    role: z.lazy(getCodeableConceptSchema),
    specifiedSubstance: z
      .lazy(getMedicinalProductIngredient_SpecifiedSubstanceSchema)
      .array()
      .optional(),
    substance: z.lazy(getMedicinalProductIngredient_SubstanceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
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

export const MedicinalProductIngredientSchema =
  MedicinalProductIngredientSchemaInternal as z.ZodType<MedicinalProductIngredient>;
