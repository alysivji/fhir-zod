// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CapabilityStatement_Rest_Resource_Interaction } from "./CapabilityStatement_Rest_Resource_Interaction";
import { CapabilityStatement_Rest_Resource_InteractionSchemaInternal } from "./CapabilityStatement_Rest_Resource_Interaction";
import type { CapabilityStatement_Rest_Resource_Operation } from "./CapabilityStatement_Rest_Resource_Operation";
import { CapabilityStatement_Rest_Resource_OperationSchemaInternal } from "./CapabilityStatement_Rest_Resource_Operation";
import type { CapabilityStatement_Rest_Resource_SearchParam } from "./CapabilityStatement_Rest_Resource_SearchParam";
import { CapabilityStatement_Rest_Resource_SearchParamSchemaInternal } from "./CapabilityStatement_Rest_Resource_SearchParam";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A specification of the restful capabilities of the solution for a specific resource type. */
export interface CapabilityStatement_Rest_Resource extends BackboneElement {
	/** A flag that indicates that the server supports conditional create. */
	conditionalCreate?: boolean;
	/** Extensions for conditionalCreate */
	_conditionalCreate?: Element;
	/** A code that indicates how the server supports conditional delete. */
	conditionalDelete?: "multiple" | "not-supported" | "single";
	/** Extensions for conditionalDelete */
	_conditionalDelete?: Element;
	/** A code that indicates how the server supports conditional read. */
	conditionalRead?:
		| "full-support"
		| "modified-since"
		| "not-match"
		| "not-supported";
	/** Extensions for conditionalRead */
	_conditionalRead?: Element;
	/** A flag that indicates that the server supports conditional update. */
	conditionalUpdate?: boolean;
	/** Extensions for conditionalUpdate */
	_conditionalUpdate?: Element;
	/** Additional information about the resource type used by the system. */
	documentation?: string;
	/** Extensions for documentation */
	_documentation?: Element;
	/** Identifies a restful operation supported by the solution. */
	interaction?: Array<CapabilityStatement_Rest_Resource_Interaction>;
	/** Definition of an operation or a named query together with its parameters and their meaning and type. Consult the definition of the operation for details about how to invoke the operation, and the parameters. */
	operation?: Array<CapabilityStatement_Rest_Resource_Operation>;
	/** A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses). */
	profile?: string;
	/** Extensions for profile */
	_profile?: Element;
	/** A flag for whether the server is able to return past versions as part of the vRead operation. */
	readHistory?: boolean;
	/** Extensions for readHistory */
	_readHistory?: Element;
	/** A set of flags that defines how references are supported. */
	referencePolicy?: Array<
		"enforced" | "literal" | "local" | "logical" | "resolves" | null
	>;
	/** Extensions for referencePolicy */
	_referencePolicy?: Array<Element | null>;
	/** A list of _include values supported by the server. */
	searchInclude?: Array<string | null>;
	/** Extensions for searchInclude */
	_searchInclude?: Array<Element | null>;
	/** Search parameters for implementations to support and/or make use of - either references to ones defined in the specification, or additional ones defined for/by the implementation. */
	searchParam?: Array<CapabilityStatement_Rest_Resource_SearchParam>;
	/** A list of _revinclude (reverse include) values supported by the server. */
	searchRevInclude?: Array<string | null>;
	/** Extensions for searchRevInclude */
	_searchRevInclude?: Array<Element | null>;
	/** A list of profiles that represent different use cases supported by the system. For a server, "supported by the system" means the system hosts/produces a set of resources that are conformant to a particular profile, and allows clients that use its services to search using this profile and to find appropriate data. For a client, it means the system will search by this profile and process data according to the guidance implicit in the profile. See further discussion in [Using Profiles](profiling.html#profile-uses). */
	supportedProfile?: Array<string | null>;
	/** Extensions for supportedProfile */
	_supportedProfile?: Array<Element | null>;
	/** A type of resource exposed via the restful interface. */
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
	/** A flag to indicate that the server allows or needs to allow the client to create new identities on the server (that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server. */
	updateCreate?: boolean;
	/** Extensions for updateCreate */
	_updateCreate?: Element;
	/** This field is set to no-version to specify that the system does not support (server) or use (client) versioning for this resource type. If this has some other value, the server must at least correctly track and populate the versionId meta-property on resources. If the value is 'versioned-update', then the server supports all the versioning features, including using e-tags for version integrity in the API. */
	versioning?: "no-version" | "versioned" | "versioned-update";
	/** Extensions for versioning */
	_versioning?: Element;
}

