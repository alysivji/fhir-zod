// Profile: http://hl7.org/fhir/StructureDefinition/ParameterDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const ParameterDefinition = z
	.object({
		_documentation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for documentation"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_max: z.lazy(getElementSchema).optional().describe("Extensions for max"),
		_min: z.lazy(getElementSchema).optional().describe("Extensions for min"),
		_name: z.lazy(getElementSchema).optional().describe("Extensions for name"),
		_profile: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for profile"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
		documentation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A brief discussion of what the parameter is for and how it is used by the module.",
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
		max: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The maximum number of times this element is permitted to appear in the request or response.",
			),
		min: z
			.number()
			.int()
			.optional()
			.describe(
				"The minimum number of times this parameter SHALL appear in the request or response.",
			),
		name: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"The name of the parameter used to allow access to the value of the parameter in evaluation contexts.",
			),
		profile: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.",
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
			.describe("The type of the parameter."),
		use: z
			.enum(["in", "out"])
			.describe("Whether the parameter is input or output for the module."),
	})
	.strict();

export type ParameterDefinition = z.output<typeof ParameterDefinition>;
