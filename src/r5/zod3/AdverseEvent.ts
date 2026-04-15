// Profile: http://hl7.org/fhir/StructureDefinition/AdverseEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { AdverseEvent_ContributingFactor } from "./AdverseEvent_ContributingFactor";
import { AdverseEvent_ContributingFactorSchemaInternal } from "./AdverseEvent_ContributingFactor";
import type { AdverseEvent_MitigatingAction } from "./AdverseEvent_MitigatingAction";
import { AdverseEvent_MitigatingActionSchemaInternal } from "./AdverseEvent_MitigatingAction";
import type { AdverseEvent_Participant } from "./AdverseEvent_Participant";
import { AdverseEvent_ParticipantSchemaInternal } from "./AdverseEvent_Participant";
import type { AdverseEvent_PreventiveAction } from "./AdverseEvent_PreventiveAction";
import { AdverseEvent_PreventiveActionSchemaInternal } from "./AdverseEvent_PreventiveAction";
import type { AdverseEvent_SupportingInfo } from "./AdverseEvent_SupportingInfo";
import { AdverseEvent_SupportingInfoSchemaInternal } from "./AdverseEvent_SupportingInfo";
import type { AdverseEvent_SuspectEntity } from "./AdverseEvent_SuspectEntity";
import { AdverseEvent_SuspectEntitySchemaInternal } from "./AdverseEvent_SuspectEntity";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
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
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management.  Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers.  Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints. */
export interface AdverseEvent extends DomainResource {
	/** Whether the event actually happened or was a near miss. Note that this is independent of whether anyone was affected or harmed or how severely. */
	actuality: "actual" | "potential";
	/** Extensions for actuality */
	_actuality?: Element;
	/** The overall type of event, intended for search and filtering purposes. */
	category?: Array<CodeableConcept>;
	/** Specific event that occurred or that was averted, such as patient fall, wrong organ removed, or wrong blood transfused. */
	code?: CodeableConcept;
	/** The contributing factors suspected to have increased the probability or severity of the adverse event. */
	contributingFactor?: Array<AdverseEvent_ContributingFactor>;
	/** Estimated or actual date the AdverseEvent began, in the opinion of the reporter. */
	detected?: string;
	/** Extensions for detected */
	_detected?: Element;
	/** The Encounter associated with the start of the AdverseEvent. */
	encounter?: Reference;
	/** Considered likely or probable or anticipated in the research study.  Whether the reported event matches any of the outcomes for the patient that are considered by the study as known or likely. */
	expectedInResearchStudy?: boolean;
	/** Extensions for expectedInResearchStudy */
	_expectedInResearchStudy?: Element;
	/** Business identifiers assigned to this adverse event by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The information about where the adverse event occurred. */
	location?: Reference;
	/** The ameliorating action taken after the adverse event occured in order to reduce the extent of harm. */
	mitigatingAction?: Array<AdverseEvent_MitigatingAction>;
	/** Comments made about the adverse event by the performer, subject or other participants. */
	note?: Array<Annotation>;
	/** The date (and perhaps time) when the adverse event occurred. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The date (and perhaps time) when the adverse event occurred. */
	occurrencePeriod?: Period;
	/** The date (and perhaps time) when the adverse event occurred. */
	occurrenceTiming?: Timing;
	/** Describes the type of outcome from the adverse event, such as resolved, recovering, ongoing, resolved-with-sequelae, or fatal. */
	outcome?: Array<CodeableConcept>;
	/** Indicates who or what participated in the adverse event and how they were involved. */
	participant?: Array<AdverseEvent_Participant>;
	/** Preventive actions that contributed to avoiding the adverse event. */
	preventiveAction?: Array<AdverseEvent_PreventiveAction>;
	/** The date on which the existence of the AdverseEvent was first recorded. */
	recordedDate?: string;
	/** Extensions for recordedDate */
	_recordedDate?: Element;
	/** Information on who recorded the adverse event.  May be the patient or a practitioner. */
	recorder?: Reference;
	/** This is a AdverseEvent resource. */
	resourceType: "AdverseEvent";
	/** Information about the condition that occurred as a result of the adverse event, such as hives due to the exposure to a substance (for example, a drug or a chemical) or a broken leg as a result of the fall. */
	resultingEffect?: Array<Reference>;
	/** Assessment whether this event, or averted event, was of clinical importance. */
	seriousness?: CodeableConcept;
	/** The current state of the adverse event or potential adverse event. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "not-done"
		| "on-hold"
		| "preparation"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The research study that the subject is enrolled in. */
	study?: Array<Reference>;
	/** This subject or group impacted by the event. */
	subject: Reference;
	/** Supporting information relevant to the event. */
	supportingInfo?: Array<AdverseEvent_SupportingInfo>;
	/** Describes the entity that is suspected to have caused the adverse event. */
	suspectEntity?: Array<AdverseEvent_SuspectEntity>;
}

