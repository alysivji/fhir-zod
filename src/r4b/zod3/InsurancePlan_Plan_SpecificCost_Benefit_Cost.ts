// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** List of the costs associated with a specific benefit. */
export interface InsurancePlan_Plan_SpecificCost_Benefit_Cost
	extends BackboneElement {
	/** Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other). */
	applicability?: CodeableConcept;
	/** Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA). */
	qualifiers?: Array<CodeableConcept>;
	/** Type of cost (copay; individual cap; family cap; coinsurance; deductible). */
	type: CodeableConcept;
	/** The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance). */
	value?: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const InsurancePlan_Plan_SpecificCost_Benefit_CostSchemaInternal =
	BackboneElementSchemaInternal.extend({
		applicability: z.lazy(getCodeableConceptSchema).optional(),
		qualifiers: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
		value: z.lazy(getQuantitySchema).optional(),
	}).strict();

export const InsurancePlan_Plan_SpecificCost_Benefit_CostSchema =
	InsurancePlan_Plan_SpecificCost_Benefit_CostSchemaInternal as z.ZodType<InsurancePlan_Plan_SpecificCost_Benefit_Cost>;
