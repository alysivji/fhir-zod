// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:03:58.798Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
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
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Population } from "../Population";
import { PopulationSchemaInternal } from "../Population";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicinalProductContraindication_OtherTherapy } from "./MedicinalProductContraindication_OtherTherapy";
import { MedicinalProductContraindication_OtherTherapySchemaInternal } from "./MedicinalProductContraindication_OtherTherapy";

/** The clinical particulars - indications, contraindications etc. of a medicinal product, including for regulatory purposes. */
export interface MedicinalProductContraindication extends DomainResource {
  /** A comorbidity (concurrent condition) or coinfection. */
  comorbidity?: Array<CodeableConcept>;
  /** The disease, symptom or procedure for the contraindication. */
  disease?: CodeableConcept;
  /** The status of the disease or symptom for the contraindication. */
  diseaseStatus?: CodeableConcept;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
  otherTherapy?: Array<MedicinalProductContraindication_OtherTherapy>;
  /** The population group to which this applies. */
  population?: Array<Population>;
  /** This is a MedicinalProductContraindication resource. */
  resourceType: "MedicinalProductContraindication";
  /** The medication for which this is an indication. */
  subject?: Array<Reference>;
  /** Information about the use of the medicinal product in relation to other therapies as part of the indication. */
  therapeuticIndication?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMedicinalProductContraindication_OtherTherapySchema =
  (): z.ZodType<MedicinalProductContraindication_OtherTherapy> =>
    MedicinalProductContraindication_OtherTherapySchemaInternal as z.ZodType<MedicinalProductContraindication_OtherTherapy>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPopulationSchema = (): z.ZodType<Population> =>
  PopulationSchemaInternal as z.ZodType<Population>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductContraindicationSchemaInternal = z
  .object({
    comorbidity: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    disease: z.lazy(getCodeableConceptSchema).optional(),
    diseaseStatus: z.lazy(getCodeableConceptSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    otherTherapy: z
      .lazy(getMedicinalProductContraindication_OtherTherapySchema)
      .array()
      .optional(),
    population: z.lazy(getPopulationSchema).array().optional(),
    resourceType: z.literal("MedicinalProductContraindication"),
    subject: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    therapeuticIndication: z.lazy(getReferenceSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Medication",
        "http://hl7.org/fhir/StructureDefinition/MedicinalProduct",
      ],
      ["Medication", "MedicinalProduct"],
      ctx,
    );
    validateReferenceTarget(
      record.therapeuticIndication,
      "therapeuticIndication",
      ["http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication"],
      ["MedicinalProductIndication"],
      ctx,
    );
  });

export const MedicinalProductContraindicationSchema =
  MedicinalProductContraindicationSchemaInternal as z.ZodType<MedicinalProductContraindication>;
