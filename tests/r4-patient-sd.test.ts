import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { buildRuntimeSchemas } from "../src/generator/emit/zod.ts";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";

const fixturesDir = resolve(
	process.cwd(),
	"tests",
	"fixtures",
	"r4",
	"Patient",
);

const initialDefinitionsResult = buildStructureDefinitionR4Definitions();
let patientSchema = buildRuntimeSchemas(
	initialDefinitionsResult.definitions,
	initialDefinitionsResult.primitivePatterns,
).Patient;

function validatePatientPayload(
	patientSchema: { safeParse: (input: unknown) => { success: boolean } },
	input: unknown,
): { success: boolean } {
	if (
		typeof input === "object" &&
		input !== null &&
		"resourceType" in input &&
		input.resourceType === "Bundle" &&
		"entry" in input &&
		Array.isArray(input.entry)
	) {
		for (const entry of input.entry) {
			if (
				typeof entry !== "object" ||
				entry === null ||
				!("resource" in entry)
			) {
				return { success: false };
			}

			const result = patientSchema.safeParse(entry.resource);

			if (!result.success) {
				return result;
			}
		}

		return { success: true };
	}

	return patientSchema.safeParse(input);
}

describe("R4 SD-backed Patient schema", () => {
	beforeAll(() => {
		const definitionsResult = buildStructureDefinitionR4Definitions();
		patientSchema = buildRuntimeSchemas(
			definitionsResult.definitions,
			definitionsResult.primitivePatterns,
		).Patient;
	});

	for (const filename of readdirSync(fixturesDir).sort()) {
		if (!filename.endsWith(".json")) {
			continue;
		}

		it(`parses ${filename}`, () => {
			const fixturePath = join(fixturesDir, filename);
			const input = JSON.parse(readFileSync(fixturePath, "utf8")) as unknown;
			const result = validatePatientPayload(
				patientSchema as {
					safeParse: (input: unknown) => { success: boolean };
				},
				input,
			);

			expect(result.success).toBe(true);
		});
	}

	it("rejects a top-level animal property", () => {
		const result = patientSchema.safeParse({
			animal: {
				species: {
					text: "dog",
				},
			},
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	it("requires communication.language", () => {
		const result = patientSchema.safeParse({
			communication: [{}],
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	it("requires link.other", () => {
		const result = patientSchema.safeParse({
			link: [
				{
					type: "refer",
				},
			],
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	it("requires link.type", () => {
		const result = patientSchema.safeParse({
			link: [
				{
					other: {
						reference: "Patient/example",
					},
				},
			],
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	it("rejects gender outside the required ValueSet binding", () => {
		const result = patientSchema.safeParse({
			gender: "nonspecific",
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	it("rejects link.type outside the required ValueSet binding", () => {
		const result = patientSchema.safeParse({
			link: [
				{
					other: {
						reference: "Patient/example",
					},
					type: "invalid-link-type",
				},
			],
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	it("rejects constrained references outside the allowed target profiles", () => {
		const result = patientSchema.safeParse({
			generalPractitioner: [
				{
					reference: "Observation/example",
				},
			],
			managingOrganization: {
				display: "Example org",
			},
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
	});

	describe("deceased[x]", () => {
		it("accepts a single runtime choice", () => {
			const result = patientSchema.safeParse({
				deceasedBoolean: true,
				resourceType: "Patient",
			});

			expect(result.success).toBe(true);
		});

		it("rejects multiple runtime choices", () => {
			const result = patientSchema.safeParse({
				deceasedBoolean: true,
				deceasedDateTime: "2020-01-01T00:00:00Z",
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});
	});

	describe("multipleBirth[x]", () => {
		it("accepts a single runtime choice", () => {
			const result = patientSchema.safeParse({
				multipleBirthInteger: 2,
				resourceType: "Patient",
			});

			expect(result.success).toBe(true);
		});

		it("rejects multiple runtime choices", () => {
			const result = patientSchema.safeParse({
				multipleBirthBoolean: true,
				multipleBirthInteger: 2,
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});
	});
});
