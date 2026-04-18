// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
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
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
		});

export const ImmunizationRecommendationSchema =
	ImmunizationRecommendationSchemaInternal as z.ZodType<ImmunizationRecommendation>;
