// Source: https://hl7.org/fhir/STU3/immunizationrecommendation.html
// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
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
import type { ImmunizationRecommendation_Recommendation } from "./ImmunizationRecommendation_Recommendation";
import { ImmunizationRecommendation_RecommendationSchemaInternal } from "./ImmunizationRecommendation_Recommendation";

/** Base StructureDefinition for ImmunizationRecommendation Resource */
export interface ImmunizationRecommendation extends DomainResource {
  /** A unique identifier assigned to this particular recommendation record. */
  identifier?: Array<Identifier>;
  /** The patient the recommendations are for. */
  patient: Reference;
  /** Vaccine administration recommendations. */
  recommendation: Array<ImmunizationRecommendation_Recommendation>;
  /** This is a ImmunizationRecommendation resource. */
  resourceType: "ImmunizationRecommendation";
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImmunizationRecommendation_RecommendationSchema =
  (): z.ZodType<ImmunizationRecommendation_Recommendation> =>
    ImmunizationRecommendation_RecommendationSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ImmunizationRecommendationSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    patient: z.lazy(getReferenceSchema),
    recommendation: z
      .lazy(getImmunizationRecommendation_RecommendationSchema)
      .array(),
    resourceType: z.literal("ImmunizationRecommendation"),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const ImmunizationRecommendationSchema =
  ImmunizationRecommendationSchemaInternal as z.ZodType<ImmunizationRecommendation>;
