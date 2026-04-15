// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge. */
export interface MessageDefinition_Focus extends BackboneElement {
	/** The kind of resource that must be the focus for this message. */
	code:
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
	/** Extensions for code */
	_code?: Element;
	/** Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition. */
	max?: string;
	/** Extensions for max */
	_max?: Element;
	/** Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition. */
	min?: number;
	/** Extensions for min */
	_min?: Element;
	/** A profile that reflects constraints for the focal resource (and potentially for related resources). */
	profile?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MessageDefinition_FocusSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
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
		_code: z.lazy(getElementSchema).optional(),
		max: fhirString().optional(),
		_max: z.lazy(getElementSchema).optional(),
		min: z.number().int().nonnegative().optional(),
		_min: z.lazy(getElementSchema).optional(),
		profile: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.profile,
				"profile",
				["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
				["StructureDefinition"],
				ctx,
			);
		});

export const MessageDefinition_FocusSchema =
	MessageDefinition_FocusSchemaInternal as z.ZodType<MessageDefinition_Focus>;
