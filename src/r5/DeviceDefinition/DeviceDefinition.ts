// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
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
import type { ProductShelfLife } from "../ProductShelfLife";
import { ProductShelfLifeSchemaInternal } from "../ProductShelfLife";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { DeviceDefinition_ChargeItem } from "./DeviceDefinition_ChargeItem";
import { DeviceDefinition_ChargeItemSchemaInternal } from "./DeviceDefinition_ChargeItem";
import type { DeviceDefinition_Classification } from "./DeviceDefinition_Classification";
import { DeviceDefinition_ClassificationSchemaInternal } from "./DeviceDefinition_Classification";
import type { DeviceDefinition_ConformsTo } from "./DeviceDefinition_ConformsTo";
import { DeviceDefinition_ConformsToSchemaInternal } from "./DeviceDefinition_ConformsTo";
import type { DeviceDefinition_CorrectiveAction } from "./DeviceDefinition_CorrectiveAction";
import { DeviceDefinition_CorrectiveActionSchemaInternal } from "./DeviceDefinition_CorrectiveAction";
import type { DeviceDefinition_DeviceName } from "./DeviceDefinition_DeviceName";
import { DeviceDefinition_DeviceNameSchemaInternal } from "./DeviceDefinition_DeviceName";
import type { DeviceDefinition_Guideline } from "./DeviceDefinition_Guideline";
import { DeviceDefinition_GuidelineSchemaInternal } from "./DeviceDefinition_Guideline";
import type { DeviceDefinition_HasPart } from "./DeviceDefinition_HasPart";
import { DeviceDefinition_HasPartSchemaInternal } from "./DeviceDefinition_HasPart";
import type { DeviceDefinition_Link } from "./DeviceDefinition_Link";
import { DeviceDefinition_LinkSchemaInternal } from "./DeviceDefinition_Link";
import type { DeviceDefinition_Material } from "./DeviceDefinition_Material";
import { DeviceDefinition_MaterialSchemaInternal } from "./DeviceDefinition_Material";
import type { DeviceDefinition_Packaging } from "./DeviceDefinition_Packaging";
import { DeviceDefinition_PackagingSchemaInternal } from "./DeviceDefinition_Packaging";
import type { DeviceDefinition_Property } from "./DeviceDefinition_Property";
import { DeviceDefinition_PropertySchemaInternal } from "./DeviceDefinition_Property";
import type { DeviceDefinition_RegulatoryIdentifier } from "./DeviceDefinition_RegulatoryIdentifier";
import { DeviceDefinition_RegulatoryIdentifierSchemaInternal } from "./DeviceDefinition_RegulatoryIdentifier";
import type { DeviceDefinition_UdiDeviceIdentifier } from "./DeviceDefinition_UdiDeviceIdentifier";
import { DeviceDefinition_UdiDeviceIdentifierSchemaInternal } from "./DeviceDefinition_UdiDeviceIdentifier";
import type { DeviceDefinition_Version } from "./DeviceDefinition_Version";
import { DeviceDefinition_VersionSchemaInternal } from "./DeviceDefinition_Version";

