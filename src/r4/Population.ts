// Profile: http://hl7.org/fhir/StructureDefinition/Population
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Base StructureDefinition for Population Type: A populatioof people with some set of grouping criteria. */
export interface Population extends BackboneElement {
	/** The age of the specific population. */
	ageCodeableConcept?: CodeableConcept;
	/** The age of the specific population. */
	ageRange?: Range;
	/** The gender of the specific population. */
	gender?: CodeableConcept;
	/** The existing physiological conditions of the specific population to which this applies. */
	physiologicalCondition?: CodeableConcept;
	/** Race of the specific population. */
	race?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const PopulationSchemaInternal = BackboneElementSchemaInternal.extend({
	ageCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	ageRange: z.lazy(getRangeSchema).optional(),
	gender: z.lazy(getCodeableConceptSchema).optional(),
	physiologicalCondition: z.lazy(getCodeableConceptSchema).optional(),
	race: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const age_x_Present = ["ageCodeableConcept", "ageRange"].filter(
			(field) => record[field] !== undefined,
		);
		if (age_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of ageCodeableConcept, ageRange may be present for age[x]",
				path: [age_x_Present[0]],
			});
		}
	});

export const PopulationSchema =
	PopulationSchemaInternal as z.ZodType<Population>;
