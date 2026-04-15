// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Information about diagnoses relevant to the claim items. */
export interface Claim_Diagnosis extends BackboneElement {
	/** The nature of illness or problem in a coded form or as a reference to an external defined Condition. */
	diagnosisCodeableConcept?: CodeableConcept;
	/** The nature of illness or problem in a coded form or as a reference to an external defined Condition. */
	diagnosisReference?: Reference;
	/** Indication of whether the diagnosis was present on admission to a facility. */
	onAdmission?: CodeableConcept;
	/** A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system. */
	packageCode?: CodeableConcept;
	/** A number to uniquely identify diagnosis entries. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** When the condition was observed or the relative ranking. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_DiagnosisSchemaInternal =
	BackboneElementSchemaInternal.extend({
		diagnosisCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		diagnosisReference: z.lazy(getReferenceSchema).optional(),
		onAdmission: z.lazy(getCodeableConceptSchema).optional(),
		packageCode: z.lazy(getCodeableConceptSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const diagnosis_x_Present = [
				"diagnosisCodeableConcept",
				"diagnosisReference",
			].filter((field) => record[field] !== undefined);
			if (diagnosis_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of diagnosisCodeableConcept, diagnosisReference must be present for diagnosis[x]",
					path: ["diagnosisCodeableConcept"],
				});
			}
			if (diagnosis_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of diagnosisCodeableConcept, diagnosisReference may be present for diagnosis[x]",
					path: [diagnosis_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.diagnosisReference,
				"diagnosisReference",
				["http://hl7.org/fhir/StructureDefinition/Condition"],
				["Condition"],
				ctx,
			);
		});

export const Claim_DiagnosisSchema =
	Claim_DiagnosisSchemaInternal as z.ZodType<Claim_Diagnosis>;
