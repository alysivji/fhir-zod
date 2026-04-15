// Profile: http://hl7.org/fhir/StructureDefinition/Condition
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

/** A simple summary of the stage such as "Stage 3" or "Early Onset". The determination of the stage is disease-specific, such as cancer, retinopathy of prematurity, kidney diseases, Alzheimer's, or Parkinson disease. */
export interface Condition_Stage extends BackboneElement {
	/** Reference to a formal record of the evidence on which the staging assessment is based. */
	assessment?: Array<Reference>;
	/** A simple summary of the stage such as "Stage 3" or "Early Onset". The determination of the stage is disease-specific, such as cancer, retinopathy of prematurity, kidney diseases, Alzheimer's, or Parkinson disease. */
	summary?: CodeableConcept;
	/** The kind of staging, such as pathological or clinical staging. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Condition_StageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		assessment: z.lazy(getReferenceSchema).array().optional(),
		summary: z.lazy(getCodeableConceptSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.assessment,
				"assessment",
				[
					"http://hl7.org/fhir/StructureDefinition/ClinicalImpression",
					"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
					"http://hl7.org/fhir/StructureDefinition/Observation",
				],
				["ClinicalImpression", "DiagnosticReport", "Observation"],
				ctx,
			);
		});

export const Condition_StageSchema =
	Condition_StageSchemaInternal as z.ZodType<Condition_Stage>;
