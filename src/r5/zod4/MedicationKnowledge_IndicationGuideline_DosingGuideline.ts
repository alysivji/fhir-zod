// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage } from "./MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage";
import { MedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchemaInternal } from "./MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage";
import type { MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic } from "./MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic";
import { MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchemaInternal } from "./MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic";

/** The guidelines for the dosage of the medication for the indication. */
export interface MedicationKnowledge_IndicationGuideline_DosingGuideline
	extends BackboneElement {
	/** The type of the treatment that the guideline applies to, for example, long term therapy, first line treatment, etc. */
	administrationTreatment?: CodeableConcept;
	/** Dosage for the medication for the specific guidelines. */
	dosage?: Array<MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage>;
	/** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.). */
	patientCharacteristic?: Array<MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic>;
	/** The overall intention of the treatment, for example, prophylactic, supporative, curative, etc. */
	treatmentIntent?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchema =
	(): z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage> =>
		MedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline_Dosage>;
const getMedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchema =
	(): z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic> =>
		MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic>;

/** @internal */
export const MedicationKnowledge_IndicationGuideline_DosingGuidelineSchemaInternal =
	BackboneElementSchemaInternal.extend({
		administrationTreatment: z.lazy(getCodeableConceptSchema).optional(),
		dosage: z
			.lazy(
				getMedicationKnowledge_IndicationGuideline_DosingGuideline_DosageSchema,
			)
			.array()
			.optional(),
		patientCharacteristic: z
			.lazy(
				getMedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchema,
			)
			.array()
			.optional(),
		treatmentIntent: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MedicationKnowledge_IndicationGuideline_DosingGuidelineSchema =
	MedicationKnowledge_IndicationGuideline_DosingGuidelineSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline>;
