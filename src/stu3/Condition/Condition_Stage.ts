// Profile: http://hl7.org/fhir/StructureDefinition/Condition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Clinical stage or grade of a condition. May include formal severity assessments. */
export interface Condition_Stage extends BackboneElement {
	/** Reference to a formal record of the evidence on which the staging assessment is based. */
	assessment?: Array<Reference>;
	/** A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific. */
	summary?: CodeableConcept;
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
