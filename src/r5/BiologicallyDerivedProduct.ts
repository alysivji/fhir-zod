// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BiologicallyDerivedProduct_Collection } from "./BiologicallyDerivedProduct_Collection";
import { BiologicallyDerivedProduct_CollectionSchemaInternal } from "./BiologicallyDerivedProduct_Collection";
import type { BiologicallyDerivedProduct_Property } from "./BiologicallyDerivedProduct_Property";
import { BiologicallyDerivedProduct_PropertySchemaInternal } from "./BiologicallyDerivedProduct_Property";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A biological material originating from a biological entity intended to be transplanted or infused into another (possibly the same) biological entity. */
export interface BiologicallyDerivedProduct extends DomainResource {
  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled. */
  biologicalSourceEvent?: Identifier;
  /** How this product was collected. */
  collection?: BiologicallyDerivedProduct_Collection;
  /** A unique identifier for an aliquot of a product.  Used to distinguish individual aliquots of a product carrying the same biologicalSource and productCode identifiers. */
  division?: string;
  /** Extensions for division */
  _division?: Element;
  /** Date, and where relevant time, of expiration. */
  expirationDate?: string;
  /** Extensions for expirationDate */
  _expirationDate?: Element;
  /** Unique instance identifiers assigned to a biologically derived product. Note: This is a business identifier, not a resource identifier. */
  identifier?: Array<Identifier>;
  /** Parent product (if any) for this biologically-derived product. */
  parent?: Array<Reference>;
  /** Processing facilities responsible for the labeling and distribution of this biologically derived product. */
  processingFacility?: Array<Reference>;
  /** Broad category of this product. */
  productCategory?: Coding;
  /** A codified value that systematically supports characterization and classification of medical products of human origin inclusive of processing conditions such as additives, volumes and handling conditions. */
  productCode?: CodeableConcept;
  /** Whether the product is currently available. */
  productStatus?: Coding;
  /** A property that is specific to this BiologicallyDerviedProduct instance. */
  property?: Array<BiologicallyDerivedProduct_Property>;
  /** Request to obtain and/or infuse this biologically derived product. */
  request?: Array<Reference>;
  /** This is a BiologicallyDerivedProduct resource. */
  resourceType: "BiologicallyDerivedProduct";
  /** The temperature requirements for storage of the biologically-derived product. */
  storageTempRequirements?: Range;
}

const getBiologicallyDerivedProduct_CollectionSchema =
  (): z.ZodType<BiologicallyDerivedProduct_Collection> =>
    BiologicallyDerivedProduct_CollectionSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Collection>;
const getBiologicallyDerivedProduct_PropertySchema =
  (): z.ZodType<BiologicallyDerivedProduct_Property> =>
    BiologicallyDerivedProduct_PropertySchemaInternal as z.ZodType<BiologicallyDerivedProduct_Property>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const BiologicallyDerivedProductSchemaInternal =
  DomainResourceSchemaInternal.extend({
    biologicalSourceEvent: z.lazy(getIdentifierSchema).optional(),
    collection: z
      .lazy(getBiologicallyDerivedProduct_CollectionSchema)
      .optional(),
    division: fhirString().optional(),
    _division: z.lazy(getElementSchema).optional(),
    expirationDate: fhirDateTime().optional(),
    _expirationDate: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    parent: z.lazy(getReferenceSchema).array().optional(),
    processingFacility: z.lazy(getReferenceSchema).array().optional(),
    productCategory: z.lazy(getCodingSchema).optional(),
    productCode: z.lazy(getCodeableConceptSchema).optional(),
    productStatus: z.lazy(getCodingSchema).optional(),
    property: z
      .lazy(getBiologicallyDerivedProduct_PropertySchema)
      .array()
      .optional(),
    request: z.lazy(getReferenceSchema).array().optional(),
    resourceType: z.literal("BiologicallyDerivedProduct"),
    storageTempRequirements: z.lazy(getRangeSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.parent,
        "parent",
        ["http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct"],
        ["BiologicallyDerivedProduct"],
        ctx,
      );
      validateReferenceTarget(
        record.processingFacility,
        "processingFacility",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
      validateReferenceTarget(
        record.request,
        "request",
        ["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
        ["ServiceRequest"],
        ctx,
      );
    });

export const BiologicallyDerivedProductSchema =
  BiologicallyDerivedProductSchemaInternal as z.ZodType<BiologicallyDerivedProduct>;
