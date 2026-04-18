// Source: https://hl7.org/fhir/R4/substance.html
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
import type { Substance_Ingredient } from "./Substance_Ingredient";
import { Substance_IngredientSchemaInternal } from "./Substance_Ingredient";
import type { Substance_Instance } from "./Substance_Instance";
import { Substance_InstanceSchemaInternal } from "./Substance_Instance";

/** A homogeneous material with a definite composition. */
export interface Substance extends DomainResource {
  /** A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes. */
  category?: Array<CodeableConcept>;
  /** A code (or set of codes) that identify this substance. */
  code: CodeableConcept;
  /** A description of the substance - its appearance, handling requirements, and other usage notes. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Unique identifier for the substance. */
  identifier?: Array<Identifier>;
  /** A substance can be composed of other substances. */
  ingredient?: Array<Substance_Ingredient>;
  /** Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance. */
  instance?: Array<Substance_Instance>;
  /** This is a Substance resource. */
  resourceType: "Substance";
  /** A code to indicate if the substance is actively used. */
  status?: "active" | "entered-in-error" | "inactive";
  /** Extensions for status */
  _status?: Element;
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
const getSubstance_IngredientSchema = (): z.ZodType<Substance_Ingredient> =>
  Substance_IngredientSchemaInternal as z.ZodType<Substance_Ingredient>;
const getSubstance_InstanceSchema = (): z.ZodType<Substance_Instance> =>
  Substance_InstanceSchemaInternal as z.ZodType<Substance_Instance>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubstanceSchemaInternal = z
  .object({
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getSubstance_IngredientSchema).array().optional(),
    instance: z.lazy(getSubstance_InstanceSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    resourceType: z.literal("Substance"),
    status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict();

export const SubstanceSchema = SubstanceSchemaInternal as z.ZodType<Substance>;
