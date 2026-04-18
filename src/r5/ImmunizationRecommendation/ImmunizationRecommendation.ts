// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
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

/** A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification. */
export interface ImmunizationRecommendation extends DomainResource {
  /** Indicates the authority who published the protocol (e.g. ACIP). */
  authority?: Reference;
  /** The date the immunization recommendation(s) were created. */
  date: string;
  /** Extensions for date */
  _date?: Element;
  /** A unique identifier assigned to this particular recommendation record. */
  identifier?: Array<Identifier>;
  /** The patient the recommendation(s) are for. */
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
    authority: z.lazy(getReferenceSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime(),
    _date: z.lazy(getElementSchema).optional(),
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
      record.authority,
      "authority",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
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