const getCapabilityStatement_Rest_Resource_InteractionSchema =
	(): z.ZodType<CapabilityStatement_Rest_Resource_Interaction> =>
		CapabilityStatement_Rest_Resource_InteractionSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_Interaction>;
const getCapabilityStatement_Rest_Resource_OperationSchema =
	(): z.ZodType<CapabilityStatement_Rest_Resource_Operation> =>
		CapabilityStatement_Rest_Resource_OperationSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_Operation>;
const getCapabilityStatement_Rest_Resource_SearchParamSchema =
	(): z.ZodType<CapabilityStatement_Rest_Resource_SearchParam> =>
		CapabilityStatement_Rest_Resource_SearchParamSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_SearchParam>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CapabilityStatement_Rest_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		conditionalCreate: z.boolean().optional(),
		_conditionalCreate: z.lazy(getElementSchema).optional(),
		conditionalDelete: z
			.enum(["multiple", "not-supported", "single"])
			.optional(),
		_conditionalDelete: z.lazy(getElementSchema).optional(),
		conditionalRead: z
			.enum(["full-support", "modified-since", "not-match", "not-supported"])
			.optional(),
		_conditionalRead: z.lazy(getElementSchema).optional(),
		conditionalUpdate: z.boolean().optional(),
		_conditionalUpdate: z.lazy(getElementSchema).optional(),
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		interaction: z
			.lazy(getCapabilityStatement_Rest_Resource_InteractionSchema)
			.array()
			.optional(),
		operation: z
			.lazy(getCapabilityStatement_Rest_Resource_OperationSchema)
			.array()
			.optional(),
		profile: fhirCanonical().optional(),
		_profile: z.lazy(getElementSchema).optional(),
		readHistory: z.boolean().optional(),
		_readHistory: z.lazy(getElementSchema).optional(),
		referencePolicy: z
			.enum(["enforced", "literal", "local", "logical", "resolves"])
			.nullable()
			.array()
			.optional(),
		_referencePolicy: z.lazy(getElementSchema).nullable().array().optional(),
		searchInclude: fhirString().nullable().array().optional(),
		_searchInclude: z.lazy(getElementSchema).nullable().array().optional(),
		searchParam: z
			.lazy(getCapabilityStatement_Rest_Resource_SearchParamSchema)
			.array()
			.optional(),
		searchRevInclude: fhirString().nullable().array().optional(),
		_searchRevInclude: z.lazy(getElementSchema).nullable().array().optional(),
		supportedProfile: fhirCanonical().nullable().array().optional(),
		_supportedProfile: z.lazy(getElementSchema).nullable().array().optional(),
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
		updateCreate: z.boolean().optional(),
		_updateCreate: z.lazy(getElementSchema).optional(),
		versioning: z
			.enum(["no-version", "versioned", "versioned-update"])
			.optional(),
		_versioning: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.referencePolicy,
				record._referencePolicy,
				"referencePolicy",
				"_referencePolicy",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.searchInclude,
				record._searchInclude,
				"searchInclude",
				"_searchInclude",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.searchRevInclude,
				record._searchRevInclude,
				"searchRevInclude",
				"_searchRevInclude",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.supportedProfile,
				record._supportedProfile,
				"supportedProfile",
				"_supportedProfile",
				ctx,
			);
		});

export const CapabilityStatement_Rest_ResourceSchema =
	CapabilityStatement_Rest_ResourceSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource>;
