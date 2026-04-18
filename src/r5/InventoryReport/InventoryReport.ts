// Source: https://hl7.org/fhir/R5/inventoryreport.html
// Profile: http://hl7.org/fhir/StructureDefinition/InventoryReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { InventoryReport_InventoryListing } from "./InventoryReport_InventoryListing";
import { InventoryReport_InventoryListingSchemaInternal } from "./InventoryReport_InventoryListing";

/** A report of inventory or stock items. */
export interface InventoryReport extends DomainResource {
  /** Whether the report is about the current inventory count (snapshot) or a differential change in inventory (change). */
  countType: "difference" | "snapshot";
  /** Extensions for countType */
  _countType?: Element;
  /** Business identifier for the InventoryReport. */
  identifier?: Array<Identifier>;
  /** An inventory listing section (grouped by any of the attributes). */
  inventoryListing?: Array<InventoryReport_InventoryListing>;
  /** A note associated with the InventoryReport. */
  note?: Array<Annotation>;
  /** What type of operation is being performed - addition or subtraction. */
  operationType?: CodeableConcept;
  /** The reason for this count - regular count, ad-hoc count, new arrivals, etc. */
  operationTypeReason?: CodeableConcept;
  /** When the report has been submitted. */
  reportedDateTime: string;
  /** Extensions for reportedDateTime */
  _reportedDateTime?: Element;
  /** Who submits the report. */
  reporter?: Reference;
  /** The period the report refers to. */
  reportingPeriod?: Period;
  /** This is a InventoryReport resource. */
  resourceType: "InventoryReport";
  /** The status of the inventory check or notification - whether this is draft (e.g. the report is still pending some updates) or active. */
  status: "active" | "draft" | "entered-in-error" | "requested";
  /** Extensions for status */
  _status?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getInventoryReport_InventoryListingSchema =
  (): z.ZodType<InventoryReport_InventoryListing> =>
    InventoryReport_InventoryListingSchemaInternal as z.ZodType<InventoryReport_InventoryListing>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const InventoryReportSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    countType: z.enum(["difference", "snapshot"]),
    _countType: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    inventoryListing: z
      .lazy(getInventoryReport_InventoryListingSchema)
      .array()
      .optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    operationType: z.lazy(getCodeableConceptSchema).optional(),
    operationTypeReason: z.lazy(getCodeableConceptSchema).optional(),
    reportedDateTime: fhirDateTime(),
    _reportedDateTime: z.lazy(getElementSchema).optional(),
    reporter: z.lazy(getReferenceSchema).optional(),
    reportingPeriod: z.lazy(getPeriodSchema).optional(),
    resourceType: z.literal("InventoryReport"),
    status: z.enum(["active", "draft", "entered-in-error", "requested"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.reporter,
      "reporter",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Device", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
  });

export const InventoryReportSchema =
  InventoryReportSchemaInternal as z.ZodType<InventoryReport>;
