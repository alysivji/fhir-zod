// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { MedicationKnowledge_Regulatory_MaxDispense } from "./MedicationKnowledge_Regulatory_MaxDispense";
import { MedicationKnowledge_Regulatory_MaxDispenseSchemaInternal } from "./MedicationKnowledge_Regulatory_MaxDispense";
import type { MedicationKnowledge_Regulatory_Schedule } from "./MedicationKnowledge_Regulatory_Schedule";
import { MedicationKnowledge_Regulatory_ScheduleSchemaInternal } from "./MedicationKnowledge_Regulatory_Schedule";
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
	schedule?: Array<MedicationKnowledge_Regulatory_Schedule>;
	/** Specifies if changes are allowed when dispensing a medication from a regulatory perspective. */
	substitution?: Array<MedicationKnowledge_Regulatory_Substitution>;
}

const getMedicationKnowledge_Regulatory_MaxDispenseSchema =
	(): z.ZodType<MedicationKnowledge_Regulatory_MaxDispense> =>
		MedicationKnowledge_Regulatory_MaxDispenseSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_MaxDispense>;
const getMedicationKnowledge_Regulatory_ScheduleSchema =
	(): z.ZodType<MedicationKnowledge_Regulatory_Schedule> =>
		MedicationKnowledge_Regulatory_ScheduleSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_Schedule>;
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
		schedule: z
			.lazy(getMedicationKnowledge_Regulatory_ScheduleSchema)
			.array()
			.optional(),
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
