// Profile: http://hl7.org/fhir/StructureDefinition/ParameterDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-05T15:32:44.350Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirCode,
	fhirId,
	fhirString,
} from "../shared/fhir-primitives";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** ParameterDefinition Type: The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse. */
export interface ParameterDefinition extends DataType {
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
	profile?: string;
	/** Extensions for profile */
	_profile?: Element;
	/** The type of the parameter. */
	type:
		| "Account"
		| "ActivityDefinition"
		| "ActorDefinition"
		| "Address"
		| "AdministrableProductDefinition"
		| "AdverseEvent"
		| "Age"
		| "AllergyIntolerance"
		| "Annotation"
		| "Appointment"
		| "AppointmentResponse"
		| "ArtifactAssessment"
		| "Attachment"
		| "AuditEvent"
		| "Availability"
		| "BackboneElement"
		| "BackboneType"
		| "Base"
		| "base64Binary"
		| "Basic"
		| "Binary"
		| "BiologicallyDerivedProduct"
		| "BiologicallyDerivedProductDispense"
		| "BodyStructure"
		| "boolean"
		| "Bundle"
		| "canonical"
		| "CanonicalResource"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "ChargeItem"
		| "ChargeItemDefinition"
		| "Citation"
		| "Claim"
		| "ClaimResponse"
		| "ClinicalImpression"
		| "ClinicalUseDefinition"
		| "code"
		| "CodeableConcept"
		| "CodeableReference"
		| "CodeSystem"
		| "Coding"
		| "Communication"
		| "CommunicationRequest"
		| "CompartmentDefinition"
		| "Composition"
		| "ConceptMap"
		| "Condition"
		| "ConditionDefinition"
		| "Consent"
		| "ContactDetail"
		| "ContactPoint"
		| "Contract"
		| "Contributor"
		| "Count"
		| "Coverage"
		| "CoverageEligibilityRequest"
		| "CoverageEligibilityResponse"
		| "DataRequirement"
		| "DataType"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceAssociation"
		| "DeviceDefinition"
		| "DeviceDispense"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUsage"
		| "DiagnosticReport"
		| "Distance"
		| "DocumentReference"
		| "DomainResource"
		| "Dosage"
		| "Duration"
		| "Element"
		| "ElementDefinition"
		| "Encounter"
		| "EncounterHistory"
		| "Endpoint"
		| "EnrollmentRequest"
		| "EnrollmentResponse"
		| "EpisodeOfCare"
		| "EventDefinition"
		| "Evidence"
		| "EvidenceReport"
		| "EvidenceVariable"
		| "ExampleScenario"
		| "ExplanationOfBenefit"
		| "Expression"
		| "ExtendedContactDetail"
		| "Extension"
		| "FamilyMemberHistory"
		| "Flag"
		| "FormularyItem"
		| "GenomicStudy"
		| "Goal"
		| "GraphDefinition"
		| "Group"
		| "GuidanceResponse"
		| "HealthcareService"
		| "HumanName"
		| "id"
		| "Identifier"
		| "ImagingSelection"
		| "ImagingStudy"
		| "Immunization"
		| "ImmunizationEvaluation"
		| "ImmunizationRecommendation"
		| "ImplementationGuide"
		| "Ingredient"
		| "instant"
		| "InsurancePlan"
		| "integer"
		| "integer64"
		| "InventoryItem"
		| "InventoryReport"
		| "Invoice"
		| "Library"
		| "Linkage"
		| "List"
		| "Location"
		| "ManufacturedItemDefinition"
		| "markdown"
		| "MarketingStatus"
		| "Measure"
		| "MeasureReport"
		| "Medication"
		| "MedicationAdministration"
		| "MedicationDispense"
		| "MedicationKnowledge"
		| "MedicationRequest"
		| "MedicationStatement"
		| "MedicinalProductDefinition"
		| "MessageDefinition"
		| "MessageHeader"
		| "Meta"
		| "MetadataResource"
		| "MolecularSequence"
		| "MonetaryComponent"
		| "Money"
		| "NamingSystem"
		| "Narrative"
		| "NutritionIntake"
		| "NutritionOrder"
		| "NutritionProduct"
		| "Observation"
		| "ObservationDefinition"
		| "oid"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "OrganizationAffiliation"
		| "PackagedProductDefinition"
		| "ParameterDefinition"
		| "Parameters"
		| "Patient"
		| "PaymentNotice"
		| "PaymentReconciliation"
		| "Period"
		| "Permission"
		| "Person"
		| "PlanDefinition"
		| "positiveInt"
		| "Practitioner"
		| "PractitionerRole"
		| "PrimitiveType"
		| "Procedure"
		| "ProductShelfLife"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "RatioRange"
		| "Reference"
		| "RegulatedAuthorization"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestOrchestration"
		| "Requirements"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "SampledData"
		| "Schedule"
		| "SearchParameter"
		| "ServiceRequest"
		| "Signature"
		| "Slot"
		| "Specimen"
		| "SpecimenDefinition"
		| "string"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "SubscriptionStatus"
		| "SubscriptionTopic"
		| "Substance"
		| "SubstanceDefinition"
		| "SubstanceNucleicAcid"
		| "SubstancePolymer"
		| "SubstanceProtein"
		| "SubstanceReferenceInformation"
		| "SubstanceSourceMaterial"
		| "SupplyDelivery"
		| "SupplyRequest"
		| "Task"
		| "TerminologyCapabilities"
		| "TestPlan"
		| "TestReport"
		| "TestScript"
		| "time"
		| "Timing"
		| "Transport"
		| "TriggerDefinition"
		| "unsignedInt"
		| "uri"
		| "url"
		| "UsageContext"
		| "uuid"
		| "ValueSet"
		| "VerificationResult"
		| "VirtualServiceDetail"
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
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const ParameterDefinitionSchemaInternal = z
	.object({
		documentation: fhirString().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		max: fhirString().optional(),
		_max: z.lazy(getElementSchema).optional(),
		min: z.number().int().optional(),
		_min: z.lazy(getElementSchema).optional(),
		name: fhirCode().optional(),
		_name: z.lazy(getElementSchema).optional(),
		profile: fhirCanonical().optional(),
		_profile: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"Account",
			"ActivityDefinition",
			"ActorDefinition",
			"Address",
			"AdministrableProductDefinition",
			"AdverseEvent",
			"Age",
			"AllergyIntolerance",
			"Annotation",
			"Appointment",
			"AppointmentResponse",
			"ArtifactAssessment",
			"Attachment",
			"AuditEvent",
			"Availability",
			"BackboneElement",
			"BackboneType",
			"Base",
			"base64Binary",
			"Basic",
			"Binary",
			"BiologicallyDerivedProduct",
			"BiologicallyDerivedProductDispense",
			"BodyStructure",
			"boolean",
			"Bundle",
			"canonical",
			"CanonicalResource",
			"CapabilityStatement",
			"CarePlan",
			"CareTeam",
			"ChargeItem",
			"ChargeItemDefinition",
			"Citation",
			"Claim",
			"ClaimResponse",
			"ClinicalImpression",
			"ClinicalUseDefinition",
			"code",
			"CodeableConcept",
			"CodeableReference",
			"CodeSystem",
			"Coding",
			"Communication",
			"CommunicationRequest",
			"CompartmentDefinition",
			"Composition",
			"ConceptMap",
			"Condition",
			"ConditionDefinition",
			"Consent",
			"ContactDetail",
			"ContactPoint",
			"Contract",
			"Contributor",
			"Count",
			"Coverage",
			"CoverageEligibilityRequest",
			"CoverageEligibilityResponse",
			"DataRequirement",
			"DataType",
			"date",
			"dateTime",
			"decimal",
			"DetectedIssue",
			"Device",
			"DeviceAssociation",
			"DeviceDefinition",
			"DeviceDispense",
			"DeviceMetric",
			"DeviceRequest",
			"DeviceUsage",
			"DiagnosticReport",
			"Distance",
			"DocumentReference",
			"DomainResource",
			"Dosage",
			"Duration",
			"Element",
			"ElementDefinition",
			"Encounter",
			"EncounterHistory",
			"Endpoint",
			"EnrollmentRequest",
			"EnrollmentResponse",
			"EpisodeOfCare",
			"EventDefinition",
			"Evidence",
			"EvidenceReport",
			"EvidenceVariable",
			"ExampleScenario",
			"ExplanationOfBenefit",
			"Expression",
			"ExtendedContactDetail",
			"Extension",
			"FamilyMemberHistory",
			"Flag",
			"FormularyItem",
			"GenomicStudy",
			"Goal",
			"GraphDefinition",
			"Group",
			"GuidanceResponse",
			"HealthcareService",
			"HumanName",
			"id",
			"Identifier",
			"ImagingSelection",
			"ImagingStudy",
			"Immunization",
			"ImmunizationEvaluation",
			"ImmunizationRecommendation",
			"ImplementationGuide",
			"Ingredient",
			"instant",
			"InsurancePlan",
			"integer",
			"integer64",
			"InventoryItem",
			"InventoryReport",
			"Invoice",
			"Library",
			"Linkage",
			"List",
			"Location",
			"ManufacturedItemDefinition",
			"markdown",
			"MarketingStatus",
			"Measure",
			"MeasureReport",
			"Medication",
			"MedicationAdministration",
			"MedicationDispense",
			"MedicationKnowledge",
			"MedicationRequest",
			"MedicationStatement",
			"MedicinalProductDefinition",
			"MessageDefinition",
			"MessageHeader",
			"Meta",
			"MetadataResource",
			"MolecularSequence",
			"MonetaryComponent",
			"Money",
			"NamingSystem",
			"Narrative",
			"NutritionIntake",
			"NutritionOrder",
			"NutritionProduct",
			"Observation",
			"ObservationDefinition",
			"oid",
			"OperationDefinition",
			"OperationOutcome",
			"Organization",
			"OrganizationAffiliation",
			"PackagedProductDefinition",
			"ParameterDefinition",
			"Parameters",
			"Patient",
			"PaymentNotice",
			"PaymentReconciliation",
			"Period",
			"Permission",
			"Person",
			"PlanDefinition",
			"positiveInt",
			"Practitioner",
			"PractitionerRole",
			"PrimitiveType",
			"Procedure",
			"ProductShelfLife",
			"Provenance",
			"Quantity",
			"Questionnaire",
			"QuestionnaireResponse",
			"Range",
			"Ratio",
			"RatioRange",
			"Reference",
			"RegulatedAuthorization",
			"RelatedArtifact",
			"RelatedPerson",
			"RequestOrchestration",
			"Requirements",
			"ResearchStudy",
			"ResearchSubject",
			"Resource",
			"RiskAssessment",
			"SampledData",
			"Schedule",
			"SearchParameter",
			"ServiceRequest",
			"Signature",
			"Slot",
			"Specimen",
			"SpecimenDefinition",
			"string",
			"StructureDefinition",
			"StructureMap",
			"Subscription",
			"SubscriptionStatus",
			"SubscriptionTopic",
			"Substance",
			"SubstanceDefinition",
			"SubstanceNucleicAcid",
			"SubstancePolymer",
			"SubstanceProtein",
			"SubstanceReferenceInformation",
			"SubstanceSourceMaterial",
			"SupplyDelivery",
			"SupplyRequest",
			"Task",
			"TerminologyCapabilities",
			"TestPlan",
			"TestReport",
			"TestScript",
			"time",
			"Timing",
			"Transport",
			"TriggerDefinition",
			"unsignedInt",
			"uri",
			"url",
			"UsageContext",
			"uuid",
			"ValueSet",
			"VerificationResult",
			"VirtualServiceDetail",
			"VisionPrescription",
			"xhtml",
		]),
		_type: z.lazy(getElementSchema).optional(),
		use: z.enum(["in", "out"]),
		_use: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const ParameterDefinitionSchema =
	ParameterDefinitionSchemaInternal as z.ZodType<ParameterDefinition>;
