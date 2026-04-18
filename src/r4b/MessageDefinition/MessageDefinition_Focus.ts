// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge. */
export interface MessageDefinition_Focus extends BackboneElement {
  /** The kind of resource that must be the focus for this message. */
  code:
    | "Account"
    | "ActivityDefinition"
    | "AdministrableProductDefinition"
    | "AdverseEvent"
    | "AllergyIntolerance"
    | "Appointment"
    | "AppointmentResponse"
    | "AuditEvent"
    | "Basic"
    | "Binary"
    | "BiologicallyDerivedProduct"
    | "BodyStructure"
    | "Bundle"
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
    | "CoverageEligibilityRequest"
    | "CoverageEligibilityResponse"
    | "DetectedIssue"
    | "Device"
    | "DeviceDefinition"
    | "DeviceMetric"
    | "DeviceRequest"
    | "DeviceUseStatement"
    | "DiagnosticReport"
    | "DocumentManifest"
    | "DocumentReference"
    | "DomainResource"
    | "Encounter"
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
    | "FamilyMemberHistory"
    | "Flag"
    | "Goal"
    | "GraphDefinition"
    | "Group"
    | "GuidanceResponse"
    | "HealthcareService"
    | "ImagingStudy"
    | "Immunization"
    | "ImmunizationEvaluation"
    | "ImmunizationRecommendation"
    | "ImplementationGuide"
    | "Ingredient"
    | "InsurancePlan"
    | "Invoice"
    | "Library"
    | "Linkage"
    | "List"
    | "Location"
    | "ManufacturedItemDefinition"
    | "Measure"
    | "MeasureReport"
    | "Media"
    | "Medication"
    | "MedicationAdministration"
    | "MedicationDispense"
    | "MedicationKnowledge"
    | "MedicationRequest"
    | "MedicationStatement"
    | "MedicinalProductDefinition"
    | "MessageDefinition"
    | "MessageHeader"
    | "MolecularSequence"
    | "NamingSystem"
    | "NutritionOrder"
    | "NutritionProduct"
    | "Observation"
    | "ObservationDefinition"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "OrganizationAffiliation"
    | "PackagedProductDefinition"
    | "Parameters"
    | "Patient"
    | "PaymentNotice"
    | "PaymentReconciliation"
    | "Person"
    | "PlanDefinition"
    | "Practitioner"
    | "PractitionerRole"
    | "Procedure"
    | "Provenance"
    | "Questionnaire"
    | "QuestionnaireResponse"
    | "RegulatedAuthorization"
    | "RelatedPerson"
    | "RequestGroup"
    | "ResearchDefinition"
    | "ResearchElementDefinition"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "Schedule"
    | "SearchParameter"
    | "ServiceRequest"
    | "Slot"
    | "Specimen"
    | "SpecimenDefinition"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "SubscriptionStatus"
    | "SubscriptionTopic"
    | "Substance"
    | "SubstanceDefinition"
    | "SupplyDelivery"
    | "SupplyRequest"
    | "Task"
    | "TerminologyCapabilities"
    | "TestReport"
    | "TestScript"
    | "ValueSet"
    | "VerificationResult"
    | "VisionPrescription";
  /** Extensions for code */
  _code?: Element;
  /** Identifies the maximum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition. */
  max?: string;
  /** Extensions for max */
  _max?: Element;
  /** Identifies the minimum number of resources of this type that must be pointed to by a message in order for it to be valid against this MessageDefinition. */
  min: number;
  /** Extensions for min */
  _min?: Element;
  /** A profile that reflects constraints for the focal resource (and potentially for related resources). */
  profile?: string;
  /** Extensions for profile */
  _profile?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MessageDefinition_FocusSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.enum([
      "Account",
      "ActivityDefinition",
      "AdministrableProductDefinition",
      "AdverseEvent",
      "AllergyIntolerance",
      "Appointment",
      "AppointmentResponse",
      "AuditEvent",
      "Basic",
      "Binary",
      "BiologicallyDerivedProduct",
      "BodyStructure",
      "Bundle",
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
      "CoverageEligibilityRequest",
      "CoverageEligibilityResponse",
      "DetectedIssue",
      "Device",
      "DeviceDefinition",
      "DeviceMetric",
      "DeviceRequest",
      "DeviceUseStatement",
      "DiagnosticReport",
      "DocumentManifest",
      "DocumentReference",
      "DomainResource",
      "Encounter",
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
      "FamilyMemberHistory",
      "Flag",
      "Goal",
      "GraphDefinition",
      "Group",
      "GuidanceResponse",
      "HealthcareService",
      "ImagingStudy",
      "Immunization",
      "ImmunizationEvaluation",
      "ImmunizationRecommendation",
      "ImplementationGuide",
      "Ingredient",
      "InsurancePlan",
      "Invoice",
      "Library",
      "Linkage",
      "List",
      "Location",
      "ManufacturedItemDefinition",
      "Measure",
      "MeasureReport",
      "Media",
      "Medication",
      "MedicationAdministration",
      "MedicationDispense",
      "MedicationKnowledge",
      "MedicationRequest",
      "MedicationStatement",
      "MedicinalProductDefinition",
      "MessageDefinition",
      "MessageHeader",
      "MolecularSequence",
      "NamingSystem",
      "NutritionOrder",
      "NutritionProduct",
      "Observation",
      "ObservationDefinition",
      "OperationDefinition",
      "OperationOutcome",
      "Organization",
      "OrganizationAffiliation",
      "PackagedProductDefinition",
      "Parameters",
      "Patient",
      "PaymentNotice",
      "PaymentReconciliation",
      "Person",
      "PlanDefinition",
      "Practitioner",
      "PractitionerRole",
      "Procedure",
      "Provenance",
      "Questionnaire",
      "QuestionnaireResponse",
      "RegulatedAuthorization",
      "RelatedPerson",
      "RequestGroup",
      "ResearchDefinition",
      "ResearchElementDefinition",
      "ResearchStudy",
      "ResearchSubject",
      "Resource",
      "RiskAssessment",
      "Schedule",
      "SearchParameter",
      "ServiceRequest",
      "Slot",
      "Specimen",
      "SpecimenDefinition",
      "StructureDefinition",
      "StructureMap",
      "Subscription",
      "SubscriptionStatus",
      "SubscriptionTopic",
      "Substance",
      "SubstanceDefinition",
      "SupplyDelivery",
      "SupplyRequest",
      "Task",
      "TerminologyCapabilities",
      "TestReport",
      "TestScript",
      "ValueSet",
      "VerificationResult",
      "VisionPrescription",
    ]),
    _code: z.lazy(getElementSchema).optional(),
    max: fhirString().optional(),
    _max: z.lazy(getElementSchema).optional(),
    min: z.number().int().nonnegative(),
    _min: z.lazy(getElementSchema).optional(),
    profile: fhirCanonical().optional(),
    _profile: z.lazy(getElementSchema).optional(),
  }).strict();

export const MessageDefinition_FocusSchema =
  MessageDefinition_FocusSchemaInternal as z.ZodType<MessageDefinition_Focus>;
