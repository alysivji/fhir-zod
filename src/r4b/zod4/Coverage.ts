// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coverage_Class } from "./Coverage_Class";
import { Coverage_ClassSchemaInternal } from "./Coverage_Class";
import type { Coverage_CostToBeneficiary } from "./Coverage_CostToBeneficiary";
import { Coverage_CostToBeneficiarySchemaInternal } from "./Coverage_CostToBeneficiary";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface Coverage extends DomainResource {
	/** The party who benefits from the insurance coverage; the patient when products and/or services are provided. */
	beneficiary: Reference;
	/** A suite of underwriter specific classifiers. */
	class?: Array<Coverage_Class>;
	/** The policy(s) which constitute this insurance coverage. */
	contract?: Array<Reference>;
	/** A suite of codes indicating the cost category and associated amount which have been detailed in the policy and may have been  included on the health card. */
	costToBeneficiary?: Array<Coverage_CostToBeneficiary>;
	/** A unique identifier for a dependent under the coverage. */
	dependent?: string;
	/** Extensions for dependent */
	_dependent?: Element;
	/** A unique identifier assigned to this coverage. */
	identifier?: Array<Identifier>;
	/** The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply. */
	network?: string;
	/** Extensions for network */
	_network?: Element;
	/** The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care. */
	order?: number;
	/** Extensions for order */
	_order?: Element;
	/** The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. */
	payor: Array<Reference>;
	/** Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force. */
	period?: Period;
	/** The party who 'owns' the insurance policy. */
	policyHolder?: Reference;
	/** The relationship of beneficiary (patient) to the subscriber. */
	relationship?: CodeableConcept;
	/** This is a Coverage resource. */
	resourceType: "Coverage";
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs. */
	subrogation?: boolean;
	/** Extensions for subrogation */
	_subrogation?: Element;
	/** The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due. */
	subscriber?: Reference;
	/** The insurer assigned ID for the Subscriber. */
	subscriberId?: string;
	/** Extensions for subscriberId */
	_subscriberId?: Element;
	/** The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCoverage_ClassSchema = (): z.ZodType<Coverage_Class> =>
	Coverage_ClassSchemaInternal as z.ZodType<Coverage_Class>;
const getCoverage_CostToBeneficiarySchema =
	(): z.ZodType<Coverage_CostToBeneficiary> =>
		Coverage_CostToBeneficiarySchemaInternal as z.ZodType<Coverage_CostToBeneficiary>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageSchemaInternal = DomainResourceSchemaInternal.extend({
	beneficiary: z.lazy(getReferenceSchema),
	class: z.lazy(getCoverage_ClassSchema).array().optional(),
	contract: z.lazy(getReferenceSchema).array().optional(),
	costToBeneficiary: z
		.lazy(getCoverage_CostToBeneficiarySchema)
		.array()
		.optional(),
	dependent: fhirString().optional(),
	_dependent: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	network: fhirString().optional(),
	_network: z.lazy(getElementSchema).optional(),
	order: z.number().int().positive().optional(),
	_order: z.lazy(getElementSchema).optional(),
	payor: z.lazy(getReferenceSchema).array(),
	period: z.lazy(getPeriodSchema).optional(),
	policyHolder: z.lazy(getReferenceSchema).optional(),
	relationship: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("Coverage"),
	status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
	_status: z.lazy(getElementSchema).optional(),
	subrogation: z.boolean().optional(),
	_subrogation: z.lazy(getElementSchema).optional(),
	subscriber: z.lazy(getReferenceSchema).optional(),
	subscriberId: fhirString().optional(),
	_subscriberId: z.lazy(getElementSchema).optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.beneficiary,
			"beneficiary",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.contract,
			"contract",
			["http://hl7.org/fhir/StructureDefinition/Contract"],
			["Contract"],
			ctx,
		);
		validateReferenceTarget(
			record.payor,
			"payor",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Organization", "Patient", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.policyHolder,
			"policyHolder",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Organization", "Patient", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.subscriber,
			"subscriber",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "RelatedPerson"],
			ctx,
		);
	});

export const CoverageSchema = CoverageSchemaInternal as z.ZodType<Coverage>;
