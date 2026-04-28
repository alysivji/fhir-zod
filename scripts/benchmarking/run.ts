import {
	lstatSync,
	mkdirSync,
	readFileSync,
	readdirSync,
	writeFileSync,
} from "node:fs";
import { dirname, join, relative } from "node:path";
import { performance } from "node:perf_hooks";
import { pathToFileURL } from "node:url";
import { Command } from "commander";
import type { z } from "zod";

import {
	benchmarkScenarios,
	defaultBenchmarkResultsDir,
	isBenchmarkInputEnvelope,
	type BenchmarkVersion,
	repoRoot as defaultRepoRoot,
} from "./scenarios.ts";

type BenchmarkMetrics = {
	containedResourceCount: number;
	nestingDepth: number;
	payloadBytes: number;
	resourceCount: number;
};

type BenchmarkResult = BenchmarkMetrics & {
	averageMs: number;
	inputPath: string;
	iterations: number;
	label: string;
	opsPerSecond: number;
	resourceType: string;
	scenario: string | null;
	source: string;
	totalMs: number;
	version: BenchmarkVersion;
	warmupIterations: number;
};

type ResolvedBenchmarkInput = {
	inputPath: string;
	iterations: number;
	label: string;
	payload: unknown;
	resourceType: string;
	scenario: string | null;
	source: string;
	version: BenchmarkVersion;
	warmupIterations: number;
};

type RunBenchmarkSuiteOptions = {
	inputPaths: string[];
	iterations?: number;
	outPath?: string;
	repoRoot?: string;
	resourceType?: string;
	version?: BenchmarkVersion;
	warmupIterations?: number;
};

export async function runBenchmarkSuite({
	inputPaths,
	iterations,
	outPath,
	repoRoot = defaultRepoRoot,
	resourceType,
	version,
	warmupIterations,
}: RunBenchmarkSuiteOptions): Promise<BenchmarkResult[]> {
	const resolvedInputs = await resolveBenchmarkInputs({
		inputPaths,
		iterations,
		repoRoot,
		resourceType,
		version,
		warmupIterations,
	});

	const schemaCache = new Map<string, z.ZodTypeAny>();
	const results: BenchmarkResult[] = [];

	for (const input of resolvedInputs) {
		const schema = await loadSchema(schemaCache, input.version, input.resourceType);
		results.push(runSingleBenchmark(input, schema));
	}

	const outputPath =
		outPath ??
		join(
			defaultBenchmarkResultsDir,
			`benchmark-run-${new Date().toISOString().replaceAll(":", "-")}.json`,
		);
	writeBenchmarkResults(outputPath, results, repoRoot);
	printResults(results);

	return results;
}

export async function resolveBenchmarkInputs({
	inputPaths,
	iterations,
	repoRoot,
	resourceType,
	version,
	warmupIterations,
}: {
	inputPaths: string[];
	iterations?: number;
	repoRoot: string;
	resourceType?: string;
	version?: BenchmarkVersion;
	warmupIterations?: number;
}): Promise<ResolvedBenchmarkInput[]> {
	const expandedPaths = expandInputPaths(inputPaths).sort((left, right) =>
		left.localeCompare(right),
	);
	const inputs: ResolvedBenchmarkInput[] = [];

	for (const inputPath of expandedPaths) {
		const parsed = JSON.parse(readFileSync(inputPath, "utf8")) as unknown;
		const envelope = isBenchmarkInputEnvelope(parsed) ? parsed : null;
		const payload = envelope ? envelope.payload : parsed;
		const resolvedVersion =
			version ?? envelope?.metadata.version ?? inferVersionFromPath(inputPath) ?? "r4";
		const resolvedResourceType =
			resolveResourceType(resourceType, envelope?.metadata.resourceType, payload);
		const resolvedIterations =
			iterations ?? scenarioDefaultIterations(envelope?.metadata.scenario) ?? 1_000;
		const resolvedWarmup =
			warmupIterations ??
			scenarioDefaultWarmup(envelope?.metadata.scenario) ??
			25;

		inputs.push({
			inputPath,
			iterations: resolvedIterations,
			label:
				envelope?.metadata.scenario ??
				relative(repoRoot, inputPath) ??
				inputPath,
			payload,
			resourceType: resolvedResourceType,
			scenario: envelope?.metadata.scenario ?? null,
			source: envelope?.metadata.source ?? "raw-json",
			version: resolvedVersion,
			warmupIterations: resolvedWarmup,
		});
	}

	return inputs;
}

