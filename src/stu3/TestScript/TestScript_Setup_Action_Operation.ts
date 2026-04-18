// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { TestScript_Setup_Action_Operation_RequestHeader } from "./TestScript_Setup_Action_Operation_RequestHeader";
import { TestScript_Setup_Action_Operation_RequestHeaderSchemaInternal } from "./TestScript_Setup_Action_Operation_RequestHeader";

/** The operation to perform. */
export interface TestScript_Setup_Action_Operation extends BackboneElement {
  /** The content-type or mime-type to use for RESTful operation in the 'Accept' header. */
  accept?: "json" | "none" | "ttl" | "xml";
  /** Extensions for accept */
  _accept?: Element;
  /** The content-type or mime-type to use for RESTful operation in the 'Content-Type' header. */
  contentType?: "json" | "none" | "ttl" | "xml";
  /** Extensions for contentType */
  _contentType?: Element;
  /** The description would be used by test engines for tracking and reporting purposes. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The server where the request message is destined for.  Must be one of the server numbers listed in TestScript.destination section. */
  destination?: number;
  /** Extensions for destination */
  _destination?: Element;
  /** Whether or not to implicitly send the request url in encoded format. The default is true to match the standard RESTful client behavior. Set to false when communicating with a server that does not support encoded url paths. */
  encodeRequestUrl?: boolean;
  /** Extensions for encodeRequestUrl */
  _encodeRequestUrl?: Element;
  /** The label would be used for tracking/logging purposes by test engines. */
  label?: string;
  /** Extensions for label */
  _label?: Element;
  /** The server where the request message originates from.  Must be one of the server numbers listed in TestScript.origin section. */
  origin?: number;
  /** Extensions for origin */
  _origin?: Element;
  /** Path plus parameters after [type].  Used to set parts of the request URL explicitly. */
  params?: string;
  /** Extensions for params */
  _params?: Element;
  /** Header elements would be used to set HTTP headers. */
  requestHeader?: Array<TestScript_Setup_Action_Operation_RequestHeader>;
  /** The fixture id (maybe new) to map to the request. */
  requestId?: string;
  /** Extensions for requestId */
  _requestId?: Element;
  /** The type of the resource.  See http://hl7.org/fhir/STU3/resourcelist.html. */
  resource?:
    | "Account"
    | "ActivityDefinition"
    | "Address"
    | "AdverseEvent"
    | "Age"
    | "AllergyIntolerance"
    | "Annotation"
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
    | "unsignedInt"
    | "uri"
    | "UsageContext"
    | "uuid"
    | "ValueSet"
    | "VisionPrescription"
    | "xhtml";
  /** Extensions for resource */
  _resource?: Element;
  /** The fixture id (maybe new) to map to the response. */
  responseId?: string;
  /** Extensions for responseId */
  _responseId?: Element;
  /** The id of the fixture used as the body of a PUT or POST request. */
  sourceId?: string;
  /** Extensions for sourceId */
  _sourceId?: Element;
  /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests. */
  targetId?: string;
  /** Extensions for targetId */
  _targetId?: Element;
  /** Server interaction or operation type. */
  type?: Coding;
  /** Complete request URL. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getTestScript_Setup_Action_Operation_RequestHeaderSchema =
  (): z.ZodType<TestScript_Setup_Action_Operation_RequestHeader> =>
    TestScript_Setup_Action_Operation_RequestHeaderSchemaInternal as z.ZodType<TestScript_Setup_Action_Operation_RequestHeader>;

/** @internal */
export const TestScript_Setup_Action_OperationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    accept: z.enum(["json", "none", "ttl", "xml"]).optional(),
    _accept: z.lazy(getElementSchema).optional(),
    contentType: z.enum(["json", "none", "ttl", "xml"]).optional(),
    _contentType: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    destination: z.number().int().optional(),
    _destination: z.lazy(getElementSchema).optional(),
    encodeRequestUrl: z.boolean().optional(),
    _encodeRequestUrl: z.lazy(getElementSchema).optional(),
    label: fhirString().optional(),
    _label: z.lazy(getElementSchema).optional(),
    origin: z.number().int().optional(),
    _origin: z.lazy(getElementSchema).optional(),
    params: fhirString().optional(),
    _params: z.lazy(getElementSchema).optional(),
    requestHeader: z
      .lazy(getTestScript_Setup_Action_Operation_RequestHeaderSchema)
      .array()
      .optional(),
    requestId: fhirId().optional(),
    _requestId: z.lazy(getElementSchema).optional(),
    resource: z
      .enum([
        "Account",
        "ActivityDefinition",
        "Address",
        "AdverseEvent",
        "Age",
        "AllergyIntolerance",
        "Annotation",
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
        "unsignedInt",
        "uri",
        "UsageContext",
        "uuid",
        "ValueSet",
        "VisionPrescription",
        "xhtml",
      ])
      .optional(),
    _resource: z.lazy(getElementSchema).optional(),
    responseId: fhirId().optional(),
    _responseId: z.lazy(getElementSchema).optional(),
    sourceId: fhirId().optional(),
    _sourceId: z.lazy(getElementSchema).optional(),
    targetId: fhirId().optional(),
    _targetId: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodingSchema).optional(),
    url: fhirString().optional(),
    _url: z.lazy(getElementSchema).optional(),
  }).strict();

export const TestScript_Setup_Action_OperationSchema =
  TestScript_Setup_Action_OperationSchemaInternal as z.ZodType<TestScript_Setup_Action_Operation>;
