// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { ImmunizationRecommendation_Recommendation } from "./ImmunizationRecommendation_Recommendation";
import { ImmunizationRecommendation_RecommendationSchemaInternal } from "./ImmunizationRecommendation_Recommendation";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImmunizationRecommendation_RecommendationSchema =
  (): z.ZodType<ImmunizationRecommendation_Recommendation> =>
    ImmunizationRecommendation_RecommendationSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationRecommendationSchemaInternal =
  DomainResourceSchemaInternal.extend({
    authority: z.lazy(getReferenceSchema).optional(),
    date: fhirDateTime(),
    _date: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    patient: z.lazy(getReferenceSchema),
    recommendation: z
      .lazy(getImmunizationRecommendation_RecommendationSchema)
      .array(),
    resourceType: z.literal("ImmunizationRecommendation"),
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
