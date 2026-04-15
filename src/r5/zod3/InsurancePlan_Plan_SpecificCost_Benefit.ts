// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { InsurancePlan_Plan_SpecificCost_Benefit_Cost } from "./InsurancePlan_Plan_SpecificCost_Benefit_Cost";
import { InsurancePlan_Plan_SpecificCost_Benefit_CostSchemaInternal } from "./InsurancePlan_Plan_SpecificCost_Benefit_Cost";

/** List of the specific benefits under this category of benefit. */
export interface InsurancePlan_Plan_SpecificCost_Benefit
	extends BackboneElement {
	/** List of the costs associated with a specific benefit. */
	cost?: Array<InsurancePlan_Plan_SpecificCost_Benefit_Cost>;
	/** Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care). */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getInsurancePlan_Plan_SpecificCost_Benefit_CostSchema =
	(): z.ZodType<InsurancePlan_Plan_SpecificCost_Benefit_Cost> =>
		InsurancePlan_Plan_SpecificCost_Benefit_CostSchemaInternal as z.ZodType<InsurancePlan_Plan_SpecificCost_Benefit_Cost>;

/** @internal */
export const InsurancePlan_Plan_SpecificCost_BenefitSchemaInternal =
	BackboneElementSchemaInternal.extend({
		cost: z
			.lazy(getInsurancePlan_Plan_SpecificCost_Benefit_CostSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const InsurancePlan_Plan_SpecificCost_BenefitSchema =
	InsurancePlan_Plan_SpecificCost_BenefitSchemaInternal as z.ZodType<InsurancePlan_Plan_SpecificCost_Benefit>;
