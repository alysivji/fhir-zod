// Release: R4
// Last generated: 2026-04-18T17:06:34.516Z

import * as z from "zod";
import type { Account } from "./Account/Account";
import { AccountSchemaInternal } from "./Account/Account";
import type { ActivityDefinition } from "./ActivityDefinition/ActivityDefinition";
import { ActivityDefinitionSchemaInternal } from "./ActivityDefinition/ActivityDefinition";
import type { AdverseEvent } from "./AdverseEvent/AdverseEvent";
import { AdverseEventSchemaInternal } from "./AdverseEvent/AdverseEvent";
import type { AllergyIntolerance } from "./AllergyIntolerance/AllergyIntolerance";
import { AllergyIntoleranceSchemaInternal } from "./AllergyIntolerance/AllergyIntolerance";
import type { Appointment } from "./Appointment/Appointment";
import { AppointmentSchemaInternal } from "./Appointment/Appointment";
import type { AppointmentResponse } from "./AppointmentResponse/AppointmentResponse";
import { AppointmentResponseSchemaInternal } from "./AppointmentResponse/AppointmentResponse";
import type { AuditEvent } from "./AuditEvent/AuditEvent";
import { AuditEventSchemaInternal } from "./AuditEvent/AuditEvent";
import type { Basic } from "./Basic/Basic";
import { BasicSchemaInternal } from "./Basic/Basic";
import type { Binary } from "./Binary/Binary";
import { BinarySchemaInternal } from "./Binary/Binary";
import type { BiologicallyDerivedProduct } from "./BiologicallyDerivedProduct/BiologicallyDerivedProduct";
import { BiologicallyDerivedProductSchemaInternal } from "./BiologicallyDerivedProduct/BiologicallyDerivedProduct";
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
import type { CatalogEntry } from "./CatalogEntry/CatalogEntry";
import { CatalogEntrySchemaInternal } from "./CatalogEntry/CatalogEntry";
import type { ChargeItem } from "./ChargeItem/ChargeItem";
import { ChargeItemSchemaInternal } from "./ChargeItem/ChargeItem";
import type { ChargeItemDefinition } from "./ChargeItemDefinition/ChargeItemDefinition";
import { ChargeItemDefinitionSchemaInternal } from "./ChargeItemDefinition/ChargeItemDefinition";
import type { Claim } from "./Claim/Claim";
import { ClaimSchemaInternal } from "./Claim/Claim";
import type { ClaimResponse } from "./ClaimResponse/ClaimResponse";
import { ClaimResponseSchemaInternal } from "./ClaimResponse/ClaimResponse";
import type { ClinicalImpression } from "./ClinicalImpression/ClinicalImpression";
import { ClinicalImpressionSchemaInternal } from "./ClinicalImpression/ClinicalImpression";
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
import type { DeviceDefinition } from "./DeviceDefinition/DeviceDefinition";
import { DeviceDefinitionSchemaInternal } from "./DeviceDefinition/DeviceDefinition";
import type { DeviceMetric } from "./DeviceMetric/DeviceMetric";
import { DeviceMetricSchemaInternal } from "./DeviceMetric/DeviceMetric";
import type { DeviceRequest } from "./DeviceRequest/DeviceRequest";
import { DeviceRequestSchemaInternal } from "./DeviceRequest/DeviceRequest";
import type { DeviceUseStatement } from "./DeviceUseStatement/DeviceUseStatement";
import { DeviceUseStatementSchemaInternal } from "./DeviceUseStatement/DeviceUseStatement";
import type { DiagnosticReport } from "./DiagnosticReport/DiagnosticReport";
import { DiagnosticReportSchemaInternal } from "./DiagnosticReport/DiagnosticReport";
import type { DocumentManifest } from "./DocumentManifest/DocumentManifest";
import { DocumentManifestSchemaInternal } from "./DocumentManifest/DocumentManifest";
import type { DocumentReference } from "./DocumentReference/DocumentReference";
import { DocumentReferenceSchemaInternal } from "./DocumentReference/DocumentReference";
import type { EffectEvidenceSynthesis } from "./EffectEvidenceSynthesis/EffectEvidenceSynthesis";
import { EffectEvidenceSynthesisSchemaInternal } from "./EffectEvidenceSynthesis/EffectEvidenceSynthesis";
import type { Encounter } from "./Encounter/Encounter";
import { EncounterSchemaInternal } from "./Encounter/Encounter";
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
import type { InsurancePlan } from "./InsurancePlan/InsurancePlan";
import { InsurancePlanSchemaInternal } from "./InsurancePlan/InsurancePlan";
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
import type { Measure } from "./Measure/Measure";
import { MeasureSchemaInternal } from "./Measure/Measure";
import type { MeasureReport } from "./MeasureReport/MeasureReport";
import { MeasureReportSchemaInternal } from "./MeasureReport/MeasureReport";
import type { Media } from "./Media/Media";
import { MediaSchemaInternal } from "./Media/Media";
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
import type { MedicinalProduct } from "./MedicinalProduct/MedicinalProduct";
import { MedicinalProductSchemaInternal } from "./MedicinalProduct/MedicinalProduct";
import type { MedicinalProductAuthorization } from "./MedicinalProductAuthorization/MedicinalProductAuthorization";
import { MedicinalProductAuthorizationSchemaInternal } from "./MedicinalProductAuthorization/MedicinalProductAuthorization";
import type { MedicinalProductContraindication } from "./MedicinalProductContraindication/MedicinalProductContraindication";
import { MedicinalProductContraindicationSchemaInternal } from "./MedicinalProductContraindication/MedicinalProductContraindication";
import type { MedicinalProductIndication } from "./MedicinalProductIndication/MedicinalProductIndication";
import { MedicinalProductIndicationSchemaInternal } from "./MedicinalProductIndication/MedicinalProductIndication";
import type { MedicinalProductIngredient } from "./MedicinalProductIngredient/MedicinalProductIngredient";
import { MedicinalProductIngredientSchemaInternal } from "./MedicinalProductIngredient/MedicinalProductIngredient";
import type { MedicinalProductInteraction } from "./MedicinalProductInteraction/MedicinalProductInteraction";
import { MedicinalProductInteractionSchemaInternal } from "./MedicinalProductInteraction/MedicinalProductInteraction";
import type { MedicinalProductManufactured } from "./MedicinalProductManufactured/MedicinalProductManufactured";
import { MedicinalProductManufacturedSchemaInternal } from "./MedicinalProductManufactured/MedicinalProductManufactured";
import type { MedicinalProductPackaged } from "./MedicinalProductPackaged/MedicinalProductPackaged";
import { MedicinalProductPackagedSchemaInternal } from "./MedicinalProductPackaged/MedicinalProductPackaged";
import type { MedicinalProductPharmaceutical } from "./MedicinalProductPharmaceutical/MedicinalProductPharmaceutical";
import { MedicinalProductPharmaceuticalSchemaInternal } from "./MedicinalProductPharmaceutical/MedicinalProductPharmaceutical";
import type { MedicinalProductUndesirableEffect } from "./MedicinalProductUndesirableEffect/MedicinalProductUndesirableEffect";
import { MedicinalProductUndesirableEffectSchemaInternal } from "./MedicinalProductUndesirableEffect/MedicinalProductUndesirableEffect";
import type { MessageDefinition } from "./MessageDefinition/MessageDefinition";
import { MessageDefinitionSchemaInternal } from "./MessageDefinition/MessageDefinition";
import type { MessageHeader } from "./MessageHeader/MessageHeader";
import { MessageHeaderSchemaInternal } from "./MessageHeader/MessageHeader";
import type { MolecularSequence } from "./MolecularSequence/MolecularSequence";
import { MolecularSequenceSchemaInternal } from "./MolecularSequence/MolecularSequence";
import type { NamingSystem } from "./NamingSystem/NamingSystem";
import { NamingSystemSchemaInternal } from "./NamingSystem/NamingSystem";
import type { NutritionOrder } from "./NutritionOrder/NutritionOrder";
import { NutritionOrderSchemaInternal } from "./NutritionOrder/NutritionOrder";
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
import type { Parameters } from "./Parameters/Parameters";
import { ParametersSchemaInternal } from "./Parameters/Parameters";
import type { Patient } from "./Patient/Patient";
import { PatientSchemaInternal } from "./Patient/Patient";
import type { PaymentNotice } from "./PaymentNotice/PaymentNotice";
import { PaymentNoticeSchemaInternal } from "./PaymentNotice/PaymentNotice";
import type { PaymentReconciliation } from "./PaymentReconciliation/PaymentReconciliation";
import { PaymentReconciliationSchemaInternal } from "./PaymentReconciliation/PaymentReconciliation";
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
import type { RelatedPerson } from "./RelatedPerson/RelatedPerson";
import { RelatedPersonSchemaInternal } from "./RelatedPerson/RelatedPerson";
import type { RequestGroup } from "./RequestGroup/RequestGroup";
import { RequestGroupSchemaInternal } from "./RequestGroup/RequestGroup";
import type { ResearchDefinition } from "./ResearchDefinition/ResearchDefinition";
import { ResearchDefinitionSchemaInternal } from "./ResearchDefinition/ResearchDefinition";
import type { ResearchElementDefinition } from "./ResearchElementDefinition/ResearchElementDefinition";
import { ResearchElementDefinitionSchemaInternal } from "./ResearchElementDefinition/ResearchElementDefinition";
import type { ResearchStudy } from "./ResearchStudy/ResearchStudy";
import { ResearchStudySchemaInternal } from "./ResearchStudy/ResearchStudy";
import type { ResearchSubject } from "./ResearchSubject/ResearchSubject";
import { ResearchSubjectSchemaInternal } from "./ResearchSubject/ResearchSubject";
import type { RiskAssessment } from "./RiskAssessment/RiskAssessment";
import { RiskAssessmentSchemaInternal } from "./RiskAssessment/RiskAssessment";
import type { RiskEvidenceSynthesis } from "./RiskEvidenceSynthesis/RiskEvidenceSynthesis";
import { RiskEvidenceSynthesisSchemaInternal } from "./RiskEvidenceSynthesis/RiskEvidenceSynthesis";
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
import type { Substance } from "./Substance/Substance";
import { SubstanceSchemaInternal } from "./Substance/Substance";
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
import type { SubstanceSpecification } from "./SubstanceSpecification/SubstanceSpecification";
import { SubstanceSpecificationSchemaInternal } from "./SubstanceSpecification/SubstanceSpecification";
import type { SupplyDelivery } from "./SupplyDelivery/SupplyDelivery";
import { SupplyDeliverySchemaInternal } from "./SupplyDelivery/SupplyDelivery";
import type { SupplyRequest } from "./SupplyRequest/SupplyRequest";
import { SupplyRequestSchemaInternal } from "./SupplyRequest/SupplyRequest";
import type { Task } from "./Task/Task";
import { TaskSchemaInternal } from "./Task/Task";
import type { TerminologyCapabilities } from "./TerminologyCapabilities/TerminologyCapabilities";
import { TerminologyCapabilitiesSchemaInternal } from "./TerminologyCapabilities/TerminologyCapabilities";
import type { TestReport } from "./TestReport/TestReport";
import { TestReportSchemaInternal } from "./TestReport/TestReport";
import type { TestScript } from "./TestScript/TestScript";
import { TestScriptSchemaInternal } from "./TestScript/TestScript";
import type { ValueSet } from "./ValueSet/ValueSet";
import { ValueSetSchemaInternal } from "./ValueSet/ValueSet";
import type { VerificationResult } from "./VerificationResult/VerificationResult";
import { VerificationResultSchemaInternal } from "./VerificationResult/VerificationResult";
import type { VisionPrescription } from "./VisionPrescription/VisionPrescription";
import { VisionPrescriptionSchemaInternal } from "./VisionPrescription/VisionPrescription";

