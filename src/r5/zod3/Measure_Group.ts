// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Measure_Group_Population } from "./Measure_Group_Population";
import { Measure_Group_PopulationSchemaInternal } from "./Measure_Group_Population";
import type { Measure_Group_Stratifier } from "./Measure_Group_Stratifier";
import { Measure_Group_StratifierSchemaInternal } from "./Measure_Group_Stratifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A group of population criteria for the measure. */
export interface Measure_Group extends BackboneElement {
	/** The population basis specifies the type of elements in the population. For a subject-based measure, this is boolean (because the subject and the population basis are the same, and the population criteria define yes/no values for each individual in the population). For measures that have a population basis that is different than the subject, this element specifies the type of the population basis. For example, an encounter-based measure has a subject of Patient and a population basis of Encounter, and the population criteria all return lists of Encounters. */
	basis?:
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
		| "BodyStructure"
		| "boolean"
		| "Bundle"
		| "canonical"
		| "CanonicalResource"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
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
		| "Consent"
		| "ContactDetail"
		| "ContactPoint"
		| "Contract"
		| "Contributor"
		| "Count"
		| "Coverage"
		| "CoverageEligibilityRequest"
		| "CoverageEligibilityResponse"
		| "DataRequirement"
		| "DataType"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceAssociation"
		| "DeviceDefinition"
		| "DeviceDispense"
		| "DeviceMetric"
		| "DeviceRequest"
		| "DeviceUsage"
		| "DiagnosticReport"
		| "Distance"
		| "DocumentReference"
		| "DomainResource"
		| "Dosage"
		| "Duration"
		| "Element"
		| "ElementDefinition"
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
		| "Medication"
		| "MedicationAdministration"
		| "MedicationDispense"
		| "MedicationKnowledge"
		| "MedicationRequest"
		| "MedicationStatement"
		| "MedicinalProductDefinition"
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
		| "ProductShelfLife"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "RatioRange"
		| "Reference"
		| "RegulatedAuthorization"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestOrchestration"
		| "Requirements"
		| "ResearchStudy"
		| "ResearchSubject"
		| "Resource"
		| "RiskAssessment"
		| "SampledData"
		| "Schedule"
		| "SearchParameter"
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
		| "xhtml";
	/** Extensions for basis */
	_basis?: Element;
	/** Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures. */
	code?: CodeableConcept;
	/** The human readable description of this population group. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range). */
	improvementNotation?: CodeableConcept;
	/** A reference to a Library resource containing the formal logic used by the measure group. */
	library?: Array<string | null>;
	/** Extensions for library */
	_library?: Array<Element | null>;
	/** An identifier that is unique within the Measure allowing linkage to the equivalent item in a MeasureReport resource. */
	linkId?: string;
	/** Extensions for linkId */
	_linkId?: Element;
	/** A population criteria for the measure. */
	population?: Array<Measure_Group_Population>;
	/** Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result. */
	rateAggregation?: string;
	/** Extensions for rateAggregation */
	_rateAggregation?: Element;
	/** Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented. */
	scoring?: CodeableConcept;
	/** Defines the expected units of measure for the measure score. This element SHOULD be specified as a UCUM unit. */
	scoringUnit?: CodeableConcept;
	/** The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path. */
	stratifier?: Array<Measure_Group_Stratifier>;
	/** The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything. */
	subjectCodeableConcept?: CodeableConcept;
	/** The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything. */
	subjectReference?: Reference;
	/** Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMeasure_Group_PopulationSchema =
	(): z.ZodType<Measure_Group_Population> =>
		Measure_Group_PopulationSchemaInternal as z.ZodType<Measure_Group_Population>;
const getMeasure_Group_StratifierSchema =
	(): z.ZodType<Measure_Group_Stratifier> =>
		Measure_Group_StratifierSchemaInternal as z.ZodType<Measure_Group_Stratifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Measure_GroupSchemaInternal = BackboneElementSchemaInternal.extend(
	{
		basis: z
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
				"BodyStructure",
				"boolean",
				"Bundle",
				"canonical",
				"CanonicalResource",
				"CapabilityStatement",
				"CarePlan",
				"CareTeam",
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
				"Consent",
				"ContactDetail",
				"ContactPoint",
				"Contract",
				"Contributor",
				"Count",
				"Coverage",
				"CoverageEligibilityRequest",
				"CoverageEligibilityResponse",
				"DataRequirement",
				"DataType",
				"date",
				"dateTime",
				"decimal",
				"DetectedIssue",
				"Device",
				"DeviceAssociation",
				"DeviceDefinition",
				"DeviceDispense",
				"DeviceMetric",
				"DeviceRequest",
				"DeviceUsage",
				"DiagnosticReport",
				"Distance",
				"DocumentReference",
				"DomainResource",
				"Dosage",
				"Duration",
				"Element",
				"ElementDefinition",
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
				"Medication",
				"MedicationAdministration",
				"MedicationDispense",
				"MedicationKnowledge",
				"MedicationRequest",
				"MedicationStatement",
				"MedicinalProductDefinition",
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
				"ProductShelfLife",
				"Provenance",
				"Quantity",
				"Questionnaire",
				"QuestionnaireResponse",
				"Range",
				"Ratio",
				"RatioRange",
				"Reference",
				"RegulatedAuthorization",
				"RelatedArtifact",
				"RelatedPerson",
				"RequestOrchestration",
				"Requirements",
				"ResearchStudy",
				"ResearchSubject",
				"Resource",
				"RiskAssessment",
				"SampledData",
				"Schedule",
				"SearchParameter",
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
			.optional(),
		_basis: z.lazy(getElementSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		improvementNotation: z.lazy(getCodeableConceptSchema).optional(),
		library: fhirCanonical().nullable().array().optional(),
		_library: z.lazy(getElementSchema).nullable().array().optional(),
		linkId: fhirString().optional(),
		_linkId: z.lazy(getElementSchema).optional(),
		population: z.lazy(getMeasure_Group_PopulationSchema).array().optional(),
		rateAggregation: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_rateAggregation: z.lazy(getElementSchema).optional(),
		scoring: z.lazy(getCodeableConceptSchema).optional(),
		scoringUnit: z.lazy(getCodeableConceptSchema).optional(),
		stratifier: z.lazy(getMeasure_Group_StratifierSchema).array().optional(),
		subjectCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		subjectReference: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const subject_x_Present = [
			"subjectCodeableConcept",
			"subjectReference",
		].filter((field) => record[field] !== undefined);
		if (subject_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of subjectCodeableConcept, subjectReference may be present for subject[x]",
				path: [subject_x_Present[0]],
			});
		}
		validatePrimitiveArrayPair(
			record.library,
			record._library,
			"library",
			"_library",
			ctx,
		);
		validateReferenceTarget(
			record.subjectReference,
			"subjectReference",
			["http://hl7.org/fhir/StructureDefinition/Group"],
			["Group"],
			ctx,
		);
	});

export const Measure_GroupSchema =
	Measure_GroupSchemaInternal as z.ZodType<Measure_Group>;
