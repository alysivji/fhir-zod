import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import type {
	NormalizedDefinition,
	NormalizedProperty,
} from "../src/generator/model.ts";
import type { StructureDefinitionBuildResult } from "../src/generator/sources/structuredefinition.ts";
import {
	FhirRelease,
	type FhirVersionId,
	getFhirRelease,
	R4BRelease,
	R4Release,
	R5Release,
	STU3Release,
	type TargetEntry,
} from "../src/generator/versions.ts";

const syntheticEntries: TargetEntry[] = [
	{
		abstract: true,
		baseDefinition: null,
		category: "abstract-whitelist",
		description: "Synthetic abstract Element definition",
		kind: "complex-type",
		name: "Element",
		shouldGenerate: true,
		type: "Element",
		url: null,
	},
	{
		abstract: false,
		baseDefinition: "http://hl7.org/fhir/StructureDefinition/DomainResource",
		category: "core-resource",
		description: "Synthetic core Patient resource definition",
		kind: "resource",
		name: "Patient",
		shouldGenerate: true,
		type: "Patient",
		url: null,
	},
	{
		abstract: false,
		baseDefinition: "http://example.test/Profile",
		category: "profile-resource",
		description: "Synthetic profile resource definition",
		kind: "resource",
		name: "CustomPatient",
		shouldGenerate: false,
		type: "Patient",
		url: null,
	},
	{
		abstract: false,
		baseDefinition: null,
		category: "other",
		description: "Synthetic non-resource Address definition",
		kind: "complex-type",
		name: "Address",
		shouldGenerate: false,
		type: "Address",
		url: null,
	},
];

const resourceTypeProperty: NormalizedProperty = {
	binding: null,
	choiceGroup: null,
	choiceVariant: null,
	description: "This is a Patient resource.",
	enumValues: null,
	fhirPath: "Patient.resourceType",
	invariants: [],
	isArray: false,
	jsonName: "resourceType",
	max: "1",
	min: 1,
	primitiveType: null,
	required: true,
	targetProfiles: [],
	typeRef: null,
};

const patientDefinition: NormalizedDefinition = {
	baseName: null,
	description: "Synthetic Patient",
	kind: "resource",
	name: "Patient",
	notes: [],
	properties: [resourceTypeProperty],
	resourceTypeLiteral: "Patient",
	sourceMetadata: {
		releaseLabel: "R4",
		sourceUrl: "https://hl7.org/fhir/R4/patient.html",
		version: "4.0.1-test",
	},
};

class SyntheticGenerationRelease extends FhirRelease {
	readonly abstractTargetNames = ["Element"] as const;
	readonly id: FhirVersionId = "r4";
	readonly label = "R4";
	readonly capturedScopes: string[][] = [];

	loadTargetEntries(): TargetEntry[] {
		return syntheticEntries;
	}

	buildDefinitions(
		scopeNames: Iterable<string> = this.listGenerationTargetNames(),
	): StructureDefinitionBuildResult {
		this.capturedScopes.push([...scopeNames]);

		return {
			definitions: new Map([["Patient", patientDefinition]]),
			primitivePatterns: new Map(),
		};
	}

	exposeGeneratedLayout() {
		return this.getGeneratedLayout();
	}
}

