// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalImpression
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes. */
export interface ClinicalImpression_Investigation extends BackboneElement {
	/** A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used. */
	code: CodeableConcept;
	/** A record of a specific investigation that was undertaken. */
	item?: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalImpression_InvestigationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		item: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.item,
				"item",
				["http://hl7.org/fhir/StructureDefinition/Observation"],
				["Observation"],
				ctx,
			);
		});

export const ClinicalImpression_InvestigationSchema =
	ClinicalImpression_InvestigationSchemaInternal as z.ZodType<ClinicalImpression_Investigation>;
