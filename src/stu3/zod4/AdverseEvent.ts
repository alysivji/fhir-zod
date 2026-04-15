// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { AdverseEvent_SuspectEntity } from "./AdverseEvent_SuspectEntity";
import { AdverseEvent_SuspectEntitySchemaInternal } from "./AdverseEvent_SuspectEntity";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for AdverseEvent Resource */
export interface AdverseEvent extends DomainResource {
	/** The type of event which is important to characterize what occurred and caused harm to the subject, or had the potential to cause harm to the subject. */
	category?: "AE" | "PAE";
	/** Extensions for category */
	_category?: Element;
	/** The date (and perhaps time) when the adverse event occurred. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Describes the adverse event in text. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g. consultant), information that the Act itself seeks to reveal (e.g. informant of clinical history), or information about what Act was performed (e.g. informant witness). */
	eventParticipant?: Reference;
	/** The identifier(s) of this adverse event that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itsefl is not appropriate. */
	identifier?: Identifier;
	/** The information about where the adverse event occurred. */
	location?: Reference;
	/** Describes the type of outcome from the adverse event. */
	outcome?: CodeableConcept;
	/** Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical). */
	reaction?: Array<Reference>;
	/** Information on who recorded the adverse event.  May be the patient or a practitioner. */
	recorder?: Reference;
	/** AdverseEvent.referenceDocument. */
	referenceDocument?: Array<Reference>;
	/** This is a AdverseEvent resource. */
	resourceType: "AdverseEvent";
	/** Describes the seriousness or severity of the adverse event. */
	seriousness?: CodeableConcept;
	/** AdverseEvent.study. */
	study?: Array<Reference>;
	/** This subject or group impacted by the event.  With a prospective adverse event, there will be no subject as the adverse event was prevented. */
	subject?: Reference;
	/** AdverseEvent.subjectMedicalHistory. */
	subjectMedicalHistory?: Array<Reference>;
	/** Describes the entity that is suspected to have caused the adverse event. */
	suspectEntity?: Array<AdverseEvent_SuspectEntity>;
	/** This element defines the specific type of event that occurred or that was prevented from occurring. */
	type?: CodeableConcept;
}

const getAdverseEvent_SuspectEntitySchema =
	(): z.ZodType<AdverseEvent_SuspectEntity> =>
		AdverseEvent_SuspectEntitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdverseEventSchemaInternal = DomainResourceSchemaInternal.extend({
	category: z.enum(["AE", "PAE"]).optional(),
	_category: z.lazy(getElementSchema).optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	description: fhirString().optional(),
	_description: z.lazy(getElementSchema).optional(),
	eventParticipant: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	location: z.lazy(getReferenceSchema).optional(),
	outcome: z.lazy(getCodeableConceptSchema).optional(),
	reaction: z.lazy(getReferenceSchema).array().optional(),
	recorder: z.lazy(getReferenceSchema).optional(),
	referenceDocument: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("AdverseEvent"),
	seriousness: z.lazy(getCodeableConceptSchema).optional(),
	study: z.lazy(getReferenceSchema).array().optional(),
	subject: z.lazy(getReferenceSchema).optional(),
	subjectMedicalHistory: z.lazy(getReferenceSchema).array().optional(),
	suspectEntity: z.lazy(getAdverseEvent_SuspectEntitySchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.eventParticipant,
			"eventParticipant",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
			],
			["Device", "Practitioner"],
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
			record.reaction,
			"reaction",
			["http://hl7.org/fhir/StructureDefinition/Condition"],
			["Condition"],
			ctx,
		);
		validateReferenceTarget(
			record.recorder,
			"recorder",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.referenceDocument,
			"referenceDocument",
			["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
			["DocumentReference"],
			ctx,
		);
		validateReferenceTarget(
			record.study,
			"study",
			["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
			["ResearchStudy"],
			ctx,
		);
		validateReferenceTarget(
			record.subject,
			"subject",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Medication",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/ResearchSubject",
			],
			["Device", "Medication", "Patient", "ResearchSubject"],
			ctx,
		);
		validateReferenceTarget(
			record.subjectMedicalHistory,
			"subjectMedicalHistory",
			[
				"http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
				"http://hl7.org/fhir/StructureDefinition/Immunization",
				"http://hl7.org/fhir/StructureDefinition/Observation",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
			],
			[
				"AllergyIntolerance",
				"Condition",
				"FamilyMemberHistory",
				"Immunization",
				"Observation",
				"Procedure",
			],
			ctx,
		);
	});

export const AdverseEventSchema =
	AdverseEventSchemaInternal as z.ZodType<AdverseEvent>;
