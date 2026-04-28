import { mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { spawn } from "node:child_process";
import { Command } from "commander";
import { pathToFileURL } from "node:url";

import {
	defaultBenchmarkDataDir,
	getBenchmarkScenario,
	type BenchmarkInputEnvelope,
	type BenchmarkScenario,
	type BenchmarkScenarioName,
	repoRoot,
	repoRoot as defaultRepoRoot,
} from "./scenarios.ts";

type GenerateScenarioFileOptions = {
	outPath: string;
	repoRoot?: string;
	scenarioName: BenchmarkScenarioName;
	syntheaCommand?: string;
};

type GenerateScenarioPayloadOptions = {
	repoRoot?: string;
	scenarioName: BenchmarkScenarioName;
	syntheaCommand?: string;
};

type ResourceEnvelope = {
	bytes: number;
	payload: Record<string, unknown>;
	sourcePath: string;
};

type GeneratedScenarioPayload = {
	metadataNotes: string[];
	payload: unknown;
};

export async function generateScenarioFile({
	outPath,
	repoRoot = defaultRepoRoot,
	scenarioName,
	syntheaCommand,
}: GenerateScenarioFileOptions): Promise<BenchmarkInputEnvelope> {
	const scenario = getBenchmarkScenario(scenarioName);
	const generated = await generateScenarioPayload({
		repoRoot,
		scenarioName,
		syntheaCommand,
	});

	const document: BenchmarkInputEnvelope = {
		format: "fhir-zod-benchmark-input",
		generatedAt: new Date().toISOString(),
		metadata: {
			notes: generated.metadataNotes,
			resourceType: scenario.recommendedResourceType,
			scenario: scenario.name,
			source: scenario.source,
			version: scenario.version,
		},
		payload: generated.payload,
	};

	mkdirSync(dirname(outPath), { recursive: true });
	writeFileSync(outPath, `${JSON.stringify(document, null, 2)}\n`, "utf8");
	return document;
}

export async function generateScenarioPayload({
	repoRoot = defaultRepoRoot,
	scenarioName,
	syntheaCommand,
}: GenerateScenarioPayloadOptions): Promise<GeneratedScenarioPayload> {
	const scenario = getBenchmarkScenario(scenarioName);

	if (scenario.source === "synthetic") {
		return {
			metadataNotes: [
				"Synthetic benchmark payload generated without external dependencies.",
			],
			payload: createPathologicalBundle(),
		};
	}

	const syntheaSeed = await loadSyntheaSeed({
		repoRoot,
		scenario,
		syntheaCommand,
	});

	switch (scenario.name) {
		case "synthea-large-patient": {
			const patient = selectLargestResource(syntheaSeed.resources, "Patient");
			return {
				metadataNotes: [
					`Selected largest Patient from ${syntheaSeed.resources.length} exported resource candidates.`,
					"Synthea output was generated in a temporary workspace for this benchmark input.",
				],
				payload: patient.payload,
			};
		}
		case "synthea-bundle": {
			const bundle = selectLargestResource(syntheaSeed.rootDocuments, "Bundle");
			return {
				metadataNotes: [
					`Selected largest Bundle from ${syntheaSeed.rootDocuments.length} exported JSON documents.`,
					"Synthea output was generated in a temporary workspace for this benchmark input.",
				],
				payload: bundle.payload,
			};
		}
		case "synthea-deeply-contained": {
			const patient = selectLargestResource(syntheaSeed.resources, "Patient");
			return {
				metadataNotes: [
					"Generated a deeply-contained Patient chain seeded from Synthea output.",
					"Synthea output was generated in a temporary workspace for this benchmark input.",
				],
				payload: createContainedPatientChain(40, patient.payload),
			};
		}
		default:
			throw new Error(`Unsupported benchmark scenario "${scenario.name}"`);
	}
}

export function createContainedPatientChain(
	depth: number,
	seedPatient?: Record<string, unknown>,
): Record<string, unknown> {
	const root = createPatientNode(0, seedPatient);
	let current = root;

	for (let index = 1; index < depth; index += 1) {
		const next = createPatientNode(index, seedPatient);
		current.contained = [next];
		current = next;
	}

	return root;
}

export function createPathologicalBundle(): Record<string, unknown> {
	return {
		entry: Array.from({ length: 120 }, (_, index) => ({
			fullUrl: `urn:uuid:bench-patient-${index}`,
			resource: createContainedPatientChain(12),
		})),
		resourceType: "Bundle",
		type: "collection",
	};
}

function createPatientNode(
	index: number,
	seedPatient?: Record<string, unknown>,
): Record<string, unknown> & { contained?: Record<string, unknown>[] } {
	const seeded = seedPatient ? sanitizeSeedPatient(seedPatient) : {};

	return {
		...seeded,
		active: true,
		gender: index % 2 === 0 ? "female" : "male",
		id: `bench-patient-${index}`,
		name: seeded.name ?? [{ family: `Family${index}`, given: [`Given${index}`] }],
		resourceType: "Patient",
	};
}

function sanitizeSeedPatient(
	seedPatient: Record<string, unknown>,
): Record<string, unknown> {
	const { contained, id, meta, resourceType, text, ...rest } = seedPatient;
	void contained;
	void id;
	void meta;
	void resourceType;
	void text;
	return rest;
}

async function loadSyntheaSeed({
	repoRoot,
	scenario,
	syntheaCommand,
}: {
	repoRoot: string;
	scenario: BenchmarkScenario;
	syntheaCommand?: string;
}): Promise<{
	resources: ResourceEnvelope[];
	rootDocuments: ResourceEnvelope[];
}> {
	const outputRoot = mkdtempSync(join(tmpdir(), "fhir-zod-synthea-"));

	try {
		await runSyntheaCommand({
			outputRoot,
			population: scenario.name === "synthea-bundle" ? 50 : 20,
			syntheaCommand,
		});

		const documents = collectJsonDocuments(outputRoot);
		const resources = documents.flatMap((document) =>
			extractResourceObjects(document.payload, document.sourcePath),
		);

		if (documents.length === 0 || resources.length === 0) {
			throw new Error(
				`Synthea did not produce any JSON FHIR resources under ${outputRoot}.`,
			);
		}

		return { resources, rootDocuments: documents };
	} catch (error) {
		throw error;
	} finally {
		rmSync(outputRoot, { force: true, recursive: true });
	}
}

async function runSyntheaCommand({
	outputRoot,
	population,
	syntheaCommand,
}: {
	outputRoot: string;
	population: number;
	syntheaCommand?: string;
}): Promise<void> {
	const command =
		syntheaCommand ??
		`${join(repoRoot, ".local", "bin", "synthea")} -p $FHIR_ZOD_BENCH_POPULATION`;

	await new Promise<void>((resolve, reject) => {
		const child = spawn(command, {
			cwd: outputRoot,
			env: {
				...process.env,
				FHIR_ZOD_BENCH_OUTPUT_DIR: outputRoot,
				FHIR_ZOD_BENCH_POPULATION: String(population),
			},
			shell: true,
			stdio: "inherit",
		});

		child.on("error", (error) => {
			reject(
				new Error(
					`Unable to start Synthea benchmark generation. Install a synthea CLI or pass --synthea-command. Original error: ${error.message}`,
				),
			);
		});

		child.on("exit", (code) => {
			if (code === 0) {
				resolve();
				return;
			}

			reject(
				new Error(
					`Synthea benchmark generation failed with exit code ${code ?? "unknown"}. Install the repo-local wrapper under .local/bin/synthea or pass --synthea-command with a command that writes JSON output beneath the working directory.`,
				),
			);
		});
	});
}

function collectJsonDocuments(root: string): ResourceEnvelope[] {
	const paths = collectJsonPaths(root);
	return paths.map((path) => {
		const payload = JSON.parse(readFileSync(path, "utf8")) as Record<string, unknown>;
		return {
			bytes: Buffer.byteLength(JSON.stringify(payload), "utf8"),
			payload,
			sourcePath: path,
		};
	});
}

function collectJsonPaths(root: string): string[] {
	const entries = readdirSync(root, { withFileTypes: true }).sort((left, right) =>
		left.name.localeCompare(right.name),
	);
	const paths: string[] = [];

	for (const entry of entries) {
		const fullPath = join(root, entry.name);
		if (entry.isDirectory()) {
			paths.push(...collectJsonPaths(fullPath));
			continue;
		}
		if (entry.isFile() && entry.name.endsWith(".json")) {
			paths.push(fullPath);
		}
	}

	return paths;
}

function extractResourceObjects(
	value: unknown,
	sourcePath: string,
): ResourceEnvelope[] {
	if (typeof value !== "object" || value === null) {
		return [];
	}

	const record = value as Record<string, unknown>;
	const results: ResourceEnvelope[] = [];

	if (typeof record.resourceType === "string") {
		results.push({
			bytes: Buffer.byteLength(JSON.stringify(record), "utf8"),
			payload: record,
			sourcePath,
		});
	}

	if (record.resourceType === "Bundle" && Array.isArray(record.entry)) {
		for (const entry of record.entry) {
			if (
				typeof entry === "object" &&
				entry !== null &&
				"resource" in entry
			) {
				results.push(
					...extractResourceObjects(
						(entry as { resource?: unknown }).resource,
						sourcePath,
					),
				);
			}
		}
	}

	return results;
}

function selectLargestResource(
	resources: ResourceEnvelope[],
	resourceType: string,
): ResourceEnvelope {
	const matching = resources
		.filter((resource) => resource.payload.resourceType === resourceType)
		.sort((left, right) => right.bytes - left.bytes);

	const largest = matching[0];
	if (!largest) {
		throw new Error(`No ${resourceType} resources were found in the Synthea export.`);
	}
	return largest;
}

function createProgram(): Command {
	return new Command()
		.name("npm run bench:generate --")
		.description("Generate internal benchmark inputs into .local/benchmark-data.")
		.requiredOption(
			"--scenario <name>",
			"benchmark scenario to generate",
			(value) => value as BenchmarkScenarioName,
		)
		.option(
			"--out <path>",
			"output path for the generated benchmark input",
			join(defaultBenchmarkDataDir, "benchmark-input.json"),
		)
		.option(
			"--synthea-command <command>",
			"command used to generate Synthea output; defaults to `.local/bin/synthea -p $FHIR_ZOD_BENCH_POPULATION`",
		)
		.action(async (options: {
			out: string;
			scenario: BenchmarkScenarioName;
			syntheaCommand?: string;
		}) => {
			const outputPath =
				options.out === join(defaultBenchmarkDataDir, "benchmark-input.json")
					? join(
							defaultBenchmarkDataDir,
							getBenchmarkScenario(options.scenario).defaultOutputFileName,
						)
					: options.out;
			const document = await generateScenarioFile({
				outPath: outputPath,
				repoRoot: defaultRepoRoot,
				scenarioName: options.scenario,
				syntheaCommand: options.syntheaCommand,
			});
			console.log(
				`Wrote ${document.metadata.scenario} benchmark input to ${relative(defaultRepoRoot, outputPath) || outputPath}`,
			);
		});
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	await createProgram().parseAsync(process.argv);
}
