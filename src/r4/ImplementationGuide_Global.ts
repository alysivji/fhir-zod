// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A set of profiles that all resources covered by this implementation guide must conform to. */
export interface ImplementationGuide_Global extends BackboneElement {
	/** A reference to the profile that all instances must conform to. */
	profile: string;
	/** Extensions for profile */
	_profile?: Element;
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
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_GlobalSchemaInternal =
	BackboneElementSchemaInternal.extend({
		profile: z.string().regex(/\S*/),
		_profile: z.lazy(getElementSchema).optional(),
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
		]),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImplementationGuide_GlobalSchema =
	ImplementationGuide_GlobalSchemaInternal as z.ZodType<ImplementationGuide_Global>;
