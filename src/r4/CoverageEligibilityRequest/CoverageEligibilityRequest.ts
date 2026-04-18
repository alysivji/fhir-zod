// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CoverageEligibilityRequest_Insurance } from "./CoverageEligibilityRequest_Insurance";
import { CoverageEligibilityRequest_InsuranceSchemaInternal } from "./CoverageEligibilityRequest_Insurance";
import type { CoverageEligibilityRequest_Item } from "./CoverageEligibilityRequest_Item";
import { CoverageEligibilityRequest_ItemSchemaInternal } from "./CoverageEligibilityRequest_Item";
import type { CoverageEligibilityRequest_SupportingInfo } from "./CoverageEligibilityRequest_SupportingInfo";
import { CoverageEligibilityRequest_SupportingInfoSchemaInternal } from "./CoverageEligibilityRequest_SupportingInfo";

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */
export interface CoverageEligibilityRequest extends DomainResource {
	/** The date when this resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** Person who created the request. */
	enterer?: Reference;
	/** Facility where the services are intended to be provided. */
	facility?: Reference;
	/** A unique identifier assigned to this coverage eligiblity request. */
	identifier?: Array<Identifier>;
	/** Financial instruments for reimbursement for the health care products and services. */
	insurance?: Array<CoverageEligibilityRequest_Insurance>;
	/** The Insurer who issued the coverage in question and is the recipient of the request. */
	insurer: Reference;
	/** Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor. */
	item?: Array<CoverageEligibilityRequest_Item>;
	/** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. */
	patient: Reference;
	/** When the requestor expects the processor to complete processing. */
	priority?: CodeableConcept;
	/** The provider which is responsible for the request. */
	provider?: Reference;
	/** Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified. */
	purpose: Array<
		"auth-requirements" | "benefits" | "discovery" | "validation" | null
	>;
	/** Extensions for purpose */
	_purpose?: Array<Element | null>;
	/** This is a CoverageEligibilityRequest resource. */
	resourceType: "CoverageEligibilityRequest";
	/** The date or dates when the enclosed suite of services were performed or completed. */
	servicedDate?: string;
	/** Extensions for servicedDate */
	_servicedDate?: Element;
	/** The date or dates when the enclosed suite of services were performed or completed. */
	servicedPeriod?: Period;
	/** The status of the resource instance. */
	status: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. */
	supportingInfo?: Array<CoverageEligibilityRequest_SupportingInfo>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCoverageEligibilityRequest_InsuranceSchema =
	(): z.ZodType<CoverageEligibilityRequest_Insurance> =>
		CoverageEligibilityRequest_InsuranceSchemaInternal as z.ZodType<CoverageEligibilityRequest_Insurance>;
const getCoverageEligibilityRequest_ItemSchema =
	(): z.ZodType<CoverageEligibilityRequest_Item> =>
		CoverageEligibilityRequest_ItemSchemaInternal as z.ZodType<CoverageEligibilityRequest_Item>;
const getCoverageEligibilityRequest_SupportingInfoSchema =
	(): z.ZodType<CoverageEligibilityRequest_SupportingInfo> =>
		CoverageEligibilityRequest_SupportingInfoSchemaInternal as z.ZodType<CoverageEligibilityRequest_SupportingInfo>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityRequestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		created: fhirDateTime(),
		_created: z.lazy(getElementSchema).optional(),
		enterer: z.lazy(getReferenceSchema).optional(),
		facility: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		insurance: z
			.lazy(getCoverageEligibilityRequest_InsuranceSchema)
			.array()
			.optional(),
		insurer: z.lazy(getReferenceSchema),
		item: z.lazy(getCoverageEligibilityRequest_ItemSchema).array().optional(),
		patient: z.lazy(getReferenceSchema),
		priority: z.lazy(getCodeableConceptSchema).optional(),
		provider: z.lazy(getReferenceSchema).optional(),
		purpose: z
			.enum(["auth-requirements", "benefits", "discovery", "validation"])
			.nullable()
			.array(),
		_purpose: z.lazy(getElementSchema).nullable().array().optional(),
		resourceType: z.literal("CoverageEligibilityRequest"),
		servicedDate: fhirDate().optional(),
		_servicedDate: z.lazy(getElementSchema).optional(),
		servicedPeriod: z.lazy(getPeriodSchema).optional(),
		status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
		_status: z.lazy(getElementSchema).optional(),
		supportingInfo: z
			.lazy(getCoverageEligibilityRequest_SupportingInfoSchema)
			.array()
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const serviced_x_Present = ["servicedDate", "servicedPeriod"].filter(
				(field) => record[field] !== undefined,
			);
			if (serviced_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of servicedDate, servicedPeriod may be present for serviced[x]",
					path: [serviced_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.purpose,
				record._purpose,
				"purpose",
				"_purpose",
				ctx,
			);
			validateReferenceTarget(
				record.enterer,
				"enterer",
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.facility,
				"facility",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.insurer,
				"insurer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.provider,
				"provider",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const CoverageEligibilityRequestSchema =
	CoverageEligibilityRequestSchemaInternal as z.ZodType<CoverageEligibilityRequest>;
