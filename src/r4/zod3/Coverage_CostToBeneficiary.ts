// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coverage_CostToBeneficiary_Exception } from "./Coverage_CostToBeneficiary_Exception";
import { Coverage_CostToBeneficiary_ExceptionSchemaInternal } from "./Coverage_CostToBeneficiary_Exception";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card. */
export interface Coverage_CostToBeneficiary extends BackboneElement {
	/** A suite of codes indicating exceptions or reductions to patient costs and their effective periods. */
	exception?: Array<Coverage_CostToBeneficiary_Exception>;
	/** The category of patient centric costs associated with treatment. */
	type?: CodeableConcept;
	/** The amount due from the patient for the cost category. */
	valueMoney?: Money;
	/** The amount due from the patient for the cost category. */
	valueQuantity?: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCoverage_CostToBeneficiary_ExceptionSchema =
	(): z.ZodType<Coverage_CostToBeneficiary_Exception> =>
		Coverage_CostToBeneficiary_ExceptionSchemaInternal as z.ZodType<Coverage_CostToBeneficiary_Exception>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const Coverage_CostToBeneficiarySchemaInternal =
	BackboneElementSchemaInternal.extend({
		exception: z
			.lazy(getCoverage_CostToBeneficiary_ExceptionSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		valueMoney: z.lazy(getMoneySchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = ["valueMoney", "valueQuantity"].filter(
				(field) => record[field] !== undefined,
			);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueMoney, valueQuantity must be present for value[x]",
					path: ["valueMoney"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueMoney, valueQuantity may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const Coverage_CostToBeneficiarySchema =
	Coverage_CostToBeneficiarySchemaInternal as z.ZodType<Coverage_CostToBeneficiary>;
