// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { GraphDefinition_Link } from "./GraphDefinition_Link";
import { GraphDefinition_LinkSchemaInternal } from "./GraphDefinition_Link";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */
export interface GraphDefinition extends DomainResource {
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** The date  (and optionally time) when the graph definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the graph definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
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
	/** The name of the organization or individual that published the graph definition. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this graph definition is needed and why it has been designed as it has. */
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
	/** Extensions for start */
	_start?: Element;
	/** The status of this graph definition. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this graph definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the graph definition is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate graph definition instances. */
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
const getGraphDefinition_LinkSchema = (): z.ZodType<GraphDefinition_Link> =>
	GraphDefinition_LinkSchemaInternal as z.ZodType<GraphDefinition_Link>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const GraphDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		contact: z.lazy(getContactDetailSchema).array().optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		description: z.string().optional(),
		_description: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		link: z.lazy(getGraphDefinition_LinkSchema).array().optional(),
		name: z.string().regex(/[ \r\n\t\S]+/),
		_name: z.lazy(getElementSchema).optional(),
		profile: z.string().regex(/\S*/).optional(),
		_profile: z.lazy(getElementSchema).optional(),
		publisher: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
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
		_start: z.lazy(getElementSchema).optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		url: z.string().regex(/\S*/).optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const GraphDefinitionSchema =
	GraphDefinitionSchemaInternal as z.ZodType<GraphDefinition>;
