// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Medication_Ingredient } from "./Medication_Ingredient";
import { Medication_IngredientSchemaInternal } from "./Medication_Ingredient";
import type { Medication_Package } from "./Medication_Package";
import { Medication_PackageSchemaInternal } from "./Medication_Package";

/** Base StructureDefinition for Medication Resource */
export interface Medication extends DomainResource {
  /** A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
  code?: CodeableConcept;
  /** Describes the form of the item.  Powder; tablets; capsule. */
  form?: CodeableConcept;
  /** Photo(s) or graphic representation(s) of the medication. */
  image?: Array<Attachment>;
  /** Identifies a particular constituent of interest in the product. */
  ingredient?: Array<Medication_Ingredient>;
  /** Set to true if the item is attributable to a specific manufacturer. */
  isBrand?: boolean;
  /** Extensions for isBrand */
  _isBrand?: Element;
  /** Set to true if the medication can be obtained without an order from a prescriber. */
  isOverTheCounter?: boolean;
  /** Extensions for isOverTheCounter */
  _isOverTheCounter?: Element;
  /** Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product. */
  manufacturer?: Reference;
  /** Information that only applies to packages (not products). */
  package?: Medication_Package;
  /** This is a Medication resource. */
  resourceType: "Medication";
  /** A code to indicate if the medication is in active use. */
  status?: "active" | "entered-in-error" | "inactive";
  /** Extensions for status */
  _status?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMedication_IngredientSchema = (): z.ZodType<Medication_Ingredient> =>
  Medication_IngredientSchemaInternal as z.ZodType<Medication_Ingredient>;
const getMedication_PackageSchema = (): z.ZodType<Medication_Package> =>
  Medication_PackageSchemaInternal as z.ZodType<Medication_Package>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicationSchemaInternal = z
  .object({
    code: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    image: z.lazy(getAttachmentSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getMedication_IngredientSchema).array().optional(),
    isBrand: z.boolean().optional(),
    _isBrand: z.lazy(getElementSchema).optional(),
    isOverTheCounter: z.boolean().optional(),
    _isOverTheCounter: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    manufacturer: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    package: z.lazy(getMedication_PackageSchema).optional(),
    resourceType: z.literal("Medication"),
    status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
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
  });

export const MedicationSchema =
  MedicationSchemaInternal as z.ZodType<Medication>;