function expandInputPaths(inputPaths: string[]): string[] {
	return inputPaths.flatMap((inputPath) => collectJsonFiles(inputPath));
}

function collectJsonFiles(path: string): string[] {
	const stats = lstatSync(path);
	if (stats.isFile()) {
		if (!path.endsWith(".json")) {
			throw new Error(`Expected a JSON file or directory, got ${path}`);
		}
		return [path];
	}

	if (!stats.isDirectory()) {
		throw new Error(`Expected a JSON file or directory, got ${path}`);
	}

	const directoryEntries = readdirSync(path, {
		withFileTypes: true,
	});

	const files: string[] = [];
	for (const entry of directoryEntries.sort((left, right) =>
		left.name.localeCompare(right.name),
	)) {
		const fullPath = join(path, entry.name);
		if (entry.isDirectory()) {
			files.push(...collectJsonFiles(fullPath));
			continue;
		}
		if (entry.isFile() && entry.name.endsWith(".json")) {
			files.push(fullPath);
		}
	}

	return files;
}

function resolveResourceType(
	requestedResourceType: string | undefined,
	envelopeResourceType: string | undefined,
	payload: unknown,
): string {
	if (requestedResourceType && requestedResourceType !== "auto") {
		return requestedResourceType;
	}
	if (envelopeResourceType) {
		return envelopeResourceType;
	}
	if (
		typeof payload === "object" &&
		payload !== null &&
		typeof (payload as { resourceType?: unknown }).resourceType === "string"
	) {
		return (payload as { resourceType: string }).resourceType;
	}
	throw new Error(
		"Unable to determine the resource schema. Pass --schema <ResourceType> or provide a benchmark input envelope.",
	);
}

function inferVersionFromPath(path: string): BenchmarkVersion | null {
	const versions: BenchmarkVersion[] = ["stu3", "r4", "r4b", "r5"];
	return versions.find((version) => path.includes(`/${version}/`)) ?? null;
}

async function loadSchema(
	cache: Map<string, z.ZodTypeAny>,
	version: BenchmarkVersion,
	resourceType: string,
): Promise<z.ZodTypeAny> {
	const cacheKey = `${version}:${resourceType}`;
	const cached = cache.get(cacheKey);
	if (cached) {
		return cached;
	}

	const schemaName = `${resourceType}Schema`;
	const modulePaths = [
		new URL(`../../src/${version}/index.ts`, import.meta.url),
		new URL(`../../src/${version}/${resourceType}/index.ts`, import.meta.url),
	];

	for (const modulePath of modulePaths) {
		try {
			const exports = (await import(modulePath.href)) as Record<string, unknown>;
			const schema = exports[schemaName];
			if (schema && typeof schema === "object" && "safeParse" in schema) {
				cache.set(cacheKey, schema as z.ZodTypeAny);
				return schema as z.ZodTypeAny;
			}
		} catch {
			continue;
		}
	}

	throw new Error(`Unable to load ${schemaName} for ${version}.`);
}

function runSingleBenchmark(
	input: ResolvedBenchmarkInput,
	schema: z.ZodTypeAny,
): BenchmarkResult {
	for (let iteration = 0; iteration < input.warmupIterations; iteration += 1) {
		assertParseSuccess(schema, input.payload, input.label);
	}

	const startedAt = performance.now();
	for (let iteration = 0; iteration < input.iterations; iteration += 1) {
		assertParseSuccess(schema, input.payload, input.label);
	}
	const totalMs = performance.now() - startedAt;
	const metrics = collectMetrics(input.payload);

	return {
		...metrics,
		averageMs: totalMs / input.iterations,
		inputPath: input.inputPath,
		iterations: input.iterations,
		label: input.label,
		opsPerSecond: input.iterations / (totalMs / 1000),
		resourceType: input.resourceType,
		scenario: input.scenario,
		source: input.source,
		totalMs,
		version: input.version,
		warmupIterations: input.warmupIterations,
	};
}

function assertParseSuccess(
	schema: z.ZodTypeAny,
	payload: unknown,
	label: string,
): void {
	const result = schema.safeParse(payload);
	if (!result.success) {
		throw new Error(
			`${label} should parse during benchmarking: ${result.error.issues[0]?.message ?? "unknown validation failure"}`,
		);
	}
}

