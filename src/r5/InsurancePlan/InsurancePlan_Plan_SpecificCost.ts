// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { InsurancePlan_Plan_SpecificCost_Benefit } from "./InsurancePlan_Plan_SpecificCost_Benefit";
import { InsurancePlan_Plan_SpecificCost_BenefitSchemaInternal } from "./InsurancePlan_Plan_SpecificCost_Benefit";

/** Costs associated with the coverage provided by the product. */
export interface InsurancePlan_Plan_SpecificCost extends BackboneElement {
	/** List of the specific benefits under this category of benefit. */
	benefit?: Array<InsurancePlan_Plan_SpecificCost_Benefit>;
	/** General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health). */
	category: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getInsurancePlan_Plan_SpecificCost_BenefitSchema =
	(): z.ZodType<InsurancePlan_Plan_SpecificCost_Benefit> =>
		InsurancePlan_Plan_SpecificCost_BenefitSchemaInternal as z.ZodType<InsurancePlan_Plan_SpecificCost_Benefit>;

/** @internal */
export const InsurancePlan_Plan_SpecificCostSchemaInternal =
	BackboneElementSchemaInternal.extend({
		benefit: z
			.lazy(getInsurancePlan_Plan_SpecificCost_BenefitSchema)
			.array()
			.optional(),
		category: z.lazy(getCodeableConceptSchema),
	}).strict();

export const InsurancePlan_Plan_SpecificCostSchema =
	InsurancePlan_Plan_SpecificCostSchemaInternal as z.ZodType<InsurancePlan_Plan_SpecificCost>;
