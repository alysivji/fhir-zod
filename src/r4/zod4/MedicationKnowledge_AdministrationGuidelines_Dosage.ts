// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Dosage } from "./Dosage";
import { DosageSchemaInternal } from "./Dosage";

/** Dosage for the medication for the specific guidelines. */
export interface MedicationKnowledge_AdministrationGuidelines_Dosage
	extends BackboneElement {
	/** Dosage for the medication for the specific guidelines. */
	dosage: Array<Dosage>;
	/** The type of dosage (for example, prophylaxis, maintenance, therapeutic, etc.). */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDosageSchema = (): z.ZodType<Dosage> =>
	DosageSchemaInternal as z.ZodType<Dosage>;

/** @internal */
export const MedicationKnowledge_AdministrationGuidelines_DosageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		dosage: z.lazy(getDosageSchema).array(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const MedicationKnowledge_AdministrationGuidelines_DosageSchema =
	MedicationKnowledge_AdministrationGuidelines_DosageSchemaInternal as z.ZodType<MedicationKnowledge_AdministrationGuidelines_Dosage>;
