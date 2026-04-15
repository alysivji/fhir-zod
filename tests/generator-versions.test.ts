import { describe, expect, it } from "vitest";
import {
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
		kind: "complex-type",
		name: "Address",
		shouldGenerate: false,
		type: "Address",
		url: null,
	},
];

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

	it("builds official example page URLs from release id and resource name", () => {
		expect(new R4Release().exampleResourcePageUrl("Observation")).toBe(
			"https://hl7.org/fhir/R4/observation-examples.html",
		);
		expect(new R4BRelease().exampleResourcePageUrl("Patient")).toBe(
			"https://hl7.org/fhir/R4B/patient-examples.html",
		);
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
});
