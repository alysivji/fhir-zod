// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical
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
import type { MedicinalProductPharmaceutical_Characteristics } from "./MedicinalProductPharmaceutical_Characteristics";
import { MedicinalProductPharmaceutical_CharacteristicsSchemaInternal } from "./MedicinalProductPharmaceutical_Characteristics";
import type { MedicinalProductPharmaceutical_RouteOfAdministration } from "./MedicinalProductPharmaceutical_RouteOfAdministration";
import { MedicinalProductPharmaceutical_RouteOfAdministrationSchemaInternal } from "./MedicinalProductPharmaceutical_RouteOfAdministration";

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface MedicinalProductPharmaceutical extends DomainResource {
  /** The administrable dose form, after necessary reconstitution. */
  administrableDoseForm: CodeableConcept;
  /** Characteristics e.g. a products onset of action. */
  characteristics?: Array<MedicinalProductPharmaceutical_Characteristics>;
  /** Accompanying device. */
  device?: Array<Reference>;
  /** An identifier for the pharmaceutical medicinal product. */
  identifier?: Array<Identifier>;
  /** Ingredient. */
  ingredient?: Array<Reference>;
  /** This is a MedicinalProductPharmaceutical resource. */
  resourceType: "MedicinalProductPharmaceutical";
  /** The path by which the pharmaceutical product is taken into or makes contact with the body. */
  routeOfAdministration: Array<MedicinalProductPharmaceutical_RouteOfAdministration>;
  /** Todo. */
  unitOfPresentation?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicinalProductPharmaceutical_CharacteristicsSchema =
  (): z.ZodType<MedicinalProductPharmaceutical_Characteristics> =>
    MedicinalProductPharmaceutical_CharacteristicsSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_Characteristics>;
const getMedicinalProductPharmaceutical_RouteOfAdministrationSchema =
  (): z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration> =>
    MedicinalProductPharmaceutical_RouteOfAdministrationSchemaInternal as z.ZodType<MedicinalProductPharmaceutical_RouteOfAdministration>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductPharmaceuticalSchemaInternal = z
  .object({
    administrableDoseForm: z.lazy(getCodeableConceptSchema),
    characteristics: z
      .lazy(getMedicinalProductPharmaceutical_CharacteristicsSchema)
      .array()
      .optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    device: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getReferenceSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    resourceType: z.literal("MedicinalProductPharmaceutical"),
    routeOfAdministration: z
      .lazy(getMedicinalProductPharmaceutical_RouteOfAdministrationSchema)
      .array(),
    text: z.lazy(getNarrativeSchema).optional(),
    unitOfPresentation: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.device,
      "device",
      ["http://hl7.org/fhir/StructureDefinition/DeviceDefinition"],
      ["DeviceDefinition"],
      ctx,
    );
    validateReferenceTarget(
      record.ingredient,
      "ingredient",
      ["http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient"],
      ["MedicinalProductIngredient"],
      ctx,
    );
  });

export const MedicinalProductPharmaceuticalSchema =
  MedicinalProductPharmaceuticalSchemaInternal as z.ZodType<MedicinalProductPharmaceutical>;
