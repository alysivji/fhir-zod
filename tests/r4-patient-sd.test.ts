import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { beforeAll, describe, expect, it } from "vitest";
import { buildRuntimeSchemas } from "../src/generator/emit/zod.ts";
import { buildStructureDefinitionR4Definitions } from "../src/generator/sources/structuredefinition-r4.ts";
import { getR4SpecAvailability } from "./helpers/require-r4-spec.ts";

const fixturesDir = resolve(
	process.cwd(),
	"tests",
	"fixtures",
	"r4",
	"Patient",
);

let patientSchema:
	| { safeParse: (input: unknown) => { success: boolean } }
	| undefined;

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

const r4SpecAvailability = getR4SpecAvailability();
const describeR4Spec = r4SpecAvailability.available ? describe : describe.skip;

describeR4Spec(
	r4SpecAvailability.available
		? "R4 SD-backed Patient schema"
		: `R4 SD-backed Patient schema (${r4SpecAvailability.reason})`,
	() => {
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
				const result = validatePatientPayload(requirePatientSchema(), input);

				expect(result.success).toBe(true);
			});
		}

		it("rejects a top-level animal property", () => {
			const result = requirePatientSchema().safeParse({
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
			const result = requirePatientSchema().safeParse({
				communication: [{}],
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});

		it("requires link.other", () => {
			const result = requirePatientSchema().safeParse({
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
			const result = requirePatientSchema().safeParse({
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
			const result = requirePatientSchema().safeParse({
				gender: "nonspecific",
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});

		it("rejects link.type outside the required ValueSet binding", () => {
			const result = requirePatientSchema().safeParse({
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
			const result = requirePatientSchema().safeParse({
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
				const result = requirePatientSchema().safeParse({
					deceasedBoolean: true,
					resourceType: "Patient",
				});

				expect(result.success).toBe(true);
			});

			it("rejects multiple runtime choices", () => {
				const result = requirePatientSchema().safeParse({
					deceasedBoolean: true,
					deceasedDateTime: "2020-01-01T00:00:00Z",
					resourceType: "Patient",
				});

				expect(result.success).toBe(false);
			});
		});

		describe("multipleBirth[x]", () => {
			it("accepts a single runtime choice", () => {
				const result = requirePatientSchema().safeParse({
					multipleBirthInteger: 2,
					resourceType: "Patient",
				});

				expect(result.success).toBe(true);
			});

			it("rejects multiple runtime choices", () => {
				const result = requirePatientSchema().safeParse({
					multipleBirthBoolean: true,
					multipleBirthInteger: 2,
					resourceType: "Patient",
				});

				expect(result.success).toBe(false);
			});
		});
	},
);

function requirePatientSchema(): {
	safeParse: (input: unknown) => { success: boolean };
} {
	if (!patientSchema) {
		throw new Error("Expected Patient schema to be initialized in beforeAll.");
	}

	return patientSchema;
}
