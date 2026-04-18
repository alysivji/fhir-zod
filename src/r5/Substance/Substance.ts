// Source: https://hl7.org/fhir/R5/substance.html
// Profile: http://hl7.org/fhir/StructureDefinition/Substance
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Substance_Ingredient } from "./Substance_Ingredient";
import { Substance_IngredientSchemaInternal } from "./Substance_Ingredient";

/** A homogeneous material with a definite composition. */
export interface Substance extends DomainResource {
  /** A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes. */
  category?: Array<CodeableConcept>;
  /** A code (or set of codes) that identify this substance. */
  code: CodeableReference;
  /** A description of the substance - its appearance, handling requirements, and other usage notes. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry. */
  expiry?: string;
  /** Extensions for expiry */
  _expiry?: Element;
  /** Unique identifier for the substance. For an instance, an identifier associated with the package/container (usually a label affixed directly). */
  identifier?: Array<Identifier>;
  /** A substance can be composed of other substances. */
  ingredient?: Array<Substance_Ingredient>;
  /** A boolean to indicate if this an instance of a substance or a kind of one (a definition). */
  instance: boolean;
  /** Extensions for instance */
  _instance?: Element;
  /** The amount of the substance. */
  quantity?: Quantity;
  /** This is a Substance resource. */
  resourceType: "Substance";
  /** A code to indicate if the substance is actively used. */
  status?: "active" | "entered-in-error" | "inactive";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getSubstance_IngredientSchema = (): z.ZodType<Substance_Ingredient> =>
  Substance_IngredientSchemaInternal as z.ZodType<Substance_Ingredient>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SubstanceSchemaInternal = z
  .object({
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableReferenceSchema),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    expiry: fhirDateTime().optional(),
    _expiry: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    ingredient: z.lazy(getSubstance_IngredientSchema).array().optional(),
    instance: z.boolean(),
    _instance: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    resourceType: z.literal("Substance"),
    status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict();

export const SubstanceSchema = SubstanceSchemaInternal as z.ZodType<Substance>;
