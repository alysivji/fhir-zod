import {
	existsSync,
	mkdirSync,
	mkdtempSync,
	readdirSync,
	readFileSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { createCli } from "../scripts/cli.ts";
import {
	assertNotHumanVerification,
	collectPositionalArgs,
	decodeHtmlEntities,
	discoverJsonExamples,
	normalizeTextFileContent,
	parseFetchExamplesOptions,
	parseNumberFlag,
	runFetchExamplesCli,
	selectResourceNames,
} from "../scripts/fetch-examples.ts";
import {
	basenameFromUrl,
	ensureJsonSchema,
	ensurePackage,
	type FetchSpecDependencies,
	isPackageReady,
	loadManifests,
	runFetchSpecCli,
	type SpecManifest,
} from "../scripts/fetch-spec.ts";
import { writeSupportedResourcesDocs } from "../scripts/generate-supported-resources-doc.ts";
import { runGenerateCli } from "../scripts/generate.ts";
import { runInspectChoiceGroupsCli } from "../scripts/inspect-choice-groups.ts";
import { runListTargetsCli } from "../scripts/list-targets.ts";
import type { FhirRelease, TargetEntry } from "../src/generator/versions.ts";
import { MissingSpecPackageError } from "../src/spec/spec-cache.ts";
import { getR4SpecAvailability } from "./helpers/require-r4-spec.ts";

describe("developer CLI", () => {
	it("exposes the shared script commands and generated help", () => {
		const cli = createCli();
		const help = cli.helpInformation();
		const commandNames = cli.commands.map((command) => command.name());
		const nestedCommandNames = new Map(
			cli.commands.map((command) => [
				command.name(),
				command.commands.map((nestedCommand) => nestedCommand.name()),
			]),
		);

		expect(help).toContain("fhir-zod developer tools");
		expect(commandNames).toContain("generate");
		expect(commandNames).toContain("fetch-spec");
		expect(nestedCommandNames.get("spec")).toContain("fetch");
		expect(nestedCommandNames.get("examples")).toContain("fetch");
		expect(nestedCommandNames.get("targets")).toContain("list");
	});
});

function manifest(overrides: Partial<SpecManifest> = {}): SpecManifest {
	return {
		fhirVersion: "4.0.1",
		packageName: "hl7.fhir.r4.core",
		packageRoot: ".local/spec-cache/r4/package",
		packageVersion: "4.0.1",
		sourceUrl: "https://example.test/package.tgz",
		structureDefinitionGlob: "StructureDefinition-*.json",
		...overrides,
	};
}

function fakeRelease(id = "r4"): FhirRelease {
	const entries: TargetEntry[] = [
		{
			abstract: true,
			baseDefinition: null,
			category: "abstract-whitelist",
			description: null,
			kind: "complex-type",
			name: "Element",
			shouldGenerate: true,
			type: "Element",
			url: null,
		},
		{
			abstract: false,
			baseDefinition: null,
			category: "core-resource",
			description: "Demographics and other administrative information about an individual.",
			kind: "resource",
			name: "Patient",
			shouldGenerate: true,
			type: "Patient",
			url: null,
		},
		{
			abstract: false,
			baseDefinition: null,
			category: "profile-resource",
			description: null,
			kind: "resource",
			name: "ExampleProfile",
			shouldGenerate: false,
			type: "Patient",
			url: null,
		},
		{
			abstract: false,
			baseDefinition: null,
			category: "other",
			description: null,
			kind: "complex-type",
			name: "Address",
			shouldGenerate: false,
			type: "Address",
			url: null,
		},
	];

	return {
		abstractTargetNames: ["Element"],
		exampleResourcePageUrl: (resourceName: string) =>
			`https://example.test/${id}/${resourceName.toLowerCase()}-examples.html`,
		generate: () => ({ files: [`src/${id}/Patient.ts`] }),
		id,
		label: id.toUpperCase(),
		listCoreResourceNames: () => ["Patient", "Observation"],
		loadTargetEntries: () => entries,
		nestedBackboneTypeCodes: ["Element"],
		resourcePageUrl: (resourceName: string) =>
			`https://example.test/${id}/${resourceName.toLowerCase()}.html`,
		specHomeUrl: () => `https://example.test/${id}`,
		summarizeTargets: () => ({
			abstractGenerationWhitelist: ["Element"],
			concreteResourceCount: 2,
			coreResourceCount: 1,
			generationTargetCount: 2,
			profileResourceCount: 1,
		}),
	} as unknown as FhirRelease;
}

describe("list-targets script", () => {
	it("defaults to R4, supports wrappers, filters, and names-only output", () => {
		const logs: string[] = [];
		const getRelease = (version: string) =>
			version === "r4" || version === "r4b" ? fakeRelease(version) : null;

		runListTargetsCli(undefined, {
			argv: ["--summary"],
			getRelease,
			log: (message) => logs.push(message),
		});
		expect(JSON.parse(logs.at(-1) ?? "{}")).toMatchObject({
			outputMode: "summary",
			version: "r4",
		});

		runListTargetsCli("r4b", {
			argv: ["--names-only", "--category", "core-resource"],
			getRelease,
			log: (message) => logs.push(message),
		});
		expect(logs.at(-1)).toBe("Patient");

		runListTargetsCli(undefined, {
			argv: ["r4", "--category=not-real"],
			getRelease,
			log: (message) => logs.push(message),
		});
		expect(JSON.parse(logs.at(-1) ?? "{}")).toMatchObject({
			categoryFilter: "all",
			filteredCount: 4,
		});
	});

	it("throws a clear error for unknown versions", () => {
		expect(() =>
			runListTargetsCli(undefined, {
				argv: ["r6"],
				getRelease: () => null,
				log: () => undefined,
			}),
		).toThrow('Unknown target inventory version "r6"');
	});
});

describe("fetch-spec script", () => {
	it("selects R4 by default, all manifests, and explicit versions when requested", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-spec-"));
		for (const version of ["r4", "r4b", "r5", "stu3"]) {
			const specDir = join(repoRoot, "src", "spec", version);
			mkdirSync(specDir, { recursive: true });
			writeFileSync(
				join(specDir, "manifest.json"),
				JSON.stringify(
					manifest({ packageRoot: `.local/spec-cache/${version}/package` }),
				),
				"utf8",
			);
		}

		expect(loadManifests({ repoRoot }).map((item) => item.version)).toEqual([
			"r4",
		]);
		expect(
			loadManifests({ repoRoot, requestedVersions: ["all"] }).map(
				(item) => item.version,
			),
		).toEqual(["r4", "r4b", "r5", "stu3"]);
		expect(
			loadManifests({ repoRoot, requestedVersions: ["r5"] }).map(
				(item) => item.version,
			),
		).toEqual(["r5"]);
	});

	it("detects package readiness from Patient StructureDefinition and JSON schema output", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-spec-"));
		const packageDir = join(repoRoot, ".local", "spec-cache", "r4", "package");
		mkdirSync(packageDir, { recursive: true });

		expect(isPackageReady(packageDir, manifest(), { repoRoot })).toBe(false);
		writeFileSync(
			join(packageDir, "StructureDefinition-Patient.json"),
			"{}",
			"utf8",
		);
		expect(isPackageReady(packageDir, manifest(), { repoRoot })).toBe(true);
		expect(
			isPackageReady(
				packageDir,
				manifest({ jsonSchemaOutputPath: ".local/schema/fhir.schema.json" }),
				{ repoRoot },
			),
		).toBe(false);
	});

	it("uses cached JSON schema and builds archive names from URLs", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-spec-"));
		const outputPath = join(repoRoot, ".local", "schema", "fhir.schema.json");
		mkdirSync(join(repoRoot, ".local", "schema"), { recursive: true });
		writeFileSync(outputPath, "{}", "utf8");
		const execCalls: string[] = [];

		ensureJsonSchema(
			join(repoRoot, ".local", "downloads"),
			manifest({
				jsonSchemaArchiveEntry: "fhir.schema.json",
				jsonSchemaOutputPath: ".local/schema/fhir.schema.json",
				jsonSchemaSourceUrl: "https://example.test/path/fhir-json.zip",
			}),
			{
				deps: {
					...makeFetchSpecDeps(execCalls),
				},
				repoRoot,
			},
		);

		expect(execCalls).toEqual([]);
		expect(basenameFromUrl("https://example.test/path/fhir-json.zip")).toBe(
			"fhir-json.zip",
		);
	});

	it("downloads package archives only on cache misses", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-spec-"));
		const execCalls: string[] = [];
		const deps = makeFetchSpecDeps(execCalls);

		ensurePackage("r4", "manifest.json", manifest(), { deps, repoRoot });

		expect(execCalls).toEqual(["curl", "tar"]);
	});

	it("runs the CLI through injected dependencies", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-spec-"));
		const specDir = join(repoRoot, "src", "spec", "r4");
		const packageDir = join(repoRoot, ".local", "spec-cache", "r4", "package");
		const execCalls: string[] = [];
		mkdirSync(specDir, { recursive: true });
		mkdirSync(packageDir, { recursive: true });
		writeFileSync(
			join(packageDir, "StructureDefinition-Patient.json"),
			"{}",
			"utf8",
		);
		writeFileSync(
			join(specDir, "manifest.json"),
			JSON.stringify(manifest()),
			"utf8",
		);

		runFetchSpecCli([], {
			deps: makeFetchSpecDeps(execCalls),
			repoRoot,
		});

		expect(execCalls).toEqual([]);
	});
});

