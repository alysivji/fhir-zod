// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

import type { FhirResource as FhirResourceType } from "./_fhirResourceSchema";
export type FhirResource = FhirResourceType;
export type { Address } from "./Address";
export { AddressSchema } from "./Address";
export type { Age } from "./Age";
export { AgeSchema } from "./Age";
export type { Annotation } from "./Annotation";
export { AnnotationSchema } from "./Annotation";
export type { Attachment } from "./Attachment";
export { AttachmentSchema } from "./Attachment";
export type { BackboneElement } from "./BackboneElement";
export { BackboneElementSchema } from "./BackboneElement";
export type { CodeableConcept } from "./CodeableConcept";
export { CodeableConceptSchema } from "./CodeableConcept";
export type { Coding } from "./Coding";
export { CodingSchema } from "./Coding";
export type { ContactDetail } from "./ContactDetail";
export { ContactDetailSchema } from "./ContactDetail";
export type { ContactPoint } from "./ContactPoint";
export { ContactPointSchema } from "./ContactPoint";
export type { Contributor } from "./Contributor";
export { ContributorSchema } from "./Contributor";
export type { Count } from "./Count";
export { CountSchema } from "./Count";
export type { DataRequirement } from "./DataRequirement";
export { DataRequirementSchema } from "./DataRequirement";
export type { DataRequirement_CodeFilter } from "./DataRequirement_CodeFilter";
export { DataRequirement_CodeFilterSchema } from "./DataRequirement_CodeFilter";
export type { DataRequirement_DateFilter } from "./DataRequirement_DateFilter";
export { DataRequirement_DateFilterSchema } from "./DataRequirement_DateFilter";
export type { Distance } from "./Distance";
export { DistanceSchema } from "./Distance";
export type { DomainResource } from "./DomainResource";
export { DomainResourceSchema } from "./DomainResource";
export type { Dosage } from "./Dosage";
export { DosageSchema } from "./Dosage";
export type { Duration } from "./Duration";
export { DurationSchema } from "./Duration";
export type { Element } from "./Element";
export { ElementSchema } from "./Element";
export type { ElementDefinition } from "./ElementDefinition";
export { ElementDefinitionSchema } from "./ElementDefinition";
export type { ElementDefinition_Base } from "./ElementDefinition_Base";
export { ElementDefinition_BaseSchema } from "./ElementDefinition_Base";
export type { ElementDefinition_Binding } from "./ElementDefinition_Binding";
export { ElementDefinition_BindingSchema } from "./ElementDefinition_Binding";
export type { ElementDefinition_Constraint } from "./ElementDefinition_Constraint";
export { ElementDefinition_ConstraintSchema } from "./ElementDefinition_Constraint";
export type { ElementDefinition_Example } from "./ElementDefinition_Example";
export { ElementDefinition_ExampleSchema } from "./ElementDefinition_Example";
export type { ElementDefinition_Mapping } from "./ElementDefinition_Mapping";
export { ElementDefinition_MappingSchema } from "./ElementDefinition_Mapping";
export type { ElementDefinition_Slicing } from "./ElementDefinition_Slicing";
export { ElementDefinition_SlicingSchema } from "./ElementDefinition_Slicing";
export type { ElementDefinition_Slicing_Discriminator } from "./ElementDefinition_Slicing_Discriminator";
export { ElementDefinition_Slicing_DiscriminatorSchema } from "./ElementDefinition_Slicing_Discriminator";
export type { ElementDefinition_Type } from "./ElementDefinition_Type";
export { ElementDefinition_TypeSchema } from "./ElementDefinition_Type";
export type { Extension } from "./Extension";
export { ExtensionSchema } from "./Extension";
export type { HumanName } from "./HumanName";
export { HumanNameSchema } from "./HumanName";
export type { Identifier } from "./Identifier";
export { IdentifierSchema } from "./Identifier";
export type { Meta } from "./Meta";
export { MetaSchema } from "./Meta";
export type { Money } from "./Money";
export { MoneySchema } from "./Money";
export type { Narrative } from "./Narrative";
export { NarrativeSchema } from "./Narrative";
export type { ParameterDefinition } from "./ParameterDefinition";
export { ParameterDefinitionSchema } from "./ParameterDefinition";
export type { Period } from "./Period";
export { PeriodSchema } from "./Period";
export type { Quantity } from "./Quantity";
export { QuantitySchema } from "./Quantity";
export type { Range } from "./Range";
export { RangeSchema } from "./Range";
export type { Ratio } from "./Ratio";
export { RatioSchema } from "./Ratio";
export type { Reference } from "./Reference";
export { ReferenceSchema } from "./Reference";
export type { RelatedArtifact } from "./RelatedArtifact";
export { RelatedArtifactSchema } from "./RelatedArtifact";
export type { Resource } from "./Resource";
export { ResourceSchema } from "./Resource";
export type { SampledData } from "./SampledData";
export { SampledDataSchema } from "./SampledData";
export type { Signature } from "./Signature";
export { SignatureSchema } from "./Signature";
export type { Timing } from "./Timing";
export { TimingSchema } from "./Timing";
export type { Timing_Repeat } from "./Timing_Repeat";
export { Timing_RepeatSchema } from "./Timing_Repeat";
export type { TriggerDefinition } from "./TriggerDefinition";
export { TriggerDefinitionSchema } from "./TriggerDefinition";
export type { UsageContext } from "./UsageContext";
export { UsageContextSchema } from "./UsageContext";

