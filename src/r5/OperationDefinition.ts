// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirCode,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
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
	/** The label that is recommended to be used in the URL for this operation. In some cases, servers may need to use a different CapabilityStatement operation.name to differentiate between multiple SearchParameters that happen to have the same code. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Additional information about how to use this operation or named query. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the operation definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the operation definition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date  (and optionally time) when the operation definition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the operation definition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the operation definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this operation definition is authored for testing purposes (or education/evaluation/marketing) and is not intended for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this implementation guide when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
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
	/** The name of the organization or individual responsible for the release and ongoing maintenance of the operation definition. */
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
		| "BodySite"
		| "BodyStructure"
		| "boolean"
		| "Bundle"
		| "canonical"
		| "CanonicalResource"
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
		| "Conformance"
		| "Consent"
		| "ContactDetail"
		| "ContactPoint"
		| "Contract"
		| "Contributor"
		| "Count"
		| "Coverage"
		| "CoverageEligibilityRequest"
		| "CoverageEligibilityResponse"
		| "DataElement"
		| "DataRequirement"
		| "DataType"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceAssociation"
		| "DeviceComponent"
		| "DeviceDefinition"
		| "DeviceDispense"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUsage"
		| "DeviceUseRequest"
		| "DeviceUseStatement"
		| "DiagnosticOrder"
		| "DiagnosticReport"
		| "Distance"
		| "DocumentManifest"
		| "DocumentReference"
		| "DomainResource"
		| "Dosage"
		| "Duration"
		| "EffectEvidenceSynthesis"
		| "Element"
		| "ElementDefinition"
		| "EligibilityRequest"
		| "EligibilityResponse"
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
		| "ExpansionProfile"
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
		| "ImagingManifest"
		| "ImagingObjectSelection"
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
		| "Media"
		| "Medication"
		| "MedicationAdministration"
		| "MedicationDispense"
		| "MedicationKnowledge"
		| "MedicationOrder"
		| "MedicationRequest"
		| "MedicationStatement"
		| "MedicationUsage"
		| "MedicinalProduct"
		| "MedicinalProductAuthorization"
		| "MedicinalProductContraindication"
		| "MedicinalProductDefinition"
		| "MedicinalProductIndication"
		| "MedicinalProductIngredient"
		| "MedicinalProductInteraction"
		| "MedicinalProductManufactured"
		| "MedicinalProductPackaged"
		| "MedicinalProductPharmaceutical"
		| "MedicinalProductUndesirableEffect"
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
		| "Order"
		| "OrderResponse"
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
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "ProductShelfLife"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "RatioRange"
		| "Reference"
		| "ReferralRequest"
		| "RegulatedAuthorization"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestGroup"
		| "RequestOrchestration"
		| "Requirements"
		| "ResearchDefinition"
		| "ResearchElementDefinition"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "RiskEvidenceSynthesis"
		| "SampledData"
		| "Schedule"
		| "SearchParameter"
		| "Sequence"
		| "ServiceDefinition"
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
		| "SubstanceSpecification"
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
	/** Extensions for resource */
	_resource?: Array<Element | null>;
	/** This is a OperationDefinition resource. */
	resourceType: "OperationDefinition";
	/** The current state of this operation definition. */
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
	/** An absolute URI that is used to identify this operation definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this operation definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the operation definition is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate operation definition. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the operation definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the operation definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
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
			.regex(/^[\s\S]+$/)
			.optional(),
		_comment: z.lazy(getElementSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		copyright: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		copyrightLabel: fhirString().optional(),
		_copyrightLabel: z.lazy(getElementSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
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
			.regex(/^[\s\S]+$/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resource: z
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
				"BodySite",
				"BodyStructure",
				"boolean",
				"Bundle",
				"canonical",
				"CanonicalResource",
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
				"Conformance",
				"Consent",
				"ContactDetail",
				"ContactPoint",
				"Contract",
				"Contributor",
				"Count",
				"Coverage",
				"CoverageEligibilityRequest",
				"CoverageEligibilityResponse",
				"DataElement",
				"DataRequirement",
				"DataType",
				"date",
				"dateTime",
				"decimal",
				"DetectedIssue",
				"Device",
				"DeviceAssociation",
				"DeviceComponent",
				"DeviceDefinition",
				"DeviceDispense",
				"DeviceMetric",
				"DeviceRequest",
				"DeviceUsage",
				"DeviceUseRequest",
				"DeviceUseStatement",
				"DiagnosticOrder",
				"DiagnosticReport",
				"Distance",
				"DocumentManifest",
				"DocumentReference",
				"DomainResource",
				"Dosage",
				"Duration",
				"EffectEvidenceSynthesis",
				"Element",
				"ElementDefinition",
				"EligibilityRequest",
				"EligibilityResponse",
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
				"ExpansionProfile",
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
				"ImagingManifest",
				"ImagingObjectSelection",
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
				"Media",
				"Medication",
				"MedicationAdministration",
				"MedicationDispense",
				"MedicationKnowledge",
				"MedicationOrder",
				"MedicationRequest",
				"MedicationStatement",
				"MedicationUsage",
				"MedicinalProduct",
				"MedicinalProductAuthorization",
				"MedicinalProductContraindication",
				"MedicinalProductDefinition",
				"MedicinalProductIndication",
				"MedicinalProductIngredient",
				"MedicinalProductInteraction",
				"MedicinalProductManufactured",
				"MedicinalProductPackaged",
				"MedicinalProductPharmaceutical",
				"MedicinalProductUndesirableEffect",
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
				"Order",
				"OrderResponse",
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
				"ProcedureRequest",
				"ProcessRequest",
				"ProcessResponse",
				"ProductShelfLife",
				"Provenance",
				"Quantity",
				"Questionnaire",
				"QuestionnaireResponse",
				"Range",
				"Ratio",
				"RatioRange",
				"Reference",
				"ReferralRequest",
				"RegulatedAuthorization",
				"RelatedArtifact",
				"RelatedPerson",
				"RequestGroup",
				"RequestOrchestration",
				"Requirements",
				"ResearchDefinition",
				"ResearchElementDefinition",
				"ResearchStudy",
				"ResearchSubject",
				"Resource",
				"RiskAssessment",
				"RiskEvidenceSynthesis",
				"SampledData",
				"Schedule",
				"SearchParameter",
				"Sequence",
				"ServiceDefinition",
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
				"SubstanceSpecification",
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
				record.resource,
				record._resource,
				"resource",
				"_resource",
				ctx,
			);
		});

export const OperationDefinitionSchema =
	OperationDefinitionSchemaInternal as z.ZodType<OperationDefinition>;
