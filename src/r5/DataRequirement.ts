// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirCanonical, fhirId, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DataRequirement_CodeFilter } from "./DataRequirement_CodeFilter";
import { DataRequirement_CodeFilterSchemaInternal } from "./DataRequirement_CodeFilter";
import type { DataRequirement_DateFilter } from "./DataRequirement_DateFilter";
import { DataRequirement_DateFilterSchemaInternal } from "./DataRequirement_DateFilter";
import type { DataRequirement_Sort } from "./DataRequirement_Sort";
import { DataRequirement_SortSchemaInternal } from "./DataRequirement_Sort";
import type { DataRequirement_ValueFilter } from "./DataRequirement_ValueFilter";
import { DataRequirement_ValueFilterSchemaInternal } from "./DataRequirement_ValueFilter";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface DataRequirement extends DataType {
  /** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed. */
  codeFilter?: Array<DataRequirement_CodeFilter>;
  /** Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed. */
  dateFilter?: Array<DataRequirement_DateFilter>;
  /** Specifies a maximum number of results that are required (uses the _count search parameter). */
  limit?: number;
  /** Extensions for limit */
  _limit?: Element;
  /**
   * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
   *
   * The value of mustSupport SHALL be a FHIRPath resolvable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
   */
  mustSupport?: Array<string | null>;
  /** Extensions for mustSupport */
  _mustSupport?: Array<Element | null>;
  /** The profile of the required data, specified as the uri of the profile definition. */
  profile?: Array<string | null>;
  /** Extensions for profile */
  _profile?: Array<Element | null>;
  /** Specifies the order of the results to be returned. */
  sort?: Array<DataRequirement_Sort>;
  /** The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed. */
  subjectCodeableConcept?: CodeableConcept;
  /** The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed. */
  subjectReference?: Reference;
  /** The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile. */
  type:
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
    | "xhtml";
  /** Extensions for type */
  _type?: Element;
  /** Value filters specify additional constraints on the data for elements other than code-valued or date-valued. Each value filter specifies an additional constraint on the data (i.e. valueFilters are AND'ed, not OR'ed). */
  valueFilter?: Array<DataRequirement_ValueFilter>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDataRequirement_CodeFilterSchema =
  (): z.ZodType<DataRequirement_CodeFilter> =>
    DataRequirement_CodeFilterSchemaInternal as z.ZodType<DataRequirement_CodeFilter>;
const getDataRequirement_DateFilterSchema =
  (): z.ZodType<DataRequirement_DateFilter> =>
    DataRequirement_DateFilterSchemaInternal as z.ZodType<DataRequirement_DateFilter>;
const getDataRequirement_SortSchema = (): z.ZodType<DataRequirement_Sort> =>
  DataRequirement_SortSchemaInternal as z.ZodType<DataRequirement_Sort>;
const getDataRequirement_ValueFilterSchema =
  (): z.ZodType<DataRequirement_ValueFilter> =>
    DataRequirement_ValueFilterSchemaInternal as z.ZodType<DataRequirement_ValueFilter>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DataRequirementSchemaInternal = z
  .object({
    codeFilter: z.lazy(getDataRequirement_CodeFilterSchema).array().optional(),
    dateFilter: z.lazy(getDataRequirement_DateFilterSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    limit: z.number().int().positive().optional(),
    _limit: z.lazy(getElementSchema).optional(),
    mustSupport: fhirString().nullable().array().optional(),
    _mustSupport: z.lazy(getElementSchema).nullable().array().optional(),
    profile: fhirCanonical().nullable().array().optional(),
    _profile: z.lazy(getElementSchema).nullable().array().optional(),
    sort: z.lazy(getDataRequirement_SortSchema).array().optional(),
    subjectCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    subjectReference: z.lazy(getReferenceSchema).optional(),
    type: z.enum([
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
    ]),
    _type: z.lazy(getElementSchema).optional(),
    valueFilter: z
      .lazy(getDataRequirement_ValueFilterSchema)
      .array()
      .optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const subject_x_Present = [
      "subjectCodeableConcept",
      "subjectReference",
    ].filter((field) => record[field] !== undefined);
    if (subject_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of subjectCodeableConcept, subjectReference may be present for subject[x]",
        path: [subject_x_Present[0]],
      });
    }
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
    validateReferenceTarget(
      record.subjectReference,
      "subjectReference",
      ["http://hl7.org/fhir/StructureDefinition/Group"],
      ["Group"],
      ctx,
    );
  });

export const DataRequirementSchema =
  DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
