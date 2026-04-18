// Release: STU3
// Last generated: 2026-04-18T17:06:37.163Z

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
import type { BodySite } from "./BodySite/BodySite";
import { BodySiteSchemaInternal } from "./BodySite/BodySite";
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
import type { DataElement } from "./DataElement/DataElement";
import { DataElementSchemaInternal } from "./DataElement/DataElement";
import type { DetectedIssue } from "./DetectedIssue/DetectedIssue";
import { DetectedIssueSchemaInternal } from "./DetectedIssue/DetectedIssue";
import type { Device } from "./Device/Device";
import { DeviceSchemaInternal } from "./Device/Device";
import type { DeviceComponent } from "./DeviceComponent/DeviceComponent";
import { DeviceComponentSchemaInternal } from "./DeviceComponent/DeviceComponent";
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
import type { EligibilityRequest } from "./EligibilityRequest/EligibilityRequest";
import { EligibilityRequestSchemaInternal } from "./EligibilityRequest/EligibilityRequest";
import type { EligibilityResponse } from "./EligibilityResponse/EligibilityResponse";
import { EligibilityResponseSchemaInternal } from "./EligibilityResponse/EligibilityResponse";
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
import type { ExpansionProfile } from "./ExpansionProfile/ExpansionProfile";
import { ExpansionProfileSchemaInternal } from "./ExpansionProfile/ExpansionProfile";
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
import type { ImagingManifest } from "./ImagingManifest/ImagingManifest";
import { ImagingManifestSchemaInternal } from "./ImagingManifest/ImagingManifest";
import type { ImagingStudy } from "./ImagingStudy/ImagingStudy";
import { ImagingStudySchemaInternal } from "./ImagingStudy/ImagingStudy";
import type { Immunization } from "./Immunization/Immunization";
import { ImmunizationSchemaInternal } from "./Immunization/Immunization";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation/ImmunizationRecommendation";
import { ImmunizationRecommendationSchemaInternal } from "./ImmunizationRecommendation/ImmunizationRecommendation";
import type { ImplementationGuide } from "./ImplementationGuide/ImplementationGuide";
import { ImplementationGuideSchemaInternal } from "./ImplementationGuide/ImplementationGuide";
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
import type { MedicationRequest } from "./MedicationRequest/MedicationRequest";
import { MedicationRequestSchemaInternal } from "./MedicationRequest/MedicationRequest";
import type { MedicationStatement } from "./MedicationStatement/MedicationStatement";
import { MedicationStatementSchemaInternal } from "./MedicationStatement/MedicationStatement";
import type { MessageDefinition } from "./MessageDefinition/MessageDefinition";
import { MessageDefinitionSchemaInternal } from "./MessageDefinition/MessageDefinition";
import type { MessageHeader } from "./MessageHeader/MessageHeader";
import { MessageHeaderSchemaInternal } from "./MessageHeader/MessageHeader";
import type { NamingSystem } from "./NamingSystem/NamingSystem";
import { NamingSystemSchemaInternal } from "./NamingSystem/NamingSystem";
import type { NutritionOrder } from "./NutritionOrder/NutritionOrder";
import { NutritionOrderSchemaInternal } from "./NutritionOrder/NutritionOrder";
import type { Observation } from "./Observation/Observation";
import { ObservationSchemaInternal } from "./Observation/Observation";
import type { OperationDefinition } from "./OperationDefinition/OperationDefinition";
import { OperationDefinitionSchemaInternal } from "./OperationDefinition/OperationDefinition";
import type { OperationOutcome } from "./OperationOutcome/OperationOutcome";
import { OperationOutcomeSchemaInternal } from "./OperationOutcome/OperationOutcome";
import type { Organization } from "./Organization/Organization";
import { OrganizationSchemaInternal } from "./Organization/Organization";
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
import type { ProcedureRequest } from "./ProcedureRequest/ProcedureRequest";
import { ProcedureRequestSchemaInternal } from "./ProcedureRequest/ProcedureRequest";
import type { ProcessRequest } from "./ProcessRequest/ProcessRequest";
import { ProcessRequestSchemaInternal } from "./ProcessRequest/ProcessRequest";
import type { ProcessResponse } from "./ProcessResponse/ProcessResponse";
import { ProcessResponseSchemaInternal } from "./ProcessResponse/ProcessResponse";
import type { Provenance } from "./Provenance/Provenance";
import { ProvenanceSchemaInternal } from "./Provenance/Provenance";
import type { Questionnaire } from "./Questionnaire/Questionnaire";
import { QuestionnaireSchemaInternal } from "./Questionnaire/Questionnaire";
import type { QuestionnaireResponse } from "./QuestionnaireResponse/QuestionnaireResponse";
import { QuestionnaireResponseSchemaInternal } from "./QuestionnaireResponse/QuestionnaireResponse";
import type { ReferralRequest } from "./ReferralRequest/ReferralRequest";
import { ReferralRequestSchemaInternal } from "./ReferralRequest/ReferralRequest";
import type { RelatedPerson } from "./RelatedPerson/RelatedPerson";
import { RelatedPersonSchemaInternal } from "./RelatedPerson/RelatedPerson";
import type { RequestGroup } from "./RequestGroup/RequestGroup";
import { RequestGroupSchemaInternal } from "./RequestGroup/RequestGroup";
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
import type { Sequence } from "./Sequence/Sequence";
import { SequenceSchemaInternal } from "./Sequence/Sequence";
import type { ServiceDefinition } from "./ServiceDefinition/ServiceDefinition";
import { ServiceDefinitionSchemaInternal } from "./ServiceDefinition/ServiceDefinition";
import type { Slot } from "./Slot/Slot";
import { SlotSchemaInternal } from "./Slot/Slot";
import type { Specimen } from "./Specimen/Specimen";
import { SpecimenSchemaInternal } from "./Specimen/Specimen";
import type { StructureDefinition } from "./StructureDefinition/StructureDefinition";
import { StructureDefinitionSchemaInternal } from "./StructureDefinition/StructureDefinition";
import type { StructureMap } from "./StructureMap/StructureMap";
import { StructureMapSchemaInternal } from "./StructureMap/StructureMap";
import type { Subscription } from "./Subscription/Subscription";
import { SubscriptionSchemaInternal } from "./Subscription/Subscription";
import type { Substance } from "./Substance/Substance";
import { SubstanceSchemaInternal } from "./Substance/Substance";
import type { SupplyDelivery } from "./SupplyDelivery/SupplyDelivery";
import { SupplyDeliverySchemaInternal } from "./SupplyDelivery/SupplyDelivery";
import type { SupplyRequest } from "./SupplyRequest/SupplyRequest";
import { SupplyRequestSchemaInternal } from "./SupplyRequest/SupplyRequest";
import type { Task } from "./Task/Task";
import { TaskSchemaInternal } from "./Task/Task";
import type { TestReport } from "./TestReport/TestReport";
import { TestReportSchemaInternal } from "./TestReport/TestReport";
import type { TestScript } from "./TestScript/TestScript";
import { TestScriptSchemaInternal } from "./TestScript/TestScript";
import type { ValueSet } from "./ValueSet/ValueSet";
import { ValueSetSchemaInternal } from "./ValueSet/ValueSet";
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
  | BodySite
  | Bundle
  | CapabilityStatement
  | CarePlan
  | CareTeam
  | ChargeItem
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
  | DataElement
  | DetectedIssue
  | Device
  | DeviceComponent
  | DeviceMetric
  | DeviceRequest
  | DeviceUseStatement
  | DiagnosticReport
  | DocumentManifest
  | DocumentReference
  | EligibilityRequest
  | EligibilityResponse
  | Encounter
  | Endpoint
  | EnrollmentRequest
  | EnrollmentResponse
  | EpisodeOfCare
  | ExpansionProfile
  | ExplanationOfBenefit
  | FamilyMemberHistory
  | Flag
  | Goal
  | GraphDefinition
  | Group
  | GuidanceResponse
  | HealthcareService
  | ImagingManifest
  | ImagingStudy
  | Immunization
  | ImmunizationRecommendation
  | ImplementationGuide
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
  | MedicationRequest
  | MedicationStatement
  | MessageDefinition
  | MessageHeader
  | NamingSystem
  | NutritionOrder
  | Observation
  | OperationDefinition
  | OperationOutcome
  | Organization
  | Parameters
  | Patient
  | PaymentNotice
  | PaymentReconciliation
  | Person
  | PlanDefinition
  | Practitioner
  | PractitionerRole
  | Procedure
  | ProcedureRequest
  | ProcessRequest
  | ProcessResponse
  | Provenance
  | Questionnaire
  | QuestionnaireResponse
  | ReferralRequest
  | RelatedPerson
  | RequestGroup
  | ResearchStudy
  | ResearchSubject
  | RiskAssessment
  | Schedule
  | SearchParameter
  | Sequence
  | ServiceDefinition
  | Slot
  | Specimen
  | StructureDefinition
  | StructureMap
  | Subscription
  | Substance
  | SupplyDelivery
  | SupplyRequest
  | Task
  | TestReport
  | TestScript
  | ValueSet
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
    BodySite: BodySiteSchemaInternal,
    Bundle: BundleSchemaInternal,
    CapabilityStatement: CapabilityStatementSchemaInternal,
    CarePlan: CarePlanSchemaInternal,
    CareTeam: CareTeamSchemaInternal,
    ChargeItem: ChargeItemSchemaInternal,
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
    DataElement: DataElementSchemaInternal,
    DetectedIssue: DetectedIssueSchemaInternal,
    Device: DeviceSchemaInternal,
    DeviceComponent: DeviceComponentSchemaInternal,
    DeviceMetric: DeviceMetricSchemaInternal,
    DeviceRequest: DeviceRequestSchemaInternal,
    DeviceUseStatement: DeviceUseStatementSchemaInternal,
    DiagnosticReport: DiagnosticReportSchemaInternal,
    DocumentManifest: DocumentManifestSchemaInternal,
    DocumentReference: DocumentReferenceSchemaInternal,
    EligibilityRequest: EligibilityRequestSchemaInternal,
    EligibilityResponse: EligibilityResponseSchemaInternal,
    Encounter: EncounterSchemaInternal,
    Endpoint: EndpointSchemaInternal,
    EnrollmentRequest: EnrollmentRequestSchemaInternal,
    EnrollmentResponse: EnrollmentResponseSchemaInternal,
    EpisodeOfCare: EpisodeOfCareSchemaInternal,
    ExpansionProfile: ExpansionProfileSchemaInternal,
    ExplanationOfBenefit: ExplanationOfBenefitSchemaInternal,
    FamilyMemberHistory: FamilyMemberHistorySchemaInternal,
    Flag: FlagSchemaInternal,
    Goal: GoalSchemaInternal,
    GraphDefinition: GraphDefinitionSchemaInternal,
    Group: GroupSchemaInternal,
    GuidanceResponse: GuidanceResponseSchemaInternal,
    HealthcareService: HealthcareServiceSchemaInternal,
    ImagingManifest: ImagingManifestSchemaInternal,
    ImagingStudy: ImagingStudySchemaInternal,
    Immunization: ImmunizationSchemaInternal,
    ImmunizationRecommendation: ImmunizationRecommendationSchemaInternal,
    ImplementationGuide: ImplementationGuideSchemaInternal,
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
    MedicationRequest: MedicationRequestSchemaInternal,
    MedicationStatement: MedicationStatementSchemaInternal,
    MessageDefinition: MessageDefinitionSchemaInternal,
    MessageHeader: MessageHeaderSchemaInternal,
    NamingSystem: NamingSystemSchemaInternal,
    NutritionOrder: NutritionOrderSchemaInternal,
    Observation: ObservationSchemaInternal,
    OperationDefinition: OperationDefinitionSchemaInternal,
    OperationOutcome: OperationOutcomeSchemaInternal,
    Organization: OrganizationSchemaInternal,
    Parameters: ParametersSchemaInternal,
    Patient: PatientSchemaInternal,
    PaymentNotice: PaymentNoticeSchemaInternal,
    PaymentReconciliation: PaymentReconciliationSchemaInternal,
    Person: PersonSchemaInternal,
    PlanDefinition: PlanDefinitionSchemaInternal,
    Practitioner: PractitionerSchemaInternal,
    PractitionerRole: PractitionerRoleSchemaInternal,
    Procedure: ProcedureSchemaInternal,
    ProcedureRequest: ProcedureRequestSchemaInternal,
    ProcessRequest: ProcessRequestSchemaInternal,
    ProcessResponse: ProcessResponseSchemaInternal,
    Provenance: ProvenanceSchemaInternal,
    Questionnaire: QuestionnaireSchemaInternal,
    QuestionnaireResponse: QuestionnaireResponseSchemaInternal,
    ReferralRequest: ReferralRequestSchemaInternal,
    RelatedPerson: RelatedPersonSchemaInternal,
    RequestGroup: RequestGroupSchemaInternal,
    ResearchStudy: ResearchStudySchemaInternal,
    ResearchSubject: ResearchSubjectSchemaInternal,
    RiskAssessment: RiskAssessmentSchemaInternal,
    Schedule: ScheduleSchemaInternal,
    SearchParameter: SearchParameterSchemaInternal,
    Sequence: SequenceSchemaInternal,
    ServiceDefinition: ServiceDefinitionSchemaInternal,
    Slot: SlotSchemaInternal,
    Specimen: SpecimenSchemaInternal,
    StructureDefinition: StructureDefinitionSchemaInternal,
    StructureMap: StructureMapSchemaInternal,
    Subscription: SubscriptionSchemaInternal,
    Substance: SubstanceSchemaInternal,
    SupplyDelivery: SupplyDeliverySchemaInternal,
    SupplyRequest: SupplyRequestSchemaInternal,
    Task: TaskSchemaInternal,
    TestReport: TestReportSchemaInternal,
    TestScript: TestScriptSchemaInternal,
    ValueSet: ValueSetSchemaInternal,
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
