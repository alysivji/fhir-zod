// Profile: http://hl7.org/fhir/StructureDefinition/ParameterDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for ParameterDefinition Type */
export interface ParameterDefinition extends Element {
	/** A brief discussion of what the parameter is for and how it is used by the module. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** The maximum number of times this element is permitted to appear in the request or response. */
	max?: string;
	/** Extensions for max */
	_max?: Element;
	/** The minimum number of times this parameter SHALL appear in the request or response. */
	min?: number;
	/** Extensions for min */
	_min?: Element;
	/** The name of the parameter used to allow access to the value of the parameter in evaluation contexts. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** If specified, this indicates a profile that the input data must conform to, or that the output data will conform to. */
	profile?: Reference;
	/** The type of the parameter. */
	type:
		| "Account"
		| "ActivityDefinition"
		| "Address"
		| "AdverseEvent"
		| "Age"
		| "AllergyIntolerance"
		| "Annotation"
		| "Any"
		| "Appointment"
		| "AppointmentResponse"
		| "Attachment"
		| "AuditEvent"
		| "BackboneElement"
		| "base64Binary"
		| "Basic"
		| "Binary"
		| "BodySite"
		| "boolean"
		| "Bundle"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "ChargeItem"
		| "Claim"
		| "ClaimResponse"
		| "ClinicalImpression"
		| "code"
		| "CodeableConcept"
		| "CodeSystem"
		| "Coding"
		| "Communication"
		| "CommunicationRequest"
		| "CompartmentDefinition"
		| "Composition"
		| "ConceptMap"
		| "Condition"
		| "Consent"
		| "ContactDetail"
		| "ContactPoint"
		| "Contract"
		| "Contributor"
		| "Count"
		| "Coverage"
		| "DataElement"
		| "DataRequirement"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceComponent"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUseStatement"
		| "DiagnosticReport"
		| "Distance"
		| "DocumentManifest"
		| "DocumentReference"
		| "DomainResource"
		| "Dosage"
		| "Duration"
		| "Element"
		| "ElementDefinition"
		| "EligibilityRequest"
		| "EligibilityResponse"
		| "Encounter"
		| "Endpoint"
		| "EnrollmentRequest"
		| "EnrollmentResponse"
		| "EpisodeOfCare"
		| "ExpansionProfile"
		| "ExplanationOfBenefit"
		| "Extension"
		| "FamilyMemberHistory"
		| "Flag"
		| "Goal"
		| "GraphDefinition"
		| "Group"
		| "GuidanceResponse"
		| "HealthcareService"
		| "HumanName"
		| "id"
		| "Identifier"
		| "ImagingManifest"
		| "ImagingStudy"
		| "Immunization"
		| "ImmunizationRecommendation"
		| "ImplementationGuide"
		| "instant"
		| "integer"
		| "Library"
		| "Linkage"
		| "List"
		| "Location"
		| "markdown"
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
		| "Meta"
		| "Money"
		| "NamingSystem"
		| "Narrative"
		| "NutritionOrder"
		| "Observation"
		| "oid"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "ParameterDefinition"
		| "Parameters"
		| "Patient"
		| "PaymentNotice"
		| "PaymentReconciliation"
		| "Period"
		| "Person"
		| "PlanDefinition"
		| "positiveInt"
		| "Practitioner"
		| "PractitionerRole"
		| "Procedure"
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "Reference"
		| "ReferralRequest"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestGroup"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "SampledData"
		| "Schedule"
		| "SearchParameter"
		| "Sequence"
		| "ServiceDefinition"
		| "Signature"
		| "SimpleQuantity"
		| "Slot"
		| "Specimen"
		| "string"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "Substance"
		| "SupplyDelivery"
		| "SupplyRequest"
		| "Task"
		| "TestReport"
		| "TestScript"
		| "time"
		| "Timing"
		| "TriggerDefinition"
		| "Type"
		| "unsignedInt"
		| "uri"
		| "UsageContext"
		| "uuid"
		| "ValueSet"
		| "VisionPrescription"
		| "xhtml";
	/** Extensions for type */
	_type?: Element;
	/** Whether the parameter is input or output for the module. */
	use: "in" | "out";
	/** Extensions for use */
	_use?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ParameterDefinitionSchemaInternal = ElementSchemaInternal.extend({
	documentation: fhirString().optional(),
	_documentation: z.lazy(getElementSchema).optional(),
	max: fhirString().optional(),
	_max: z.lazy(getElementSchema).optional(),
	min: z.number().int().optional(),
	_min: z.lazy(getElementSchema).optional(),
	name: fhirCode().optional(),
	_name: z.lazy(getElementSchema).optional(),
	profile: z.lazy(getReferenceSchema).optional(),
	type: z.enum([
		"Account",
		"ActivityDefinition",
		"Address",
		"AdverseEvent",
		"Age",
		"AllergyIntolerance",
		"Annotation",
		"Any",
		"Appointment",
		"AppointmentResponse",
		"Attachment",
		"AuditEvent",
		"BackboneElement",
		"base64Binary",
		"Basic",
		"Binary",
		"BodySite",
		"boolean",
		"Bundle",
		"CapabilityStatement",
		"CarePlan",
		"CareTeam",
		"ChargeItem",
		"Claim",
		"ClaimResponse",
		"ClinicalImpression",
		"code",
		"CodeableConcept",
		"CodeSystem",
		"Coding",
		"Communication",
		"CommunicationRequest",
		"CompartmentDefinition",
		"Composition",
		"ConceptMap",
		"Condition",
		"Consent",
		"ContactDetail",
		"ContactPoint",
		"Contract",
		"Contributor",
		"Count",
		"Coverage",
		"DataElement",
		"DataRequirement",
		"date",
		"dateTime",
		"decimal",
		"DetectedIssue",
		"Device",
		"DeviceComponent",
		"DeviceMetric",
		"DeviceRequest",
		"DeviceUseStatement",
		"DiagnosticReport",
		"Distance",
		"DocumentManifest",
		"DocumentReference",
		"DomainResource",
		"Dosage",
		"Duration",
		"Element",
		"ElementDefinition",
		"EligibilityRequest",
		"EligibilityResponse",
		"Encounter",
		"Endpoint",
		"EnrollmentRequest",
		"EnrollmentResponse",
		"EpisodeOfCare",
		"ExpansionProfile",
		"ExplanationOfBenefit",
		"Extension",
		"FamilyMemberHistory",
		"Flag",
		"Goal",
		"GraphDefinition",
		"Group",
		"GuidanceResponse",
		"HealthcareService",
		"HumanName",
		"id",
		"Identifier",
		"ImagingManifest",
		"ImagingStudy",
		"Immunization",
		"ImmunizationRecommendation",
		"ImplementationGuide",
		"instant",
		"integer",
		"Library",
		"Linkage",
		"List",
		"Location",
		"markdown",
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
		"Meta",
		"Money",
		"NamingSystem",
		"Narrative",
		"NutritionOrder",
		"Observation",
		"oid",
		"OperationDefinition",
		"OperationOutcome",
		"Organization",
		"ParameterDefinition",
		"Parameters",
		"Patient",
		"PaymentNotice",
		"PaymentReconciliation",
		"Period",
		"Person",
		"PlanDefinition",
		"positiveInt",
		"Practitioner",
		"PractitionerRole",
		"Procedure",
		"ProcedureRequest",
		"ProcessRequest",
		"ProcessResponse",
		"Provenance",
		"Quantity",
		"Questionnaire",
		"QuestionnaireResponse",
		"Range",
		"Ratio",
		"Reference",
		"ReferralRequest",
		"RelatedArtifact",
		"RelatedPerson",
		"RequestGroup",
		"ResearchStudy",
		"ResearchSubject",
		"Resource",
		"RiskAssessment",
		"SampledData",
		"Schedule",
		"SearchParameter",
		"Sequence",
		"ServiceDefinition",
		"Signature",
		"SimpleQuantity",
		"Slot",
		"Specimen",
		"string",
		"StructureDefinition",
		"StructureMap",
		"Subscription",
		"Substance",
		"SupplyDelivery",
		"SupplyRequest",
		"Task",
		"TestReport",
		"TestScript",
		"time",
		"Timing",
		"TriggerDefinition",
		"Type",
		"unsignedInt",
		"uri",
		"UsageContext",
		"uuid",
		"ValueSet",
		"VisionPrescription",
		"xhtml",
	]),
	_type: z.lazy(getElementSchema).optional(),
	use: z.enum(["in", "out"]),
	_use: z.lazy(getElementSchema).optional(),
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

export const ParameterDefinitionSchema =
	ParameterDefinitionSchemaInternal as z.ZodType<ParameterDefinition>;
