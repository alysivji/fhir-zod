import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
	MissingSpecPackageError,
	resolveRequiredSpecPackageRoot,
} from "../src/spec/spec-cache.ts";

describe("spec cache guard", () => {
	it("returns the resolved package root when extracted StructureDefinitions are present", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-spec-cache-"));
		const packageRoot = join(repoRoot, ".local", "spec-cache", "r4", "package");

		mkdirSync(packageRoot, { recursive: true });
		writeFileSync(
			join(packageRoot, "StructureDefinition-Patient.json"),
			JSON.stringify({
				name: "Patient",
				resourceType: "StructureDefinition",
			}),
			"utf8",
		);

		expect(
			resolveRequiredSpecPackageRoot("r4", {
				manifest: {
					packageRoot: ".local/spec-cache/r4/package",
				},
				repoRoot,
			}),
		).toBe(packageRoot);
	});

	it("throws a typed error with fetch instructions when extracted inputs are missing", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-spec-cache-"));

		expect(() =>
			resolveRequiredSpecPackageRoot("r4", {
				manifest: {
					packageRoot: ".local/spec-cache/r4/package",
				},
				repoRoot,
			}),
		).toThrowError(MissingSpecPackageError);

		try {
			resolveRequiredSpecPackageRoot("r4", {
				manifest: {
					packageRoot: ".local/spec-cache/r4/package",
				},
				repoRoot,
			});
		} catch (error) {
			expect(error).toBeInstanceOf(MissingSpecPackageError);
			expect((error as Error).message).toContain(
				"Missing extracted FHIR spec inputs for r4",
			);
			expect((error as Error).message).toContain(
				join(repoRoot, ".local", "spec-cache", "r4", "package"),
			);
			expect((error as Error).message).toContain("npm run fetch-spec");
			expect((error as Error).message).toContain(
				"This repo commits pinned manifests, not extracted package contents.",
			);
			return;
		}

		throw new Error("Expected resolveRequiredSpecPackageRoot to throw.");
	});

	it("throws a typed error when the extracted package root exists but is not populated", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-spec-cache-"));
		const packageRoot = join(repoRoot, ".local", "spec-cache", "r4", "package");

		mkdirSync(packageRoot, { recursive: true });

		expect(() =>
			resolveRequiredSpecPackageRoot("r4", {
				manifest: {
					packageRoot: ".local/spec-cache/r4/package",
				},
				repoRoot,
			}),
		).toThrowError(MissingSpecPackageError);
	});
});
