// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceAmount
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { SubstanceAmount_ReferenceRange } from "./SubstanceAmount_ReferenceRange";
import { SubstanceAmount_ReferenceRangeSchemaInternal } from "./SubstanceAmount_ReferenceRange";

/** Base StructureDefinition for SubstanceAmount Type: Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID. */
export interface SubstanceAmount extends BackboneElement {
	/** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field. */
	amountQuantity?: Quantity;
	/** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field. */
	amountRange?: Range;
	/** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field. */
	amountString?: string;
	/** Extensions for amountString */
	_amountString?: Element;
	/** A textual comment on a numeric value. */
	amountText?: string;
	/** Extensions for amountText */
	_amountText?: Element;
	/** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements. */
	amountType?: CodeableConcept;
	/** Reference range of possible or expected values. */
	referenceRange?: SubstanceAmount_ReferenceRange;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getSubstanceAmount_ReferenceRangeSchema =
	(): z.ZodType<SubstanceAmount_ReferenceRange> =>
		SubstanceAmount_ReferenceRangeSchemaInternal as z.ZodType<SubstanceAmount_ReferenceRange>;

/** @internal */
export const SubstanceAmountSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amountQuantity: z.lazy(getQuantitySchema).optional(),
		amountRange: z.lazy(getRangeSchema).optional(),
		amountString: fhirString().optional(),
		_amountString: z.lazy(getElementSchema).optional(),
		amountText: fhirString().optional(),
		_amountText: z.lazy(getElementSchema).optional(),
		amountType: z.lazy(getCodeableConceptSchema).optional(),
		referenceRange: z.lazy(getSubstanceAmount_ReferenceRangeSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const amount_x_Present = [
				"amountQuantity",
				"amountRange",
				"amountString",
			].filter((field) => record[field] !== undefined);
			if (amount_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of amountQuantity, amountRange, amountString may be present for amount[x]",
					path: [amount_x_Present[0]],
				});
			}
		});

export const SubstanceAmountSchema =
	SubstanceAmountSchemaInternal as z.ZodType<SubstanceAmount>;
