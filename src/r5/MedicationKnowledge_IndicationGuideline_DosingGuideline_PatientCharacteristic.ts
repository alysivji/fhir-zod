// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.). */
export interface MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic
	extends BackboneElement {
	/** The categorization of the specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender). */
	type: CodeableConcept;
	/** The specific characteristic (e.g. height, weight, gender, etc.). */
	valueCodeableConcept?: CodeableConcept;
	/** The specific characteristic (e.g. height, weight, gender, etc.). */
	valueQuantity?: Quantity;
	/** The specific characteristic (e.g. height, weight, gender, etc.). */
	valueRange?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueCodeableConcept",
				"valueQuantity",
				"valueRange",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueCodeableConcept, valueQuantity, valueRange may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchema =
	MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristicSchemaInternal as z.ZodType<MedicationKnowledge_IndicationGuideline_DosingGuideline_PatientCharacteristic>;