export type FhirResource =
  | Account
  | ActivityDefinition
  | AdverseEvent
  | AllergyIntolerance
  | Appointment
  | AppointmentResponse
  | AuditEvent
  | Basic
  | Binary
  | BiologicallyDerivedProduct
  | BodyStructure
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | CatalogEntry
  | ChargeItem
  | ChargeItemDefinition
  | Claim
  | ClaimResponse
  | ClinicalImpression
  | CodeSystem
  | Communication
  | CommunicationRequest
  | CompartmentDefinition
  | Composition
  | ConceptMap
  | Condition
  | Consent
  | Contract
  | Coverage
  | CoverageEligibilityRequest
  | CoverageEligibilityResponse
  | DetectedIssue
  | Device
  | DeviceDefinition
  | DeviceMetric
  | DeviceRequest
  | DeviceUseStatement
  | DiagnosticReport
  | DocumentManifest
  | DocumentReference
  | EffectEvidenceSynthesis
  | Encounter
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | EventDefinition
  | Evidence
  | EvidenceVariable
  | ExampleScenario
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingStudy
  | Immunization
  | ImmunizationEvaluation
  | ImmunizationRecommendation
  | ImplementationGuide
  | InsurancePlan
  | Invoice
  | Library
  | Linkage
  | List
  | Location
  | Measure
  | MeasureReport
  | Media
  | Medication
  | MedicationAdministration
  | MedicationDispense
  | MedicationKnowledge
  | MedicationRequest
  | MedicationStatement
  | MedicinalProduct
  | MedicinalProductAuthorization
  | MedicinalProductContraindication
  | MedicinalProductIndication
  | MedicinalProductIngredient
  | MedicinalProductInteraction
  | MedicinalProductManufactured
  | MedicinalProductPackaged
  | MedicinalProductPharmaceutical
  | MedicinalProductUndesirableEffect
  | MessageDefinition
  | MessageHeader
  | MolecularSequence
  | NamingSystem
  | NutritionOrder
  | Observation
  | ObservationDefinition
  | OperationDefinition
  | OperationOutcome
  | Organization
  | OrganizationAffiliation
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | RelatedPerson
  | RequestGroup
  | ResearchDefinition
  | ResearchElementDefinition
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | RiskEvidenceSynthesis
  | Schedule
  | SearchParameter
  | ServiceRequest
  | Slot
  | Specimen
  | SpecimenDefinition
  | StructureDefinition
  | StructureMap
  | Subscription
  | Substance
  | SubstanceNucleicAcid
  | SubstancePolymer
  | SubstanceProtein
  | SubstanceReferenceInformation
  | SubstanceSourceMaterial
  | SubstanceSpecification
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TerminologyCapabilities
  | TestReport
  | TestScript
  | ValueSet
  | VerificationResult
  | VisionPrescription;

