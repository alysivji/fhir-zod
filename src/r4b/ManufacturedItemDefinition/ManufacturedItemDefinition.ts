// Source: https://hl7.org/fhir/R4B/manufactureditemdefinition.html
// Profile: http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

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
import type { ManufacturedItemDefinition_Property } from "./ManufacturedItemDefinition_Property";
import { ManufacturedItemDefinition_PropertySchemaInternal } from "./ManufacturedItemDefinition_Property";

/** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product. */
export interface ManufacturedItemDefinition extends DomainResource {
  /** Unique identifier. */
  identifier?: Array<Identifier>;
  /** The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource. */
  ingredient?: Array<CodeableConcept>;
  /** Dose form as manufactured and before any transformation into the pharmaceutical product. */
  manufacturedDoseForm: CodeableConcept;
  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues). */
  manufacturer?: Array<Reference>;
  /** General characteristics of this item. */
  property?: Array<ManufacturedItemDefinition_Property>;
  /** This is a ManufacturedItemDefinition resource. */
  resourceType: "ManufacturedItemDefinition";
  /** The status of this item. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The “real world” units in which the quantity of the manufactured item is described. */
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
const getManufacturedItemDefinition_PropertySchema =
  (): z.ZodType<ManufacturedItemDefinition_Property> =>
    ManufacturedItemDefinition_PropertySchemaInternal as z.ZodType<ManufacturedItemDefinition_Property>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ManufacturedItemDefinitionSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    manufacturedDoseForm: z.lazy(getCodeableConceptSchema),
    manufacturer: z.lazy(getReferenceSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    property: z
      .lazy(getManufacturedItemDefinition_PropertySchema)
      .array()
      .optional(),
    resourceType: z.literal("ManufacturedItemDefinition"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    unitOfPresentation: z.lazy(getCodeableConceptSchema).optional(),
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

export const ManufacturedItemDefinitionSchema =
  ManufacturedItemDefinitionSchemaInternal as z.ZodType<ManufacturedItemDefinition>;
