import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

import {
	collectMetrics,
	resolveBenchmarkInputs,
	runBenchmarkSuite,
} from "../scripts/benchmarking/run.ts";
import {
	createContainedPatientChain,
	createPathologicalBundle,
	generateScenarioFile,
} from "../scripts/benchmarking/generate.ts";
import { isBenchmarkInputEnvelope, repoRoot } from "../scripts/benchmarking/scenarios.ts";

const tempRoots: string[] = [];

afterEach(() => {
	for (const tempRoot of tempRoots.splice(0)) {
		rmSync(tempRoot, { force: true, recursive: true });
	}
});

describe("benchmark generation", () => {
	it("writes a benchmark envelope for synthetic scenarios", async () => {
		const tempRoot = mkdtempSync(join(tmpdir(), "fhir-zod-benchmark-generate-"));
		tempRoots.push(tempRoot);
		const outputPath = join(tempRoot, "synthetic-pathological-nesting.json");

		await generateScenarioFile({
			outPath: outputPath,
			repoRoot,
			scenarioName: "synthetic-pathological-nesting",
		});

		const document = JSON.parse(readFileSync(outputPath, "utf8")) as unknown;
		expect(isBenchmarkInputEnvelope(document)).toBe(true);
		if (isBenchmarkInputEnvelope(document)) {
			expect(document.metadata.scenario).toBe("synthetic-pathological-nesting");
			expect(document.metadata.resourceType).toBe("Bundle");
		}
	});

	it("fails clearly when synthea is unavailable", async () => {
		const tempRoot = mkdtempSync(join(tmpdir(), "fhir-zod-benchmark-synthea-"));
		tempRoots.push(tempRoot);
		const outputPath = join(tempRoot, "synthea-bundle.json");

		await expect(
			generateScenarioFile({
				outPath: outputPath,
				repoRoot,
				scenarioName: "synthea-bundle",
				syntheaCommand: "command-that-does-not-exist-fhir-zod",
			}),
		).rejects.toThrow(/Install a synthea CLI or pass --synthea-command/);
	});
});

describe("benchmark runner", () => {
	it("collects metrics for nested payloads", () => {
		const metrics = collectMetrics(createContainedPatientChain(5));
		expect(metrics.resourceCount).toBe(5);
		expect(metrics.containedResourceCount).toBe(4);
		expect(metrics.nestingDepth).toBe(5);
		expect(metrics.payloadBytes).toBeGreaterThan(0);
	});

	it("resolves raw fixtures and benchmark envelopes", async () => {
		const tempRoot = mkdtempSync(join(tmpdir(), "fhir-zod-benchmark-resolve-"));
		tempRoots.push(tempRoot);
		const rawFixturePath = join(
			repoRoot,
			"tests/fixtures/r4/Claim/claim-example-institutional-rich.json",
		);
		const generatedFixturePath = join(tempRoot, "synthetic.json");

		writeFileSync(
			generatedFixturePath,
			JSON.stringify({
				format: "fhir-zod-benchmark-input",
				generatedAt: new Date().toISOString(),
				metadata: {
					resourceType: "Bundle",
					scenario: "synthetic-pathological-nesting",
					source: "synthetic",
					version: "r4",
				},
				payload: createPathologicalBundle(),
			}),
			"utf8",
		);

		const resolved = await resolveBenchmarkInputs({
			inputPaths: [generatedFixturePath, rawFixturePath],
			repoRoot,
		});

		expect(resolved).toHaveLength(2);
		expect(resolved.map((input) => input.resourceType).sort()).toEqual([
			"Bundle",
			"Claim",
		]);
	});

	it("benchmarks official fixtures and writes result JSON", async () => {
		const tempRoot = mkdtempSync(join(tmpdir(), "fhir-zod-benchmark-run-"));
		tempRoots.push(tempRoot);
		const resultPath = join(tempRoot, "results.json");

		const results = await runBenchmarkSuite({
			inputPaths: [
				join(
					repoRoot,
					"tests/fixtures/r4/Bundle/bundle-response-simplesummary.json",
				),
			],
			iterations: 5,
			outPath: resultPath,
			repoRoot,
			warmupIterations: 1,
		});

		expect(results).toHaveLength(1);
		expect(results[0]?.resourceType).toBe("Bundle");
		expect(results[0]?.resourceCount).toBeGreaterThan(0);

		const resultDocument = JSON.parse(readFileSync(resultPath, "utf8")) as {
			results: Array<{ label: string }>;
		};
		expect(resultDocument.results).toHaveLength(1);
	});
});
