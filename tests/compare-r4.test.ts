import { existsSync, readFileSync } from "node:fs";
import { beforeAll, describe, expect, it } from "vitest";
import {
	compareR4,
	type DefinitionComparison,
} from "../src/generator/compare/report.ts";
import { generateR4StructureDefinition } from "../src/generator/r4-structuredefinition.ts";

let comparison = compareR4();

function findDefinition(name: string): DefinitionComparison {
	const definition = comparison.report.definitions.find(
		(candidate) => candidate.name === name,
	);

	if (!definition) {
		throw new Error(`Missing comparison definition ${name}`);
	}

	return definition;
}

describe("R4 comparison spike", () => {
	beforeAll(() => {
		comparison = compareR4();
	});

	it("produces a deterministic report", () => {
		const first = JSON.stringify(compareR4().report);
		const second = JSON.stringify(compareR4().report);

		expect(first).toBe(second);
	});

	it("writes the expected experimental artifacts", () => {
		expect(comparison.report.summary.openApiDefinitionCount).toBe(53);
		expect(comparison.generatedFiles.length).toBeGreaterThan(0);
		expect(existsSync(comparison.reportPaths.json)).toBe(true);
		expect(existsSync(comparison.reportPaths.markdown)).toBe(true);
		expect(readFileSync(comparison.reportPaths.json, "utf8")).toContain(
			'"definitions"',
		);
	});

	it("writes the StructureDefinition R4 generator output into src", () => {
		const result = generateR4StructureDefinition();

		expect(
			result.files.some((file) =>
				file.endsWith("/src/r4-structuredefinition/Patient.ts"),
			),
		).toBe(true);
		expect(
			existsSync(
				"/Users/alysivji/conductor/workspaces/fhir-zod/geneva/src/r4-structuredefinition/Patient.ts",
			),
		).toBe(true);
	});

	it("flags Patient.animal as OpenAPI-only", () => {
		const patient = findDefinition("Patient");

		expect(patient.openApiOnlyProps).toContain("animal");
	});

	it("captures StructureDefinition target profile metadata", () => {
		const patient = findDefinition("Patient");
		const patientLink = findDefinition("Patient_Link");

		expect(patient.targetProfileDiffs).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ property: "generalPractitioner" }),
				expect.objectContaining({ property: "managingOrganization" }),
			]),
		);
		expect(patientLink.targetProfileDiffs).toEqual(
			expect.arrayContaining([expect.objectContaining({ property: "other" })]),
		);
	});

	it("captures StructureDefinition bindings and invariants", () => {
		const patient = findDefinition("Patient");

		expect(patient.bindingDiffs).toEqual(
			expect.arrayContaining([expect.objectContaining({ property: "gender" })]),
		);
		expect(patient.invariantDiffs).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ property: "contact" }),
			]),
		);
		expect(
			patient.invariantDiffs.find((diff) => diff.property === "contact")
				?.structureDefinition,
		).toEqual(
			expect.arrayContaining([expect.objectContaining({ key: "pat-1" })]),
		);
	});
});
