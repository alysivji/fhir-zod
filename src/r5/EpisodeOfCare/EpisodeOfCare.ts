// Profile: http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
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
import type { EpisodeOfCare_Diagnosis } from "./EpisodeOfCare_Diagnosis";
import { EpisodeOfCare_DiagnosisSchemaInternal } from "./EpisodeOfCare_Diagnosis";
import type { EpisodeOfCare_Reason } from "./EpisodeOfCare_Reason";
import { EpisodeOfCare_ReasonSchemaInternal } from "./EpisodeOfCare_Reason";
import type { EpisodeOfCare_StatusHistory } from "./EpisodeOfCare_StatusHistory";
import { EpisodeOfCare_StatusHistorySchemaInternal } from "./EpisodeOfCare_StatusHistory";

/** An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time. */
export interface EpisodeOfCare extends DomainResource {
	/** The set of accounts that may be used for billing for this EpisodeOfCare. */
	account?: Array<Reference>;
	/** The practitioner that is the care manager/care coordinator for this patient. */
	careManager?: Reference;
	/** The list of practitioners that may be facilitating this episode of care for specific purposes. */
	careTeam?: Array<Reference>;
	/** The list of medical conditions that were addressed during the episode of care. */
	diagnosis?: Array<EpisodeOfCare_Diagnosis>;
	/** The EpisodeOfCare may be known by different identifiers for different contexts of use, such as when an external agency is tracking the Episode for funding purposes. */
	identifier?: Array<Identifier>;
	/** The organization that has assumed the specific responsibilities for care coordination, care delivery, or other services for the specified duration. */
	managingOrganization?: Reference;
	/** The patient who is the focus of this episode of care. */
	patient: Reference;
	/** The interval during which the managing organization assumes the defined responsibility. */
	period?: Period;
	/** The list of medical reasons that are expected to be addressed during the episode of care. */
	reason?: Array<EpisodeOfCare_Reason>;
	/** Referral Request(s) that are fulfilled by this EpisodeOfCare, incoming referrals. */
	referralRequest?: Array<Reference>;
	/** This is a EpisodeOfCare resource. */
	resourceType: "EpisodeOfCare";
	/** planned | waitlist | active | onhold | finished | cancelled. */
	status:
		| "active"
		| "cancelled"
		| "entered-in-error"
		| "finished"
		| "onhold"
		| "planned"
		| "waitlist";
	/** Extensions for status */
	_status?: Element;
	/** The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource). */
	statusHistory?: Array<EpisodeOfCare_StatusHistory>;
	/** A classification of the type of episode of care; e.g. specialist referral, disease management, type of funded care. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEpisodeOfCare_DiagnosisSchema =
	(): z.ZodType<EpisodeOfCare_Diagnosis> =>
		EpisodeOfCare_DiagnosisSchemaInternal as z.ZodType<EpisodeOfCare_Diagnosis>;
const getEpisodeOfCare_ReasonSchema = (): z.ZodType<EpisodeOfCare_Reason> =>
	EpisodeOfCare_ReasonSchemaInternal as z.ZodType<EpisodeOfCare_Reason>;
const getEpisodeOfCare_StatusHistorySchema =
	(): z.ZodType<EpisodeOfCare_StatusHistory> =>
		EpisodeOfCare_StatusHistorySchemaInternal as z.ZodType<EpisodeOfCare_StatusHistory>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EpisodeOfCareSchemaInternal = DomainResourceSchemaInternal.extend({
	account: z.lazy(getReferenceSchema).array().optional(),
	careManager: z.lazy(getReferenceSchema).optional(),
	careTeam: z.lazy(getReferenceSchema).array().optional(),
	diagnosis: z.lazy(getEpisodeOfCare_DiagnosisSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	managingOrganization: z.lazy(getReferenceSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	period: z.lazy(getPeriodSchema).optional(),
	reason: z.lazy(getEpisodeOfCare_ReasonSchema).array().optional(),
	referralRequest: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("EpisodeOfCare"),
	status: z.enum([
		"active",
		"cancelled",
		"entered-in-error",
		"finished",
		"onhold",
		"planned",
		"waitlist",
	]),
	_status: z.lazy(getElementSchema).optional(),
	statusHistory: z
		.lazy(getEpisodeOfCare_StatusHistorySchema)
		.array()
		.optional(),
	type: z.lazy(getCodeableConceptSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.account,
			"account",
			["http://hl7.org/fhir/StructureDefinition/Account"],
			["Account"],
			ctx,
		);
		validateReferenceTarget(
			record.careManager,
			"careManager",
			[
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.careTeam,
			"careTeam",
			["http://hl7.org/fhir/StructureDefinition/CareTeam"],
			["CareTeam"],
			ctx,
		);
		validateReferenceTarget(
			record.managingOrganization,
			"managingOrganization",
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
			record.referralRequest,
			"referralRequest",
			["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
			["ServiceRequest"],
			ctx,
		);
	});

export const EpisodeOfCareSchema =
	EpisodeOfCareSchemaInternal as z.ZodType<EpisodeOfCare>;
