// Profile: http://hl7.org/fhir/StructureDefinition/MonetaryComponent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DataType } from "./DataType";
import { DataTypeSchemaInternal } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** MonetaryComponent Type: Availability data for an {item}. */
export interface MonetaryComponent extends DataType {
	/** Explicit value amount to be used. */
	amount?: Money;
	/** Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc. */
	code?: CodeableConcept;
	/** Factor used for calculating this component. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** base | surcharge | deduction | discount | tax | informational. */
	type:
		| "base"
		| "deduction"
		| "discount"
		| "informational"
		| "surcharge"
		| "tax";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const MonetaryComponentSchemaInternal = DataTypeSchemaInternal.extend({
	amount: z.lazy(getMoneySchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	factor: z.number().optional(),
	_factor: z.lazy(getElementSchema).optional(),
	type: z.enum([
		"base",
		"deduction",
		"discount",
		"informational",
		"surcharge",
		"tax",
	]),
	_type: z.lazy(getElementSchema).optional(),
}).strict();

export const MonetaryComponentSchema =
	MonetaryComponentSchemaInternal as z.ZodType<MonetaryComponent>;
