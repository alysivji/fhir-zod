// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Supporting information relevant to the event. */
export interface AdverseEvent_SupportingInfo extends BackboneElement {
	/** Relevant past history for the subject. In a clinical care context, an example being a patient had an adverse event following a pencillin administration and the patient had a previously documented penicillin allergy. In a clinical trials context, an example is a bunion or rash that was present prior to the study. Additionally, the supporting item can be a document that is relevant to this instance of the adverse event that is not part of the subject's medical history. For example, a clinical note, staff list, or material safety data sheet (MSDS).  Supporting information is not a contributing factor, preventive action, or mitigating action. */
	itemCodeableConcept?: CodeableConcept;
	/** Relevant past history for the subject. In a clinical care context, an example being a patient had an adverse event following a pencillin administration and the patient had a previously documented penicillin allergy. In a clinical trials context, an example is a bunion or rash that was present prior to the study. Additionally, the supporting item can be a document that is relevant to this instance of the adverse event that is not part of the subject's medical history. For example, a clinical note, staff list, or material safety data sheet (MSDS).  Supporting information is not a contributing factor, preventive action, or mitigating action. */
	itemReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEvent_SupportingInfoSchemaInternal =
	BackboneElementSchemaInternal.extend({
		itemCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		itemReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const item_x_Present = ["itemCodeableConcept", "itemReference"].filter(
				(field) => record[field] !== undefined,
			);
			if (item_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of itemCodeableConcept, itemReference must be present for item[x]",
					path: ["itemCodeableConcept"],
				});
			}
			if (item_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of itemCodeableConcept, itemReference may be present for item[x]",
					path: [item_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.itemReference,
				"itemReference",
				[
					"http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
					"http://hl7.org/fhir/StructureDefinition/Immunization",
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
					"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
				],
				[
					"AllergyIntolerance",
					"Condition",
					"DocumentReference",
					"FamilyMemberHistory",
					"Immunization",
					"MedicationAdministration",
					"MedicationStatement",
					"Observation",
					"Procedure",
					"QuestionnaireResponse",
				],
				ctx,
			);
		});

export const AdverseEvent_SupportingInfoSchema =
	AdverseEvent_SupportingInfoSchemaInternal as z.ZodType<AdverseEvent_SupportingInfo>;
