import { describe, expect, it } from "vitest";
import type { z } from "zod";

export type IssueExpectation = {
	messageIncludes?: string;
	path?: Array<string | number>;
	pathEndsWith?: Array<string | number>;
};

export type PatchCase = IssueExpectation & {
	name: string;
	patch?: Record<string, unknown>;
	omit?: string[];
};

export type ContractCase = {
	name: string;
	schema: z.ZodTypeAny;
	base: () => Record<string, unknown>;
	valid?: PatchCase[];
	invalid?: PatchCase[];
};

export function expectValid(schema: z.ZodTypeAny, value: unknown): void {
	const result = schema.safeParse(value);

	if (!result.success) {
		throw new Error(
			`Expected validation success, received issues:\n${JSON.stringify(
				result.error.issues,
				null,
				2,
			)}`,
		);
	}
}

export function expectInvalid(
	schema: z.ZodTypeAny,
	value: unknown,
	expected: IssueExpectation = {},
): void {
	const result = schema.safeParse(value);

	if (result.success) {
		throw new Error("Expected validation failure");
	}

	const { issues } = result.error;

	if (expected.messageIncludes !== undefined) {
		expect(issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining(expected.messageIncludes),
				}),
			]),
		);
	}

	if (expected.path !== undefined) {
		const expectedPath = expected.path;
		expect(issues.some((issue) => pathEquals(issue.path, expectedPath))).toBe(
			true,
		);
	}

	if (expected.pathEndsWith !== undefined) {
		const expectedPathEnd = expected.pathEndsWith;
		expect(
			issues.some((issue) => pathEndsWith(issue.path, expectedPathEnd)),
		).toBe(true);
	}
}

export function runSchemaContract(contract: ContractCase): void {
	describe(contract.name, () => {
		for (const testCase of contract.valid ?? []) {
			it(`accepts ${testCase.name}`, () => {
				expectValid(contract.schema, materializeCase(contract.base, testCase));
			});
		}

		for (const testCase of contract.invalid ?? []) {
			it(`rejects ${testCase.name}`, () => {
				expectInvalid(
					contract.schema,
					materializeCase(contract.base, testCase),
					testCase,
				);
			});
		}
	});
}

export function choiceContract(contract: ContractCase): void {
	runSchemaContract(contract);
}

export function primitiveArrayContract(contract: ContractCase): void {
	runSchemaContract(contract);
}

export function referenceContract(contract: ContractCase): void {
	runSchemaContract(contract);
}

export function requiredFieldContract(contract: ContractCase): void {
	runSchemaContract(contract);
}

function materializeCase(
	base: () => Record<string, unknown>,
	testCase: PatchCase,
): Record<string, unknown> {
	const value = {
		...base(),
		...(testCase.patch ?? {}),
	};

	for (const key of testCase.omit ?? []) {
		delete value[key];
	}

	return value;
}

function pathEquals(
	actual: Array<string | number>,
	expected: Array<string | number>,
): boolean {
	return (
		actual.length === expected.length &&
		actual.every((segment, index) => segment === expected[index])
	);
}

function pathEndsWith(
	actual: Array<string | number>,
	expected: Array<string | number>,
): boolean {
	return (
		actual.length >= expected.length &&
		expected.every(
			(segment, index) =>
				actual[actual.length - expected.length + index] === segment,
		)
	);
}
