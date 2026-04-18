// Source: https://hl7.org/fhir/R4/graphdefinition-definitions.html#GraphDefinition.link.target
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { GraphDefinition_Link_Target_Compartment } from "./GraphDefinition_Link_Target_Compartment";
import { GraphDefinition_Link_Target_CompartmentSchemaInternal } from "./GraphDefinition_Link_Target_Compartment";

/** Potential target for the link. */
export interface GraphDefinition_Link_Target extends BackboneElement {
  /** Compartment Consistency Rules. */
  compartment?: Array<GraphDefinition_Link_Target_Compartment>;
  /** Additional links from target resource. */
  link?: Array<unknown>;
  /** A set of parameters to look up. */
  params?: string;
  /** Extensions for params */
  _params?: Element;
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
    | "BiologicallyDerivedProduct"
    | "BodyStructure"
    | "Bundle"
    | "CapabilityStatement"
    | "CarePlan"
    | "CareTeam"
    | "CatalogEntry"
    | "ChargeItem"
    | "ChargeItemDefinition"
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
    | "EffectEvidenceSynthesis"
    | "Encounter"
    | "Endpoint"
    | "EnrollmentRequest"
    | "EnrollmentResponse"
    | "EpisodeOfCare"
    | "EventDefinition"
    | "Evidence"
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
    | "InsurancePlan"
    | "Invoice"
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
    | "MedicationKnowledge"
    | "MedicationRequest"
    | "MedicationStatement"
    | "MedicinalProduct"
    | "MedicinalProductAuthorization"
    | "MedicinalProductContraindication"
    | "MedicinalProductIndication"
    | "MedicinalProductIngredient"
    | "MedicinalProductInteraction"
    | "MedicinalProductManufactured"
    | "MedicinalProductPackaged"
    | "MedicinalProductPharmaceutical"
    | "MedicinalProductUndesirableEffect"
    | "MessageDefinition"
    | "MessageHeader"
    | "MolecularSequence"
    | "NamingSystem"
    | "NutritionOrder"
    | "Observation"
    | "ObservationDefinition"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "OrganizationAffiliation"
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
    | "RelatedPerson"
    | "RequestGroup"
    | "ResearchDefinition"
    | "ResearchElementDefinition"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "RiskEvidenceSynthesis"
    | "Schedule"
    | "SearchParameter"
    | "ServiceRequest"
    | "Slot"
    | "Specimen"
    | "SpecimenDefinition"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "Substance"
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
    | "TestReport"
    | "TestScript"
    | "ValueSet"
    | "VerificationResult"
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
    params: fhirString().optional(),
    _params: z.lazy(getElementSchema).optional(),
    profile: fhirCanonical().optional(),
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
      "BiologicallyDerivedProduct",
      "BodyStructure",
      "Bundle",
      "CapabilityStatement",
      "CarePlan",
      "CareTeam",
      "CatalogEntry",
      "ChargeItem",
      "ChargeItemDefinition",
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
      "EffectEvidenceSynthesis",
      "Encounter",
      "Endpoint",
      "EnrollmentRequest",
      "EnrollmentResponse",
      "EpisodeOfCare",
      "EventDefinition",
      "Evidence",
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
      "InsurancePlan",
      "Invoice",
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
      "MedicationKnowledge",
      "MedicationRequest",
      "MedicationStatement",
      "MedicinalProduct",
      "MedicinalProductAuthorization",
      "MedicinalProductContraindication",
      "MedicinalProductIndication",
      "MedicinalProductIngredient",
      "MedicinalProductInteraction",
      "MedicinalProductManufactured",
      "MedicinalProductPackaged",
      "MedicinalProductPharmaceutical",
      "MedicinalProductUndesirableEffect",
      "MessageDefinition",
      "MessageHeader",
      "MolecularSequence",
      "NamingSystem",
      "NutritionOrder",
      "Observation",
      "ObservationDefinition",
      "OperationDefinition",
      "OperationOutcome",
      "Organization",
      "OrganizationAffiliation",
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
      "RelatedPerson",
      "RequestGroup",
      "ResearchDefinition",
      "ResearchElementDefinition",
      "ResearchStudy",
      "ResearchSubject",
      "Resource",
      "RiskAssessment",
      "RiskEvidenceSynthesis",
      "Schedule",
      "SearchParameter",
      "ServiceRequest",
      "Slot",
      "Specimen",
      "SpecimenDefinition",
      "StructureDefinition",
      "StructureMap",
      "Subscription",
      "Substance",
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
      "TestReport",
      "TestScript",
      "ValueSet",
      "VerificationResult",
      "VisionPrescription",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const GraphDefinition_Link_TargetSchema =
  GraphDefinition_Link_TargetSchemaInternal as z.ZodType<GraphDefinition_Link_Target>;
