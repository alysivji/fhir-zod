// Profile: http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { FamilyMemberHistory_Condition } from "./FamilyMemberHistory_Condition";
import { FamilyMemberHistory_ConditionSchemaInternal } from "./FamilyMemberHistory_Condition";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Significant health conditions for a person related to the patient relevant in the context of care for the patient. */
export interface FamilyMemberHistory extends DomainResource {
	/** The age of the relative at the time the family member history is recorded. */
	ageAge?: Age;
	/** The age of the relative at the time the family member history is recorded. */
	ageRange?: Range;
	/** The age of the relative at the time the family member history is recorded. */
	ageString?: string;
	/** Extensions for ageString */
	_ageString?: Element;
	/** The actual or approximate date of birth of the relative. */
	bornDate?: string;
	/** Extensions for bornDate */
	_bornDate?: Element;
	/** The actual or approximate date of birth of the relative. */
	bornPeriod?: Period;
	/** The actual or approximate date of birth of the relative. */
	bornString?: string;
	/** Extensions for bornString */
	_bornString?: Element;
	/** The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition. */
	condition?: Array<FamilyMemberHistory_Condition>;
	/** Describes why the family member's history is not available. */
	dataAbsentReason?: CodeableConcept;
	/** The date (and possibly time) when the family member history was recorded or last updated. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
	deceasedAge?: Age;
	/** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
	deceasedBoolean?: boolean;
	/** Extensions for deceasedBoolean */
	_deceasedBoolean?: Element;
	/** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
	deceasedDate?: string;
	/** Extensions for deceasedDate */
	_deceasedDate?: Element;
	/** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
	deceasedRange?: Range;
	/** Deceased flag or the actual or approximate age of the relative at the time of death for the family member history record. */
	deceasedString?: string;
	/** Extensions for deceasedString */
	_deceasedString?: Element;
	/** If true, indicates that the age value specified is an estimated value. */
	estimatedAge?: boolean;
	/** Extensions for estimatedAge */
	_estimatedAge?: Element;
	/** Business identifiers assigned to this family member history by the performer or other systems which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this FamilyMemberHistory. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** This will either be a name or a description; e.g. "Aunt Susan", "my cousin with the red hair". */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** This property allows a non condition-specific note to the made about the related person. Ideally, the note would be in the condition property, but this is not always possible. */
	note?: Array<Annotation>;
	/** The person who this history concerns. */
	patient: Reference;
	/** Describes why the family member history occurred in coded or textual form. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates a Condition, Observation, AllergyIntolerance, or QuestionnaireResponse that justifies this family member history event. */
	reasonReference?: Array<Reference>;
	/** The type of relationship this person has to the patient (father, mother, brother etc.). */
	relationship: CodeableConcept;
	/** This is a FamilyMemberHistory resource. */
	resourceType: "FamilyMemberHistory";
	/** The birth sex of the family member. */
	sex?: CodeableConcept;
	/** A code specifying the status of the record of the family history of a specific family member. */
	status: "completed" | "entered-in-error" | "health-unknown" | "partial";
	/** Extensions for status */
	_status?: Element;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getFamilyMemberHistory_ConditionSchema =
	(): z.ZodType<FamilyMemberHistory_Condition> =>
		FamilyMemberHistory_ConditionSchemaInternal as z.ZodType<FamilyMemberHistory_Condition>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const FamilyMemberHistorySchemaInternal =
	DomainResourceSchemaInternal.extend({
		ageAge: z.lazy(getAgeSchema).optional(),
		ageRange: z.lazy(getRangeSchema).optional(),
		ageString: fhirString().optional(),
		_ageString: z.lazy(getElementSchema).optional(),
		bornDate: fhirDate().optional(),
		_bornDate: z.lazy(getElementSchema).optional(),
		bornPeriod: z.lazy(getPeriodSchema).optional(),
		bornString: fhirString().optional(),
		_bornString: z.lazy(getElementSchema).optional(),
		condition: z
			.lazy(getFamilyMemberHistory_ConditionSchema)
			.array()
			.optional(),
		dataAbsentReason: z.lazy(getCodeableConceptSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		deceasedAge: z.lazy(getAgeSchema).optional(),
		deceasedBoolean: z.boolean().optional(),
		_deceasedBoolean: z.lazy(getElementSchema).optional(),
		deceasedDate: fhirDate().optional(),
		_deceasedDate: z.lazy(getElementSchema).optional(),
		deceasedRange: z.lazy(getRangeSchema).optional(),
		deceasedString: fhirString().optional(),
		_deceasedString: z.lazy(getElementSchema).optional(),
		estimatedAge: z.boolean().optional(),
		_estimatedAge: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		instantiatesCanonical: fhirCanonical().nullable().array().optional(),
		_instantiatesCanonical: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		instantiatesUri: fhirUri().nullable().array().optional(),
		_instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		patient: z.lazy(getReferenceSchema),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		relationship: z.lazy(getCodeableConceptSchema),
		resourceType: z.literal("FamilyMemberHistory"),
		sex: z.lazy(getCodeableConceptSchema).optional(),
		status: z.enum([
			"completed",
			"entered-in-error",
			"health-unknown",
			"partial",
		]),
		_status: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const age_x_Present = ["ageAge", "ageRange", "ageString"].filter(
				(field) => record[field] !== undefined,
			);
			if (age_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of ageAge, ageRange, ageString may be present for age[x]",
					path: [age_x_Present[0]],
				});
			}
			const born_x_Present = ["bornDate", "bornPeriod", "bornString"].filter(
				(field) => record[field] !== undefined,
			);
			if (born_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of bornDate, bornPeriod, bornString may be present for born[x]",
					path: [born_x_Present[0]],
				});
			}
			const deceased_x_Present = [
				"deceasedAge",
				"deceasedBoolean",
				"deceasedDate",
				"deceasedRange",
				"deceasedString",
			].filter((field) => record[field] !== undefined);
			if (deceased_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of deceasedAge, deceasedBoolean, deceasedDate, deceasedRange, deceasedString may be present for deceased[x]",
					path: [deceased_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.instantiatesCanonical,
				record._instantiatesCanonical,
				"instantiatesCanonical",
				"_instantiatesCanonical",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.instantiatesUri,
				record._instantiatesUri,
				"instantiatesUri",
				"_instantiatesUri",
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
				record.reasonReference,
				"reasonReference",
				[
					"http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
					"http://hl7.org/fhir/StructureDefinition/DocumentReference",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
				],
				[
					"AllergyIntolerance",
					"Condition",
					"DiagnosticReport",
					"DocumentReference",
					"Observation",
					"QuestionnaireResponse",
				],
				ctx,
			);
		});

export const FamilyMemberHistorySchema =
	FamilyMemberHistorySchemaInternal as z.ZodType<FamilyMemberHistory>;
