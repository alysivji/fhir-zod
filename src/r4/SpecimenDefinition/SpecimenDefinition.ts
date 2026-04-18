// Source: https://hl7.org/fhir/R4/specimendefinition.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
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
import type { SpecimenDefinition_TypeTested } from "./SpecimenDefinition_TypeTested";
import { SpecimenDefinition_TypeTestedSchemaInternal } from "./SpecimenDefinition_TypeTested";

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinition extends DomainResource {
  /** The action to be performed for collecting the specimen. */
  collection?: Array<CodeableConcept>;
  /** A business identifier associated with the kind of specimen. */
  identifier?: Identifier;
  /** Preparation of the patient for specimen collection. */
  patientPreparation?: Array<CodeableConcept>;
  /** This is a SpecimenDefinition resource. */
  resourceType: "SpecimenDefinition";
  /** Time aspect of specimen collection (duration or offset). */
  timeAspect?: string;
  /** Extensions for timeAspect */
  _timeAspect?: Element;
  /** The kind of material to be collected. */
  typeCollected?: CodeableConcept;
  /** Specimen conditioned in a container as expected by the testing laboratory. */
  typeTested?: Array<SpecimenDefinition_TypeTested>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
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
const getSpecimenDefinition_TypeTestedSchema =
  (): z.ZodType<SpecimenDefinition_TypeTested> =>
    SpecimenDefinition_TypeTestedSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SpecimenDefinitionSchemaInternal = z
  .object({
    collection: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    patientPreparation: z.lazy(getCodeableConceptSchema).array().optional(),
    resourceType: z.literal("SpecimenDefinition"),
    text: z.lazy(getNarrativeSchema).optional(),
    timeAspect: fhirString().optional(),
    _timeAspect: z.lazy(getElementSchema).optional(),
    typeCollected: z.lazy(getCodeableConceptSchema).optional(),
    typeTested: z
      .lazy(getSpecimenDefinition_TypeTestedSchema)
      .array()
      .optional(),
  })
  .strict();

export const SpecimenDefinitionSchema =
  SpecimenDefinitionSchemaInternal as z.ZodType<SpecimenDefinition>;