import { _registerFhirResourceSchemas } from "./_fhirResourceSchema";
import { AccountSchemaInternal } from "./Account/Account";
import { ActivityDefinitionSchemaInternal } from "./ActivityDefinition/ActivityDefinition";
import { AdverseEventSchemaInternal } from "./AdverseEvent/AdverseEvent";
import { AllergyIntoleranceSchemaInternal } from "./AllergyIntolerance/AllergyIntolerance";
import { AppointmentSchemaInternal } from "./Appointment/Appointment";
import { AppointmentResponseSchemaInternal } from "./AppointmentResponse/AppointmentResponse";
import { AuditEventSchemaInternal } from "./AuditEvent/AuditEvent";
import { BasicSchemaInternal } from "./Basic/Basic";
import { BinarySchemaInternal } from "./Binary/Binary";
import { BodySiteSchemaInternal } from "./BodySite/BodySite";
import { BundleSchemaInternal } from "./Bundle/Bundle";
import { CapabilityStatementSchemaInternal } from "./CapabilityStatement/CapabilityStatement";
import { CarePlanSchemaInternal } from "./CarePlan/CarePlan";
import { CareTeamSchemaInternal } from "./CareTeam/CareTeam";
import { ChargeItemSchemaInternal } from "./ChargeItem/ChargeItem";
import { ClaimSchemaInternal } from "./Claim/Claim";
import { ClaimResponseSchemaInternal } from "./ClaimResponse/ClaimResponse";
import { ClinicalImpressionSchemaInternal } from "./ClinicalImpression/ClinicalImpression";
import { CodeSystemSchemaInternal } from "./CodeSystem/CodeSystem";
import { CommunicationSchemaInternal } from "./Communication/Communication";
import { CommunicationRequestSchemaInternal } from "./CommunicationRequest/CommunicationRequest";
import { CompartmentDefinitionSchemaInternal } from "./CompartmentDefinition/CompartmentDefinition";
import { CompositionSchemaInternal } from "./Composition/Composition";
import { ConceptMapSchemaInternal } from "./ConceptMap/ConceptMap";
import { ConditionSchemaInternal } from "./Condition/Condition";
import { ConsentSchemaInternal } from "./Consent/Consent";
import { ContractSchemaInternal } from "./Contract/Contract";
import { CoverageSchemaInternal } from "./Coverage/Coverage";
import { DataElementSchemaInternal } from "./DataElement/DataElement";
import { DetectedIssueSchemaInternal } from "./DetectedIssue/DetectedIssue";
import { DeviceSchemaInternal } from "./Device/Device";
import { DeviceComponentSchemaInternal } from "./DeviceComponent/DeviceComponent";
import { DeviceMetricSchemaInternal } from "./DeviceMetric/DeviceMetric";
import { DeviceRequestSchemaInternal } from "./DeviceRequest/DeviceRequest";
import { DeviceUseStatementSchemaInternal } from "./DeviceUseStatement/DeviceUseStatement";
import { DiagnosticReportSchemaInternal } from "./DiagnosticReport/DiagnosticReport";
import { DocumentManifestSchemaInternal } from "./DocumentManifest/DocumentManifest";
import { DocumentReferenceSchemaInternal } from "./DocumentReference/DocumentReference";
import { EligibilityRequestSchemaInternal } from "./EligibilityRequest/EligibilityRequest";
import { EligibilityResponseSchemaInternal } from "./EligibilityResponse/EligibilityResponse";
import { EncounterSchemaInternal } from "./Encounter/Encounter";
import { EndpointSchemaInternal } from "./Endpoint/Endpoint";
import { EnrollmentRequestSchemaInternal } from "./EnrollmentRequest/EnrollmentRequest";
import { EnrollmentResponseSchemaInternal } from "./EnrollmentResponse/EnrollmentResponse";
import { EpisodeOfCareSchemaInternal } from "./EpisodeOfCare/EpisodeOfCare";
import { ExpansionProfileSchemaInternal } from "./ExpansionProfile/ExpansionProfile";
import { ExplanationOfBenefitSchemaInternal } from "./ExplanationOfBenefit/ExplanationOfBenefit";
import { FamilyMemberHistorySchemaInternal } from "./FamilyMemberHistory/FamilyMemberHistory";
import { FlagSchemaInternal } from "./Flag/Flag";
import { GoalSchemaInternal } from "./Goal/Goal";
import { GraphDefinitionSchemaInternal } from "./GraphDefinition/GraphDefinition";
import { GroupSchemaInternal } from "./Group/Group";
import { GuidanceResponseSchemaInternal } from "./GuidanceResponse/GuidanceResponse";
import { HealthcareServiceSchemaInternal } from "./HealthcareService/HealthcareService";
import { ImagingManifestSchemaInternal } from "./ImagingManifest/ImagingManifest";
import { ImagingStudySchemaInternal } from "./ImagingStudy/ImagingStudy";
import { ImmunizationSchemaInternal } from "./Immunization/Immunization";
import { ImmunizationRecommendationSchemaInternal } from "./ImmunizationRecommendation/ImmunizationRecommendation";
import { ImplementationGuideSchemaInternal } from "./ImplementationGuide/ImplementationGuide";
import { LibrarySchemaInternal } from "./Library/Library";
import { LinkageSchemaInternal } from "./Linkage/Linkage";
import { ListSchemaInternal } from "./List/List";
import { LocationSchemaInternal } from "./Location/Location";
import { MeasureSchemaInternal } from "./Measure/Measure";
import { MeasureReportSchemaInternal } from "./MeasureReport/MeasureReport";
import { MediaSchemaInternal } from "./Media/Media";
import { MedicationSchemaInternal } from "./Medication/Medication";
import { MedicationAdministrationSchemaInternal } from "./MedicationAdministration/MedicationAdministration";
import { MedicationDispenseSchemaInternal } from "./MedicationDispense/MedicationDispense";
import { MedicationRequestSchemaInternal } from "./MedicationRequest/MedicationRequest";
import { MedicationStatementSchemaInternal } from "./MedicationStatement/MedicationStatement";
import { MessageDefinitionSchemaInternal } from "./MessageDefinition/MessageDefinition";
import { MessageHeaderSchemaInternal } from "./MessageHeader/MessageHeader";
import { NamingSystemSchemaInternal } from "./NamingSystem/NamingSystem";
import { NutritionOrderSchemaInternal } from "./NutritionOrder/NutritionOrder";
import { ObservationSchemaInternal } from "./Observation/Observation";
import { OperationDefinitionSchemaInternal } from "./OperationDefinition/OperationDefinition";
import { OperationOutcomeSchemaInternal } from "./OperationOutcome/OperationOutcome";
import { OrganizationSchemaInternal } from "./Organization/Organization";
import { ParametersSchemaInternal } from "./Parameters/Parameters";
import { PatientSchemaInternal } from "./Patient/Patient";
import { PaymentNoticeSchemaInternal } from "./PaymentNotice/PaymentNotice";
import { PaymentReconciliationSchemaInternal } from "./PaymentReconciliation/PaymentReconciliation";
import { PersonSchemaInternal } from "./Person/Person";
import { PlanDefinitionSchemaInternal } from "./PlanDefinition/PlanDefinition";
import { PractitionerSchemaInternal } from "./Practitioner/Practitioner";
import { PractitionerRoleSchemaInternal } from "./PractitionerRole/PractitionerRole";
import { ProcedureSchemaInternal } from "./Procedure/Procedure";
import { ProcedureRequestSchemaInternal } from "./ProcedureRequest/ProcedureRequest";
import { ProcessRequestSchemaInternal } from "./ProcessRequest/ProcessRequest";
import { ProcessResponseSchemaInternal } from "./ProcessResponse/ProcessResponse";
import { ProvenanceSchemaInternal } from "./Provenance/Provenance";
import { QuestionnaireSchemaInternal } from "./Questionnaire/Questionnaire";
import { QuestionnaireResponseSchemaInternal } from "./QuestionnaireResponse/QuestionnaireResponse";
import { ReferralRequestSchemaInternal } from "./ReferralRequest/ReferralRequest";
import { RelatedPersonSchemaInternal } from "./RelatedPerson/RelatedPerson";
import { RequestGroupSchemaInternal } from "./RequestGroup/RequestGroup";
import { ResearchStudySchemaInternal } from "./ResearchStudy/ResearchStudy";
import { ResearchSubjectSchemaInternal } from "./ResearchSubject/ResearchSubject";
import { RiskAssessmentSchemaInternal } from "./RiskAssessment/RiskAssessment";
import { ScheduleSchemaInternal } from "./Schedule/Schedule";
import { SearchParameterSchemaInternal } from "./SearchParameter/SearchParameter";
import { SequenceSchemaInternal } from "./Sequence/Sequence";
import { ServiceDefinitionSchemaInternal } from "./ServiceDefinition/ServiceDefinition";
import { SlotSchemaInternal } from "./Slot/Slot";
import { SpecimenSchemaInternal } from "./Specimen/Specimen";
import { StructureDefinitionSchemaInternal } from "./StructureDefinition/StructureDefinition";
import { StructureMapSchemaInternal } from "./StructureMap/StructureMap";
import { SubscriptionSchemaInternal } from "./Subscription/Subscription";
import { SubstanceSchemaInternal } from "./Substance/Substance";
import { SupplyDeliverySchemaInternal } from "./SupplyDelivery/SupplyDelivery";
import { SupplyRequestSchemaInternal } from "./SupplyRequest/SupplyRequest";
import { TaskSchemaInternal } from "./Task/Task";
import { TestReportSchemaInternal } from "./TestReport/TestReport";
import { TestScriptSchemaInternal } from "./TestScript/TestScript";
import { ValueSetSchemaInternal } from "./ValueSet/ValueSet";
import { VisionPrescriptionSchemaInternal } from "./VisionPrescription/VisionPrescription";

_registerFhirResourceSchemas({
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
});
