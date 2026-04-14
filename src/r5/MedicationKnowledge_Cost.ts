// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** The price of the medication. */
export interface MedicationKnowledge_Cost extends BackboneElement {
	/** The price or representation of the cost (for example, Band A, Band B or $, $$) of the medication. */
	costCodeableConcept?: CodeableConcept;
	/** The price or representation of the cost (for example, Band A, Band B or $, $$) of the medication. */
	costMoney?: Money;
	/** The date range for which the cost information of the medication is effective. */
	effectiveDate?: Array<Period>;
	/** The source or owner that assigns the price to the medication. */
	source?: string;
	/** Extensions for source */
	_source?: Element;
	/** The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const MedicationKnowledge_CostSchemaInternal =
	BackboneElementSchemaInternal.extend({
		costCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		costMoney: z.lazy(getMoneySchema).optional(),
		effectiveDate: z.lazy(getPeriodSchema).array().optional(),
		source: fhirString().optional(),
		_source: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const cost_x_Present = ["costCodeableConcept", "costMoney"].filter(
				(field) => record[field] !== undefined,
			);
			if (cost_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of costCodeableConcept, costMoney must be present for cost[x]",
					path: ["costCodeableConcept"],
				});
			}
			if (cost_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of costCodeableConcept, costMoney may be present for cost[x]",
					path: [cost_x_Present[0]],
				});
			}
		});

export const MedicationKnowledge_CostSchema =
	MedicationKnowledge_CostSchemaInternal as z.ZodType<MedicationKnowledge_Cost>;
