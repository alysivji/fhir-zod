// Profile: http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The list of diagnosis relevant to this episode of care. */
export interface EpisodeOfCare_Diagnosis extends BackboneElement {
	/** A list of conditions/problems/diagnoses that this episode of care is intended to be providing care for. */
	condition: Reference;
	/** Ranking of the diagnosis (for each role type). */
	rank?: number;
	/** Extensions for rank */
	_rank?: Element;
	/** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …). */
	role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EpisodeOfCare_DiagnosisSchemaInternal =
	BackboneElementSchemaInternal.extend({
		condition: z.lazy(getReferenceSchema),
		rank: z.number().int().positive().optional(),
		_rank: z.lazy(getElementSchema).optional(),
		role: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.condition,
				"condition",
				["http://hl7.org/fhir/StructureDefinition/Condition"],
				["Condition"],
				ctx,
			);
		});

export const EpisodeOfCare_DiagnosisSchema =
	EpisodeOfCare_DiagnosisSchemaInternal as z.ZodType<EpisodeOfCare_Diagnosis>;
