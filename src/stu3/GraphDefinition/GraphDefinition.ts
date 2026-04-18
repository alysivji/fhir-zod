// Source: https://hl7.org/fhir/STU3/graphdefinition.html
// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { GraphDefinition_Link } from "./GraphDefinition_Link";
import { GraphDefinition_LinkSchemaInternal } from "./GraphDefinition_Link";

/** Base StructureDefinition for GraphDefinition Resource */
export interface GraphDefinition extends DomainResource {
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** The date  (and optionally time) when the graph definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the graph definition from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A legal or geographic region in which the graph definition is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** Links this graph makes rules about. */
  link?: Array<GraphDefinition_Link>;
  /** A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The profile that describes the use of the base resource. */
  profile?: string;
  /** Extensions for profile */
  _profile?: Element;
  /** The name of the individual or organization that published the graph definition. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explaination of why this graph definition is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a GraphDefinition resource. */
  resourceType: "GraphDefinition";
  /** The type of FHIR resource at which instances of this graph start. */
  start:
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
  /** Extensions for start */
  _start?: Element;
  /** The status of this graph definition. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this graph definition is (or will be) published. The URL SHOULD include the major version of the graph definition. For more information see [Technical and Business Versions](resource.html#versions). */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate graph definition instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getGraphDefinition_LinkSchema = (): z.ZodType<GraphDefinition_Link> =>
  GraphDefinition_LinkSchemaInternal as z.ZodType<GraphDefinition_Link>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const GraphDefinitionSchemaInternal = z
  .object({
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z.string().optional(),
    _description: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    link: z.lazy(getGraphDefinition_LinkSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    profile: fhirUri().optional(),
    _profile: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z.string().optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("GraphDefinition"),
    start: z.enum([
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
    _start: z.lazy(getElementSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
  })
  .strict();

export const GraphDefinitionSchema =
  GraphDefinitionSchemaInternal as z.ZodType<GraphDefinition>;
