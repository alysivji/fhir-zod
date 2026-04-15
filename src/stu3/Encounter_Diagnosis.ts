// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T01:26:20.392Z

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

/** The list of diagnosis relevant to this encounter. */
export interface Encounter_Diagnosis extends BackboneElement {
	/** Reason the encounter takes place, as specified using information from another resource. For admissions, this is the admission diagnosis. The indication will typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure. */
	condition: Reference;
	/** Ranking of the diagnosis (for each role type). */
	rank?: number;
	/** Extensions for rank */
	_rank?: Element;
	/** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …). */
	role?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Encounter_DiagnosisSchemaInternal =
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
				[
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["Condition", "Procedure"],
				ctx,
			);
		});

export const Encounter_DiagnosisSchema =
	Encounter_DiagnosisSchemaInternal as z.ZodType<Encounter_Diagnosis>;
