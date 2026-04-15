// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { MedicationKnowledge_Regulatory_MaxDispense } from "./MedicationKnowledge_Regulatory_MaxDispense";
import { MedicationKnowledge_Regulatory_MaxDispenseSchemaInternal } from "./MedicationKnowledge_Regulatory_MaxDispense";
import type { MedicationKnowledge_Regulatory_Substitution } from "./MedicationKnowledge_Regulatory_Substitution";
import { MedicationKnowledge_Regulatory_SubstitutionSchemaInternal } from "./MedicationKnowledge_Regulatory_Substitution";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Regulatory information about a medication. */
export interface MedicationKnowledge_Regulatory extends BackboneElement {
	/** The maximum number of units of the medication that can be dispensed in a period. */
	maxDispense?: MedicationKnowledge_Regulatory_MaxDispense;
	/** The authority that is specifying the regulations. */
	regulatoryAuthority: Reference;
	/** Specifies the schedule of a medication in jurisdiction. */
	schedule?: Array<CodeableConcept>;
	/** Specifies if changes are allowed when dispensing a medication from a regulatory perspective. */
	substitution?: Array<MedicationKnowledge_Regulatory_Substitution>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicationKnowledge_Regulatory_MaxDispenseSchema =
	(): z.ZodType<MedicationKnowledge_Regulatory_MaxDispense> =>
		MedicationKnowledge_Regulatory_MaxDispenseSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_MaxDispense>;
const getMedicationKnowledge_Regulatory_SubstitutionSchema =
	(): z.ZodType<MedicationKnowledge_Regulatory_Substitution> =>
		MedicationKnowledge_Regulatory_SubstitutionSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_Substitution>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledge_RegulatorySchemaInternal =
	BackboneElementSchemaInternal.extend({
		maxDispense: z
			.lazy(getMedicationKnowledge_Regulatory_MaxDispenseSchema)
			.optional(),
		regulatoryAuthority: z.lazy(getReferenceSchema),
		schedule: z.lazy(getCodeableConceptSchema).array().optional(),
		substitution: z
			.lazy(getMedicationKnowledge_Regulatory_SubstitutionSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.regulatoryAuthority,
				"regulatoryAuthority",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const MedicationKnowledge_RegulatorySchema =
	MedicationKnowledge_RegulatorySchemaInternal as z.ZodType<MedicationKnowledge_Regulatory>;
