// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicationKnowledge_AdministrationGuidelines_Dosage } from "./MedicationKnowledge_AdministrationGuidelines_Dosage";
import { MedicationKnowledge_AdministrationGuidelines_DosageSchemaInternal } from "./MedicationKnowledge_AdministrationGuidelines_Dosage";
import type { MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics } from "./MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics";
import { MedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchemaInternal } from "./MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics";

/** Guidelines for the administration of the medication. */
export interface MedicationKnowledge_AdministrationGuidelines
	extends BackboneElement {
	/** Dosage for the medication for the specific guidelines. */
	dosage?: Array<MedicationKnowledge_AdministrationGuidelines_Dosage>;
	/** Indication for use that apply to the specific administration guidelines. */
	indicationCodeableConcept?: CodeableConcept;
	/** Indication for use that apply to the specific administration guidelines. */
	indicationReference?: Reference;
	/** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.). */
	patientCharacteristics?: Array<MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicationKnowledge_AdministrationGuidelines_DosageSchema =
	(): z.ZodType<MedicationKnowledge_AdministrationGuidelines_Dosage> =>
		MedicationKnowledge_AdministrationGuidelines_DosageSchemaInternal as z.ZodType<MedicationKnowledge_AdministrationGuidelines_Dosage>;
const getMedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchema =
	(): z.ZodType<MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics> =>
		MedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchemaInternal as z.ZodType<MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledge_AdministrationGuidelinesSchemaInternal =
	BackboneElementSchemaInternal.extend({
		dosage: z
			.lazy(getMedicationKnowledge_AdministrationGuidelines_DosageSchema)
			.array()
			.optional(),
		indicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		indicationReference: z.lazy(getReferenceSchema).optional(),
		patientCharacteristics: z
			.lazy(
				getMedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchema,
			)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const indication_x_Present = [
				"indicationCodeableConcept",
				"indicationReference",
			].filter((field) => record[field] !== undefined);
			if (indication_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of indicationCodeableConcept, indicationReference may be present for indication[x]",
					path: [indication_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.indicationReference,
				"indicationReference",
				["http://hl7.org/fhir/StructureDefinition/ObservationDefinition"],
				["ObservationDefinition"],
				ctx,
			);
		});

export const MedicationKnowledge_AdministrationGuidelinesSchema =
	MedicationKnowledge_AdministrationGuidelinesSchemaInternal as z.ZodType<MedicationKnowledge_AdministrationGuidelines>;
