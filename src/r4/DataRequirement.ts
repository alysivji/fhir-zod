// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T00:02:07.682Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirCanonical, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DataRequirement_CodeFilter } from "./DataRequirement_CodeFilter";
import { DataRequirement_CodeFilterSchemaInternal } from "./DataRequirement_CodeFilter";
import type { DataRequirement_DateFilter } from "./DataRequirement_DateFilter";
import { DataRequirement_DateFilterSchemaInternal } from "./DataRequirement_DateFilter";
import type { DataRequirement_Sort } from "./DataRequirement_Sort";
import { DataRequirement_SortSchemaInternal } from "./DataRequirement_Sort";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for DataRequirement Type: Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface DataRequirement extends Element {
	/** Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed. */
	codeFilter?: Array<DataRequirement_CodeFilter>;
	/** Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed. */
	dateFilter?: Array<DataRequirement_DateFilter>;
	/** Specifies a maximum number of results that are required (uses the _count search parameter). */
	limit?: number;
	/** Extensions for limit */
	_limit?: Element;
	/**
	 * Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available.
	 *
	 * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
	 */
	mustSupport?: Array<string | null>;
	/** Extensions for mustSupport */
	_mustSupport?: Array<Element | null>;
	/** The profile of the required data, specified as the uri of the profile definition. */
	profile?: Array<string | null>;
	/** Extensions for profile */
	_profile?: Array<Element | null>;
	/** Specifies the order of the results to be returned. */
	sort?: Array<DataRequirement_Sort>;
	/** The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed. */
	subjectCodeableConcept?: CodeableConcept;
	/** The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed. */
	subjectReference?: Reference;
	/** The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile. */
	type:
		| "Account"
		| "ActivityDefinition"
		| "Address"
		| "AdverseEvent"
		| "Age"
		| "AllergyIntolerance"
		| "Annotation"
		| "Any"
		| "Appointment"
		| "AppointmentResponse"
		| "Attachment"
		| "AuditEvent"
		| "BackboneElement"
		| "base64Binary"
		| "Basic"
		| "Binary"
		| "BiologicallyDerivedProduct"
		| "BodyStructure"
		| "boolean"
		| "Bundle"
		| "canonical"
		| "CapabilityStatement"
		| "CarePlan"
		| "CareTeam"
		| "CatalogEntry"
		| "ChargeItem"
		| "ChargeItemDefinition"
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
		| "CoverageEligibilityRequest"
		| "CoverageEligibilityResponse"
		| "DataRequirement"
		| "date"
		| "dateTime"
		| "decimal"
		| "DetectedIssue"
		| "Device"
		| "DeviceDefinition"
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
		| "EffectEvidenceSynthesis"
		| "Element"
		| "ElementDefinition"
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
		| "Expression"
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
		| "ImagingStudy"
		| "Immunization"
		| "ImmunizationEvaluation"
		| "ImmunizationRecommendation"
		| "ImplementationGuide"
		| "instant"
		| "InsurancePlan"
		| "integer"
		| "Invoice"
		| "Library"
		| "Linkage"
		| "List"
		| "Location"
		| "markdown"
		| "MarketingStatus"
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
		| "Meta"
		| "MolecularSequence"
		| "Money"
		| "MoneyQuantity"
		| "NamingSystem"
		| "Narrative"
		| "NutritionOrder"
		| "Observation"
		| "ObservationDefinition"
		| "oid"
		| "OperationDefinition"
		| "OperationOutcome"
		| "Organization"
		| "OrganizationAffiliation"
		| "ParameterDefinition"
		| "Parameters"
		| "Patient"
		| "PaymentNotice"
		| "PaymentReconciliation"
		| "Period"
		| "Person"
		| "PlanDefinition"
		| "Population"
		| "positiveInt"
		| "Practitioner"
		| "PractitionerRole"
		| "Procedure"
		| "ProdCharacteristic"
		| "ProductShelfLife"
		| "Provenance"
		| "Quantity"
		| "Questionnaire"
		| "QuestionnaireResponse"
		| "Range"
		| "Ratio"
		| "Reference"
		| "RelatedArtifact"
		| "RelatedPerson"
		| "RequestGroup"
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
		| "ServiceRequest"
		| "Signature"
		| "SimpleQuantity"
		| "Slot"
		| "Specimen"
		| "SpecimenDefinition"
		| "string"
		| "StructureDefinition"
		| "StructureMap"
		| "Subscription"
		| "Substance"
		| "SubstanceAmount"
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
		| "time"
		| "Timing"
		| "TriggerDefinition"
		| "Type"
		| "unsignedInt"
		| "uri"
		| "url"
		| "UsageContext"
		| "uuid"
		| "ValueSet"
		| "VerificationResult"
		| "VisionPrescription"
		| "xhtml";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDataRequirement_CodeFilterSchema =
	(): z.ZodType<DataRequirement_CodeFilter> =>
		DataRequirement_CodeFilterSchemaInternal as z.ZodType<DataRequirement_CodeFilter>;
const getDataRequirement_DateFilterSchema =
	(): z.ZodType<DataRequirement_DateFilter> =>
		DataRequirement_DateFilterSchemaInternal as z.ZodType<DataRequirement_DateFilter>;
const getDataRequirement_SortSchema = (): z.ZodType<DataRequirement_Sort> =>
	DataRequirement_SortSchemaInternal as z.ZodType<DataRequirement_Sort>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DataRequirementSchemaInternal = z
	.object({
		codeFilter: z.lazy(getDataRequirement_CodeFilterSchema).array().optional(),
		dateFilter: z.lazy(getDataRequirement_DateFilterSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		limit: z.number().int().positive().optional(),
		_limit: z.lazy(getElementSchema).optional(),
		mustSupport: fhirString().nullable().array().optional(),
		_mustSupport: z.lazy(getElementSchema).nullable().array().optional(),
		profile: fhirCanonical().nullable().array().optional(),
		_profile: z.lazy(getElementSchema).nullable().array().optional(),
		sort: z.lazy(getDataRequirement_SortSchema).array().optional(),
		subjectCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		subjectReference: z.lazy(getReferenceSchema).optional(),
		type: z.enum([
			"Account",
			"ActivityDefinition",
			"Address",
			"AdverseEvent",
			"Age",
			"AllergyIntolerance",
			"Annotation",
			"Any",
			"Appointment",
			"AppointmentResponse",
			"Attachment",
			"AuditEvent",
			"BackboneElement",
			"base64Binary",
			"Basic",
			"Binary",
			"BiologicallyDerivedProduct",
			"BodyStructure",
			"boolean",
			"Bundle",
			"canonical",
			"CapabilityStatement",
			"CarePlan",
			"CareTeam",
			"CatalogEntry",
			"ChargeItem",
			"ChargeItemDefinition",
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
			"CoverageEligibilityRequest",
			"CoverageEligibilityResponse",
			"DataRequirement",
			"date",
			"dateTime",
			"decimal",
			"DetectedIssue",
			"Device",
			"DeviceDefinition",
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
			"EffectEvidenceSynthesis",
			"Element",
			"ElementDefinition",
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
			"Expression",
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
			"ImagingStudy",
			"Immunization",
			"ImmunizationEvaluation",
			"ImmunizationRecommendation",
			"ImplementationGuide",
			"instant",
			"InsurancePlan",
			"integer",
			"Invoice",
			"Library",
			"Linkage",
			"List",
			"Location",
			"markdown",
			"MarketingStatus",
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
			"Meta",
			"MolecularSequence",
			"Money",
			"MoneyQuantity",
			"NamingSystem",
			"Narrative",
			"NutritionOrder",
			"Observation",
			"ObservationDefinition",
			"oid",
			"OperationDefinition",
			"OperationOutcome",
			"Organization",
			"OrganizationAffiliation",
			"ParameterDefinition",
			"Parameters",
			"Patient",
			"PaymentNotice",
			"PaymentReconciliation",
			"Period",
			"Person",
			"PlanDefinition",
			"Population",
			"positiveInt",
			"Practitioner",
			"PractitionerRole",
			"Procedure",
			"ProdCharacteristic",
			"ProductShelfLife",
			"Provenance",
			"Quantity",
			"Questionnaire",
			"QuestionnaireResponse",
			"Range",
			"Ratio",
			"Reference",
			"RelatedArtifact",
			"RelatedPerson",
			"RequestGroup",
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
			"ServiceRequest",
			"Signature",
			"SimpleQuantity",
			"Slot",
			"Specimen",
			"SpecimenDefinition",
			"string",
			"StructureDefinition",
			"StructureMap",
			"Subscription",
			"Substance",
			"SubstanceAmount",
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
			"time",
			"Timing",
			"TriggerDefinition",
			"Type",
			"unsignedInt",
			"uri",
			"url",
			"UsageContext",
			"uuid",
			"ValueSet",
			"VerificationResult",
			"VisionPrescription",
			"xhtml",
		]),
		_type: z.lazy(getElementSchema).optional(),
	})
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
			record.mustSupport,
			record._mustSupport,
			"mustSupport",
			"_mustSupport",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.profile,
			record._profile,
			"profile",
			"_profile",
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

export const DataRequirementSchema =
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
