// Profile: http://hl7.org/fhir/StructureDefinition/MedicationStatement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Dosage } from "./Dosage";
import { DosageSchemaInternal } from "./Dosage";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MedicationStatement_Adherence } from "./MedicationStatement_Adherence";
import { MedicationStatement_AdherenceSchemaInternal } from "./MedicationStatement_Adherence";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
 *
 * The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export interface MedicationStatement extends DomainResource {
	/** Indicates whether the medication is or is not being consumed or administered. */
	adherence?: MedicationStatement_Adherence;
	/** Type of medication statement (for example, drug classification like ATC, where meds would be administered, legal category of the medication.). */
	category?: Array<CodeableConcept>;
	/** The date when the Medication Statement was asserted by the information source. */
	dateAsserted?: string;
	/** Extensions for dateAsserted */
	_dateAsserted?: Element;
	/** Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement. */
	derivedFrom?: Array<Reference>;
	/** Indicates how the medication is/was or should be taken by the patient. */
	dosage?: Array<Dosage>;
	/** The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.adherence element is Not Taking). */
	effectiveDateTime?: string;
	/** Extensions for effectiveDateTime */
	_effectiveDateTime?: Element;
	/** The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.adherence element is Not Taking). */
	effectivePeriod?: Period;
	/** The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.adherence element is Not Taking). */
	effectiveTiming?: Timing;
	/** The encounter that establishes the context for this MedicationStatement. */
	encounter?: Reference;
	/** Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest. */
	informationSource?: Array<Reference>;
	/** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medication: CodeableReference;
	/** Provides extra information about the Medication Statement that is not conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** A larger event of which this particular MedicationStatement is a component or step. */
	partOf?: Array<Reference>;
	/** A concept, Condition or observation that supports why the medication is being/was taken. */
	reason?: Array<CodeableReference>;
	/** Link to information that is relevant to a medication statement, for example, illicit drug use, gestational age, etc. */
	relatedClinicalInformation?: Array<Reference>;
	/** The full representation of the dose of the medication included in all dosage instructions.  To be used when multiple dosage instructions are included to represent complex dosing such as increasing or tapering doses. */
	renderedDosageInstruction?: string;
	/** Extensions for renderedDosageInstruction */
	_renderedDosageInstruction?: Element;
	/** This is a MedicationStatement resource. */
	resourceType: "MedicationStatement";
	/** A code representing the status of recording the medication statement. */
	status: "draft" | "entered-in-error" | "recorded";
	/** Extensions for status */
	_status?: Element;
	/** The person, animal or group who is/was taking the medication. */
	subject: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDosageSchema = (): z.ZodType<Dosage> =>
	DosageSchemaInternal as z.ZodType<Dosage>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicationStatement_AdherenceSchema =
	(): z.ZodType<MedicationStatement_Adherence> =>
		MedicationStatement_AdherenceSchemaInternal as z.ZodType<MedicationStatement_Adherence>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const MedicationStatementSchemaInternal =
	DomainResourceSchemaInternal.extend({
		adherence: z.lazy(getMedicationStatement_AdherenceSchema).optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		dateAsserted: fhirDateTime().optional(),
		_dateAsserted: z.lazy(getElementSchema).optional(),
		derivedFrom: z.lazy(getReferenceSchema).array().optional(),
		dosage: z.lazy(getDosageSchema).array().optional(),
		effectiveDateTime: fhirDateTime().optional(),
		_effectiveDateTime: z.lazy(getElementSchema).optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		effectiveTiming: z.lazy(getTimingSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		informationSource: z.lazy(getReferenceSchema).array().optional(),
		medication: z.lazy(getCodeableReferenceSchema),
		note: z.lazy(getAnnotationSchema).array().optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		relatedClinicalInformation: z.lazy(getReferenceSchema).array().optional(),
		renderedDosageInstruction: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_renderedDosageInstruction: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("MedicationStatement"),
		status: z.enum(["draft", "entered-in-error", "recorded"]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const effective_x_Present = [
				"effectiveDateTime",
				"effectivePeriod",
				"effectiveTiming",
			].filter((field) => record[field] !== undefined);
			if (effective_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of effectiveDateTime, effectivePeriod, effectiveTiming may be present for effective[x]",
					path: [effective_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.derivedFrom,
				"derivedFrom",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
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
				record.informationSource,
				"informationSource",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.partOf,
				"partOf",
				[
					"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["MedicationStatement", "Procedure"],
				ctx,
			);
			validateReferenceTarget(
				record.relatedClinicalInformation,
				"relatedClinicalInformation",
				[
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/Observation",
				],
				["Condition", "Observation"],
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

export const MedicationStatementSchema =
	MedicationStatementSchemaInternal as z.ZodType<MedicationStatement>;