describe("fetch-examples script", () => {
	it("parses args, flags, and invalid numeric values", () => {
		const deps = { getRelease: () => fakeRelease() };

		expect(
			parseFetchExamplesOptions(
				["r4", "patient", "--force", "--delay-ms=0", "--limit", "1"],
				deps,
			),
		).toMatchObject({
			delayMs: 0,
			forceRefresh: true,
			limit: 1,
			requestedResources: ["Patient"],
			version: "r4",
		});
		expect(collectPositionalArgs(["r4", "--limit", "1", "patient"])).toEqual([
			"r4",
			"patient",
		]);
		expect(() => parseNumberFlag(["--limit=no"], "--limit")).toThrow(
			"Expected --limit to be a non-negative integer",
		);
	});

	it("discovers JSON links and decodes HTML entities", () => {
		const release = fakeRelease();
		const links = discoverJsonExamples(
			release,
			"Patient",
			'<a href="patient-example.json.html">one</a><a href="/Patient-two.json.html?x=1&amp;y=2">two</a>',
		);

		expect(links.map((link) => link.filename)).toEqual([
			"patient-example.json",
		]);
		expect(decodeHtmlEntities("a&amp;b&quot;c&#39;d&lt;e&gt;")).toBe(
			"a&b\"c'd<e>",
		);
		expect(normalizeTextFileContent("x\r\n\n")).toBe("x\n");
	});

	it("validates resource names and human-verification pages", () => {
		expect(selectResourceNames(["patient"], ["Patient"], "r4")).toEqual([
			"Patient",
		]);
		expect(() => selectResourceNames(["Missing"], ["Patient"], "r4")).toThrow(
			"Unknown R4 resource",
		);
		expect(() =>
			assertNotHumanVerification(
				"<title>Human Verification</title>",
				"https://example.test",
			),
		).toThrow("Human verification blocked automated fetches");
	});

	it("leaves fixture dirs untouched when no examples are discovered", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-examples-"));
		const logs: string[] = [];
		const warnings: string[] = [];
		const rmCalls: string[] = [];

		runFetchExamplesCli(["r4", "Patient", "--force", "--delay-ms=0"], {
			deps: {
				execFileSync: (() => "<html>No examples</html>") as never,
				getRelease: () => fakeRelease(),
				log: (message) => logs.push(message),
				rmSync: (path) => rmCalls.push(String(path)),
				warn: (message) => warnings.push(message),
			},
			repoRoot,
		});

		expect(rmCalls).toEqual([]);
		expect(warnings.join("\n")).toContain("No JSON examples discovered");
		expect(logs.at(-1)).toContain("noExamples=1");
	});

	it("clears and rewrites fixture dirs when examples are fetched", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-fetch-examples-"));
		const responses = [
			'<a href="patient-example.json.html">example</a>',
			'{"resourceType":"Patient"}',
		];

		runFetchExamplesCli(["r4", "Patient", "--force", "--delay-ms=0"], {
			deps: {
				execFileSync: (() => responses.shift() ?? "") as never,
				getRelease: () => fakeRelease(),
				log: () => undefined,
				warn: () => undefined,
			},
			repoRoot,
		});

		expect(
			readFileSync(
				join(
					repoRoot,
					"tests",
					"fixtures",
					"r4",
					"Patient",
					"patient-example.json",
				),
				"utf8",
			),
		).toBe('{"resourceType":"Patient"}\n');
	});
});

