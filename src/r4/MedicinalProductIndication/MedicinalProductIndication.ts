// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication
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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicinalProductIndication_OtherTherapy } from "./MedicinalProductIndication_OtherTherapy";
import { MedicinalProductIndication_OtherTherapySchemaInternal } from "./MedicinalProductIndication_OtherTherapy";

/** Indication for the Medicinal Product. */
export interface MedicinalProductIndication extends DomainResource {
  /** Comorbidity (concurrent condition) or co-infection as part of the indication. */
  comorbidity?: Array<CodeableConcept>;
  /** The status of the disease or symptom for which the indication applies. */
  diseaseStatus?: CodeableConcept;
  /** The disease, symptom or procedure that is the indication for treatment. */
  diseaseSymptomProcedure?: CodeableConcept;
  /** Timing or duration information as part of the indication. */
  duration?: Quantity;
  /** The intended effect, aim or strategy to be achieved by the indication. */
  intendedEffect?: CodeableConcept;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
  otherTherapy?: Array<MedicinalProductIndication_OtherTherapy>;
  /** The population group to which this applies. */
  population?: Array<Population>;
  /** This is a MedicinalProductIndication resource. */
  resourceType: "MedicinalProductIndication";
  /** The medication for which this is an indication. */
  subject?: Array<Reference>;
  /** Describe the undesirable effects of the medicinal product. */
  undesirableEffect?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMedicinalProductIndication_OtherTherapySchema =
  (): z.ZodType<MedicinalProductIndication_OtherTherapy> =>
    MedicinalProductIndication_OtherTherapySchemaInternal as z.ZodType<MedicinalProductIndication_OtherTherapy>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPopulationSchema = (): z.ZodType<Population> =>
  PopulationSchemaInternal as z.ZodType<Population>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicinalProductIndicationSchemaInternal = z
  .object({
    comorbidity: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    diseaseStatus: z.lazy(getCodeableConceptSchema).optional(),
    diseaseSymptomProcedure: z.lazy(getCodeableConceptSchema).optional(),
    duration: z.lazy(getQuantitySchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    intendedEffect: z.lazy(getCodeableConceptSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    otherTherapy: z
      .lazy(getMedicinalProductIndication_OtherTherapySchema)
      .array()
      .optional(),
    population: z.lazy(getPopulationSchema).array().optional(),
    resourceType: z.literal("MedicinalProductIndication"),
    subject: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    undesirableEffect: z.lazy(getReferenceSchema).array().optional(),
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
      record.undesirableEffect,
      "undesirableEffect",
      [
        "http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect",
      ],
      ["MedicinalProductUndesirableEffect"],
      ctx,
    );
  });

export const MedicinalProductIndicationSchema =
  MedicinalProductIndicationSchemaInternal as z.ZodType<MedicinalProductIndication>;
