import { join } from "node:path";
import { fileURLToPath } from "node:url";

export const benchmarkVersions = ["stu3", "r4", "r4b", "r5"] as const;

export type BenchmarkVersion = (typeof benchmarkVersions)[number];

export type BenchmarkSource = "synthea" | "synthetic";

export type BenchmarkScenarioName =
	| "synthea-large-patient"
	| "synthea-bundle"
	| "synthea-deeply-contained"
	| "synthetic-pathological-nesting";

export type BenchmarkScenario = {
	defaultIterations: number;
	defaultOutputFileName: string;
	defaultWarmupIterations: number;
	description: string;
	name: BenchmarkScenarioName;
	recommendedResourceType: string;
	source: BenchmarkSource;
	version: BenchmarkVersion;
};

export type BenchmarkInputEnvelope = {
	format: "fhir-zod-benchmark-input";
	generatedAt: string;
	metadata: {
		notes?: string[];
		resourceType: string;
		scenario: BenchmarkScenarioName;
		source: BenchmarkSource;
		version: BenchmarkVersion;
	};
	payload: unknown;
};

const benchmarkDirectory = fileURLToPath(new URL(".", import.meta.url));
export const repoRoot = join(benchmarkDirectory, "..", "..");
export const defaultBenchmarkDataDir = join(
	repoRoot,
	".local",
	"benchmark-data",
);
export const defaultBenchmarkResultsDir = join(
	repoRoot,
	".local",
	"benchmark-results",
);

export const benchmarkScenarios: BenchmarkScenario[] = [
	{
		defaultIterations: 2_000,
		defaultOutputFileName: "synthea-large-patient.json",
		defaultWarmupIterations: 50,
		description:
			"Extract the largest Patient resource available from a Synthea export.",
		name: "synthea-large-patient",
		recommendedResourceType: "Patient",
		source: "synthea",
		version: "r4",
	},
	{
		defaultIterations: 500,
		defaultOutputFileName: "synthea-bundle.json",
		defaultWarmupIterations: 25,
		description: "Extract the largest Bundle available from a Synthea export.",
		name: "synthea-bundle",
		recommendedResourceType: "Bundle",
		source: "synthea",
		version: "r4",
	},
	{
		defaultIterations: 1_000,
		defaultOutputFileName: "synthea-deeply-contained.json",
		defaultWarmupIterations: 25,
		description:
			"Seed a deeply-contained Patient chain from the largest Patient in a Synthea export.",
		name: "synthea-deeply-contained",
		recommendedResourceType: "Patient",
		source: "synthea",
		version: "r4",
	},
	{
		defaultIterations: 500,
		defaultOutputFileName: "synthetic-pathological-nesting.json",
		defaultWarmupIterations: 25,
		description:
			"Synthetic Bundle with large entry counts and nested contained Patients to stress recursion.",
		name: "synthetic-pathological-nesting",
		recommendedResourceType: "Bundle",
		source: "synthetic",
		version: "r4",
	},
];

export function benchmarkDataPathForScenario(
	scenarioName: BenchmarkScenarioName,
): string {
	return join(defaultBenchmarkDataDir, `${scenarioName}.json`);
}

export function getBenchmarkScenario(
	scenarioName: BenchmarkScenarioName,
): BenchmarkScenario {
	const scenario = benchmarkScenarios.find((entry) => entry.name === scenarioName);
	if (!scenario) {
		throw new Error(`Unknown benchmark scenario "${scenarioName}"`);
	}
	return scenario;
}

export function isBenchmarkInputEnvelope(
	value: unknown,
): value is BenchmarkInputEnvelope {
	return (
		typeof value === "object" &&
		value !== null &&
		(value as { format?: unknown }).format === "fhir-zod-benchmark-input" &&
		"payload" in value &&
		"metadata" in value
	);
}
