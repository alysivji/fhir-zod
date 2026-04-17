// Profile: http://hl7.org/fhir/StructureDefinition/CatalogEntry
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CatalogEntry_RelatedEntry } from "./CatalogEntry_RelatedEntry";
import { CatalogEntry_RelatedEntrySchemaInternal } from "./CatalogEntry_RelatedEntry";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Catalog entries are wrappers that contextualize items included in a catalog. */
export interface CatalogEntry extends DomainResource {
  /** Used for examplefor Out of Formulary, or any specifics. */
  additionalCharacteristic?: Array<CodeableConcept>;
  /** User for example for ATC classification, or. */
  additionalClassification?: Array<CodeableConcept>;
  /** Used in supporting related concepts, e.g. NDC to RxNorm. */
  additionalIdentifier?: Array<Identifier>;
  /** Classes of devices, or ATC for medication. */
  classification?: Array<CodeableConcept>;
  /** Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code. */
  identifier?: Array<Identifier>;
  /** Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated. */
  lastUpdated?: string;
  /** Extensions for lastUpdated */
  _lastUpdated?: Element;
  /** Whether the entry represents an orderable item. */
  orderable: boolean;
  /** Extensions for orderable */
  _orderable?: Element;
  /** The item in a catalog or definition. */
  referencedItem: Reference;
  /** Used for example, to point to a substance, or to a device used to administer a medication. */
  relatedEntry?: Array<CatalogEntry_RelatedEntry>;
  /** This is a CatalogEntry resource. */
  resourceType: "CatalogEntry";
  /** Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable. */
  status?: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The type of item - medication, device, service, protocol or other. */
  type?: CodeableConcept;
  /** The time period in which this catalog entry is expected to be active. */
  validityPeriod?: Period;
  /** The date until which this catalog entry is expected to be active. */
  validTo?: string;
  /** Extensions for validTo */
  _validTo?: Element;
}

const getCatalogEntry_RelatedEntrySchema =
  (): z.ZodType<CatalogEntry_RelatedEntry> =>
    CatalogEntry_RelatedEntrySchemaInternal as z.ZodType<CatalogEntry_RelatedEntry>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CatalogEntrySchemaInternal = DomainResourceSchemaInternal.extend({
  additionalCharacteristic: z.lazy(getCodeableConceptSchema).array().optional(),
  additionalClassification: z.lazy(getCodeableConceptSchema).array().optional(),
  additionalIdentifier: z.lazy(getIdentifierSchema).array().optional(),
  classification: z.lazy(getCodeableConceptSchema).array().optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  lastUpdated: fhirDateTime().optional(),
  _lastUpdated: z.lazy(getElementSchema).optional(),
  orderable: z.boolean(),
  _orderable: z.lazy(getElementSchema).optional(),
  referencedItem: z.lazy(getReferenceSchema),
  relatedEntry: z.lazy(getCatalogEntry_RelatedEntrySchema).array().optional(),
  resourceType: z.literal("CatalogEntry"),
  status: z.enum(["active", "draft", "retired", "unknown"]).optional(),
  _status: z.lazy(getElementSchema).optional(),
  type: z.lazy(getCodeableConceptSchema).optional(),
  validityPeriod: z.lazy(getPeriodSchema).optional(),
  validTo: fhirDateTime().optional(),
  _validTo: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.referencedItem,
      "referencedItem",
      [
        "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
        "http://hl7.org/fhir/StructureDefinition/Binary",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Medication",
        "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/SpecimenDefinition",
      ],
      [
        "ActivityDefinition",
        "Binary",
        "Device",
        "HealthcareService",
        "Medication",
        "ObservationDefinition",
        "Organization",
        "PlanDefinition",
        "Practitioner",
        "PractitionerRole",
        "SpecimenDefinition",
      ],
      ctx,
    );
  });

export const CatalogEntrySchema =
  CatalogEntrySchemaInternal as z.ZodType<CatalogEntry>;
