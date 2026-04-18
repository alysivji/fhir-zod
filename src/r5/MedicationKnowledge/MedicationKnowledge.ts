// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
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
import type { MedicationKnowledge_Cost } from "./MedicationKnowledge_Cost";
import { MedicationKnowledge_CostSchemaInternal } from "./MedicationKnowledge_Cost";
import type { MedicationKnowledge_Definitional } from "./MedicationKnowledge_Definitional";
import { MedicationKnowledge_DefinitionalSchemaInternal } from "./MedicationKnowledge_Definitional";
import type { MedicationKnowledge_IndicationGuideline } from "./MedicationKnowledge_IndicationGuideline";
import { MedicationKnowledge_IndicationGuidelineSchemaInternal } from "./MedicationKnowledge_IndicationGuideline";
import type { MedicationKnowledge_MedicineClassification } from "./MedicationKnowledge_MedicineClassification";
import { MedicationKnowledge_MedicineClassificationSchemaInternal } from "./MedicationKnowledge_MedicineClassification";
import type { MedicationKnowledge_MonitoringProgram } from "./MedicationKnowledge_MonitoringProgram";
import { MedicationKnowledge_MonitoringProgramSchemaInternal } from "./MedicationKnowledge_MonitoringProgram";
import type { MedicationKnowledge_Monograph } from "./MedicationKnowledge_Monograph";
import { MedicationKnowledge_MonographSchemaInternal } from "./MedicationKnowledge_Monograph";
import type { MedicationKnowledge_Packaging } from "./MedicationKnowledge_Packaging";
import { MedicationKnowledge_PackagingSchemaInternal } from "./MedicationKnowledge_Packaging";
import type { MedicationKnowledge_Regulatory } from "./MedicationKnowledge_Regulatory";
import { MedicationKnowledge_RegulatorySchemaInternal } from "./MedicationKnowledge_Regulatory";
import type { MedicationKnowledge_RelatedMedicationKnowledge } from "./MedicationKnowledge_RelatedMedicationKnowledge";
import { MedicationKnowledge_RelatedMedicationKnowledgeSchemaInternal } from "./MedicationKnowledge_RelatedMedicationKnowledge";
import type { MedicationKnowledge_StorageGuideline } from "./MedicationKnowledge_StorageGuideline";
import { MedicationKnowledge_StorageGuidelineSchemaInternal } from "./MedicationKnowledge_StorageGuideline";

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledge extends DomainResource {
  /** Links to associated medications that could be prescribed, dispensed or administered. */
  associatedMedication?: Array<Reference>;
  /** The creator or owner of the knowledge or information about the medication. */
  author?: Reference;
  /** Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.). */
  clinicalUseIssue?: Array<Reference>;
  /** A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
  code?: CodeableConcept;
  /** The price of the medication. */
  cost?: Array<MedicationKnowledge_Cost>;
  /** Along with the link to a Medicinal Product Definition resource, this information provides common definitional elements that are needed to understand the specific medication that is being described. */
  definitional?: MedicationKnowledge_Definitional;
  /** Business identifier for this medication. */
  identifier?: Array<Identifier>;
  /** Guidelines or protocols that are applicable for the administration of the medication based on indication. */
  indicationGuideline?: Array<MedicationKnowledge_IndicationGuideline>;
  /** Lists the jurisdictions that this medication knowledge was written for. */
  intendedJurisdiction?: Array<CodeableConcept>;
  /** Categorization of the medication within a formulary or classification system. */
  medicineClassification?: Array<MedicationKnowledge_MedicineClassification>;
  /** The program under which the medication is reviewed. */
  monitoringProgram?: Array<MedicationKnowledge_MonitoringProgram>;
  /** Associated documentation about the medication. */
  monograph?: Array<MedicationKnowledge_Monograph>;
  /** All of the names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol. */
  name?: Array<string | null>;
  /** Extensions for name */
  _name?: Array<Element | null>;
  /** Information that only applies to packages (not products). */
  packaging?: Array<MedicationKnowledge_Packaging>;
  /** The instructions for preparing the medication. */
  preparationInstruction?: string;
  /** Extensions for preparationInstruction */
  _preparationInstruction?: Element;
  /** Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.). */
  productType?: Array<CodeableConcept>;
  /** Regulatory information about a medication. */
  regulatory?: Array<MedicationKnowledge_Regulatory>;
  /** Associated or related medications. For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor. */
  relatedMedicationKnowledge?: Array<MedicationKnowledge_RelatedMedicationKnowledge>;
  /** This is a MedicationKnowledge resource. */
  resourceType: "MedicationKnowledge";
  /** A code to indicate if the medication referred to by this MedicationKnowledge is in active use within the drug database or inventory system. The status refers to the validity about the information of the medication and not to its medicinal properties. */
  status?: "active" | "entered-in-error" | "inactive";
  /** Extensions for status */
  _status?: Element;
  /** Information on how the medication should be stored, for example, refrigeration temperatures and length of stability at a given temperature. */
  storageGuideline?: Array<MedicationKnowledge_StorageGuideline>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicationKnowledge_CostSchema =
  (): z.ZodType<MedicationKnowledge_Cost> =>
    MedicationKnowledge_CostSchemaInternal as z.ZodType<MedicationKnowledge_Cost>;
const getMedicationKnowledge_DefinitionalSchema =
  (): z.ZodType<MedicationKnowledge_Definitional> =>
    MedicationKnowledge_DefinitionalSchemaInternal as z.ZodType<MedicationKnowledge_Definitional>;
const getMedicationKnowledge_IndicationGuidelineSchema =
  (): z.ZodType<MedicationKnowledge_IndicationGuideline> =>
    MedicationKnowledge_IndicationGuidelineSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline>;
const getMedicationKnowledge_MedicineClassificationSchema =
  (): z.ZodType<MedicationKnowledge_MedicineClassification> =>
    MedicationKnowledge_MedicineClassificationSchemaInternal as z.ZodType<MedicationKnowledge_MedicineClassification>;
const getMedicationKnowledge_MonitoringProgramSchema =
  (): z.ZodType<MedicationKnowledge_MonitoringProgram> =>
    MedicationKnowledge_MonitoringProgramSchemaInternal as z.ZodType<MedicationKnowledge_MonitoringProgram>;
const getMedicationKnowledge_MonographSchema =
  (): z.ZodType<MedicationKnowledge_Monograph> =>
    MedicationKnowledge_MonographSchemaInternal as z.ZodType<MedicationKnowledge_Monograph>;
const getMedicationKnowledge_PackagingSchema =
  (): z.ZodType<MedicationKnowledge_Packaging> =>
    MedicationKnowledge_PackagingSchemaInternal as z.ZodType<MedicationKnowledge_Packaging>;
const getMedicationKnowledge_RegulatorySchema =
  (): z.ZodType<MedicationKnowledge_Regulatory> =>
    MedicationKnowledge_RegulatorySchemaInternal as z.ZodType<MedicationKnowledge_Regulatory>;
const getMedicationKnowledge_RelatedMedicationKnowledgeSchema =
  (): z.ZodType<MedicationKnowledge_RelatedMedicationKnowledge> =>
    MedicationKnowledge_RelatedMedicationKnowledgeSchemaInternal as z.ZodType<MedicationKnowledge_RelatedMedicationKnowledge>;
const getMedicationKnowledge_StorageGuidelineSchema =
  (): z.ZodType<MedicationKnowledge_StorageGuideline> =>
    MedicationKnowledge_StorageGuidelineSchemaInternal as z.ZodType<MedicationKnowledge_StorageGuideline>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicationKnowledgeSchemaInternal = z
  .object({
    associatedMedication: z.lazy(getReferenceSchema).array().optional(),
    author: z.lazy(getReferenceSchema).optional(),
    clinicalUseIssue: z.lazy(getReferenceSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    cost: z.lazy(getMedicationKnowledge_CostSchema).array().optional(),
    definitional: z.lazy(getMedicationKnowledge_DefinitionalSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    indicationGuideline: z
      .lazy(getMedicationKnowledge_IndicationGuidelineSchema)
      .array()
      .optional(),
    intendedJurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    medicineClassification: z
      .lazy(getMedicationKnowledge_MedicineClassificationSchema)
      .array()
      .optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    monitoringProgram: z
      .lazy(getMedicationKnowledge_MonitoringProgramSchema)
      .array()
      .optional(),
    monograph: z
      .lazy(getMedicationKnowledge_MonographSchema)
      .array()
      .optional(),
    name: fhirString().nullable().array().optional(),
    _name: z.lazy(getElementSchema).nullable().array().optional(),
    packaging: z
      .lazy(getMedicationKnowledge_PackagingSchema)
      .array()
      .optional(),
    preparationInstruction: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _preparationInstruction: z.lazy(getElementSchema).optional(),
    productType: z.lazy(getCodeableConceptSchema).array().optional(),
    regulatory: z
      .lazy(getMedicationKnowledge_RegulatorySchema)
      .array()
      .optional(),
    relatedMedicationKnowledge: z
      .lazy(getMedicationKnowledge_RelatedMedicationKnowledgeSchema)
      .array()
      .optional(),
    resourceType: z.literal("MedicationKnowledge"),
    status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
    storageGuideline: z
      .lazy(getMedicationKnowledge_StorageGuidelineSchema)
      .array()
      .optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(record.name, record._name, "name", "_name", ctx);
    validateReferenceTarget(
      record.associatedMedication,
      "associatedMedication",
      ["http://hl7.org/fhir/StructureDefinition/Medication"],
      ["Medication"],
      ctx,
    );
    validateReferenceTarget(
      record.author,
      "author",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.clinicalUseIssue,
      "clinicalUseIssue",
      ["http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition"],
      ["ClinicalUseDefinition"],
      ctx,
    );
  });

export const MedicationKnowledgeSchema =
  MedicationKnowledgeSchemaInternal as z.ZodType<MedicationKnowledge>;
