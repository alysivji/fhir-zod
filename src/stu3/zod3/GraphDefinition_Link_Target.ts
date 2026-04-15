// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirUri } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { GraphDefinition_Link_Target_Compartment } from "./GraphDefinition_Link_Target_Compartment";
import { GraphDefinition_Link_Target_CompartmentSchemaInternal } from "./GraphDefinition_Link_Target_Compartment";

/** Potential target for the link. */
export interface GraphDefinition_Link_Target extends BackboneElement {
	/** Compartment Consistency Rules. */
	compartment?: Array<GraphDefinition_Link_Target_Compartment>;
	/** Additional links from target resource. */
	link?: Array<unknown>;
	/** Profile for the target resource. */
	profile?: string;
	/** Extensions for profile */
	_profile?: Element;
	/** Type of resource this link refers to. */
	type:
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
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getGraphDefinition_Link_Target_CompartmentSchema =
	(): z.ZodType<GraphDefinition_Link_Target_Compartment> =>
		GraphDefinition_Link_Target_CompartmentSchemaInternal as z.ZodType<GraphDefinition_Link_Target_Compartment>;

/** @internal */
export const GraphDefinition_Link_TargetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		compartment: z
			.lazy(getGraphDefinition_Link_Target_CompartmentSchema)
			.array()
			.optional(),
		link: z.unknown().array().optional(),
		profile: fhirUri().optional(),
		_profile: z.lazy(getElementSchema).optional(),
		type: z.enum([
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
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const GraphDefinition_Link_TargetSchema =
	GraphDefinition_Link_TargetSchemaInternal as z.ZodType<GraphDefinition_Link_Target>;