/** This is a specialized resource that defines the characteristics and capabilities of a device. */
export interface DeviceDefinition extends DomainResource {
  /** Billing code or reference associated with the device. */
  chargeItem?: Array<DeviceDefinition_ChargeItem>;
  /** What kind of device or device system this is. */
  classification?: Array<DeviceDefinition_Classification>;
  /** Identifies the standards, specifications, or formal guidances for the capabilities supported by the device. The device may be certified as conformant to these specifications e.g., communication, performance, process, measurement, or specialization standards. */
  conformsTo?: Array<DeviceDefinition_ConformsTo>;
  /** Contact details for an organization or a particular human that is responsible for the device. */
  contact?: Array<ContactPoint>;
  /** Tracking of latest field safety corrective action. */
  correctiveAction?: DeviceDefinition_CorrectiveAction;
  /** Additional information to describe the device. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The name or names of the device as given by the manufacturer. */
  deviceName?: Array<DeviceDefinition_DeviceName>;
  /** Information aimed at providing directions for the usage of this model of device. */
  guideline?: DeviceDefinition_Guideline;
  /** A device that is part (for example a component) of the present device. */
  hasPart?: Array<DeviceDefinition_HasPart>;
  /** Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID. The identifier is typically valued if the udiDeviceIdentifier, partNumber or modelNumber is not valued and represents a different type of identifier.  However, it is permissible to still include those identifiers in DeviceDefinition.identifier with the appropriate identifier.type. */
  identifier?: Array<Identifier>;
  /** Language code for the human-readable text strings produced by the device (all supported). */
  languageCode?: Array<CodeableConcept>;
  /** An associated device, attached to, used with, communicating with or linking a previous or new device model to the focal device. */
  link?: Array<DeviceDefinition_Link>;
  /** A name of the manufacturer  or legal representative e.g. labeler. Whether this is the actual manufacturer or the labeler or responsible depends on implementation and jurisdiction. */
  manufacturer?: Reference;
  /** A substance used to create the material(s) of which the device is made. */
  material?: Array<DeviceDefinition_Material>;
  /** The model number for the device for example as defined by the manufacturer or labeler, or other agency. */
  modelNumber?: string;
  /** Extensions for modelNumber */
  _modelNumber?: Element;
  /** Descriptive information, usage information or implantation information that is not captured in an existing element. */
  note?: Array<Annotation>;
  /** An organization that is responsible for the provision and ongoing maintenance of the device. */
  owner?: Reference;
  /** Information about the packaging of the device, i.e. how the device is packaged. */
  packaging?: Array<DeviceDefinition_Packaging>;
  /** The part number or catalog number of the device. */
  partNumber?: string;
  /** Extensions for partNumber */
  _partNumber?: Element;
  /** Indicates the production identifier(s) that are expected to appear in the UDI carrier on the device label. */
  productionIdentifierInUDI?: Array<
    | "biological-source"
    | "expiration-date"
    | "lot-number"
    | "manufactured-date"
    | "serial-number"
    | "software-version"
    | null
  >;
  /** Extensions for productionIdentifierInUDI */
  _productionIdentifierInUDI?: Array<Element | null>;
  /** Static or essentially fixed characteristics or features of this kind of device that are otherwise not captured in more specific attributes, e.g., time or timing attributes, resolution, accuracy, and physical attributes. */
  property?: Array<DeviceDefinition_Property>;
  /** Identifier associated with the regulatory documentation (certificates, technical documentation, post-market surveillance documentation and reports) of a set of device models sharing the same intended purpose, risk class and essential design and manufacturing characteristics. One example is the Basic UDI-DI in Europe. */
  regulatoryIdentifier?: Array<DeviceDefinition_RegulatoryIdentifier>;
  /** This is a DeviceDefinition resource. */
  resourceType: "DeviceDefinition";
  /** Safety characteristics of the device. */
  safety?: Array<CodeableConcept>;
  /** Shelf Life and storage information. */
  shelfLifeStorage?: Array<ProductShelfLife>;
  /** Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold. */
  udiDeviceIdentifier?: Array<DeviceDefinition_UdiDeviceIdentifier>;
  /** The version of the device or software. */
  version?: Array<DeviceDefinition_Version>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getDeviceDefinition_ChargeItemSchema =
  (): z.ZodType<DeviceDefinition_ChargeItem> =>
    DeviceDefinition_ChargeItemSchemaInternal as z.ZodType<DeviceDefinition_ChargeItem>;
const getDeviceDefinition_ClassificationSchema =
  (): z.ZodType<DeviceDefinition_Classification> =>
    DeviceDefinition_ClassificationSchemaInternal as z.ZodType<DeviceDefinition_Classification>;
const getDeviceDefinition_ConformsToSchema =
  (): z.ZodType<DeviceDefinition_ConformsTo> =>
    DeviceDefinition_ConformsToSchemaInternal as z.ZodType<DeviceDefinition_ConformsTo>;
const getDeviceDefinition_CorrectiveActionSchema =
  (): z.ZodType<DeviceDefinition_CorrectiveAction> =>
    DeviceDefinition_CorrectiveActionSchemaInternal as z.ZodType<DeviceDefinition_CorrectiveAction>;
const getDeviceDefinition_DeviceNameSchema =
  (): z.ZodType<DeviceDefinition_DeviceName> =>
    DeviceDefinition_DeviceNameSchemaInternal as z.ZodType<DeviceDefinition_DeviceName>;
const getDeviceDefinition_GuidelineSchema =
  (): z.ZodType<DeviceDefinition_Guideline> =>
    DeviceDefinition_GuidelineSchemaInternal as z.ZodType<DeviceDefinition_Guideline>;
const getDeviceDefinition_HasPartSchema =
  (): z.ZodType<DeviceDefinition_HasPart> =>
    DeviceDefinition_HasPartSchemaInternal as z.ZodType<DeviceDefinition_HasPart>;
const getDeviceDefinition_LinkSchema = (): z.ZodType<DeviceDefinition_Link> =>
  DeviceDefinition_LinkSchemaInternal as z.ZodType<DeviceDefinition_Link>;
const getDeviceDefinition_MaterialSchema =
  (): z.ZodType<DeviceDefinition_Material> =>
    DeviceDefinition_MaterialSchemaInternal as z.ZodType<DeviceDefinition_Material>;
const getDeviceDefinition_PackagingSchema =
  (): z.ZodType<DeviceDefinition_Packaging> =>
    DeviceDefinition_PackagingSchemaInternal as z.ZodType<DeviceDefinition_Packaging>;
const getDeviceDefinition_PropertySchema =
  (): z.ZodType<DeviceDefinition_Property> =>
    DeviceDefinition_PropertySchemaInternal as z.ZodType<DeviceDefinition_Property>;
const getDeviceDefinition_RegulatoryIdentifierSchema =
  (): z.ZodType<DeviceDefinition_RegulatoryIdentifier> =>
    DeviceDefinition_RegulatoryIdentifierSchemaInternal as z.ZodType<DeviceDefinition_RegulatoryIdentifier>;
const getDeviceDefinition_UdiDeviceIdentifierSchema =
  (): z.ZodType<DeviceDefinition_UdiDeviceIdentifier> =>
    DeviceDefinition_UdiDeviceIdentifierSchemaInternal as z.ZodType<DeviceDefinition_UdiDeviceIdentifier>;
const getDeviceDefinition_VersionSchema =
  (): z.ZodType<DeviceDefinition_Version> =>
    DeviceDefinition_VersionSchemaInternal as z.ZodType<DeviceDefinition_Version>;
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
const getProductShelfLifeSchema = (): z.ZodType<ProductShelfLife> =>
  ProductShelfLifeSchemaInternal as z.ZodType<ProductShelfLife>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const DeviceDefinitionSchemaInternal = z
  .object({
    chargeItem: z.lazy(getDeviceDefinition_ChargeItemSchema).array().optional(),
    classification: z
      .lazy(getDeviceDefinition_ClassificationSchema)
      .array()
      .optional(),
    conformsTo: z.lazy(getDeviceDefinition_ConformsToSchema).array().optional(),
    contact: z.lazy(getContactPointSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    correctiveAction: z
      .lazy(getDeviceDefinition_CorrectiveActionSchema)
      .optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    deviceName: z.lazy(getDeviceDefinition_DeviceNameSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    guideline: z.lazy(getDeviceDefinition_GuidelineSchema).optional(),
    hasPart: z.lazy(getDeviceDefinition_HasPartSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    languageCode: z.lazy(getCodeableConceptSchema).array().optional(),
    link: z.lazy(getDeviceDefinition_LinkSchema).array().optional(),
    manufacturer: z.lazy(getReferenceSchema).optional(),
    material: z.lazy(getDeviceDefinition_MaterialSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modelNumber: fhirString().optional(),
    _modelNumber: z.lazy(getElementSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    owner: z.lazy(getReferenceSchema).optional(),
    packaging: z.lazy(getDeviceDefinition_PackagingSchema).array().optional(),
    partNumber: fhirString().optional(),
    _partNumber: z.lazy(getElementSchema).optional(),
    productionIdentifierInUDI: z
      .enum([
        "biological-source",
        "expiration-date",
        "lot-number",
        "manufactured-date",
        "serial-number",
        "software-version",
      ])
      .nullable()
      .array()
      .optional(),
    _productionIdentifierInUDI: z
      .lazy(getElementSchema)
      .nullable()
      .array()
      .optional(),
    property: z.lazy(getDeviceDefinition_PropertySchema).array().optional(),
    regulatoryIdentifier: z
      .lazy(getDeviceDefinition_RegulatoryIdentifierSchema)
      .array()
      .optional(),
    resourceType: z.literal("DeviceDefinition"),
    safety: z.lazy(getCodeableConceptSchema).array().optional(),
    shelfLifeStorage: z.lazy(getProductShelfLifeSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    udiDeviceIdentifier: z
      .lazy(getDeviceDefinition_UdiDeviceIdentifierSchema)
      .array()
      .optional(),
    version: z.lazy(getDeviceDefinition_VersionSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.productionIdentifierInUDI,
      record._productionIdentifierInUDI,
      "productionIdentifierInUDI",
      "_productionIdentifierInUDI",
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
      record.owner,
      "owner",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
  });

export const DeviceDefinitionSchema =
  DeviceDefinitionSchemaInternal as z.ZodType<DeviceDefinition>;
