// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
} from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CoverageEligibilityResponse_Error } from "./CoverageEligibilityResponse_Error";
import { CoverageEligibilityResponse_ErrorSchemaInternal } from "./CoverageEligibilityResponse_Error";
import type { CoverageEligibilityResponse_Insurance } from "./CoverageEligibilityResponse_Insurance";
import { CoverageEligibilityResponse_InsuranceSchemaInternal } from "./CoverageEligibilityResponse_Insurance";
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

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */
export interface CoverageEligibilityResponse extends DomainResource {
	/** The date this resource was created. */
	created: string;
	/** Extensions for created */
	_created?: Element;
	/** A human readable description of the status of the adjudication. */
	disposition?: string;
	/** Extensions for disposition */
	_disposition?: Element;
	/** Errors encountered during the processing of the request. */
	error?: Array<CoverageEligibilityResponse_Error>;
	/** A code for the form to be used for printing the content. */
	form?: CodeableConcept;
	/** A unique identifier assigned to this coverage eligiblity request. */
	identifier?: Array<Identifier>;
	/** Financial instruments for reimbursement for the health care products and services. */
	insurance?: Array<CoverageEligibilityResponse_Insurance>;
	/** The Insurer who issued the coverage in question and is the author of the response. */
	insurer: Reference;
	/** The outcome of the request processing. */
	outcome: "complete" | "error" | "partial" | "queued";
	/** Extensions for outcome */
	_outcome?: Element;
	/** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. */
	patient: Reference;
	/** A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred. */
	preAuthRef?: string;
	/** Extensions for preAuthRef */
	_preAuthRef?: Element;
	/** Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified. */
	purpose: Array<
		"auth-requirements" | "benefits" | "discovery" | "validation" | null
	>;
	/** Extensions for purpose */
	_purpose?: Array<Element | null>;
	/** Reference to the original request resource. */
	request: Reference;
	/** The provider which is responsible for the request. */
	requestor?: Reference;
	/** This is a CoverageEligibilityResponse resource. */
	resourceType: "CoverageEligibilityResponse";
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
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCoverageEligibilityResponse_ErrorSchema =
	(): z.ZodType<CoverageEligibilityResponse_Error> =>
		CoverageEligibilityResponse_ErrorSchemaInternal as z.ZodType<CoverageEligibilityResponse_Error>;
const getCoverageEligibilityResponse_InsuranceSchema =
	(): z.ZodType<CoverageEligibilityResponse_Insurance> =>
		CoverageEligibilityResponse_InsuranceSchemaInternal as z.ZodType<CoverageEligibilityResponse_Insurance>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityResponseSchemaInternal =
	DomainResourceSchemaInternal.extend({
		created: fhirDateTime(),
		_created: z.lazy(getElementSchema).optional(),
		disposition: fhirString().optional(),
		_disposition: z.lazy(getElementSchema).optional(),
		error: z
			.lazy(getCoverageEligibilityResponse_ErrorSchema)
			.array()
			.optional(),
		form: z.lazy(getCodeableConceptSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		insurance: z
			.lazy(getCoverageEligibilityResponse_InsuranceSchema)
			.array()
			.optional(),
		insurer: z.lazy(getReferenceSchema),
		outcome: z.enum(["complete", "error", "partial", "queued"]),
		_outcome: z.lazy(getElementSchema).optional(),
		patient: z.lazy(getReferenceSchema),
		preAuthRef: fhirString().optional(),
		_preAuthRef: z.lazy(getElementSchema).optional(),
		purpose: z
			.enum(["auth-requirements", "benefits", "discovery", "validation"])
			.nullable()
			.array(),
		_purpose: z.lazy(getElementSchema).nullable().array().optional(),
		request: z.lazy(getReferenceSchema),
		requestor: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("CoverageEligibilityResponse"),
		servicedDate: fhirDate().optional(),
		_servicedDate: z.lazy(getElementSchema).optional(),
		servicedPeriod: z.lazy(getPeriodSchema).optional(),
		status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
		_status: z.lazy(getElementSchema).optional(),
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
				record.request,
				"request",
				["http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest"],
				["CoverageEligibilityRequest"],
				ctx,
			);
			validateReferenceTarget(
				record.requestor,
				"requestor",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Organization", "Practitioner", "PractitionerRole"],
				ctx,
			);
		});

export const CoverageEligibilityResponseSchema =
	CoverageEligibilityResponseSchemaInternal as z.ZodType<CoverageEligibilityResponse>;