describe("FHIR version registry", () => {
	it("returns all supported releases and null for unknown versions", () => {
		expect(getFhirRelease("stu3")).toBeInstanceOf(STU3Release);
		expect(getFhirRelease("r4")).toBeInstanceOf(R4Release);
		expect(getFhirRelease("r4b")).toBeInstanceOf(R4BRelease);
		expect(getFhirRelease("r5")).toBeInstanceOf(R5Release);
		expect(getFhirRelease("r6")).toBeNull();
	});

	it("keeps version-specific abstract target names explicit", () => {
		expect(new STU3Release().abstractTargetNames).toEqual([
			"BackboneElement",
			"DomainResource",
			"Element",
			"Resource",
		]);
		expect(new R4Release().abstractTargetNames).toEqual([
			"BackboneElement",
			"DomainResource",
			"Element",
			"Resource",
		]);
		expect(new R4BRelease().abstractTargetNames).toContain("DataType");
		expect(new R5Release().abstractTargetNames).toEqual(
			expect.arrayContaining(["Base", "BackboneType", "DataType"]),
		);
	});

	it("uses core resources as the default foldered resource families", () => {
		expect(new SyntheticGenerationRelease().exposeGeneratedLayout()).toEqual({
			folderedResourceFamilies: ["Patient"],
		});
	});

	it("builds official example page URLs from release id and resource name", () => {
		expect(new R4Release().exampleResourcePageUrl("Observation")).toBe(
			"https://hl7.org/fhir/R4/observation-examples.html",
		);
		expect(new R4BRelease().exampleResourcePageUrl("Patient")).toBe(
			"https://hl7.org/fhir/R4B/patient-examples.html",
		);
	});

	it("builds official source page URLs for resources, datatypes, and nested elements", () => {
		const release = new R4Release();

		expect(
			release.sourcePageUrl({
				kind: "resource",
				name: "Patient",
			}),
		).toBe("https://hl7.org/fhir/R4/patient.html");
		expect(
			release.sourcePageUrl({
				kind: "complex-type",
				name: "HumanName",
			}),
		).toBe("https://hl7.org/fhir/R4/datatypes.html#HumanName");
		expect(
			release.sourcePageUrl({
				fhirPath: "Patient.contact",
				kind: "resource",
				name: "Patient_Contact",
				rootName: "Patient",
			}),
		).toBe("https://hl7.org/fhir/R4/patient-definitions.html#Patient.contact");
		expect(
			new R5Release().sourcePageUrl({
				kind: "complex-type",
				name: "Base",
			}),
		).toBe("https://hl7.org/fhir/R5/types.html#Base");
	});

	it("summarizes synthetic target inventories", () => {
		expect(new R5Release().summarizeTargets(syntheticEntries)).toEqual({
			abstractGenerationWhitelist: [
				"BackboneElement",
				"BackboneType",
				"Base",
				"DataType",
				"DomainResource",
				"Element",
				"Resource",
			],
			concreteResourceCount: 2,
			coreResourceCount: 1,
			generationTargetCount: 2,
			profileResourceCount: 1,
		});
	});

	it("selects generation targets from core resources and abstract whitelist", () => {
		const release = new SyntheticGenerationRelease();

		expect(release.listCoreResourceNames()).toEqual(["Patient"]);
		expect(release.listGenerationTargetNames()).toEqual(["Element", "Patient"]);
	});

	it("generates version output into a requested directory", () => {
		const release = new SyntheticGenerationRelease();
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-version-generate-"));

		const result = release.generate({
			generatedAt: "2026-04-16T00:00:00.000Z",
			outputDir,
			prune: true,
		});

		expect(release.capturedScopes).toEqual([["Element", "Patient"]]);
		expect(result.files.sort()).toEqual([
			join(outputDir, "Patient", "Patient.ts"),
			join(outputDir, "Patient", "index.ts"),
			join(outputDir, "_fhirResourceSchema.ts"),
			join(outputDir, "index.ts"),
		]);
		expect(readFileSync(join(outputDir, "index.ts"), "utf8")).not.toContain(
			"FhirResource",
		);
		expect(
			readFileSync(join(outputDir, "_fhirResourceSchema.ts"), "utf8"),
		).toContain("export type FhirResource");
		expect(
			readFileSync(join(outputDir, "Patient", "index.ts"), "utf8"),
		).toContain('export { type Patient, PatientSchema } from "./Patient";');
	});

	it("passes explicit generation scopes to definition building", () => {
		const release = new SyntheticGenerationRelease();
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-version-generate-"));

		release.generate({
			generatedAt: "2026-04-16T00:00:00.000Z",
			outputDir,
			prune: false,
			scopeNames: ["Patient"],
		});

		expect(release.capturedScopes).toEqual([["Patient"]]);
	});
});
