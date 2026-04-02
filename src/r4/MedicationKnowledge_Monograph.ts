// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Associated documentation about the medication. */
export interface MedicationKnowledge_Monograph extends BackboneElement {
	/** Associated documentation about the medication. */
	source?: Reference;
	/** The category of documentation about the medication. (e.g. professional monograph, patient education monograph). */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledge_MonographSchemaInternal =
	BackboneElementSchemaInternal.extend({
		source: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.source,
				"source",
				[
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/Media",
				],
				["DocumentReference", "Media"],
				ctx,
			);
		});

export const MedicationKnowledge_MonographSchema =
	MedicationKnowledge_MonographSchemaInternal as z.ZodType<MedicationKnowledge_Monograph>;
