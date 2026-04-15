// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirCode,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { OperationDefinition_Overload } from "./OperationDefinition_Overload";
import { OperationDefinition_OverloadSchemaInternal } from "./OperationDefinition_Overload";
import type { OperationDefinition_Parameter } from "./OperationDefinition_Parameter";
import { OperationDefinition_ParameterSchemaInternal } from "./OperationDefinition_Parameter";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface OperationDefinition extends DomainResource {
	/** Whether the operation affects state. Side effects such as producing audit trail entries do not count as 'affecting  state'. */
	affectsState?: boolean;
	/** Extensions for affectsState */
	_affectsState?: Element;
	/** Indicates that this operation definition is a constraining profile on the base. */
	base?: string;
	/** Extensions for base */
	_base?: Element;
	/** The name used to invoke the operation. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Additional information about how to use this operation or named query. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** The date  (and optionally time) when the operation definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the operation definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** Additional validation information for the in parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource as a whole. */
	inputProfile?: string;
	/** Extensions for inputProfile */
	_inputProfile?: Element;
	/** Indicates whether this operation can be invoked on a particular instance of one of the given types. */
	instance: boolean;
	/** Extensions for instance */
	_instance?: Element;
	/** A legal or geographic region in which the operation definition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** Whether this is an operation or a named query. */
	kind: "operation" | "query";
	/** Extensions for kind */
	_kind?: Element;
	/** A natural language name identifying the operation definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Additional validation information for the out parameters - a single profile that covers all the parameters. The profile is a constraint on the parameters resource. */
	outputProfile?: string;
	/** Extensions for outputProfile */
	_outputProfile?: Element;
	/** Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation. */
	overload?: Array<OperationDefinition_Overload>;
	/** The parameters for the operation/query. */
	parameter?: Array<OperationDefinition_Parameter>;
	/** The name of the organization or individual that published the operation definition. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this operation definition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** The types on which this operation can be executed. */
	resource?: Array<
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
		| "VisionPrescription"
		| null
	>;
	/** Extensions for resource */
	_resource?: Array<Element | null>;
	/** This is a OperationDefinition resource. */
	resourceType: "OperationDefinition";
	/** The status of this operation definition. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context). */
	system: boolean;
	/** Extensions for system */
	_system?: Element;
	/** A short, descriptive, user-friendly title for the operation definition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a specific resource id for the context). */
	type: boolean;
	/** Extensions for type */
	_type?: Element;
	/** An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate operation definition instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getOperationDefinition_OverloadSchema =
	(): z.ZodType<OperationDefinition_Overload> =>
		OperationDefinition_OverloadSchemaInternal as z.ZodType<OperationDefinition_Overload>;
const getOperationDefinition_ParameterSchema =
	(): z.ZodType<OperationDefinition_Parameter> =>
		OperationDefinition_ParameterSchemaInternal as z.ZodType<OperationDefinition_Parameter>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const OperationDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		affectsState: z.boolean().optional(),
		_affectsState: z.lazy(getElementSchema).optional(),
		base: fhirCanonical().optional(),
		_base: z.lazy(getElementSchema).optional(),
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		comment: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		inputProfile: fhirCanonical().optional(),
		_inputProfile: z.lazy(getElementSchema).optional(),
		instance: z.boolean(),
		_instance: z.lazy(getElementSchema).optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		kind: z.enum(["operation", "query"]),
		_kind: z.lazy(getElementSchema).optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		outputProfile: fhirCanonical().optional(),
		_outputProfile: z.lazy(getElementSchema).optional(),
		overload: z.lazy(getOperationDefinition_OverloadSchema).array().optional(),
		parameter: z
			.lazy(getOperationDefinition_ParameterSchema)
			.array()
			.optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resource: z
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
			.nullable()
			.array()
			.optional(),
		_resource: z.lazy(getElementSchema).nullable().array().optional(),
		resourceType: z.literal("OperationDefinition"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		system: z.boolean(),
		_system: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		type: z.boolean(),
		_type: z.lazy(getElementSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.resource,
				record._resource,
				"resource",
				"_resource",
				ctx,
			);
		});

export const OperationDefinitionSchema =
	OperationDefinitionSchemaInternal as z.ZodType<OperationDefinition>;
