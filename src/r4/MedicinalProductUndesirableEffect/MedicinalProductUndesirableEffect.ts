// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect
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

/** Describe the undesirable effects of the medicinal product. */
export interface MedicinalProductUndesirableEffect extends DomainResource {
  /** Classification of the effect. */
  classification?: CodeableConcept;
  /** The frequency of occurrence of the effect. */
  frequencyOfOccurrence?: CodeableConcept;
  /** The population group to which this applies. */
  population?: Array<Population>;
  /** This is a MedicinalProductUndesirableEffect resource. */
  resourceType: "MedicinalProductUndesirableEffect";
  /** The medication for which this is an indication. */
  subject?: Array<Reference>;
  /** The symptom, condition or undesirable effect. */
  symptomConditionEffect?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
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
export const MedicinalProductUndesirableEffectSchemaInternal = z
  .object({
    classification: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    frequencyOfOccurrence: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    population: z.lazy(getPopulationSchema).array().optional(),
    resourceType: z.literal("MedicinalProductUndesirableEffect"),
    subject: z.lazy(getReferenceSchema).array().optional(),
    symptomConditionEffect: z.lazy(getCodeableConceptSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
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
  });

export const MedicinalProductUndesirableEffectSchema =
  MedicinalProductUndesirableEffectSchemaInternal as z.ZodType<MedicinalProductUndesirableEffect>;