export function collectMetrics(payload: unknown): BenchmarkMetrics {
	const payloadBytes = Buffer.byteLength(JSON.stringify(payload), "utf8");
	const visited = collectResourceNodes(payload, 1);

	return {
		containedResourceCount: visited.reduce(
			(sum, resource) => sum + resource.containedCount,
			0,
		),
		nestingDepth: visited.reduce(
			(maximum, resource) => Math.max(maximum, resource.depth),
			0,
		),
		payloadBytes,
		resourceCount: visited.length,
	};
}

function collectResourceNodes(
	value: unknown,
	depth: number,
): Array<{ containedCount: number; depth: number }> {
	if (typeof value !== "object" || value === null) {
		return [];
	}

	const record = value as Record<string, unknown>;
	const resources: Array<{ containedCount: number; depth: number }> = [];
	const isResource = typeof record.resourceType === "string";

	if (isResource) {
		resources.push({
			containedCount: Array.isArray(record.contained) ? record.contained.length : 0,
			depth,
		});
	}

	for (const nestedValue of Object.values(record)) {
		if (Array.isArray(nestedValue)) {
			for (const arrayValue of nestedValue) {
				resources.push(
					...collectResourceNodes(arrayValue, isResource ? depth + 1 : depth),
				);
			}
			continue;
		}
		resources.push(
			...collectResourceNodes(nestedValue, isResource ? depth + 1 : depth),
		);
	}

	return resources;
}

function writeBenchmarkResults(
	outPath: string,
	results: BenchmarkResult[],
	repoRoot: string,
): void {
	mkdirSync(dirname(outPath), { recursive: true });
	writeFileSync(
		outPath,
		`${JSON.stringify(
			{
				benchmarkedAt: new Date().toISOString(),
				nodeVersion: process.version,
				results: results.map((result) => ({
					...result,
					inputPath: relative(repoRoot, result.inputPath) || result.inputPath,
				})),
			},
			null,
			2,
		)}\n`,
		"utf8",
	);
}

function printResults(results: BenchmarkResult[]): void {
	console.table(
		results.map((result) => ({
			"avg ms/parse": result.averageMs.toFixed(4),
			case: result.label,
			contained: result.containedResourceCount.toLocaleString("en-US"),
			"depth": result.nestingDepth.toLocaleString("en-US"),
			"ops/sec": result.opsPerSecond.toFixed(1),
			"bytes": result.payloadBytes.toLocaleString("en-US"),
			"resources": result.resourceCount.toLocaleString("en-US"),
			version: result.version,
		})),
	);
}

function scenarioDefaultIterations(scenarioName: string | undefined): number | null {
	if (!scenarioName) {
		return null;
	}
	return (
		benchmarkScenarios.find((scenario) => scenario.name === scenarioName)
			?.defaultIterations ?? null
	);
}

function scenarioDefaultWarmup(scenarioName: string | undefined): number | null {
	if (!scenarioName) {
		return null;
	}
	return (
		benchmarkScenarios.find((scenario) => scenario.name === scenarioName)
			?.defaultWarmupIterations ?? null
	);
}

function createProgram(): Command {
	return new Command()
		.name("npm run bench:run --")
		.description("Run validation benchmarks against raw FHIR JSON or benchmark inputs.")
		.argument("<inputs...>", "JSON files or directories to benchmark")
		.option("--version <version>", "FHIR version to use when inputs do not carry version metadata")
		.option("--schema <resourceType>", "schema resource type, or auto", "auto")
		.option("--iterations <count>", "parse iterations per input", parseInteger)
		.option("--warmup <count>", "warmup iterations per input", parseInteger)
		.option("--out <path>", "result JSON output path")
		.action(
			async (
				inputs: string[],
				options: {
					iterations?: number;
					out?: string;
					schema: string;
					version?: BenchmarkVersion;
					warmup?: number;
				},
			) => {
				await runBenchmarkSuite({
					inputPaths: inputs,
					iterations: options.iterations,
					outPath: options.out,
					repoRoot: defaultRepoRoot,
					resourceType: options.schema,
					version: options.version,
					warmupIterations: options.warmup,
				});
			},
		);
}

function parseInteger(value: string): number {
	const parsed = Number.parseInt(value, 10);
	if (!Number.isFinite(parsed) || parsed <= 0) {
		throw new Error(`Expected a positive integer, got ${value}`);
	}
	return parsed;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	await createProgram().parseAsync(process.argv);
}
