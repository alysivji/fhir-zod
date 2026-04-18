// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CapabilityStatement_Rest_Resource_Interaction } from "./CapabilityStatement_Rest_Resource_Interaction";
import { CapabilityStatement_Rest_Resource_InteractionSchemaInternal } from "./CapabilityStatement_Rest_Resource_Interaction";
import type { CapabilityStatement_Rest_Resource_SearchParam } from "./CapabilityStatement_Rest_Resource_SearchParam";
import { CapabilityStatement_Rest_Resource_SearchParamSchemaInternal } from "./CapabilityStatement_Rest_Resource_SearchParam";

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
	interaction: Array<CapabilityStatement_Rest_Resource_Interaction>;
	/** A specification of the profile that describes the solution's overall support for the resource, including any constraints on cardinality, bindings, lengths or other limitations. See further discussion in [Using Profiles](profiling.html#profile-uses). */
	profile?: Reference;
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
		| "BodySite"
		| "Bundle"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "ChargeItem"
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
		| "DataElement"
		| "DetectedIssue"
		| "Device"
		| "DeviceComponent"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUseStatement"
		| "DiagnosticReport"
		| "DocumentManifest"
		| "DocumentReference"
		| "DomainResource"
		| "EligibilityRequest"
		| "EligibilityResponse"
		| "Encounter"
		| "Endpoint"
		| "EnrollmentRequest"
		| "EnrollmentResponse"
		| "EpisodeOfCare"
		| "ExpansionProfile"
		| "ExplanationOfBenefit"
		| "FamilyMemberHistory"
		| "Flag"
		| "Goal"
		| "GraphDefinition"
		| "Group"
		| "GuidanceResponse"
		| "HealthcareService"
		| "ImagingManifest"
		| "ImagingStudy"
		| "Immunization"
		| "ImmunizationRecommendation"
		| "ImplementationGuide"
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
		| "MedicationRequest"
		| "MedicationStatement"
		| "MessageDefinition"
		| "MessageHeader"
		| "NamingSystem"
		| "NutritionOrder"
		| "Observation"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "Parameters"
		| "Patient"
		| "PaymentNotice"
		| "PaymentReconciliation"
		| "Person"
		| "PlanDefinition"
		| "Practitioner"
		| "PractitionerRole"
		| "Procedure"
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "Provenance"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "ReferralRequest"
		| "RelatedPerson"
		| "RequestGroup"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "Schedule"
		| "SearchParameter"
		| "Sequence"
		| "ServiceDefinition"
		| "Slot"
		| "Specimen"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "Substance"
		| "SupplyDelivery"
		| "SupplyRequest"
		| "Task"
		| "TestReport"
		| "TestScript"
		| "ValueSet"
		| "VisionPrescription";
	/** Extensions for type */
	_type?: Element;
	/** A flag to indicate that the server allows or needs to allow the client to create new identities on the server (e.g. that is, the client PUTs to a location where there is no existing resource). Allowing this operation means that the server allows the client to create new identities on the server. */
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
const getCapabilityStatement_Rest_Resource_SearchParamSchema =
	(): z.ZodType<CapabilityStatement_Rest_Resource_SearchParam> =>
		CapabilityStatement_Rest_Resource_SearchParamSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource_SearchParam>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

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
		documentation: z.string().optional(),
		_documentation: z.lazy(getElementSchema).optional(),
		interaction: z
			.lazy(getCapabilityStatement_Rest_Resource_InteractionSchema)
			.array(),
		profile: z.lazy(getReferenceSchema).optional(),
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
			"BodySite",
			"Bundle",
			"CapabilityStatement",
			"CarePlan",
			"CareTeam",
			"ChargeItem",
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
			"DataElement",
			"DetectedIssue",
			"Device",
			"DeviceComponent",
			"DeviceMetric",
			"DeviceRequest",
			"DeviceUseStatement",
			"DiagnosticReport",
			"DocumentManifest",
			"DocumentReference",
			"DomainResource",
			"EligibilityRequest",
			"EligibilityResponse",
			"Encounter",
			"Endpoint",
			"EnrollmentRequest",
			"EnrollmentResponse",
			"EpisodeOfCare",
			"ExpansionProfile",
			"ExplanationOfBenefit",
			"FamilyMemberHistory",
			"Flag",
			"Goal",
			"GraphDefinition",
			"Group",
			"GuidanceResponse",
			"HealthcareService",
			"ImagingManifest",
			"ImagingStudy",
			"Immunization",
			"ImmunizationRecommendation",
			"ImplementationGuide",
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
			"MedicationRequest",
			"MedicationStatement",
			"MessageDefinition",
			"MessageHeader",
			"NamingSystem",
			"NutritionOrder",
			"Observation",
			"OperationDefinition",
			"OperationOutcome",
			"Organization",
			"Parameters",
			"Patient",
			"PaymentNotice",
			"PaymentReconciliation",
			"Person",
			"PlanDefinition",
			"Practitioner",
			"PractitionerRole",
			"Procedure",
			"ProcedureRequest",
			"ProcessRequest",
			"ProcessResponse",
			"Provenance",
			"Questionnaire",
			"QuestionnaireResponse",
			"ReferralRequest",
			"RelatedPerson",
			"RequestGroup",
			"ResearchStudy",
			"ResearchSubject",
			"Resource",
			"RiskAssessment",
			"Schedule",
			"SearchParameter",
			"Sequence",
			"ServiceDefinition",
			"Slot",
			"Specimen",
			"StructureDefinition",
			"StructureMap",
			"Subscription",
			"Substance",
			"SupplyDelivery",
			"SupplyRequest",
			"Task",
			"TestReport",
			"TestScript",
			"ValueSet",
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
			validateReferenceTarget(
				record.profile,
				"profile",
				["http://hl7.org/fhir/StructureDefinition/StructureDefinition"],
				["StructureDefinition"],
				ctx,
			);
		});

export const CapabilityStatement_Rest_ResourceSchema =
	CapabilityStatement_Rest_ResourceSchemaInternal as z.ZodType<CapabilityStatement_Rest_Resource>;
