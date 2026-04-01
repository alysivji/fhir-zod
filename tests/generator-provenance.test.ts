import { mkdtempSync, readFileSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { writeNormalizedZodDefinitions } from "../src/generator/emit/zod.ts";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";

describe("generated provenance headers", () => {
	it("writes source provenance and preserves last generated when content is unchanged", () => {
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-provenance-"));
		const definitionsResult = buildStructureDefinitionR4Definitions([
			"BackboneElement",
		]);

		writeNormalizedZodDefinitions({
			definitions: definitionsResult.definitions,
			generatedAt: "2026-04-01T05:42:36.000Z",
			outputDir,
			primitivePatterns: definitionsResult.primitivePatterns,
		});

		const definitionPath = join(outputDir, "BackboneElement.ts");
		const firstContent = readFileSync(definitionPath, "utf8");
		const firstStat = statSync(definitionPath);

		expect(firstContent).toContain(
			"// Profile: http://hl7.org/fhir/StructureDefinition/BackboneElement",
		);
		expect(firstContent).toContain("// Release: R4");
		expect(firstContent).toContain("// Version: 4.0.1");
		expect(firstContent).toContain(
			"// Last generated: 2026-04-01T05:42:36.000Z",
		);
		expect(firstContent).not.toContain("Build ID");
		expect(firstContent).not.toContain("Last updated");

		writeNormalizedZodDefinitions({
			definitions: definitionsResult.definitions,
			generatedAt: "2026-04-02T05:42:36.000Z",
			outputDir,
			primitivePatterns: definitionsResult.primitivePatterns,
		});

		const secondContent = readFileSync(definitionPath, "utf8");
		const secondStat = statSync(definitionPath);

		expect(secondContent).toBe(firstContent);
		expect(secondStat.mtimeMs).toBe(firstStat.mtimeMs);
	});

	it("updates last generated when emitted content changes", () => {
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-provenance-"));
		const definitionsResult = buildStructureDefinitionR4Definitions([
			"BackboneElement",
		]);

		writeNormalizedZodDefinitions({
			definitions: definitionsResult.definitions,
			generatedAt: "2026-04-01T05:42:36.000Z",
			outputDir,
			primitivePatterns: definitionsResult.primitivePatterns,
		});

		const definitionPath = join(outputDir, "BackboneElement.ts");
		const updatedDefinitions = new Map(definitionsResult.definitions);
		const backboneElement = updatedDefinitions.get("BackboneElement");

		if (!backboneElement) {
			throw new Error("Expected BackboneElement definition");
		}

		updatedDefinitions.set("BackboneElement", {
			...backboneElement,
			sourceMetadata: {
				...backboneElement.sourceMetadata,
				version: "4.0.2-test",
			},
		});

		writeNormalizedZodDefinitions({
			definitions: updatedDefinitions,
			generatedAt: "2026-04-02T05:42:36.000Z",
			outputDir,
			primitivePatterns: definitionsResult.primitivePatterns,
		});

		const updatedContent = readFileSync(definitionPath, "utf8");

		expect(updatedContent).toContain(
			"// Last generated: 2026-04-02T05:42:36.000Z",
		);
		expect(updatedContent).toContain("// Version: 4.0.2-test");
		expect(updatedContent).not.toContain(
			"// Last generated: 2026-04-01T05:42:36.000Z",
		);
	});

	it("carries source descriptions into generated schema fields", () => {
		const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-provenance-"));
		const definitionsResult = buildStructureDefinitionR4Definitions([
			"Patient",
		]);

		writeNormalizedZodDefinitions({
			definitions: definitionsResult.definitions,
			generatedAt: "2026-04-01T05:42:36.000Z",
			outputDir,
			primitivePatterns: definitionsResult.primitivePatterns,
		});

		const definitionPath = join(outputDir, "Patient.ts");
		const content = readFileSync(definitionPath, "utf8");

		expect(content).toContain("_active: z.unknown().optional().describe(");
		expect(content).toContain('"Extensions for active"');
		expect(content).toContain(
			'birthDate: fhirDate()\n\t\t\t.optional()\n\t\t\t.describe("The date of birth for the individual."),',
		);
		expect(content).toContain(
			'resourceType: z.literal("Patient").describe("This is a Patient resource."),',
		);
	});
});
