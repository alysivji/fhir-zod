// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirCode,
	fhirString,
} from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { OperationDefinition_Parameter_Binding } from "./OperationDefinition_Parameter_Binding";
import { OperationDefinition_Parameter_BindingSchemaInternal } from "./OperationDefinition_Parameter_Binding";
import type { OperationDefinition_Parameter_ReferencedFrom } from "./OperationDefinition_Parameter_ReferencedFrom";
import { OperationDefinition_Parameter_ReferencedFromSchemaInternal } from "./OperationDefinition_Parameter_ReferencedFrom";

/** The parameters for the operation/query. */
export interface OperationDefinition_Parameter extends BackboneElement {
	/** Support for polymorphic types. If the parameter type is abstract, this element lists allowed sub-types for the parameter. */
	allowedType?: Array<
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
		| "xhtml"
		| null
	>;
	/** Extensions for allowedType */
	_allowedType?: Array<Element | null>;
	/** Binds to a value set if this parameter is coded (code, Coding, CodeableConcept). */
	binding?: OperationDefinition_Parameter_Binding;
	/** Describes the meaning or use of this parameter. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** The maximum number of times this element is permitted to appear in the request or response. */
	max: string;
	/** Extensions for max */
	_max?: Element;
	/** The minimum number of times this parameter SHALL appear in the request or response. */
	min: number;
	/** Extensions for min */
	_min?: Element;
	/** The name of used to identify the parameter. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The parts of a nested Parameter. */
	part?: Array<unknown>;
	/** Identifies other resource parameters within the operation invocation that are expected to resolve to this resource. */
	referencedFrom?: Array<OperationDefinition_Parameter_ReferencedFrom>;
	/** If present, indicates that the parameter applies when the operation is being invoked at the specified level. */
	scope?: Array<"instance" | "system" | "type" | null>;
	/** Extensions for scope */
	_scope?: Array<Element | null>;
	/** How the parameter is understood if/when it used as search parameter. This is only used if the parameter is a string. */
	searchType?:
		| "composite"
		| "date"
		| "number"
		| "quantity"
		| "reference"
		| "special"
		| "string"
		| "token"
		| "uri";
	/** Extensions for searchType */
	_searchType?: Element;
	/** Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this parameter refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide. */
	targetProfile?: Array<string | null>;
	/** Extensions for targetProfile */
	_targetProfile?: Array<Element | null>;
	/** The type for this parameter. */
	type?:
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
	/** Whether this is an input or an output parameter. */
	use: "in" | "out";
	/** Extensions for use */
	_use?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getOperationDefinition_Parameter_BindingSchema =
	(): z.ZodType<OperationDefinition_Parameter_Binding> =>
		OperationDefinition_Parameter_BindingSchemaInternal as z.ZodType<OperationDefinition_Parameter_Binding>;
const getOperationDefinition_Parameter_ReferencedFromSchema =
	(): z.ZodType<OperationDefinition_Parameter_ReferencedFrom> =>
		OperationDefinition_Parameter_ReferencedFromSchemaInternal as z.ZodType<OperationDefinition_Parameter_ReferencedFrom>;

/** @internal */
export const OperationDefinition_ParameterSchemaInternal =
	BackboneElementSchemaInternal.extend({
		allowedType: z
			.enum([
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
			])
			.nullable()
			.array()
			.optional(),
		_allowedType: z.lazy(getElementSchema).nullable().array().optional(),
		binding: z.lazy(getOperationDefinition_Parameter_BindingSchema).optional(),
		documentation: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		max: fhirString(),
		_max: z.lazy(getElementSchema).optional(),
		min: z.number().int(),
		_min: z.lazy(getElementSchema).optional(),
		name: fhirCode(),
		_name: z.lazy(getElementSchema).optional(),
		part: z.unknown().array().optional(),
		referencedFrom: z
			.lazy(getOperationDefinition_Parameter_ReferencedFromSchema)
			.array()
			.optional(),
		scope: z.enum(["instance", "system", "type"]).nullable().array().optional(),
		_scope: z.lazy(getElementSchema).nullable().array().optional(),
		searchType: z
			.enum([
				"composite",
				"date",
				"number",
				"quantity",
				"reference",
				"special",
				"string",
				"token",
				"uri",
			])
			.optional(),
		_searchType: z.lazy(getElementSchema).optional(),
		targetProfile: fhirCanonical().nullable().array().optional(),
		_targetProfile: z.lazy(getElementSchema).nullable().array().optional(),
		type: z
			.enum([
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
			])
			.optional(),
		_type: z.lazy(getElementSchema).optional(),
		use: z.enum(["in", "out"]),
		_use: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.allowedType,
				record._allowedType,
				"allowedType",
				"_allowedType",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.scope,
				record._scope,
				"scope",
				"_scope",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.targetProfile,
				record._targetProfile,
				"targetProfile",
				"_targetProfile",
				ctx,
			);
		});

export const OperationDefinition_ParameterSchema =
	OperationDefinition_ParameterSchemaInternal as z.ZodType<OperationDefinition_Parameter>;
