// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
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
import type { MedicationRequest_DispenseRequest } from "./MedicationRequest_DispenseRequest";
import { MedicationRequest_DispenseRequestSchemaInternal } from "./MedicationRequest_DispenseRequest";
import type { MedicationRequest_Substitution } from "./MedicationRequest_Substitution";
import { MedicationRequest_SubstitutionSchemaInternal } from "./MedicationRequest_Substitution";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
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
	/** An arbitrary categorization or grouping of the medication request.  It could be used for indicating where meds are intended to be administered, eg. in an inpatient setting or in a patient's home, or a legal category of the medication. */
	category?: Array<CodeableConcept>;
	/** The description of the overall pattern of the administration of the medication to the patient. */
	courseOfTherapyType?: CodeableConcept;
	/** The intended type of device that is to be used for the administration of the medication (for example, PCA Pump). */
	device?: Array<CodeableReference>;
	/** Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department. */
	dispenseRequest?: MedicationRequest_DispenseRequest;
	/** If true, indicates that the provider is asking for the patient to either stop taking or to not start taking the specified medication. For example, the patient is taking an existing medication and the provider is changing their medication. They want to create two seperate requests: one to stop using the current medication and another to start the new medication. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** Specific instructions for how the medication is to be used by the patient. */
	dosageInstruction?: Array<Dosage>;
	/** The period over which the medication is to be taken.  Where there are multiple dosageInstruction lines (for example, tapering doses), this is the earliest date and the latest end date of the dosageInstructions. */
	effectiveDosePeriod?: Period;
	/** The Encounter during which this [x] was created or to which the creation of this record is tightly associated. */
	encounter?: Reference;
	/** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource. */
	eventHistory?: Array<Reference>;
	/** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time. */
	groupIdentifier?: Identifier;
	/** Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The person or organization who provided the information about this request, if the source is someone other than the requestor.  This is often used when the MedicationRequest is reported by another person. */
	informationSource?: Array<Reference>;
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
	medication: CodeableReference;
	/** Extra information about the prescription that could not be conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** The specified desired performer of the medication treatment (e.g. the performer of the medication administration).  For devices, this is the device that is intended to perform the administration of the medication.  An IV Pump would be an example of a device that is performing the administration.  Both the IV Pump and the practitioner that set the rate or bolus on the pump can be listed as performers. */
	performer?: Array<Reference>;
	/** Indicates the type of performer of the administration of the medication. */
	performerType?: CodeableConcept;
	/** Indicates how quickly the Medication Request should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** Reference to an order/prescription that is being replaced by this MedicationRequest. */
	priorPrescription?: Reference;
	/** The reason or the indication for ordering or not ordering the medication. */
	reason?: Array<CodeableReference>;
	/** The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order. */
	recorder?: Reference;
	/** The full representation of the dose of the medication included in all dosage instructions.  To be used when multiple dosage instructions are included to represent complex dosing such as increasing or tapering doses. */
	renderedDosageInstruction?: string;
	/** Extensions for renderedDosageInstruction */
	_renderedDosageInstruction?: Element;
	/** Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report. */
	reported?: boolean;
	/** Extensions for reported */
	_reported?: Element;
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
		| "ended"
		| "entered-in-error"
		| "on-hold"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The date (and perhaps time) when the status was changed. */
	statusChanged?: string;
	/** Extensions for statusChanged */
	_statusChanged?: Element;
	/** Captures the reason for the current state of the MedicationRequest. */
	statusReason?: CodeableConcept;
	/** The individual or group for whom the medication has been requested. */
	subject: Reference;
	/** Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done. */
	substitution?: MedicationRequest_Substitution;
	/** Information to support fulfilling (i.e. dispensing or administering) of the medication, for example, patient height and weight, a MedicationStatement for the patient). */
	supportingInformation?: Array<Reference>;
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
const getMedicationRequest_DispenseRequestSchema =
	(): z.ZodType<MedicationRequest_DispenseRequest> =>
		MedicationRequest_DispenseRequestSchemaInternal as z.ZodType<MedicationRequest_DispenseRequest>;
const getMedicationRequest_SubstitutionSchema =
	(): z.ZodType<MedicationRequest_Substitution> =>
		MedicationRequest_SubstitutionSchemaInternal as z.ZodType<MedicationRequest_Substitution>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
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
		device: z.lazy(getCodeableReferenceSchema).array().optional(),
		dispenseRequest: z
			.lazy(getMedicationRequest_DispenseRequestSchema)
			.optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		dosageInstruction: z.lazy(getDosageSchema).array().optional(),
		effectiveDosePeriod: z.lazy(getPeriodSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		eventHistory: z.lazy(getReferenceSchema).array().optional(),
		groupIdentifier: z.lazy(getIdentifierSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		informationSource: z.lazy(getReferenceSchema).array().optional(),
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
		medication: z.lazy(getCodeableReferenceSchema),
		note: z.lazy(getAnnotationSchema).array().optional(),
		performer: z.lazy(getReferenceSchema).array().optional(),
		performerType: z.lazy(getCodeableConceptSchema).optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		priorPrescription: z.lazy(getReferenceSchema).optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		recorder: z.lazy(getReferenceSchema).optional(),
		renderedDosageInstruction: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_renderedDosageInstruction: z.lazy(getElementSchema).optional(),
		reported: z.boolean().optional(),
		_reported: z.lazy(getElementSchema).optional(),
		requester: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("MedicationRequest"),
		status: z.enum([
			"active",
			"cancelled",
			"completed",
			"draft",
			"ended",
			"entered-in-error",
			"on-hold",
			"stopped",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		statusChanged: fhirDateTime().optional(),
		_statusChanged: z.lazy(getElementSchema).optional(),
		statusReason: z.lazy(getCodeableConceptSchema).optional(),
		subject: z.lazy(getReferenceSchema),
		substitution: z.lazy(getMedicationRequest_SubstitutionSchema).optional(),
		supportingInformation: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
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
				record.performer,
				"performer",
				[
					"http://hl7.org/fhir/StructureDefinition/CareTeam",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"CareTeam",
					"DeviceDefinition",
					"HealthcareService",
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
