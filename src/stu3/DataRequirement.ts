// Source: https://hl7.org/fhir/STU3/datatypes.html#DataRequirement
// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import type { DataRequirement_CodeFilter } from "./DataRequirement_CodeFilter";
import { DataRequirement_CodeFilterSchemaInternal } from "./DataRequirement_CodeFilter";
import type { DataRequirement_DateFilter } from "./DataRequirement_DateFilter";
import { DataRequirement_DateFilterSchemaInternal } from "./DataRequirement_DateFilter";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Base StructureDefinition for DataRequirement Type */
export interface DataRequirement extends Element {
  /** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. */
  codeFilter?: Array<DataRequirement_CodeFilter>;
  /** Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. */
  dateFilter?: Array<DataRequirement_DateFilter>;
  /** Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. Note that the value for this element can be a path to allow references to nested elements. In that case, all the elements along the path must be supported. */
  mustSupport?: Array<string | null>;
  /** Extensions for mustSupport */
  _mustSupport?: Array<Element | null>;
  /** The profile of the required data, specified as the uri of the profile definition. */
  profile?: Array<string | null>;
  /** Extensions for profile */
  _profile?: Array<Element | null>;
  /** The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile. */
  type:
    | "Account"
    | "ActivityDefinition"
    | "Address"
    | "AdverseEvent"
    | "Age"
    | "AllergyIntolerance"
    | "Annotation"
    | "Any"
    | "Appointment"
    | "AppointmentResponse"
    | "Attachment"
    | "AuditEvent"
    | "BackboneElement"
    | "base64Binary"
    | "Basic"
    | "Binary"
    | "BodySite"
    | "boolean"
    | "Bundle"
    | "CapabilityStatement"
    | "CarePlan"
    | "CareTeam"
    | "ChargeItem"
    | "Claim"
    | "ClaimResponse"
    | "ClinicalImpression"
    | "code"
    | "CodeableConcept"
    | "CodeSystem"
    | "Coding"
    | "Communication"
    | "CommunicationRequest"
    | "CompartmentDefinition"
    | "Composition"
    | "ConceptMap"
    | "Condition"
    | "Consent"
    | "ContactDetail"
    | "ContactPoint"
    | "Contract"
    | "Contributor"
    | "Count"
    | "Coverage"
    | "DataElement"
    | "DataRequirement"
    | "date"
    | "dateTime"
    | "decimal"
    | "DetectedIssue"
    | "Device"
    | "DeviceComponent"
    | "DeviceMetric"
    | "DeviceRequest"
    | "DeviceUseStatement"
    | "DiagnosticReport"
    | "Distance"
    | "DocumentManifest"
    | "DocumentReference"
    | "DomainResource"
    | "Dosage"
    | "Duration"
    | "Element"
    | "ElementDefinition"
    | "EligibilityRequest"
    | "EligibilityResponse"
    | "Encounter"
    | "Endpoint"
    | "EnrollmentRequest"
    | "EnrollmentResponse"
    | "EpisodeOfCare"
    | "ExpansionProfile"
    | "ExplanationOfBenefit"
    | "Extension"
    | "FamilyMemberHistory"
    | "Flag"
    | "Goal"
    | "GraphDefinition"
    | "Group"
    | "GuidanceResponse"
    | "HealthcareService"
    | "HumanName"
    | "id"
    | "Identifier"
    | "ImagingManifest"
    | "ImagingStudy"
    | "Immunization"
    | "ImmunizationRecommendation"
    | "ImplementationGuide"
    | "instant"
    | "integer"
    | "Library"
    | "Linkage"
    | "List"
    | "Location"
    | "markdown"
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
    | "Meta"
    | "Money"
    | "NamingSystem"
    | "Narrative"
    | "NutritionOrder"
    | "Observation"
    | "oid"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "ParameterDefinition"
    | "Parameters"
    | "Patient"
    | "PaymentNotice"
    | "PaymentReconciliation"
    | "Period"
    | "Person"
    | "PlanDefinition"
    | "positiveInt"
    | "Practitioner"
    | "PractitionerRole"
    | "Procedure"
    | "ProcedureRequest"
    | "ProcessRequest"
    | "ProcessResponse"
    | "Provenance"
    | "Quantity"
    | "Questionnaire"
    | "QuestionnaireResponse"
    | "Range"
    | "Ratio"
    | "Reference"
    | "ReferralRequest"
    | "RelatedArtifact"
    | "RelatedPerson"
    | "RequestGroup"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "SampledData"
    | "Schedule"
    | "SearchParameter"
    | "Sequence"
    | "ServiceDefinition"
    | "Signature"
    | "SimpleQuantity"
    | "Slot"
    | "Specimen"
    | "string"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "Substance"
    | "SupplyDelivery"
    | "SupplyRequest"
    | "Task"
    | "TestReport"
    | "TestScript"
    | "time"
    | "Timing"
    | "TriggerDefinition"
    | "Type"
    | "unsignedInt"
    | "uri"
    | "UsageContext"
    | "uuid"
    | "ValueSet"
    | "VisionPrescription"
    | "xhtml";
  /** Extensions for type */
  _type?: Element;
}

