// Profile: http://hl7.org/fhir/StructureDefinition/MedicationStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Dosage } from "../Dosage";
import { DosageSchemaInternal } from "../Dosage";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Base StructureDefinition for MedicationStatement Resource */
export interface MedicationStatement extends DomainResource {
	/** A plan, proposal or order that is fulfilled in whole or in part by this event. */
	basedOn?: Array<Reference>;
	/** Indicates where type of medication statement and where the medication is expected to be consumed or administered. */
	category?: CodeableConcept;
	/** The encounter or episode of care that establishes the context for this MedicationStatement. */
	context?: Reference;
	/** The date when the medication statement was asserted by the information source. */
	dateAsserted?: string;
	/** Extensions for dateAsserted */
	_dateAsserted?: Element;
	/** Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement. */
	derivedFrom?: Array<Reference>;
	/** Indicates how the medication is/was or should be taken by the patient. */
	dosage?: Array<Dosage>;
	/** The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true). */
	effectiveDateTime?: string;
	/** Extensions for effectiveDateTime */
	_effectiveDateTime?: Element;
	/** The interval of time during which it is being asserted that the patient was taking the medication (or was not taking, when the wasNotGiven element is true). */
	effectivePeriod?: Period;
	/** External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated. */
	identifier?: Array<Identifier>;
	/** The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g Claim or MedicationRequest. */
	informationSource?: Reference;
	/** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medicationCodeableConcept?: CodeableConcept;
	/** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medicationReference?: Reference;
	/** Provides extra information about the medication statement that is not conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** A larger event of which this particular event is a component or step. */
	partOf?: Array<Reference>;
	/** A reason for why the medication is being/was taken. */
	reasonCode?: Array<CodeableConcept>;
	/** A code indicating why the medication was not taken. */
	reasonNotTaken?: Array<CodeableConcept>;
	/** Condition or observation that supports why the medication is being/was taken. */
	reasonReference?: Array<Reference>;
	/** This is a MedicationStatement resource. */
	resourceType: "MedicationStatement";
	/** A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally this will be active or completed. */
	status:
		| "active"
		| "completed"
		| "entered-in-error"
		| "intended"
		| "on-hold"
		| "stopped";
	/** Extensions for status */
	_status?: Element;
	/** The person, animal or group who is/was taking the medication. */
	subject: Reference;
	/** Indicator of the certainty of whether the medication was taken by the patient. */
	taken: "n" | "na" | "unk" | "y";
	/** Extensions for taken */
	_taken?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDosageSchema = (): z.ZodType<Dosage> =>
	DosageSchemaInternal as z.ZodType<Dosage>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationStatementSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		context: z.lazy(getReferenceSchema).optional(),
		dateAsserted: fhirDateTime().optional(),
		_dateAsserted: z.lazy(getElementSchema).optional(),
		derivedFrom: z.lazy(getReferenceSchema).array().optional(),
		dosage: z.lazy(getDosageSchema).array().optional(),
		effectiveDateTime: fhirDateTime().optional(),
		_effectiveDateTime: z.lazy(getElementSchema).optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		informationSource: z.lazy(getReferenceSchema).optional(),
		medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		medicationReference: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonNotTaken: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("MedicationStatement"),
		status: z.enum([
			"active",
			"completed",
			"entered-in-error",
			"intended",
			"on-hold",
			"stopped",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema),
		taken: z.enum(["n", "na", "unk", "y"]),
		_taken: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const effective_x_Present = [
				"effectiveDateTime",
				"effectivePeriod",
			].filter((field) => record[field] !== undefined);
			if (effective_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of effectiveDateTime, effectivePeriod may be present for effective[x]",
					path: [effective_x_Present[0]],
				});
			}
			const medication_x_Present = [
				"medicationCodeableConcept",
				"medicationReference",
			].filter((field) => record[field] !== undefined);
			if (medication_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of medicationCodeableConcept, medicationReference must be present for medication[x]",
					path: ["medicationCodeableConcept"],
				});
			}
			if (medication_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of medicationCodeableConcept, medicationReference may be present for medication[x]",
					path: [medication_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				[
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
					"http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
					"http://hl7.org/fhir/StructureDefinition/ReferralRequest",
				],
				[
					"CarePlan",
					"MedicationRequest",
					"ProcedureRequest",
					"ReferralRequest",
				],
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
				record.derivedFrom,
				"derivedFrom",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.informationSource,
				"informationSource",
				[
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				["Organization", "Patient", "Practitioner", "RelatedPerson"],
				ctx,
			);
			validateReferenceTarget(
				record.medicationReference,
				"medicationReference",
				["http://hl7.org/fhir/StructureDefinition/Medication"],
				["Medication"],
				ctx,
			);
			validateReferenceTarget(
				record.partOf,
				"partOf",
				[
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationDispense",
					"http://hl7.org/fhir/StructureDefinition/MedicationStatement",
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				[
					"MedicationAdministration",
					"MedicationDispense",
					"MedicationStatement",
					"Observation",
					"Procedure",
				],
				ctx,
			);
			validateReferenceTarget(
				record.reasonReference,
				"reasonReference",
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
