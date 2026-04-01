// Profile: http://hl7.org/fhir/StructureDefinition/DataRequirement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { CodeableConcept } from "./CodeableConcept";
import { DataRequirement_CodeFilter } from "./DataRequirement_CodeFilter";
import { DataRequirement_DateFilter } from "./DataRequirement_DateFilter";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getDataRequirement_CodeFilterSchema = (): z.ZodType<unknown> =>
	DataRequirement_CodeFilter;
const getDataRequirement_DateFilterSchema = (): z.ZodType<unknown> =>
	DataRequirement_DateFilter;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const DataRequirement = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_limit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for limit"),
		_mustSupport: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for mustSupport"),
		_profile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for profile"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
		codeFilter: z
			.lazy(getDataRequirement_CodeFilterSchema)
			.array()
			.optional()
			.describe(
				"Code filters specify additional constraints on the data, specifying the value set of interest for a particular element of the data. Each code filter defines an additional constraint on the data, i.e. code filters are AND'ed, not OR'ed.",
			),
		dateFilter: z
			.lazy(getDataRequirement_DateFilterSchema)
			.array()
			.optional()
			.describe(
				"Date filters specify additional constraints on the data in terms of the applicable date range for specific elements. Each date filter specifies an additional constraint on the data, i.e. date filters are AND'ed, not OR'ed.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		limit: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"Specifies a maximum number of results that are required (uses the _count search parameter).",
			),
		mustSupport: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe(
				"Indicates that specific elements of the type are referenced by the knowledge module and must be supported by the consumer in order to obtain an effective evaluation. This does not mean that a value is required for this element, only that the consuming system must understand the element and be able to provide values for it if they are available. \n\nThe value of mustSupport SHALL be a FHIRPath resolveable on the type of the DataRequirement. The path SHALL consist only of identifiers, constant indexers, and .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).",
			),
		profile: z
			.string()
			.regex(/\S*/)
			.array()
			.optional()
			.describe(
				"The profile of the required data, specified as the uri of the profile definition.",
			),
		sort: z
			.unknown()
			.array()
			.optional()
			.describe("Specifies the order of the results to be returned."),
		subjectCodeableConcept: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.",
			),
		subjectReference: z
			.lazy(getReferenceSchema)
			.optional()
			.describe(
				"The intended subjects of the data requirement. If this element is not provided, a Patient subject is assumed.",
			),
		type: z
			.enum([
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
			])
			.describe(
				"The type of the required data, specified as the type name of a resource. For profiles, this value is set to the type of the base resource of the profile.",
			),
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
		validateReferenceTarget(
			record.subjectReference,
			"subjectReference",
			["http://hl7.org/fhir/StructureDefinition/Group"],
			["Group"],
			ctx,
		);
	});

export type DataRequirement = z.output<typeof DataRequirement>;
