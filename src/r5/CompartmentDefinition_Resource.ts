// Profile: http://hl7.org/fhir/StructureDefinition/CompartmentDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about how a resource is related to the compartment. */
export interface CompartmentDefinition_Resource extends BackboneElement {
	/** The name of a resource supported by the server. */
	code:
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
	/** Extensions for code */
	_code?: Element;
	/** Additional documentation about the resource and compartment. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** Search Parameter for mapping requests made with $everything.end (e.g. on [Patient.$everything](patient-operation-everything.html)). */
	endParam?: string;
	/** Extensions for endParam */
	_endParam?: Element;
	/** The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,. */
	param?: Array<string | null>;
	/** Extensions for param */
	_param?: Array<Element | null>;
	/** Search Parameter for mapping requests made with $everything.start (e.g. on [Patient.$everything](patient-operation-everything.html)). */
	startParam?: string;
	/** Extensions for startParam */
	_startParam?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CompartmentDefinition_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
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
		_code: z.lazy(getElementSchema).optional(),
		documentation: fhirString().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		endParam: fhirUri().optional(),
		_endParam: z.lazy(getElementSchema).optional(),
		param: fhirString().nullable().array().optional(),
		_param: z.lazy(getElementSchema).nullable().array().optional(),
		startParam: fhirUri().optional(),
		_startParam: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.param,
				record._param,
				"param",
				"_param",
				ctx,
			);
		});

export const CompartmentDefinition_ResourceSchema =
	CompartmentDefinition_ResourceSchemaInternal as z.ZodType<CompartmentDefinition_Resource>;
