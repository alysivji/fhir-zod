// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { InventoryItem_Association } from "./InventoryItem_Association";
import { InventoryItem_AssociationSchemaInternal } from "./InventoryItem_Association";
import type { InventoryItem_Characteristic } from "./InventoryItem_Characteristic";
import { InventoryItem_CharacteristicSchemaInternal } from "./InventoryItem_Characteristic";
import type { InventoryItem_Description } from "./InventoryItem_Description";
import { InventoryItem_DescriptionSchemaInternal } from "./InventoryItem_Description";
import type { InventoryItem_Instance } from "./InventoryItem_Instance";
import { InventoryItem_InstanceSchemaInternal } from "./InventoryItem_Instance";
import type { InventoryItem_Name } from "./InventoryItem_Name";
import { InventoryItem_NameSchemaInternal } from "./InventoryItem_Name";
import type { InventoryItem_ResponsibleOrganization } from "./InventoryItem_ResponsibleOrganization";
import { InventoryItem_ResponsibleOrganizationSchemaInternal } from "./InventoryItem_ResponsibleOrganization";

/** functional description of an inventory item used in inventory and supply-related workflows. */
export interface InventoryItem extends DomainResource {
  /** Association with other items or products. */
  association?: Array<InventoryItem_Association>;
  /** The base unit of measure - the unit in which the product is used or counted. */
  baseUnit?: CodeableConcept;
  /** Category or class of the item. */
  category?: Array<CodeableConcept>;
  /** The descriptive or identifying characteristics of the item. */
  characteristic?: Array<InventoryItem_Characteristic>;
  /** Code designating the specific type of item. */
  code?: Array<CodeableConcept>;
  /** The descriptive characteristics of the inventory item. */
  description?: InventoryItem_Description;
  /** Business identifier for the inventory item. */
  identifier?: Array<Identifier>;
  /** Instances or occurrences of the product. */
  instance?: InventoryItem_Instance;
  /** The usage status e.g. recalled, in use, discarded... This can be used to indicate that the items have been taken out of inventory, or are in use, etc. */
  inventoryStatus?: Array<CodeableConcept>;
  /** The item name(s) - the brand name, or common name, functional name, generic name. */
  name?: Array<InventoryItem_Name>;
  /** Net content or amount present in the item. */
  netContent?: Quantity;
  /** Link to a product resource used in clinical workflows. */
  productReference?: Reference;
  /** This is a InventoryItem resource. */
  resourceType: "InventoryItem";
  /** Organization(s) responsible for the product. */
  responsibleOrganization?: Array<InventoryItem_ResponsibleOrganization>;
  /** Status of the item entry. */
  status: "active" | "entered-in-error" | "inactive" | "unknown";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getInventoryItem_AssociationSchema =
  (): z.ZodType<InventoryItem_Association> =>
    InventoryItem_AssociationSchemaInternal as z.ZodType<InventoryItem_Association>;
const getInventoryItem_CharacteristicSchema =
  (): z.ZodType<InventoryItem_Characteristic> =>
    InventoryItem_CharacteristicSchemaInternal as z.ZodType<InventoryItem_Characteristic>;
const getInventoryItem_DescriptionSchema =
  (): z.ZodType<InventoryItem_Description> =>
    InventoryItem_DescriptionSchemaInternal as z.ZodType<InventoryItem_Description>;
const getInventoryItem_InstanceSchema = (): z.ZodType<InventoryItem_Instance> =>
  InventoryItem_InstanceSchemaInternal as z.ZodType<InventoryItem_Instance>;
const getInventoryItem_NameSchema = (): z.ZodType<InventoryItem_Name> =>
  InventoryItem_NameSchemaInternal as z.ZodType<InventoryItem_Name>;
const getInventoryItem_ResponsibleOrganizationSchema =
  (): z.ZodType<InventoryItem_ResponsibleOrganization> =>
    InventoryItem_ResponsibleOrganizationSchemaInternal as z.ZodType<InventoryItem_ResponsibleOrganization>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const InventoryItemSchemaInternal = z
  .object({
    association: z.lazy(getInventoryItem_AssociationSchema).array().optional(),
    baseUnit: z.lazy(getCodeableConceptSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    characteristic: z
      .lazy(getInventoryItem_CharacteristicSchema)
      .array()
      .optional(),
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z.lazy(getInventoryItem_DescriptionSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    instance: z.lazy(getInventoryItem_InstanceSchema).optional(),
    inventoryStatus: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: z.lazy(getInventoryItem_NameSchema).array().optional(),
    netContent: z.lazy(getQuantitySchema).optional(),
    productReference: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("InventoryItem"),
    responsibleOrganization: z
      .lazy(getInventoryItem_ResponsibleOrganizationSchema)
      .array()
      .optional(),
    status: z.enum(["active", "entered-in-error", "inactive", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.productReference,
      "productReference",
      [
        "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Medication",
        "http://hl7.org/fhir/StructureDefinition/NutritionProduct",
      ],
      [
        "BiologicallyDerivedProduct",
        "Device",
        "Medication",
        "NutritionProduct",
      ],
      ctx,
    );
  });

export const InventoryItemSchema =
  InventoryItemSchemaInternal as z.ZodType<InventoryItem>;
