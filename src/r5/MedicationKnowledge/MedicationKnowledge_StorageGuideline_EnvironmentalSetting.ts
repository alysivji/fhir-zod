// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** Describes a setting/value on the environment for the adequate storage of the medication and other substances.  Environment settings may involve temperature, humidity, or exposure to light. */
export interface MedicationKnowledge_StorageGuideline_EnvironmentalSetting
	extends BackboneElement {
	/** Identifies the category or type of setting (e.g., type of location, temperature, humidity). */
	type: CodeableConcept;
	/** Value associated to the setting. E.g., 40° – 50°F for temperature. */
	valueCodeableConcept?: CodeableConcept;
	/** Value associated to the setting. E.g., 40° – 50°F for temperature. */
	valueQuantity?: Quantity;
	/** Value associated to the setting. E.g., 40° – 50°F for temperature. */
	valueRange?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const MedicationKnowledge_StorageGuideline_EnvironmentalSettingSchemaInternal =
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
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueCodeableConcept, valueQuantity, valueRange must be present for value[x]",
					path: ["valueCodeableConcept"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueCodeableConcept, valueQuantity, valueRange may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const MedicationKnowledge_StorageGuideline_EnvironmentalSettingSchema =
	MedicationKnowledge_StorageGuideline_EnvironmentalSettingSchemaInternal as z.ZodType<MedicationKnowledge_StorageGuideline_EnvironmentalSetting>;
