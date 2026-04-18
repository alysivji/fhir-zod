// Release: R5
// Last generated: 2026-04-18T17:06:42.309Z

import * as z from "zod";
import type { Account } from "./Account/Account";
import { AccountSchemaInternal } from "./Account/Account";
import type { ActivityDefinition } from "./ActivityDefinition/ActivityDefinition";
import { ActivityDefinitionSchemaInternal } from "./ActivityDefinition/ActivityDefinition";
import type { ActorDefinition } from "./ActorDefinition/ActorDefinition";
import { ActorDefinitionSchemaInternal } from "./ActorDefinition/ActorDefinition";
import type { AdministrableProductDefinition } from "./AdministrableProductDefinition/AdministrableProductDefinition";
import { AdministrableProductDefinitionSchemaInternal } from "./AdministrableProductDefinition/AdministrableProductDefinition";
import type { AdverseEvent } from "./AdverseEvent/AdverseEvent";
import { AdverseEventSchemaInternal } from "./AdverseEvent/AdverseEvent";
import type { AllergyIntolerance } from "./AllergyIntolerance/AllergyIntolerance";
import { AllergyIntoleranceSchemaInternal } from "./AllergyIntolerance/AllergyIntolerance";
import type { Appointment } from "./Appointment/Appointment";
import { AppointmentSchemaInternal } from "./Appointment/Appointment";
import type { AppointmentResponse } from "./AppointmentResponse/AppointmentResponse";
import { AppointmentResponseSchemaInternal } from "./AppointmentResponse/AppointmentResponse";
import type { ArtifactAssessment } from "./ArtifactAssessment/ArtifactAssessment";
import { ArtifactAssessmentSchemaInternal } from "./ArtifactAssessment/ArtifactAssessment";
import type { AuditEvent } from "./AuditEvent/AuditEvent";
import { AuditEventSchemaInternal } from "./AuditEvent/AuditEvent";
import type { Basic } from "./Basic/Basic";
import { BasicSchemaInternal } from "./Basic/Basic";
import type { Binary } from "./Binary/Binary";
import { BinarySchemaInternal } from "./Binary/Binary";
import type { BiologicallyDerivedProduct } from "./BiologicallyDerivedProduct/BiologicallyDerivedProduct";
import { BiologicallyDerivedProductSchemaInternal } from "./BiologicallyDerivedProduct/BiologicallyDerivedProduct";
import type { BiologicallyDerivedProductDispense } from "./BiologicallyDerivedProductDispense/BiologicallyDerivedProductDispense";
import { BiologicallyDerivedProductDispenseSchemaInternal } from "./BiologicallyDerivedProductDispense/BiologicallyDerivedProductDispense";
import type { BodyStructure } from "./BodyStructure/BodyStructure";
import { BodyStructureSchemaInternal } from "./BodyStructure/BodyStructure";
import type { Bundle } from "./Bundle/Bundle";
import { BundleSchemaInternal } from "./Bundle/Bundle";
import type { CapabilityStatement } from "./CapabilityStatement/CapabilityStatement";
import { CapabilityStatementSchemaInternal } from "./CapabilityStatement/CapabilityStatement";
import type { CarePlan } from "./CarePlan/CarePlan";
import { CarePlanSchemaInternal } from "./CarePlan/CarePlan";
import type { CareTeam } from "./CareTeam/CareTeam";
import { CareTeamSchemaInternal } from "./CareTeam/CareTeam";
import type { ChargeItem } from "./ChargeItem/ChargeItem";
import { ChargeItemSchemaInternal } from "./ChargeItem/ChargeItem";
import type { ChargeItemDefinition } from "./ChargeItemDefinition/ChargeItemDefinition";
import { ChargeItemDefinitionSchemaInternal } from "./ChargeItemDefinition/ChargeItemDefinition";
import type { Citation } from "./Citation/Citation";
import { CitationSchemaInternal } from "./Citation/Citation";
import type { Claim } from "./Claim/Claim";
import { ClaimSchemaInternal } from "./Claim/Claim";
import type { ClaimResponse } from "./ClaimResponse/ClaimResponse";
import { ClaimResponseSchemaInternal } from "./ClaimResponse/ClaimResponse";
import type { ClinicalImpression } from "./ClinicalImpression/ClinicalImpression";
import { ClinicalImpressionSchemaInternal } from "./ClinicalImpression/ClinicalImpression";
import type { ClinicalUseDefinition } from "./ClinicalUseDefinition/ClinicalUseDefinition";
import { ClinicalUseDefinitionSchemaInternal } from "./ClinicalUseDefinition/ClinicalUseDefinition";
import type { CodeSystem } from "./CodeSystem/CodeSystem";
import { CodeSystemSchemaInternal } from "./CodeSystem/CodeSystem";
import type { Communication } from "./Communication/Communication";
import { CommunicationSchemaInternal } from "./Communication/Communication";
import type { CommunicationRequest } from "./CommunicationRequest/CommunicationRequest";
import { CommunicationRequestSchemaInternal } from "./CommunicationRequest/CommunicationRequest";
import type { CompartmentDefinition } from "./CompartmentDefinition/CompartmentDefinition";
import { CompartmentDefinitionSchemaInternal } from "./CompartmentDefinition/CompartmentDefinition";
import type { Composition } from "./Composition/Composition";
import { CompositionSchemaInternal } from "./Composition/Composition";
import type { ConceptMap } from "./ConceptMap/ConceptMap";
import { ConceptMapSchemaInternal } from "./ConceptMap/ConceptMap";
import type { Condition } from "./Condition/Condition";
import { ConditionSchemaInternal } from "./Condition/Condition";
import type { ConditionDefinition } from "./ConditionDefinition/ConditionDefinition";
import { ConditionDefinitionSchemaInternal } from "./ConditionDefinition/ConditionDefinition";
import type { Consent } from "./Consent/Consent";
import { ConsentSchemaInternal } from "./Consent/Consent";
import type { Contract } from "./Contract/Contract";
import { ContractSchemaInternal } from "./Contract/Contract";
import type { Coverage } from "./Coverage/Coverage";
import { CoverageSchemaInternal } from "./Coverage/Coverage";
import type { CoverageEligibilityRequest } from "./CoverageEligibilityRequest/CoverageEligibilityRequest";
import { CoverageEligibilityRequestSchemaInternal } from "./CoverageEligibilityRequest/CoverageEligibilityRequest";
import type { CoverageEligibilityResponse } from "./CoverageEligibilityResponse/CoverageEligibilityResponse";
import { CoverageEligibilityResponseSchemaInternal } from "./CoverageEligibilityResponse/CoverageEligibilityResponse";
import type { DetectedIssue } from "./DetectedIssue/DetectedIssue";
import { DetectedIssueSchemaInternal } from "./DetectedIssue/DetectedIssue";
import type { Device } from "./Device/Device";
import { DeviceSchemaInternal } from "./Device/Device";
import type { DeviceAssociation } from "./DeviceAssociation/DeviceAssociation";
import { DeviceAssociationSchemaInternal } from "./DeviceAssociation/DeviceAssociation";
import type { DeviceDefinition } from "./DeviceDefinition/DeviceDefinition";
import { DeviceDefinitionSchemaInternal } from "./DeviceDefinition/DeviceDefinition";
import type { DeviceDispense } from "./DeviceDispense/DeviceDispense";
import { DeviceDispenseSchemaInternal } from "./DeviceDispense/DeviceDispense";
import type { DeviceMetric } from "./DeviceMetric/DeviceMetric";
import { DeviceMetricSchemaInternal } from "./DeviceMetric/DeviceMetric";
import type { DeviceRequest } from "./DeviceRequest/DeviceRequest";
import { DeviceRequestSchemaInternal } from "./DeviceRequest/DeviceRequest";
import type { DeviceUsage } from "./DeviceUsage/DeviceUsage";
import { DeviceUsageSchemaInternal } from "./DeviceUsage/DeviceUsage";
import type { DiagnosticReport } from "./DiagnosticReport/DiagnosticReport";
import { DiagnosticReportSchemaInternal } from "./DiagnosticReport/DiagnosticReport";
import type { DocumentReference } from "./DocumentReference/DocumentReference";
import { DocumentReferenceSchemaInternal } from "./DocumentReference/DocumentReference";
import type { Encounter } from "./Encounter/Encounter";
import { EncounterSchemaInternal } from "./Encounter/Encounter";
import type { EncounterHistory } from "./EncounterHistory/EncounterHistory";
import { EncounterHistorySchemaInternal } from "./EncounterHistory/EncounterHistory";
import type { Endpoint } from "./Endpoint/Endpoint";
import { EndpointSchemaInternal } from "./Endpoint/Endpoint";
import type { EnrollmentRequest } from "./EnrollmentRequest/EnrollmentRequest";
import { EnrollmentRequestSchemaInternal } from "./EnrollmentRequest/EnrollmentRequest";
import type { EnrollmentResponse } from "./EnrollmentResponse/EnrollmentResponse";
import { EnrollmentResponseSchemaInternal } from "./EnrollmentResponse/EnrollmentResponse";
import type { EpisodeOfCare } from "./EpisodeOfCare/EpisodeOfCare";
import { EpisodeOfCareSchemaInternal } from "./EpisodeOfCare/EpisodeOfCare";
import type { EventDefinition } from "./EventDefinition/EventDefinition";
import { EventDefinitionSchemaInternal } from "./EventDefinition/EventDefinition";
import type { Evidence } from "./Evidence/Evidence";
import { EvidenceSchemaInternal } from "./Evidence/Evidence";
import type { EvidenceReport } from "./EvidenceReport/EvidenceReport";
import { EvidenceReportSchemaInternal } from "./EvidenceReport/EvidenceReport";
import type { EvidenceVariable } from "./EvidenceVariable/EvidenceVariable";
import { EvidenceVariableSchemaInternal } from "./EvidenceVariable/EvidenceVariable";
import type { ExampleScenario } from "./ExampleScenario/ExampleScenario";
import { ExampleScenarioSchemaInternal } from "./ExampleScenario/ExampleScenario";
import type { ExplanationOfBenefit } from "./ExplanationOfBenefit/ExplanationOfBenefit";
import { ExplanationOfBenefitSchemaInternal } from "./ExplanationOfBenefit/ExplanationOfBenefit";
import type { FamilyMemberHistory } from "./FamilyMemberHistory/FamilyMemberHistory";
import { FamilyMemberHistorySchemaInternal } from "./FamilyMemberHistory/FamilyMemberHistory";
import type { Flag } from "./Flag/Flag";
import { FlagSchemaInternal } from "./Flag/Flag";
import type { FormularyItem } from "./FormularyItem/FormularyItem";
import { FormularyItemSchemaInternal } from "./FormularyItem/FormularyItem";
import type { GenomicStudy } from "./GenomicStudy/GenomicStudy";
import { GenomicStudySchemaInternal } from "./GenomicStudy/GenomicStudy";
import type { Goal } from "./Goal/Goal";
import { GoalSchemaInternal } from "./Goal/Goal";
import type { GraphDefinition } from "./GraphDefinition/GraphDefinition";
import { GraphDefinitionSchemaInternal } from "./GraphDefinition/GraphDefinition";
import type { Group } from "./Group/Group";
import { GroupSchemaInternal } from "./Group/Group";
import type { GuidanceResponse } from "./GuidanceResponse/GuidanceResponse";
import { GuidanceResponseSchemaInternal } from "./GuidanceResponse/GuidanceResponse";
import type { HealthcareService } from "./HealthcareService/HealthcareService";
import { HealthcareServiceSchemaInternal } from "./HealthcareService/HealthcareService";
import type { ImagingSelection } from "./ImagingSelection/ImagingSelection";
import { ImagingSelectionSchemaInternal } from "./ImagingSelection/ImagingSelection";
import type { ImagingStudy } from "./ImagingStudy/ImagingStudy";
import { ImagingStudySchemaInternal } from "./ImagingStudy/ImagingStudy";
import type { Immunization } from "./Immunization/Immunization";
import { ImmunizationSchemaInternal } from "./Immunization/Immunization";
import type { ImmunizationEvaluation } from "./ImmunizationEvaluation/ImmunizationEvaluation";
import { ImmunizationEvaluationSchemaInternal } from "./ImmunizationEvaluation/ImmunizationEvaluation";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation/ImmunizationRecommendation";
import { ImmunizationRecommendationSchemaInternal } from "./ImmunizationRecommendation/ImmunizationRecommendation";
import type { ImplementationGuide } from "./ImplementationGuide/ImplementationGuide";
import { ImplementationGuideSchemaInternal } from "./ImplementationGuide/ImplementationGuide";
import type { Ingredient } from "./Ingredient/Ingredient";
import { IngredientSchemaInternal } from "./Ingredient/Ingredient";
import type { InsurancePlan } from "./InsurancePlan/InsurancePlan";
import { InsurancePlanSchemaInternal } from "./InsurancePlan/InsurancePlan";
import type { InventoryItem } from "./InventoryItem/InventoryItem";
import { InventoryItemSchemaInternal } from "./InventoryItem/InventoryItem";
import type { InventoryReport } from "./InventoryReport/InventoryReport";
import { InventoryReportSchemaInternal } from "./InventoryReport/InventoryReport";
import type { Invoice } from "./Invoice/Invoice";
import { InvoiceSchemaInternal } from "./Invoice/Invoice";
import type { Library } from "./Library/Library";
import { LibrarySchemaInternal } from "./Library/Library";
import type { Linkage } from "./Linkage/Linkage";
import { LinkageSchemaInternal } from "./Linkage/Linkage";
import type { List } from "./List/List";
import { ListSchemaInternal } from "./List/List";
import type { Location } from "./Location/Location";
import { LocationSchemaInternal } from "./Location/Location";
import type { ManufacturedItemDefinition } from "./ManufacturedItemDefinition/ManufacturedItemDefinition";
import { ManufacturedItemDefinitionSchemaInternal } from "./ManufacturedItemDefinition/ManufacturedItemDefinition";
import type { Measure } from "./Measure/Measure";
import { MeasureSchemaInternal } from "./Measure/Measure";
import type { MeasureReport } from "./MeasureReport/MeasureReport";
import { MeasureReportSchemaInternal } from "./MeasureReport/MeasureReport";
import type { Medication } from "./Medication/Medication";
import { MedicationSchemaInternal } from "./Medication/Medication";
import type { MedicationAdministration } from "./MedicationAdministration/MedicationAdministration";
import { MedicationAdministrationSchemaInternal } from "./MedicationAdministration/MedicationAdministration";
import type { MedicationDispense } from "./MedicationDispense/MedicationDispense";
import { MedicationDispenseSchemaInternal } from "./MedicationDispense/MedicationDispense";
import type { MedicationKnowledge } from "./MedicationKnowledge/MedicationKnowledge";
import { MedicationKnowledgeSchemaInternal } from "./MedicationKnowledge/MedicationKnowledge";
import type { MedicationRequest } from "./MedicationRequest/MedicationRequest";
import { MedicationRequestSchemaInternal } from "./MedicationRequest/MedicationRequest";
import type { MedicationStatement } from "./MedicationStatement/MedicationStatement";
import { MedicationStatementSchemaInternal } from "./MedicationStatement/MedicationStatement";
import type { MedicinalProductDefinition } from "./MedicinalProductDefinition/MedicinalProductDefinition";
import { MedicinalProductDefinitionSchemaInternal } from "./MedicinalProductDefinition/MedicinalProductDefinition";
import type { MessageDefinition } from "./MessageDefinition/MessageDefinition";
import { MessageDefinitionSchemaInternal } from "./MessageDefinition/MessageDefinition";
import type { MessageHeader } from "./MessageHeader/MessageHeader";
import { MessageHeaderSchemaInternal } from "./MessageHeader/MessageHeader";
import type { MolecularSequence } from "./MolecularSequence/MolecularSequence";
import { MolecularSequenceSchemaInternal } from "./MolecularSequence/MolecularSequence";
import type { NamingSystem } from "./NamingSystem/NamingSystem";
import { NamingSystemSchemaInternal } from "./NamingSystem/NamingSystem";
import type { NutritionIntake } from "./NutritionIntake/NutritionIntake";
import { NutritionIntakeSchemaInternal } from "./NutritionIntake/NutritionIntake";
import type { NutritionOrder } from "./NutritionOrder/NutritionOrder";
import { NutritionOrderSchemaInternal } from "./NutritionOrder/NutritionOrder";
import type { NutritionProduct } from "./NutritionProduct/NutritionProduct";
import { NutritionProductSchemaInternal } from "./NutritionProduct/NutritionProduct";
import type { Observation } from "./Observation/Observation";
import { ObservationSchemaInternal } from "./Observation/Observation";
import type { ObservationDefinition } from "./ObservationDefinition/ObservationDefinition";
import { ObservationDefinitionSchemaInternal } from "./ObservationDefinition/ObservationDefinition";
import type { OperationDefinition } from "./OperationDefinition/OperationDefinition";
import { OperationDefinitionSchemaInternal } from "./OperationDefinition/OperationDefinition";
import type { OperationOutcome } from "./OperationOutcome/OperationOutcome";
import { OperationOutcomeSchemaInternal } from "./OperationOutcome/OperationOutcome";
import type { Organization } from "./Organization/Organization";
import { OrganizationSchemaInternal } from "./Organization/Organization";
import type { OrganizationAffiliation } from "./OrganizationAffiliation/OrganizationAffiliation";
import { OrganizationAffiliationSchemaInternal } from "./OrganizationAffiliation/OrganizationAffiliation";
import type { PackagedProductDefinition } from "./PackagedProductDefinition/PackagedProductDefinition";
import { PackagedProductDefinitionSchemaInternal } from "./PackagedProductDefinition/PackagedProductDefinition";
import type { Parameters } from "./Parameters/Parameters";
import { ParametersSchemaInternal } from "./Parameters/Parameters";
import type { Patient } from "./Patient/Patient";
import { PatientSchemaInternal } from "./Patient/Patient";
import type { PaymentNotice } from "./PaymentNotice/PaymentNotice";
import { PaymentNoticeSchemaInternal } from "./PaymentNotice/PaymentNotice";
import type { PaymentReconciliation } from "./PaymentReconciliation/PaymentReconciliation";
import { PaymentReconciliationSchemaInternal } from "./PaymentReconciliation/PaymentReconciliation";
import type { Permission } from "./Permission/Permission";
import { PermissionSchemaInternal } from "./Permission/Permission";
import type { Person } from "./Person/Person";
import { PersonSchemaInternal } from "./Person/Person";
import type { PlanDefinition } from "./PlanDefinition/PlanDefinition";
import { PlanDefinitionSchemaInternal } from "./PlanDefinition/PlanDefinition";
import type { Practitioner } from "./Practitioner/Practitioner";
import { PractitionerSchemaInternal } from "./Practitioner/Practitioner";
import type { PractitionerRole } from "./PractitionerRole/PractitionerRole";
import { PractitionerRoleSchemaInternal } from "./PractitionerRole/PractitionerRole";
import type { Procedure } from "./Procedure/Procedure";
import { ProcedureSchemaInternal } from "./Procedure/Procedure";
import type { Provenance } from "./Provenance/Provenance";
import { ProvenanceSchemaInternal } from "./Provenance/Provenance";
import type { Questionnaire } from "./Questionnaire/Questionnaire";
import { QuestionnaireSchemaInternal } from "./Questionnaire/Questionnaire";
import type { QuestionnaireResponse } from "./QuestionnaireResponse/QuestionnaireResponse";
import { QuestionnaireResponseSchemaInternal } from "./QuestionnaireResponse/QuestionnaireResponse";
import type { RegulatedAuthorization } from "./RegulatedAuthorization/RegulatedAuthorization";
import { RegulatedAuthorizationSchemaInternal } from "./RegulatedAuthorization/RegulatedAuthorization";
import type { RelatedPerson } from "./RelatedPerson/RelatedPerson";
import { RelatedPersonSchemaInternal } from "./RelatedPerson/RelatedPerson";
import type { RequestOrchestration } from "./RequestOrchestration/RequestOrchestration";
import { RequestOrchestrationSchemaInternal } from "./RequestOrchestration/RequestOrchestration";
import type { Requirements } from "./Requirements/Requirements";
import { RequirementsSchemaInternal } from "./Requirements/Requirements";
import type { ResearchStudy } from "./ResearchStudy/ResearchStudy";
import { ResearchStudySchemaInternal } from "./ResearchStudy/ResearchStudy";
import type { ResearchSubject } from "./ResearchSubject/ResearchSubject";
import { ResearchSubjectSchemaInternal } from "./ResearchSubject/ResearchSubject";
import type { RiskAssessment } from "./RiskAssessment/RiskAssessment";
import { RiskAssessmentSchemaInternal } from "./RiskAssessment/RiskAssessment";
import type { Schedule } from "./Schedule/Schedule";
import { ScheduleSchemaInternal } from "./Schedule/Schedule";
import type { SearchParameter } from "./SearchParameter/SearchParameter";
import { SearchParameterSchemaInternal } from "./SearchParameter/SearchParameter";
import type { ServiceRequest } from "./ServiceRequest/ServiceRequest";
import { ServiceRequestSchemaInternal } from "./ServiceRequest/ServiceRequest";
import type { Slot } from "./Slot/Slot";
import { SlotSchemaInternal } from "./Slot/Slot";
import type { Specimen } from "./Specimen/Specimen";
import { SpecimenSchemaInternal } from "./Specimen/Specimen";
import type { SpecimenDefinition } from "./SpecimenDefinition/SpecimenDefinition";
import { SpecimenDefinitionSchemaInternal } from "./SpecimenDefinition/SpecimenDefinition";
import type { StructureDefinition } from "./StructureDefinition/StructureDefinition";
import { StructureDefinitionSchemaInternal } from "./StructureDefinition/StructureDefinition";
import type { StructureMap } from "./StructureMap/StructureMap";
import { StructureMapSchemaInternal } from "./StructureMap/StructureMap";
import type { Subscription } from "./Subscription/Subscription";
import { SubscriptionSchemaInternal } from "./Subscription/Subscription";
import type { SubscriptionStatus } from "./SubscriptionStatus/SubscriptionStatus";
import { SubscriptionStatusSchemaInternal } from "./SubscriptionStatus/SubscriptionStatus";
import type { SubscriptionTopic } from "./SubscriptionTopic/SubscriptionTopic";
import { SubscriptionTopicSchemaInternal } from "./SubscriptionTopic/SubscriptionTopic";
import type { Substance } from "./Substance/Substance";
import { SubstanceSchemaInternal } from "./Substance/Substance";
import type { SubstanceDefinition } from "./SubstanceDefinition/SubstanceDefinition";
import { SubstanceDefinitionSchemaInternal } from "./SubstanceDefinition/SubstanceDefinition";
import type { SubstanceNucleicAcid } from "./SubstanceNucleicAcid/SubstanceNucleicAcid";
import { SubstanceNucleicAcidSchemaInternal } from "./SubstanceNucleicAcid/SubstanceNucleicAcid";
import type { SubstancePolymer } from "./SubstancePolymer/SubstancePolymer";
import { SubstancePolymerSchemaInternal } from "./SubstancePolymer/SubstancePolymer";
import type { SubstanceProtein } from "./SubstanceProtein/SubstanceProtein";
import { SubstanceProteinSchemaInternal } from "./SubstanceProtein/SubstanceProtein";
import type { SubstanceReferenceInformation } from "./SubstanceReferenceInformation/SubstanceReferenceInformation";
import { SubstanceReferenceInformationSchemaInternal } from "./SubstanceReferenceInformation/SubstanceReferenceInformation";
import type { SubstanceSourceMaterial } from "./SubstanceSourceMaterial/SubstanceSourceMaterial";
import { SubstanceSourceMaterialSchemaInternal } from "./SubstanceSourceMaterial/SubstanceSourceMaterial";
import type { SupplyDelivery } from "./SupplyDelivery/SupplyDelivery";
import { SupplyDeliverySchemaInternal } from "./SupplyDelivery/SupplyDelivery";
import type { SupplyRequest } from "./SupplyRequest/SupplyRequest";
import { SupplyRequestSchemaInternal } from "./SupplyRequest/SupplyRequest";
import type { Task } from "./Task/Task";
import { TaskSchemaInternal } from "./Task/Task";
import type { TerminologyCapabilities } from "./TerminologyCapabilities/TerminologyCapabilities";
import { TerminologyCapabilitiesSchemaInternal } from "./TerminologyCapabilities/TerminologyCapabilities";
import type { TestPlan } from "./TestPlan/TestPlan";
import { TestPlanSchemaInternal } from "./TestPlan/TestPlan";
import type { TestReport } from "./TestReport/TestReport";
import { TestReportSchemaInternal } from "./TestReport/TestReport";
import type { TestScript } from "./TestScript/TestScript";
import { TestScriptSchemaInternal } from "./TestScript/TestScript";
import type { Transport } from "./Transport/Transport";
import { TransportSchemaInternal } from "./Transport/Transport";
import type { ValueSet } from "./ValueSet/ValueSet";
import { ValueSetSchemaInternal } from "./ValueSet/ValueSet";
import type { VerificationResult } from "./VerificationResult/VerificationResult";
import { VerificationResultSchemaInternal } from "./VerificationResult/VerificationResult";
import type { VisionPrescription } from "./VisionPrescription/VisionPrescription";
import { VisionPrescriptionSchemaInternal } from "./VisionPrescription/VisionPrescription";

