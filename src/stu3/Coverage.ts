// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coverage_Grouping } from "./Coverage_Grouping";
import { Coverage_GroupingSchemaInternal } from "./Coverage_Grouping";
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

/** Base StructureDefinition for Coverage Resource */
export interface Coverage extends DomainResource {
	/** The party who benefits from the insurance coverage., the patient when services are provided. */
	beneficiary?: Reference;
	/** The policy(s) which constitute this insurance coverage. */
	contract?: Array<Reference>;
	/** A unique identifier for a dependent under the coverage. */
	dependent?: string;
	/** Extensions for dependent */
	_dependent?: Element;
	/** A suite of underwrite specific classifiers, for example may be used to identify a class of coverage or employer group, Policy, Plan. */
	grouping?: Coverage_Grouping;
	/** The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatination of the Coverage.SubscriberID and the Coverage.dependant. */
	identifier?: Array<Identifier>;
	/** The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply. */
	network?: string;
	/** Extensions for network */
	_network?: Element;
	/** The order of applicability of this coverage relative to other coverages which are currently inforce. Note, there may be gaps in the numbering and this does not imply primary, secondard etc. as the specific positioning of coverages depends upon the episode of care. */
	order?: number;
	/** Extensions for order */
	_order?: Element;
	/** The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. May provide multiple identifiers such as insurance company identifier or business identifier (BIN number). */
	payor?: Array<Reference>;
	/** Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force. */
	period?: Period;
	/** The party who 'owns' the insurance policy,  may be an individual, corporation or the subscriber's employer. */
	policyHolder?: Reference;
	/** The relationship of beneficiary (patient) to the subscriber. */
	relationship?: CodeableConcept;
	/** This is a Coverage resource. */
	resourceType: "Coverage";
	/** An optional counter for a particular instance of the identified coverage which increments upon each renewal. */
	sequence?: string;
	/** Extensions for sequence */
	_sequence?: Element;
	/** The status of the resource instance. */
	status?: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
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
const getCoverage_GroupingSchema = (): z.ZodType<Coverage_Grouping> =>
	Coverage_GroupingSchemaInternal as z.ZodType<Coverage_Grouping>;
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
	beneficiary: z.lazy(getReferenceSchema).optional(),
	contract: z.lazy(getReferenceSchema).array().optional(),
	dependent: fhirString().optional(),
	_dependent: z.lazy(getElementSchema).optional(),
	grouping: z.lazy(getCoverage_GroupingSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	network: fhirString().optional(),
	_network: z.lazy(getElementSchema).optional(),
	order: z.number().int().positive().optional(),
	_order: z.lazy(getElementSchema).optional(),
	payor: z.lazy(getReferenceSchema).array().optional(),
	period: z.lazy(getPeriodSchema).optional(),
	policyHolder: z.lazy(getReferenceSchema).optional(),
	relationship: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("Coverage"),
	sequence: fhirString().optional(),
	_sequence: z.lazy(getElementSchema).optional(),
	status: z
		.enum(["active", "cancelled", "draft", "entered-in-error"])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
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
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.policyHolder,
			"policyHolder",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.subscriber,
			"subscriber",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const CoverageSchema = CoverageSchemaInternal as z.ZodType<Coverage>;
