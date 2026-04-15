// Profile: http://hl7.org/fhir/StructureDefinition/UsageContext
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Base StructureDefinition for UsageContext Type */
export interface UsageContext extends Element {
	/** A code that identifies the type of context being specified by this usage context. */
	code: Coding;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
	valueCodeableConcept?: CodeableConcept;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
	valueQuantity?: Quantity;
	/** A value that defines the context specified in this context of use. The interpretation of the value is defined by the code. */
	valueRange?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const UsageContextSchemaInternal = ElementSchemaInternal.extend({
	code: z.lazy(getCodingSchema),
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

export const UsageContextSchema =
	UsageContextSchemaInternal as z.ZodType<UsageContext>;