export type FhirResource =
  | Account
  | ActivityDefinition
  | ActorDefinition
  | AdministrableProductDefinition
  | AdverseEvent
  | AllergyIntolerance
  | Appointment
  | AppointmentResponse
  | ArtifactAssessment
  | AuditEvent
  | Basic
  | Binary
  | BiologicallyDerivedProduct
  | BiologicallyDerivedProductDispense
  | BodyStructure
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | ChargeItem
  | ChargeItemDefinition
  | Citation
  | Claim
  | ClaimResponse
  | ClinicalImpression
  | ClinicalUseDefinition
  | CodeSystem
  | Communication
  | CommunicationRequest
  | CompartmentDefinition
  | Composition
  | ConceptMap
  | Condition
  | ConditionDefinition
  | Consent
  | Contract
  | Coverage
  | CoverageEligibilityRequest
  | CoverageEligibilityResponse
  | DetectedIssue
  | Device
  | DeviceAssociation
  | DeviceDefinition
  | DeviceDispense
  | DeviceMetric
  | DeviceRequest
  | DeviceUsage
  | DiagnosticReport
  | DocumentReference
  | Encounter
  | EncounterHistory
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | EventDefinition
  | Evidence
  | EvidenceReport
  | EvidenceVariable
  | ExampleScenario
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | FormularyItem
  | GenomicStudy
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingSelection
  | ImagingStudy
  | Immunization
  | ImmunizationEvaluation
  | ImmunizationRecommendation
  | ImplementationGuide
  | Ingredient
  | InsurancePlan
  | InventoryItem
  | InventoryReport
  | Invoice
  | Library
  | Linkage
  | List
  | Location
  | ManufacturedItemDefinition
  | Measure
  | MeasureReport
  | Medication
  | MedicationAdministration
  | MedicationDispense
  | MedicationKnowledge
  | MedicationRequest
  | MedicationStatement
  | MedicinalProductDefinition
  | MessageDefinition
  | MessageHeader
  | MolecularSequence
  | NamingSystem
  | NutritionIntake
  | NutritionOrder
  | NutritionProduct
  | Observation
  | ObservationDefinition
  | OperationDefinition
  | OperationOutcome
  | Organization
  | OrganizationAffiliation
  | PackagedProductDefinition
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Permission
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | RegulatedAuthorization
  | RelatedPerson
  | RequestOrchestration
  | Requirements
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | Schedule
  | SearchParameter
  | ServiceRequest
  | Slot
  | Specimen
  | SpecimenDefinition
  | StructureDefinition
  | StructureMap
  | Subscription
  | SubscriptionStatus
  | SubscriptionTopic
  | Substance
  | SubstanceDefinition
  | SubstanceNucleicAcid
  | SubstancePolymer
  | SubstanceProtein
  | SubstanceReferenceInformation
  | SubstanceSourceMaterial
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TerminologyCapabilities
  | TestPlan
  | TestReport
  | TestScript
  | Transport
  | ValueSet
  | VerificationResult
  | VisionPrescription;

