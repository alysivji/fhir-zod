// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirCode, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { OperationDefinition_Parameter_Binding } from "./OperationDefinition_Parameter_Binding";
import { OperationDefinition_Parameter_BindingSchemaInternal } from "./OperationDefinition_Parameter_Binding";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The parameters for the operation/query. */
export interface OperationDefinition_Parameter extends BackboneElement {
  /** Binds to a value set if this parameter is coded (code, Coding, CodeableConcept). */
  binding?: OperationDefinition_Parameter_Binding;
  /** Describes the meaning or use of this parameter. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** The maximum number of times this element is permitted to appear in the request or response. */
  max: string;
  /** Extensions for max */
  _max?: Element;
  /** The minimum number of times this parameter SHALL appear in the request or response. */
  min: number;
  /** Extensions for min */
  _min?: Element;
  /** The name of used to identify the parameter. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The parts of a nested Parameter. */
  part?: Array<unknown>;
  /** A profile the specifies the rules that this parameter must conform to. */
  profile?: Reference;
  /** How the parameter is understood as a search parameter. This is only used if the parameter type is 'string'. */
  searchType?:
    | "composite"
    | "date"
    | "number"
    | "quantity"
    | "reference"
    | "string"
    | "token"
    | "uri";
  /** Extensions for searchType */
  _searchType?: Element;
  /** The type for this parameter. */
  type?:
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
  /** Whether this is an input or an output parameter. */
  use: "in" | "out";
  /** Extensions for use */
  _use?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getOperationDefinition_Parameter_BindingSchema =
  (): z.ZodType<OperationDefinition_Parameter_Binding> =>
    OperationDefinition_Parameter_BindingSchemaInternal as z.ZodType<OperationDefinition_Parameter_Binding>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const OperationDefinition_ParameterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    binding: z.lazy(getOperationDefinition_Parameter_BindingSchema).optional(),
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    max: fhirString(),
    _max: z.lazy(getElementSchema).optional(),
    min: z.number().int(),
    _min: z.lazy(getElementSchema).optional(),
    name: fhirCode(),
    _name: z.lazy(getElementSchema).optional(),
    part: z.unknown().array().optional(),
    profile: z.lazy(getReferenceSchema).optional(),
    searchType: z
      .enum([
        "composite",
        "date",
        "number",
        "quantity",
        "reference",
        "string",
        "token",
        "uri",
      ])
      .optional(),
    _searchType: z.lazy(getElementSchema).optional(),
    type: z
      .enum([
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
      ])
      .optional(),
    _type: z.lazy(getElementSchema).optional(),
    use: z.enum(["in", "out"]),
    _use: z.lazy(getElementSchema).optional(),
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

export const OperationDefinition_ParameterSchema =
  OperationDefinition_ParameterSchemaInternal as z.ZodType<OperationDefinition_Parameter>;
