// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item. */
export interface ExplanationOfBenefit_Item_Adjudication
	extends BackboneElement {
	/** Monetary amount associated with the category. */
	amount?: Money;
	/** A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in-aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item. */
	category: CodeableConcept;
	/** A code supporting the understanding of the adjudication result and explaining variance from expected amount. */
	reason?: CodeableConcept;
	/** A non-monetary value associated with the category. Mutually exclusive to the amount element above. */
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
