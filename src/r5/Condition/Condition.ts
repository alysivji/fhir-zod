// Profile: http://hl7.org/fhir/StructureDefinition/Condition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "../Age";
import { AgeSchemaInternal } from "../Age";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Condition_Participant } from "./Condition_Participant";
import { Condition_ParticipantSchemaInternal } from "./Condition_Participant";
import type { Condition_Stage } from "./Condition_Stage";
import { Condition_StageSchemaInternal } from "./Condition_Stage";

/** A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern. */
export interface Condition extends DomainResource {
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Some conditions, such as chronic conditions, are never really resolved, but they can abate. */
	abatementAge?: Age;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Some conditions, such as chronic conditions, are never really resolved, but they can abate. */
	abatementDateTime?: string;
	/** Extensions for abatementDateTime */
	_abatementDateTime?: Element;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Some conditions, such as chronic conditions, are never really resolved, but they can abate. */
	abatementPeriod?: Period;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Some conditions, such as chronic conditions, are never really resolved, but they can abate. */
	abatementRange?: Range;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Some conditions, such as chronic conditions, are never really resolved, but they can abate. */
	abatementString?: string;
	/** Extensions for abatementString */
	_abatementString?: Element;
	/** The anatomical location where this condition manifests itself. */
	bodySite?: Array<CodeableConcept>;
	/** A category assigned to the condition. */
	category?: Array<CodeableConcept>;
	/** The clinical status of the condition. */
	clinicalStatus: CodeableConcept;
	/** Identification of the condition, problem or diagnosis. */
	code?: CodeableConcept;
	/** The Encounter during which this Condition was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Supporting evidence / manifestations that are the basis of the Condition's verification status, such as evidence that confirmed or refuted the condition. */
	evidence?: Array<CodeableReference>;
	/** Business identifiers assigned to this condition by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis. */
	note?: Array<Annotation>;
	/** Estimated or actual date or date-time  the condition began, in the opinion of the clinician. */
	onsetAge?: Age;
	/** Estimated or actual date or date-time  the condition began, in the opinion of the clinician. */
	onsetDateTime?: string;
	/** Extensions for onsetDateTime */
	_onsetDateTime?: Element;
	/** Estimated or actual date or date-time  the condition began, in the opinion of the clinician. */
	onsetPeriod?: Period;
	/** Estimated or actual date or date-time  the condition began, in the opinion of the clinician. */
	onsetRange?: Range;
	/** Estimated or actual date or date-time  the condition began, in the opinion of the clinician. */
	onsetString?: string;
	/** Extensions for onsetString */
	_onsetString?: Element;
	/** Indicates who or what participated in the activities related to the condition and how they were involved. */
	participant?: Array<Condition_Participant>;
	/** The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date. */
	recordedDate?: string;
	/** Extensions for recordedDate */
	_recordedDate?: Element;
	/** This is a Condition resource. */
	resourceType: "Condition";
	/** A subjective assessment of the severity of the condition as evaluated by the clinician. */
	severity?: CodeableConcept;
	/** A simple summary of the stage such as "Stage 3" or "Early Onset". The determination of the stage is disease-specific, such as cancer, retinopathy of prematurity, kidney diseases, Alzheimer's, or Parkinson disease. */
	stage?: Array<Condition_Stage>;
	/** Indicates the patient or group who the condition record is associated with. */
	subject: Reference;
	/** The verification status to support the clinical status of the condition.  The verification status pertains to the condition, itself, not to any specific condition attribute. */
	verificationStatus?: CodeableConcept;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getCondition_ParticipantSchema = (): z.ZodType<Condition_Participant> =>
	Condition_ParticipantSchemaInternal as z.ZodType<Condition_Participant>;
const getCondition_StageSchema = (): z.ZodType<Condition_Stage> =>
	Condition_StageSchemaInternal as z.ZodType<Condition_Stage>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ConditionSchemaInternal = DomainResourceSchemaInternal.extend({
	abatementAge: z.lazy(getAgeSchema).optional(),
	abatementDateTime: fhirDateTime().optional(),
	_abatementDateTime: z.lazy(getElementSchema).optional(),
	abatementPeriod: z.lazy(getPeriodSchema).optional(),
	abatementRange: z.lazy(getRangeSchema).optional(),
	abatementString: fhirString().optional(),
	_abatementString: z.lazy(getElementSchema).optional(),
	bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	clinicalStatus: z.lazy(getCodeableConceptSchema),
	code: z.lazy(getCodeableConceptSchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	evidence: z.lazy(getCodeableReferenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	onsetAge: z.lazy(getAgeSchema).optional(),
	onsetDateTime: fhirDateTime().optional(),
	_onsetDateTime: z.lazy(getElementSchema).optional(),
	onsetPeriod: z.lazy(getPeriodSchema).optional(),
	onsetRange: z.lazy(getRangeSchema).optional(),
	onsetString: fhirString().optional(),
	_onsetString: z.lazy(getElementSchema).optional(),
	participant: z.lazy(getCondition_ParticipantSchema).array().optional(),
	recordedDate: fhirDateTime().optional(),
	_recordedDate: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("Condition"),
	severity: z.lazy(getCodeableConceptSchema).optional(),
	stage: z.lazy(getCondition_StageSchema).array().optional(),
	subject: z.lazy(getReferenceSchema),
	verificationStatus: z.lazy(getCodeableConceptSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const abatement_x_Present = [
			"abatementAge",
			"abatementDateTime",
			"abatementPeriod",
			"abatementRange",
			"abatementString",
		].filter((field) => record[field] !== undefined);
		if (abatement_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of abatementAge, abatementDateTime, abatementPeriod, abatementRange, abatementString may be present for abatement[x]",
				path: [abatement_x_Present[0]],
			});
		}
		const onset_x_Present = [
			"onsetAge",
			"onsetDateTime",
			"onsetPeriod",
			"onsetRange",
			"onsetString",
		].filter((field) => record[field] !== undefined);
		if (onset_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of onsetAge, onsetDateTime, onsetPeriod, onsetRange, onsetString may be present for onset[x]",
				path: [onset_x_Present[0]],
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

export const ConditionSchema = ConditionSchemaInternal as z.ZodType<Condition>;
