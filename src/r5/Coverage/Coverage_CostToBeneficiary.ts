// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Coverage_CostToBeneficiary_Exception } from "./Coverage_CostToBeneficiary_Exception";
import { Coverage_CostToBeneficiary_ExceptionSchemaInternal } from "./Coverage_CostToBeneficiary_Exception";

/** A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card. */
export interface Coverage_CostToBeneficiary extends BackboneElement {
	/** Code to identify the general type of benefits under which products and services are provided. */
	category?: CodeableConcept;
	/** A suite of codes indicating exceptions or reductions to patient costs and their effective periods. */
	exception?: Array<Coverage_CostToBeneficiary_Exception>;
	/** Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers. */
	network?: CodeableConcept;
	/** The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'. */
	term?: CodeableConcept;
	/** The category of patient centric costs associated with treatment. */
	type?: CodeableConcept;
	/** Indicates if the benefits apply to an individual or to the family. */
	unit?: CodeableConcept;
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
		category: z.lazy(getCodeableConceptSchema).optional(),
		exception: z
			.lazy(getCoverage_CostToBeneficiary_ExceptionSchema)
			.array()
			.optional(),
		network: z.lazy(getCodeableConceptSchema).optional(),
		term: z.lazy(getCodeableConceptSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		unit: z.lazy(getCodeableConceptSchema).optional(),
		valueMoney: z.lazy(getMoneySchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = ["valueMoney", "valueQuantity"].filter(
				(field) => record[field] !== undefined,
			);
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
