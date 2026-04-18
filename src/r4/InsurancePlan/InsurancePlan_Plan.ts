// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { InsurancePlan_Plan_GeneralCost } from "./InsurancePlan_Plan_GeneralCost";
import { InsurancePlan_Plan_GeneralCostSchemaInternal } from "./InsurancePlan_Plan_GeneralCost";
import type { InsurancePlan_Plan_SpecificCost } from "./InsurancePlan_Plan_SpecificCost";
import { InsurancePlan_Plan_SpecificCostSchemaInternal } from "./InsurancePlan_Plan_SpecificCost";

/** Details about an insurance plan. */
export interface InsurancePlan_Plan extends BackboneElement {
	/** The geographic region in which a health insurance plan's benefits apply. */
	coverageArea?: Array<Reference>;
	/** Overall costs associated with the plan. */
	generalCost?: Array<InsurancePlan_Plan_GeneralCost>;
	/** Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** Reference to the network that providing the type of coverage. */
	network?: Array<Reference>;
	/** Costs associated with the coverage provided by the product. */
	specificCost?: Array<InsurancePlan_Plan_SpecificCost>;
	/** Type of plan. For example, "Platinum" or "High Deductable". */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getInsurancePlan_Plan_GeneralCostSchema =
	(): z.ZodType<InsurancePlan_Plan_GeneralCost> =>
		InsurancePlan_Plan_GeneralCostSchemaInternal as z.ZodType<InsurancePlan_Plan_GeneralCost>;
const getInsurancePlan_Plan_SpecificCostSchema =
	(): z.ZodType<InsurancePlan_Plan_SpecificCost> =>
		InsurancePlan_Plan_SpecificCostSchemaInternal as z.ZodType<InsurancePlan_Plan_SpecificCost>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InsurancePlan_PlanSchemaInternal =
	BackboneElementSchemaInternal.extend({
		coverageArea: z.lazy(getReferenceSchema).array().optional(),
		generalCost: z
			.lazy(getInsurancePlan_Plan_GeneralCostSchema)
			.array()
			.optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		network: z.lazy(getReferenceSchema).array().optional(),
		specificCost: z
			.lazy(getInsurancePlan_Plan_SpecificCostSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.coverageArea,
				"coverageArea",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.network,
				"network",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const InsurancePlan_PlanSchema =
	InsurancePlan_PlanSchemaInternal as z.ZodType<InsurancePlan_Plan>;
