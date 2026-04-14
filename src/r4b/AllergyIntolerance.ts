// Profile: http://hl7.org/fhir/StructureDefinition/AllergyIntolerance
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { AllergyIntolerance_Reaction } from "./AllergyIntolerance_Reaction";
import { AllergyIntolerance_ReactionSchemaInternal } from "./AllergyIntolerance_Reaction";
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
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export interface AllergyIntolerance extends DomainResource {
	/** The source of the information about the allergy that is recorded. */
	asserter?: Reference;
	/** Category of the identified substance. */
	category?: Array<"biologic" | "environment" | "food" | "medication">;
	/** Extensions for category */
	_category?: Array<Element>;
	/** The clinical status of the allergy or intolerance. */
	clinicalStatus?: CodeableConcept;
	/** Code for an allergy or intolerance statement (either a positive or a negated/excluded statement).  This may be a code for a substance or pharmaceutical product that is considered to be responsible for the adverse reaction risk (e.g., "Latex"), an allergy or intolerance condition (e.g., "Latex allergy"), or a negated/excluded code for a specific substance or class (e.g., "No latex allergy") or a general or categorical negated statement (e.g.,  "No known allergy", "No known drug allergies").  Note: the substance for a specific reaction may be different from the substance identified as the cause of the risk, but it must be consistent with it. For instance, it may be a more specific substance (e.g. a brand medication) or a composite product that includes the identified substance. It must be clinically safe to only process the 'code' and ignore the 'reaction.substance'.  If a receiving system is unable to confirm that AllergyIntolerance.reaction.substance falls within the semantic scope of AllergyIntolerance.code, then the receiving system should ignore AllergyIntolerance.reaction.substance. */
	code?: CodeableConcept;
	/** Estimate of the potential clinical harm, or seriousness, of the reaction to the identified substance. */
	criticality?: "high" | "low" | "unable-to-assess";
	/** Extensions for criticality */
	_criticality?: Element;
	/** The encounter when the allergy or intolerance was asserted. */
	encounter?: Reference;
	/** Business identifiers assigned to this AllergyIntolerance by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** Represents the date and/or time of the last known occurrence of a reaction event. */
	lastOccurrence?: string;
	/** Extensions for lastOccurrence */
	_lastOccurrence?: Element;
	/** Additional narrative about the propensity for the Adverse Reaction, not captured in other fields. */
	note?: Array<Annotation>;
	/** Estimated or actual date,  date-time, or age when allergy or intolerance was identified. */
	onsetAge?: Age;
	/** Estimated or actual date,  date-time, or age when allergy or intolerance was identified. */
	onsetDateTime?: string;
	/** Extensions for onsetDateTime */
	_onsetDateTime?: Element;
	/** Estimated or actual date,  date-time, or age when allergy or intolerance was identified. */
	onsetPeriod?: Period;
	/** Estimated or actual date,  date-time, or age when allergy or intolerance was identified. */
	onsetRange?: Range;
	/** Estimated or actual date,  date-time, or age when allergy or intolerance was identified. */
	onsetString?: string;
	/** Extensions for onsetString */
	_onsetString?: Element;
	/** The patient who has the allergy or intolerance. */
	patient: Reference;
	/** Details about each adverse reaction event linked to exposure to the identified substance. */
	reaction?: Array<AllergyIntolerance_Reaction>;
	/** The recordedDate represents when this particular AllergyIntolerance record was created in the system, which is often a system-generated date. */
	recordedDate?: string;
	/** Extensions for recordedDate */
	_recordedDate?: Element;
	/** Individual who recorded the record and takes responsibility for its content. */
	recorder?: Reference;
	/** This is a AllergyIntolerance resource. */
	resourceType: "AllergyIntolerance";
	/** Identification of the underlying physiological mechanism for the reaction risk. */
	type?: "allergy" | "intolerance";
	/** Extensions for type */
	_type?: Element;
	/** Assertion about certainty associated with the propensity, or potential risk, of a reaction to the identified substance (including pharmaceutical product). */
	verificationStatus?: CodeableConcept;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAllergyIntolerance_ReactionSchema =
	(): z.ZodType<AllergyIntolerance_Reaction> =>
		AllergyIntolerance_ReactionSchemaInternal as z.ZodType<AllergyIntolerance_Reaction>;
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
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AllergyIntoleranceSchemaInternal =
	DomainResourceSchemaInternal.extend({
		asserter: z.lazy(getReferenceSchema).optional(),
		category: z
			.enum(["biologic", "environment", "food", "medication"])
			.array()
			.optional(),
		_category: z.lazy(getElementSchema).array().optional(),
		clinicalStatus: z.lazy(getCodeableConceptSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		criticality: z.enum(["high", "low", "unable-to-assess"]).optional(),
		_criticality: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		lastOccurrence: fhirDateTime().optional(),
		_lastOccurrence: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		onsetAge: z.lazy(getAgeSchema).optional(),
		onsetDateTime: fhirDateTime().optional(),
		_onsetDateTime: z.lazy(getElementSchema).optional(),
		onsetPeriod: z.lazy(getPeriodSchema).optional(),
		onsetRange: z.lazy(getRangeSchema).optional(),
		onsetString: fhirString().optional(),
		_onsetString: z.lazy(getElementSchema).optional(),
		patient: z.lazy(getReferenceSchema),
		reaction: z.lazy(getAllergyIntolerance_ReactionSchema).array().optional(),
		recordedDate: fhirDateTime().optional(),
		_recordedDate: z.lazy(getElementSchema).optional(),
		recorder: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("AllergyIntolerance"),
		type: z.enum(["allergy", "intolerance"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
		verificationStatus: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
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
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Patient", "Practitioner", "PractitionerRole", "RelatedPerson"],
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
				record.patient,
				"patient",
				["http://hl7.org/fhir/StructureDefinition/Patient"],
				["Patient"],
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
		});

export const AllergyIntoleranceSchema =
	AllergyIntoleranceSchemaInternal as z.ZodType<AllergyIntolerance>;
