// Profile: http://hl7.org/fhir/StructureDefinition/ActivityDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { Contributor } from "../Contributor";
import { ContributorSchemaInternal } from "../Contributor";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Dosage } from "../Dosage";
import { DosageSchemaInternal } from "../Dosage";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { ActivityDefinition_DynamicValue } from "./ActivityDefinition_DynamicValue";
import { ActivityDefinition_DynamicValueSchemaInternal } from "./ActivityDefinition_DynamicValue";
import type { ActivityDefinition_Participant } from "./ActivityDefinition_Participant";
import { ActivityDefinition_ParticipantSchemaInternal } from "./ActivityDefinition_Participant";

/** Base StructureDefinition for ActivityDefinition Resource */
export interface ActivityDefinition extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** Indicates the sites on the subject's body where the procedure should be performed (I.e. the target sites). */
	bodySite?: Array<CodeableConcept>;
	/** Detailed description of the type of activity; e.g. What lab test, what procedure, what kind of encounter. */
	code?: CodeableConcept;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A contributor to the content of the asset, including authors, editors, reviewers, and endorsers. */
	contributor?: Array<Contributor>;
	/** A copyright statement relating to the activity definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the activity definition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the activity definition was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the activity definition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the activity definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Provides detailed dosage instructions in the same way that they are described for MedicationRequest resources. */
	dosage?: Array<Dosage>;
	/** Dynamic values that will be evaluated to produce values for elements of the resulting resource. For example, if the dosage of a medication must be computed based on the patient's weight, a dynamic value would be used to specify an expression that calculated the weight, and the path on the intent resource that would contain the result. */
	dynamicValue?: Array<ActivityDefinition_DynamicValue>;
	/** The period during which the activity definition content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** A boolean value to indicate that this activity definition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this activity definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the activity definition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A description of the kind of resource the activity definition is representing. For example, a MedicationRequest, a ProcedureRequest, or a CommunicationRequest. Typically, but not always, this is a Request resource. */
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
	/** Extensions for kind */
	_kind?: Element;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval, but doesn't change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A reference to a Library resource containing any formal logic used by the asset. */
	library?: Array<Reference>;
	/** Identifies the facility where the activity will occur; e.g. home, hospital, specific clinic, etc. */
	location?: Reference;
	/** A natural language name identifying the activity definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Indicates who should participate in performing the action described. */
	participant?: Array<ActivityDefinition_Participant>;
	/** Identifies the food, drug or other product being consumed or supplied in the activity. */
	productCodeableConcept?: CodeableConcept;
	/** Identifies the food, drug or other product being consumed or supplied in the activity. */
	productReference?: Reference;
	/** The name of the individual or organization that published the activity definition. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explaination of why this activity definition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** Identifies the quantity expected to be consumed at once (per dose, per meal, etc.). */
	quantity?: Quantity;
	/** Related artifacts such as additional documentation, justification, or bibliographic references. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a ActivityDefinition resource. */
	resourceType: "ActivityDefinition";
	/** The status of this activity definition. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The period, timing or frequency upon which the described activity is to occur. */
	timingDateTime?: string;
	/** Extensions for timingDateTime */
	_timingDateTime?: Element;
	/** The period, timing or frequency upon which the described activity is to occur. */
	timingPeriod?: Period;
	/** The period, timing or frequency upon which the described activity is to occur. */
	timingRange?: Range;
	/** The period, timing or frequency upon which the described activity is to occur. */
	timingTiming?: Timing;
	/** A short, descriptive, user-friendly title for the activity definition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Descriptive topics related to the content of the activity. Topics provide a high-level categorization of the activity that can be useful for filtering and searching. */
	topic?: Array<CodeableConcept>;
	/** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input. */
	transform?: Reference;
	/** An absolute URI that is used to identify this activity definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this activity definition is (or will be) published. The URL SHOULD include the major version of the activity definition. For more information see [Technical and Business Versions](resource.html#versions). */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** A detailed description of how the asset is used from a clinical perspective. */
	usage?: string;
	/** Extensions for usage */
	_usage?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate activity definition instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the activity definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the activity definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getActivityDefinition_DynamicValueSchema =
	(): z.ZodType<ActivityDefinition_DynamicValue> =>
		ActivityDefinition_DynamicValueSchemaInternal as z.ZodType<ActivityDefinition_DynamicValue>;
const getActivityDefinition_ParticipantSchema =
	(): z.ZodType<ActivityDefinition_Participant> =>
		ActivityDefinition_ParticipantSchemaInternal as z.ZodType<ActivityDefinition_Participant>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getContributorSchema = (): z.ZodType<Contributor> =>
	ContributorSchemaInternal as z.ZodType<Contributor>;
const getDosageSchema = (): z.ZodType<Dosage> =>
	DosageSchemaInternal as z.ZodType<Dosage>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ActivityDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		contributor: z.lazy(getContributorSchema).array().optional(),
		copyright: z.string().optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		description: z.string().optional(),
		_description: z.lazy(getElementSchema).optional(),
		dosage: z.lazy(getDosageSchema).array().optional(),
		dynamicValue: z
			.lazy(getActivityDefinition_DynamicValueSchema)
			.array()
			.optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
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
			])
			.optional(),
		_kind: z.lazy(getElementSchema).optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		library: z.lazy(getReferenceSchema).array().optional(),
		location: z.lazy(getReferenceSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		participant: z
			.lazy(getActivityDefinition_ParticipantSchema)
			.array()
			.optional(),
		productCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		productReference: z.lazy(getReferenceSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z.string().optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
		resourceType: z.literal("ActivityDefinition"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		timingDateTime: fhirDateTime().optional(),
		_timingDateTime: z.lazy(getElementSchema).optional(),
		timingPeriod: z.lazy(getPeriodSchema).optional(),
		timingRange: z.lazy(getRangeSchema).optional(),
		timingTiming: z.lazy(getTimingSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		topic: z.lazy(getCodeableConceptSchema).array().optional(),
		transform: z.lazy(getReferenceSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		usage: fhirString().optional(),
		_usage: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
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
			const timing_x_Present = [
				"timingDateTime",
				"timingPeriod",
				"timingRange",
				"timingTiming",
			].filter((field) => record[field] !== undefined);
			if (timing_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of timingDateTime, timingPeriod, timingRange, timingTiming may be present for timing[x]",
					path: [timing_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.library,
				"library",
				["http://hl7.org/fhir/StructureDefinition/Library"],
				["Library"],
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
				record.transform,
				"transform",
				["http://hl7.org/fhir/StructureDefinition/StructureMap"],
				["StructureMap"],
				ctx,
			);
		});

export const ActivityDefinitionSchema =
	ActivityDefinitionSchemaInternal as z.ZodType<ActivityDefinition>;
