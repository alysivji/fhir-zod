// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../shared/fhir-primitives";
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
import type { MedicationRequest_Substitution } from "./MedicationRequest_Substitution";
import { MedicationRequest_SubstitutionSchemaInternal } from "./MedicationRequest_Substitution";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns. */
export interface MedicationRequest extends DomainResource {
	/** The date (and perhaps time) when the prescription was initially written or authored on. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** A plan or request that is fulfilled in whole or in part by this medication request. */
	basedOn?: Array<Reference>;
	/** Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)). */
	category?: Array<CodeableConcept>;
	/** The description of the overall patte3rn of the administration of the medication to the patient. */
	courseOfTherapyType?: CodeableConcept;
	/** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc. */
	detectedIssue?: Array<Reference>;
	/** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department. */
	dispenseRequest?: MedicationRequest_DispenseRequest;
	/** If true indicates that the provider is asking for the medication request not to occur. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** Indicates how the medication is to be used by the patient. */
	dosageInstruction?: Array<Dosage>;
	/** The Encounter during which this [x] was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource. */
	eventHistory?: Array<Reference>;
	/** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription. */
	groupIdentifier?: Identifier;
	/** Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest. */
	instantiatesCanonical?: Array<string>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element>;
	/** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest. */
	instantiatesUri?: Array<string>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element>;
	/** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service. */
	insurance?: Array<Reference>;
	/** Whether the request is a proposal, plan, or an original order. */
	intent:
		| "filler-order"
		| "instance-order"
		| "option"
		| "order"
		| "original-order"
		| "plan"
		| "proposal"
		| "reflex-order";
	/** Extensions for intent */
	_intent?: Element;
	/** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications. */
	medicationCodeableConcept?: CodeableConcept;
	/** Identifies the medication being requested. This is a link to a resource that represents the medication which may be the details of the medication or simply an attribute carrying a code that identifies the medication from a known list of medications. */
	medicationReference?: Reference;
	/** Extra information about the prescription that could not be conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** The specified desired performer of the medication treatment (e.g. the performer of the medication administration). */
	performer?: Reference;
	/** Indicates the type of performer of the administration of the medication. */
	performerType?: CodeableConcept;
	/** Indicates how quickly the Medication Request should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** A link to a resource representing an earlier order related order or prescription. */
	priorPrescription?: Reference;
	/** The reason or the indication for ordering or not ordering the medication. */
	reasonCode?: Array<CodeableConcept>;
	/** Condition or observation that supports why the medication was ordered. */
	reasonReference?: Array<Reference>;
	/** The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order. */
	recorder?: Reference;
	/** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report. */
	reportedBoolean?: boolean;
	/** Extensions for reportedBoolean */
	_reportedBoolean?: Element;
	/** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report. */
	reportedReference?: Reference;
	/** The individual, organization, or device that initiated the request and has responsibility for its activation. */
	requester?: Reference;
	/** This is a MedicationRequest resource. */
	resourceType: "MedicationRequest";
	/** A code specifying the current state of the order.  Generally, this will be active or completed state. */
	status:
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
	/** Captures the reason for the current state of the MedicationRequest. */
	statusReason?: CodeableConcept;
	/** A link to a resource representing the person or set of individuals to whom the medication will be given. */
	subject: Reference;
	/** Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done. */
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
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		courseOfTherapyType: z.lazy(getCodeableConceptSchema).optional(),
		detectedIssue: z.lazy(getReferenceSchema).array().optional(),
		dispenseRequest: z
			.lazy(getMedicationRequest_DispenseRequestSchema)
			.optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		dosageInstruction: z.lazy(getDosageSchema).array().optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		eventHistory: z.lazy(getReferenceSchema).array().optional(),
		groupIdentifier: z.lazy(getIdentifierSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		instantiatesCanonical: fhirCanonical().array().optional(),
		_instantiatesCanonical: z.lazy(getElementSchema).array().optional(),
		instantiatesUri: fhirUri().array().optional(),
		_instantiatesUri: z.lazy(getElementSchema).array().optional(),
		insurance: z.lazy(getReferenceSchema).array().optional(),
		intent: z.enum([
			"filler-order",
			"instance-order",
			"option",
			"order",
			"original-order",
			"plan",
			"proposal",
			"reflex-order",
		]),
		_intent: z.lazy(getElementSchema).optional(),
		medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		medicationReference: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		performerType: z.lazy(getCodeableConceptSchema).optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		priorPrescription: z.lazy(getReferenceSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		recorder: z.lazy(getReferenceSchema).optional(),
		reportedBoolean: z.boolean().optional(),
		_reportedBoolean: z.lazy(getElementSchema).optional(),
		reportedReference: z.lazy(getReferenceSchema).optional(),
		requester: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("MedicationRequest"),
		status: z.enum([
			"active",
			"cancelled",
			"completed",
			"draft",
			"entered-in-error",
			"on-hold",
			"stopped",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		statusReason: z.lazy(getCodeableConceptSchema).optional(),
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
			const reported_x_Present = [
				"reportedBoolean",
				"reportedReference",
			].filter((field) => record[field] !== undefined);
			if (reported_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of reportedBoolean, reportedReference may be present for reported[x]",
					path: [reported_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				[
					"http://hl7.org/fhir/StructureDefinition/CarePlan",
					"http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
					"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
					"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
				],
				[
					"CarePlan",
					"ImmunizationRecommendation",
					"MedicationRequest",
					"ServiceRequest",
				],
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
				record.encounter,
				"encounter",
				["http://hl7.org/fhir/StructureDefinition/Encounter"],
				["Encounter"],
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
				record.insurance,
				"insurance",
				[
					"http://hl7.org/fhir/StructureDefinition/ClaimResponse",
					"http://hl7.org/fhir/StructureDefinition/Coverage",
				],
				["ClaimResponse", "Coverage"],
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
				record.performer,
				"performer",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"Device",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
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
				[
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				],
				["Practitioner", "PractitionerRole"],
				ctx,
			);
			validateReferenceTarget(
				record.reportedReference,
				"reportedReference",
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
				record.requester,
				"requester",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
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
