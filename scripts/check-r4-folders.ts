import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { repoRoot } from "../src/generator/shared.ts";
import { R4Release } from "../src/generator/versions.ts";

// Resource names listed at https://hl7.org/fhir/R4/resourcelist.html
const HL7_R4_RESOURCES = new Set([
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
]);

const r4Dir = resolve(repoRoot, "src", "r4");
const specResources = new Set(new R4Release().listCoreResourceNames());
const folderedResources = new Set(
	readdirSync(r4Dir, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => d.name),
);

// --- Folders vs spec ---
console.log("=== Folders vs spec ===");
console.log(`Spec core resources:  ${specResources.size}`);
console.log(`Foldered directories: ${folderedResources.size}`);

const inSpecNotFoldered = [...specResources].filter(
	(n) => !folderedResources.has(n),
);
const folderedNotInSpec = [...folderedResources].filter(
	(n) => !specResources.has(n),
);

if (inSpecNotFoldered.length) {
	console.error("\nIn spec but NOT foldered:");
	for (const n of inSpecNotFoldered) console.error(`  - ${n}`);
}
if (folderedNotInSpec.length) {
	console.error("\nFoldered but NOT in spec:");
	for (const n of folderedNotInSpec) console.error(`  - ${n}`);
}

const foldersMatchSpec = !inSpecNotFoldered.length && !folderedNotInSpec.length;
if (foldersMatchSpec) {
	console.log("✓ Folders match spec exactly.");
}

// --- Spec vs HL7 resource list ---
console.log("\n=== Spec vs HL7 resource list (https://hl7.org/fhir/R4/resourcelist.html) ===");
console.log(`HL7 resource list:    ${HL7_R4_RESOURCES.size}`);
console.log(`Spec core resources:  ${specResources.size}`);

const inHL7NotSpec = [...HL7_R4_RESOURCES].filter((n) => !specResources.has(n));
const inSpecNotHL7 = [...specResources].filter((n) => !HL7_R4_RESOURCES.has(n));

if (inHL7NotSpec.length) {
	console.log("\nOn HL7 list but NOT in spec:");
	for (const n of inHL7NotSpec) console.log(`  - ${n}`);
}
if (inSpecNotHL7.length) {
	console.log("\nIn spec but NOT on HL7 list:");
	for (const n of inSpecNotHL7) console.log(`  - ${n}`);
}
if (!inHL7NotSpec.length && !inSpecNotHL7.length) {
	console.log("✓ Spec matches HL7 resource list exactly.");
}

// Exit 1 only if folder coverage is incomplete
if (!foldersMatchSpec) {
	process.exit(1);
}
