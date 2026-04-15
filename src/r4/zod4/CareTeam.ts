// Profile: http://hl7.org/fhir/StructureDefinition/CareTeam
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CareTeam_Participant } from "./CareTeam_Participant";
import { CareTeam_ParticipantSchemaInternal } from "./CareTeam_Participant";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
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

/** The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient. */
export interface CareTeam extends DomainResource {
	/** Identifies what kind of team.  This is to support differentiation between multiple co-existing teams, such as care plan team, episode of care team, longitudinal care team. */
	category?: Array<CodeableConcept>;
	/** The Encounter during which this CareTeam was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Business identifiers assigned to this care team by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The organization responsible for the care team. */
	managingOrganization?: Array<Reference>;
	/** A label for human use intended to distinguish like teams.  E.g. the "red" vs. "green" trauma teams. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Comments made about the CareTeam. */
	note?: Array<Annotation>;
	/** Identifies all people and organizations who are expected to be involved in the care team. */
	participant?: Array<CareTeam_Participant>;
	/** Indicates when the team did (or is intended to) come into effect and end. */
	period?: Period;
	/** Describes why the care team exists. */
	reasonCode?: Array<CodeableConcept>;
	/** Condition(s) that this care team addresses. */
	reasonReference?: Array<Reference>;
	/** This is a CareTeam resource. */
	resourceType: "CareTeam";
	/** Indicates the current state of the care team. */
	status?:
		| "active"
		| "entered-in-error"
		| "inactive"
		| "proposed"
		| "suspended";
	/** Extensions for status */
	_status?: Element;
	/** Identifies the patient or group whose intended care is handled by the team. */
	subject?: Reference;
	/** A central contact detail for the care team (that applies to all members). */
	telecom?: Array<ContactPoint>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCareTeam_ParticipantSchema = (): z.ZodType<CareTeam_Participant> =>
	CareTeam_ParticipantSchemaInternal as z.ZodType<CareTeam_Participant>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CareTeamSchemaInternal = DomainResourceSchemaInternal.extend({
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	managingOrganization: z.lazy(getReferenceSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	participant: z.lazy(getCareTeam_ParticipantSchema).array().optional(),
	period: z.lazy(getPeriodSchema).optional(),
	reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
	reasonReference: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("CareTeam"),
	status: z
		.enum(["active", "entered-in-error", "inactive", "proposed", "suspended"])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	telecom: z.lazy(getContactPointSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
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
			record.reasonReference,
			"reasonReference",
			["http://hl7.org/fhir/StructureDefinition/Condition"],
			["Condition"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Group", "Patient"],
			ctx,
		);
	});

export const CareTeamSchema = CareTeamSchemaInternal as z.ZodType<CareTeam>;
