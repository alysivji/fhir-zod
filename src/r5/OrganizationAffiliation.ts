// Profile: http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExtendedContactDetail } from "./ExtendedContactDetail";
import { ExtendedContactDetailSchemaInternal } from "./ExtendedContactDetail";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Defines an affiliation/assotiation/relationship between 2 distinct organizations, that is not a part-of relationship/sub-division relationship. */
export interface OrganizationAffiliation extends DomainResource {
	/** Whether this organization affiliation record is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Definition of the role the participatingOrganization plays in the association. */
	code?: Array<CodeableConcept>;
	/** The contact details of communication devices available at the participatingOrganization relevant to this Affiliation. */
	contact?: Array<ExtendedContactDetail>;
	/** Technical endpoints providing access to services operated for this role. */
	endpoint?: Array<Reference>;
	/** Healthcare services provided through the role. */
	healthcareService?: Array<Reference>;
	/** Business identifiers that are specific to this role. */
	identifier?: Array<Identifier>;
	/** The location(s) at which the role occurs. */
	location?: Array<Reference>;
	/** The network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined). */
	network?: Array<Reference>;
	/** Organization where the role is available (primary organization/has members). */
	organization?: Reference;
	/** The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of). */
	participatingOrganization?: Reference;
	/** The period during which the participatingOrganization is affiliated with the primary organization. */
	period?: Period;
	/** This is a OrganizationAffiliation resource. */
	resourceType: "OrganizationAffiliation";
	/** Specific specialty of the participatingOrganization in the context of the role. */
	specialty?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtendedContactDetailSchema = (): z.ZodType<ExtendedContactDetail> =>
	ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const OrganizationAffiliationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		active: z.boolean().optional(),
		_active: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).array().optional(),
		contact: z.lazy(getExtendedContactDetailSchema).array().optional(),
		endpoint: z.lazy(getReferenceSchema).array().optional(),
		healthcareService: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		location: z.lazy(getReferenceSchema).array().optional(),
		network: z.lazy(getReferenceSchema).array().optional(),
		organization: z.lazy(getReferenceSchema).optional(),
		participatingOrganization: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		resourceType: z.literal("OrganizationAffiliation"),
		specialty: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.endpoint,
				"endpoint",
				["http://hl7.org/fhir/StructureDefinition/Endpoint"],
				["Endpoint"],
				ctx,
			);
			validateReferenceTarget(
				record.healthcareService,
				"healthcareService",
				["http://hl7.org/fhir/StructureDefinition/HealthcareService"],
				["HealthcareService"],
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
				record.network,
				"network",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.organization,
				"organization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.participatingOrganization,
				"participatingOrganization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const OrganizationAffiliationSchema =
	OrganizationAffiliationSchemaInternal as z.ZodType<OrganizationAffiliation>;
