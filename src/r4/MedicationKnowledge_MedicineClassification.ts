// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Categorization of the medication within a formulary or classification system. */
export interface MedicationKnowledge_MedicineClassification
	extends BackboneElement {
	/** Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.). */
	classification?: Array<CodeableConcept>;
	/** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification). */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicationKnowledge_MedicineClassificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		classification: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const MedicationKnowledge_MedicineClassificationSchema =
	MedicationKnowledge_MedicineClassificationSchemaInternal as z.ZodType<MedicationKnowledge_MedicineClassification>;
