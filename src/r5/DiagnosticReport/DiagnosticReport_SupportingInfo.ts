// Profile: http://hl7.org/fhir/StructureDefinition/DiagnosticReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** This backbone element contains supporting information that was used in the creation of the report not included in the results already included in the report. */
export interface DiagnosticReport_SupportingInfo extends BackboneElement {
	/** The reference for the supporting information in the diagnostic report. */
	reference: Reference;
	/** The code value for the role of the supporting information in the diagnostic report. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DiagnosticReport_SupportingInfoSchemaInternal =
	BackboneElementSchemaInternal.extend({
		reference: z.lazy(getReferenceSchema),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				[
					"http://hl7.org/fhir/StructureDefinition/Citation",
					"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["Citation", "DiagnosticReport", "Observation", "Procedure"],
				ctx,
			);
		});

export const DiagnosticReport_SupportingInfoSchema =
	DiagnosticReport_SupportingInfoSchemaInternal as z.ZodType<DiagnosticReport_SupportingInfo>;
