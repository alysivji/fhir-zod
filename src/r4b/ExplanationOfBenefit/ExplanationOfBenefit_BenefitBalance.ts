// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ExplanationOfBenefit_BenefitBalance_Financial } from "./ExplanationOfBenefit_BenefitBalance_Financial";
import { ExplanationOfBenefit_BenefitBalance_FinancialSchemaInternal } from "./ExplanationOfBenefit_BenefitBalance_Financial";

/** Balance by Benefit Category. */
export interface ExplanationOfBenefit_BenefitBalance extends BackboneElement {
	/** Code to identify the general type of benefits under which products and services are provided. */
	category: CodeableConcept;
	/** A richer description of the benefit or services covered. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage. */
	excluded?: boolean;
	/** Extensions for excluded */
	_excluded?: Element;
	/** Benefits Used to date. */
	financial?: Array<ExplanationOfBenefit_BenefitBalance_Financial>;
	/** A short name or tag for the benefit. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers. */
	network?: CodeableConcept;
	/** The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'. */
	term?: CodeableConcept;
	/** Indicates if the benefits apply to an individual or to the family. */
	unit?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExplanationOfBenefit_BenefitBalance_FinancialSchema =
	(): z.ZodType<ExplanationOfBenefit_BenefitBalance_Financial> =>
		ExplanationOfBenefit_BenefitBalance_FinancialSchemaInternal as z.ZodType<ExplanationOfBenefit_BenefitBalance_Financial>;

/** @internal */
export const ExplanationOfBenefit_BenefitBalanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		excluded: z.boolean().optional(),
		_excluded: z.lazy(getElementSchema).optional(),
		financial: z
			.lazy(getExplanationOfBenefit_BenefitBalance_FinancialSchema)
			.array()
			.optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		network: z.lazy(getCodeableConceptSchema).optional(),
		term: z.lazy(getCodeableConceptSchema).optional(),
		unit: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ExplanationOfBenefit_BenefitBalanceSchema =
	ExplanationOfBenefit_BenefitBalanceSchemaInternal as z.ZodType<ExplanationOfBenefit_BenefitBalance>;
