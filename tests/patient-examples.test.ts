import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { PatientSchema } from "@fhir-zod/core/r4";
import { describe, expect, it } from "vitest";

const fixturesDir = resolve(
	process.cwd(),
	"tests",
	"fixtures",
	"r4",
	"Patient",
);

function validatePatientPayload(
	input: unknown,
): { success: true } | { success: false; error: unknown } {
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
				return {
					success: false,
					error: new Error("Bundle entry is missing resource."),
				};
			}

			const result = PatientSchema.safeParse(entry.resource);

			if (!result.success) {
				return result;
			}
		}

		return { success: true };
	}

	return PatientSchema.safeParse(input);
}

describe("Patient official R4 examples", () => {
	for (const filename of readdirSync(fixturesDir).sort()) {
		if (!filename.endsWith(".json")) {
			continue;
		}

		it(`parses ${filename}`, () => {
			const fixturePath = join(fixturesDir, filename);
			const input = JSON.parse(readFileSync(fixturePath, "utf8")) as unknown;
			const result = validatePatientPayload(input);

			expect(result.success, JSON.stringify(result, null, 2)).toBe(true);
		});
	}
});
