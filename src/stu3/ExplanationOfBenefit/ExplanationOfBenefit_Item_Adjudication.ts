// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";

/** The adjudications results. */
export interface ExplanationOfBenefit_Item_Adjudication
	extends BackboneElement {
	/** Monitory amount associated with the code. */
	amount?: Money;
	/** Code indicating: Co-Pay, deductable, elegible, benefit, tax, etc. */
	category: CodeableConcept;
	/** Adjudication reason such as limit reached. */
	reason?: CodeableConcept;
	/** A non-monetary value for example a percentage. Mutually exclusive to the amount element above. */
	value?: number;
	/** Extensions for value */
	_value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const ExplanationOfBenefit_Item_AdjudicationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getMoneySchema).optional(),
		category: z.lazy(getCodeableConceptSchema),
		reason: z.lazy(getCodeableConceptSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExplanationOfBenefit_Item_AdjudicationSchema =
	ExplanationOfBenefit_Item_AdjudicationSchemaInternal as z.ZodType<ExplanationOfBenefit_Item_Adjudication>;
