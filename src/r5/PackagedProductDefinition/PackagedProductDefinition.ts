// Source: https://hl7.org/fhir/R5/packagedproductdefinition.html
// Profile: http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
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
import type { MarketingStatus } from "../MarketingStatus";
import { MarketingStatusSchemaInternal } from "../MarketingStatus";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { PackagedProductDefinition_LegalStatusOfSupply } from "./PackagedProductDefinition_LegalStatusOfSupply";
import { PackagedProductDefinition_LegalStatusOfSupplySchemaInternal } from "./PackagedProductDefinition_LegalStatusOfSupply";
import type { PackagedProductDefinition_Packaging } from "./PackagedProductDefinition_Packaging";
import { PackagedProductDefinition_PackagingSchemaInternal } from "./PackagedProductDefinition_Packaging";

/** A medically related item or items, in a container or package. */
export interface PackagedProductDefinition extends DomainResource {
  /** Additional information or supporting documentation about the packaged product. */
  attachedDocument?: Array<Reference>;
  /** Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack". */
  characteristic?: Array<unknown>;
  /** A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. This attribute differs from containedItem.amount in that it can give a single aggregated count of all tablet types in a pack, even when these are different manufactured items. For example a pill pack of 21 tablets plus 7 sugar tablets, can be denoted here as '28 tablets'. This attribute is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Each repeat must have different units, so that it is clear what the different sets of counted items are, and it is not intended to allow different counts of similar items (e.g. not '2 tubes and 3 tubes'). Repeats are not to be used to represent different pack sizes (e.g. 20 pack vs. 50 pack) - which would be different instances of this resource. */
  containedItemQuantity?: Array<Quantity>;
  /** Identifies if the package contains different items, such as when a drug product is supplied with another item e.g. a diluent or adjuvant. */
  copackagedIndicator?: boolean;
  /** Extensions for copackagedIndicator */
  _copackagedIndicator?: Element;
  /** Textual description. Note that this is not the name of the package or product. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A unique identifier for this package as whole - not the the content of the package. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations. */
  identifier?: Array<Identifier>;
  /** The legal status of supply of the packaged item as classified by the regulator. */
  legalStatusOfSupply?: Array<PackagedProductDefinition_LegalStatusOfSupply>;
  /** Manufacturer of this package type. When there are multiple it means these are all possible manufacturers. */
  manufacturer?: Array<Reference>;
  /** Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated. */
  marketingStatus?: Array<MarketingStatus>;
  /** A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The product this package model relates to, not the contents of the package (for which see package.containedItem). */
  packageFor?: Array<Reference>;
  /** A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item). */
  packaging?: PackagedProductDefinition_Packaging;
  /** This is a PackagedProductDefinition resource. */
  resourceType: "PackagedProductDefinition";
  /** The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status. */
  status?: CodeableConcept;
  /** The date at which the given status became applicable. */
  statusDate?: string;
  /** Extensions for statusDate */
  _statusDate?: Element;
  /** A high level category e.g. medicinal product, raw material, shipping/transport container, etc. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMarketingStatusSchema = (): z.ZodType<MarketingStatus> =>
  MarketingStatusSchemaInternal as z.ZodType<MarketingStatus>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPackagedProductDefinition_LegalStatusOfSupplySchema =
  (): z.ZodType<PackagedProductDefinition_LegalStatusOfSupply> =>
    PackagedProductDefinition_LegalStatusOfSupplySchemaInternal as z.ZodType<PackagedProductDefinition_LegalStatusOfSupply>;
const getPackagedProductDefinition_PackagingSchema =
  (): z.ZodType<PackagedProductDefinition_Packaging> =>
    PackagedProductDefinition_PackagingSchemaInternal as z.ZodType<PackagedProductDefinition_Packaging>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const PackagedProductDefinitionSchemaInternal = z
  .object({
    attachedDocument: z.lazy(getReferenceSchema).array().optional(),
    characteristic: z.unknown().array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    containedItemQuantity: z.lazy(getQuantitySchema).array().optional(),
    copackagedIndicator: z.boolean().optional(),
    _copackagedIndicator: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    legalStatusOfSupply: z
      .lazy(getPackagedProductDefinition_LegalStatusOfSupplySchema)
      .array()
      .optional(),
    manufacturer: z.lazy(getReferenceSchema).array().optional(),
    marketingStatus: z.lazy(getMarketingStatusSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    packageFor: z.lazy(getReferenceSchema).array().optional(),
    packaging: z.lazy(getPackagedProductDefinition_PackagingSchema).optional(),
    resourceType: z.literal("PackagedProductDefinition"),
    status: z.lazy(getCodeableConceptSchema).optional(),
    statusDate: fhirDateTime().optional(),
    _statusDate: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.attachedDocument,
      "attachedDocument",
      ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
      ["DocumentReference"],
      ctx,
    );
    validateReferenceTarget(
      record.manufacturer,
      "manufacturer",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.packageFor,
      "packageFor",
      ["http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition"],
      ["MedicinalProductDefinition"],
      ctx,
    );
  });

export const PackagedProductDefinitionSchema =
  PackagedProductDefinitionSchemaInternal as z.ZodType<PackagedProductDefinition>;
