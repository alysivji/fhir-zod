// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A set of profiles that all resources covered by this implementation guide must conform to. */
export interface ImplementationGuide_Global extends BackboneElement {
  /** A reference to the profile that all instances must conform to. */
  profile: Reference;
  /** The type of resource that all instances must conform to. */
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
    | "BodySite"
    | "Bundle"
    | "CapabilityStatement"
    | "CarePlan"
    | "CareTeam"
    | "ChargeItem"
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
    | "DataElement"
    | "DetectedIssue"
    | "Device"
    | "DeviceComponent"
    | "DeviceMetric"
    | "DeviceRequest"
    | "DeviceUseStatement"
    | "DiagnosticReport"
    | "DocumentManifest"
    | "DocumentReference"
    | "DomainResource"
    | "EligibilityRequest"
    | "EligibilityResponse"
    | "Encounter"
    | "Endpoint"
    | "EnrollmentRequest"
    | "EnrollmentResponse"
    | "EpisodeOfCare"
    | "ExpansionProfile"
    | "ExplanationOfBenefit"
    | "FamilyMemberHistory"
    | "Flag"
    | "Goal"
    | "GraphDefinition"
    | "Group"
    | "GuidanceResponse"
    | "HealthcareService"
    | "ImagingManifest"
    | "ImagingStudy"
    | "Immunization"
    | "ImmunizationRecommendation"
    | "ImplementationGuide"
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
    | "MedicationRequest"
    | "MedicationStatement"
    | "MessageDefinition"
    | "MessageHeader"
    | "NamingSystem"
    | "NutritionOrder"
    | "Observation"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "Parameters"
    | "Patient"
    | "PaymentNotice"
    | "PaymentReconciliation"
    | "Person"
    | "PlanDefinition"
    | "Practitioner"
    | "PractitionerRole"
    | "Procedure"
    | "ProcedureRequest"
    | "ProcessRequest"
    | "ProcessResponse"
    | "Provenance"
    | "Questionnaire"
    | "QuestionnaireResponse"
    | "ReferralRequest"
    | "RelatedPerson"
    | "RequestGroup"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "Schedule"
    | "SearchParameter"
    | "Sequence"
    | "ServiceDefinition"
    | "Slot"
    | "Specimen"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "Substance"
    | "SupplyDelivery"
    | "SupplyRequest"
    | "Task"
    | "TestReport"
    | "TestScript"
    | "ValueSet"
    | "VisionPrescription";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImplementationGuide_GlobalSchemaInternal =
  BackboneElementSchemaInternal.extend({
    profile: z.lazy(getReferenceSchema),
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
      "BodySite",
      "Bundle",
      "CapabilityStatement",
      "CarePlan",
      "CareTeam",
      "ChargeItem",
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
      "DataElement",
      "DetectedIssue",
      "Device",
      "DeviceComponent",
      "DeviceMetric",
      "DeviceRequest",
      "DeviceUseStatement",
      "DiagnosticReport",
      "DocumentManifest",
      "DocumentReference",
      "DomainResource",
      "EligibilityRequest",
      "EligibilityResponse",
      "Encounter",
      "Endpoint",
      "EnrollmentRequest",
      "EnrollmentResponse",
      "EpisodeOfCare",
      "ExpansionProfile",
      "ExplanationOfBenefit",
      "FamilyMemberHistory",
      "Flag",
      "Goal",
      "GraphDefinition",
      "Group",
      "GuidanceResponse",
      "HealthcareService",
      "ImagingManifest",
      "ImagingStudy",
      "Immunization",
      "ImmunizationRecommendation",
      "ImplementationGuide",
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
      "MedicationRequest",
      "MedicationStatement",
      "MessageDefinition",
      "MessageHeader",
      "NamingSystem",
      "NutritionOrder",
      "Observation",
      "OperationDefinition",
      "OperationOutcome",
      "Organization",
      "Parameters",
      "Patient",
      "PaymentNotice",
      "PaymentReconciliation",
      "Person",
      "PlanDefinition",
      "Practitioner",
      "PractitionerRole",
      "Procedure",
      "ProcedureRequest",
      "ProcessRequest",
      "ProcessResponse",
      "Provenance",
      "Questionnaire",
      "QuestionnaireResponse",
      "ReferralRequest",
      "RelatedPerson",
      "RequestGroup",
      "ResearchStudy",
      "ResearchSubject",
      "Resource",
      "RiskAssessment",
      "Schedule",
      "SearchParameter",
      "Sequence",
      "ServiceDefinition",
      "Slot",
      "Specimen",
      "StructureDefinition",
      "StructureMap",
      "Subscription",
      "Substance",
      "SupplyDelivery",
      "SupplyRequest",
      "Task",
      "TestReport",
      "TestScript",
      "ValueSet",
      "VisionPrescription",
    ]),
    _type: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.profile,
        "profile",
        ["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
        ["StructureDefinition"],
        ctx,
      );
    });

export const ImplementationGuide_GlobalSchema =
  ImplementationGuide_GlobalSchemaInternal as z.ZodType<ImplementationGuide_Global>;
