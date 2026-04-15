// Profile: http://hl7.org/fhir/StructureDefinition/Condition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Condition_Evidence } from "./Condition_Evidence";
import { Condition_EvidenceSchemaInternal } from "./Condition_Evidence";
import type { Condition_Stage } from "./Condition_Stage";
import { Condition_StageSchemaInternal } from "./Condition_Stage";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Condition Resource */
export interface Condition extends DomainResource {
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate. */
	abatementAge?: Age;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate. */
	abatementBoolean?: boolean;
	/** Extensions for abatementBoolean */
	_abatementBoolean?: Element;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate. */
	abatementDateTime?: string;
	/** Extensions for abatementDateTime */
	_abatementDateTime?: Element;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate. */
	abatementPeriod?: Period;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate. */
	abatementRange?: Range;
	/** The date or estimated date that the condition resolved or went into remission. This is called "abatement" because of the many overloaded connotations associated with "remission" or "resolution" - Conditions are never really resolved, but they can abate. */
	abatementString?: string;
	/** Extensions for abatementString */
	_abatementString?: Element;
	/** The date on which the existance of the Condition was first asserted or acknowledged. */
	assertedDate?: string;
	/** Extensions for assertedDate */
	_assertedDate?: Element;
	/** Individual who is making the condition statement. */
	asserter?: Reference;
	/** The anatomical location where this condition manifests itself. */
	bodySite?: Array<CodeableConcept>;
	/** A category assigned to the condition. */
	category?: Array<CodeableConcept>;
	/** The clinical status of the condition. */
	clinicalStatus?:
		| "active"
		| "inactive"
		| "recurrence"
		| "remission"
		| "resolved";
	/** Extensions for clinicalStatus */
	_clinicalStatus?: Element;
	/** Identification of the condition, problem or diagnosis. */
	code?: CodeableConcept;
	/** Encounter during which the condition was first asserted. */
	context?: Reference;
	/** Supporting Evidence / manifestations that are the basis on which this condition is suspected or confirmed. */
	evidence?: Array<Condition_Evidence>;
	/** This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation). */
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
	/** This is a Condition resource. */
	resourceType: "Condition";
	/** A subjective assessment of the severity of the condition as evaluated by the clinician. */
	severity?: CodeableConcept;
	/** Clinical stage or grade of a condition. May include formal severity assessments. */
	stage?: Condition_Stage;
	/** Indicates the patient or group who the condition record is associated with. */
	subject: Reference;
	/** The verification status to support the clinical status of the condition. */
	verificationStatus?:
		| "confirmed"
		| "differential"
		| "entered-in-error"
		| "provisional"
		| "refuted"
		| "unknown";
	/** Extensions for verificationStatus */
	_verificationStatus?: Element;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCondition_EvidenceSchema = (): z.ZodType<Condition_Evidence> =>
	Condition_EvidenceSchemaInternal as z.ZodType<Condition_Evidence>;
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
	abatementBoolean: z.boolean().optional(),
	_abatementBoolean: z.lazy(getElementSchema).optional(),
	abatementDateTime: fhirDateTime().optional(),
	_abatementDateTime: z.lazy(getElementSchema).optional(),
	abatementPeriod: z.lazy(getPeriodSchema).optional(),
	abatementRange: z.lazy(getRangeSchema).optional(),
	abatementString: fhirString().optional(),
	_abatementString: z.lazy(getElementSchema).optional(),
	assertedDate: fhirDateTime().optional(),
	_assertedDate: z.lazy(getElementSchema).optional(),
	asserter: z.lazy(getReferenceSchema).optional(),
	bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).array().optional(),
	clinicalStatus: z
		.enum(["active", "inactive", "recurrence", "remission", "resolved"])
		.optional(),
	_clinicalStatus: z.lazy(getElementSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	context: z.lazy(getReferenceSchema).optional(),
	evidence: z.lazy(getCondition_EvidenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	onsetAge: z.lazy(getAgeSchema).optional(),
	onsetDateTime: fhirDateTime().optional(),
	_onsetDateTime: z.lazy(getElementSchema).optional(),
	onsetPeriod: z.lazy(getPeriodSchema).optional(),
	onsetRange: z.lazy(getRangeSchema).optional(),
	onsetString: fhirString().optional(),
	_onsetString: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("Condition"),
	severity: z.lazy(getCodeableConceptSchema).optional(),
	stage: z.lazy(getCondition_StageSchema).optional(),
	subject: z.lazy(getReferenceSchema),
	verificationStatus: z
		.enum([
			"confirmed",
			"differential",
			"entered-in-error",
			"provisional",
			"refuted",
			"unknown",
		])
		.optional(),
	_verificationStatus: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const abatement_x_Present = [
			"abatementAge",
			"abatementBoolean",
			"abatementDateTime",
			"abatementPeriod",
			"abatementRange",
			"abatementString",
		].filter((field) => record[field] !== undefined);
		if (abatement_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of abatementAge, abatementBoolean, abatementDateTime, abatementPeriod, abatementRange, abatementString may be present for abatement[x]",
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
			record.asserter,
			"asserter",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "Practitioner", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.context,
			"context",
			[
				"http://hl7.org/fhir/StructureDefinition/Encounter",
				"http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
			],
			["Encounter", "EpisodeOfCare"],
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