let resourceSchemas: Readonly<Record<string, z.ZodTypeAny>> | null = null;

function getResourceSchemas(): Readonly<Record<string, z.ZodTypeAny>> {
  resourceSchemas ??= {
    Account: AccountSchemaInternal,
    ActivityDefinition: ActivityDefinitionSchemaInternal,
    AdverseEvent: AdverseEventSchemaInternal,
    AllergyIntolerance: AllergyIntoleranceSchemaInternal,
    Appointment: AppointmentSchemaInternal,
    AppointmentResponse: AppointmentResponseSchemaInternal,
    AuditEvent: AuditEventSchemaInternal,
    Basic: BasicSchemaInternal,
    Binary: BinarySchemaInternal,
    BiologicallyDerivedProduct: BiologicallyDerivedProductSchemaInternal,
    BodyStructure: BodyStructureSchemaInternal,
    Bundle: BundleSchemaInternal,
    CapabilityStatement: CapabilityStatementSchemaInternal,
    CarePlan: CarePlanSchemaInternal,
    CareTeam: CareTeamSchemaInternal,
    CatalogEntry: CatalogEntrySchemaInternal,
    ChargeItem: ChargeItemSchemaInternal,
    ChargeItemDefinition: ChargeItemDefinitionSchemaInternal,
    Claim: ClaimSchemaInternal,
    ClaimResponse: ClaimResponseSchemaInternal,
    ClinicalImpression: ClinicalImpressionSchemaInternal,
    CodeSystem: CodeSystemSchemaInternal,
    Communication: CommunicationSchemaInternal,
    CommunicationRequest: CommunicationRequestSchemaInternal,
    CompartmentDefinition: CompartmentDefinitionSchemaInternal,
    Composition: CompositionSchemaInternal,
    ConceptMap: ConceptMapSchemaInternal,
    Condition: ConditionSchemaInternal,
    Consent: ConsentSchemaInternal,
    Contract: ContractSchemaInternal,
    Coverage: CoverageSchemaInternal,
    CoverageEligibilityRequest: CoverageEligibilityRequestSchemaInternal,
    CoverageEligibilityResponse: CoverageEligibilityResponseSchemaInternal,
    DetectedIssue: DetectedIssueSchemaInternal,
    Device: DeviceSchemaInternal,
    DeviceDefinition: DeviceDefinitionSchemaInternal,
    DeviceMetric: DeviceMetricSchemaInternal,
    DeviceRequest: DeviceRequestSchemaInternal,
    DeviceUseStatement: DeviceUseStatementSchemaInternal,
    DiagnosticReport: DiagnosticReportSchemaInternal,
    DocumentManifest: DocumentManifestSchemaInternal,
    DocumentReference: DocumentReferenceSchemaInternal,
    EffectEvidenceSynthesis: EffectEvidenceSynthesisSchemaInternal,
    Encounter: EncounterSchemaInternal,
    Endpoint: EndpointSchemaInternal,
    EnrollmentRequest: EnrollmentRequestSchemaInternal,
    EnrollmentResponse: EnrollmentResponseSchemaInternal,
    EpisodeOfCare: EpisodeOfCareSchemaInternal,
    EventDefinition: EventDefinitionSchemaInternal,
    Evidence: EvidenceSchemaInternal,
    EvidenceVariable: EvidenceVariableSchemaInternal,
    ExampleScenario: ExampleScenarioSchemaInternal,
    ExplanationOfBenefit: ExplanationOfBenefitSchemaInternal,
    FamilyMemberHistory: FamilyMemberHistorySchemaInternal,
    Flag: FlagSchemaInternal,
    Goal: GoalSchemaInternal,
    GraphDefinition: GraphDefinitionSchemaInternal,
    Group: GroupSchemaInternal,
    GuidanceResponse: GuidanceResponseSchemaInternal,
    HealthcareService: HealthcareServiceSchemaInternal,
    ImagingStudy: ImagingStudySchemaInternal,
    Immunization: ImmunizationSchemaInternal,
    ImmunizationEvaluation: ImmunizationEvaluationSchemaInternal,
    ImmunizationRecommendation: ImmunizationRecommendationSchemaInternal,
    ImplementationGuide: ImplementationGuideSchemaInternal,
    InsurancePlan: InsurancePlanSchemaInternal,
    Invoice: InvoiceSchemaInternal,
    Library: LibrarySchemaInternal,
    Linkage: LinkageSchemaInternal,
    List: ListSchemaInternal,
    Location: LocationSchemaInternal,
    Measure: MeasureSchemaInternal,
    MeasureReport: MeasureReportSchemaInternal,
    Media: MediaSchemaInternal,
    Medication: MedicationSchemaInternal,
    MedicationAdministration: MedicationAdministrationSchemaInternal,
    MedicationDispense: MedicationDispenseSchemaInternal,
    MedicationKnowledge: MedicationKnowledgeSchemaInternal,
    MedicationRequest: MedicationRequestSchemaInternal,
    MedicationStatement: MedicationStatementSchemaInternal,
    MedicinalProduct: MedicinalProductSchemaInternal,
    MedicinalProductAuthorization: MedicinalProductAuthorizationSchemaInternal,
    MedicinalProductContraindication:
      MedicinalProductContraindicationSchemaInternal,
    MedicinalProductIndication: MedicinalProductIndicationSchemaInternal,
    MedicinalProductIngredient: MedicinalProductIngredientSchemaInternal,
    MedicinalProductInteraction: MedicinalProductInteractionSchemaInternal,
    MedicinalProductManufactured: MedicinalProductManufacturedSchemaInternal,
    MedicinalProductPackaged: MedicinalProductPackagedSchemaInternal,
    MedicinalProductPharmaceutical:
      MedicinalProductPharmaceuticalSchemaInternal,
    MedicinalProductUndesirableEffect:
      MedicinalProductUndesirableEffectSchemaInternal,
    MessageDefinition: MessageDefinitionSchemaInternal,
    MessageHeader: MessageHeaderSchemaInternal,
    MolecularSequence: MolecularSequenceSchemaInternal,
    NamingSystem: NamingSystemSchemaInternal,
    NutritionOrder: NutritionOrderSchemaInternal,
    Observation: ObservationSchemaInternal,
    ObservationDefinition: ObservationDefinitionSchemaInternal,
    OperationDefinition: OperationDefinitionSchemaInternal,
    OperationOutcome: OperationOutcomeSchemaInternal,
    Organization: OrganizationSchemaInternal,
    OrganizationAffiliation: OrganizationAffiliationSchemaInternal,
    Parameters: ParametersSchemaInternal,
    Patient: PatientSchemaInternal,
    PaymentNotice: PaymentNoticeSchemaInternal,
    PaymentReconciliation: PaymentReconciliationSchemaInternal,
    Person: PersonSchemaInternal,
    PlanDefinition: PlanDefinitionSchemaInternal,
    Practitioner: PractitionerSchemaInternal,
    PractitionerRole: PractitionerRoleSchemaInternal,
    Procedure: ProcedureSchemaInternal,
    Provenance: ProvenanceSchemaInternal,
    Questionnaire: QuestionnaireSchemaInternal,
    QuestionnaireResponse: QuestionnaireResponseSchemaInternal,
    RelatedPerson: RelatedPersonSchemaInternal,
    RequestGroup: RequestGroupSchemaInternal,
    ResearchDefinition: ResearchDefinitionSchemaInternal,
    ResearchElementDefinition: ResearchElementDefinitionSchemaInternal,
    ResearchStudy: ResearchStudySchemaInternal,
    ResearchSubject: ResearchSubjectSchemaInternal,
    RiskAssessment: RiskAssessmentSchemaInternal,
    RiskEvidenceSynthesis: RiskEvidenceSynthesisSchemaInternal,
    Schedule: ScheduleSchemaInternal,
    SearchParameter: SearchParameterSchemaInternal,
    ServiceRequest: ServiceRequestSchemaInternal,
    Slot: SlotSchemaInternal,
    Specimen: SpecimenSchemaInternal,
    SpecimenDefinition: SpecimenDefinitionSchemaInternal,
    StructureDefinition: StructureDefinitionSchemaInternal,
    StructureMap: StructureMapSchemaInternal,
    Subscription: SubscriptionSchemaInternal,
    Substance: SubstanceSchemaInternal,
    SubstanceNucleicAcid: SubstanceNucleicAcidSchemaInternal,
    SubstancePolymer: SubstancePolymerSchemaInternal,
    SubstanceProtein: SubstanceProteinSchemaInternal,
    SubstanceReferenceInformation: SubstanceReferenceInformationSchemaInternal,
    SubstanceSourceMaterial: SubstanceSourceMaterialSchemaInternal,
    SubstanceSpecification: SubstanceSpecificationSchemaInternal,
    SupplyDelivery: SupplyDeliverySchemaInternal,
    SupplyRequest: SupplyRequestSchemaInternal,
    Task: TaskSchemaInternal,
    TerminologyCapabilities: TerminologyCapabilitiesSchemaInternal,
    TestReport: TestReportSchemaInternal,
    TestScript: TestScriptSchemaInternal,
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
