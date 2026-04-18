// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { InsurancePlan_Coverage_Benefit } from "./InsurancePlan_Coverage_Benefit";
import { InsurancePlan_Coverage_BenefitSchemaInternal } from "./InsurancePlan_Coverage_Benefit";

/** Details about the coverage offered by the insurance product. */
export interface InsurancePlan_Coverage extends BackboneElement {
	/** Specific benefits under this type of coverage. */
	benefit: Array<InsurancePlan_Coverage_Benefit>;
	/** Reference to the network that providing the type of coverage. */
	network?: Array<Reference>;
	/** Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health). */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getInsurancePlan_Coverage_BenefitSchema =
	(): z.ZodType<InsurancePlan_Coverage_Benefit> =>
		InsurancePlan_Coverage_BenefitSchemaInternal as z.ZodType<InsurancePlan_Coverage_Benefit>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InsurancePlan_CoverageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		benefit: z.lazy(getInsurancePlan_Coverage_BenefitSchema).array(),
		network: z.lazy(getReferenceSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.network,
				"network",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const InsurancePlan_CoverageSchema =
	InsurancePlan_CoverageSchemaInternal as z.ZodType<InsurancePlan_Coverage>;
