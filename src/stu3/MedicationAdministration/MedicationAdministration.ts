// Profile: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
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
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { MedicationAdministration_Dosage } from "./MedicationAdministration_Dosage";
import { MedicationAdministration_DosageSchemaInternal } from "./MedicationAdministration_Dosage";
import type { MedicationAdministration_Performer } from "./MedicationAdministration_Performer";
import { MedicationAdministration_PerformerSchemaInternal } from "./MedicationAdministration_Performer";

/** Base StructureDefinition for MedicationAdministration Resource */
export interface MedicationAdministration extends DomainResource {
	/** Indicates the type of medication administration and where the medication is expected to be consumed or administered. */
	category?: CodeableConcept;
	/** The visit, admission or other contact between patient and health care provider the medication administration was performed as part of. */
	context?: Reference;
	/** A protocol, guideline, orderset or other definition that was adhered to in whole or in part by this event. */
	definition?: Array<Reference>;
	/** The device used in administering the medication to the patient.  For example, a particular infusion pump. */
	device?: Array<Reference>;
	/** Describes the medication dosage information details e.g. dose, rate, site, route, etc. */
	dosage?: MedicationAdministration_Dosage;
	/** A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
	effectiveDateTime?: string;
	/** Extensions for effectiveDateTime */
	_effectiveDateTime?: Element;
	/** A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
	effectivePeriod?: Period;
	/** A summary of the events of interest that have occurred, such as when the administration was verified. */
	eventHistory?: Array<Reference>;
	/** External identifier - FHIR will generate its own internal identifiers (probably URLs) which do not need to be explicitly managed by the resource.  The identifier here is one that would be used by another non-FHIR system - for example an automated medication pump would provide a record each time it operated; an administration while the patient was off the ward might be made with a different system and entered after the event.  Particularly important if these records have to be updated. */
	identifier?: Array<Identifier>;
	/** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medicationCodeableConcept?: CodeableConcept;
	/** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medicationReference?: Reference;
	/** Extra information about the medication administration that is not conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** Set this to true if the record is saying that the medication was NOT administered. */
	notGiven?: boolean;
	/** Extensions for notGiven */
	_notGiven?: Element;
	/** A larger event of which this particular event is a component or step. */
	partOf?: Array<Reference>;
	/** The individual who was responsible for giving the medication to the patient. */
	performer?: Array<MedicationAdministration_Performer>;
	/** The original request, instruction or authority to perform the administration. */
	prescription?: Reference;
	/** A code indicating why the medication was given. */
	reasonCode?: Array<CodeableConcept>;
	/** A code indicating why the administration was not performed. */
	reasonNotGiven?: Array<CodeableConcept>;
	/** Condition or observation that supports why the medication was administered. */
	reasonReference?: Array<Reference>;
	/** This is a MedicationAdministration resource. */
	resourceType: "MedicationAdministration";
	/** Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions it is possible for an administration to be started but not completed or it may be paused while some other process is under way. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "on-hold"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The person or animal or group receiving the medication. */
	subject: Reference;
	/** Additional information (for example, patient height and weight) that supports the administration of the medication. */
	supportingInformation?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicationAdministration_DosageSchema =
	(): z.ZodType<MedicationAdministration_Dosage> =>
		MedicationAdministration_DosageSchemaInternal as z.ZodType<MedicationAdministration_Dosage>;
const getMedicationAdministration_PerformerSchema =
	(): z.ZodType<MedicationAdministration_Performer> =>
		MedicationAdministration_PerformerSchemaInternal as z.ZodType<MedicationAdministration_Performer>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationAdministrationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema).optional(),
		context: z.lazy(getReferenceSchema).optional(),
		definition: z.lazy(getReferenceSchema).array().optional(),
		device: z.lazy(getReferenceSchema).array().optional(),
		dosage: z.lazy(getMedicationAdministration_DosageSchema).optional(),
		effectiveDateTime: fhirDateTime().optional(),
		_effectiveDateTime: z.lazy(getElementSchema).optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		eventHistory: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		medicationReference: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		notGiven: z.boolean().optional(),
		_notGiven: z.lazy(getElementSchema).optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		performer: z
			.lazy(getMedicationAdministration_PerformerSchema)
			.array()
			.optional(),
		prescription: z.lazy(getReferenceSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonNotGiven: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("MedicationAdministration"),
		status: z.enum([
			"completed",
			"entered-in-error",
			"in-progress",
			"on-hold",
			"stopped",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema),
		supportingInformation: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const effective_x_Present = [
				"effectiveDateTime",
				"effectivePeriod",
			].filter((field) => record[field] !== undefined);
			if (effective_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of effectiveDateTime, effectivePeriod must be present for effective[x]",
					path: ["effectiveDateTime"],
				});
			}
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
				record.definition,
				"definition",
				[
					"http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
					"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
				],
				["ActivityDefinition", "PlanDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.device,
				"device",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
			validateReferenceTarget(
				record.eventHistory,
				"eventHistory",
				["http://hl7.org/fhir/StructureDefinition/Provenance"],
				["Provenance"],
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
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["MedicationAdministration", "Procedure"],
				ctx,
			);
			validateReferenceTarget(
				record.prescription,
				"prescription",
				["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
				["MedicationRequest"],
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
			validateReferenceTarget(
				record.supportingInformation,
				"supportingInformation",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const MedicationAdministrationSchema =
	MedicationAdministrationSchemaInternal as z.ZodType<MedicationAdministration>;
