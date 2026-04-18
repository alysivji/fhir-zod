// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalImpression
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes. */
export interface ClinicalImpression_Investigation extends BackboneElement {
	/** A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used. */
	code: CodeableConcept;
	/** A record of a specific investigation that was undertaken. */
	item?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalImpression_InvestigationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		item: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.item,
				"item",
				[
					"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
					"http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
					"http://hl7.org/fhir/StructureDefinition/ImagingStudy",
					"http://hl7.org/fhir/StructureDefinition/Media",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
					"http://hl7.org/fhir/StructureDefinition/RiskAssessment",
				],
				[
					"DiagnosticReport",
					"FamilyMemberHistory",
					"ImagingStudy",
					"Media",
					"Observation",
					"QuestionnaireResponse",
					"RiskAssessment",
				],
				ctx,
			);
		});

export const ClinicalImpression_InvestigationSchema =
	ClinicalImpression_InvestigationSchemaInternal as z.ZodType<ClinicalImpression_Investigation>;