const getAdverseEvent_ContributingFactorSchema =
	(): z.ZodType<AdverseEvent_ContributingFactor> =>
		AdverseEvent_ContributingFactorSchemaInternal as z.ZodType<AdverseEvent_ContributingFactor>;
const getAdverseEvent_MitigatingActionSchema =
	(): z.ZodType<AdverseEvent_MitigatingAction> =>
		AdverseEvent_MitigatingActionSchemaInternal as z.ZodType<AdverseEvent_MitigatingAction>;
const getAdverseEvent_ParticipantSchema =
	(): z.ZodType<AdverseEvent_Participant> =>
		AdverseEvent_ParticipantSchemaInternal as z.ZodType<AdverseEvent_Participant>;
const getAdverseEvent_PreventiveActionSchema =
	(): z.ZodType<AdverseEvent_PreventiveAction> =>
		AdverseEvent_PreventiveActionSchemaInternal as z.ZodType<AdverseEvent_PreventiveAction>;
const getAdverseEvent_SupportingInfoSchema =
	(): z.ZodType<AdverseEvent_SupportingInfo> =>
		AdverseEvent_SupportingInfoSchemaInternal as z.ZodType<AdverseEvent_SupportingInfo>;
const getAdverseEvent_SuspectEntitySchema =
	(): z.ZodType<AdverseEvent_SuspectEntity> =>
		AdverseEvent_SuspectEntitySchemaInternal as z.ZodType<AdverseEvent_SuspectEntity>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const AdverseEventSchemaInternal = DomainResourceSchemaInternal.extend({
	actuality: z.enum(["actual", "potential"]),
	_actuality: z.lazy(getElementSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	contributingFactor: z
		.lazy(getAdverseEvent_ContributingFactorSchema)
		.array()
		.optional(),
	detected: fhirDateTime().optional(),
	_detected: z.lazy(getElementSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	expectedInResearchStudy: z.boolean().optional(),
	_expectedInResearchStudy: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	mitigatingAction: z
		.lazy(getAdverseEvent_MitigatingActionSchema)
		.array()
		.optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrencePeriod: z.lazy(getPeriodSchema).optional(),
	occurrenceTiming: z.lazy(getTimingSchema).optional(),
	outcome: z.lazy(getCodeableConceptSchema).array().optional(),
	participant: z.lazy(getAdverseEvent_ParticipantSchema).array().optional(),
	preventiveAction: z
		.lazy(getAdverseEvent_PreventiveActionSchema)
		.array()
		.optional(),
	recordedDate: fhirDateTime().optional(),
	_recordedDate: z.lazy(getElementSchema).optional(),
	recorder: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("AdverseEvent"),
	resultingEffect: z.lazy(getReferenceSchema).array().optional(),
	seriousness: z.lazy(getCodeableConceptSchema).optional(),
	status: z.enum([
		"completed",
		"entered-in-error",
		"in-progress",
		"not-done",
		"on-hold",
		"preparation",
		"stopped",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	study: z.lazy(getReferenceSchema).array().optional(),
	subject: z.lazy(getReferenceSchema),
	supportingInfo: z
		.lazy(getAdverseEvent_SupportingInfoSchema)
		.array()
		.optional(),
	suspectEntity: z.lazy(getAdverseEvent_SuspectEntitySchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const occurrence_x_Present = [
			"occurrenceDateTime",
			"occurrencePeriod",
			"occurrenceTiming",
		].filter((field) => record[field] !== undefined);
		if (occurrence_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of occurrenceDateTime, occurrencePeriod, occurrenceTiming may be present for occurrence[x]",
				path: [occurrence_x_Present[0]],
			});
		}
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
				"http://hl7.org/fhir/StructureDefinition/ResearchSubject",
			],
			[
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
				"ResearchSubject",
			],
			ctx,
		);
		validateReferenceTarget(
			record.resultingEffect,
			"resultingEffect",
			[
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/Observation",
			],
			["Condition", "Observation"],
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
				"http://hl7.org/fhir/StructureDefinition/ResearchSubject",
			],
			["Group", "Patient", "Practitioner", "RelatedPerson", "ResearchSubject"],
			ctx,
		);
	});

export const AdverseEventSchema =
	AdverseEventSchemaInternal as z.ZodType<AdverseEvent>;
