// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The assignment to an organizing scheme. */
export interface Citation_CitedArtifact_Classification extends BackboneElement {
	/** Complex or externally created classification. */
	artifactAssessment?: Array<Reference>;
	/** The specific classification value. */
	classifier?: Array<CodeableConcept>;
	/** The kind of classifier (e.g. publication type, keyword). */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_ClassificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		artifactAssessment: z.lazy(getReferenceSchema).array().optional(),
		classifier: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.artifactAssessment,
				"artifactAssessment",
				["http://hl7.org/fhir/StructureDefinition/ArtifactAssessment"],
				["ArtifactAssessment"],
				ctx,
			);
		});

export const Citation_CitedArtifact_ClassificationSchema =
	Citation_CitedArtifact_ClassificationSchemaInternal as z.ZodType<Citation_CitedArtifact_Classification>;
