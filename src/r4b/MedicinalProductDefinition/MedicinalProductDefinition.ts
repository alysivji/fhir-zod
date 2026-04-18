// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:04:03.496Z

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
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
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
import type { MedicinalProductDefinition_Characteristic } from "./MedicinalProductDefinition_Characteristic";
import { MedicinalProductDefinition_CharacteristicSchemaInternal } from "./MedicinalProductDefinition_Characteristic";
import type { MedicinalProductDefinition_Contact } from "./MedicinalProductDefinition_Contact";
import { MedicinalProductDefinition_ContactSchemaInternal } from "./MedicinalProductDefinition_Contact";
import type { MedicinalProductDefinition_CrossReference } from "./MedicinalProductDefinition_CrossReference";
import { MedicinalProductDefinition_CrossReferenceSchemaInternal } from "./MedicinalProductDefinition_CrossReference";
import type { MedicinalProductDefinition_Name } from "./MedicinalProductDefinition_Name";
import { MedicinalProductDefinition_NameSchemaInternal } from "./MedicinalProductDefinition_Name";
import type { MedicinalProductDefinition_Operation } from "./MedicinalProductDefinition_Operation";
import { MedicinalProductDefinition_OperationSchemaInternal } from "./MedicinalProductDefinition_Operation";

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.). */
export interface MedicinalProductDefinition extends DomainResource {
  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons, such as heightened reporting requirements. */
  additionalMonitoringIndicator?: CodeableConcept;
  /** Additional information or supporting documentation about the medicinal product. */
  attachedDocument?: Array<Reference>;
  /** Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import". */
  characteristic?: Array<MedicinalProductDefinition_Characteristic>;
  /** Allows the product to be classified by various systems, commonly WHO ATC. */
  classification?: Array<CodeableConcept>;
  /** Clinical trials or studies that this product is involved in. */
  clinicalTrial?: Array<Reference>;
  /** A code that this product is known by, usually within some formal terminology, perhaps assigned by a third party (i.e. not the manufacturer or regulator). Products (types of medications) tend to be known by identifiers during development and within regulatory process. However when they are prescribed they tend to be identified by codes. The same product may be have multiple codes, applied to it by multiple organizations. */
  code?: Array<Coding>;
  /** The dose form for a single part product, or combined form of a multiple part product. This is one concept that describes all the components. It does not represent the form with components physically mixed, if that might be necessary, for which see (AdministrableProductDefinition.administrableDoseForm). */
  combinedPharmaceuticalDoseForm?: CodeableConcept;
  /** A product specific contact, person (in a role), or an organization. */
  contact?: Array<MedicinalProductDefinition_Contact>;
  /** Reference to another product, e.g. for linking authorised to investigational product, or a virtual product. */
  crossReference?: Array<MedicinalProductDefinition_CrossReference>;
  /** General description of this product. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** If this medicine applies to human or veterinary uses. */
  domain?: CodeableConcept;
  /** Business identifier for this product. Could be an MPID. When in development or being regulated, products are typically referenced by official identifiers, assigned by a manufacturer or regulator, and unique to a product (which, when compared to a product instance being prescribed, is actually a product type). See also MedicinalProductDefinition.code. */
  identifier?: Array<Identifier>;
  /** Any component of the drug product which is not the chemical entity defined as the drug substance, or an excipient in the drug product. This includes process-related impurities and contaminants, product-related impurities including degradation products. */
  impurity?: Array<CodeableReference>;
  /** Description of indication(s) for this product, used when structured indications are not required. In cases where structured indications are required, they are captured using the ClinicalUseDefinition resource. An indication is a medical situation for which using the product is appropriate. */
  indication?: string;
  /** Extensions for indication */
  _indication?: Element;
  /** The ingredients of this medicinal product - when not detailed in other resources. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource, or indirectly via incoming AdministrableProductDefinition, PackagedProductDefinition or ManufacturedItemDefinition references. In cases where those levels of detail are not used, the ingredients may be specified directly here as codes. */
  ingredient?: Array<CodeableConcept>;
  /** The legal status of supply of the medicinal product as classified by the regulator. */
  legalStatusOfSupply?: CodeableConcept;
  /** Marketing status of the medicinal product, in contrast to marketing authorization. This refers to the product being actually 'on the market' as opposed to being allowed to be on the market (which is an authorization). */
  marketingStatus?: Array<MarketingStatus>;
  /** A master file for the medicinal product (e.g. Pharmacovigilance System Master File). Drug master files (DMFs) are documents submitted to regulatory agencies to provide confidential detailed information about facilities, processes or articles used in the manufacturing, processing, packaging and storing of drug products. */
  masterFile?: Array<Reference>;
  /** The product's name, including full name and possibly coded parts. */
  name: Array<MedicinalProductDefinition_Name>;
  /** A manufacturing or administrative process or step associated with (or performed on) the medicinal product. */
  operation?: Array<MedicinalProductDefinition_Operation>;
  /** Package type for the product. See also the PackagedProductDefinition resource. */
  packagedMedicinalProduct?: Array<CodeableConcept>;
  /** If authorised for use in children, or infants, neonates etc. */
  pediatricUseIndicator?: CodeableConcept;
  /** This is a MedicinalProductDefinition resource. */
  resourceType: "MedicinalProductDefinition";
  /** The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. See also AdministrableProductDefinition resource. MedicinalProductDefinition.route is the same concept as AdministrableProductDefinition.routeOfAdministration.code, and they cannot be used together. */
  route?: Array<CodeableConcept>;
  /** Whether the Medicinal Product is subject to special measures for regulatory reasons, such as a requirement to conduct post-authorisation studies. */
  specialMeasures?: Array<CodeableConcept>;
  /** The status within the lifecycle of this product record. A high-level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization status. */
  status?: CodeableConcept;
  /** The date at which the given status became applicable. */
  statusDate?: string;
  /** Extensions for statusDate */
  _statusDate?: Element;
  /** Regulatory type, e.g. Investigational or Authorized. */
  type?: CodeableConcept;
  /** A business identifier relating to a specific version of the product, this is commonly used to support revisions to an existing product. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMarketingStatusSchema = (): z.ZodType<MarketingStatus> =>
  MarketingStatusSchemaInternal as z.ZodType<MarketingStatus>;
const getMedicinalProductDefinition_CharacteristicSchema =
  (): z.ZodType<MedicinalProductDefinition_Characteristic> =>
    MedicinalProductDefinition_CharacteristicSchemaInternal as z.ZodType<MedicinalProductDefinition_Characteristic>;
const getMedicinalProductDefinition_ContactSchema =
  (): z.ZodType<MedicinalProductDefinition_Contact> =>
    MedicinalProductDefinition_ContactSchemaInternal as z.ZodType<MedicinalProductDefinition_Contact>;
const getMedicinalProductDefinition_CrossReferenceSchema =
  (): z.ZodType<MedicinalProductDefinition_CrossReference> =>
    MedicinalProductDefinition_CrossReferenceSchemaInternal as z.ZodType<MedicinalProductDefinition_CrossReference>;
const getMedicinalProductDefinition_NameSchema =
  (): z.ZodType<MedicinalProductDefinition_Name> =>
    MedicinalProductDefinition_NameSchemaInternal as z.ZodType<MedicinalProductDefinition_Name>;
const getMedicinalProductDefinition_OperationSchema =
  (): z.ZodType<MedicinalProductDefinition_Operation> =>
    MedicinalProductDefinition_OperationSchemaInternal as z.ZodType<MedicinalProductDefinition_Operation>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductDefinitionSchemaInternal = z
  .object({
    additionalMonitoringIndicator: z.lazy(getCodeableConceptSchema).optional(),
    attachedDocument: z.lazy(getReferenceSchema).array().optional(),
    characteristic: z
      .lazy(getMedicinalProductDefinition_CharacteristicSchema)
      .array()
      .optional(),
    classification: z.lazy(getCodeableConceptSchema).array().optional(),
    clinicalTrial: z.lazy(getReferenceSchema).array().optional(),
    code: z.lazy(getCodingSchema).array().optional(),
    combinedPharmaceuticalDoseForm: z.lazy(getCodeableConceptSchema).optional(),
    contact: z
      .lazy(getMedicinalProductDefinition_ContactSchema)
      .array()
      .optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    crossReference: z
      .lazy(getMedicinalProductDefinition_CrossReferenceSchema)
      .array()
      .optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    domain: z.lazy(getCodeableConceptSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    impurity: z.lazy(getCodeableReferenceSchema).array().optional(),
    indication: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _indication: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    legalStatusOfSupply: z.lazy(getCodeableConceptSchema).optional(),
    marketingStatus: z.lazy(getMarketingStatusSchema).array().optional(),
    masterFile: z.lazy(getReferenceSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: z.lazy(getMedicinalProductDefinition_NameSchema).array(),
    operation: z
      .lazy(getMedicinalProductDefinition_OperationSchema)
      .array()
      .optional(),
    packagedMedicinalProduct: z
      .lazy(getCodeableConceptSchema)
      .array()
      .optional(),
    pediatricUseIndicator: z.lazy(getCodeableConceptSchema).optional(),
    resourceType: z.literal("MedicinalProductDefinition"),
    route: z.lazy(getCodeableConceptSchema).array().optional(),
    specialMeasures: z.lazy(getCodeableConceptSchema).array().optional(),
    status: z.lazy(getCodeableConceptSchema).optional(),
    statusDate: fhirDateTime().optional(),
    _statusDate: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
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
      record.clinicalTrial,
      "clinicalTrial",
      ["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
      ["ResearchStudy"],
      ctx,
    );
    validateReferenceTarget(
      record.masterFile,
      "masterFile",
      ["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
      ["DocumentReference"],
      ctx,
    );
  });

export const MedicinalProductDefinitionSchema =
  MedicinalProductDefinitionSchemaInternal as z.ZodType<MedicinalProductDefinition>;
