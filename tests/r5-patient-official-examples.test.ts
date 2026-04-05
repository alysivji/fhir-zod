import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { PatientSchema } from "@fhir-zod/core/r5";
import { describe, expect, it } from "vitest";
import { r5PatientExampleSkips } from "./r5-patient-example-skips.ts";

const fixturesRoot = resolve(
	process.cwd(),
	"tests",
	"fixtures",
	"r5",
	"Patient",
);

type ValidationResult = { success: true } | { success: false; error: unknown };

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function validatePatientPayload(
	input: unknown,
	fixtureLabel: string,
): ValidationResult {
	if (!isRecord(input) || typeof input.resourceType !== "string") {
		return {
			success: false,
			error: new Error(`${fixtureLabel} is missing a resourceType.`),
		};
	}

	if (input.resourceType === "Bundle") {
		if (
			"entry" in input &&
			input.entry !== undefined &&
			!Array.isArray(input.entry)
		) {
			return {
				success: false,
				error: new Error(`${fixtureLabel} bundle is missing entry[].`),
			};
		}

		const bundleEntries = Array.isArray(input.entry) ? input.entry : [];

		for (const [index, entry] of bundleEntries.entries()) {
			if (!isRecord(entry)) {
				return {
					success: false,
					error: new Error(`${fixtureLabel} bundle entry ${index} is invalid.`),
				};
			}

			const result = validatePatientPayload(
				entry.resource,
				`${fixtureLabel}#entry[${index}]`,
			);

			if (!result.success) {
				return result;
			}
		}

		return { success: true };
	}

	return PatientSchema.safeParse(input);
}

describe("R5 Patient official examples", () => {
	for (const entry of readdirSync(fixturesRoot, { withFileTypes: true }).sort(
		(left, right) => left.name.localeCompare(right.name),
	)) {
		if (!entry.isFile() || !entry.name.endsWith(".json")) {
			continue;
		}

		const fixturePath = join(fixturesRoot, entry.name);
		const fixtureKey = relative(fixturesRoot, fixturePath);
		const skipReason = r5PatientExampleSkips.get(fixtureKey);
		const testFn = skipReason ? it.skip : it;

		testFn(`parses ${fixtureKey}`, () => {
			const input = JSON.parse(readFileSync(fixturePath, "utf8")) as unknown;
			const result = validatePatientPayload(input, fixtureKey);

			expect(result.success, JSON.stringify(result, null, 2)).toBe(true);
		});
	}
});
