// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A description of the solution's support for an event at this end-point. */
export interface CapabilityStatement_Messaging_Event extends BackboneElement {
	/** The impact of the content of the message. */
	category?: "Consequence" | "Currency" | "Notification";
	/** Extensions for category */
	_category?: Element;
	/** A coded identifier of a supported messaging event. */
	code: Coding;
	/** Guidance on how this event is handled, such as internal system trigger points, business rules, etc. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** A resource associated with the event.  This is the resource that defines the event. */
	focus:
		| "Account"
		| "ActivityDefinition"
		| "AdverseEvent"
		| "AllergyIntolerance"
		| "Appointment"
		| "AppointmentResponse"
		| "AuditEvent"
		| "Basic"
		| "Binary"
		| "BodySite"
		| "Bundle"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "ChargeItem"
		| "Claim"
		| "ClaimResponse"
		| "ClinicalImpression"
		| "CodeSystem"
		| "Communication"
		| "CommunicationRequest"
		| "CompartmentDefinition"
		| "Composition"
		| "ConceptMap"
		| "Condition"
		| "Consent"
		| "Contract"
		| "Coverage"
		| "DataElement"
		| "DetectedIssue"
		| "Device"
		| "DeviceComponent"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUseStatement"
		| "DiagnosticReport"
		| "DocumentManifest"
		| "DocumentReference"
		| "DomainResource"
		| "EligibilityRequest"
		| "EligibilityResponse"
		| "Encounter"
		| "Endpoint"
		| "EnrollmentRequest"
		| "EnrollmentResponse"
		| "EpisodeOfCare"
		| "ExpansionProfile"
		| "ExplanationOfBenefit"
		| "FamilyMemberHistory"
		| "Flag"
		| "Goal"
		| "GraphDefinition"
		| "Group"
		| "GuidanceResponse"
		| "HealthcareService"
		| "ImagingManifest"
		| "ImagingStudy"
		| "Immunization"
		| "ImmunizationRecommendation"
		| "ImplementationGuide"
		| "Library"
		| "Linkage"
		| "List"
		| "Location"
		| "Measure"
		| "MeasureReport"
		| "Media"
		| "Medication"
		| "MedicationAdministration"
		| "MedicationDispense"
		| "MedicationRequest"
		| "MedicationStatement"
		| "MessageDefinition"
		| "MessageHeader"
		| "NamingSystem"
		| "NutritionOrder"
		| "Observation"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "Parameters"
		| "Patient"
		| "PaymentNotice"
		| "PaymentReconciliation"
		| "Person"
		| "PlanDefinition"
		| "Practitioner"
		| "PractitionerRole"
		| "Procedure"
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "Provenance"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "ReferralRequest"
		| "RelatedPerson"
		| "RequestGroup"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "Schedule"
		| "SearchParameter"
		| "Sequence"
		| "ServiceDefinition"
		| "Slot"
		| "Specimen"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "Substance"
		| "SupplyDelivery"
		| "SupplyRequest"
		| "Task"
		| "TestReport"
		| "TestScript"
		| "ValueSet"
		| "VisionPrescription";
	/** Extensions for focus */
	_focus?: Element;
	/** The mode of this event declaration - whether an application is a sender or receiver. */
	mode: "receiver" | "sender";
	/** Extensions for mode */
	_mode?: Element;
	/** Information about the request for this event. */
	request: Reference;
	/** Information about the response for this event. */
	response: Reference;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CapabilityStatement_Messaging_EventSchemaInternal =
	BackboneElementSchemaInternal.extend({
		category: z.enum(["Consequence", "Currency", "Notification"]).optional(),
		_category: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodingSchema),
		documentation: fhirString().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		focus: z.enum([
			"Account",
			"ActivityDefinition",
			"AdverseEvent",
			"AllergyIntolerance",
			"Appointment",
			"AppointmentResponse",
			"AuditEvent",
			"Basic",
			"Binary",
			"BodySite",
			"Bundle",
			"CapabilityStatement",
			"CarePlan",
			"CareTeam",
			"ChargeItem",
			"Claim",
			"ClaimResponse",
			"ClinicalImpression",
			"CodeSystem",
			"Communication",
			"CommunicationRequest",
			"CompartmentDefinition",
			"Composition",
			"ConceptMap",
			"Condition",
			"Consent",
			"Contract",
			"Coverage",
			"DataElement",
			"DetectedIssue",
			"Device",
			"DeviceComponent",
			"DeviceMetric",
			"DeviceRequest",
			"DeviceUseStatement",
			"DiagnosticReport",
			"DocumentManifest",
			"DocumentReference",
			"DomainResource",
			"EligibilityRequest",
			"EligibilityResponse",
			"Encounter",
			"Endpoint",
			"EnrollmentRequest",
			"EnrollmentResponse",
			"EpisodeOfCare",
			"ExpansionProfile",
			"ExplanationOfBenefit",
			"FamilyMemberHistory",
			"Flag",
			"Goal",
			"GraphDefinition",
			"Group",
			"GuidanceResponse",
			"HealthcareService",
			"ImagingManifest",
			"ImagingStudy",
			"Immunization",
			"ImmunizationRecommendation",
			"ImplementationGuide",
			"Library",
			"Linkage",
			"List",
			"Location",
			"Measure",
			"MeasureReport",
			"Media",
			"Medication",
			"MedicationAdministration",
			"MedicationDispense",
			"MedicationRequest",
			"MedicationStatement",
			"MessageDefinition",
			"MessageHeader",
			"NamingSystem",
			"NutritionOrder",
			"Observation",
			"OperationDefinition",
			"OperationOutcome",
			"Organization",
			"Parameters",
			"Patient",
			"PaymentNotice",
			"PaymentReconciliation",
			"Person",
			"PlanDefinition",
			"Practitioner",
			"PractitionerRole",
			"Procedure",
			"ProcedureRequest",
			"ProcessRequest",
			"ProcessResponse",
			"Provenance",
			"Questionnaire",
			"QuestionnaireResponse",
			"ReferralRequest",
			"RelatedPerson",
			"RequestGroup",
			"ResearchStudy",
			"ResearchSubject",
			"Resource",
			"RiskAssessment",
			"Schedule",
			"SearchParameter",
			"Sequence",
			"ServiceDefinition",
			"Slot",
			"Specimen",
			"StructureDefinition",
			"StructureMap",
			"Subscription",
			"Substance",
			"SupplyDelivery",
			"SupplyRequest",
			"Task",
			"TestReport",
			"TestScript",
			"ValueSet",
			"VisionPrescription",
		]),
		_focus: z.lazy(getElementSchema).optional(),
		mode: z.enum(["receiver", "sender"]),
		_mode: z.lazy(getElementSchema).optional(),
		request: z.lazy(getReferenceSchema),
		response: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.request,
				"request",
				["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
				["StructureDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.response,
				"response",
				["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
				["StructureDefinition"],
				ctx,
			);
		});

export const CapabilityStatement_Messaging_EventSchema =
	CapabilityStatement_Messaging_EventSchemaInternal as z.ZodType<CapabilityStatement_Messaging_Event>;
