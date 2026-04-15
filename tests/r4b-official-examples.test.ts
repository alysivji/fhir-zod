import { readdirSync, readFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import * as r4bSchemas from "@fhir-zod/core/r4b";
import { describe, expect, it } from "vitest";
import { r4bExampleExpectedFailures } from "./r4b-example-expected-failures.ts";

const fixturesRoot = resolve(process.cwd(), "tests", "fixtures", "r4b");

type ValidationResult = { success: true } | { success: false; error: unknown };

function schemaForResourceType(resourceType: string): unknown {
	const exportName = `${resourceType}Schema`;

	return Object.entries(r4bSchemas).find(([name]) => name === exportName)?.[1];
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}

function validateResourcePayload(
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

			if (!("resource" in entry) || entry.resource === undefined) {
				continue;
			}

			const result = validateResourcePayload(
				entry.resource,
				`${fixtureLabel}#entry[${index}]`,
			);

			if (!result.success) {
				return result;
			}
		}
	}

	const schema = schemaForResourceType(input.resourceType);

	if (!schema || typeof schema !== "object" || !("safeParse" in schema)) {
		return {
			success: false,
			error: new Error(
				`${fixtureLabel} uses ${input.resourceType}, but no exported schema was found.`,
			),
		};
	}

	return (
		schema as {
			safeParse: (value: unknown) => ValidationResult;
		}
	).safeParse(input);
}

describe("R4B official examples", () => {
	for (const resourceName of readdirSync(fixturesRoot).sort()) {
		const resourceDir = join(fixturesRoot, resourceName);
		const entries = readdirSync(resourceDir, { withFileTypes: true });

		for (const entry of entries.sort((left, right) =>
			left.name.localeCompare(right.name),
		)) {
			if (!entry.isFile() || !entry.name.endsWith(".json")) {
				continue;
			}

			const fixturePath = join(resourceDir, entry.name);
			const fixtureKey = relative(fixturesRoot, fixturePath);
			const expectedFailure = r4bExampleExpectedFailures.get(fixtureKey);
			const testFn = expectedFailure ? it.fails : it;

			testFn(`parses ${fixtureKey}`, () => {
				const input = JSON.parse(readFileSync(fixturePath, "utf8")) as unknown;
				const result = validateResourcePayload(input, fixtureKey);

				expect(result.success, JSON.stringify(result, null, 2)).toBe(true);
			});
		}
	}
});
