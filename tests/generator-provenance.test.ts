import { mkdtempSync, readFileSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { writeNormalizedZodDefinitions } from "../src/generator/emit/zod.ts";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";
import { getR4SpecAvailability } from "./helpers/require-r4-spec.ts";

const r4SpecAvailability = getR4SpecAvailability();
const describeR4Spec = r4SpecAvailability.available ? describe : describe.skip;

describeR4Spec(
	r4SpecAvailability.available
		? "generated provenance headers"
		: `generated provenance headers (${r4SpecAvailability.reason})`,
	() => {
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

		it("omits source descriptions from generated schema fields", () => {
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

			expect(content).toContain(
				"_active: z.lazy(getElementSchema).optional(),",
			);
			expect(content).toContain("birthDate: fhirDate().optional(),");
			expect(content).toContain('resourceType: z.literal("Patient"),');
			expect(content).not.toContain(".describe(");
		});

		it("writes source descriptions as JSDoc on generated model types", () => {
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

			expect(content).toContain(
				"/** Demographics and other administrative information about an individual or animal receiving care or other health-related services. */",
			);
			expect(content).toContain(
				"\t/** The date of birth for the individual. */\n\tbirthDate?: string;",
			);
			expect(content).toContain(
				'\t/** This is a Patient resource. */\n\tresourceType: "Patient";',
			);
		});

		it("emits shared helpers for regex-backed string primitives", () => {
			const outputDir = mkdtempSync(join(tmpdir(), "fhir-zod-provenance-"));
			const definitionsResult = buildStructureDefinitionR4Definitions(["Meta"]);

			writeNormalizedZodDefinitions({
				definitions: definitionsResult.definitions,
				generatedAt: "2026-04-01T05:42:36.000Z",
				outputDir,
				primitivePatterns: definitionsResult.primitivePatterns,
			});

			const definitionPath = join(outputDir, "Meta.ts");
			const content = readFileSync(definitionPath, "utf8");

			expect(content).toContain('fhir-primitives";');
			expect(content).toContain("fhirCanonical");
			expect(content).toContain("fhirId");
			expect(content).toContain("fhirInstant");
			expect(content).toContain("fhirString");
			expect(content).toContain("fhirUri");
			expect(content).toContain('fhir-primitive-array-validation";');
			expect(content).toContain(
				"profile: fhirCanonical().nullable().array().optional(),",
			);
			expect(content).toContain(
				"_profile: z.lazy(getElementSchema).nullable().array().optional(),",
			);
			expect(content).toMatch(
				/validatePrimitiveArrayPair\(\s*record\.profile,\s*record\._profile,\s*"profile",\s*"_profile",\s*ctx,\s*\);/,
			);
			expect(content).toContain("id: fhirString().optional(),");
			expect(content).toContain("source: fhirUri().optional(),");
		});
	},
);
