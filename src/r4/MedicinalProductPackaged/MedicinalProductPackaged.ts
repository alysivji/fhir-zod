// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import {
  fhirCode,
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicinalProductPackaged_BatchIdentifier } from "./MedicinalProductPackaged_BatchIdentifier";
import { MedicinalProductPackaged_BatchIdentifierSchemaInternal } from "./MedicinalProductPackaged_BatchIdentifier";
import type { MedicinalProductPackaged_PackageItem } from "./MedicinalProductPackaged_PackageItem";
import { MedicinalProductPackaged_PackageItemSchemaInternal } from "./MedicinalProductPackaged_PackageItem";

/** A medicinal product in a container or package. */
export interface MedicinalProductPackaged extends DomainResource {
  /** Batch numbering. */
  batchIdentifier?: Array<MedicinalProductPackaged_BatchIdentifier>;
  /** Textual description. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Unique identifier. */
  identifier?: Array<Identifier>;
  /** The legal status of supply of the medicinal product as classified by the regulator. */
  legalStatusOfSupply?: CodeableConcept;
  /** Manufacturer of this Package Item. */
  manufacturer?: Array<Reference>;
  /** Manufacturer of this Package Item. */
  marketingAuthorization?: Reference;
  /** Marketing information. */
  marketingStatus?: Array<MarketingStatus>;
  /** A packaging item, as a contained for medicine, possibly with other packaging items within. */
  packageItem: Array<MedicinalProductPackaged_PackageItem>;
  /** This is a MedicinalProductPackaged resource. */
  resourceType: "MedicinalProductPackaged";
  /** The product with this is a pack for. */
  subject?: Array<Reference>;
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
const getMedicinalProductPackaged_BatchIdentifierSchema =
  (): z.ZodType<MedicinalProductPackaged_BatchIdentifier> =>
    MedicinalProductPackaged_BatchIdentifierSchemaInternal as z.ZodType<MedicinalProductPackaged_BatchIdentifier>;
const getMedicinalProductPackaged_PackageItemSchema =
  (): z.ZodType<MedicinalProductPackaged_PackageItem> =>
    MedicinalProductPackaged_PackageItemSchemaInternal as z.ZodType<MedicinalProductPackaged_PackageItem>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductPackagedSchemaInternal = z
  .object({
    batchIdentifier: z
      .lazy(getMedicinalProductPackaged_BatchIdentifierSchema)
      .array()
      .optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    legalStatusOfSupply: z.lazy(getCodeableConceptSchema).optional(),
    manufacturer: z.lazy(getReferenceSchema).array().optional(),
    marketingAuthorization: z.lazy(getReferenceSchema).optional(),
    marketingStatus: z.lazy(getMarketingStatusSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    packageItem: z.lazy(getMedicinalProductPackaged_PackageItemSchema).array(),
    resourceType: z.literal("MedicinalProductPackaged"),
    subject: z.lazy(getReferenceSchema).array().optional(),
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
    validateReferenceTarget(
      record.marketingAuthorization,
      "marketingAuthorization",
      ["http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization"],
      ["MedicinalProductAuthorization"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      ["http://hl7.org/fhir/StructureDefinition/MedicinalProduct"],
      ["MedicinalProduct"],
      ctx,
    );
  });

export const MedicinalProductPackagedSchema =
  MedicinalProductPackagedSchemaInternal as z.ZodType<MedicinalProductPackaged>;