describe("generate script", () => {
	it("defaults to R4, accepts multiple versions, logs files, and rejects unknown versions", () => {
		const requestedVersions: string[] = [];
		const logs: string[] = [];
		const getRelease = (version: string) => {
			requestedVersions.push(version);
			return version === "r6" ? null : fakeRelease(version);
		};

		runGenerateCli([], { getRelease, log: (message) => logs.push(message) });
		runGenerateCli(["r4b", "r5"], {
			getRelease,
			log: (message) => logs.push(message),
		});

		expect(requestedVersions).toEqual(["r4", "r4b", "r5"]);
		expect(logs).toEqual([
			"generated src/r4/Patient.ts",
			"generated src/r4b/Patient.ts",
			"generated src/r5/Patient.ts",
		]);
		expect(() => runGenerateCli(["r6"], { getRelease })).toThrow(
			'Unknown generation target "r6"',
		);
	});
});

describe("generate-supported-resources-doc script", () => {
	it("writes release-aware resource docs and falls back to committed generated output", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-docs-"));
		const docsDir = join(repoRoot, "docs", "versions");
		const r4PatientDir = join(repoRoot, "src", "r4", "Patient");
		const r4ObservationDir = join(repoRoot, "src", "r4", "Observation");
		mkdirSync(docsDir, { recursive: true });
		mkdirSync(r4PatientDir, { recursive: true });
		mkdirSync(r4ObservationDir, { recursive: true });
		writeFileSync(join(r4PatientDir, "index.ts"), "", "utf8");
		writeFileSync(join(r4ObservationDir, "index.ts"), "", "utf8");
		writeFileSync(
			join(r4PatientDir, "Patient.ts"),
			'/** Demographics and other administrative information about an individual. */\nexport interface Patient {}\n',
			"utf8",
		);
		writeFileSync(
			join(r4ObservationDir, "Observation.ts"),
			'/** Measurements and simple assertions. */\nexport interface Observation {}\n',
			"utf8",
		);

		const outputPaths = writeSupportedResourcesDocs({
			getRelease: (version) => {
				if (version !== "r4") {
					return null;
				}

				return {
					abstractTargetNames: ["Element"],
					exampleResourcePageUrl: () => "https://example.test/r4/patient-examples.html",
					generate: () => ({ files: [] }),
					id: "r4",
					label: "R4",
					loadTargetEntries: () => {
						throw new MissingSpecPackageError({
							packageRoot: join(repoRoot, ".local", "spec-cache", "r4", "package"),
							version: "r4",
						});
					},
					nestedBackboneTypeCodes: ["Element"],
					resourcePageUrl: (resourceName: string) =>
						`https://example.test/r4/${resourceName.toLowerCase()}.html`,
					specHomeUrl: () => "https://example.test/r4",
					summarizeTargets: () => ({
						abstractGenerationWhitelist: ["Element"],
						concreteResourceCount: 2,
						coreResourceCount: 2,
						generationTargetCount: 2,
						profileResourceCount: 0,
					}),
				} as unknown as FhirRelease;
			},
			outputDir: docsDir,
			repoRoot,
			versions: ["r4"],
		});

		expect(outputPaths).toEqual([
			join(docsDir, "index.md"),
			join(docsDir, "r4.md"),
		]);

		const landingContent = readFileSync(join(docsDir, "index.md"), "utf8");
		const releaseContent = readFileSync(join(docsDir, "r4.md"), "utf8");
		expect(landingContent).toContain("# FHIR Versions & Resources");
		expect(landingContent).toContain("- [R4](/versions/r4)");
		expect(releaseContent).toContain("# R4 Supported Resources");
		expect(releaseContent).toContain("Inventory source for this build: committed generated output fallback");
		expect(releaseContent).toContain("| Resource | Import path | HL7 docs |");
		expect(releaseContent).toContain(
			'| <span class="resource-name-tooltip" tabindex="0">Patient<span class="resource-name-tooltip__bubble">Demographics and other administrative information about an individual.</span></span> | `fhir-zod/r4/Patient` | [HL7](https://example.test/r4/patient.html) |',
		);
		expect(releaseContent).toContain(
			'| <span class="resource-name-tooltip" tabindex="0">Observation<span class="resource-name-tooltip__bubble">Measurements and simple assertions.</span></span> | `fhir-zod/r4/Observation` | [HL7](https://example.test/r4/observation.html) |',
		);
		expect(releaseContent).not.toContain("Generated core resources on this branch");
	});

	it("strips inline markdown links from resource descriptions", () => {
		const repoRoot = mkdtempSync(join(tmpdir(), "fhir-zod-docs-"));
		const docsDir = join(repoRoot, "docs", "versions");
		mkdirSync(docsDir, { recursive: true });

		writeSupportedResourcesDocs({
			getRelease: (version) => {
				if (version !== "r4") {
					return null;
				}

				return {
					abstractTargetNames: ["Element"],
					exampleResourcePageUrl: () => "https://example.test/r4/valueset-examples.html",
					generate: () => ({ files: [] }),
					id: "r4",
					label: "R4",
					loadTargetEntries: () => [
						{
							abstract: false,
							baseDefinition: null,
							category: "core-resource",
							description:
								"A ValueSet links [[[CodeSystem]]] usage in [coded elements](terminologies.html).",
							kind: "resource",
							name: "ValueSet",
							shouldGenerate: true,
							type: "ValueSet",
							url: null,
						},
					],
					nestedBackboneTypeCodes: ["Element"],
					resourcePageUrl: (resourceName: string) =>
						`https://example.test/r4/${resourceName.toLowerCase()}.html`,
					specHomeUrl: () => "https://example.test/r4",
					summarizeTargets: () => ({
						abstractGenerationWhitelist: ["Element"],
						concreteResourceCount: 1,
						coreResourceCount: 1,
						generationTargetCount: 1,
						profileResourceCount: 0,
					}),
				} as unknown as FhirRelease;
			},
			outputDir: docsDir,
			repoRoot,
			versions: ["r4"],
		});

		const releaseContent = readFileSync(join(docsDir, "r4.md"), "utf8");
		expect(releaseContent).toContain(
			'| <span class="resource-name-tooltip" tabindex="0">ValueSet<span class="resource-name-tooltip__bubble">A ValueSet links CodeSystem usage in coded elements.</span></span> | `fhir-zod/r4/ValueSet` | [HL7](https://example.test/r4/valueset.html) |',
		);
		expect(releaseContent).not.toContain("terminologies.html");
	});
});

const r4SpecAvailability = getR4SpecAvailability();
const describeInspectChoiceGroups = r4SpecAvailability.available
	? describe
	: describe.skip;

describeInspectChoiceGroups(
	r4SpecAvailability.available
		? "inspect-choice-groups script"
		: `inspect-choice-groups script (${r4SpecAvailability.reason})`,
	() => {
		it("prints filtered R4 choice groups with stable field ordering", () => {
			const logs: string[] = [];

			runInspectChoiceGroupsCli(["Observation"], {
				log: (message) => logs.push(message),
			});

			expect(logs.slice(0, 4)).toEqual([
				"Observation",
				"  effective[x]: effectiveDateTime, effectiveInstant, effectivePeriod, effectiveTiming",
				"  value[x]: valueBoolean, valueCodeableConcept, valueDateTime, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueSampledData, valueString, valueTime",
				"Observation_Component",
			]);
		});
	},
);

function makeFetchSpecDeps(execCalls: string[]): FetchSpecDependencies {
	return {
		execFileSync: ((command) => {
			execCalls.push(String(command));
			return Buffer.from("");
		}) as FetchSpecDependencies["execFileSync"],
		existsSync,
		mkdirSync,
		readdirSync,
		readFileSync,
		rmSync,
	};
}
