// Profile: http://hl7.org/fhir/StructureDefinition/MedicationDispense
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Dosage } from "./Dosage";
import { DosageSchemaInternal } from "./Dosage";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MedicationDispense_Performer } from "./MedicationDispense_Performer";
import { MedicationDispense_PerformerSchemaInternal } from "./MedicationDispense_Performer";
import type { MedicationDispense_Substitution } from "./MedicationDispense_Substitution";
import { MedicationDispense_SubstitutionSchemaInternal } from "./MedicationDispense_Substitution";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order. */
export interface MedicationDispense extends DomainResource {
	/** Indicates the medication order that is being dispensed against. */
	authorizingPrescription?: Array<Reference>;
	/** Indicates the type of medication dispense (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)). */
	category?: CodeableConcept;
	/** The encounter or episode of care that establishes the context for this event. */
	context?: Reference;
	/** The amount of medication expressed as a timing amount. */
	daysSupply?: Quantity;
	/** Identification of the facility/location where the medication was shipped to, as part of the dispense event. */
	destination?: Reference;
	/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy, dosage alert etc. */
	detectedIssue?: Array<Reference>;
	/** Indicates how the medication is to be used by the patient. */
	dosageInstruction?: Array<Dosage>;
	/** A summary of the events of interest that have occurred, such as when the dispense was verified. */
	eventHistory?: Array<Reference>;
	/** Identifiers associated with this Medication Dispense that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The principal physical location where the dispense was performed. */
	location?: Reference;
	/** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medicationCodeableConcept?: CodeableConcept;
	/** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medicationReference?: Reference;
	/** Extra information about the dispense that could not be conveyed in the other attributes. */
	note?: Array<Annotation>;
	/** The procedure that trigger the dispense. */
	partOf?: Array<Reference>;
	/** Indicates who or what performed the event. */
	performer?: Array<MedicationDispense_Performer>;
	/** The amount of medication that has been dispensed. Includes unit of measure. */
	quantity?: Quantity;
	/** Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional. */
	receiver?: Array<Reference>;
	/** This is a MedicationDispense resource. */
	resourceType: "MedicationDispense";
	/** A code specifying the state of the set of dispense events. */
	status:
		| "cancelled"
		| "completed"
		| "declined"
		| "entered-in-error"
		| "in-progress"
		| "on-hold"
		| "preparation"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Indicates the reason why a dispense was not performed. */
	statusReasonCodeableConcept?: CodeableConcept;
	/** Indicates the reason why a dispense was not performed. */
	statusReasonReference?: Reference;
	/** A link to a resource representing the person or the group to whom the medication will be given. */
	subject?: Reference;
	/** Indicates whether or not substitution was made as part of the dispense.  In some cases, substitution will be expected but does not happen, in other cases substitution is not expected but does happen.  This block explains what substitution did or did not happen and why.  If nothing is specified, substitution was not done. */
	substitution?: MedicationDispense_Substitution;
	/** Additional information that supports the medication being dispensed. */
	supportingInformation?: Array<Reference>;
	/** Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc. */
	type?: CodeableConcept;
	/** The time the dispensed product was provided to the patient or their representative. */
	whenHandedOver?: string;
	/** Extensions for whenHandedOver */
	_whenHandedOver?: Element;
	/** The time when the dispensed product was packaged and reviewed. */
	whenPrepared?: string;
	/** Extensions for whenPrepared */
	_whenPrepared?: Element;
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
const getMedicationDispense_PerformerSchema =
	(): z.ZodType<MedicationDispense_Performer> =>
		MedicationDispense_PerformerSchemaInternal as z.ZodType<MedicationDispense_Performer>;
const getMedicationDispense_SubstitutionSchema =
	(): z.ZodType<MedicationDispense_Substitution> =>
		MedicationDispense_SubstitutionSchemaInternal as z.ZodType<MedicationDispense_Substitution>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationDispenseSchemaInternal =
	DomainResourceSchemaInternal.extend({
		authorizingPrescription: z.lazy(getReferenceSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		context: z.lazy(getReferenceSchema).optional(),
		daysSupply: z.lazy(getQuantitySchema).optional(),
		destination: z.lazy(getReferenceSchema).optional(),
		detectedIssue: z.lazy(getReferenceSchema).array().optional(),
		dosageInstruction: z.lazy(getDosageSchema).array().optional(),
		eventHistory: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		location: z.lazy(getReferenceSchema).optional(),
		medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		medicationReference: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		performer: z.lazy(getMedicationDispense_PerformerSchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		receiver: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("MedicationDispense"),
		status: z.enum([
			"cancelled",
			"completed",
			"declined",
			"entered-in-error",
			"in-progress",
			"on-hold",
			"preparation",
			"stopped",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		statusReasonCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		statusReasonReference: z.lazy(getReferenceSchema).optional(),
		subject: z.lazy(getReferenceSchema).optional(),
		substitution: z.lazy(getMedicationDispense_SubstitutionSchema).optional(),
		supportingInformation: z.lazy(getReferenceSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		whenHandedOver: fhirDateTime().optional(),
		_whenHandedOver: z.lazy(getElementSchema).optional(),
		whenPrepared: fhirDateTime().optional(),
		_whenPrepared: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
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
			const statusReason_x_Present = [
				"statusReasonCodeableConcept",
				"statusReasonReference",
			].filter((field) => record[field] !== undefined);
			if (statusReason_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of statusReasonCodeableConcept, statusReasonReference may be present for statusReason[x]",
					path: [statusReason_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.authorizingPrescription,
				"authorizingPrescription",
				["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
				["MedicationRequest"],
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
				record.destination,
				"destination",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
				ctx,
			);
			validateReferenceTarget(
				record.detectedIssue,
				"detectedIssue",
				["http://hl7.org/fhir/StructureDefinition/DetectedIssue"],
				["DetectedIssue"],
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
				record.location,
				"location",
				["http://hl7.org/fhir/StructureDefinition/Location"],
				["Location"],
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
				["http://hl7.org/fhir/StructureDefinition/Procedure"],
				["Procedure"],
				ctx,
			);
			validateReferenceTarget(
				record.receiver,
				"receiver",
				[
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
				],
				["Patient", "Practitioner"],
				ctx,
			);
			validateReferenceTarget(
				record.statusReasonReference,
				"statusReasonReference",
				["http://hl7.org/fhir/StructureDefinition/DetectedIssue"],
				["DetectedIssue"],
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

export const MedicationDispenseSchema =
	MedicationDispenseSchemaInternal as z.ZodType<MedicationDispense>;
