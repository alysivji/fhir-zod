// Release: R5
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { Account } from "./Account";
import type { ActivityDefinition } from "./ActivityDefinition";
import type { ActorDefinition } from "./ActorDefinition";
import type { AdministrableProductDefinition } from "./AdministrableProductDefinition";
import type { AdverseEvent } from "./AdverseEvent";
import type { AllergyIntolerance } from "./AllergyIntolerance";
import type { Appointment } from "./Appointment";
import type { AppointmentResponse } from "./AppointmentResponse";
import type { ArtifactAssessment } from "./ArtifactAssessment";
import type { AuditEvent } from "./AuditEvent";
import type { Basic } from "./Basic";
import type { Binary } from "./Binary";
import type { BiologicallyDerivedProduct } from "./BiologicallyDerivedProduct";
import type { BiologicallyDerivedProductDispense } from "./BiologicallyDerivedProductDispense";
import type { BodyStructure } from "./BodyStructure";
import type { Bundle } from "./Bundle";
import type { CapabilityStatement } from "./CapabilityStatement";
import type { CarePlan } from "./CarePlan";
import type { CareTeam } from "./CareTeam";
import type { ChargeItem } from "./ChargeItem";
import type { ChargeItemDefinition } from "./ChargeItemDefinition";
import type { Citation } from "./Citation";
import type { Claim } from "./Claim";
import type { ClaimResponse } from "./ClaimResponse";
import type { ClinicalImpression } from "./ClinicalImpression";
import type { ClinicalUseDefinition } from "./ClinicalUseDefinition";
import type { CodeSystem } from "./CodeSystem";
import type { Communication } from "./Communication";
import type { CommunicationRequest } from "./CommunicationRequest";
import type { CompartmentDefinition } from "./CompartmentDefinition";
import type { Composition } from "./Composition";
import type { ConceptMap } from "./ConceptMap";
import type { Condition } from "./Condition";
import type { ConditionDefinition } from "./ConditionDefinition";
import type { Consent } from "./Consent";
import type { Contract } from "./Contract";
import type { Coverage } from "./Coverage";
import type { CoverageEligibilityRequest } from "./CoverageEligibilityRequest";
import type { CoverageEligibilityResponse } from "./CoverageEligibilityResponse";
import type { DetectedIssue } from "./DetectedIssue";
import type { Device } from "./Device";
import type { DeviceAssociation } from "./DeviceAssociation";
import type { DeviceDefinition } from "./DeviceDefinition";
import type { DeviceDispense } from "./DeviceDispense";
import type { DeviceMetric } from "./DeviceMetric";
import type { DeviceRequest } from "./DeviceRequest";
import type { DeviceUsage } from "./DeviceUsage";
import type { DiagnosticReport } from "./DiagnosticReport";
import type { DocumentReference } from "./DocumentReference";
import type { Encounter } from "./Encounter";
import type { EncounterHistory } from "./EncounterHistory";
import type { Endpoint } from "./Endpoint";
import type { EnrollmentRequest } from "./EnrollmentRequest";
import type { EnrollmentResponse } from "./EnrollmentResponse";
import type { EpisodeOfCare } from "./EpisodeOfCare";
import type { EventDefinition } from "./EventDefinition";
import type { Evidence } from "./Evidence";
import type { EvidenceReport } from "./EvidenceReport";
import type { EvidenceVariable } from "./EvidenceVariable";
import type { ExampleScenario } from "./ExampleScenario";
import type { ExplanationOfBenefit } from "./ExplanationOfBenefit";
import type { FamilyMemberHistory } from "./FamilyMemberHistory";
import type { Flag } from "./Flag";
import type { FormularyItem } from "./FormularyItem";
import type { GenomicStudy } from "./GenomicStudy";
import type { Goal } from "./Goal";
import type { GraphDefinition } from "./GraphDefinition";
import type { Group } from "./Group";
import type { GuidanceResponse } from "./GuidanceResponse";
import type { HealthcareService } from "./HealthcareService";
import type { ImagingSelection } from "./ImagingSelection";
import type { ImagingStudy } from "./ImagingStudy";
import type { Immunization } from "./Immunization";
import type { ImmunizationEvaluation } from "./ImmunizationEvaluation";
import type { ImmunizationRecommendation } from "./ImmunizationRecommendation";
import type { ImplementationGuide } from "./ImplementationGuide";
import type { Ingredient } from "./Ingredient";
import type { InsurancePlan } from "./InsurancePlan";
import type { InventoryItem } from "./InventoryItem";
import type { InventoryReport } from "./InventoryReport";
import type { Invoice } from "./Invoice";
import type { Library } from "./Library";
import type { Linkage } from "./Linkage";
import type { List } from "./List";
import type { Location } from "./Location";
import type { ManufacturedItemDefinition } from "./ManufacturedItemDefinition";
import type { Measure } from "./Measure";
import type { MeasureReport } from "./MeasureReport";
import type { Medication } from "./Medication";
import type { MedicationAdministration } from "./MedicationAdministration";
import type { MedicationDispense } from "./MedicationDispense";
import type { MedicationKnowledge } from "./MedicationKnowledge";
import type { MedicationRequest } from "./MedicationRequest";
import type { MedicationStatement } from "./MedicationStatement";
import type { MedicinalProductDefinition } from "./MedicinalProductDefinition";
import type { MessageDefinition } from "./MessageDefinition";
import type { MessageHeader } from "./MessageHeader";
import type { MolecularSequence } from "./MolecularSequence";
import type { NamingSystem } from "./NamingSystem";
import type { NutritionIntake } from "./NutritionIntake";
import type { NutritionOrder } from "./NutritionOrder";
import type { NutritionProduct } from "./NutritionProduct";
import type { Observation } from "./Observation";
import type { ObservationDefinition } from "./ObservationDefinition";
import type { OperationDefinition } from "./OperationDefinition";
import type { OperationOutcome } from "./OperationOutcome";
import type { Organization } from "./Organization";
import type { OrganizationAffiliation } from "./OrganizationAffiliation";
import type { PackagedProductDefinition } from "./PackagedProductDefinition";
import type { Parameters } from "./Parameters";
import type { Patient } from "./Patient";
import type { PaymentNotice } from "./PaymentNotice";
import type { PaymentReconciliation } from "./PaymentReconciliation";
import type { Permission } from "./Permission";
import type { Person } from "./Person";
import type { PlanDefinition } from "./PlanDefinition";
import type { Practitioner } from "./Practitioner";
import type { PractitionerRole } from "./PractitionerRole";
import type { Procedure } from "./Procedure";
import type { Provenance } from "./Provenance";
import type { Questionnaire } from "./Questionnaire";
import type { QuestionnaireResponse } from "./QuestionnaireResponse";
import type { RegulatedAuthorization } from "./RegulatedAuthorization";
import type { RelatedPerson } from "./RelatedPerson";
import type { RequestOrchestration } from "./RequestOrchestration";
import type { Requirements } from "./Requirements";
import type { ResearchStudy } from "./ResearchStudy";
import type { ResearchSubject } from "./ResearchSubject";
import type { RiskAssessment } from "./RiskAssessment";
import type { Schedule } from "./Schedule";
import type { SearchParameter } from "./SearchParameter";
import type { ServiceRequest } from "./ServiceRequest";
import type { Slot } from "./Slot";
import type { Specimen } from "./Specimen";
import type { SpecimenDefinition } from "./SpecimenDefinition";
import type { StructureDefinition } from "./StructureDefinition";
import type { StructureMap } from "./StructureMap";
import type { Subscription } from "./Subscription";
import type { SubscriptionStatus } from "./SubscriptionStatus";
import type { SubscriptionTopic } from "./SubscriptionTopic";
import type { Substance } from "./Substance";
import type { SubstanceDefinition } from "./SubstanceDefinition";
import type { SubstanceNucleicAcid } from "./SubstanceNucleicAcid";
import type { SubstancePolymer } from "./SubstancePolymer";
import type { SubstanceProtein } from "./SubstanceProtein";
import type { SubstanceReferenceInformation } from "./SubstanceReferenceInformation";
import type { SubstanceSourceMaterial } from "./SubstanceSourceMaterial";
import type { SupplyDelivery } from "./SupplyDelivery";
import type { SupplyRequest } from "./SupplyRequest";
import type { Task } from "./Task";
import type { TerminologyCapabilities } from "./TerminologyCapabilities";
import type { TestPlan } from "./TestPlan";
import type { TestReport } from "./TestReport";
import type { TestScript } from "./TestScript";
import type { Transport } from "./Transport";
import type { ValueSet } from "./ValueSet";
import type { VerificationResult } from "./VerificationResult";
import type { VisionPrescription } from "./VisionPrescription";

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

const registry = new Map<string, z.ZodTypeAny>();

/** @internal */
export function _registerFhirResourceSchemas(
  entries: Readonly<Record<string, z.ZodTypeAny>>,
): void {
  for (const [resourceType, schema] of Object.entries(entries)) {
    registry.set(resourceType, schema);
  }
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
      const schema = registry.get(resourceType);
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
