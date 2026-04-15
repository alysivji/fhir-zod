// Profile: http://hl7.org/fhir/StructureDefinition/SearchParameter
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

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
import type { SearchParameter_Component } from "./SearchParameter_Component";
import { SearchParameter_ComponentSchemaInternal } from "./SearchParameter_Component";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface SearchParameter extends DomainResource {
	/** The base resource type(s) that this search parameter can be used against. */
	base: Array<
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
	/** Extensions for base */
	_base?: Array<Element | null>;
	/** Contains the names of any search parameters which may be chained to the containing search parameter. Chained parameters may be added to search parameters of type reference and specify that resources will only be returned if they contain a reference to a resource which matches the chained parameter value. Values for this field should be drawn from SearchParameter.code for a parameter on the target resource type. */
	chain?: Array<string | null>;
	/** Extensions for chain */
	_chain?: Array<Element | null>;
	/** The label that is recommended to be used in the URL or the parameter name in a parameters resource for this search parameter.  In some cases, servers may need to use a different CapabilityStatement searchParam.name to differentiate between multiple SearchParameters that happen to have the same code. */
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
	/** FHIRPath expression that defines/sets a complex constraint for when this SearchParameter is applicable. */
	constraint?: string;
	/** Extensions for constraint */
	_constraint?: Element;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the search parameter and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the search parameter. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date  (and optionally time) when the search parameter was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the search parameter changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Where this search parameter is originally defined. If a derivedFrom is provided, then the details in the search parameter must be consistent with the definition from which it is defined. i.e. the parameter should have the same meaning, and (usually) the functionality should be a proper subset of the underlying search parameter. */
	derivedFrom?: string;
	/** Extensions for derivedFrom */
	_derivedFrom?: Element;
	/** And how it used. */
	description: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this search parameter is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A FHIRPath expression that returns a set of elements for the search parameter. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** A formal identifier that is used to identify this search parameter when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the search parameter is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A modifier supported for the search parameter. */
	modifier?: Array<
		| "above"
		| "below"
		| "code-text"
		| "contains"
		| "exact"
		| "identifier"
		| "in"
		| "iterate"
		| "missing"
		| "not"
		| "not-in"
		| "of-type"
		| "text"
		| "text-advanced"
		| "type"
		| null
	>;
	/** Extensions for modifier */
	_modifier?: Array<Element | null>;
	/** Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match. */
	multipleAnd?: boolean;
	/** Extensions for multipleAnd */
	_multipleAnd?: Element;
	/** Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match. */
	multipleOr?: boolean;
	/** Extensions for multipleOr */
	_multipleOr?: Element;
	/** A natural language name identifying the search parameter. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** How the search parameter relates to the set of elements returned by evaluating the expression query. */
	processingMode?: "normal" | "other" | "phonetic";
	/** Extensions for processingMode */
	_processingMode?: Element;
	/** The name of the organization or individual tresponsible for the release and ongoing maintenance of the search parameter. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this search parameter is needed and why it has been designed as it has. */
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
	/** Extensions for target */
	_target?: Array<Element | null>;
	/** A short, descriptive, user-friendly title for the search parameter. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** The type of value that a search parameter may contain, and how the content is interpreted. */
	type:
		| "composite"
		| "date"
		| "number"
		| "quantity"
		| "reference"
		| "special"
		| "string"
		| "token"
		| "uri";
	/** Extensions for type */
	_type?: Element;
	/** An absolute URI that is used to identify this search parameter when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this search parameter is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the search parameter is stored on different servers. */
	url: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate search parameter instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the search parameter when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the search parameter author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getSearchParameter_ComponentSchema =
	(): z.ZodType<SearchParameter_Component> =>
		SearchParameter_ComponentSchemaInternal as z.ZodType<SearchParameter_Component>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const SearchParameterSchemaInternal =
	DomainResourceSchemaInternal.extend({
		base: z
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
		constraint: fhirString().optional(),
		_constraint: z.lazy(getElementSchema).optional(),
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
		derivedFrom: fhirCanonical().optional(),
		_derivedFrom: z.lazy(getElementSchema).optional(),
		description: z.string().regex(/^[\s\S]+$/),
		_description: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		expression: fhirString().optional(),
		_expression: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		modifier: z
			.enum([
				"above",
				"below",
				"code-text",
				"contains",
				"exact",
				"identifier",
				"in",
				"iterate",
				"missing",
				"not",
				"not-in",
				"of-type",
				"text",
				"text-advanced",
				"type",
			])
			.nullable()
			.array()
			.optional(),
		_modifier: z.lazy(getElementSchema).nullable().array().optional(),
		multipleAnd: z.boolean().optional(),
		_multipleAnd: z.lazy(getElementSchema).optional(),
		multipleOr: z.boolean().optional(),
		_multipleOr: z.lazy(getElementSchema).optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		processingMode: z.enum(["normal", "other", "phonetic"]).optional(),
		_processingMode: z.lazy(getElementSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("SearchParameter"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		target: z
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
		_target: z.lazy(getElementSchema).nullable().array().optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		type: z.enum([
			"composite",
			"date",
			"number",
			"quantity",
			"reference",
			"special",
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
				record.base,
				record._base,
				"base",
				"_base",
				ctx,
			);
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
