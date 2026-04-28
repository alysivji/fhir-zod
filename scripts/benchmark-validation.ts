import { existsSync } from "node:fs";
import { join } from "node:path";

import {
	benchmarkDataPathForScenario,
	benchmarkScenarios,
	defaultBenchmarkDataDir,
	defaultBenchmarkResultsDir,
	repoRoot,
	type BenchmarkScenarioName,
} from "./benchmarking/scenarios.ts";
import { generateScenarioFile } from "./benchmarking/generate.ts";
import { runBenchmarkSuite } from "./benchmarking/run.ts";

async function main(): Promise<void> {
	const syntheticScenario: BenchmarkScenarioName = "synthetic-pathological-nesting";
	const syntheticOutputPath = benchmarkDataPathForScenario(syntheticScenario);

	await generateScenarioFile({
		outPath: syntheticOutputPath,
		repoRoot,
		scenarioName: syntheticScenario,
	});

	const defaultInputs = [
		join(
			repoRoot,
			"tests/fixtures/r4/Bundle/bundle-response-simplesummary.json",
		),
		join(
			repoRoot,
			"tests/fixtures/r4/Claim/claim-example-institutional-rich.json",
		),
		syntheticOutputPath,
	];

	const availableSyntheaInputs = benchmarkScenarios
		.filter((scenario) => scenario.source === "synthea")
		.map((scenario) => benchmarkDataPathForScenario(scenario.name))
		.filter((path) => existsSync(path));

	const missingSyntheaScenarios = benchmarkScenarios
		.filter((scenario) => scenario.source === "synthea")
		.map((scenario) => scenario.name)
		.filter((scenarioName) => !existsSync(benchmarkDataPathForScenario(scenarioName)));

	if (missingSyntheaScenarios.length > 0) {
		console.log(
			`Skipping ${missingSyntheaScenarios.join(", ")} because no generated inputs were found under ${defaultBenchmarkDataDir}. Run npm run bench:generate -- --scenario <name> to add them.`,
		);
	}

	await runBenchmarkSuite({
		inputPaths: [...defaultInputs, ...availableSyntheaInputs],
		outPath: join(
			defaultBenchmarkResultsDir,
			`benchmark-validation-${new Date().toISOString().replaceAll(":", "-")}.json`,
		),
		repoRoot,
	});
}

await main();