let resourceSchemas: Readonly<Record<string, z.ZodTypeAny>> | null = null;

function getResourceSchemas(): Readonly<Record<string, z.ZodTypeAny>> {
  resourceSchemas ??= {
    Account: AccountSchemaInternal,
    ActivityDefinition: ActivityDefinitionSchemaInternal,
    ActorDefinition: ActorDefinitionSchemaInternal,
    AdministrableProductDefinition:
      AdministrableProductDefinitionSchemaInternal,
    AdverseEvent: AdverseEventSchemaInternal,
    AllergyIntolerance: AllergyIntoleranceSchemaInternal,
    Appointment: AppointmentSchemaInternal,
    AppointmentResponse: AppointmentResponseSchemaInternal,
    ArtifactAssessment: ArtifactAssessmentSchemaInternal,
    AuditEvent: AuditEventSchemaInternal,
    Basic: BasicSchemaInternal,
    Binary: BinarySchemaInternal,
    BiologicallyDerivedProduct: BiologicallyDerivedProductSchemaInternal,
    BiologicallyDerivedProductDispense:
      BiologicallyDerivedProductDispenseSchemaInternal,
    BodyStructure: BodyStructureSchemaInternal,
    Bundle: BundleSchemaInternal,
    CapabilityStatement: CapabilityStatementSchemaInternal,
    CarePlan: CarePlanSchemaInternal,
    CareTeam: CareTeamSchemaInternal,
    ChargeItem: ChargeItemSchemaInternal,
    ChargeItemDefinition: ChargeItemDefinitionSchemaInternal,
    Citation: CitationSchemaInternal,
    Claim: ClaimSchemaInternal,
    ClaimResponse: ClaimResponseSchemaInternal,
    ClinicalImpression: ClinicalImpressionSchemaInternal,
    ClinicalUseDefinition: ClinicalUseDefinitionSchemaInternal,
    CodeSystem: CodeSystemSchemaInternal,
    Communication: CommunicationSchemaInternal,
    CommunicationRequest: CommunicationRequestSchemaInternal,
    CompartmentDefinition: CompartmentDefinitionSchemaInternal,
    Composition: CompositionSchemaInternal,
    ConceptMap: ConceptMapSchemaInternal,
    Condition: ConditionSchemaInternal,
    ConditionDefinition: ConditionDefinitionSchemaInternal,
    Consent: ConsentSchemaInternal,
    Contract: ContractSchemaInternal,
    Coverage: CoverageSchemaInternal,
    CoverageEligibilityRequest: CoverageEligibilityRequestSchemaInternal,
    CoverageEligibilityResponse: CoverageEligibilityResponseSchemaInternal,
    DetectedIssue: DetectedIssueSchemaInternal,
    Device: DeviceSchemaInternal,
    DeviceAssociation: DeviceAssociationSchemaInternal,
    DeviceDefinition: DeviceDefinitionSchemaInternal,
    DeviceDispense: DeviceDispenseSchemaInternal,
    DeviceMetric: DeviceMetricSchemaInternal,
    DeviceRequest: DeviceRequestSchemaInternal,
    DeviceUsage: DeviceUsageSchemaInternal,
    DiagnosticReport: DiagnosticReportSchemaInternal,
    DocumentReference: DocumentReferenceSchemaInternal,
    Encounter: EncounterSchemaInternal,
    EncounterHistory: EncounterHistorySchemaInternal,
    Endpoint: EndpointSchemaInternal,
    EnrollmentRequest: EnrollmentRequestSchemaInternal,
    EnrollmentResponse: EnrollmentResponseSchemaInternal,
    EpisodeOfCare: EpisodeOfCareSchemaInternal,
    EventDefinition: EventDefinitionSchemaInternal,
    Evidence: EvidenceSchemaInternal,
    EvidenceReport: EvidenceReportSchemaInternal,
    EvidenceVariable: EvidenceVariableSchemaInternal,
    ExampleScenario: ExampleScenarioSchemaInternal,
    ExplanationOfBenefit: ExplanationOfBenefitSchemaInternal,
    FamilyMemberHistory: FamilyMemberHistorySchemaInternal,
    Flag: FlagSchemaInternal,
    FormularyItem: FormularyItemSchemaInternal,
    GenomicStudy: GenomicStudySchemaInternal,
    Goal: GoalSchemaInternal,
    GraphDefinition: GraphDefinitionSchemaInternal,
    Group: GroupSchemaInternal,
    GuidanceResponse: GuidanceResponseSchemaInternal,
    HealthcareService: HealthcareServiceSchemaInternal,
    ImagingSelection: ImagingSelectionSchemaInternal,
    ImagingStudy: ImagingStudySchemaInternal,
    Immunization: ImmunizationSchemaInternal,
    ImmunizationEvaluation: ImmunizationEvaluationSchemaInternal,
    ImmunizationRecommendation: ImmunizationRecommendationSchemaInternal,
    ImplementationGuide: ImplementationGuideSchemaInternal,
    Ingredient: IngredientSchemaInternal,
    InsurancePlan: InsurancePlanSchemaInternal,
    InventoryItem: InventoryItemSchemaInternal,
    InventoryReport: InventoryReportSchemaInternal,
    Invoice: InvoiceSchemaInternal,
    Library: LibrarySchemaInternal,
    Linkage: LinkageSchemaInternal,
    List: ListSchemaInternal,
    Location: LocationSchemaInternal,
    ManufacturedItemDefinition: ManufacturedItemDefinitionSchemaInternal,
    Measure: MeasureSchemaInternal,
    MeasureReport: MeasureReportSchemaInternal,
    Medication: MedicationSchemaInternal,
    MedicationAdministration: MedicationAdministrationSchemaInternal,
    MedicationDispense: MedicationDispenseSchemaInternal,
    MedicationKnowledge: MedicationKnowledgeSchemaInternal,
    MedicationRequest: MedicationRequestSchemaInternal,
    MedicationStatement: MedicationStatementSchemaInternal,
    MedicinalProductDefinition: MedicinalProductDefinitionSchemaInternal,
    MessageDefinition: MessageDefinitionSchemaInternal,
    MessageHeader: MessageHeaderSchemaInternal,
    MolecularSequence: MolecularSequenceSchemaInternal,
    NamingSystem: NamingSystemSchemaInternal,
    NutritionIntake: NutritionIntakeSchemaInternal,
    NutritionOrder: NutritionOrderSchemaInternal,
    NutritionProduct: NutritionProductSchemaInternal,
    Observation: ObservationSchemaInternal,
    ObservationDefinition: ObservationDefinitionSchemaInternal,
    OperationDefinition: OperationDefinitionSchemaInternal,
    OperationOutcome: OperationOutcomeSchemaInternal,
    Organization: OrganizationSchemaInternal,
    OrganizationAffiliation: OrganizationAffiliationSchemaInternal,
    PackagedProductDefinition: PackagedProductDefinitionSchemaInternal,
    Parameters: ParametersSchemaInternal,
    Patient: PatientSchemaInternal,
    PaymentNotice: PaymentNoticeSchemaInternal,
    PaymentReconciliation: PaymentReconciliationSchemaInternal,
    Permission: PermissionSchemaInternal,
    Person: PersonSchemaInternal,
    PlanDefinition: PlanDefinitionSchemaInternal,
    Practitioner: PractitionerSchemaInternal,
    PractitionerRole: PractitionerRoleSchemaInternal,
    Procedure: ProcedureSchemaInternal,
    Provenance: ProvenanceSchemaInternal,
    Questionnaire: QuestionnaireSchemaInternal,
    QuestionnaireResponse: QuestionnaireResponseSchemaInternal,
    RegulatedAuthorization: RegulatedAuthorizationSchemaInternal,
    RelatedPerson: RelatedPersonSchemaInternal,
    RequestOrchestration: RequestOrchestrationSchemaInternal,
    Requirements: RequirementsSchemaInternal,
    ResearchStudy: ResearchStudySchemaInternal,
    ResearchSubject: ResearchSubjectSchemaInternal,
    RiskAssessment: RiskAssessmentSchemaInternal,
    Schedule: ScheduleSchemaInternal,
    SearchParameter: SearchParameterSchemaInternal,
    ServiceRequest: ServiceRequestSchemaInternal,
    Slot: SlotSchemaInternal,
    Specimen: SpecimenSchemaInternal,
    SpecimenDefinition: SpecimenDefinitionSchemaInternal,
    StructureDefinition: StructureDefinitionSchemaInternal,
    StructureMap: StructureMapSchemaInternal,
    Subscription: SubscriptionSchemaInternal,
    SubscriptionStatus: SubscriptionStatusSchemaInternal,
    SubscriptionTopic: SubscriptionTopicSchemaInternal,
    Substance: SubstanceSchemaInternal,
    SubstanceDefinition: SubstanceDefinitionSchemaInternal,
    SubstanceNucleicAcid: SubstanceNucleicAcidSchemaInternal,
    SubstancePolymer: SubstancePolymerSchemaInternal,
    SubstanceProtein: SubstanceProteinSchemaInternal,
    SubstanceReferenceInformation: SubstanceReferenceInformationSchemaInternal,
    SubstanceSourceMaterial: SubstanceSourceMaterialSchemaInternal,
    SupplyDelivery: SupplyDeliverySchemaInternal,
    SupplyRequest: SupplyRequestSchemaInternal,
    Task: TaskSchemaInternal,
    TerminologyCapabilities: TerminologyCapabilitiesSchemaInternal,
    TestPlan: TestPlanSchemaInternal,
    TestReport: TestReportSchemaInternal,
    TestScript: TestScriptSchemaInternal,
    Transport: TransportSchemaInternal,
    ValueSet: ValueSetSchemaInternal,
    VerificationResult: VerificationResultSchemaInternal,
    VisionPrescription: VisionPrescriptionSchemaInternal,
  };

  return resourceSchemas;
}

/** @internal */
export const FhirResourceSchemaInternal = z.lazy(
  (): z.ZodType<FhirResource> =>
    z.any().superRefine((value, ctx) => {
      if (typeof value !== "object" || value === null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Expected a FHIR resource object",
        });
        return;
      }
      const resourceType = (value as { resourceType?: unknown }).resourceType;
      if (typeof resourceType !== "string") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Missing or non-string resourceType",
          path: ["resourceType"],
        });
        return;
      }
      const schema = getResourceSchemas()[resourceType];
      if (!schema) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Unknown FHIR resourceType: ${resourceType}`,
          path: ["resourceType"],
        });
        return;
      }
      const result = schema.safeParse(value);
      if (!result.success) {
        for (const issue of result.error.issues) {
          ctx.addIssue(issue as never);
        }
      }
    }) as unknown as z.ZodType<FhirResource>,
);
