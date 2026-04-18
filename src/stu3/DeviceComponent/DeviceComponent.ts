// Source: https://hl7.org/fhir/STU3/devicecomponent.html
// Profile: http://hl7.org/fhir/StructureDefinition/DeviceComponent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirInstant,
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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { DeviceComponent_ProductionSpecification } from "./DeviceComponent_ProductionSpecification";
import { DeviceComponent_ProductionSpecificationSchemaInternal } from "./DeviceComponent_ProductionSpecification";

/** Base StructureDefinition for DeviceComponent Resource */
export interface DeviceComponent extends DomainResource {
  /** The locally assigned unique identification by the software. For example: handle ID. */
  identifier: Identifier;
  /** The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US. */
  languageCode?: CodeableConcept;
  /** The timestamp for the most recent system change which includes device configuration or setting change. */
  lastSystemChange?: string;
  /** Extensions for lastSystemChange */
  _lastSystemChange?: Element;
  /** The physical principle of the measurement. For example: thermal, chemical, acoustical, etc. */
  measurementPrinciple?:
    | "acoustical"
    | "biological"
    | "chemical"
    | "electrical"
    | "impedance"
    | "manual"
    | "mechanical"
    | "nuclear"
    | "optical"
    | "other"
    | "thermal";
  /** Extensions for measurementPrinciple */
  _measurementPrinciple?: Element;
  /** The current operational status of the device. For example: On, Off, Standby, etc. */
  operationalStatus?: Array<CodeableConcept>;
  /** The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular. */
  parameterGroup?: CodeableConcept;
  /** The link to the parent resource. For example: Channel is linked to its VMD parent. */
  parent?: Reference;
  /** The production specification such as component revision, serial number, etc. */
  productionSpecification?: Array<DeviceComponent_ProductionSpecification>;
  /** This is a DeviceComponent resource. */
  resourceType: "DeviceComponent";
  /** The link to the source Device that contains administrative device information such as manufacture, serial number, etc. */
  source?: Reference;
  /** The component type as defined in the object-oriented or metric nomenclature partition. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDeviceComponent_ProductionSpecificationSchema =
  (): z.ZodType<DeviceComponent_ProductionSpecification> =>
    DeviceComponent_ProductionSpecificationSchemaInternal as z.ZodType<DeviceComponent_ProductionSpecification>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const DeviceComponentSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    languageCode: z.lazy(getCodeableConceptSchema).optional(),
    lastSystemChange: fhirInstant().optional(),
    _lastSystemChange: z.lazy(getElementSchema).optional(),
    measurementPrinciple: z
      .enum([
        "acoustical",
        "biological",
        "chemical",
        "electrical",
        "impedance",
        "manual",
        "mechanical",
        "nuclear",
        "optical",
        "other",
        "thermal",
      ])
      .optional(),
    _measurementPrinciple: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    operationalStatus: z.lazy(getCodeableConceptSchema).array().optional(),
    parameterGroup: z.lazy(getCodeableConceptSchema).optional(),
    parent: z.lazy(getReferenceSchema).optional(),
    productionSpecification: z
      .lazy(getDeviceComponent_ProductionSpecificationSchema)
      .array()
      .optional(),
    resourceType: z.literal("DeviceComponent"),
    source: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.parent,
      "parent",
      ["http://hl7.org/fhir/StructureDefinition/DeviceComponent"],
      ["DeviceComponent"],
      ctx,
    );
    validateReferenceTarget(
      record.source,
      "source",
      ["http://hl7.org/fhir/StructureDefinition/Device"],
      ["Device"],
      ctx,
    );
  });

export const DeviceComponentSchema =
  DeviceComponentSchemaInternal as z.ZodType<DeviceComponent>;
