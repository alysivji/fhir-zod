// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Associated or related knowledge about a medication. */
export interface MedicationKnowledge_RelatedMedicationKnowledge
	extends BackboneElement {
	/** Associated documentation about the associated medication knowledge. */
	reference: Array<Reference>;
	/** The category of the associated medication knowledge reference. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledge_RelatedMedicationKnowledgeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		reference: z.lazy(getReferenceSchema).array(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/MedicationKnowledge"],
				["MedicationKnowledge"],
				ctx,
			);
		});

export const MedicationKnowledge_RelatedMedicationKnowledgeSchema =
	MedicationKnowledge_RelatedMedicationKnowledgeSchemaInternal as z.ZodType<MedicationKnowledge_RelatedMedicationKnowledge>;
