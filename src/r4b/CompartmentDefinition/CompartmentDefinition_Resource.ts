// Profile: http://hl7.org/fhir/StructureDefinition/CompartmentDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

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
		| "AdministrableProductDefinition"
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
		| "Citation"
		| "Claim"
		| "ClaimResponse"
		| "ClinicalImpression"
		| "ClinicalUseDefinition"
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
		| "Encounter"
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
		| "Ingredient"
		| "InsurancePlan"
		| "Invoice"
		| "Library"
		| "Linkage"
		| "List"
		| "Location"
		| "ManufacturedItemDefinition"
		| "Measure"
		| "MeasureReport"
		| "Media"
		| "Medication"
		| "MedicationAdministration"
		| "MedicationDispense"
		| "MedicationKnowledge"
		| "MedicationRequest"
		| "MedicationStatement"
		| "MedicinalProductDefinition"
		| "MessageDefinition"
		| "MessageHeader"
		| "MolecularSequence"
		| "NamingSystem"
		| "NutritionOrder"
		| "NutritionProduct"
		| "Observation"
		| "ObservationDefinition"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "OrganizationAffiliation"
		| "PackagedProductDefinition"
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
		| "RegulatedAuthorization"
		| "RelatedPerson"
		| "RequestGroup"
		| "ResearchDefinition"
		| "ResearchElementDefinition"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "Schedule"
		| "SearchParameter"
		| "ServiceRequest"
		| "Slot"
		| "Specimen"
		| "SpecimenDefinition"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "SubscriptionStatus"
		| "SubscriptionTopic"
		| "Substance"
		| "SubstanceDefinition"
		| "SupplyDelivery"
		| "SupplyRequest"
		| "Task"
		| "TerminologyCapabilities"
		| "TestReport"
		| "TestScript"
		| "ValueSet"
		| "VerificationResult"
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
			"AdministrableProductDefinition",
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
			"Citation",
			"Claim",
			"ClaimResponse",
			"ClinicalImpression",
			"ClinicalUseDefinition",
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
			"Encounter",
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
			"Ingredient",
			"InsurancePlan",
			"Invoice",
			"Library",
			"Linkage",
			"List",
			"Location",
			"ManufacturedItemDefinition",
			"Measure",
			"MeasureReport",
			"Media",
			"Medication",
			"MedicationAdministration",
			"MedicationDispense",
			"MedicationKnowledge",
			"MedicationRequest",
			"MedicationStatement",
			"MedicinalProductDefinition",
			"MessageDefinition",
			"MessageHeader",
			"MolecularSequence",
			"NamingSystem",
			"NutritionOrder",
			"NutritionProduct",
			"Observation",
			"ObservationDefinition",
			"OperationDefinition",
			"OperationOutcome",
			"Organization",
			"OrganizationAffiliation",
			"PackagedProductDefinition",
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
			"RegulatedAuthorization",
			"RelatedPerson",
			"RequestGroup",
			"ResearchDefinition",
			"ResearchElementDefinition",
			"ResearchStudy",
			"ResearchSubject",
			"Resource",
			"RiskAssessment",
			"Schedule",
			"SearchParameter",
			"ServiceRequest",
			"Slot",
			"Specimen",
			"SpecimenDefinition",
			"StructureDefinition",
			"StructureMap",
			"Subscription",
			"SubscriptionStatus",
			"SubscriptionTopic",
			"Substance",
			"SubstanceDefinition",
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
