// Source: https://hl7.org/fhir/R4/careplan-definitions.html#CarePlan.activity.detail
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";

/** A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc. */
export interface CarePlan_Activity_Detail extends BackboneElement {
  /** Detailed description of the type of planned activity; e.g. what lab test, what procedure, what kind of encounter. */
  code?: CodeableConcept;
  /** Identifies the quantity expected to be consumed in a given day. */
  dailyAmount?: Quantity;
  /** This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** If true, indicates that the described activity is one that must NOT be engaged in when following the plan.  If false, or missing, indicates that the described activity is one that should be engaged in when following the plan. */
  doNotPerform?: boolean;
  /** Extensions for doNotPerform */
  _doNotPerform?: Element;
  /** Internal reference that identifies the goals that this activity is intended to contribute towards meeting. */
  goal?: Array<Reference>;
  /** The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity. */
  instantiatesCanonical?: Array<string | null>;
  /** Extensions for instantiatesCanonical */
  _instantiatesCanonical?: Array<Element | null>;
  /** The URL pointing to an externally maintained protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity. */
  instantiatesUri?: Array<string | null>;
  /** Extensions for instantiatesUri */
  _instantiatesUri?: Array<Element | null>;
  /** A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest. */
  kind?:
    | "Account"
    | "ActivityDefinition"
    | "AdverseEvent"
    | "AllergyIntolerance"
    | "Appointment"
    | "AppointmentResponse"
    | "AuditEvent"
    | "Basic"
    | "Binary"
    | "BiologicallyDerivedProduct"
    | "BodyStructure"
    | "Bundle"
    | "CapabilityStatement"
    | "CarePlan"
    | "CareTeam"
    | "CatalogEntry"
    | "ChargeItem"
    | "ChargeItemDefinition"
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
    | "CoverageEligibilityRequest"
    | "CoverageEligibilityResponse"
    | "DetectedIssue"
    | "Device"
    | "DeviceDefinition"
    | "DeviceMetric"
    | "DeviceRequest"
    | "DeviceUseStatement"
    | "DiagnosticReport"
    | "DocumentManifest"
    | "DocumentReference"
    | "DomainResource"
    | "EffectEvidenceSynthesis"
    | "Encounter"
    | "Endpoint"
    | "EnrollmentRequest"
    | "EnrollmentResponse"
    | "EpisodeOfCare"
    | "EventDefinition"
    | "Evidence"
    | "EvidenceVariable"
    | "ExampleScenario"
    | "ExplanationOfBenefit"
    | "FamilyMemberHistory"
    | "Flag"
    | "Goal"
    | "GraphDefinition"
    | "Group"
    | "GuidanceResponse"
    | "HealthcareService"
    | "ImagingStudy"
    | "Immunization"
    | "ImmunizationEvaluation"
    | "ImmunizationRecommendation"
    | "ImplementationGuide"
    | "InsurancePlan"
    | "Invoice"
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
    | "MedicationKnowledge"
    | "MedicationRequest"
    | "MedicationStatement"
    | "MedicinalProduct"
    | "MedicinalProductAuthorization"
    | "MedicinalProductContraindication"
    | "MedicinalProductIndication"
    | "MedicinalProductIngredient"
    | "MedicinalProductInteraction"
    | "MedicinalProductManufactured"
    | "MedicinalProductPackaged"
    | "MedicinalProductPharmaceutical"
    | "MedicinalProductUndesirableEffect"
    | "MessageDefinition"
    | "MessageHeader"
    | "MolecularSequence"
    | "NamingSystem"
    | "NutritionOrder"
    | "Observation"
    | "ObservationDefinition"
    | "OperationDefinition"
    | "OperationOutcome"
    | "Organization"
    | "OrganizationAffiliation"
    | "Parameters"
    | "Patient"
    | "PaymentNotice"
    | "PaymentReconciliation"
    | "Person"
    | "PlanDefinition"
    | "Practitioner"
    | "PractitionerRole"
    | "Procedure"
    | "Provenance"
    | "Questionnaire"
    | "QuestionnaireResponse"
    | "RelatedPerson"
    | "RequestGroup"
    | "ResearchDefinition"
    | "ResearchElementDefinition"
    | "ResearchStudy"
    | "ResearchSubject"
    | "Resource"
    | "RiskAssessment"
    | "RiskEvidenceSynthesis"
    | "Schedule"
    | "SearchParameter"
    | "ServiceRequest"
    | "Slot"
    | "Specimen"
    | "SpecimenDefinition"
    | "StructureDefinition"
    | "StructureMap"
    | "Subscription"
    | "Substance"
    | "SubstanceNucleicAcid"
    | "SubstancePolymer"
    | "SubstanceProtein"
    | "SubstanceReferenceInformation"
    | "SubstanceSourceMaterial"
    | "SubstanceSpecification"
    | "SupplyDelivery"
    | "SupplyRequest"
    | "Task"
    | "TerminologyCapabilities"
    | "TestReport"
    | "TestScript"
    | "ValueSet"
    | "VerificationResult"
    | "VisionPrescription";
  /** Extensions for kind */
  _kind?: Element;
  /** Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc. */
  location?: Reference;
  /** Identifies who's expected to be involved in the activity. */
  performer?: Array<Reference>;
  /** Identifies the food, drug or other product to be consumed or supplied in the activity. */
  productCodeableConcept?: CodeableConcept;
  /** Identifies the food, drug or other product to be consumed or supplied in the activity. */
  productReference?: Reference;
  /** Identifies the quantity expected to be supplied, administered or consumed by the subject. */
  quantity?: Quantity;
  /** Provides the rationale that drove the inclusion of this particular activity as part of the plan or the reason why the activity was prohibited. */
  reasonCode?: Array<CodeableConcept>;
  /** Indicates another resource, such as the health condition(s), whose existence justifies this request and drove the inclusion of this particular activity as part of the plan. */
  reasonReference?: Array<Reference>;
  /** The period, timing or frequency upon which the described activity is to occur. */
  scheduledPeriod?: Period;
  /** The period, timing or frequency upon which the described activity is to occur. */
  scheduledString?: string;
  /** Extensions for scheduledString */
  _scheduledString?: Element;
  /** The period, timing or frequency upon which the described activity is to occur. */
  scheduledTiming?: Timing;
  /** Identifies what progress is being made for the specific activity. */
  status:
    | "cancelled"
    | "completed"
    | "entered-in-error"
    | "in-progress"
    | "not-started"
    | "on-hold"
    | "scheduled"
    | "stopped"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Provides reason why the activity isn't yet started, is on hold, was cancelled, etc. */
  statusReason?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const CarePlan_Activity_DetailSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).optional(),
    dailyAmount: z.lazy(getQuantitySchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    doNotPerform: z.boolean().optional(),
    _doNotPerform: z.lazy(getElementSchema).optional(),
    goal: z.lazy(getReferenceSchema).array().optional(),
    instantiatesCanonical: fhirCanonical().nullable().array().optional(),
    _instantiatesCanonical: z
      .lazy(getElementSchema)
      .nullable()
      .array()
      .optional(),
    instantiatesUri: fhirUri().nullable().array().optional(),
    _instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
    kind: z
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
        "BiologicallyDerivedProduct",
        "BodyStructure",
        "Bundle",
        "CapabilityStatement",
        "CarePlan",
        "CareTeam",
        "CatalogEntry",
        "ChargeItem",
        "ChargeItemDefinition",
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
        "CoverageEligibilityRequest",
        "CoverageEligibilityResponse",
        "DetectedIssue",
        "Device",
        "DeviceDefinition",
        "DeviceMetric",
        "DeviceRequest",
        "DeviceUseStatement",
        "DiagnosticReport",
        "DocumentManifest",
        "DocumentReference",
        "DomainResource",
        "EffectEvidenceSynthesis",
        "Encounter",
        "Endpoint",
        "EnrollmentRequest",
        "EnrollmentResponse",
        "EpisodeOfCare",
        "EventDefinition",
        "Evidence",
        "EvidenceVariable",
        "ExampleScenario",
        "ExplanationOfBenefit",
        "FamilyMemberHistory",
        "Flag",
        "Goal",
        "GraphDefinition",
        "Group",
        "GuidanceResponse",
        "HealthcareService",
        "ImagingStudy",
        "Immunization",
        "ImmunizationEvaluation",
        "ImmunizationRecommendation",
        "ImplementationGuide",
        "InsurancePlan",
        "Invoice",
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
        "MedicationKnowledge",
        "MedicationRequest",
        "MedicationStatement",
        "MedicinalProduct",
        "MedicinalProductAuthorization",
        "MedicinalProductContraindication",
        "MedicinalProductIndication",
        "MedicinalProductIngredient",
        "MedicinalProductInteraction",
        "MedicinalProductManufactured",
        "MedicinalProductPackaged",
        "MedicinalProductPharmaceutical",
        "MedicinalProductUndesirableEffect",
        "MessageDefinition",
        "MessageHeader",
        "MolecularSequence",
        "NamingSystem",
        "NutritionOrder",
        "Observation",
        "ObservationDefinition",
        "OperationDefinition",
        "OperationOutcome",
        "Organization",
        "OrganizationAffiliation",
        "Parameters",
        "Patient",
        "PaymentNotice",
        "PaymentReconciliation",
        "Person",
        "PlanDefinition",
        "Practitioner",
        "PractitionerRole",
        "Procedure",
        "Provenance",
        "Questionnaire",
        "QuestionnaireResponse",
        "RelatedPerson",
        "RequestGroup",
        "ResearchDefinition",
        "ResearchElementDefinition",
        "ResearchStudy",
        "ResearchSubject",
        "Resource",
        "RiskAssessment",
        "RiskEvidenceSynthesis",
        "Schedule",
        "SearchParameter",
        "ServiceRequest",
        "Slot",
        "Specimen",
        "SpecimenDefinition",
        "StructureDefinition",
        "StructureMap",
        "Subscription",
        "Substance",
        "SubstanceNucleicAcid",
        "SubstancePolymer",
        "SubstanceProtein",
        "SubstanceReferenceInformation",
        "SubstanceSourceMaterial",
        "SubstanceSpecification",
        "SupplyDelivery",
        "SupplyRequest",
        "Task",
        "TerminologyCapabilities",
        "TestReport",
        "TestScript",
        "ValueSet",
        "VerificationResult",
        "VisionPrescription",
      ])
      .optional(),
    _kind: z.lazy(getElementSchema).optional(),
    location: z.lazy(getReferenceSchema).optional(),
    performer: z.lazy(getReferenceSchema).array().optional(),
    productCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    productReference: z.lazy(getReferenceSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    reasonReference: z.lazy(getReferenceSchema).array().optional(),
    scheduledPeriod: z.lazy(getPeriodSchema).optional(),
    scheduledString: fhirString().optional(),
    _scheduledString: z.lazy(getElementSchema).optional(),
    scheduledTiming: z.lazy(getTimingSchema).optional(),
    status: z.enum([
      "cancelled",
      "completed",
      "entered-in-error",
      "in-progress",
      "not-started",
      "on-hold",
      "scheduled",
      "stopped",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusReason: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const product_x_Present = [
        "productCodeableConcept",
        "productReference",
      ].filter((field) => record[field] !== undefined);
      if (product_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of productCodeableConcept, productReference may be present for product[x]",
          path: [product_x_Present[0]],
        });
      }
      const scheduled_x_Present = [
        "scheduledPeriod",
        "scheduledString",
        "scheduledTiming",
      ].filter((field) => record[field] !== undefined);
      if (scheduled_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of scheduledPeriod, scheduledString, scheduledTiming may be present for scheduled[x]",
          path: [scheduled_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.instantiatesCanonical,
        record._instantiatesCanonical,
        "instantiatesCanonical",
        "_instantiatesCanonical",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.instantiatesUri,
        record._instantiatesUri,
        "instantiatesUri",
        "_instantiatesUri",
        ctx,
      );
      validateReferenceTarget(
        record.goal,
        "goal",
        ["http://hl7.org/fhir/StructureDefinition/Goal"],
        ["Goal"],
        ctx,
      );
      validateReferenceTarget(
        record.location,
        "location",
        ["http://hl7.org/fhir/StructureDefinition/Location"],
        ["Location"],
        ctx,
      );
      validateReferenceTarget(
        record.performer,
        "performer",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Device",
          "HealthcareService",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.productReference,
        "productReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        ["Medication", "Substance"],
        ctx,
      );
      validateReferenceTarget(
        record.reasonReference,
        "reasonReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
          "http://hl7.org/fhir/StructureDefinition/Observation",
        ],
        ["Condition", "DiagnosticReport", "DocumentReference", "Observation"],
        ctx,
      );
    });

export const CarePlan_Activity_DetailSchema =
  CarePlan_Activity_DetailSchemaInternal as z.ZodType<CarePlan_Activity_Detail>;
