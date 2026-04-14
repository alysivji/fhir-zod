// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:50:51.842Z

import * as z from "zod";
import { fhirCanonical, fhirId, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Potential target for the link. */
export interface GraphDefinition_Node extends BackboneElement {
	/** Information about why this node is of interest in this graph definition. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Internal ID of node - target for link references. */
	nodeId: string;
	/** Extensions for nodeId */
	_nodeId?: Element;
	/** Profile for the target resource. */
	profile?: string;
	/** Extensions for profile */
	_profile?: Element;
	/** Type of resource this link refers to. */
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
		| "BodySite"
		| "BodyStructure"
		| "boolean"
		| "Bundle"
		| "canonical"
		| "CanonicalResource"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "CatalogEntry"
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
		| "Conformance"
		| "Consent"
		| "ContactDetail"
		| "ContactPoint"
		| "Contract"
		| "Contributor"
		| "Count"
		| "Coverage"
		| "CoverageEligibilityRequest"
		| "CoverageEligibilityResponse"
		| "DataElement"
		| "DataRequirement"
		| "DataType"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceAssociation"
		| "DeviceComponent"
		| "DeviceDefinition"
		| "DeviceDispense"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUsage"
		| "DeviceUseRequest"
		| "DeviceUseStatement"
		| "DiagnosticOrder"
		| "DiagnosticReport"
		| "Distance"
		| "DocumentManifest"
		| "DocumentReference"
		| "DomainResource"
		| "Dosage"
		| "Duration"
		| "EffectEvidenceSynthesis"
		| "Element"
		| "ElementDefinition"
		| "EligibilityRequest"
		| "EligibilityResponse"
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
		| "ExpansionProfile"
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
		| "ImagingManifest"
		| "ImagingObjectSelection"
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
		| "Media"
		| "Medication"
		| "MedicationAdministration"
		| "MedicationDispense"
		| "MedicationKnowledge"
		| "MedicationOrder"
		| "MedicationRequest"
		| "MedicationStatement"
		| "MedicationUsage"
		| "MedicinalProduct"
		| "MedicinalProductAuthorization"
		| "MedicinalProductContraindication"
		| "MedicinalProductDefinition"
		| "MedicinalProductIndication"
		| "MedicinalProductIngredient"
		| "MedicinalProductInteraction"
		| "MedicinalProductManufactured"
		| "MedicinalProductPackaged"
		| "MedicinalProductPharmaceutical"
		| "MedicinalProductUndesirableEffect"
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
		| "Order"
		| "OrderResponse"
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
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "ProductShelfLife"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "RatioRange"
		| "Reference"
		| "ReferralRequest"
		| "RegulatedAuthorization"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestGroup"
		| "RequestOrchestration"
		| "Requirements"
		| "ResearchDefinition"
		| "ResearchElementDefinition"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "RiskEvidenceSynthesis"
		| "SampledData"
		| "Schedule"
		| "SearchParameter"
		| "Sequence"
		| "ServiceDefinition"
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
		| "SubstanceSpecification"
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
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const GraphDefinition_NodeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		nodeId: fhirId(),
		_nodeId: z.lazy(getElementSchema).optional(),
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
			"BodySite",
			"BodyStructure",
			"boolean",
			"Bundle",
			"canonical",
			"CanonicalResource",
			"CapabilityStatement",
			"CarePlan",
			"CareTeam",
			"CatalogEntry",
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
			"Conformance",
			"Consent",
			"ContactDetail",
			"ContactPoint",
			"Contract",
			"Contributor",
			"Count",
			"Coverage",
			"CoverageEligibilityRequest",
			"CoverageEligibilityResponse",
			"DataElement",
			"DataRequirement",
			"DataType",
			"date",
			"dateTime",
			"decimal",
			"DetectedIssue",
			"Device",
			"DeviceAssociation",
			"DeviceComponent",
			"DeviceDefinition",
			"DeviceDispense",
			"DeviceMetric",
			"DeviceRequest",
			"DeviceUsage",
			"DeviceUseRequest",
			"DeviceUseStatement",
			"DiagnosticOrder",
			"DiagnosticReport",
			"Distance",
			"DocumentManifest",
			"DocumentReference",
			"DomainResource",
			"Dosage",
			"Duration",
			"EffectEvidenceSynthesis",
			"Element",
			"ElementDefinition",
			"EligibilityRequest",
			"EligibilityResponse",
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
			"ExpansionProfile",
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
			"ImagingManifest",
			"ImagingObjectSelection",
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
			"Media",
			"Medication",
			"MedicationAdministration",
			"MedicationDispense",
			"MedicationKnowledge",
			"MedicationOrder",
			"MedicationRequest",
			"MedicationStatement",
			"MedicationUsage",
			"MedicinalProduct",
			"MedicinalProductAuthorization",
			"MedicinalProductContraindication",
			"MedicinalProductDefinition",
			"MedicinalProductIndication",
			"MedicinalProductIngredient",
			"MedicinalProductInteraction",
			"MedicinalProductManufactured",
			"MedicinalProductPackaged",
			"MedicinalProductPharmaceutical",
			"MedicinalProductUndesirableEffect",
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
			"Order",
			"OrderResponse",
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
			"ProcedureRequest",
			"ProcessRequest",
			"ProcessResponse",
			"ProductShelfLife",
			"Provenance",
			"Quantity",
			"Questionnaire",
			"QuestionnaireResponse",
			"Range",
			"Ratio",
			"RatioRange",
			"Reference",
			"ReferralRequest",
			"RegulatedAuthorization",
			"RelatedArtifact",
			"RelatedPerson",
			"RequestGroup",
			"RequestOrchestration",
			"Requirements",
			"ResearchDefinition",
			"ResearchElementDefinition",
			"ResearchStudy",
			"ResearchSubject",
			"Resource",
			"RiskAssessment",
			"RiskEvidenceSynthesis",
			"SampledData",
			"Schedule",
			"SearchParameter",
			"Sequence",
			"ServiceDefinition",
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
			"SubstanceSpecification",
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
	}).strict();

export const GraphDefinition_NodeSchema =
	GraphDefinition_NodeSchemaInternal as z.ZodType<GraphDefinition_Node>;
