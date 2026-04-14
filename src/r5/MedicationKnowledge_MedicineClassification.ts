// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Categorization of the medication within a formulary or classification system. */
export interface MedicationKnowledge_MedicineClassification
	extends BackboneElement {
	/** Specific category assigned to the medication (e.g. anti-infective, anti-hypertensive, antibiotic, etc.). */
	classification?: Array<CodeableConcept>;
	/** Either a textual source of the classification or a reference to an online source. */
	sourceString?: string;
	/** Extensions for sourceString */
	_sourceString?: Element;
	/** Either a textual source of the classification or a reference to an online source. */
	sourceUri?: string;
	/** Extensions for sourceUri */
	_sourceUri?: Element;
	/** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification). */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MedicationKnowledge_MedicineClassificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		classification: z.lazy(getCodeableConceptSchema).array().optional(),
		sourceString: fhirString().optional(),
		_sourceString: z.lazy(getElementSchema).optional(),
		sourceUri: fhirUri().optional(),
		_sourceUri: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const source_x_Present = ["sourceString", "sourceUri"].filter(
				(field) => record[field] !== undefined,
			);
			if (source_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of sourceString, sourceUri may be present for source[x]",
					path: [source_x_Present[0]],
				});
			}
		});

export const MedicationKnowledge_MedicineClassificationSchema =
	MedicationKnowledge_MedicineClassificationSchemaInternal as z.ZodType<MedicationKnowledge_MedicineClassification>;
