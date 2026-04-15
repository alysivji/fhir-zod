// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
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

/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface AdverseEvent extends DomainResource {
	/** Whether the event actually happened, or just had the potential to. Note that this is independent of whether anyone was affected or harmed or how severely. */
	actuality: "actual" | "potential";
	/** Extensions for actuality */
	_actuality?: Element;
	/** The overall type of event, intended for search and filtering purposes. */
	category?: Array<CodeableConcept>;
	/** Parties that may or should contribute or have contributed information to the adverse event, which can consist of one or more activities.  Such information includes information leading to the decision to perform the activity and how to perform the activity (e.g. consultant), information that the activity itself seeks to reveal (e.g. informant of clinical history), or information about what activity was performed (e.g. informant witness). */
	contributor?: Array<Reference>;
	/** The date (and perhaps time) when the adverse event occurred. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Estimated or actual date the AdverseEvent began, in the opinion of the reporter. */
	detected?: string;
	/** Extensions for detected */
	_detected?: Element;
	/** The Encounter during which AdverseEvent was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** This element defines the specific type of event that occurred or that was prevented from occurring. */
	event?: CodeableConcept;
	/** Business identifiers assigned to this adverse event by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Identifier;
	/** The information about where the adverse event occurred. */
	location?: Reference;
	/** Describes the type of outcome from the adverse event. */
	outcome?: CodeableConcept;
	/** The date on which the existence of the AdverseEvent was first recorded. */
	recordedDate?: string;
	/** Extensions for recordedDate */
	_recordedDate?: Element;
	/** Information on who recorded the adverse event.  May be the patient or a practitioner. */
	recorder?: Reference;
	/** AdverseEvent.referenceDocument. */
	referenceDocument?: Array<Reference>;
	/** This is a AdverseEvent resource. */
	resourceType: "AdverseEvent";
	/** Includes information about the reaction that occurred as a result of exposure to a substance (for example, a drug or a chemical). */
	resultingCondition?: Array<Reference>;
	/** Assessment whether this event was of real importance. */
	seriousness?: CodeableConcept;
	/** Describes the severity of the adverse event, in relation to the subject. Contrast to AdverseEvent.seriousness - a severe rash might not be serious, but a mild heart problem is. */
	severity?: CodeableConcept;
	/** AdverseEvent.study. */
	study?: Array<Reference>;
	/** This subject or group impacted by the event. */
	subject: Reference;
	/** AdverseEvent.subjectMedicalHistory. */
	subjectMedicalHistory?: Array<Reference>;
	/** Describes the entity that is suspected to have caused the adverse event. */
	suspectEntity?: Array<AdverseEvent_SuspectEntity>;
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
	actuality: z.enum(["actual", "potential"]),
	_actuality: z.lazy(getElementSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	contributor: z.lazy(getReferenceSchema).array().optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	detected: fhirDateTime().optional(),
	_detected: z.lazy(getElementSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	event: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	location: z.lazy(getReferenceSchema).optional(),
	outcome: z.lazy(getCodeableConceptSchema).optional(),
	recordedDate: fhirDateTime().optional(),
	_recordedDate: z.lazy(getElementSchema).optional(),
	recorder: z.lazy(getReferenceSchema).optional(),
	referenceDocument: z.lazy(getReferenceSchema).array().optional(),
	resourceType: z.literal("AdverseEvent"),
	resultingCondition: z.lazy(getReferenceSchema).array().optional(),
	seriousness: z.lazy(getCodeableConceptSchema).optional(),
	severity: z.lazy(getCodeableConceptSchema).optional(),
	study: z.lazy(getReferenceSchema).array().optional(),
	subject: z.lazy(getReferenceSchema),
	subjectMedicalHistory: z.lazy(getReferenceSchema).array().optional(),
	suspectEntity: z.lazy(getAdverseEvent_SuspectEntitySchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.contributor,
			"contributor",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Device", "Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
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
			record.recorder,
			"recorder",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
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
			record.resultingCondition,
			"resultingCondition",
			["http://hl7.org/fhir/StructureDefinition/Condition"],
			["Condition"],
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
				"http://hl7.org/fhir/StructureDefinition/Group",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Group", "Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.subjectMedicalHistory,
			"subjectMedicalHistory",
			[
				"http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/DocumentReference",
				"http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
				"http://hl7.org/fhir/StructureDefinition/Immunization",
				"http://hl7.org/fhir/StructureDefinition/Media",
				"http://hl7.org/fhir/StructureDefinition/Observation",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
			],
			[
				"AllergyIntolerance",
				"Condition",
				"DocumentReference",
				"FamilyMemberHistory",
				"Immunization",
				"Media",
				"Observation",
				"Procedure",
			],
			ctx,
		);
	});

export const AdverseEventSchema =
	AdverseEventSchemaInternal as z.ZodType<AdverseEvent>;
