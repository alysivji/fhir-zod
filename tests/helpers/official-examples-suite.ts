import { readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

type ValidationResult = { success: true } | { success: false; error: unknown };

type OfficialExamplesSuiteOptions = {
	expectedFailures: Map<string, string>;
	fixturesRoot: string;
	label: string;
	schemas: object;
};

export function describeOfficialExamplesSuite(
	options: OfficialExamplesSuiteOptions,
): void {
	function schemaForResourceType(resourceType: string): unknown {
		const exportName = `${resourceType}Schema`;

		return Object.entries(options.schemas).find(
			([name]) => name === exportName,
		)?.[1];
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
						error: new Error(
							`${fixtureLabel} bundle entry ${index} is invalid.`,
						),
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

	describe(`${options.label} official examples`, () => {
		for (const resourceName of readdirSync(options.fixturesRoot).sort()) {
			const resourceDir = join(options.fixturesRoot, resourceName);
			const entries = readdirSync(resourceDir, { withFileTypes: true });

			for (const entry of entries.sort((left, right) =>
				left.name.localeCompare(right.name),
			)) {
				if (!entry.isFile() || !entry.name.endsWith(".json")) {
					continue;
				}

				const fixturePath = join(resourceDir, entry.name);
				const fixtureKey = relative(options.fixturesRoot, fixturePath);
				const expectedFailure = options.expectedFailures.get(fixtureKey);
				const testFn = expectedFailure ? it.fails : it;

				testFn(`parses ${fixtureKey}`, () => {
					const input = JSON.parse(
						readFileSync(fixturePath, "utf8"),
					) as unknown;
					const result = validateResourcePayload(input, fixtureKey);

					expect(result.success, JSON.stringify(result, null, 2)).toBe(true);
				});
			}
		}
	});
}

function isRecord(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null;
}
