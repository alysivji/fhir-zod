// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { TestScript_Setup_Action_Assert_Rule } from "./TestScript_Setup_Action_Assert_Rule";
import { TestScript_Setup_Action_Assert_RuleSchemaInternal } from "./TestScript_Setup_Action_Assert_Rule";
import type { TestScript_Setup_Action_Assert_Ruleset } from "./TestScript_Setup_Action_Assert_Ruleset";
import { TestScript_Setup_Action_Assert_RulesetSchemaInternal } from "./TestScript_Setup_Action_Assert_Ruleset";

/** Evaluates the results of previous operations to determine if the server under test behaves appropriately. */
export interface TestScript_Setup_Action_Assert extends BackboneElement {
	/** The fluentpath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both. */
	compareToSourceExpression?: string;
	/** Extensions for compareToSourceExpression */
	_compareToSourceExpression?: Element;
	/** Id of the source fixture used as the contents to be evaluated by either the "source/expression" or "sourceId/path" definition. */
	compareToSourceId?: string;
	/** Extensions for compareToSourceId */
	_compareToSourceId?: Element;
	/** XPath or JSONPath expression to evaluate against the source fixture. When compareToSourceId is defined, either compareToSourceExpression or compareToSourcePath must be defined, but not both. */
	compareToSourcePath?: string;
	/** Extensions for compareToSourcePath */
	_compareToSourcePath?: Element;
	/** The content-type or mime-type to use for RESTful operation in the 'Content-Type' header. */
	contentType?: "json" | "none" | "ttl" | "xml";
	/** Extensions for contentType */
	_contentType?: Element;
	/** The description would be used by test engines for tracking and reporting purposes. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The direction to use for the assertion. */
	direction?: "request" | "response";
	/** Extensions for direction */
	_direction?: Element;
	/** The fluentpath expression to be evaluated against the request or response message contents - HTTP headers and payload. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** The HTTP header field name e.g. 'Location'. */
	headerField?: string;
	/** Extensions for headerField */
	_headerField?: Element;
	/** The label would be used for tracking/logging purposes by test engines. */
	label?: string;
	/** Extensions for label */
	_label?: Element;
	/** The ID of a fixture.  Asserts that the response contains at a minimum the fixture specified by minimumId. */
	minimumId?: string;
	/** Extensions for minimumId */
	_minimumId?: Element;
	/** Whether or not the test execution performs validation on the bundle navigation links. */
	navigationLinks?: boolean;
	/** Extensions for navigationLinks */
	_navigationLinks?: Element;
	/** The operator type defines the conditional behavior of the assert. If not defined, the default is equals. */
	operator?:
		| "contains"
		| "empty"
		| "equals"
		| "eval"
		| "greaterThan"
		| "in"
		| "lessThan"
		| "notContains"
		| "notEmpty"
		| "notEquals"
		| "notIn";
	/** Extensions for operator */
	_operator?: Element;
	/** The XPath or JSONPath expression to be evaluated against the fixture representing the response received from server. */
	path?: string;
	/** Extensions for path */
	_path?: Element;
	/** The request method or HTTP operation code to compare against that used by the client system under test. */
	requestMethod?: "delete" | "get" | "options" | "patch" | "post" | "put";
	/** Extensions for requestMethod */
	_requestMethod?: Element;
	/** The value to use in a comparison against the request URL path string. */
	requestURL?: string;
	/** Extensions for requestURL */
	_requestURL?: Element;
	/** The type of the resource.  See http://hl7.org/fhir/STU3/resourcelist.html. */
	resource?:
		| "Account"
		| "ActivityDefinition"
		| "Address"
		| "AdverseEvent"
		| "Age"
		| "AllergyIntolerance"
		| "Annotation"
		| "Appointment"
		| "AppointmentResponse"
		| "Attachment"
		| "AuditEvent"
		| "BackboneElement"
		| "base64Binary"
		| "Basic"
		| "Binary"
		| "BodySite"
		| "boolean"
		| "Bundle"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "ChargeItem"
		| "Claim"
		| "ClaimResponse"
		| "ClinicalImpression"
		| "code"
		| "CodeableConcept"
		| "CodeSystem"
		| "Coding"
		| "Communication"
		| "CommunicationRequest"
		| "CompartmentDefinition"
		| "Composition"
		| "ConceptMap"
		| "Condition"
		| "Consent"
		| "ContactDetail"
		| "ContactPoint"
		| "Contract"
		| "Contributor"
		| "Count"
		| "Coverage"
		| "DataElement"
		| "DataRequirement"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceComponent"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUseStatement"
		| "DiagnosticReport"
		| "Distance"
		| "DocumentManifest"
		| "DocumentReference"
		| "DomainResource"
		| "Dosage"
		| "Duration"
		| "Element"
		| "ElementDefinition"
		| "EligibilityRequest"
		| "EligibilityResponse"
		| "Encounter"
		| "Endpoint"
		| "EnrollmentRequest"
		| "EnrollmentResponse"
		| "EpisodeOfCare"
		| "ExpansionProfile"
		| "ExplanationOfBenefit"
		| "Extension"
		| "FamilyMemberHistory"
		| "Flag"
		| "Goal"
		| "GraphDefinition"
		| "Group"
		| "GuidanceResponse"
		| "HealthcareService"
		| "HumanName"
		| "id"
		| "Identifier"
		| "ImagingManifest"
		| "ImagingStudy"
		| "Immunization"
		| "ImmunizationRecommendation"
		| "ImplementationGuide"
		| "instant"
		| "integer"
		| "Library"
		| "Linkage"
		| "List"
		| "Location"
		| "markdown"
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
		| "Meta"
		| "Money"
		| "NamingSystem"
		| "Narrative"
		| "NutritionOrder"
		| "Observation"
		| "oid"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "ParameterDefinition"
		| "Parameters"
		| "Patient"
		| "PaymentNotice"
		| "PaymentReconciliation"
		| "Period"
		| "Person"
		| "PlanDefinition"
		| "positiveInt"
		| "Practitioner"
		| "PractitionerRole"
		| "Procedure"
		| "ProcedureRequest"
		| "ProcessRequest"
		| "ProcessResponse"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "Reference"
		| "ReferralRequest"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestGroup"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "SampledData"
		| "Schedule"
		| "SearchParameter"
		| "Sequence"
		| "ServiceDefinition"
		| "Signature"
		| "SimpleQuantity"
		| "Slot"
		| "Specimen"
		| "string"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "Substance"
		| "SupplyDelivery"
		| "SupplyRequest"
		| "Task"
		| "TestReport"
		| "TestScript"
		| "time"
		| "Timing"
		| "TriggerDefinition"
		| "unsignedInt"
		| "uri"
		| "UsageContext"
		| "uuid"
		| "ValueSet"
		| "VisionPrescription"
		| "xhtml";
	/** Extensions for resource */
	_resource?: Element;
	/** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable. */
	response?:
		| "bad"
		| "conflict"
		| "created"
		| "forbidden"
		| "gone"
		| "methodNotAllowed"
		| "noContent"
		| "notFound"
		| "notModified"
		| "okay"
		| "preconditionFailed"
		| "unprocessable";
	/** Extensions for response */
	_response?: Element;
	/** The value of the HTTP response code to be tested. */
	responseCode?: string;
	/** Extensions for responseCode */
	_responseCode?: Element;
	/** The TestScript.rule this assert will evaluate. */
	rule?: TestScript_Setup_Action_Assert_Rule;
	/** The TestScript.ruleset this assert will evaluate. */
	ruleset?: TestScript_Setup_Action_Assert_Ruleset;
	/** Fixture to evaluate the XPath/JSONPath expression or the headerField  against. */
	sourceId?: string;
	/** Extensions for sourceId */
	_sourceId?: Element;
	/** The ID of the Profile to validate against. */
	validateProfileId?: string;
	/** Extensions for validateProfileId */
	_validateProfileId?: Element;
	/** The value to compare to. */
	value?: string;
	/** Extensions for value */
	_value?: Element;
	/** Whether or not the test execution will produce a warning only on error for this assert. */
	warningOnly?: boolean;
	/** Extensions for warningOnly */
	_warningOnly?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getTestScript_Setup_Action_Assert_RuleSchema =
	(): z.ZodType<TestScript_Setup_Action_Assert_Rule> =>
		TestScript_Setup_Action_Assert_RuleSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Rule>;
const getTestScript_Setup_Action_Assert_RulesetSchema =
	(): z.ZodType<TestScript_Setup_Action_Assert_Ruleset> =>
		TestScript_Setup_Action_Assert_RulesetSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert_Ruleset>;

/** @internal */
export const TestScript_Setup_Action_AssertSchemaInternal =
	BackboneElementSchemaInternal.extend({
		compareToSourceExpression: fhirString().optional(),
		_compareToSourceExpression: z.lazy(getElementSchema).optional(),
		compareToSourceId: fhirString().optional(),
		_compareToSourceId: z.lazy(getElementSchema).optional(),
		compareToSourcePath: fhirString().optional(),
		_compareToSourcePath: z.lazy(getElementSchema).optional(),
		contentType: z.enum(["json", "none", "ttl", "xml"]).optional(),
		_contentType: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		direction: z.enum(["request", "response"]).optional(),
		_direction: z.lazy(getElementSchema).optional(),
		expression: fhirString().optional(),
		_expression: z.lazy(getElementSchema).optional(),
		headerField: fhirString().optional(),
		_headerField: z.lazy(getElementSchema).optional(),
		label: fhirString().optional(),
		_label: z.lazy(getElementSchema).optional(),
		minimumId: fhirString().optional(),
		_minimumId: z.lazy(getElementSchema).optional(),
		navigationLinks: z.boolean().optional(),
		_navigationLinks: z.lazy(getElementSchema).optional(),
		operator: z
			.enum([
				"contains",
				"empty",
				"equals",
				"eval",
				"greaterThan",
				"in",
				"lessThan",
				"notContains",
				"notEmpty",
				"notEquals",
				"notIn",
			])
			.optional(),
		_operator: z.lazy(getElementSchema).optional(),
		path: fhirString().optional(),
		_path: z.lazy(getElementSchema).optional(),
		requestMethod: z
			.enum(["delete", "get", "options", "patch", "post", "put"])
			.optional(),
		_requestMethod: z.lazy(getElementSchema).optional(),
		requestURL: fhirString().optional(),
		_requestURL: z.lazy(getElementSchema).optional(),
		resource: z
			.enum([
				"Account",
				"ActivityDefinition",
				"Address",
				"AdverseEvent",
				"Age",
				"AllergyIntolerance",
				"Annotation",
				"Appointment",
				"AppointmentResponse",
				"Attachment",
				"AuditEvent",
				"BackboneElement",
				"base64Binary",
				"Basic",
				"Binary",
				"BodySite",
				"boolean",
				"Bundle",
				"CapabilityStatement",
				"CarePlan",
				"CareTeam",
				"ChargeItem",
				"Claim",
				"ClaimResponse",
				"ClinicalImpression",
				"code",
				"CodeableConcept",
				"CodeSystem",
				"Coding",
				"Communication",
				"CommunicationRequest",
				"CompartmentDefinition",
				"Composition",
				"ConceptMap",
				"Condition",
				"Consent",
				"ContactDetail",
				"ContactPoint",
				"Contract",
				"Contributor",
				"Count",
				"Coverage",
				"DataElement",
				"DataRequirement",
				"date",
				"dateTime",
				"decimal",
				"DetectedIssue",
				"Device",
				"DeviceComponent",
				"DeviceMetric",
				"DeviceRequest",
				"DeviceUseStatement",
				"DiagnosticReport",
				"Distance",
				"DocumentManifest",
				"DocumentReference",
				"DomainResource",
				"Dosage",
				"Duration",
				"Element",
				"ElementDefinition",
				"EligibilityRequest",
				"EligibilityResponse",
				"Encounter",
				"Endpoint",
				"EnrollmentRequest",
				"EnrollmentResponse",
				"EpisodeOfCare",
				"ExpansionProfile",
				"ExplanationOfBenefit",
				"Extension",
				"FamilyMemberHistory",
				"Flag",
				"Goal",
				"GraphDefinition",
				"Group",
				"GuidanceResponse",
				"HealthcareService",
				"HumanName",
				"id",
				"Identifier",
				"ImagingManifest",
				"ImagingStudy",
				"Immunization",
				"ImmunizationRecommendation",
				"ImplementationGuide",
				"instant",
				"integer",
				"Library",
				"Linkage",
				"List",
				"Location",
				"markdown",
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
				"Meta",
				"Money",
				"NamingSystem",
				"Narrative",
				"NutritionOrder",
				"Observation",
				"oid",
				"OperationDefinition",
				"OperationOutcome",
				"Organization",
				"ParameterDefinition",
				"Parameters",
				"Patient",
				"PaymentNotice",
				"PaymentReconciliation",
				"Period",
				"Person",
				"PlanDefinition",
				"positiveInt",
				"Practitioner",
				"PractitionerRole",
				"Procedure",
				"ProcedureRequest",
				"ProcessRequest",
				"ProcessResponse",
				"Provenance",
				"Quantity",
				"Questionnaire",
				"QuestionnaireResponse",
				"Range",
				"Ratio",
				"Reference",
				"ReferralRequest",
				"RelatedArtifact",
				"RelatedPerson",
				"RequestGroup",
				"ResearchStudy",
				"ResearchSubject",
				"Resource",
				"RiskAssessment",
				"SampledData",
				"Schedule",
				"SearchParameter",
				"Sequence",
				"ServiceDefinition",
				"Signature",
				"SimpleQuantity",
				"Slot",
				"Specimen",
				"string",
				"StructureDefinition",
				"StructureMap",
				"Subscription",
				"Substance",
				"SupplyDelivery",
				"SupplyRequest",
				"Task",
				"TestReport",
				"TestScript",
				"time",
				"Timing",
				"TriggerDefinition",
				"unsignedInt",
				"uri",
				"UsageContext",
				"uuid",
				"ValueSet",
				"VisionPrescription",
				"xhtml",
			])
			.optional(),
		_resource: z.lazy(getElementSchema).optional(),
		response: z
			.enum([
				"bad",
				"conflict",
				"created",
				"forbidden",
				"gone",
				"methodNotAllowed",
				"noContent",
				"notFound",
				"notModified",
				"okay",
				"preconditionFailed",
				"unprocessable",
			])
			.optional(),
		_response: z.lazy(getElementSchema).optional(),
		responseCode: fhirString().optional(),
		_responseCode: z.lazy(getElementSchema).optional(),
		rule: z.lazy(getTestScript_Setup_Action_Assert_RuleSchema).optional(),
		ruleset: z.lazy(getTestScript_Setup_Action_Assert_RulesetSchema).optional(),
		sourceId: fhirId().optional(),
		_sourceId: z.lazy(getElementSchema).optional(),
		validateProfileId: fhirId().optional(),
		_validateProfileId: z.lazy(getElementSchema).optional(),
		value: fhirString().optional(),
		_value: z.lazy(getElementSchema).optional(),
		warningOnly: z.boolean().optional(),
		_warningOnly: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Setup_Action_AssertSchema =
	TestScript_Setup_Action_AssertSchemaInternal as z.ZodType<TestScript_Setup_Action_Assert>;
