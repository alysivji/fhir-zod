// Profile: http://hl7.org/fhir/StructureDefinition/HealthcareService
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { HealthcareService_AvailableTime } from "./HealthcareService_AvailableTime";
import { HealthcareService_AvailableTimeSchemaInternal } from "./HealthcareService_AvailableTime";
import type { HealthcareService_NotAvailable } from "./HealthcareService_NotAvailable";
import { HealthcareService_NotAvailableSchemaInternal } from "./HealthcareService_NotAvailable";

/** Base StructureDefinition for HealthcareService Resource */
export interface HealthcareService extends DomainResource {
	/** Whether this healthcareservice record is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service. */
	appointmentRequired?: boolean;
	/** Extensions for appointmentRequired */
	_appointmentRequired?: Element;
	/** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times. */
	availabilityExceptions?: string;
	/** Extensions for availabilityExceptions */
	_availabilityExceptions?: Element;
	/** A collection of times that the Service Site is available. */
	availableTime?: Array<HealthcareService_AvailableTime>;
	/** Identifies the broad category of service being performed or delivered. */
	category?: CodeableConcept;
	/** Collection of characteristics (attributes). */
	characteristic?: Array<CodeableConcept>;
	/** Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** The location(s) that this service is available to (not where the service is provided). */
	coverageArea?: Array<Reference>;
	/** Does this service have specific eligibility requirements that need to be met in order to use the service? */
	eligibility?: CodeableConcept;
	/** Describes the eligibility conditions for the service. */
	eligibilityNote?: string;
	/** Extensions for eligibilityNote */
	_eligibilityNote?: Element;
	/** Technical endpoints providing access to services operated for the specific healthcare services defined at this resource. */
	endpoint?: Array<Reference>;
	/** Extra details about the service that can't be placed in the other fields. */
	extraDetails?: string;
	/** Extensions for extraDetails */
	_extraDetails?: Element;
	/** External identifiers for this item. */
	identifier?: Array<Identifier>;
	/** The location(s) where this healthcare service may be provided. */
	location?: Array<Reference>;
	/** Further description of the service as it would be presented to a consumer while searching. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The HealthcareService is not available during this period of time due to the provided reason. */
	notAvailable?: Array<HealthcareService_NotAvailable>;
	/** If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list. */
	photo?: Attachment;
	/** Program Names that can be used to categorize the service. */
	programName?: Array<string | null>;
	/** Extensions for programName */
	_programName?: Array<Element | null>;
	/** The organization that provides this healthcare service. */
	providedBy?: Reference;
	/** Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required. */
	referralMethod?: Array<CodeableConcept>;
	/** This is a HealthcareService resource. */
	resourceType: "HealthcareService";
	/** The code(s) that detail the conditions under which the healthcare service is available/offered. */
	serviceProvisionCode?: Array<CodeableConcept>;
	/** Collection of specialties handled by the service site. This is more of a medical term. */
	specialty?: Array<CodeableConcept>;
	/** List of contacts related to this specific healthcare service. */
	telecom?: Array<ContactPoint>;
	/** The specific type of service that may be delivered or performed. */
	type?: Array<CodeableConcept>;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getHealthcareService_AvailableTimeSchema =
	(): z.ZodType<HealthcareService_AvailableTime> =>
		HealthcareService_AvailableTimeSchemaInternal as z.ZodType<HealthcareService_AvailableTime>;
const getHealthcareService_NotAvailableSchema =
	(): z.ZodType<HealthcareService_NotAvailable> =>
		HealthcareService_NotAvailableSchemaInternal as z.ZodType<HealthcareService_NotAvailable>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const HealthcareServiceSchemaInternal =
	DomainResourceSchemaInternal.extend({
		active: z.boolean().optional(),
		_active: z.lazy(getElementSchema).optional(),
		appointmentRequired: z.boolean().optional(),
		_appointmentRequired: z.lazy(getElementSchema).optional(),
		availabilityExceptions: fhirString().optional(),
		_availabilityExceptions: z.lazy(getElementSchema).optional(),
		availableTime: z
			.lazy(getHealthcareService_AvailableTimeSchema)
			.array()
			.optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		characteristic: z.lazy(getCodeableConceptSchema).array().optional(),
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		coverageArea: z.lazy(getReferenceSchema).array().optional(),
		eligibility: z.lazy(getCodeableConceptSchema).optional(),
		eligibilityNote: fhirString().optional(),
		_eligibilityNote: z.lazy(getElementSchema).optional(),
		endpoint: z.lazy(getReferenceSchema).array().optional(),
		extraDetails: fhirString().optional(),
		_extraDetails: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		location: z.lazy(getReferenceSchema).array().optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		notAvailable: z
			.lazy(getHealthcareService_NotAvailableSchema)
			.array()
			.optional(),
		photo: z.lazy(getAttachmentSchema).optional(),
		programName: fhirString().nullable().array().optional(),
		_programName: z.lazy(getElementSchema).nullable().array().optional(),
		providedBy: z.lazy(getReferenceSchema).optional(),
		referralMethod: z.lazy(getCodeableConceptSchema).array().optional(),
		resourceType: z.literal("HealthcareService"),
		serviceProvisionCode: z.lazy(getCodeableConceptSchema).array().optional(),
		specialty: z.lazy(getCodeableConceptSchema).array().optional(),
		telecom: z.lazy(getContactPointSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.programName,
				record._programName,
				"programName",
				"_programName",
				ctx,
			);
			validateReferenceTarget(
				record.coverageArea,
				"coverageArea",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.endpoint,
				"endpoint",
				["http://hl7.org/fhir/StructureDefinition/Endpoint"],
				["Endpoint"],
				ctx,
			);
			validateReferenceTarget(
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.providedBy,
				"providedBy",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const HealthcareServiceSchema =
	HealthcareServiceSchemaInternal as z.ZodType<HealthcareService>;
