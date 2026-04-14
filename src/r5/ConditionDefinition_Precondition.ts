// Profile: http://hl7.org/fhir/StructureDefinition/ConditionDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** An observation that suggests that this condition applies. */
export interface ConditionDefinition_Precondition extends BackboneElement {
	/** Code for relevant Observation. */
	code: CodeableConcept;
	/** Kind of pre-condition. */
	type: "sensitive" | "specific";
	/** Extensions for type */
	_type?: Element;
	/** Value of Observation. */
	valueCodeableConcept?: CodeableConcept;
	/** Value of Observation. */
	valueQuantity?: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ConditionDefinition_PreconditionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		type: z.enum(["sensitive", "specific"]),
		_type: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = ["valueCodeableConcept", "valueQuantity"].filter(
				(field) => record[field] !== undefined,
			);
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueCodeableConcept, valueQuantity may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const ConditionDefinition_PreconditionSchema =
	ConditionDefinition_PreconditionSchemaInternal as z.ZodType<ConditionDefinition_Precondition>;
