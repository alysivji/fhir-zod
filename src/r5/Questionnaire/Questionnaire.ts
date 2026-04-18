// Source: https://hl7.org/fhir/R5/questionnaire.html
// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirCode,
  fhirDate,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { Questionnaire_Item } from "./Questionnaire_Item";
import { Questionnaire_ItemSchemaInternal } from "./Questionnaire_Item";

/** A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection. */
export interface Questionnaire extends DomainResource {
  /** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
  approvalDate?: string;
  /** Extensions for approvalDate */
  _approvalDate?: Element;
  /** An identifier for this collection of questions in a particular terminology such as LOINC. */
  code?: Array<Coding>;
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
  copyrightLabel?: string;
  /** Extensions for copyrightLabel */
  _copyrightLabel?: Element;
  /** The date  (and optionally time) when the questionnaire was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the questionnaire changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** The URL of a Questionnaire that this Questionnaire is based on. */
  derivedFrom?: Array<string | null>;
  /** Extensions for derivedFrom */
  _derivedFrom?: Array<Element | null>;
  /** A free text natural language description of the questionnaire from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The period during which the questionnaire content was or is planned to be in active use. */
  effectivePeriod?: Period;
  /** A Boolean value to indicate that this questionnaire is authored for testing purposes (or education/evaluation/marketing) and is not intended for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** A formal identifier that is used to identify this questionnaire when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** A particular question, question grouping or display text that is part of the questionnaire. */
  item?: Array<Questionnaire_Item>;
  /** A legal or geographic region in which the questionnaire is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
  lastReviewDate?: string;
  /** Extensions for lastReviewDate */
  _lastReviewDate?: Element;
  /** A natural language name identifying the questionnaire. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the questionnaire. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this questionnaire is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a Questionnaire resource. */
  resourceType: "Questionnaire";
  /** The current state of this questionnaire. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The types of subjects that can be the subject of responses created for the questionnaire. */
  subjectType?: Array<
    | "Account"
    | "ActivityDefinition"
    | "ActorDefinition"
    | "Address"
    | "AdministrableProductDefinition"
    | "AdverseEvent"
    | "Age"
    | "AllergyIntolerance"
    | "Annotation"
    | "Appointment"
    | "AppointmentResponse"
    | "ArtifactAssessment"
    | "Attachment"
    | "AuditEvent"
    | "Availability"
    | "BackboneElement"
    | "BackboneType"
    | "Base"
    | "base64Binary"
    | "Basic"
    | "Binary"
    | "BiologicallyDerivedProduct"
    | "BiologicallyDerivedProductDispense"
    | "BodyStructure"
    | "boolean"
    | "Bundle"
    | "canonical"
    | "CanonicalResource"
    | "CapabilityStatement"
    | "CarePlan"
    | "CareTeam"
    | "ChargeItem"
    | "ChargeItemDefinition"
    | "Citation"
    | "Claim"
    | "ClaimResponse"
    | "ClinicalImpression"
    | "ClinicalUseDefinition"
    | "code"
    | "CodeableConcept"
    | "CodeableReference"
    | "CodeSystem"
    | "Coding"
    | "Communication"
    | "CommunicationRequest"
    | "CompartmentDefinition"
    | "Composition"
    | "ConceptMap"
    | "Condition"
    | "ConditionDefinition"
    | "Consent"
    | "ContactDetail"
    | "ContactPoint"
    | "Contract"
    | "Contributor"
    | "Count"
    | "Coverage"
    | "CoverageEligibilityRequest"
    | "CoverageEligibilityResponse"
    | "DataRequirement"
    | "DataType"
    | "date"
    | "dateTime"
    | "decimal"
    | "DetectedIssue"
    | "Device"
    | "DeviceAssociation"
    | "DeviceDefinition"
    | "DeviceDispense"
    | "DeviceMetric"
    | "DeviceRequest"
    | "DeviceUsage"
    | "DiagnosticReport"
    | "Distance"
    | "DocumentReference"
    | "DomainResource"
    | "Dosage"
    | "Duration"
    | "Element"
    | "ElementDefinition"
    | "Encounter"
    | "EncounterHistory"
    | "Endpoint"
    | "EnrollmentRequest"
    | "EnrollmentResponse"
    | "EpisodeOfCare"
    | "EventDefinition"
    | "Evidence"
    | "EvidenceReport"
    | "EvidenceVariable"
    | "ExampleScenario"
    | "ExplanationOfBenefit"
    | "Expression"
    | "ExtendedContactDetail"
    | "Extension"
    | "FamilyMemberHistory"
    | "Flag"
    | "FormularyItem"
    | "GenomicStudy"
    | "Goal"
    | "GraphDefinition"
    | "Group"
    | "GuidanceResponse"
    | "HealthcareService"
    | "HumanName"
    | "id"
    | "Identifier"
    | "ImagingSelection"
    | "ImagingStudy"
    | "Immunization"
    | "ImmunizationEvaluation"
    | "ImmunizationRecommendation"
    | "ImplementationGuide"
    | "Ingredient"
    | "instant"
    | "InsurancePlan"
    | "integer"
    | "integer64"
    | "InventoryItem"
    | "InventoryReport"
    | "Invoice"
    | "Library"
    | "Linkage"
    | "List"
    | "Location"
    | "ManufacturedItemDefinition"
    | "markdown"
    | "MarketingStatus"
    | "Measure"
    | "MeasureReport"
    | "Medication"
    | "MedicationAdministration"
    | "MedicationDispense"
    | "MedicationKnowledge"
    | "MedicationRequest"
    | "MedicationStatement"
    | "MedicinalProductDefinition"
    | "MessageDefinition"
    | "MessageHeader"
    | "Meta"
    | "MetadataResource"
    | "MolecularSequence"
    | "MonetaryComponent"
    | "Money"
    | "NamingSystem"
    | "Narrative"
    | "NutritionIntake"
    | "NutritionOrder"
    | "NutritionProduct"
    | "Observation"
    | "ObservationDefinition"
    | "oid"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "OrganizationAffiliation"
    | "PackagedProductDefinition"
    | "ParameterDefinition"
    | "Parameters"
    | "Patient"
    | "PaymentNotice"
    | "PaymentReconciliation"
    | "Period"
    | "Permission"
    | "Person"
    | "PlanDefinition"
    | "positiveInt"
    | "Practitioner"
    | "PractitionerRole"
    | "PrimitiveType"
    | "Procedure"
    | "ProductShelfLife"
    | "Provenance"
    | "Quantity"
    | "Questionnaire"
    | "QuestionnaireResponse"
    | "Range"
    | "Ratio"
    | "RatioRange"
    | "Reference"
    | "RegulatedAuthorization"
    | "RelatedArtifact"
    | "RelatedPerson"
    | "RequestOrchestration"
    | "Requirements"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "SampledData"
    | "Schedule"
    | "SearchParameter"
    | "ServiceRequest"
    | "Signature"
    | "Slot"
    | "Specimen"
    | "SpecimenDefinition"
    | "string"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "SubscriptionStatus"
    | "SubscriptionTopic"
    | "Substance"
    | "SubstanceDefinition"
    | "SubstanceNucleicAcid"
    | "SubstancePolymer"
    | "SubstanceProtein"
    | "SubstanceReferenceInformation"
    | "SubstanceSourceMaterial"
    | "SupplyDelivery"
    | "SupplyRequest"
    | "Task"
    | "TerminologyCapabilities"
    | "TestPlan"
    | "TestReport"
    | "TestScript"
    | "time"
    | "Timing"
    | "Transport"
    | "TriggerDefinition"
    | "unsignedInt"
    | "uri"
    | "url"
    | "UsageContext"
    | "uuid"
    | "ValueSet"
    | "VerificationResult"
    | "VirtualServiceDetail"
    | "VisionPrescription"
    | "xhtml"
    | null
  >;
  /** Extensions for subjectType */
  _subjectType?: Array<Element | null>;
  /** A short, descriptive, user-friendly title for the questionnaire. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this questionnaire when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this questionnaire is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the questionnaire is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate questionnaires. */
  useContext?: Array<UsageContext>;
  /** The identifier that is used to identify this version of the questionnaire when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the questionnaire author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
  version?: string;
  /** Extensions for version */
  _version?: Element;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmCoding?: Coding;
  /** Indicates the mechanism used to compare versions to determine which is more current. */
  versionAlgorithmString?: string;
  /** Extensions for versionAlgorithmString */
  _versionAlgorithmString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
  ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuestionnaire_ItemSchema = (): z.ZodType<Questionnaire_Item> =>
  Questionnaire_ItemSchemaInternal as z.ZodType<Questionnaire_Item>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const QuestionnaireSchemaInternal = z
  .object({
    approvalDate: fhirDate().optional(),
    _approvalDate: z.lazy(getElementSchema).optional(),
    code: z.lazy(getCodingSchema).array().optional(),
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    copyright: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    copyrightLabel: fhirString().optional(),
    _copyrightLabel: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    derivedFrom: fhirCanonical().nullable().array().optional(),
    _derivedFrom: z.lazy(getElementSchema).nullable().array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    item: z.lazy(getQuestionnaire_ItemSchema).array().optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    lastReviewDate: fhirDate().optional(),
    _lastReviewDate: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("Questionnaire"),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    subjectType: z
      .enum([
        "Account",
        "ActivityDefinition",
        "ActorDefinition",
        "Address",
        "AdministrableProductDefinition",
        "AdverseEvent",
        "Age",
        "AllergyIntolerance",
        "Annotation",
        "Appointment",
        "AppointmentResponse",
        "ArtifactAssessment",
        "Attachment",
        "AuditEvent",
        "Availability",
        "BackboneElement",
        "BackboneType",
        "Base",
        "base64Binary",
        "Basic",
        "Binary",
        "BiologicallyDerivedProduct",
        "BiologicallyDerivedProductDispense",
        "BodyStructure",
        "boolean",
        "Bundle",
        "canonical",
        "CanonicalResource",
        "CapabilityStatement",
        "CarePlan",
        "CareTeam",
        "ChargeItem",
        "ChargeItemDefinition",
        "Citation",
        "Claim",
        "ClaimResponse",
        "ClinicalImpression",
        "ClinicalUseDefinition",
        "code",
        "CodeableConcept",
        "CodeableReference",
        "CodeSystem",
        "Coding",
        "Communication",
        "CommunicationRequest",
        "CompartmentDefinition",
        "Composition",
        "ConceptMap",
        "Condition",
        "ConditionDefinition",
        "Consent",
        "ContactDetail",
        "ContactPoint",
        "Contract",
        "Contributor",
        "Count",
        "Coverage",
        "CoverageEligibilityRequest",
        "CoverageEligibilityResponse",
        "DataRequirement",
        "DataType",
        "date",
        "dateTime",
        "decimal",
        "DetectedIssue",
        "Device",
        "DeviceAssociation",
        "DeviceDefinition",
        "DeviceDispense",
        "DeviceMetric",
        "DeviceRequest",
        "DeviceUsage",
        "DiagnosticReport",
        "Distance",
        "DocumentReference",
        "DomainResource",
        "Dosage",
        "Duration",
        "Element",
        "ElementDefinition",
        "Encounter",
        "EncounterHistory",
        "Endpoint",
        "EnrollmentRequest",
        "EnrollmentResponse",
        "EpisodeOfCare",
        "EventDefinition",
        "Evidence",
        "EvidenceReport",
        "EvidenceVariable",
        "ExampleScenario",
        "ExplanationOfBenefit",
        "Expression",
        "ExtendedContactDetail",
        "Extension",
        "FamilyMemberHistory",
        "Flag",
        "FormularyItem",
        "GenomicStudy",
        "Goal",
        "GraphDefinition",
        "Group",
        "GuidanceResponse",
        "HealthcareService",
        "HumanName",
        "id",
        "Identifier",
        "ImagingSelection",
        "ImagingStudy",
        "Immunization",
        "ImmunizationEvaluation",
        "ImmunizationRecommendation",
        "ImplementationGuide",
        "Ingredient",
        "instant",
        "InsurancePlan",
        "integer",
        "integer64",
        "InventoryItem",
        "InventoryReport",
        "Invoice",
        "Library",
        "Linkage",
        "List",
        "Location",
        "ManufacturedItemDefinition",
        "markdown",
        "MarketingStatus",
        "Measure",
        "MeasureReport",
        "Medication",
        "MedicationAdministration",
        "MedicationDispense",
        "MedicationKnowledge",
        "MedicationRequest",
        "MedicationStatement",
        "MedicinalProductDefinition",
        "MessageDefinition",
        "MessageHeader",
        "Meta",
        "MetadataResource",
        "MolecularSequence",
        "MonetaryComponent",
        "Money",
        "NamingSystem",
        "Narrative",
        "NutritionIntake",
        "NutritionOrder",
        "NutritionProduct",
        "Observation",
        "ObservationDefinition",
        "oid",
        "OperationDefinition",
        "OperationOutcome",
        "Organization",
        "OrganizationAffiliation",
        "PackagedProductDefinition",
        "ParameterDefinition",
        "Parameters",
        "Patient",
        "PaymentNotice",
        "PaymentReconciliation",
        "Period",
        "Permission",
        "Person",
        "PlanDefinition",
        "positiveInt",
        "Practitioner",
        "PractitionerRole",
        "PrimitiveType",
        "Procedure",
        "ProductShelfLife",
        "Provenance",
        "Quantity",
        "Questionnaire",
        "QuestionnaireResponse",
        "Range",
        "Ratio",
        "RatioRange",
        "Reference",
        "RegulatedAuthorization",
        "RelatedArtifact",
        "RelatedPerson",
        "RequestOrchestration",
        "Requirements",
        "ResearchStudy",
        "ResearchSubject",
        "Resource",
        "RiskAssessment",
        "SampledData",
        "Schedule",
        "SearchParameter",
        "ServiceRequest",
        "Signature",
        "Slot",
        "Specimen",
        "SpecimenDefinition",
        "string",
        "StructureDefinition",
        "StructureMap",
        "Subscription",
        "SubscriptionStatus",
        "SubscriptionTopic",
        "Substance",
        "SubstanceDefinition",
        "SubstanceNucleicAcid",
        "SubstancePolymer",
        "SubstanceProtein",
        "SubstanceReferenceInformation",
        "SubstanceSourceMaterial",
        "SupplyDelivery",
        "SupplyRequest",
        "Task",
        "TerminologyCapabilities",
        "TestPlan",
        "TestReport",
        "TestScript",
        "time",
        "Timing",
        "Transport",
        "TriggerDefinition",
        "unsignedInt",
        "uri",
        "url",
        "UsageContext",
        "uuid",
        "ValueSet",
        "VerificationResult",
        "VirtualServiceDetail",
        "VisionPrescription",
        "xhtml",
      ])
      .nullable()
      .array()
      .optional(),
    _subjectType: z.lazy(getElementSchema).nullable().array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    version: fhirString().optional(),
    _version: z.lazy(getElementSchema).optional(),
    versionAlgorithmCoding: z.lazy(getCodingSchema).optional(),
    versionAlgorithmString: fhirString().optional(),
    _versionAlgorithmString: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const versionAlgorithm_x_Present = [
      "versionAlgorithmCoding",
      "versionAlgorithmString",
    ].filter((field) => record[field] !== undefined);
    if (versionAlgorithm_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of versionAlgorithmCoding, versionAlgorithmString may be present for versionAlgorithm[x]",
        path: [versionAlgorithm_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.derivedFrom,
      record._derivedFrom,
      "derivedFrom",
      "_derivedFrom",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.subjectType,
      record._subjectType,
      "subjectType",
      "_subjectType",
      ctx,
    );
  });

export const QuestionnaireSchema =
  QuestionnaireSchemaInternal as z.ZodType<Questionnaire>;
