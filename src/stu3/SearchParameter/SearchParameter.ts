// Profile: http://hl7.org/fhir/StructureDefinition/SearchParameter
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
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
import type { SearchParameter_Component } from "./SearchParameter_Component";
import { SearchParameter_ComponentSchemaInternal } from "./SearchParameter_Component";

/** Base StructureDefinition for SearchParameter Resource */
export interface SearchParameter extends DomainResource {
  /** The base resource type(s) that this search parameter can be used against. */
  base: Array<
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
    | "VisionPrescription"
    | null
  >;
  /** Extensions for base */
  _base?: Array<Element | null>;
  /** Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference, and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type. */
  chain?: Array<string | null>;
  /** Extensions for chain */
  _chain?: Array<Element | null>;
  /** The code used in the URL or the parameter name in a parameters resource for this search parameter. */
  code: string;
  /** Extensions for code */
  _code?: Element;
  /** Comparators supported for the search parameter. */
  comparator?: Array<
    "ap" | "eb" | "eq" | "ge" | "gt" | "le" | "lt" | "ne" | "sa" | null
  >;
  /** Extensions for comparator */
  _comparator?: Array<Element | null>;
  /** Used to define the parts of a composite search parameter. */
  component?: Array<SearchParameter_Component>;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** The date  (and optionally time) when the search parameter was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. I.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter. */
  derivedFrom?: string;
  /** Extensions for derivedFrom */
  _derivedFrom?: Element;
  /** A free text natural language description of the search parameter from a consumer's perspective. and how it used. */
  description: string;
  /** Extensions for description */
  _description?: Element;
  /** A boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A FHIRPath expression that returns a set of elements for the search parameter. */
  expression?: string;
  /** Extensions for expression */
  _expression?: Element;
  /** A legal or geographic region in which the search parameter is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** A modifier supported for the search parameter. */
  modifier?: Array<
    | "above"
    | "below"
    | "contains"
    | "exact"
    | "in"
    | "missing"
    | "not"
    | "not-in"
    | "text"
    | "type"
    | null
  >;
  /** Extensions for modifier */
  _modifier?: Array<Element | null>;
  /** A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the individual or organization that published the search parameter. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explaination of why this search parameter is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a SearchParameter resource. */
  resourceType: "SearchParameter";
  /** The status of this search parameter. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Types of resource (if a resource is referenced). */
  target?: Array<
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
    | "VisionPrescription"
    | null
  >;
  /** Extensions for target */
  _target?: Array<Element | null>;
  /** The type of value a search parameter refers to, and how the content is interpreted. */
  type:
    | "composite"
    | "date"
    | "number"
    | "quantity"
    | "reference"
    | "string"
    | "token"
    | "uri";
  /** Extensions for type */
  _type?: Element;
  /** An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this search parameter is (or will be) published. The URL SHOULD include the major version of the search parameter. For more information see [Technical and Business Versions](resource.html#versions). */
  url: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate search parameter instances. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** An XPath expression that returns a set of elements for the search parameter. */
  xpath?: string;
  /** Extensions for xpath */
  _xpath?: Element;
  /** How the search parameter relates to the set of elements returned by evaluating the xpath query. */
  xpathUsage?: "distance" | "nearby" | "normal" | "other" | "phonetic";
  /** Extensions for xpathUsage */
  _xpathUsage?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getSearchParameter_ComponentSchema =
  (): z.ZodType<SearchParameter_Component> =>
    SearchParameter_ComponentSchemaInternal as z.ZodType<SearchParameter_Component>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const SearchParameterSchemaInternal = z
  .object({
    base: z
      .enum([
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
      ])
      .nullable()
      .array(),
    _base: z.lazy(getElementSchema).nullable().array().optional(),
    chain: fhirString().nullable().array().optional(),
    _chain: z.lazy(getElementSchema).nullable().array().optional(),
    code: fhirCode(),
    _code: z.lazy(getElementSchema).optional(),
    comparator: z
      .enum(["ap", "eb", "eq", "ge", "gt", "le", "lt", "ne", "sa"])
      .nullable()
      .array()
      .optional(),
    _comparator: z.lazy(getElementSchema).nullable().array().optional(),
    component: z.lazy(getSearchParameter_ComponentSchema).array().optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    derivedFrom: fhirUri().optional(),
    _derivedFrom: z.lazy(getElementSchema).optional(),
    description: z.string(),
    _description: z.lazy(getElementSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    expression: fhirString().optional(),
    _expression: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifier: z
      .enum([
        "above",
        "below",
        "contains",
        "exact",
        "in",
        "missing",
        "not",
        "not-in",
        "text",
        "type",
      ])
      .nullable()
      .array()
      .optional(),
    _modifier: z.lazy(getElementSchema).nullable().array().optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z.string().optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("SearchParameter"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    target: z
      .enum([
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
      ])
      .nullable()
      .array()
      .optional(),
    _target: z.lazy(getElementSchema).nullable().array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.enum([
      "composite",
      "date",
      "number",
      "quantity",
      "reference",
      "string",
      "token",
      "uri",
    ]),
    _type: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    xpath: fhirString().optional(),
    _xpath: z.lazy(getElementSchema).optional(),
    xpathUsage: z
      .enum(["distance", "nearby", "normal", "other", "phonetic"])
      .optional(),
    _xpathUsage: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(record.base, record._base, "base", "_base", ctx);
    validatePrimitiveArrayPair(
      record.chain,
      record._chain,
      "chain",
      "_chain",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.comparator,
      record._comparator,
      "comparator",
      "_comparator",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.modifier,
      record._modifier,
      "modifier",
      "_modifier",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.target,
      record._target,
      "target",
      "_target",
      ctx,
    );
  });

export const SearchParameterSchema =
  SearchParameterSchemaInternal as z.ZodType<SearchParameter>;
