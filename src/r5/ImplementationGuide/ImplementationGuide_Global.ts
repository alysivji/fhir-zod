// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirCanonical } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A set of profiles that all resources covered by this implementation guide must conform to. */
export interface ImplementationGuide_Global extends BackboneElement {
  /** A reference to the profile that all instances must conform to. */
  profile: string;
  /** Extensions for profile */
  _profile?: Element;
  /** The type of resource that all instances must conform to. */
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
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_GlobalSchemaInternal =
  BackboneElementSchemaInternal.extend({
    profile: fhirCanonical(),
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
  }).strict();

export const ImplementationGuide_GlobalSchema =
  ImplementationGuide_GlobalSchemaInternal as z.ZodType<ImplementationGuide_Global>;