const getDataRequirement_CodeFilterSchema =
  (): z.ZodType<DataRequirement_CodeFilter> =>
    DataRequirement_CodeFilterSchemaInternal as z.ZodType<DataRequirement_CodeFilter>;
const getDataRequirement_DateFilterSchema =
  (): z.ZodType<DataRequirement_DateFilter> =>
    DataRequirement_DateFilterSchemaInternal as z.ZodType<DataRequirement_DateFilter>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const DataRequirementSchemaInternal = ElementSchemaInternal.extend({
  codeFilter: z.lazy(getDataRequirement_CodeFilterSchema).array().optional(),
  dateFilter: z.lazy(getDataRequirement_DateFilterSchema).array().optional(),
  mustSupport: fhirString().nullable().array().optional(),
  _mustSupport: z.lazy(getElementSchema).nullable().array().optional(),
  profile: fhirUri().nullable().array().optional(),
  _profile: z.lazy(getElementSchema).nullable().array().optional(),
  type: z.enum([
    "Account",
    "ActivityDefinition",
    "Address",
    "AdverseEvent",
    "Age",
    "AllergyIntolerance",
    "Annotation",
    "Any",
    "Appointment",
    "AppointmentResponse",
    "Attachment",
    "AuditEvent",
    "BackboneElement",
    "base64Binary",
    "Basic",
    "Binary",
    "BodySite",
    "boolean",
    "Bundle",
    "CapabilityStatement",
    "CarePlan",
    "CareTeam",
    "ChargeItem",
    "Claim",
    "ClaimResponse",
    "ClinicalImpression",
    "code",
    "CodeableConcept",
    "CodeSystem",
    "Coding",
    "Communication",
    "CommunicationRequest",
    "CompartmentDefinition",
    "Composition",
    "ConceptMap",
    "Condition",
    "Consent",
    "ContactDetail",
    "ContactPoint",
    "Contract",
    "Contributor",
    "Count",
    "Coverage",
    "DataElement",
    "DataRequirement",
    "date",
    "dateTime",
    "decimal",
    "DetectedIssue",
    "Device",
    "DeviceComponent",
    "DeviceMetric",
    "DeviceRequest",
    "DeviceUseStatement",
    "DiagnosticReport",
    "Distance",
    "DocumentManifest",
    "DocumentReference",
    "DomainResource",
    "Dosage",
    "Duration",
    "Element",
    "ElementDefinition",
    "EligibilityRequest",
    "EligibilityResponse",
    "Encounter",
    "Endpoint",
    "EnrollmentRequest",
    "EnrollmentResponse",
    "EpisodeOfCare",
    "ExpansionProfile",
    "ExplanationOfBenefit",
    "Extension",
    "FamilyMemberHistory",
    "Flag",
    "Goal",
    "GraphDefinition",
    "Group",
    "GuidanceResponse",
    "HealthcareService",
    "HumanName",
    "id",
    "Identifier",
    "ImagingManifest",
    "ImagingStudy",
    "Immunization",
    "ImmunizationRecommendation",
    "ImplementationGuide",
    "instant",
    "integer",
    "Library",
    "Linkage",
    "List",
    "Location",
    "markdown",
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
    "Meta",
    "Money",
    "NamingSystem",
    "Narrative",
    "NutritionOrder",
    "Observation",
    "oid",
    "OperationDefinition",
    "OperationOutcome",
    "Organization",
    "ParameterDefinition",
    "Parameters",
    "Patient",
    "PaymentNotice",
    "PaymentReconciliation",
    "Period",
    "Person",
    "PlanDefinition",
    "positiveInt",
    "Practitioner",
    "PractitionerRole",
    "Procedure",
    "ProcedureRequest",
    "ProcessRequest",
    "ProcessResponse",
    "Provenance",
    "Quantity",
    "Questionnaire",
    "QuestionnaireResponse",
    "Range",
    "Ratio",
    "Reference",
    "ReferralRequest",
    "RelatedArtifact",
    "RelatedPerson",
    "RequestGroup",
    "ResearchStudy",
    "ResearchSubject",
    "Resource",
    "RiskAssessment",
    "SampledData",
    "Schedule",
    "SearchParameter",
    "Sequence",
    "ServiceDefinition",
    "Signature",
    "SimpleQuantity",
    "Slot",
    "Specimen",
    "string",
    "StructureDefinition",
    "StructureMap",
    "Subscription",
    "Substance",
    "SupplyDelivery",
    "SupplyRequest",
    "Task",
    "TestReport",
    "TestScript",
    "time",
    "Timing",
    "TriggerDefinition",
    "Type",
    "unsignedInt",
    "uri",
    "UsageContext",
    "uuid",
    "ValueSet",
    "VisionPrescription",
    "xhtml",
  ]),
  _type: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.mustSupport,
      record._mustSupport,
      "mustSupport",
      "_mustSupport",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.profile,
      record._profile,
      "profile",
      "_profile",
      ctx,
    );
  });

export const DataRequirementSchema =
  DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
