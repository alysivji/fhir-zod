// Source: https://hl7.org/fhir/STU3/compartmentdefinition-definitions.html#CompartmentDefinition.resource
// Profile: http://hl7.org/fhir/StructureDefinition/CompartmentDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Information about how a resource is related to the compartment. */
export interface CompartmentDefinition_Resource extends BackboneElement {
  /** The name of a resource supported by the server. */
  code:
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
  /** Extensions for code */
  _code?: Element;
  /** Additional documentation about the resource and compartment. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** The name of a search parameter that represents the link to the compartment. More than one may be listed because a resource may be linked to a compartment in more than one way,. */
  param?: Array<string | null>;
  /** Extensions for param */
  _param?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CompartmentDefinition_ResourceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.enum([
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
    _code: z.lazy(getElementSchema).optional(),
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    param: fhirString().nullable().array().optional(),
    _param: z.lazy(getElementSchema).nullable().array().optional(),
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
