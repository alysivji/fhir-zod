// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T01:26:20.392Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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
import type { MedicationRequest_DispenseRequest } from "./MedicationRequest_DispenseRequest";
import { MedicationRequest_DispenseRequestSchemaInternal } from "./MedicationRequest_DispenseRequest";
import type { MedicationRequest_Requester } from "./MedicationRequest_Requester";
import { MedicationRequest_RequesterSchemaInternal } from "./MedicationRequest_Requester";
import type { MedicationRequest_Substitution } from "./MedicationRequest_Substitution";
import { MedicationRequest_SubstitutionSchemaInternal } from "./MedicationRequest_Substitution";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for MedicationRequest Resource */
export interface MedicationRequest extends DomainResource {
	/** The date (and perhaps time) when the prescription was initially written or authored on. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** A plan or request that is fulfilled in whole or in part by this medication request. */
	basedOn?: Array<Reference>;
	/** Indicates the type of medication order and where the medication is expected to be consumed or administered. */
	category?: CodeableConcept;
	/** A link to an encounter, or episode of care, that identifies the particular occurrence or set occurrences of contact between patient and health care provider. */
	context?: Reference;
	/** Protocol or definition followed by this request. */
	definition?: Array<Reference>;
	/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc. */
	detectedIssue?: Array<Reference>;
	/** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department. */
	dispenseRequest?: MedicationRequest_DispenseRequest;
	/** Indicates how the medication is to be used by the patient. */
	dosageInstruction?: Array<Dosage>;
	/** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource. */
	eventHistory?: Array<Reference>;
	/** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription. */
	groupIdentifier?: Identifier;
	/** This records identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. For example a re-imbursement system might issue its own id for each prescription that is created.  This is particularly important where FHIR only provides part of an entire workflow process where records must be tracked through an entire system. */
	identifier?: Array<Identifier>;
	/** Whether the request is a proposal, plan, or an original order. */
	intent: "instance-order" | "order" | "plan" | "proposal";
	/** Extensions for intent */
	_intent?: Element;
	/** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications. */
	medicationCodeableConcept?: CodeableConcept;
	/** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications. */
	medicationReference?: Reference;
	/** Extra information about the prescription that could not be conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** Indicates how quickly the Medication Request should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** A link to a resource representing an earlier order related order or prescription. */
	priorPrescription?: Reference;
	/** The reason or the indication for ordering the medication. */
	reasonCode?: Array<CodeableConcept>;
	/** Condition or observation that supports why the medication was ordered. */
	reasonReference?: Array<Reference>;
	/** The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order. */
	recorder?: Reference;
	/** The individual, organization or device that initiated the request and has responsibility for its activation. */
	requester?: MedicationRequest_Requester;
	/** This is a MedicationRequest resource. */
	resourceType: "MedicationRequest";
	/** A code specifying the current state of the order.  Generally this will be active or completed state. */
	status?:
		| "active"
		| "cancelled"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "on-hold"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A link to a resource representing the person or set of individuals to whom the medication will be given. */
	subject: Reference;
	/** Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done. */
	substitution?: MedicationRequest_Substitution;
	/** Include additional information (for example, patient height and weight) that supports the ordering of the medication. */
	supportingInformation?: Array<Reference>;
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
const getMedicationRequest_DispenseRequestSchema =
	(): z.ZodType<MedicationRequest_DispenseRequest> =>
		MedicationRequest_DispenseRequestSchemaInternal as z.ZodType<MedicationRequest_DispenseRequest>;
const getMedicationRequest_RequesterSchema =
	(): z.ZodType<MedicationRequest_Requester> =>
		MedicationRequest_RequesterSchemaInternal as z.ZodType<MedicationRequest_Requester>;
const getMedicationRequest_SubstitutionSchema =
	(): z.ZodType<MedicationRequest_Substitution> =>
		MedicationRequest_SubstitutionSchemaInternal as z.ZodType<MedicationRequest_Substitution>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationRequestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		authoredOn: fhirDateTime().optional(),
		_authoredOn: z.lazy(getElementSchema).optional(),
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		context: z.lazy(getReferenceSchema).optional(),
		definition: z.lazy(getReferenceSchema).array().optional(),
		detectedIssue: z.lazy(getReferenceSchema).array().optional(),
		dispenseRequest: z
			.lazy(getMedicationRequest_DispenseRequestSchema)
			.optional(),
		dosageInstruction: z.lazy(getDosageSchema).array().optional(),
		eventHistory: z.lazy(getReferenceSchema).array().optional(),
		groupIdentifier: z.lazy(getIdentifierSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		intent: z.enum(["instance-order", "order", "plan", "proposal"]),
		_intent: z.lazy(getElementSchema).optional(),
		medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		medicationReference: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		priorPrescription: z.lazy(getReferenceSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		recorder: z.lazy(getReferenceSchema).optional(),
		requester: z.lazy(getMedicationRequest_RequesterSchema).optional(),
		resourceType: z.literal("MedicationRequest"),
		status: z
			.enum([
				"active",
				"cancelled",
				"completed",
				"draft",
				"entered-in-error",
				"on-hold",
				"stopped",
				"unknown",
			])
			.optional(),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema),
		substitution: z.lazy(getMedicationRequest_SubstitutionSchema).optional(),
		supportingInformation: z.lazy(getReferenceSchema).array().optional(),
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
				record.medicationReference,
				"medicationReference",
				["http://hl7.org/fhir/StructureDefinition/Medication"],
				["Medication"],
				ctx,
			);
			validateReferenceTarget(
				record.priorPrescription,
				"priorPrescription",
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
				record.recorder,
				"recorder",
				["http://hl7.org/fhir/StructureDefinition/Practitioner"],
				["Practitioner"],
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

export const MedicationRequestSchema =
	MedicationRequestSchemaInternal as z.ZodType<MedicationRequest>;
